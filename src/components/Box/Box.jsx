import React, { useState } from "react";

export default function Box() {
  const [active, setActive] = useState(false);

  return (
    <div
      onClick={() => setActive(!active)}
      style={{
        backgroundColor: active ? "green" : "white",
        padding: 20,
        border: "1px solid black",
      }}
    >
      Click Me!
    </div>
  );
}
