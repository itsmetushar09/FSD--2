import { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Grid,
  Card,
  CardContent,
  Alert,
  Button,
  TextField,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  Checkbox,
  FormControlLabel,
  Rating,
  Box,
} from "@mui/material";

// --------- COPIED COMPONENTS (Exp-1 style) ---------

const Navbar = () => (
  <AppBar position="static" sx={{ mb: 2 }}>
    <Toolbar>
      <Typography variant="h6">My UI Components Lab</Typography>
    </Toolbar>
  </AppBar>
);

const CustomCard = ({ title, children }) => (
  <Card sx={{ bgcolor: "#111827", color: "white" }}>
    <CardContent>
      <Typography variant="h6" gutterBottom>
        {title}
      </Typography>
      {children}
    </CardContent>
  </Card>
);

const CustomAlert = ({ message }) => (
  <Alert severity="warning" sx={{ mb: 2 }}>
    {message}
  </Alert>
);

// --------- MAIN APP ---------

export default function App() {
  const [text, setText] = useState("");
  const [select, setSelect] = useState("");
  const [checked, setChecked] = useState(false);
  const [rating, setRating] = useState(0);

  return (
    <Box sx={{ minHeight: "100vh", bgcolor: "#0f172a", p: 3 }}>
      <Container maxWidth="lg">
        <Navbar />
        <CustomAlert message="This is your MUI UI Components Experiment" />

        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={4}>
            <CustomCard title="Button">
              <Button variant="contained">Click Me</Button>
            </CustomCard>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <CustomCard title="TextField">
              <TextField
                fullWidth
                label="Enter text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                sx={{ bgcolor: "white" }}
              />
            </CustomCard>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <CustomCard title="Select">
              <FormControl fullWidth sx={{ bgcolor: "white" }}>
                <InputLabel>Choose Option</InputLabel>
                <Select
                  value={select}
                  label="Choose Option"
                  onChange={(e) => setSelect(e.target.value)}
                >
                  <MenuItem value="Option 1">Option 1</MenuItem>
                  <MenuItem value="Option 2">Option 2</MenuItem>
                  <MenuItem value="Option 3">Option 3</MenuItem>
                </Select>
              </FormControl>
            </CustomCard>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <CustomCard title="Rating">
              <Rating
                value={rating}
                onChange={(_, v) => setRating(v)}
              />
            </CustomCard>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <CustomCard title="Checkbox">
              <FormControlLabel
                control={
                  <Checkbox
                    checked={checked}
                    onChange={() => setChecked(!checked)}
                  />
                }
                label="Accept Terms & Conditions"
              />
            </CustomCard>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
