"use client";

import React, { useState } from "react";
import {
  Button,
  TextField,
  Slider,
  Select,
  MenuItem,
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Typography,
  Chip,
  Box,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import { Close as CloseIcon } from "@mui/icons-material";
import Header from "../../components/header/header";
// Create a custom theme with rose colors only
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
      contrastText: "#000000",
    },
    background: {
      default: "#fff1f2",
      paper: "#ffffff",
    },
    text: {
      primary: "#881337",
      secondary: "#9f1239",
    },
  },
});

export default function DatingPreferences() {
  const [ageRange, setAgeRange] = useState([18, 40]);
  const [gender, setGender] = useState("");
  const [location, setLocation] = useState("");
  const [maxDistance, setMaxDistance] = useState(50);
  const [interests, setInterests] = useState([]);
  const [newInterest, setNewInterest] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the preferences to your backend
    console.log({ ageRange, gender, location, maxDistance, interests });
    // You could also show a success message or redirect the user
  };

  const addInterest = () => {
    if (newInterest && !interests.includes(newInterest)) {
      setInterests([...interests, newInterest]);
      setNewInterest("");
    }
  };

  const removeInterest = (interest) => {
    setInterests(interests.filter((i) => i !== interest));
  };

  return (
    <ThemeProvider theme={theme}>
      <Header />
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
            maxWidth: 600,
            width: "100%",
            boxShadow: 3,
            bgcolor: "background.paper",
          }}
        >
          <CardHeader
            title={
              <Typography variant="h4" color="primary.dark">
                Dating Preferences
              </Typography>
            }
            subheader={
              <Typography color="text.secondary">
                Set up your preferences to find your perfect match!
              </Typography>
            }
            sx={{ bgcolor: "primary.light" }}
          />
          <CardContent>
            <form
              onSubmit={handleSubmit}
              style={{ display: "flex", flexDirection: "column", gap: 16 }}
            >
              <Box>
                <Typography color="primary.dark" gutterBottom>
                  Age Range
                </Typography>
                <Slider
                  value={ageRange}
                  onChange={(_, newValue) => setAgeRange(newValue)}
                  valueLabelDisplay="auto"
                  min={18}
                  max={100}
                  sx={{
                    color: "primary.main",
                    "& .MuiSlider-thumb": {
                      backgroundColor: "primary.dark",
                    },
                    "& .MuiSlider-rail": {
                      backgroundColor: "primary.light",
                    },
                  }}
                />
                <Box display="flex" justifyContent="space-between">
                  <Typography variant="caption" color="text.secondary">
                    {ageRange[0]} years
                  </Typography>
                  <Typography variant="caption" color="text.secondary">
                    {ageRange[1]} years
                  </Typography>
                </Box>
              </Box>

              <Box>
                <Typography color="primary.dark" gutterBottom>
                  Preferred Gender
                </Typography>
                <Select
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                  displayEmpty
                  fullWidth
                  sx={{
                    "& .MuiOutlinedInput-notchedOutline": {
                      borderColor: "primary.main",
                    },
                    "&:hover .MuiOutlinedInput-notchedOutline": {
                      borderColor: "primary.dark",
                    },
                    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                      borderColor: "primary.dark",
                    },
                  }}
                >
                  <MenuItem value="">Select preferred gender</MenuItem>
                  <MenuItem value="male">Male</MenuItem>
                  <MenuItem value="female">Female</MenuItem>
                  <MenuItem value="non-binary">Non-binary</MenuItem>
                  <MenuItem value="any">Any</MenuItem>
                </Select>
              </Box>

              <TextField
                label="Your Location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                fullWidth
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "primary.main",
                    },
                    "&:hover fieldset": {
                      borderColor: "primary.dark",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "primary.dark",
                    },
                  },
                  "& .MuiInputLabel-root": {
                    color: "primary.main",
                    "&.Mui-focused": {
                      color: "primary.dark",
                    },
                  },
                }}
              />

              <Box>
                <Typography color="primary.dark" gutterBottom>
                  Maximum Distance
                </Typography>
                <Slider
                  value={maxDistance}
                  onChange={(_, newValue) => setMaxDistance(newValue)}
                  valueLabelDisplay="auto"
                  min={1}
                  max={100}
                  sx={{
                    color: "primary.main",
                    "& .MuiSlider-thumb": {
                      backgroundColor: "primary.dark",
                    },
                    "& .MuiSlider-rail": {
                      backgroundColor: "primary.light",
                    },
                  }}
                />
                <Typography variant="caption" color="text.secondary">
                  {maxDistance} km
                </Typography>
              </Box>

              <Box>
                <Typography color="primary.dark" gutterBottom>
                  Interests
                </Typography>
                <Box display="flex" flexWrap="wrap" gap={1} mb={1}>
                  {interests.map((interest) => (
                    <Chip
                      key={interest}
                      label={interest}
                      onDelete={() => removeInterest(interest)}
                      sx={{
                        bgcolor: "secondary.light",
                        color: "primary.dark",
                        "& .MuiChip-deleteIcon": {
                          color: "primary.main",
                          "&:hover": {
                            color: "primary.dark",
                          },
                        },
                      }}
                    />
                  ))}
                </Box>
                <Box display="flex" gap={1}>
                  <TextField
                    placeholder="Add an interest"
                    value={newInterest}
                    onChange={(e) => setNewInterest(e.target.value)}
                    fullWidth
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        "& fieldset": {
                          borderColor: "primary.main",
                        },
                        "&:hover fieldset": {
                          borderColor: "primary.dark",
                        },
                        "&.Mui-focused fieldset": {
                          borderColor: "primary.dark",
                        },
                      },
                    }}
                  />
                  <Button
                    onClick={addInterest}
                    variant="contained"
                    sx={{
                      bgcolor: "primary.main",
                      color: "primary.contrastText",
                      "&:hover": {
                        bgcolor: "primary.dark",
                      },
                    }}
                  >
                    Add
                  </Button>
                </Box>
              </Box>
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
              Save Preferences
            </Button>
          </CardActions>
        </Card>
      </Box>
    </ThemeProvider>
  );
}
