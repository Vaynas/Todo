import React from 'react'

export default function Todo({ todo, toggleTodo }) {
    function handleTodoClick(){
        toggleTodo(todo.id)
    }
    
    return (
        <tr>
            <td style={{border: "1px solid black"}}>{todo.name}</td>
            <td style={{border: "1px solid black"}}><input type ="checkbox" checked = {todo.complete} onChange = {handleTodoClick} /></td>
        </tr>
    )
}