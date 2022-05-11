import React from 'react'
import { WiDaySunny } from "react-icons/wi";


function Navbar(){
   return (
      <div>
         <nav className='flex justify-between text-white ml-4 mr-4 pt-6'>

            <WiDaySunny  className='w-6 h-6 bg-yellow-500/'/>
            <ul className=' flex space-x-5 ml-12   justify-between text-lg'>
               <li>Home</li>
               <li>Marketplace</li>
               <li>About</li>
               <li>Trendings</li>
               <li>Contact</li>
            </ul>
            <button className=' border-2 rounded-full p-2 pl-4 pr-4  mr-12' > Contact wallet</button> 
         </nav>
         </div>
    
    )
 }
 
 export default Navbar
