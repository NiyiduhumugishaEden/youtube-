import React from 'react'
import './App.css';

function  Form (){
   return(
      <div>
         <form className=''>
            <div className=' bg-slate-800  grid grid-cols-1 ' >
            <h1 className='text-3xl text-white m-4'> Sign up</h1>
<div>
   
</div>
            <input placeholder='first name' className=' p-4  bg-red-200 w-64 mb-2'/>
            <input placeholder='last name ' className=' p-4  bg-red-200 w-64'/>
            <input placeholder='Email' className=' p-4  bg-red-200 w-64'/>
            <input placeholder='user name' className=' p-4  bg-red-200 w-64'/>
            <input placeholder='password' className=' p-4  bg-red-200 w-64'/>
            <button>Sign Up</button>
            </div>
         </form>
      </div>
   )
}
export default Form;