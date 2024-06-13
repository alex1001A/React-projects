import React from "react";
import Todo from "./Todo";

export default function TodoList({ todos, onDelete }) {
  return (
    <div className="list">
      <ol>
        {
        todos.map((todo) => <Todo onDelete={onDelete} item={todo}/>)
        }
      </ol>
    </div>
  );
}
