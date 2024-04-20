import Header from "./Components/Header/Header";
import Tasks from "./Components/Tasks/Tasks";

import { useState } from "react";

export default function App() {


const [tasks, setTasks] = useState([])

function addTask(taskTitle) {
  setTasks([
    ...tasks, 
    {
      id: crypto.randomUUID(),
      title: taskTitle,
      isCompleted: false
    }
  ])
}

function toggleTaskCompletedById(taskId) {
  const newTasks = tasks.map(task => {
    if(task.id === taskId) {
      return {
        ...task, 
        isCompleted: !task.isCompleted
      }
    }
    return task
  })
  setTasks(newTasks)
}

  return (
    <>
      <Header onAddTask={addTask}/>
      <Tasks
      tasks={tasks}
      onComplete={toggleTaskCompletedById}
      />
    </>
  )
}

