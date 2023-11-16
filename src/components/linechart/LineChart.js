// LineChart.js
import React, { useEffect, useRef } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import * as d3 from "d3";
import { Button, Box, Typography, Divider, Stack } from "@mui/material";

const LineChart = () => {
  // Ref to hold the SVG element
  const svgRef = useRef();
  // Sample data and axis labels
  const data = [95, 150, 250, 153, 112, 95, 98, 75, 205, 198];
  const axisLabels = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  // Function to create the line chart
  const createLineChart = () => {
    // Dimensions of the chart
    const height = 250;
    const width = 750;

    // Create SVG container
    const svg = d3
      .select(svgRef.current)
      .attr("height", height)
      .attr("width", width)
      .style("margin-top", "20px")
      .style("margin-left", "20px");

    // Create x-scale and y-scale
    const xScale = d3
      .scaleLinear()
      .domain([0, data.length - 1])
      .range([0, width]);
    const yScale = d3
      .scaleLinear()
      .domain([0, d3.max(data)])
      .range([height, 0]);

    // Create line generator with a cardinal curve
    const lineGenerator = d3
      .line()
      .x((d, i) => xScale(i))
      .y((d) => yScale(d))
      .curve(d3.curveCardinal);

    // Append line to SVG
    svg
      .append("path")
      .data([data])
      .attr("d", lineGenerator)
      .attr("stroke", "#47b747")
      .attr("stroke-width", "5px")
      .attr("fill", "none");
  };

  // useEffect to run the createLineChart function on component mount
  useEffect(() => {
    createLineChart();
  }, []);

  return (
    <Box
      sx={{
        height: "380px",
        width: "780px",
        backgroundColor: "white",
        borderRadius: ".5rem",
        marginLeft: "2rem",
      }}
    >
      {/* Header */}
      <Box
        height={"5rem"}
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography variant="h6" mx={4}>
          Checking account
        </Typography>
        {/* Manage and Month buttons */}
        <Box mx={1}>
          <Button
            variant="contained"
            elevation={1}
            disableRipple
            sx={{
              backgroundColor: "white",
              color: "black",
              marginRight: "1rem",
              "&:hover": {
                backgroundColor: "white",
              },
            }}
            endIcon={<KeyboardArrowDownIcon />}
          >
            Manage
          </Button>
          <Button
            variant="contained"
            disableRipple
            elevation={1}
            sx={{
              backgroundColor: "white",
              color: "black",
              "&:hover": {
                backgroundColor: "white",
              },
            }}
            endIcon={<KeyboardArrowDownIcon />}
          >
            Month
          </Button>
        </Box>
      </Box>
      <Divider />
      {/* SVG */}
      <svg ref={svgRef}></svg>
      {/* Bottom scale */}
      <Box style={{ marginLeft: "15px" }}>
        {/* Axis labels */}
        {axisLabels.map((item, i) => (
          <span
            key={i}
            style={{ color: "#d3d3d3", marginRight: "74px" }}
          >{`0${item}`}</span>
        ))}
      </Box>
    </Box>
  );
};

export default LineChart;
