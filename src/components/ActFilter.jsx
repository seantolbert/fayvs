import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";

import { useState } from "react";

const filterList = ["All", "Repo", "App", "Post", "Course", "Resource"];

export default function ActFilter({ currentFilter, changeFilter }) {
  const [showDelete, setShowDelete] = useState(false);

  const handleClick = (newFilter) => {
    changeFilter(newFilter);
  };

  const handleShowDelete = () => {
    setShowDelete(!showDelete);
  };

  return (
    <>
      <Box>
          {filterList.map((f) => (
            <Button sx={{ mx: 0 }} key={f} onClick={() => handleClick(f)}>
              {f}
            </Button>
          ))}
      </Box>
    </>
  );
}
