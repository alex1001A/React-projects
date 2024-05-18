import './App.css';

import { useState } from 'react';

//'https://jsonplaceholder.typicode.com/users'

export default function App() {

  const [value, setValue] = useState('')
  const [tasks, setTasks] = useState([])

  const addNewTask = () => {
    const task = {
      title: value
    }

    setTasks(prevTasks => {
      const newTasks = [...prevTasks, task]
      return newTasks
    })

    setValue('')
  }

function buttonRemove(index) {
  setTasks(prevTasks => prevTasks.filter((_, i) => i !== index))
}

const editTaskBtn = (index) => {
  if (value.trim() === '') return; // Предотвращаем изменение на пустое значение

  setTasks(prevTasks =>
    prevTasks.map((obj, i) =>
      i === index ? { ...obj, title: value } : obj
    )
  );

  setValue('')
};

function removeAllTasks() {
  setTasks([])
}

  return (
    <div>
      <input
       type='text'
       value={value}
       onChange={e => setValue(e.target.value)}
      />
      <button onClick={addNewTask}>Add</button>
      <button onClick={removeAllTasks}>Remove all tasks</button>
      <ul>
        {
          tasks.map((item, index) => (
            <li key={index}>
              {item.title}
              <button onClick={() => editTaskBtn(index)}>Edit</button>
              <button onClick={() => buttonRemove(index)}>X</button>
              </li>
          ))
        }
      </ul>
    </div>
  );
}

