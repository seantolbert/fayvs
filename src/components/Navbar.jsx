import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { useLogout } from "../hooks/useLogout";
import { Link } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";

export default function Navbar() {
  const { logout } = useLogout();
  const { user } = useAuthContext();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
            href="/"
          >
            FAYVS
          </Typography>
          {user ? (
            <>
              <Button color="inherit" href="/">
                Home
              </Button>
              <Button color="inherit" href="/create">
                Create
              </Button>
              <Button color="inherit" onClick={logout}>
                Logout
              </Button>
            </>
          ) : (
            <>
              <Button color="inherit" href="/Login">
                Login
              </Button>
              <Button color="inherit" href="/Signup">
                Signup
              </Button>
            </>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
