// LineChart.js
import React, { useEffect, useRef } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import * as d3 from "d3";
import {
  Button,
  Box,
  Typography,
  Divider,
  Menu,
  MenuItem,
} from "@mui/material";
import { useData } from "../../contexts/DataContext";

const LineChart = () => {
  const { state, dispatch } = useData();
  const {
    checkingAccount,
    monthAnchorEl,
    selectedMonth,
    manageAnchorEl,
    selectedDays,
    monthsData,
  } = state;

  const handleMonthClick = (event) => {
    dispatch({ type: "TOGGLE_MONTH", payload: event.currentTarget });
  };

  const handleMonthItemClick = (month) => {
    dispatch({ type: "CHANGE_ACCOUNT", payload: month });
    dispatch({ type: "TOGGLE_MONTH", payload: null });
  };

  const handleManageClick = (event) => {
    dispatch({ type: "TOGGLE_MANAGE", payload: event.currentTarget });
  };

  const handleDaysItemClick = (startDay, endDay) => {
    dispatch({ type: "CHANGE_DAYS", payload: [startDay, endDay] });
    dispatch({ type: "TOGGLE_MANAGE", payload: null });
  };

  const svgRef = useRef();
  const data = checkingAccount.slice(selectedDays[0] - 1, selectedDays[1]);
  console.log(data);
  const axisLabels = Array.from(
    { length: selectedDays[1] - selectedDays[0] + 1 },
    (_, i) => selectedDays[0] + i
  );

  const createLineChart = () => {
    const height = 250;
    const width = 750;

    const svg = d3
      .select(svgRef.current)
      .attr("height", height)
      .attr("width", width)
      .style("margin-top", "20px")
      .style("margin-left", "20px");

    const xScale = d3
      .scaleLinear()
      .domain([0, data.length - 1])
      .range([0, width]);
    const yScale = d3
      .scaleLinear()
      .domain([0, d3.max(data)])
      .range([height, 0]);

    const lineGenerator = d3
      .line()
      .x((d, i) => xScale(i))
      .y((d) => yScale(d))
      .curve(d3.curveBasis);

    svg.selectAll("path").remove();

    svg
      .append("path")
      .data([data])
      .attr("d", lineGenerator)
      .attr("stroke", "#47b747")
      .attr("stroke-width", "4px")
      .attr("fill", "none");
  };

  useEffect(() => {
    createLineChart();
  }, [checkingAccount, createLineChart, selectedDays]);

  return (
    <Box
      sx={{
        height: "380px",
        width: "780px",
        backgroundColor: "white",
        borderRadius: ".5rem",
        marginLeft: "3rem",
      }}
    >
      <Box
        height={"5rem"}
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "0 1rem",
        }}
      >
        <Typography variant="h6">Checking account</Typography>
        <Box mx={1} display={"flex"}>
          <Button
            variant="contained"
            elevation={1}
            disableRipple
            sx={{
              justifyContent: "space-between",
              width: "8rem",
              textTransform: "capitalize",
              fontSize: "12px",
              backgroundColor: "white",
              color: "black",
              marginRight: "1rem",
              "&:hover": {
                backgroundColor: "white",
              },
            }}
            endIcon={<KeyboardArrowDownIcon />}
            onClick={handleManageClick}
          >
            Manage
          </Button>
          <Menu
            anchorEl={manageAnchorEl}
            open={Boolean(manageAnchorEl)}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            onClose={() => dispatch({ type: "TOGGLE_MANAGE" })}
          >
            {[1, 11, 21].map((startDay) => (
              <MenuItem
                key={startDay}
                onClick={() => handleDaysItemClick(startDay, startDay + 9)}
              >
                {startDay === 21
                  ? `${startDay} - ${startDay + 10}`
                  : `${startDay} - ${startDay + 9}`}
              </MenuItem>
            ))}
          </Menu>

          <Button
            variant="contained"
            disableRipple
            elevation={1}
            sx={{
              justifyContent: "space-between",
              width: "8rem",
              textTransform: "capitalize",
              fontSize: "12px",
              backgroundColor: "white",
              color: "black",
              "&:hover": {
                backgroundColor: "white",
              },
            }}
            endIcon={<KeyboardArrowDownIcon />}
            onClick={handleMonthClick}
          >
            {selectedMonth}
          </Button>

          <Menu
            anchorEl={monthAnchorEl}
            open={Boolean(monthAnchorEl)}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            onClose={() => dispatch({ type: "TOGGLE_MONTH" })}
          >
            {monthsData.map((month) => (
              <MenuItem
                key={month.name}
                onClick={() => handleMonthItemClick(month)}
              >
                {month.name}
              </MenuItem>
            ))}
          </Menu>
        </Box>
      </Box>
      <Divider />
      <svg ref={svgRef}></svg>
      <Box style={{ marginLeft: "15px", marginTop: ".5rem" }}>
        {axisLabels.map((item, i) => (
          <span key={i} style={{ color: "#d3d3d3", marginRight: "65px" }}>
            {item < 10 ? `0${item}` : `${item}`}
          </span>
        ))}
      </Box>
    </Box>
  );
};

export default LineChart;
