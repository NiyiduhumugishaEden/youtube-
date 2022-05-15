import React from 'react'
import { useState } from 'react';

function Render() {
 
   const [todos, setTodos]=useState([ ])
   const [task,setTask]=useState('')
   


   function changeHandler(events){
events.preventDefault();
 //setTodos([...todos,todo]);
 const  todo={
    id:Math.random()*10000,
    task:task,
    completed:false
 }
 setTodos([...todos,todo]);
 console.log(todos)
   }
  return (
    <div>
       {/* <h1>Hello world </h1> */}
      <input 
      className=' border-2 p-2 m-2'
      placeholder='Add todos'
      onChange={(e) =>{setTask(e.target.value)}

     
   }

      
      />
      <button onClick={changeHandler} className=' border-2 space-x-2 p-2 '>Add</button>
      {todos.map((todo)=> <h2>{todo.task}</h2> )}
    </div>
  )
}


export default Render
