import React from "react";
const DisplayImage = ({ imageLink, caption }) => {
  return (
    <div>
      <img src={imageLink} alt="img" width="100px" height="100px"/>
      <p>Caption: {caption}</p>
    </div>
  );
};

export default DisplayImage;
