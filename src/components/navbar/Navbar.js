import React from "react";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import { Link } from "react-router-dom";
import "./navbar.scss";
import { useContext } from "react";
import { DarkModeContext } from "../../context/darkModeContext";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import { AuthContext } from "../../context/authContext";


const Navbar = () => {

  const {toggle, darkMode} = useContext(DarkModeContext);
  const {currentUser} = useContext(AuthContext);

  return (
    <>
      <div className="navbar">
        <div className="left">
          <Link to="/" style={{ textDecoration: "none" }}>
            <span>MEKROM</span>
          </Link>
          <HomeOutlinedIcon style={{cursor:"pointer"}}/>
          {darkMode ?
          (<WbSunnyOutlinedIcon onClick={toggle} style={{cursor:"pointer"}} />):
           (<DarkModeOutlinedIcon onClick={toggle} style={{cursor:"pointer"}}/>)}
          <GridViewOutlinedIcon style={{cursor:"pointer"}}/>
          <div className="search">
            <SearchOutlinedIcon />
            <input type="text" placeholder="Search..." />
          </div>
        </div>
        <div className="right">
          <PersonOutlinedIcon/>
          <EmailOutlinedIcon/>
          <NotificationsOutlinedIcon />
          <div className="user">
            <img
              src={currentUser.profilePic} alt=""
            />
            <span>{currentUser.name}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;