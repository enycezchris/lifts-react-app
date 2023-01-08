import React, { useState } from "react";
import { Box, Button, Modal } from "@mui/material";
import C25k from "./C25k";
import { modalColor, bgColor } from "./Home";

const C25kModal = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <Box>
      <Button sx={{ color: modalColor }} onClick={handleOpen}>
        C25k
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
            <C25k />
          </Box>
        </Box>
      </Modal>
    </Box>
  );
};

export default C25kModal;
