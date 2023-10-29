import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

const rowStyle = {
    '&:last-child td, &:last-child th': { border: 0 },
    "& td" : { color : "#d2d2d2" }
}

export default function ResponseHeader({ panelValue }) {
  const headers = Object.entries(panelValue || {}).map(
    ([key, value], index) => {
      return (
        <TableRow key={index} sx={rowStyle}>
          <TableCell>{key}</TableCell>
          <TableCell>{value}</TableCell>
        </TableRow>
      );
    }
  );

  return (
    <TableContainer className="rounded-lg border border-white/5 bg-white/5">
      <Table aria-label="simple table">
        <TableHead>
          <TableRow sx={{ "& th" : { color : "white" } }}>
            <TableCell>Key</TableCell>
            <TableCell>Value</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>{headers}</TableBody>
      </Table>
    </TableContainer>
    )
}
