import "./App.css";
import { Container, CssBaseline } from "@mui/material";
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
  palette: {
    background: {
      default: '#449DD1'
    },
    primary: {
      main: "#449DD1",
      light: "#78C0E0",
      dark: "#192BC2",
      darker: "#150578",
      darkest: "#0E0E52",
    },
  },
});

function App() {
  const { user, authIsReady } = useAuthContext();

  return (
    <ThemeProvider theme={theme}>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <CssBaseline />
        {authIsReady && (
          <BrowserRouter>
            <Container>
              <Routes>
                <Route
                  path="/"
                  element={user ? <Dashboard /> : <Navigate to="/login" />}
                />
                <Route
                  path="/create"
                  element={user ? <Create /> : <Navigate to="/login" />}
                />
                <Route
                  path="/login"
                  element={!user ? <Login /> : <Navigate to="/" />}
                />
                <Route
                  path="/signup"
                  element={!user ? <Signup /> : <Navigate to="/" />}
                />
              </Routes>
            </Container>
          </BrowserRouter>
        )}
      </LocalizationProvider>
    </ThemeProvider>
  );
}

export default App;
