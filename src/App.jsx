import "./App.css";
import ActCard from "./components/ActCard";
import { Grid, Container } from "@mui/material";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useAuthContext } from "./hooks/useAuthContext";
// import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'

import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Create from "./pages/Create";
import Signup from "./pages/Signup";
import MobileNav from "./components/MobileNav";

function App() {
  const { user, authIsReady } = useAuthContext();

  return (
    <>
      <BrowserRouter>
        <Container>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/create" element={<Create />} />
          </Routes>
          <MobileNav />
        </Container>
      </BrowserRouter>
    </>
  );
}

export default App;
