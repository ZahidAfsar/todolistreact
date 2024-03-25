import React, {useState} from 'react'


const ToDoFormComponent = ({addTodo}) => {
    const [value, setValue] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();

        addTodo(value);

        setValue("");
    }

  return (
    <form className="ToDoForm" onSubmit={handleSubmit} >
        <input type='text' className="todo-input" placeholder='What is the task to do today?' value={value} onChange={(e) => setValue(e.target.value)} />
        <button type='submit' className='todo-btn'>Add Task</button>
    </form>
  )
}

export default ToDoFormComponent
