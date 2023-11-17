import React from "react";
import "./NavBar.css";
import {
  AppBar,
  Toolbar,
  InputBase,
  IconButton,
  Avatar,
  Box,
} from "@mui/material";
import NotificationAddIcon from "@mui/icons-material/NotificationAdd";
import SearchIcon from "@mui/icons-material/Search";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

export const NavBar = () => {
  return (
    // Main AppBar component
    <AppBar
      position="static"
      sx={{
        justifyContent: "center",
        backgroundColor: "#ffffff",
        height: "6rem",
        boxShadow: "none",
      }}
    >
      {/* Toolbar for grouping elements */}
      <Toolbar>
        {/* Search Bar */}
        <Box id="searchbar-container">
          <Box id="searchbar">
            {/* Search icon button */}
            <IconButton size="large" disableRipple>
              <SearchIcon />
            </IconButton>
            {/* Input field for search */}
            <InputBase inputProps={{ "aria-label": "search" }} />
          </Box>
        </Box>

        {/* Notification icon */}
        <IconButton size="large " sx={{ marginLeft: "1.5rem" }} disableRipple>
          <NotificationAddIcon
            sx={{
              color: "#101820",
              width: "1.5rem",
              height: "1.5rem",
              position: "relative",
            }}
          />
          {/* Notification indicator */}
          <Box id="icon-button"></Box>
        </IconButton>

        {/* User Avatar */}
        <IconButton size="large" disableRipple>
          <Avatar sx={{ width: "2rem", height: "2rem", marginLeft: "1.5rem" }}>
            {/* User Avatar Image */}
            <img
              src="https://images.unsplash.com/photo-1525134479668-1bee5c7c6845?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHBvcnRyYWl0c3xlbnwwfHwwfHx8MA%3D%3D"
              alt="profile pic" // Alt text for accessibility
              style={{ width: "100%", height: "100%", borderRadius: "50%" }}
            />
          </Avatar>
        </IconButton>

        {/* Dropdown Arrow */}
        <IconButton size="medium" disableRipple>
          <ArrowDropDownIcon sx={{ fontSize: "x-large", color: "#101820" }} />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};
