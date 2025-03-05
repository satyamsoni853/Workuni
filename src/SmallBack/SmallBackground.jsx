import React from "react";
import "./SmallBackground.css";
import smallImage1 from "./small-image1.png";
import smallImage2 from "./small-image2.png";
import smallImage3 from "./small-image3.png";
import smallImage4 from "./small-image4.png";
import smallImage5 from "./small-image5.png";
import smallImage6 from "./small-image6.png";
import smallImage7 from "./small-image7.png";
import smallImage8 from "./small-image8.png";

function SmallBackground() {
  return (
    <div className="background-container">
      <img src={smallImage1} alt="bg1" className="small-bg top-left" />
      <img src={smallImage2} alt="bg2" className="small-bg top-center" />
      <img src={smallImage3} alt="bg3" className="small-bg top-right" />
      <img src={smallImage1} alt="bg1" className="small-bg top-left" />
      <img src={smallImage2} alt="bg2" className="small-bg top-center" />
      <img src={smallImage3} alt="bg3" className="small-bg top-right" />
      <img src={smallImage4} alt="bg4" className="small-bg middle-left" />
      <img src={smallImage5} alt="bg5" className="small-bg middle-right" />
      <img src={smallImage6} alt="bg6" className="small-bg bottom-left" />
      <img src={smallImage3} alt="bg3" className="small-bg top-right" />
      <img src={smallImage4} alt="bg4" className="small-bg middle-left" />
      <img src={smallImage5} alt="bg5" className="small-bg middle-right" />
      <img src={smallImage6} alt="bg6" className="small-bg bottom-left" />
      <img src={smallImage7} alt="bg7" className="small-bg bottom-center" />
      <img src={smallImage8} alt="bg8" className="small-bg bottom-right" />
      <img src={smallImage7} alt="bg7" className="small-bg bottom-center" />
      <img src={smallImage8} alt="bg8" className="small-bg bottom-right" />
    </div>
  );
}

export default SmallBackground;
