import React from 'react'
import{ Route , BrowserRouter as Router , Link }  from 'react-router-dom'


function home() {
  return (
    <Router>
      <nav>
         <ul>
          <Link >Home</Link>  
         </ul>
      </nav>
    </Router>
  )
}

export default home
