import React, { useState } from "react";

const ToggleRender = () => {
  const [showText, setShowText] = useState(false);
  const [text, setText] = useState("hii");

  const toggle = () => {
    
setShowText(!showText); //toggles to true and false alternatively
  };
  return (
    <div>
      <button onClick={toggle}>{showText?'Hide':'Show'}</button>
      <p>{showText && text}</p>
    </div>
  );
};

export default ToggleRender;
