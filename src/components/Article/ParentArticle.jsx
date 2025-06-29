import React from "react";
import Article from "./Article";

const title = "React is awesome";
const content = "React is a JavaScript library for building user interfaces.";

const ParentArticle = () => {
  return (
    <div>
      <Article title={title} content={content} />
    </div>
  );
};

export default ParentArticle;
