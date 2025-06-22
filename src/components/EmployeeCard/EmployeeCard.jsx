import React from "react";

const EmployeeCard = ({ name, designation, workExperience }) => {
  return (
    <div>
      <p>Name of the person is {name}</p>
      <p style={{ color: "green" }}>Designation of person is {designation}</p>
      <p style={{ color: "blue" }}>
        Work experience of person is {workExperience}
      </p>
    </div>
  );
};

export default EmployeeCard;
