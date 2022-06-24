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
    <form onSubmit={handleSubmit}>
      <Typography component="h2" variant="h2">
        Login
      </Typography>
      <TextField
        name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextField
        name="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button>log in</button>
    </form>
  );
}
