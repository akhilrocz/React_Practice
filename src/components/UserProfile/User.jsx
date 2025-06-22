import React from "react";

const User = ({ userData }) => {
  return (
    <div>
      <ul>
        <li>
          <p>Name: {userData.name}</p>
        </li>
        <li>
          <p>Age: {userData.age}</p>
        </li>

        <li>
          <p>Email: {userData.email}</p>
        </li>
      </ul>
    </div>
  );
};

export default User;
