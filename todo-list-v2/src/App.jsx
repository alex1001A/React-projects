import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

import Button from "./components/Button";
import Input from "./components/Input";
import TodoList from "./components/TodoList";

export default function App() {
  const [value, setValue] = useState("");
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("todos");
    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleChangeValue = (e) => {
    setValue(e.target.value);
  };

  const addNewToDo = () => {
    const newTodo = {
      name: value,
      id: uuidv4(),
    };

    setTodos([...todos, newTodo]);

    setValue("");
  };

  console.log(todos);

  return (
    <div className="App">
      <Input value={value} changeValue={handleChangeValue} />
      <Button onClick={addNewToDo}>Add Todo</Button>
      <TodoList todos={todos}/>
    </div>
  );
}
