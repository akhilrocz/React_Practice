import React from "react";

const Todo = ({ todoItems }) => {
  return (
    <div>
      {todoItems.map((item, index) => (
        <div key={index}>
          <h2>{item.title}</h2>
          <p>{item.description}</p>
          <p style={{ color: item.isCompleted ? "green" : "red" }}>
            {item.title}-{item.description}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Todo;
