import { useState } from "react";
import { useLogin } from "../hooks/useLogin";
import { Link } from "react-router-dom";
import {
  TextField,
  Typography,
  Container,
  Button,
  Grid,
  FormControl,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, error } = useLogin();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    login(email, password);
    navigate("/");
  };

  return (
    <Container maxWidth="xs" sx={{ mt: "15%" }}>
      <form onSubmit={handleSubmit}>
        <Grid container gap={4}>
          <Typography component="h2" variant="h2">
            Login
          </Typography>
          <FormControl fullWidth>
            <TextField
              label="email"
              name="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </FormControl>
          <FormControl fullWidth>
            <TextField
              label="password"
              name="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </FormControl>
          <Button type="submit">log in</Button>
        </Grid>
      </form>
    </Container>
  );
}
