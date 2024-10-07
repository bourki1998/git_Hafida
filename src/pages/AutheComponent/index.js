"use client";

import React, { useState } from "react";
import {
  Button,
  TextField,
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Typography,
  Box,
  ThemeProvider,
  createTheme,
} from "@mui/material";

// Create a custom theme with rose colors
const theme = createTheme({
  palette: {
    primary: {
      light: "#ffe4e6",
      main: "#fda4af",
      dark: "#e11d48",
      contrastText: "#ffffff",
    },
    secondary: {
      light: "#fff1f2",
      main: "#fecdd3",
      dark: "#fb7185",
      contrastText: "#881337",
    },
    background: {
      default: "#fff1f2",
      paper: "#ffe4e6",
    },
    text: {
      primary: "#881337",
      secondary: "#9f1239",
    },
  },
});

export default function RegistrationPage({ onRegisterSuccess }) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the registration data to your backend
    console.log({ username, email, password });
    // For this example, we'll just simulate a successful registration
    onRegisterSuccess();
  };

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          bgcolor: "background.default",
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          p: 2,
        }}
      >
        <Card
          sx={{
            maxWidth: 500,
            width: "100%",
            boxShadow: 3,
            bgcolor: "background.paper",
          }}
        >
          <CardHeader
            title={
              <Typography variant="h4" color="primary.dark">
                Register
              </Typography>
            }
            subheader={
              <Typography color="text.secondary">
                Create your account
              </Typography>
            }
            sx={{ bgcolor: "primary.light" }}
          />
          <CardContent sx={{ bgcolor: "background.paper" }}>
            <form
              onSubmit={handleSubmit}
              style={{ display: "flex", flexDirection: "column", gap: 16 }}
            >
              <TextField
                label="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                fullWidth
                required
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": { borderColor: "primary.main" },
                    "&:hover fieldset": { borderColor: "primary.dark" },
                    "&.Mui-focused fieldset": { borderColor: "primary.dark" },
                  },
                  "& .MuiInputLabel-root": {
                    color: "primary.main",
                    "&.Mui-focused": { color: "primary.dark" },
                  },
                }}
              />
              <TextField
                label="Email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                fullWidth
                required
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": { borderColor: "primary.main" },
                    "&:hover fieldset": { borderColor: "primary.dark" },
                    "&.Mui-focused fieldset": { borderColor: "primary.dark" },
                  },
                  "& .MuiInputLabel-root": {
                    color: "primary.main",
                    "&.Mui-focused": { color: "primary.dark" },
                  },
                }}
              />
              <TextField
                label="Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                fullWidth
                required
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": { borderColor: "primary.main" },
                    "&:hover fieldset": { borderColor: "primary.dark" },
                    "&.Mui-focused fieldset": { borderColor: "primary.dark" },
                  },
                  "& .MuiInputLabel-root": {
                    color: "primary.main",
                    "&.Mui-focused": { color: "primary.dark" },
                  },
                }}
              />
              <TextField
                label="Confirm Password"
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                fullWidth
                required
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": { borderColor: "primary.main" },
                    "&:hover fieldset": { borderColor: "primary.dark" },
                    "&.Mui-focused fieldset": { borderColor: "primary.dark" },
                  },
                  "& .MuiInputLabel-root": {
                    color: "primary.main",
                    "&.Mui-focused": { color: "primary.dark" },
                  },
                }}
              />
            </form>
          </CardContent>
          <CardActions sx={{ bgcolor: "primary.light", p: 2 }}>
            <Button
              onClick={handleSubmit}
              variant="contained"
              fullWidth
              sx={{
                bgcolor: "primary.main",
                color: "primary.contrastText",
                "&:hover": {
                  bgcolor: "primary.dark",
                },
              }}
            >
              Register
            </Button>
          </CardActions>
        </Card>
      </Box>
    </ThemeProvider>
  );
}
