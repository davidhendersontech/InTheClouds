import React from 'react'

export default function TodoCard(props) {

  function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  }
  const handleClick = (event) => {
    props.removeTodo(props.todo)
  }
  
  const style = {
    top: `${getRandomArbitrary(0,90)}%`,
    width: `${getRandomArbitrary(300,500)}px`,
    height: `${getRandomArbitrary(100,150)}px`,
    animationDuration: `${getRandomArbitrary(10,20)}s`,
  }
  return (
    
    
      <div style={style} className={`todo-card ${props.todo.id}` } onClick={handleClick}>
      <p>{props.todo.title}</p>
      <p>{props.todo.content}</p>
      </div>
   
   
  )
}
