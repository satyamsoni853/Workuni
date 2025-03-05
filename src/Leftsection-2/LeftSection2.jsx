import React from "react";
import "./LeftSection2.css";
import image1 from "./image1.png";
import image2 from "./image2.png";

const newsData = [
  { id: 1, img: image1, title: "Students Association Union.....", text: "As per the rumors it is said that the elections of this year is going..." },
  { id: 2, img: image2, title: "Students Association Union.....", text: "As per the rumors it is said that the elections of this year is going..." },
  { id: 3, img: image1, title: "Students Association Union.....", text: "As per the rumors it is said that the elections of this year is going..." },
  { id: 4, img: image2, title: "Students Association Union.....", text: "As per the rumors it is said that the elections of this year is going..." },
  { id: 5, img: image2, title: "Students Association Union.....", text: "As per the rumors it is said that the elections of this year is going..." }
];

const LeftSection2 = () => {
  return (
    <div className="left-section-2">
      <h2 className="title">Top News</h2>
      <ul>
        {newsData.map((news) => (
          <li key={news.id} className="news-item">
            <img src={news.img} alt="news" className="news-image" />
            <div className="news-content">
              <h3 className="news-title">{news.title}</h3>
              <p className="news-text">{news.text} <span className="more">more</span></p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LeftSection2;
