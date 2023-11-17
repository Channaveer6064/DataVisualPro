import React, { useState } from "react";
import "./SideBar.css";
import { Link } from "react-router-dom";
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import DescriptionIcon from "@mui/icons-material/Description";
import PersonIcon from "@mui/icons-material/Person";
import ContactsIcon from "@mui/icons-material/Contacts";

const Sidebar = () => {
  // State to track the selected menu item
  const [selectedItem, setSelectedItem] = useState("Dashboard");

  // Function to handle click on a menu item
  const handleItemClick = (itemName) => {
    setSelectedItem(itemName);
  };

  // Array of menu items with their text, icon, and path
  const menuItems = [
    { text: "Dashboard", icon: <DashboardIcon />, path: "/" },
    { text: "Accounts", icon: <AccountBalanceWalletIcon />, path: "/" },
    { text: "Payroll", icon: <AttachMoneyIcon />, path: "/" },
    { text: "Reports", icon: <DescriptionIcon />, path: "/" },
    { text: "Advisor", icon: <PersonIcon />, path: "/" },
    { text: "Contacts", icon: <ContactsIcon />, path: "/" },
  ];

  return (
    <Drawer
      variant="permanent"
      elevation={0}
      sx={{
        borderRight: "none",
        backgroundColor: "transparent",
        width: "15rem",
        flexShrink: 0,
        "& .MuiDrawer-paper": { borderWidth: 0 },
        "& .MuiDrawer-paper": { width: "15rem", boxSizing: "border-box" },
      }}
    >
      {/* List containing the menu items */}
      <List>
        {/* Logo */}
        <ListItem>
          <ListItemIcon>
            <Link
              to="/"
              style={{
                marginBottom: "2.5rem",
                textDecoration: "none",
                color: "inherit",
              }}
            >
              <div>
                <img
                  id="logo-img"
                  src="https://www.assiduusglobal.com/images/assiduus-logo-dark.png"
                  alt="Logo"
                />
              </div>
            </Link>
          </ListItemIcon>
        </ListItem>

        {/* Mapping through menu items to create list items */}
        {menuItems.map((item, index) => (
          <ListItem
            sx={{ marginBottom: ".5rem" }}
            className={
              selectedItem === item.text
                ? "selected listItem"
                : "unSelected listItem"
            }
            key={index}
            onClick={() => handleItemClick(item.text)}
          >
            {/* Icon for the menu item */}
            <ListItemIcon
              className={
                selectedItem === item.text
                  ? "selected listItem"
                  : "unSelected listItem"
              }
            >
              {item.icon}
            </ListItemIcon>
            {/* Link to the path with text for the menu item */}
            <Link
              className={
                selectedItem === item.text
                  ? "selected listText"
                  : "unSelected listText"
              }
              to={item.path}
            >
              <ListItemText primary={item.text} />
            </Link>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default Sidebar;
