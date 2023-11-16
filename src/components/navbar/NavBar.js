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
            <IconButton size="medium" disableRipple>
              <SearchIcon />
            </IconButton>
            {/* Input field for search */}
            <InputBase inputProps={{ "aria-label": "search" }} />
          </Box>
        </Box>

        {/* Notification icon */}
        <IconButton size="medium " sx={{ marginLeft: "2rem" }} disableRipple>
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
        <IconButton size="medium" disableRipple>
          <Avatar
            sx={{ width: "1.5rem", height: "1.5rem", marginLeft: "2rem" }}
          >
            {/* User Avatar Image */}
            <img
              src="https://cdn.pixabay.com/photo/2017/03/01/22/18/avatar-2109804_640.png"
              alt="profile pic" // Alt text for accessibility
              style={{ width: "50%", height: "auto" }}
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
