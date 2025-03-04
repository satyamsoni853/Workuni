import React from "react";
import SmallBackground from "../SmallBack/SmallBackground";
import profilePic from "./profile.jpeg"; 
import connectIcon from "./connect-icon.png"; 
import menuIcon from "./menu-icon.png"; 

function Connect() {
  return (
    <div className="connect-container">
      <SmallBackground /> {/* Background component */}
      <div className="page-container">
        <div className="middle-section">
          <div className="profile-section">
            <div className="profile-info">
              <img src={profilePic} alt="Profile" className="profile-pic" />
              <div className="profile-name-time">
                <h4>
                  Vijay Prasad <span className="time-text">18h</span>
                </h4>
                <p>University of Delhi</p>
              </div>
            </div>
            <div className="profile-actions">
              <img src={connectIcon} alt="Connect" className="connect-icon" />
              <img src={menuIcon} alt="Menu" className="menu-icon" />
            </div>
          </div>   
        </div>
      </div>
    </div>
  );
}

export default Connect;
