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
  const [selectedItem, setSelectedItem] = useState("Dashboard");

  const handleItemClick = (itemName) => {
    setSelectedItem(itemName);
  };

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
      sx={{
        width: "15rem",
        flexShrink: 0,
        "& .MuiDrawer-paper": { width: "15rem", boxSizing: "border-box" },
      }}
    >
      {" "}
      <List>
        <ListItem>
          <ListItemIcon>
            <Link
              to="/"
              style={{
                marginBottom: "2rem",
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

        {menuItems.map((item, index) => (
          <ListItem
            className={
              selectedItem === item.text
                ? "selected listItem"
                : "unSelected listItem"
            }
            key={index}
            onClick={() => handleItemClick(item.text)}
          >
            <ListItemIcon
              className={
                selectedItem === item.text
                  ? "selected listItem"
                  : "unSelected listItem"
              }
            >
              {item.icon}
            </ListItemIcon>
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
