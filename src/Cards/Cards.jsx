import React from "react";
import Connect from "../Connect/Connect";
import Middle from "../Middle/Middle";
import Likesection from "../LikeSection/Likesection";
import Rightsection from "../RightSection/Rightsection";
import LeftSection1 from "../Leftsection-1/Leftsection1";
import LeftSection2 from "../Leftsection-2/LeftSection2";
import Dextopnavbarr from "./dextopnavbarr.png";


import postImage1 from "./post-image.png";
import postImage2 from "./post-image2.png";
import Footer from '../Footer/Footer.jsx'

import "./Cards.css"; // External CSS for styling
import Navbar from "../Navbarr/Navbarr";
import Dextopmiddle from "../Dextopmidlle/Dextopmiddle";
import Mobilemidle from "../Mobilemiddle/Mobilemidle";

function Cards() {
  return (
    <div>
      {/* Center the image */}
      <div className="navbar-container-dextop">
        <img src={Dextopnavbarr} alt="Navbar" className="centered-image" />
      </div>

      <div className="main-layout">
        {/* Left Section */}
        <div className="left-column">
          <LeftSection1 />
          <LeftSection2 />
        </div>

        {/* Middle Section */}
        <div className="middle-column">
          <div className="cards">
            <div className="card">
              <Navbar />
              <Connect />
              <Middle mainImage={postImage1} />
              <Likesection />
              
              <Connect />
              <Middle mainImage={postImage2} />
              <Likesection />
              <Connect />
              <Middle mainImage={postImage1} />
              <Likesection />
              <Footer/>
              
            </div>
            <div className="card1">
              <Dextopmiddle/>
            </div>
            
           
          </div>
        </div>

        {/* Right Section */}
        <div className="right-column">
          <Rightsection />
        </div>
      </div>
    </div>
  );
}


export default Cards;
