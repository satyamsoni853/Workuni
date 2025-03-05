import React from 'react';
import './Leftsection1.css';
import image1 from './image1.png';
import image2 from './image2.png';
import image3 from './image3.png';

function LeftSection1() {
  return (
    <div className="left-section">
      <div className="left-section-container">
        <h2 className="left-section-title">Upcoming Events</h2>

        {/* Event List */}
        <div className="left-event-list">
          {/* Event 1 */}
          <div className="left-profile-card">
            <img src={image1} alt="Event" className="left-profile-image" />
            <div className="left-profile-text">
              <p className="left-profile-date">26 Jan 2025</p>
              <div className="left-profile-footer">
                <p className="left-profile-university">University of Delhi</p>
                <p className="left-profile-read-more">Read More</p>
              </div>
            </div>
          </div>

          {/* Event 2 */}
          <div className="left-profile-card">
            <img src={image2} alt="Event" className="left-profile-image" />
            <div className="left-profile-text">
              <p className="left-profile-date">15 Feb 2025</p>
              <div className="left-profile-footer">
                <p className="left-profile-university">IIT Bombay</p>
                <p className="left-profile-read-more">Read More</p>
              </div>
            </div>
          </div>

          {/* Event 3 */}
          <div className="left-profile-card">
            <img src={image3} alt="Event" className="left-profile-image" />
            <div className="left-profile-text">
              <p className="left-profile-date">10 Mar 2025</p>
              <div className="left-profile-footer">
                <p className="left-profile-university">BITS Pilani</p>
                <p className="left-profile-read-more">Read More</p>
              </div>
            </div>
          </div>
        </div>

        {/* Grey line and "See All" text */}
        <div className="left-see-all-container">
          <div className="left-see-all-line"></div>
          <p className="left-see-all-text">See All</p>
        </div>
      </div>
    </div>
  );
}

export default LeftSection1;
