import React from 'react'
import TodoCard from './TodoCard'

export default function TodoContainer(props) {

  const showTodos = () => {
    return props.todos.map(todo => <TodoCard todo={todo} removeTodo={props.removeTodo} />)
  }
  
  return (
    <div className="todo-container">
      {showTodos()}
    </div>
  )
}

