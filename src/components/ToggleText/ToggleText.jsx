import React, { useState } from "react";

export default function ToggleText() {
  const [text, setText] = useState("");

  const handleClick = () => {
    setText((prev) => (prev === "hello" ? "" : "hello"));
  };

  return (
    <div>
      <button onClick={handleClick}>Toggle</button>
      <p>{text}</p>
    </div>
  );
}
