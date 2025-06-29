import React, { useState } from "react";

const ColorPicker = ({ red, blue, green }) => {
  const [showRed, setShowRed] = useState(false);
  const [showBlue, setShowBlue] = useState(false);
  const [showGreen, setShowGreen] = useState(false);
  const handleRed = () => {
    setShowRed(true);
  };
  const handleBlue = () => {
    setShowBlue(true);
  };
  const handleGreen = () => {
    setShowGreen(true);
  };
  return (
    <div>
      <button onClick={handleRed}>Red</button>
      {showRed && <p>{red}</p>}
      <button onClick={handleBlue}>Blue</button>
      {showBlue && <p>{blue}</p>}
      <button onClick={handleGreen}>Green</button>
      {showGreen && <p>{green}</p>}
    </div>
  );
};

export default ColorPicker;
