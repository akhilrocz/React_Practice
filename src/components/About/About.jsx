import React, { useState } from "react";

const About = ({ heading, name, learning }) => {
  const [showLearning, setShowLearning] = useState(false);

  const handleLearning = () => {
    setShowLearning(true);
  };
  return (
    <div>
      <h1>Heading: {heading}</h1>
      <h2>Name: {name}</h2>
      <button onClick={handleLearning}>Know More</button>
      {showLearning && <p>Learning: {learning}</p>}
    </div>
  );
};

export default About;
