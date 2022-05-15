
import React from 'react'
import  data from './data'
import './App.css'

function Search() {
   const [getData, setData]=React.useState(' ')
   function change (events){
      setData(events.target.value)
   }
   const dataSearch=data.cardData.filter(item=>{
            return item.title.toLowerCase().includes(getData)
   })
  return (
    <div className='text-2xl m-10 bg'>

       <h1 className='text-2xl m-4' >Search Food</h1>
       <input
       type=" text"
       className=' border-2 border-black ml-8'
       value={getData}
       onChange={change }

       />
       <div className=' shadow-lg m-40 w-56' >
       { dataSearch.map((item,index)=>{
         return (
            <>
            <img src= {item.img} />

<p>{item.title}</p>
      
  </>
         )
        })}
       </div>
     
    </div>
  )
}

export default Search
