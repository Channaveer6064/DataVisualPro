import { Box, Divider, Stack, Typography } from "@mui/material";
import React, { useEffect, useRef } from "react";
import * as d3 from "d3";
import { useData } from "../../contexts/DataContext";

export const CashFlowChart = () => {
  const { state } = useData();
  const { cashInFlow, cashOutFlow, monthsData, selectedMonth } = state;

  const generateMonthArray = (allMonths, thisMonth) => {
    const selectedMonthIndex = allMonths.findIndex(
      (month) => month === thisMonth
    );

    if (selectedMonthIndex === -1) {
      return [];
    }

    const startIndex =
      (selectedMonthIndex - 5 + allMonths.length) % allMonths.length;

    const result = [];
    for (let i = 0; i < 6; i++) {
      const currentIndex = (startIndex + i) % allMonths.length;
      result.push(allMonths[currentIndex]);
    }

    return result;
  };

  const svgRef = useRef(null);

  // Generate the array of 6 months
  const monthData = generateMonthArray(
    monthsData.map((month) => month.name),
    selectedMonth
  );

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
      .data(cashInFlow)
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
      .data(cashOutFlow)
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
  }, [cashInFlow, cashOutFlow, createBarChart]);

  return (
    <Box
      sx={{
        height: "380px",
        width: "780px",
        backgroundColor: "white",
        marginLeft: "3rem",
        borderRadius: ".5rem",
      }}
    >
      {/* header bar */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          height: "5rem",
          justifyContent: "space-between",
          padding: "0 1rem",
        }}
      >
        <Typography variant="h6">Total cash flow </Typography>
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
      <svg
        ref={svgRef}
        style={{
          marginLeft: "1rem",
          marginTop: "20px",
        }}
      ></svg>
      {/* scale */}
      <Box style={{ marginLeft: ".5rem", marginTop: "1rem", width: "100%" }}>
        {monthData.map((i, index) => (
          <span
            key={index}
            style={{
              marginRight: i.length >= 8 ? "5rem" : "8rem",
              color: "#d3d3d3",
            }}
          >
            {i}
          </span>
        ))}
      </Box>
    </Box>
  );
};
