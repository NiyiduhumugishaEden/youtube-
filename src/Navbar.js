import React from 'react'
import './index.css'
import './App.css'
// import Card from './Cards'
import {FaMicrophone, FaSistrix , FaGripHorizontal ,FaBell , FaBars ,FaCalendar}from 'react-icons/fa'
import Cards from './Container';
import Form from './form'



function Navbar(){

const Buttons=()=>{
   return(
      <div>
         <button className='  float-right w-20 h-12  rounded-full bg-black  text-white  mt-6'>All</button>
      </div>
   )
}
   return(
      <div  > 
 {/* <nav className=' h-16  font-bold flex justify-between shadow-sm pt-4 '>
<div className='flex '>
   <FaBars className='mt-3 w-8'/>
<img src='https://musically.com/wp-content/uploads/2019/03/youtube-1200x500.jpg' className='w-20 h-10  ' />
</div>
<div className='flex'> 
   <input  type='text ' className=' w-96 px-16 h-10 border-2' placeholder='search'/>
   <FaSistrix className='mt-2 w-8 ' />
<FaMicrophone className='mt-2 w-8'/>
</div>
<div className='flex mr-4' >
   <FaCalendar  className='mt-2 w-8' />
    <FaGripHorizontal className='mt-2 w-8' />
    <FaBell className='mt-2 w-8'/>
    <img src='https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/43a89be2-4079-4b85-a8f7-cf8cb7a8b2af/trophy-big-kids-girls-sports-bra-85fHlh.png' className='w-8 h-8 rounded-full'/>
</div>
</nav>
<div className='w-screen h-full  flex '>
<div className=' bg-gray-300 '></div>
<div className=' bg-gray-500  '>
</div>
</div>  */}

{/* <Cards/> */}
<Form/>
      </div>
   )

}
export default Navbar ;