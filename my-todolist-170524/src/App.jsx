import "./App.css";

import React, {useState} from "react";
import Counter from "./components/Counter/Counter";
import Button from "./components/Counter/Button";

//'https://jsonplaceholder.typicode.com/users'


export default function App() {

const [count, setCount] = useState(0)

const increment = () => {
  setCount(prevCount => prevCount + 1)
}

  return (
    <div>
      <Counter count={count}/>
      <Button upCount={increment}/>
      <Button upCount={increment}/>
      <Button upCount={increment}/>
      <Button upCount={increment}/>

    </div>
  );
}
