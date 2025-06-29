import React, { useState } from "react";

const Article = ({ title, content }) => {
  const [showContent, setShowContent] = useState(false);
  const handleContent = () => {
    setShowContent(true);
  };
  return (
    <div>
      <h1>Title: {title}</h1>
      <button onClick={handleContent}>Know More</button>
      {showContent && <p>Content: {content}</p>}
    </div>
  );
};

export default Article;
