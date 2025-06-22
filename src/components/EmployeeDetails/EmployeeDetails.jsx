import React from "react";
const employees = [
  {
    name: "Jack Smith",
    level: 2,
    dept: "Tech",
    designation: "Manager",
    salary: 24000,
  },
  {
    name: "Mary Robbins",
    level: 3,
    dept: "Fin",
    designation: "Manager",
    salary: 28000,
  },
  {
    name: "Steve Williams",
    level: 4,
    dept: "Ops",
    designation: "President",
    salary: 35000,
  },
  {
    name: "Bob Andrews",
    level: 1,
    dept: "Fin",
    designation: "Trainee",
    salary: 16500,
  },
  {
    name: "Dave Martin",
    level: 2,
    dept: "Fin",
    designation: "Manager",
    salary: 21700,
  },
  {
    name: "Julia Clarke",
    level: 3,
    dept: "Ops",
    designation: "Manager",
    salary: 26900,
  },
  {
    name: "Kathy Jones",
    level: 4,
    dept: "Tech",
    designation: "President",
    salary: 42500,
  },
  {
    name: "Tom Bresnan",
    level: 2,
    dept: "Tech",
    designation: "Manager",
    salary: 22200,
  },
];
const totalSalary = employees.reduce(
  (total, employee) => total + employee.salary,
  0
);

const level2Employees = employees.filter((employee) => employee.level === 2);

const designationPresentEmployee = employees.filter(
  (employee) => employee.designation === "President"
);

const EmployeeDetails = () => {
  return (
    <div>
      <ul>
        {employees.map((employee) => (
          <li>
            <p>
              name: {employee.name}, level: {employee.level}, dept:{" "}
              {employee.dept}, designation: {employee.designation}, salary:{" "}
              {employee.salary}{" "}
            </p>
          </li>
        ))}

        <div>
          <h2>Total Salary: {totalSalary}</h2>
        </div>

        <div>
          <h2>Displaying employees who are at level 2</h2>
          <ul>
            {level2Employees.map((employee) => (
              <li key={employee}>
                <p>
                  {employee.name}, dept: {employee.dept}, designation:{" "}
                  {employee.designation}, salary; {employee.salary}
                </p>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2>Displaying Designation as President employee details</h2>
          <ul>
            {designationPresentEmployee.map((employee) => (
              <li key={employee}>
                Name; {employee.name}, designation; {employee.designation},
                dept: {employee.dept}, salary: {employee.salary}
              </li>
            ))}
          </ul>
        </div>
      </ul>
    </div>
  );
};

export default EmployeeDetails;
