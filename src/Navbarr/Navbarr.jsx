import React from "react";
import "./Navbarr.css";
import profilePic from "./profile.jpeg"; // Replace with your image path
import messageIcon from "./message-icon.png"; // Replace with your image path
import searchIcon from "./search-icon.png"; // Replace with your image path



const Navbar = () => {
  return (
    <div className="navbar-container">
      {/* Navbar */}
      <nav className="navbar">
        <img src={profilePic} alt="Profile" className="nav-profile-pic" />
        <div className="search-container">
          <input type="text" placeholder="Search" className="search-input" />
          <img src={searchIcon} alt="Search" className="search-icon" />
        </div>
        <img src={messageIcon} alt="Messages" className="message-icon" />
      </nav>

      {/* Profile Section */}
     

      {/* Last Full-Width Image */}
     
    </div>
  );
};

export default Navbar;
