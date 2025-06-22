import React from "react";
import Student from "./Student";

const student = {
  name: "John Doe",
  english: 90,
  maths: 80,
  computers: 70,
};


const ParentStudent = () => {
  return (
    <div>
      <Student student={student} />
    </div>
  );
};

export default ParentStudent;
