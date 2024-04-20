import s from './Task.module.css'

import { FaRegTrashAlt } from "react-icons/fa";
import { CiCircleCheck } from "react-icons/ci";



export default function Task({task, onComplete}) {
    return (
        <div className={s.task}>
            <button className={s.checkContainer} onClick={() => onComplete(task.id)}>
                {task.isCompleted ? <CiCircleCheck /> : <div/>}
            </button>
            <p>{task.title}</p>
            <button className={s.deleteButton}><FaRegTrashAlt size={16} /></button>
        </div>
    )
}
