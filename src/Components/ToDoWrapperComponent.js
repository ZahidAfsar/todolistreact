import React, {useState} from 'react'
import ToDoFormComponent from './ToDoFormComponent'
import {v4 as uuidv4} from 'uuid';
import ToDoComponent from './ToDoComponent';
import EditToDoFormComponent from './EditToDoFormComponent';
uuidv4();

const ToDoWrapperComponent = () => {

    const [todos, setTodos] = useState([]);

    const addTodo = (todo) => {
        setTodos([...todos, {id: uuidv4(), task: todo, completed: false, isEditing: false}])
    }
   
    const toggleComplete = (id) => {
        setTodos(todos.map(todo => todo.id === id ? {...todo, completed: !todo.completed} : todo))
    }

    const deleteToDo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id))
    }

    const editToDo = (id) => {
        setTodos(todos.map(todo => todo.id === id ? {...todo, isEditing: !todo.isEditing} : todo))
    }

    const editTask = (task, id) => {
        setTodos(todos.map(todo => todo.id === id ? {
            todo,task, isEditing: !todo.isEditing} : todo
        ))
    }

  return (
    <div className='TodoWrapper' >
        <h1>Get Things Done!</h1>
      <ToDoFormComponent addTodo={addTodo} />
      {todos.map((todo, index) => (
        todo.isEditing ? (
            <EditToDoFormComponent editTodo={editTask} task={todo} />
        ) : (
         <ToDoComponent task={todo} key={index} toggleComplete={toggleComplete} deleteToDo={deleteToDo} EditToDoFormComponent={editToDo} />
        )
      ))}
    </div>
  )
}

export default ToDoWrapperComponent
