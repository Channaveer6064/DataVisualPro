import React, { useEffect, useRef } from "react";
import * as d3 from "d3";
import {
  Box,
  Button,
  Dialog,
  DialogTitle,
  Divider,
  Typography,
} from "@mui/material";
import { useData } from "../../contexts/DataContext";

export const InvoicesOwedChart = () => {
  const svgRef = useRef(null);
  const { state, dispatch } = useData();
  const { invoicesOwed, selectedMonth, monthsData, isDialogOpen } = state;
  const lastDay = monthsData.filter((i) => i.name === selectedMonth);
  const handleClick = () => {
    dispatch({ type: "TOGGLE_DIALOG", payload: true });
  };

  const handleClose = () => {
    dispatch({ type: "TOGGLE_DIALOG", payload: false });
  };

  const handleFileUpload = (event) => {
    // Handle file upload logic here
    console.log("File uploaded:", event.target.files[0]);
  };

  const createBarChart = () => {
    const height = 250;
    const width = 750;

    const svg = d3
      .select(svgRef.current)
      .attr("width", width)
      .attr("height", height)
      .style("margin-top", "20px")
      .style("margin-left", "20px");

    svg.selectAll("rect").remove();

    svg
      .selectAll("rect")
      .data(invoicesOwed)
      .enter()
      .append("rect")
      .attr("width", 16)
      .attr("height", (d) => d)
      .attr("x", (d, i) => i * 145)
      .attr("y", (d) => height - d)
      .attr("fill", "#47b747")
      .attr("rx", 5);
  };

  useEffect(() => {
    createBarChart();
  }, [createBarChart, invoicesOwed]);

  return (
    <Box
      sx={{
        height: "380px",
        width: "780px",
        backgroundColor: "white",
        borderRadius: ".5rem",
        marginLeft: "-.5rem",
      }}
    >
      {/* header bar */}
      <Box
        height={"5rem"}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 1rem",
        }}
      >
        <Typography variant="h6">Invoices owed to you</Typography>
        <Button
          disableRipple
          disableFocusRipple
          disableElevation
          variant="contained"
          sx={{
            backgroundColor: "#e3f2fd",
            color: "#388e3c",
            textTransform: "capitalize",
          }}
          onClick={handleClick}
        >
          New sales invoice
        </Button>
      </Box>
      <Divider />
      {/* svg for bargraph */}
      <svg ref={svgRef} style={{ marginLeft: "1rem" }}></svg>
      {/* scale */}
      <Box
        style={{
          marginLeft: "1rem",
          marginTop: ".5rem",
          display: "flex", // Added flex display for consistent spacing
        }}
      >
        {invoicesOwed.map((item, i) => {
          let label;
          if (i === 0) {
            label = "Older";
          } else if (i === 5) {
            label = "Future";
          } else {
            const start = i < 2 ? 1 : i < 3 ? 9 : i < 4 ? 17 : 24;
            const end =
              i < 5 ? (i < 4 ? 16 : 24) : parseInt(lastDay[0].days, 10); // Use the last day from monthsData
            label = `${selectedMonth.slice(0, 3)} ${start}-${end}`;
          }

          return (
            <span
              key={i}
              style={{
                marginRight: i === 5 ? 0 : "6.4rem",
                color: "#d3d3d3",
              }}
            >
              {label}
            </span>
          );
        })}
      </Box>

      {/* Dialog for file upload */}
      <Dialog open={isDialogOpen} onClose={handleClose}>
        <DialogTitle>Upload Sales Invoice</DialogTitle>
        <input type="file" onChange={handleFileUpload} />
      </Dialog>
    </Box>
  );
};
