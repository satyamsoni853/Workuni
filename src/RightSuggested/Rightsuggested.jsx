import React from "react";
import Connecticon from './connect-icon.png'

function Rightsuggested({ profileImage }) {
  return (
    <div>
      
      <div className="suggested-people">
        <img src={profileImage} alt="Profile" className="suggested-profile-image" />

        <div className="suggested-text">
          <p>Ajay Pratap</p>
          <p>BHU (Banaras...)</p>
        </div>

        <img
          src={Connecticon}
          alt="Connect"
          className="suggested-connect-icon"
        />
      </div>
    </div>
  );
}

export default Rightsuggested;
