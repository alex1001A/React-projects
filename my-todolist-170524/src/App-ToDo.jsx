import './App.css';

import { useEffect, useState } from 'react';

export default function App() {

  const [value, setValue] = useState('')
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    console.log(tasks);
  }, [tasks])

  const addNewwTaskToArr = () => {
    let id = 1

    const task = {
      id: id += 1,
      title: value
    }

    setTasks(prevTasks => {
      const newTasks = [...prevTasks, task]
      console.log(tasks);
      return newTasks
    })

    setValue('')
  }


  return (
    <div className='wrapper'>
      <label htmlFor="inp">Type your task</label>
      <input
        type='text'
        id='inp'
        value={value}
        onChange={e => setValue(e.target.value)}
      />
      <button onClick={addNewwTaskToArr}>Add task</button>
      <ul className='list'>
        {tasks.map((item, index) => (
          <li className='list__item' key={index + 1}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
}

