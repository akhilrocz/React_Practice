import React, { useState } from "react";

export default function NameForm() {
  const [name, setName] = useState("");

  const handleSubmit = () => {
    alert(`Submitted: ${name}`);
    setName("")
  };

  return (
    <div>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter name"
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}
