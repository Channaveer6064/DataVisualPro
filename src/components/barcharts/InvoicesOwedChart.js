import { Box, Button, Divider, Typography } from "@mui/material";
import React, { useEffect, useRef } from "react";
import * as d3 from "d3";
export const InvoicesOwedChart = () => {
  const svgRef = useRef(null);
  const monthData = [
    {
      month: "Older",
      interval: "",
    },
    {
      month: "Jan",
      interval: "01-08",
    },
    {
      month: "Jan",
      interval: "01-08",
    },
    {
      month: "Jan",
      interval: "01-08",
    },
    {
      month: "Jan",
      interval: "01-08",
    },
    {
      month: "Future",
      interval: "",
    },
  ];
  const data = [100, 120, 180, 200, 190, 150];
  const createBarChart = () => {
    const height = 250;
    const width = 750;
    const svg = d3
      .select(svgRef.current)
      .attr("width", width)
      .attr("height", height)
      .style("margin-top", "20px")
      .style("margin-left", "20px");
    svg
      .selectAll("rect")
      .data(data)
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
  }, []);
  return (
    <Box
      sx={{
        height: "380px",
        width: "780px",
        backgroundColor: "white",
        borderRadius: ".5rem",
      }}
    >
      {/* heder bar */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          height: "4rem",
          justifyContent: "space-between",
          padding: "0 1rem",
        }}
      >
        <Typography variant="h6">Invoices owed to you</Typography>
        <Button
          disableRipple
          disableFocusRipple
          disableElevation
          variant="conatained"
          sx={{
            backgroundColor: "#e3f2fd",
            color: "#388e3c",
            textTransform: "capitalize",
          }}
        >
          New sales invoice{" "}
        </Button>
      </Box>
      <Divider />
      {/* svg for bargraph */}
      <svg ref={svgRef} style={{ marginLeft: "1rem" }}></svg>
      {/* scale */}
      <Box style={{ marginLeft: ".5rem", marginTop: ".5rem" }}>
        {" "}
        {monthData.map(({ month, interval }) => (
          <span
            style={{
              marginRight: "4.9rem",

              color: "#d3d3d3",
            }}
          >{`${month} ${interval}`}</span>
        ))}
      </Box>
    </Box>
  );
};
