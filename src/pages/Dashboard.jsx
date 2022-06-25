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
      {acts && <ActList acts={actz} showDelete={showDelete} />}
    </>
  );
}
