// hooks
import { useState } from "react";
import { useSignup } from "../hooks/useSignup";
import { useNavigate } from "react-router-dom";

// mui
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import FormControl from '@mui/material/FormControl'

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const { signup } = useSignup();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    signup(email, password);
    navigate("/");
  };

  const disable = password !== password2;

  return (
    <Container maxWidth="xs" sx={{ mt: "13%" }}>
      <form onSubmit={handleSubmit}>
        <Grid container gap={4}>
          <Typography component="h2" variant="h2">
            Signup
          </Typography>
          <FormControl fullWidth>
            <TextField
              label="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </FormControl>
          <FormControl fullWidth>
            <TextField
              label="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </FormControl>
          <FormControl fullWidth>
            <TextField
              label="confirm"
              name="password"
              value={password2}
              onChange={(e) => setPassword2(e.target.value)}
            />
          </FormControl>
          <Button type="submit" disabled={disable}>
            sign up
          </Button>
        </Grid>
      </form>
    </Container>
  );
}
