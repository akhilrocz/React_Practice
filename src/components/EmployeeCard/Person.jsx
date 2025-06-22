import React from "react";
import EmployeeCard from "./EmployeeCard";
const Person = () => {
  return (
    <div>
      <h2>Person Info</h2>
      <EmployeeCard
        name={"Akhil"}
        designation={"Software Developer"}
        workExperience={"2 years"}
      />
    </div>
  );
};

export default Person;
