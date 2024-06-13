import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

import Input from "./components/Input";
import Button from "./components/Button";
import TodoList from "./components/TodoList";

import "./App.css";

function App() {
  const [value, setValue] = useState("");
  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem("todos")) || []
  );

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const changeValuehandle = (e) => {
    setValue(e.target.value);
  };

  const addTodohandle = () => {
    const newTodo = {
      title: value,
      id: uuidv4(),
    };

    setTodos([...todos, newTodo]);

    setValue("");
  };

  const onDeleteHandle = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => id !== todo.id));
  };

  const onResetHandle = () => {
    setTodos([]);
  };

  return (
    <div className="App">
      <Input value={value} handleChangeValue={changeValuehandle} />
      <Button onClick={addTodohandle}>Add Todo</Button>
      <Button onClick={onResetHandle}>Reset Todo</Button>
      <TodoList onDelete={onDeleteHandle} todos={todos} />
    </div>
  );
}

export default App;
