import { useState } from "react";
import { useLogin } from "../hooks/useLogin";
import { Link } from "react-router-dom";
import { TextField, Typography } from "@mui/material";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password);
  };

  return (
    <div>
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
    </div>
  );
}
