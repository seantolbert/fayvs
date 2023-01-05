// components & hooks
import { useState } from "react";
import { useCollection } from "../hooks/useCollection";
import { useAuthContext } from "../hooks/useAuthContext";
import ActList from "../components/ActList";
import ActFilter from "../components/ActFilter";

// mui
import Box from "@mui/material/Box";
import Switch from "@mui/material/Switch";
import FormControlLabel from "@mui/material/FormControlLabel";
import { Button, Typography } from "@mui/material";

export default function Dashboard() {
  const [currentFilter, setCurrentFilter] = useState("all");
  const { user } = useAuthContext();
  const { documents: acts } = useCollection("acts", ["uid", "==", user.uid]);
  const [showDelete, setShowDelete] = useState(false);

  const changeFilter = (newFilter) => {
    setCurrentFilter(newFilter);
  };

  const handleShowDelete = () => {
    setShowDelete(!showDelete);
  };

  const actz = acts
    ? acts.filter((act) => {
        switch (currentFilter) {
          case "all":
            return true;
          case "Course":
          case "App":
          case "Repo":
          case "Post":
          case "Resource":
            return act.category === currentFilter;
          default:
            return true;
        }
      })
    : null;

  return (
    <>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <ActFilter currentFilter={currentFilter} changeFilter={changeFilter} />
        <FormControlLabel
          control={<Switch value={showDelete} onChange={handleShowDelete} />}
          label="Edit"
          labelPlacement="start"
          sx={{ width: 10 }}
        />
      </Box>
      {acts ? (
        <ActList acts={actz} showDelete={showDelete} />
      ) : (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-evenly",
            height: "70vh",
          }}
        >
          <Typography
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontSize: 35,
            }}
          >
            Click Create to add your first event
          </Typography>
          <Button
            href="/create"
            sx={{ background: "#1876D1", color: "#fff", fontSize: 25 }}
          >
            CREATE
          </Button>
        </Box>
      )}
    </>
  );
}
