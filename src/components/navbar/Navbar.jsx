import React from "react";

import SearchIcon from "@mui/icons-material/Search";
import LanguageIcon from "@mui/icons-material/Language";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import ListIcon from "@mui/icons-material/List";
import FullscreenExitIcon from "@mui/icons-material/FullscreenExit";

import img from "../../imgs/pexels-vietnam-photographer-11293709.jpg";

import { useDispatch } from "react-redux/";
import { toggleModeState } from "../../store/darkModeSlice";

import "./Navbar.scss";

const Navbar = () => {
  const dispatch = useDispatch();

  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder="Search..." />
          <SearchIcon />
        </div>
        <div className="items">
          <div className="item">
            <LanguageIcon />
            English
          </div>
          <div className="item">
            <DarkModeOutlinedIcon onClick={() => dispatch(toggleModeState())} />
          </div>
          <div className="item">
            <FullscreenExitIcon />
          </div>
          <div className="item">
            <NotificationsNoneOutlinedIcon />
            <div className="counter">1</div>
          </div>
          <div className="item">
            <ChatBubbleOutlineOutlinedIcon />
            <div className="counter">2</div>
          </div>
          <div className="item">
            <ListIcon />
          </div>
          <div className="item">
            <img src={img} alt="avatar" className="avatar" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
