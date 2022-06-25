// firebase functions
import { updateDoc, doc } from "firebase/firestore";
import { db } from "../firebase/config";

// hooks
import { useState } from "react";

// mui
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import Stack from "@mui/material/Stack";
import MenuItem from "@mui/material/MenuItem";
import styled from "@mui/system/styled";

const fields = [
  { value: "Title", label: "Title" },
  { value: "Notes", label: "Notes" },
  { value: "Link", label: "Link" },
  { value: "Date", label: "Date" },
  { value: "Category", label: "Category" },
];

const categories = [
  { value: "Course", label: "Course" },
  { value: "Repo", label: "Repo" },
  { value: "App", label: "App" },
  { value: "Post", label: "Post" },
  { value: "Resource", label: "Resource" },
];

export default function UpdateForm({ setShowUpdateForm, act }) {
  const [chosenField, setChosenField] = useState(null);
  const [newTitle, setNewTitle] = useState();
  const [newNotes, setNewNotes] = useState();
  const [newLink, setNewLink] = useState();
  const [newDate, setNewDate] = useState();
  const [newCategory, setNewCategory] = useState();

  const actRef = doc(db, "acts", act.id);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (chosenField === "Category") {
      await updateDoc(actRef, { category: newCategory });
    }
    if (chosenField === "Title") {
      await updateDoc(actRef, { title: newTitle });
    }
    if (chosenField === "Notes") {
      await updateDoc(actRef, { notes: newNotes });
    }
    if (chosenField === "Link") {
      await updateDoc(actRef, { hyplink: newLink });
    }
    if (chosenField === "Date") {
      await updateDoc(actRef, { selectedDate: newDate });
    }
  };

  const DateInput = styled("input")({
    background: "transparent",
    borderRadius: "4px",
    padding: "14px",
    outline: "none",
    border: "0.7px solid #c4c4c4",
    fontSize: "1rem",
    color: "#717171",
  });

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Stack gap={2}>
          <FormControl>
            <TextField
              size="small"
              select
              defaultValue=""
              label="which field?"
              onChange={(e) => setChosenField(e.target.value)}
            >
              {fields.map((field) => (
                <MenuItem key={field.value} value={field.value}>
                  {field.label}
                </MenuItem>
              ))}
            </TextField>
          </FormControl>
          {chosenField === "Title" && (
            <FormControl>
              <TextField
                label="Title"
                defaultValue={act.title}
                onChange={(e) => {
                  setNewTitle(e.target.value);
                }}
              />
            </FormControl>
          )}
          {chosenField === "Notes" && (
            <FormControl>
              <TextField
                multiline
                rows={3}
                defaultValue={act.notes}
                label="Notes"
                size="small"
                onChange={(e) => setNewNotes(e.target.value)}
              />
            </FormControl>
          )}
          {chosenField === "Link" && (
            <FormControl>
              <TextField
                label="Link"
                defaultValue={act.hyplink}
                onChange={(e) => setNewLink(e.target.value)}
              />
            </FormControl>
          )}
          {chosenField === "Date" && (
            <FormControl>
              <DateInput
                type="date"
                onChange={(e) => setNewDate(e.target.value)}
              />
            </FormControl>
          )}
          {chosenField === "Category" && (
            <FormControl>
              <TextField
                label="Category"
                select
                defaultValue=""
                onChange={(e) => setNewCategory(e.target.value)}
              >
                {categories.map((item) => (
                  <MenuItem key={item.value} value={item.value}>
                    {item.label}
                  </MenuItem>
                ))}
              </TextField>
            </FormControl>
          )}
        </Stack>
        <Box>
          <Button type="submit">Update</Button>
          <Button onClick={() => setShowUpdateForm(false)}>cancel</Button>
        </Box>
      </form>
    </div>
  );
}
