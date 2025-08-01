import React, { useState,useEffect } from "react";

const DarkModeToggle = () => {
  const [showdarkMode, setShowDarkMode] = useState(false);

  const darkModeToggle = () => {
    setShowDarkMode(!showdarkMode); //toggles between black and white
  };


  useEffect(()=>{
    if(showdarkMode){
        document.body.classList.add("dark-mode")
    }else{
        document.body.classList.remove("dark-mode");
    }
  },[showdarkMode])

 

  return (
    <div>
      <h1>{showdarkMode ? "Dark Mode" : "Light Mode"}</h1>
      <button onClick={darkModeToggle}>Toggle Dark Mode</button>
    </div>
  );
};

export default DarkModeToggle;
