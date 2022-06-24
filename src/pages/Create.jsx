// hooks
import { useState } from "react";
import { useAuthContext } from "../hooks/useAuthContext";
import { useNavigate } from "react-router-dom";

// firebase
import { db } from "../firebase/config";
import { addDoc, collection } from "firebase/firestore";

// MUI
import { styled } from "@mui/system";
import {
  FormControl,
  MenuItem,
  Checkbox,
  TextField,
  Grid,
  Typography,
  Button,
  FormControlLabel,
  Container,
  Box,
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

  // form value states
  const [selectedDate, setSelectedDate] = useState("");
  const [notes, setNotes] = useState("");
  const [hyplink, setHyplink] = useState("");
  const [category, setCategory] = useState("");
  const [completed, setCompleted] = useState(false);
  const [title, setTitle] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    // telling backend which database to store in
    const ref = collection(db, "acts");

    // addDoc is a firebase method for submitting data
    await addDoc(ref, {
      title,
      notes,
      hyplink,
      selectedDate,
      category,
      completed,
      uid: user.uid,
    });
    navigate("/");
  };

  const handleCheckbox = () => {
    setCompleted(!completed);
  };

  const handleSelectChange = (e) => {
    setCategory(e.target.value);
  };

  // customized date input
  const DateInput = styled("input")({
    background: "transparent",
    borderRadius: "4px",
    padding: "14px",
    outline: "none",
    border: "0.7px solid #c4c4c4",
    fontSize: "1rem",
    color: "#717171",
    "&:focus": {},
  });

  return (
    <>
      <Container maxWidth="sm">
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
              <Box sx={{ display: "flex" }}>
                <DateInput
                  type="date"
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                />
                <Box sx={{ display: "flex", alignItems: "center", ml: 3 }}>
                  Date
                </Box>
              </Box>
            </FormControl>
            <FormControl fullWidth>
              <FormControlLabel
                color="primary.dark"
                control={
                  <Checkbox onChange={handleCheckbox} value={completed} />
                }
                label="Completed"
              />
            </FormControl>
            <FormControl fullWidth>
              <TextField
                select
                defaultValue=""
                label="Category"
                value={category.value}
                onChange={handleSelectChange}
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
                rows={4}
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
              />
            </FormControl>
            <Button type="submit">Submit</Button>
          </Grid>
        </form>
      </Container>
    </>
  );
}
