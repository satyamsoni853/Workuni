import React from "react";
import "./Rightsection.css";
import image1 from "./1.jpeg";
import image2 from "./image2.png";
import image3 from "./image3.png";
import image4 from "./image4.png";

import Rightsuggested from "../RightSuggested/Rightsuggested";

function Rightsection() {
  return (
    <div className="right-section-container">
      <div className="right-main-box">
        {/* Profile Card */}
        <div className="right-profile-card">
          <img src={image1} alt="Profile" className="right-profile-image" />
          <h2 className="right-profile-name">Rahul Verma</h2>
          <p className="right-profile-title">Uniisphere</p>
          <p className="right-profile-location">New Delhi, Delhi</p>
          <p className="right-profile-description">
            The actual idea of Uniisphere was of The Founder Himanshu who worked
            for months to this all time ....{" "}
            <span className="right-see-more">see more</span>
          </p>
        </div>
        <div className="right-suggested">Suggested</div>

        {/* Suggested Section */}
        <Rightsuggested profileImage={image1} />
        <Rightsuggested profileImage={image2} />
        <Rightsuggested profileImage={image3} />
        <Rightsuggested profileImage={image4} />
        <Rightsuggested profileImage={image1} />
        <Rightsuggested profileImage={image2} />
        <Rightsuggested profileImage={image3} />
        <Rightsuggested profileImage={image3} />
        

      </div>
    </div>
  );
}

export default Rightsection;
