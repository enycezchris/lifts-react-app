import React, { useState } from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useHistory } from "react-router-dom";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div role="tabpanel" hidden={value !== index} id={`tabpanel-${index}`}>
      {value === index && (
        <Box sx={{ p: 5, cursor: "pointer" }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `tab-${index}`,
  };
}

const SLA = () => {
  const [value, setValue] = useState(0);
  const history = useHistory();
  console.log("history", history);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      onClick={(event) => {
        console.log(event.target);
        if (event.target.id === "tab-0") {
          history.push("/lifts");
        }
      }}
      sx={{ width: "100%" }}
    >
      <Box sx={{ borderBottom: "1", borderColor: "divider" }}>
        <Tabs textColor="inherit" value={value} onChange={handleChange}>
          <Tab label="Workout A" {...a11yProps(0)} />
          <Tab label="Workout B" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <h5>Squats</h5>
        <h5>Overhead Press</h5>
        <h5>Deadlifts</h5>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <h5>Squats</h5>
        <h5>Bench Press</h5>
        <h5>Pendlay Rows</h5>
      </TabPanel>
    </Box>
  );
};

export default SLA;
