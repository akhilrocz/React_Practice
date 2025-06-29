import React from "react";
import About from "./About";

const heading = "About Me";
const name = "Akhil";
const learning = "I am learning React JS currently at neoG Camp.";
const ParentAbout = () => {
  return (
    <div>
      <About heading={heading} name={name} learning={learning} />
    </div>
  );
};

export default ParentAbout;
