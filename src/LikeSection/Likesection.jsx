import React from 'react';
import './Likesection.css';
import SmallBackground from '../SmallBack/SmallBackground';
import likeIcon from "./like-icon.png"; 
import heartIcon from "./heart-icon.png"; 
import clapIcon from "./clap-icon.png"; 

function Likesection() {
  return (
    <div className="like-card">
      <SmallBackground /> {/* Background component */}

      {/* Like Content */}
      <div className="like-content">
        <div className="like-details">
          <p className="like-count">4012 likes</p>
          <div className="emoji-icons">
            <img src={clapIcon} alt="Clap" className="emoji-icon" />
            <img src={heartIcon} alt="Heart" className="emoji-icon" />
            <img src={likeIcon} alt="Like" className="emoji-icon" />
          </div>
        </div>
        <p className="description">
          Vijay Prashad Been have evolved to go in the university and will
          probably prefer the university of... more
        </p>
      </div>
    </div>
  );
}

export default Likesection;
