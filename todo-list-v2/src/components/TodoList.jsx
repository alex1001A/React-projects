import React from "react";
import Todo from "./Todo";

export default function TodoList({ todos }) {
  return (
    <div>
      <ul>
        {todos.map((item) => (
          <Todo key={item.id} item={item} />
        ))}
      </ul>
    </div>
  );
}
