// hooks
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useAuthContext } from "./hooks/useAuthContext";

// local components
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Create from "./pages/Create";
import Signup from "./pages/Signup";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// mui
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";

// styling
import "./App.css";
import Landing from "./components/Landing";

function App() {
  const { user, authIsReady } = useAuthContext();

  return (
    <>
      <CssBaseline />
      {authIsReady && (
        <BrowserRouter>
          <Navbar />
          <Container>
            <Routes>
              <Route
                path="/"
                // element={user ? <Dashboard /> : <Navigate to="/login" />}
                element={user ? <Dashboard /> : <Landing />}
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
            <Footer />
          </Container>
        </BrowserRouter>
      )}
    </>
  );
}

export default App;
