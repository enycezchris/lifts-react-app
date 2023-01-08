import React from "react";
import { Container, Box } from "@mui/material";

const StartingStrength = () => {
  return (
    <Container>
      <Container sx={{ display: "flex", textAlign: "center" }}>
        <Box sx={{ flex: 1 }}>
          <h1>Workout A</h1>
          <h4>Squats</h4>
          <h4>Bench Press</h4>
          <h4>Deadlifts</h4>
        </Box>
        <Box sx={{ flex: 1 }}>
          <h1>Workout B</h1>
          <h4>Squats</h4>
          <h4>Overhead Press</h4>
          <h4>Power Cleans</h4>
        </Box>
      </Container>
    </Container>
  );
};

export default StartingStrength;
