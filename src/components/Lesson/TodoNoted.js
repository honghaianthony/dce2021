import React from 'react'
import Todo from './Todo'
import './TodoNoted.css'
function TodoNoted({ todoList}) {
    return (
        <div className="TodoNoted__container">
            {todoList.map((todo) => (
                 <Todo key={todo.id} todo={todo}  />
            ))}
        </div>
    )
}

export default TodoNoted
