import React from 'react'
import { useState } from 'react'
function Form () {
   const [value , setValue]=useState({
      firstName: ' ',
      lastName:' ',
      email:" "
   })

   const [submited, setSubmitted]=useState(false)
   const [valid , setValid]=useState(false)
   function Onsubmit(events){
      events.preventDefault();
      if(value.firstName && value.lastName && value.email){
         setValid(true);
       
      }
      setSubmitted(true);
 
   }

   function handlefirstName(events){
      setValue({...value, firstName:events.target.value})
    
   }

   function handlelastName(events){
      setValue({...value, lastName:events.target.value})
    
   }

   function handleEmail(events){
      setValue({...value, email:events.target.value})
    
   }
  return (
    <div >
       <form onSubmit={Onsubmit} className='main border-4   w-2/5  h-78    bg-white rounded-lg p-10 shadow-inner shadow-white '> 
         
         {submited && valid ? <h2 className=' bg-blue-400 p-2 rounded-md text-lg text-white '>Submition ! successfully  you welcome to our page </h2> : null} 
         <h1 className='text-2xl mb-2  text-green-700 ml-36 '>Create Account</h1>
     <div className=' ml-28'>
      <div><input 
      className= '  border-2  border-black p-2  m-1  w-64 border- '
      placeholder='FirstName'
      name='firstName'
      value={value.firstName}
      onChange={handlefirstName}
      /></div>
      {submited && !value.firstName? <span  className='text-sm text-red-600'>Please fill  this  field</span> : null} 
      <div><input 
       className='border-2  border-black p-2 m-1 w-64 '
       placeholder='LastName'
      name='lastName'
      value={value.lastName}
      onChange={handlelastName}
      /></div>
      {submited && !value.lastName ? <span  className='text-sm text-red-600'>Please   fill  this field</span> : null} 
      <div><input
       className='border-2  border-black p-2  m-1  w-64 '
        placeholder='Email'
        name='email'
        value={value.email}
        onChange={handleEmail}

      /></div>
        {submited && !value.email ? <span  className='text-sm text-red-600'>Please  fill   this  field</span> : null} 
<div><button
 type='submit ' 
 className='border-2 text-white  border-black p-2  m-1  w-64 bg-green-700 text-lg'

>Submit</button></div>
</div>
<h4 className=' float-left clear-left text-blue-700 mt-2 '>Aleady have Account ? Login </h4>
<h4 className=' float-right clear-right text-blue-700  mt-2 '>Forgot Password ?</h4>
      </form>
    </div>
  )
}

export default Form
