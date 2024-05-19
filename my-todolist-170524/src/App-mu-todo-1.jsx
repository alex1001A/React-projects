import './App.css';

import { useEffect, useState } from 'react';

//'https://jsonplaceholder.typicode.com/users'

export default function App() {

  const [value, setValue] = useState('')
  const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem('tasks')) || [])

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks])
  
  function addTask() {

    if (value === '') return;

    const task = {title: value}

    setTasks(prevTasks => [...prevTasks, task])

    setValue('')
  }

  function removeTask(index) {
    setTasks(prevTasks => prevTasks.filter((_, i) => i !== index))
  }

  function removeAllTasks() {
    setTasks([]);
  }

  return (
    <div className='wrapper'>
      <input
        type='text'
        value={value}
        onChange={e => setValue(e.target.value)}
      />
      <button onClick={addTask}>Add</button>
      <button onClick={removeAllTasks}>Remove all tasks</button>
      <ul className='list'>
        {
          tasks.map((item, index) => (
            <li key={index}>
              {index + 1}.
              {item.title}
              <button onClick={() => removeTask(index)}>Remove task</button>
            </li>
          ))
        }
      </ul>
    </div>
  );
}

