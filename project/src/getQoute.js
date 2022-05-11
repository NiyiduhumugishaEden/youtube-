import React from 'react'
import axios from 'axios'

import Search from './Search';


  
function GetQoute() {
   const [getQoutes , setQoute]=React.useState(false );
   const [getAuthor , setAuthor]=React.useState(false);
   
React.useEffect(()=>{
   axios.get('http://api.quotable.io/random')
   .then((
    response
    )=>{
      setQoute( response.data.content)
      setQoute( response.data.author)
   
   })
},[ ])
function  changing(){
   axios.get('http://api.quotable.io/random')
   .then((
    response
    )=>{
      setQoute( response.data.content)
      setAuthor( response.data.author)
     
   })
}
  return (
    <div className='bg-blue-900 w-screen h-screen '>
<div className=' border-2 border-black m-96 w-96 h-72 p-8 bg-white shadow-md'>
<h1 className='text-sky-200  text-2xl '>Get Qoute</h1>
      <h2 className=' space-x-2 mt-4 mb-4'>  {getQoutes }</h2>
      <h4 className='text-orange-200 ml-48'>{getAuthor}</h4>
       <button onClick={changing} className=' bg-blue-300 p-2 rounded-xl mt-2 '>getQoutes</button>

</div>
   {/* <Search/> */}
    </div>
  )
}

export default GetQoute
