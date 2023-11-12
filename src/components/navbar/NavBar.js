import React from "react";
import { AppBar, Toolbar, InputBase, IconButton, Avatar } from "@mui/material";
import NotificationAddIcon from "@mui/icons-material/NotificationAdd";
import SearchIcon from "@mui/icons-material/Search";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

export const NavBar = () => {
  return (
    <AppBar
      position="static"
      sx={{
        display: "flex",
        alignItems: "center",
        backgroundColor: "white",
        height: "5rem",
        justifyContent: "center",
      }}
    >
      <Toolbar>
        <div
          style={{
            display: "flex inline",
            alignItems: "center",
            marginLeft: "70vw",
            backgroundColor: "#f6f7f9",
            borderRadius: "8px",
            height: "2rem",
          }}
        >
          <div style={{ position: "relative" }}>
            <IconButton size="medium">
              <SearchIcon />
            </IconButton>
            <InputBase inputProps={{ "aria-label": "search" }} />
          </div>
        </div>

        <IconButton size="medium" sx={{ marginLeft: "2rem" }}>
          <NotificationAddIcon
            sx={{
              color: "#101820",
              width: "1.5rem",
              height: "1.5rem",
              position: "relative",
            }}
          />
          <div
            style={{
              display: "inline",
              position: "absolute",
              backgroundColor: "#01b876",
              height: "10px",
              width: "10px",
              borderRadius: "10px",
              top: "12px",
              right: "6.5px",
            }}
          ></div>
        </IconButton>

        <IconButton size="medium">
          <Avatar
            sx={{ width: "1.5rem", height: "1.5rem", marginLeft: "2rem" }}
          >
            <img
              src="https://cdn.pixabay.com/photo/2017/03/01/22/18/avatar-2109804_640.png"
              alt="profile pic"
              style={{ width: "50%", height: "auto" }}
            />
          </Avatar>
        </IconButton>

        <IconButton size="medium">
          <ArrowDropDownIcon sx={{ fontSize: "x-large", color: "#101820" }} />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};
