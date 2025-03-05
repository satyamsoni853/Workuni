import React from 'react';
import './Dextopmiddle.css';
import profileimage from './profileimage.png';
import threedotimage from './dot.png';
import middleimage from './middleimage.png';
import connectimage from './connect.png';
import likeimage from './like.png';
import commentimage from './comment.png';
import shareimage from './share.png';
import SmallBackground from '../SmallBack/SmallBackground';

function Dextopmiddle() {
  return (
    <div>
      {/* Small Background Component */}
      <SmallBackground />

      {/* Profile Card */}
      <div className="dextop-profile-card">
        <div className="dextop-profile-header">
          {/* Profile Picture */}
          <img src={profileimage} alt="Profile" className="dextop-profile-img" />

          {/* Name and Details */}
          <div className="dextop-profile-details">
            <div className="dextop-profile-info">
              <span className="dextop-profile-name">
                Vijay Prasad <span className="dextop-profile-time">18h</span>
              </span>
              <div className="dextop-profile-subtext">University of Delhi | Works at Google</div>
            </div>
          </div>

          {/* Three-dot Menu */}
          <img src={threedotimage} alt="Options" className="dextop-three-dot-menu" />
        </div>

        {/* Middle Image Section */}
        <div className="dextop-middle-image-container">
          <img src={middleimage} alt="Post Content" className="dextop-middle-image" />
        </div>

        {/* Action Buttons Section */}
        <div className="dextop-action-buttons">
          {/* Connect Button on the Left */}
          <img src={connectimage} alt="Connect" className="dextop-action-icon dextop-connect-icon" />

          {/* Like, Share, Comment Buttons on the Right */}
          <div className="dextop-right-actions">
            <img src={shareimage} alt="Share" className="dextop-action-icon" />
            <img src={commentimage} alt="Comment" className="dextop-action-icon" />
            <img src={likeimage} alt="Like" className="dextop-action-icon" />
          </div>
        </div>

        {/* Profile Description */}
        <p className="dextop-profile-desc">
          Vijay Prashad has evolved to go in the university and will probably prefer the university of... more
        </p>
      </div>
    </div>
  );
}

export default Dextopmiddle;
