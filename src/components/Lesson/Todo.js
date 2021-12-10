import React from 'react'

function Todo({todo}) {
    return (
        <div>
            <span>
                {todo.name}
            </span>
        </div>
    )
}

export default Todo
