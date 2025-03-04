import React from 'react';
import './Likesection.css';
import likeIcon from "./like-icon.png"; 
import heartIcon from "./heart-icon.png"; 
import clapIcon from "./clap-icon.png"; 
import smallImage1 from "./small-image1.png";
import smallImage2 from "./small-image2.png";
import smallImage3 from "./small-image3.png";
import smallImage4 from "./small-image4.png";


function Likesection() {
  return (
    <div className="like-card">
      {/* Background Small Images */}
      <img src={smallImage1} alt="Overlay" className="small-img top-left" />
      <img src={smallImage2} alt="Overlay" className="small-img top-center" />
      <img src={smallImage3} alt="Overlay" className="small-img top-right" />
      <img src={smallImage4} alt="Overlay" className="small-img mid-right-top" />
      

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
