import React, { useEffect } from "react";

export default function Logger() {
  useEffect(() => {
    console.log("Component mounted!");
  },[]); 

  return <div>Logger Component</div>;
}
