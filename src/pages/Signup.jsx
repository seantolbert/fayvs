import { useState } from "react";
import { useSignup } from "../hooks/useSignup";
import { Link } from "react-router-dom";
import { TextField, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const {error, signup} = useSignup();
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    signup(email, password);
    navigate('/')
  };

  const disable = password !== password2

  return (
    <form onSubmit={handleSubmit}>
      <Typography component='h2' variant='h2'>Signup</Typography>
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
      <TextField
        name="password"
        value={password2}
        onChange={(e) => setPassword2(e.target.value)}
      />
      <button disabled={disable}>sign up</button>
    </form>
  );
}
