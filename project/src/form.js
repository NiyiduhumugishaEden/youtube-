import React from 'react'
import { useState } from 'react'

function form() {
   const [value , setValue]=React.useState({
      firstName: ' ',
      lastName:' ',
      email:" "
   })

   const [submited, setSubmitted]=React.useState(false)
   const [valid , setValid]=useState(false)
   function Onsubmit(events){
      events.preventDefault();
      if(value.firstName && value.lastName && value.email){
         setValid(true)
      }
      setSubmitted(true)
 
   }

   function handlefirstName(){
      setValue({...value, firstName:events.target.value})
   }

   function handlelastName(){
      setValue({...value, firstName:events.target.value})
   }

   function handleEmail(){
      setValue({...value, firstName:events.target.value})
   }
  return (
    <div>
       <form onSubmit={Onsubmit}>
         {submited && valid ? <h2>Submition ! successfully  you welcome to our page </h2> : null} 
      <input 
      placeholder='FirstName'
      name='firstName'
      value={value.firstName}
      onChange={handlefirstName}
      />
     {submited && !value.firstName ? <span>Please enter the firstName</span> : null} 
      <input 
       placeholder='LastName'
      name='lastName'
      value={value.lastName}
      onChange={handlelastName}
      />
      {submited && !value.firstName ? <span>Please enter the lastName</span> : null} 
      <input
        placeholder='Email'
        name='email'
        value={value.email}
        onChange={handleEmail}

      />
        {submited && !value.firstName ? <span>Please enter the Email</span> : null} 
<button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default form
