import React from "react";

import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import StoreIcon from "@mui/icons-material/Store";
import LocalPostOfficeIcon from "@mui/icons-material/LocalPostOffice";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import AnalyticsIcon from "@mui/icons-material/Analytics";
import NotificationsActiveOutlinedIcon from "@mui/icons-material/NotificationsActiveOutlined";
import SettingsSystemDaydreamOutlinedIcon from "@mui/icons-material/SettingsSystemDaydreamOutlined";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import SettingsIcon from "@mui/icons-material/Settings";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import LogoutIcon from "@mui/icons-material/Logout";

import "./Sidebar.scss";
import { Link } from "react-router-dom";

// Redux

import { darkModeState, lightModeState } from "../../store/darkModeSlice";
import { logout } from "../../store/authSlice";
import { useDispatch, useSelector } from "react-redux";

const Sidebar = () => {
  const { darkMode } = useSelector((state) => {
    return state.mode;
  });

  const dispatch = useDispatch();

  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">Admin</span>
        </Link>
      </div>
      <div className="center">
        <ul>
          <p className="title">Main</p>
          <Link to="/" style={{ textDecoration: "none" }}>
            <li>
              <DashboardIcon />
              <span>Dashboard</span>
            </li>
          </Link>
          <p className="title">Lists</p>
          <Link to="/users" style={{ textDecoration: "none" }}>
            <li>
              <PersonOutlineOutlinedIcon />
              <span>Users</span>
            </li>
          </Link>
          <Link to="/products" style={{ textDecoration: "none" }}>
            <li>
              <StoreIcon />
              <span>Products</span>
            </li>
          </Link>
          <li>
            <LocalPostOfficeIcon />
            <span>Orders</span>
          </li>
          <li>
            <LocalShippingIcon />
            <span>Delivery</span>
          </li>
          <p className="title">Useful</p>
          <li>
            <AnalyticsIcon />
            <span>Stats</span>
          </li>
          <li>
            <NotificationsActiveOutlinedIcon />
            <span>Notifications</span>
          </li>
          <p className="title">Service</p>
          <li>
            <SettingsSystemDaydreamOutlinedIcon />
            <span>System Health</span>
          </li>
          <li>
            <PsychologyOutlinedIcon />
            <span>Logs</span>
          </li>
          <li>
            <SettingsIcon />
            <span>Settings</span>
          </li>
          <p className="title">User</p>
          <li>
            <AccountBoxIcon />
            <span>Profile</span>
          </li>
          <li onClick={() => dispatch(logout())}>
            <LogoutIcon />
            <span>Logout</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <span
          className={darkMode ? "color_option" : "color_option active"}
          onClick={() => dispatch(lightModeState())}
        ></span>
        <span
          className={darkMode ? "color_option active" : "color_option"}
          onClick={() => dispatch(darkModeState())}
        ></span>
      </div>
    </div>
  );
};

export default Sidebar;
