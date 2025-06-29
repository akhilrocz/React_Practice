import React, { useState } from "react";

export default function ToggleRender() {
  const [showText, setShowText] = useState(false);
  const toggle = () => {
    setShowText(!showText);
  };

  return (
    <div>
      <button onClick={toggle}>Toggle</button>
      {showText && <p>Visible Text</p>}
    </div>
  );
}
