import React from "react";
import SmallBackground from "../SmallBack/SmallBackground";
import lastImage from "./last-image.png"; // Replace with your image path

function Footer() {
  return (
    <div className="footer-container">
      <SmallBackground /> {/* Background component */}
      <div className="last-image-section">
        <img src={lastImage} alt="Last" className="last-image" />
      </div>
    </div>
  );
}

export default Footer;
