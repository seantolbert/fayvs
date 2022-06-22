// hooks
import { useState } from "react";
import { useAuthContext } from "../hooks/useAuthContext";
import { useNavigate } from "react-router-dom";

// firebase
import { db } from "../firebase/config";
import { addDoc, collection } from "firebase/firestore";

// MUI
import { DatePicker } from "@mui/x-date-pickers";
import {
  FormControl,
  MenuItem,
  Checkbox,
  TextField,
  Grid,
  Typography,
  Button,
  FormControlLabel,
} from "@mui/material";

// categories for the form select
const categories = [
  { value: "Course", label: "Course" },
  { value: "Repo", label: "Repo" },
  { value: "App", label: "App" },
  { value: "Post", label: "Post" },
  { value: "Resource", label: "Resource" },
];

export default function Create() {
  // react-router-dom v6 useHistory equivalent
  const navigate = useNavigate();

  // user context
  const { user } = useAuthContext();

  // form values
  const [selectedDate, setSelectedDate] = useState(null);
  const [notes, setNotes] = useState("");
  const [hyplink, setHyplink] = useState("");
  const [category, setCategory] = useState("");
  const [completed, setCompleted] = useState(false);
  const [title, setTitle] = useState("");

  // today's date button
  const current = new Date();
  const dateToday = `${current.getMonth()}/${current.getDate()}/${current.getFullYear()}`;

  const handleSubmit = async (e) => {
    e.preventDefault();
    // telling backend which database to store in
    const ref = collection(db, "acts")

    // addDoc is a firebase method for submitting data
    await addDoc(ref, {
      title, notes, hyplink, selectedDate, category, completed, uid: user.uid
    })
    console.log(
      title,
      notes,
      hyplink,
      selectedDate,
      category,
      completed,
      user.uid
    );
    navigate("/");
  };

  const handleCheckbox = () => {
    setCompleted(!completed);
  };

  const handleSelecteChange = (e) => {
    setCategory(e.target.value);
  };

  return (
    <>
      <Typography variant="h2" component="h2">
        Create
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container gap={4}>
          <FormControl fullWidth>
            <TextField
              id="outlined-basic"
              label="Title"
              variant="outlined"
              onChange={(e) => setTitle(e.target.value)}
              value={title}
            />
          </FormControl>
          <FormControl fullWidth>
            <TextField
              id="outlined-basic"
              label="Link"
              variant="outlined"
              value={hyplink}
              onChange={(e) => setHyplink(e.target.value)}
            />
          </FormControl>
          <FormControl>
            {/* https://www.youtube.com/watch?v=OpaT8jLB-hc&t=266s&ab_channel=Codevolution great tutorial for MUI datepicker */}
            <DatePicker
              label="Date"
              renderInput={(params) => <TextField {...params} />}
              value={selectedDate}
              onChange={(newValue) => setSelectedDate(newValue)}
            />
          </FormControl>
          <Button onClick={() => setSelectedDate(dateToday)}>Today</Button>
          <FormControl fullWidth>
            <FormControlLabel
              control={<Checkbox onChange={handleCheckbox} value={completed} />}
              label="completed"
            />
          </FormControl>
          <FormControl fullWidth>
            <TextField
              select
              defaultValue=""
              label="Category"
              value={category.value}
              onChange={handleSelecteChange}
            >
              {categories.map((item) => (
                <MenuItem key={item.value} value={item.value}>
                  {item.label}
                </MenuItem>
              ))}
            </TextField>
          </FormControl>
          <FormControl fullWidth>
            <TextField
              multiline
              id="outlined-basic"
              label="Details"
              variant="outlined"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
            />
          </FormControl>
          <Button type="submit">Submit</Button>
        </Grid>
      </form>
    </>
  );
}
