import "./App.css";

import React, { useEffect, useState } from "react";

//'https://jsonplaceholder.typicode.com/users'

export default function App() {
  const [value, setValue] = useState("");
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []
  );
  const [count, setCount] = useState(0);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
    setCount((prevCount) => (prevCount = tasks.length));
  }, [tasks]);

  function addNewTask() {
    const task = { title: value };
    setTasks((prevTasks) => [...prevTasks, task]);

    setValue("");
  }

  function removeAllTasks() {
    setTasks([]);
  }

  function deleteTask(index) {
    setTasks((prevTasks) => prevTasks.filter((_, i) => i !== index));
  }

  console.log(tasks);

  return (
    <div>
      <h1>{count}</h1>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={addNewTask}>Add task</button>
      <button onClick={removeAllTasks}>Delete all tasks</button>
      <ul>
        {tasks.map((item, index) => {
          return (
            <li key={index}>
              {index + 1}. {item.title}
              <button onClick={() => deleteTask(index)}>Remove task</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
