import React from 'react'
import './App.css'

function useModels({close}) {
  return (
    <div>
      <div className='m-32 shadow-2xl bg-blue-200 p-12 w-2/5 h-96 text-white' >
         <button className='  p-4 rounded-lg ' onClick={()=>{close(false)}}>X</button>
         <div>Here is were we learn react more than we can think </div>
         <div>How about if you come to visit our page</div>
         <button className=' bg-blue-400 p-2 rounded-lg ' onClick={()=>{close(false)}}>Cancel</button>
      </div>
    </div>
  )
}

export default useModels
