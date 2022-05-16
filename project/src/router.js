import React from 'react'
import{ Route , BrowserRouter as Router , Link , Switch}  from 'react-router-dom'
import Home from './home'
import About from './about'

function  AddingRouters(){
   return 
   <div>
   <Router>
      <Route path='/' exact  component={Home}></Route>
      <Route path='/about' component={About}></Route>
      //or  Render by 

      <Switch>
      <Route path='/'   component={Home}></Route>
      <Route path='/about' component={About}></Route>

      </Switch>
   </Router>

   </div>
}
export default AddingRouters ; 