import { Typography } from "@mui/material";
import ActList from "../components/ActList";
import { useState } from "react";
import { useCollection } from "../hooks/useCollection";
import { useAuthContext } from "../hooks/useAuthContext";
import ActFilter from "../components/ActFilter";
import Switch from "@mui/material/Switch";
import { FormGroup, FormControlLabel } from "@mui/material";

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
    <div>
      <ActFilter currentFilter={currentFilter} changeFilter={changeFilter} />
      <FormGroup>
        <FormControlLabel
          control={<Switch value={showDelete} onChange={handleShowDelete} />}
          label="Edit"
        />
      </FormGroup>
      {acts && <ActList acts={actz} showDelete={showDelete} />}
    </div>
  );
}
