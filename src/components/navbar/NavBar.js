import React from "react";
import "./NavBar.css";
import { AppBar, Toolbar, InputBase, IconButton, Avatar } from "@mui/material";
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
      }}
    >
      {/* Toolbar for grouping elements */}
      <Toolbar>
        {/* Search Bar */}
        <div id="searchbar-container">
          <div id="searchbar">
            {/* Search icon button */}
            <IconButton size="medium">
              <SearchIcon />
            </IconButton>
            {/* Input field for search */}
            <InputBase inputProps={{ "aria-label": "search" }} />
          </div>
        </div>

        {/* Notification icon */}
        <IconButton size="medium " sx={{ marginLeft: "2rem" }}>
          <NotificationAddIcon
            sx={{
              color: "#101820",
              width: "1.5rem",
              height: "1.5rem",
              position: "relative",
            }}
          />
          {/* Notification indicator */}
          <div id="icon-button"></div>
        </IconButton>

        {/* User Avatar */}
        <IconButton size="medium">
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
        <IconButton size="medium">
          <ArrowDropDownIcon sx={{ fontSize: "x-large", color: "#101820" }} />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};
