import React from "react";
import Connect from "../Connect/Connect";
import Middle from "../Middle/Middle";
import Likesection from "../LikeSection/Likesection";

import postImage1 from "./post-image.png"; // Replace with actual image paths
import postImage2 from "./post-image2.png";
// import postImage3 from "./post-image3.png";

function Cards() {
  return (
    <div className="cards">
      <div className="card-1">
        <Connect />
        <Middle mainImage={postImage1} />
        <Likesection />
      </div>
      <div className="card-2">
        <Connect />
        <Middle mainImage={postImage2} />
        <Likesection />
      </div>
      <div className="card-3">
        <Connect />
        <Middle mainImage={postImage2} />
        <Likesection />
      </div>
    </div>
  );
}

export default Cards;
