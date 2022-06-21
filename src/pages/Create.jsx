import { useState } from "react";
import { useAuthContext } from "../hooks/useAuthContext";
import { useNavigate } from "react-router-dom";

import { db } from "../firebase/config";
import { addDoc, collection } from "firebase/firestore";

import {
  FormControl,
  MenuItem,
  Checkbox,
  TextField,
  Box,
  Typography,
  Button
} from "@mui/material";

const categories = [
  { value: "Course", label: "Course" },
  { value: "Repo", label: "Repo" },
  { value: "App", label: "App" },
  { value: "Post", label: "Post" },
  { value: "Resource", label: "Resource" },
];

export default function Create() {
  return (
    <Box>
      <Typography variant="h2" component="h2">
        Create
      </Typography>
      <FormControl fullWidth>
        <TextField id="outlined-basic" label="Title" variant="outlined" />
      </FormControl>
      <FormControl fullWidth>
        <TextField id="outlined-basic" label="Link" variant="outlined" />
      </FormControl>
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
