import React from 'react'
import postImage1 from "./post-image.png";
import postImage2 from "./post-image2.png";

function Mobilemidle() {
  return (
    <div>
      <Navbar />
              <Connect />
              <Middle mainImage={postImage1} />
              <Likesection />
    </div>
  )
}

export default Mobilemidle