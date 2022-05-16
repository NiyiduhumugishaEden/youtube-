import React from 'react'
import './App.css'

function SearchBar(props){
   // const Url = 'https://spotify23.p.rapidapi.com/search/'

   return (
      <div>
         <input placeholder='Type to Search'  className='w-96  mb-6  h-12  text-gray-500 border-none rounded-md ml-96  pl-10 ' 
         value={props.value}
          onChange={(event)=>props.setSearch(event.target.value)}/>
      </div>
   )
}

export default SearchBar;