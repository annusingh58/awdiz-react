import React, { memo } from 'react'

const Todos = ({todos,addTodo}) => {
    alert("Todos component re-render");

  return (
    <>
    <h1>My Todos</h1>
    {todos.map((todo, index)=>{
        return <p key={index}>{todo}</p>
    })}
    <button onClick={addTodo}>Add Todo</button>
    </>
  )
};

export default memo(Todos);