import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import Stack from "@mui/material/Stack";
import MenuItem from "@mui/material/MenuItem";
import { useState } from "react";
import { styled } from "@mui/system";

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

  const handleSubmit = () => {};

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
                value={newTitle}
                defaultValue={act.title}
              />
            </FormControl>
          )}
          {chosenField === "Notes" && (
            <FormControl>
              <TextField
                multiline
                rows={3}
                value={newNotes}
                defaultValue={act.notes}
                label="Notes"
              />
            </FormControl>
          )}
          {chosenField === "Link" && (
            <FormControl>
              <TextField
                label="Link"
                value={newLink}
                defaultValue={act.hyplink}
              />
            </FormControl>
          )}
          {chosenField === "Date" && (
            <FormControl>
              <DateInput type="date" value={newDate} />
            </FormControl>
          )}
          {chosenField === "Category" && (
            <FormControl>
              <TextField
                label="Category"
                select
                value={newCategory}
                defaultValue={act.category}
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
          <Button onClick={() => setShowUpdateForm(false)}>Update</Button>
          <Button onClick={() => setShowUpdateForm(false)}>cancel</Button>
        </Box>
      </form>
    </div>
  );
}
