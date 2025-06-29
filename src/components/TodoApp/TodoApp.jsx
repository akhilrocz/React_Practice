/* eslint-disable array-callback-return */
import React, { useState } from "react";

export default function TodoApp() {
  const [tasks, setTasks] = useState([
    { id: 1, title: "Learn React", completed: false },
    { id: 2, title: "Build App", completed: false },
  ]);

  const toggleComplete = (id) => {
    const updated = tasks.map((task)=>task.id===id?{...task,completed:!task.completed}:task);
    setTasks(updated);
  };

  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => toggleComplete(task.id)}
          />
          {task.title}
        </li>
      ))}
    </ul>
  );
}
