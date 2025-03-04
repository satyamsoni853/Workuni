import React from "react";
import "./Middle.css";
import Background from "../Background/Background";

function Middle({ mainImage }) {  // Accept mainImage as a prop
  return (
    <div>
      <Background mainImage={mainImage} />  {/* Pass mainImage to Background */}
    </div>
  );
}

export default Middle;
