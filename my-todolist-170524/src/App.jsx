import './App.css';
// import InputField from './components/InputField';

import { useState, useEffect } from 'react';

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [value, setValue] = useState('');

  // useEffect(() => {
  //   console.log(tasks);
  // }, [tasks]);

  function addTaskToTaskQueue() {
    const newTask = { title: value };
    setTasks(prevTasks => [...prevTasks, newTask]);
    setValue(''); // Сбросить значение инпута после добавления задачи
    console.log(newTask);
    console.log(tasks);
  }

  return (
    <div className='Wrapper'>
      <label htmlFor='task'>Type your task </label>
      <input
        value={value}
        id='task'
        type="text"
        onChange={e => setValue(e.target.value)}
      />
      <button onClick={addTaskToTaskQueue}>Add to Tasks</button>
      <ul>
        {tasks.map((item, index) => (
          <li key={index}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
}

