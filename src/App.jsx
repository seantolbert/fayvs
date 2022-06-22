import "./App.css";
import ActCard from "./components/ActCard";
import { Grid, Container } from "@mui/material";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useAuthContext } from "./hooks/useAuthContext";

import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Create from "./pages/Create";
import Signup from "./pages/Signup";
import { LocalizationProvider } from "@mui/x-date-pickers";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  components: {
    MuiTimelineItem: {
      styleOverrides: {
        missingOppositeContent: {
          display: "none",
        },
      },
    },
  },
});
function App() {
  const { user, authIsReady } = useAuthContext();
  console.dir(user);

  return (
    <>
      {authIsReady && (
        <ThemeProvider theme={theme}>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <BrowserRouter>
              <Container>
                <Routes>
                  <Route path="/" element={<Dashboard />} />
                  <Route path="/create" element={<Create />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/signup" element={<Signup />} />
                </Routes>
              </Container>
            </BrowserRouter>
          </LocalizationProvider>
        </ThemeProvider>
      )}
    </>
  );
}

export default App;
