import "./App.css";
import ActCard from "./components/ActCard";
import { Grid, Container } from "@mui/material";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useAuthContext } from "./hooks/useAuthContext";

import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Create from "./pages/Create";
import Signup from "./pages/Signup";
import MobileNav from "./context/MobileNav";

function App() {
  return (
    <>
      <Container>
        <Dashboard />
      </Container>
      <MobileNav />
    </>
  );
}

export default App;
