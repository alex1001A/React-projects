import React, { useState } from 'react'

export default function InputField({tasks, setTasks}) {

    const [value, setValue] = useState('')
    // const [task, setTask] = useState()

    function addTaskToTaskQueue() {
        // const task = {
        //     title: value
        // } 

        setTasks([...tasks, {title: value}])
        console.log(tasks);
    }

    

    return (
        <div className='input-wrapper'>
            
        </div>
    )
}
