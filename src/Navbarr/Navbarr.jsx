import React from "react";
import "./Navbarr.css";
import SmallBackground from "../SmallBack/SmallBackground";
import profilePic from "./profile.jpeg"; 
import messageIcon from "./message-icon.png"; 
import searchIcon from "./search-icon.png"; 

const Navbar = () => {
  return (
    <div className="navbar-container">
      <SmallBackground /> {/* Background images */}

      {/* Navbar */}
      <nav className="navbar">
        <img src={profilePic} alt="Profile" className="nav-profile-pic" />
        <div className="search-container">
          <input type="text" placeholder="Search" className="search-input" />
          <img src={searchIcon} alt="Search" className="search-icon" />
        </div>
        <img src={messageIcon} alt="Messages" className="message-icon" />
      </nav>
    </div>
  );
};

export default Navbar;
