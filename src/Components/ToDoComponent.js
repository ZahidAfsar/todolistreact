import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import EditToDoFormComponent from './EditToDoFormComponent'

const ToDoComponent = ({task, toggleComplete, deleteToDo, EditToDoFormComponent}) => {
  return (
    <div className='Todo' >
      <p onClick={() => toggleComplete(task.id)} className={`${task.completed ? 'completed' : "" }`}>{task.task}</p>
      <div>
        <FontAwesomeIcon icon={faPenToSquare} onClick={() => EditToDoFormComponent(task.id)} />
        <FontAwesomeIcon icon={faTrash} onClick={() => deleteToDo(task.id)} />
      </div>
    </div>
  )
}

export default ToDoComponent
