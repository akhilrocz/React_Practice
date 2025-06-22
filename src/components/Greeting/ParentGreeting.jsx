import React from "react";
import Greeting from "./Greeting";

const name = "Akhil";

const ParentGreeting = () => {
  return (
    <div>
      <Greeting name={name} />
    </div>
  );
};

export default ParentGreeting;
