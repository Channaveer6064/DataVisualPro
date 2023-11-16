import { Box, Divider, Stack, Typography } from "@mui/material";
import React, { useEffect, useRef } from "react";
import * as d3 from "d3";

export const CashFlowChart = () => {
  const svgRef = useRef(null);
  const monthData = [
    "August",
    "September",
    "October",
    "November",
    "December",
    "January",
  ];
  const data = [100, 120, 180, 200, 190, 150];
  const secondData = [75, 55, 66, 65, 56, 63];

  const createBarChart = () => {
    const height = 250;
    const width = 750;
    const svg = d3
      .select(svgRef.current)
      .attr("width", width)
      .attr("height", height);

    // Clear existing bars
    svg.selectAll("rect").remove();

    // Draw bars for the first set of data
    svg
      .selectAll(".firstBars")
      .data(data)
      .enter()
      .append("rect")
      .attr("class", "firstBars")
      .attr("width", 16)
      .attr("height", (d) => d)
      .attr("x", (d, i) => i * 145)
      .attr("y", (d) => height - d)
      .attr("fill", "#2ecc71")
      .attr("rx", 5);

    // Draw bars for the second set of data
    svg
      .selectAll(".secondBars")
      .data(secondData)
      .enter()
      .append("rect")
      .attr("class", "secondBars")
      .attr("width", 16)
      .attr("height", (d) => d)
      .attr("x", (d, i) => i * 145)
      .attr("y", (d) => height - d)
      .attr("fill", "#47b747")
      .attr("rx", 5);
  };

  useEffect(() => {
    createBarChart();
  }, [data, secondData]);

  return (
    <Box
      sx={{
        height: "380px",
        width: "780px",
        backgroundColor: "white",
        marginLeft: "2rem",
        borderRadius: ".5rem",
      }}
    >
      {/* header bar */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          height: "4rem",
          justifyContent: "space-between",
          padding: "0 1rem",
        }}
      >
        Total cash flow <Typography variant="h6"></Typography>
        <Stack direction={"row"} spacing={1}>
          <Box
            sx={{
              height: "1rem",
              width: "1rem",
              borderRadius: "5px",
              backgroundColor: "#2ecc71",
            }}
          ></Box>
          <Box component={"span"} sx={{ fontSize: "14px" }}>
            In
          </Box>{" "}
          <Box
            sx={{
              height: "1rem",
              width: "1rem",
              borderRadius: "5px",
              backgroundColor: "#47b747",
            }}
          ></Box>
          <Box component={"span"} sx={{ fontSize: "14px" }}>
            Out
          </Box>
        </Stack>
      </Box>
      <Divider />
      {/* svg for bargraph */}
      <svg ref={svgRef} style={{ marginLeft: "1rem" }}></svg>
      {/* scale */}
      <Box style={{ marginLeft: ".5rem", marginTop: "1rem" }}>
        {" "}
        {monthData.map((i, index) => (
          <span key={index} style={{ marginRight: "4.7rem", color: "#d3d3d3" }}>
            {i}
          </span>
        ))}
      </Box>
    </Box>
  );
};
