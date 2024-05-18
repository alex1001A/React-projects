import './App.css';

import { useEffect, useState } from 'react';

export default function App() {

  const [value, setValue] = useState('')
  const [tasks, setTasks] = useState([])
  const [count, setCount] = useState(20)

  function onClick() {
    setCount(prev => prev - 1)
    setCount(prev => prev + 2)
  }
  

  function setToLocalStorsge() {
    const task = {
      title: value
    }

    setTasks(prevTasks => {
      const newTasks = [...prevTasks, task]
      localStorage.setItem('tasksArr', JSON.stringify(tasks))
      return newTasks
    })
    
    
    
    setValue('')
  }
  
  // console.log(tasks);

  return (
    <div className='wrapper'>
      <h1 onClick={onClick}>{count}</h1>
      <label htmlFor="inp">Type your task</label>
      <input
        value={value}
        id='inp'
        type="text"
        onChange={e => setValue(e.target.value)}
      />
      <button onClick={setToLocalStorsge}>Add task</button>
      <ul className='list'>
        {tasks.map((item, index) => (
          <li className='list__item' key={index + 1}>{item.title}</li>
        ))
        }
      </ul>
    </div>
  );
}

