import { useState } from "react";
import "./App.css";
import ActCard from "./components/ActCard";
import { Grid, Container } from "@mui/material";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Container>
      <Grid container spacing={5}>
        <ActCard />
        <ActCard />
        <ActCard />
        <ActCard />
        <ActCard />
        <ActCard />
        <ActCard />
        <ActCard />
        <ActCard />
        <ActCard />
        <ActCard />
      </Grid>
    </Container>
  );
}

export default App;
