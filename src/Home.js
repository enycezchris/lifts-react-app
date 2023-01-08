import React from "react";
import { Box } from "@mui/material";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";
import StrongLiftsModal from "./StrongLiftsModal";
import StartingStrengthModal from "./StartingStrengthModal";
import C25kModal from "./C25kModal";
export const modalColor = "#FFC93C";
export const bgColor = "#0A2647";

const Home = () => {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : bgColor,
    ...theme.typography.body2,
    padding: theme.spacing(5),
    textAlign: "center",
    border: "1px solid #FFC93C",
    borderRadius: "8px",
    color: theme.palette.mode === "dark" ? "fff" : modalColor,
  }));

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
      backgroundColor="#0A2647"
    >
      <Stack
        direction="row"
        divider={<Divider orientation="vertical" flexItem />}
        spacing={4}
        alignItems="center"
        justifyContent="center"
      >
        <Item>
          <StrongLiftsModal />
        </Item>
        <Item>
          <StartingStrengthModal />
        </Item>
        <Item>
          <C25kModal />
        </Item>
      </Stack>
    </Box>
  );
};

export default Home;
