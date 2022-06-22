import { Typography } from "@mui/material";
import ActList from "../components/ActList";
import { useState } from "react";
import { useCollection } from "../hooks/useCollection";
import { useAuthContext } from "../hooks/useAuthContext";
import ActFilter from "../components/ActFilter";
import MobileNav from "../components/MobileNav";

export default function Dashboard() {
  const [currentFilter, setCurrentFilter] = useState("all");
  const { user } = useAuthContext();
  // const { documents: acts } = useCollection("acts", ["uid", "==", user.uid]);

  const changeFilter = (newFilter) => {
    setCurrentFilter(newFilter);
  };

  return (
    <div>
      <Typography variant="h2" component="h1">
        FAYVS
      </Typography>

      <ActFilter currentFilter={currentFilter} changeFilter={changeFilter} />
      <ActList />
      <MobileNav />
    </div>
  );
}
