import React from 'react'
import './index.css'
import './App.css'
import {FaMicrophone, FaSistrix , FaGripHorizontal ,FaBell , FaBars}from 'react-icons/fa'
import { IconName } from "react-icons/bs";
import HomeIcon from '@mui/icons-material/Home';
import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined';
import SubscriptionsOutlinedIcon from '@mui/icons-material/SubscriptionsOutlined';
import VideoLibraryOutlinedIcon from '@mui/icons-material/VideoLibraryOutlined';
import RestoreOutlinedIcon from '@mui/icons-material/RestoreOutlined';
import WatchLaterOutlinedIcon from '@mui/icons-material/WatchLaterOutlined';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ReadMoreOutlinedIcon from '@mui/icons-material/ReadMoreOutlined';
import SportsEsportsOutlinedIcon from '@mui/icons-material/SportsEsportsOutlined';
import GraphicEqOutlinedIcon from '@mui/icons-material/GraphicEqOutlined';
import EmojiObjectsOutlinedIcon from '@mui/icons-material/EmojiObjectsOutlined';
import EmojiEventsOutlinedIcon from '@mui/icons-material/EmojiEventsOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import FlagOutlinedIcon from '@mui/icons-material/FlagOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import FeedbackOutlinedIcon from '@mui/icons-material/FeedbackOutlined';


const Card=()=>{
   return(
      <div className='w-72 h-52  mt-2  '>
         <img  src='data:image/jpeg;base64,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'/> 
         <h1>Camilla </h1>
         <h4></h4>
      </div>
   )
}

const Left_nav=()=>{
   return(
      <div className=' space-y-4 pt-1  ml-6 navbar '>
    <div className=' flex     space-x-2  '>
      <HomeIcon className=' '/>
      <span> Home</span>
</div>

<div className=' flex     space-x-2  '>
      <ExploreOutlinedIcon   />
      <span> Explore</span>
</div>

<div className=' flex     space-x-2  '>
      < EmojiEventsOutlinedIcon  />
      <span> Shorts</span>
</div>

<div className=' flex     space-x-2  '>
      <SubscriptionsOutlinedIcon  />
      <span> Subscription</span>
</div>
<hr/>
<div className=' flex     space-x-2  '>
      < VideoLibraryOutlinedIcon  />
      <span> Library</span>
</div>
<div className=' flex     space-x-2  '>
      < RestoreOutlinedIcon
      />
      <span> History</span>
</div>
<div className=' flex     space-x-2  '>
      <WatchLaterOutlinedIcon
      />
      <span> Watch Later</span>
</div>
<div className=' flex     space-x-2  '>
      <ThumbUpOutlinedIcon
      />
      <span> Liked videos</span>
</div>
<div className=' flex     space-x-2  '>
      <ReadMoreOutlinedIcon />
      <span> eden</span>
</div>
<hr/>
<div className=' flex     space-x-2  '>
        <img src='https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/43a89be2-4079-4b85-a8f7-cf8cb7a8b2af/trophy-big-kids-girls-sports-bra-85fHlh.png' className='w-8 h-8 rounded-full'/>
      <span> Traversy Media</span>
</div>
<div className=' flex     space-x-2  '>
        <img src='https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/43a89be2-4079-4b85-a8f7-cf8cb7a8b2af/trophy-big-kids-girls-sports-bra-85fHlh.png' className='w-8 h-8 rounded-full'/>
      <span> Camilla Cabello</span>
</div>
<div className=' flex     space-x-2  '>
        <img src='https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/43a89be2-4079-4b85-a8f7-cf8cb7a8b2af/trophy-big-kids-girls-sports-bra-85fHlh.png' className='w-8 h-8 rounded-full'/>
      <span> Mt Grate</span>
</div>
<div className=' flex     space-x-2  '>
        <img src='https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/43a89be2-4079-4b85-a8f7-cf8cb7a8b2af/trophy-big-kids-girls-sports-bra-85fHlh.png' className='w-8 h-8 rounded-full'/>
      <span> Michel Van Biezen</span>
</div>
<div className=' flex     space-x-2  '>
        <img src='https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/43a89be2-4079-4b85-a8f7-cf8cb7a8b2af/trophy-big-kids-girls-sports-bra-85fHlh.png' className='w-8 h-8 rounded-full'/>
      <span> Browser channels</span>
</div>
<hr/>
<div className=' flex     space-x-2  '>

      <span> Gaming</span>
</div>
<div className=' flex     space-x-2  '>
      <SportsEsportsOutlinedIcon className=' space-x-4'/>
      <span> Live</span>
</div>
<div className=' flex     space-x-2  '>
      <FaBell />
      <span> Fashion & Beauty</span>
</div>
<div className=' flex     space-x-2  '>
      <GraphicEqOutlinedIcon
      />
      <span> Learning</span>
</div>
<div className=' flex     space-x-2  '>
 < EmojiObjectsOutlinedIcon/>
      <span> Sports</span>
</div>
<hr/>
<div className=' flex     space-x-2  '>
      <SettingsOutlinedIcon   />
      <span> Settings</span>
</div>
<div className=' flex     space-x-2  '>
      <FlagOutlinedIcon />
      <span> Report history</span>
</div>
<div className=' flex     space-x-2  '>
      <HelpOutlineOutlinedIcon  />
      <span> Help</span>
</div>
<div className=' flex     space-x-2  '>
      <FeedbackOutlinedIcon />
      <span> send feedback</span>
</div> 

<hr/>
      </div>
  
   )
}

function Cards(){

   return(
      <div className=' flex justify-between   '>
         <div className=' left-nav  mt-8 overscroll-y-contain  '> 
         <Left_nav  className=' left-nav  '/>
           </div>

<div className=' card  grid  grid-cols-4  gap-4  grid-rows-4   m-4   mr-16   ml-16  lg:grid-cols-4  md:grid-cols-3  sm:grid-cols-1  '> 
<Card/>
<Card/>
<Card/>
<Card/>
<Card/>
<Card/>
<Card/>
<Card/>
<Card/>
<Card/>
<Card/>
<Card/>
<Card/>
<Card/>
<Card/>
<Card/>
      </div>

      </div>
 
   )
}
export default Cards ;