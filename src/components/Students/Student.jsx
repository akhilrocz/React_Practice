import React from "react";

const Student = ({ student }) => {
  const totalMarks = student.english + student.maths + student.computers;
  const grade =
    totalMarks >= 225
      ? "A"
      : totalMarks >= 180
      ? "B"
      : totalMarks >= 150
      ? "C"
      : "D";
  return (
    <div>
      <h4>Student Details</h4>
      <p>Name: {student.name}</p>
      <p>English: {student.english}</p>
      <p>Maths: {student.maths}</p>
      <p>Computers: {student.computers}</p>
      <p>Total Marks: {totalMarks}</p>
      <p>Grade: {grade}</p>
    </div>
  );
};

export default Student;
