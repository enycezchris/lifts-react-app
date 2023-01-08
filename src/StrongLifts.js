import React, { useState } from "react";
import { Button } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

const setData = (name, set1, set2, set3, set4, set5) => {
  return { name, set1, set2, set3, set4, set5 };
};

const setRows = [
  setData(
    "Squat",
    <Button sx={{ border: "1px solid black", borderRadius: "20%" }}>0</Button>,
    <Button sx={{ border: "1px solid black", borderRadius: "20%" }}>0</Button>,
    <Button sx={{ border: "1px solid black", borderRadius: "20%" }}>0</Button>,
    <Button sx={{ border: "1px solid black", borderRadius: "20%" }}>0</Button>,
    <Button sx={{ border: "1px solid black", borderRadius: "20%" }}>0</Button>
  ),
  setData(
    "Overhead Press",
    <Button>0</Button>,
    <Button>0</Button>,
    <Button>0</Button>,
    <Button>0</Button>,
    <Button>0</Button>
  ),
  setData("DeadLift", <Button>0</Button>),
];

const StrongLifts = () => {
  const [date, setDate] = useState(null);
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }}>
        <TableHead>
          <TableRow>
            <TableCell>Exercises</TableCell>
            <TableCell align="right">Set 1</TableCell>
            <TableCell align="right">Set 2</TableCell>
            <TableCell align="right">Set 3</TableCell>
            <TableCell align="right">Set 4</TableCell>
            <TableCell align="right">Set 5</TableCell>
            <TableCell>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  value={date}
                  onChange={(newValue) => {
                    setDate(newValue);
                  }}
                  renderInput={(params) => <TextField {...params} />}
                />
              </LocalizationProvider>
            </TableCell>
            <TableCell>
              <Button
                sx={{
                  width: "50px",
                  height: "50px",
                  backgroundColor: "lightgreen",
                  fontSize: "1rem",
                }}
                onClick={() => {
                  console.log("add new row");
                }}
              >
                +
              </Button>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {setRows.map((row) =>
            row.name === "DeadLift" ? (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.set1}</TableCell>
              </TableRow>
            ) : (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.set1}</TableCell>
                <TableCell align="right">{row.set2}</TableCell>
                <TableCell align="right">{row.set3}</TableCell>
                <TableCell align="right">{row.set4}</TableCell>
                <TableCell align="right">{row.set5}</TableCell>
              </TableRow>
            )
          )}
        </TableBody>
      </Table>
      <Button
        sx={{
          display: "block",
          margin: "auto",
          marginBottom: "10px",
          padding: 2,
          color: "white",
          backgroundColor: "red",
        }}
        onClick={()=>{
            console.log("workout saved!")
        }}
      >
        Save workout
      </Button>
    </TableContainer>
  );
};

export default StrongLifts;
