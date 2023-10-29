import React from 'react'
import TodoList from '../components/TodoList'

function Todo() {
    return (
        <div className="flex items-center border-b border-teal-500 py-2 w-full">
            <TodoList />
        </div>
    )
}

export default Todo