import  React from 'react'
import './App.css'

// import Axios from 'axios'
function MovieList (props){
   
 return (
    <div className='cards'>
       <div className='grid grid-cols-4 gap-3  ml-4  mr-6  md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-4 '>
       {props.movies.map((movie,index)=><div>
        <img src={movie.Poster} className='hover:bg-zinc-700'/>
     </div>)}

       </div>
 
    </div>
 )
}
export default MovieList;