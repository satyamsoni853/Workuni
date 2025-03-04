import React from 'react';
import './Background.css';
import mainImage from "./main-image.png"; 
import Likesection from '../LikeSection/Likesection';

import smallImage1 from "./small-image1.png";
import smallImage2 from "./small-image2.png";
import smallImage3 from "./small-image3.png";
import smallImage4 from "./small-image4.png";
import smallImage5 from "./small-image5.png";
import smallImage6 from "./small-image6.png";
import smallImage7 from "./small-image7.png";
import smallImage8 from "./small-image8.png";
import smallImage9 from "./small-image9.png";


function Background({ mainImage }) {
  return (
<div>
<div className="profile-card">
      <img src={mainImage} alt="Main Profile" className="main-image" />
      
      {/* Other small images remain the same */}
      <img src={smallImage1} alt="Overlay" className="overlay-image top-left" />
      <img src={smallImage2} alt="Overlay" className="overlay-image top-center" />
      <img src={smallImage3} alt="Overlay" className="overlay-image top-right" />
      <img src={smallImage4} alt="Overlay" className="overlay-image middle-right-top" />
      <img src={smallImage5} alt="Overlay" className="overlay-image middle-right-center" />
      <img src={smallImage6} alt="Overlay" className="overlay-image middle-right-bottom" />
      <img src={smallImage7} alt="Overlay" className="overlay-image bottom-left" />
      <img src={smallImage8} alt="Overlay" className="overlay-image bottom-center" />
      <img src={smallImage9} alt="Overlay" className="overlay-image bottom-right" />
      
    </div>
   
</div>
  );
}

export default Background;



