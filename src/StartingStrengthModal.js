import React, { useState } from "react";
import { Box, Modal, Button } from "@mui/material";
import { modalColor, bgColor } from "./Home";
import StartingStrength from "./StartingStrength";

const StartingStrengthModal = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <Box>
      <Button sx={{ color: modalColor }} onClick={handleOpen}>
        Starting Strength
      </Button>
      <Modal open={open} onClose={handleClose}>
        <Box
          width={800}
          minHeight="80vh"
          marginTop="50px"
          marginRight="auto"
          marginLeft="auto"
          backgroundColor={bgColor}
          border="1px solid #FFC9C3"
          borderRadius="8px"
          color={modalColor}
        >
          <Box>
            <StartingStrength />
          </Box>
        </Box>
      </Modal>
    </Box>
  );
};

export default StartingStrengthModal;
