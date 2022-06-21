import { useState } from "react";
import { useAuthContext } from "../hooks/useAuthContext";
import { useNavigate } from "react-router-dom";

import { db } from "../firebase/config";
import { addDoc, collection } from "firebase/firestore";

import { DatePicker } from "@mui/x-date-pickers";

import {
  FormControl,
  MenuItem,
  Checkbox,
  TextField,
  Box,
  Typography,
  Button,
} from "@mui/material";

const categories = [
  { value: "Course", label: "Course" },
  { value: "Repo", label: "Repo" },
  { value: "App", label: "App" },
  { value: "Post", label: "Post" },
  { value: "Resource", label: "Resource" },
];

export default function Create() {
  const [selectedDate, setSelectedDate] = useState(null);
  const current = new Date()
  const dateToday = `${current.getMonth()}/${current.getDate()}/${current.getFullYear()}`

  return (
    <Box>
      <Typography variant="h2" component="h2">
        Create {dateToday}
      </Typography>
      <FormControl fullWidth>
        <TextField id="outlined-basic" label="Title" variant="outlined" />
      </FormControl>
      <FormControl fullWidth>
        <TextField id="outlined-basic" label="Link" variant="outlined" />
      </FormControl>
      <FormControl>
        <DatePicker
          label="Date"
          renderInput={(params) => <TextField {...params} />}
          value={selectedDate}
          onChange={(newValue) => setSelectedDate(newValue)}
        />
      </FormControl>
      <Button onClick={() => setSelectedDate(dateToday)}>Today</Button>
      <FormControl fullWidth>
        <Checkbox />
      </FormControl>
      <FormControl fullWidth>
        <TextField select defaultValue="" label="Category">
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
        />
      </FormControl>
      <Button></Button>
    </Box>
  );
}
