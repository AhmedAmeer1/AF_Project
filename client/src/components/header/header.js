import React from 'react'
import {Link  } from 'react-router-dom'


import './header.css';

function Header() {
    return (
   
   <div className="header">
   <div className="Row">

  <Link to="/"> <b>HOME  </b></Link>
  <Link to="/registration"> <b>Register  </b></Link>
  <Link to="/admin-view"> <b>userDetails  </b></Link>
  <Link to="/img"> <b>imageUpload  </b></Link>
  <Link to="/ImageView"> <b>ImageView  </b></Link>
  <Link to="/payment"> <b>payment</b></Link>
  <Link to="/login"> <b>Login</b></Link>


  

  

           
  </div>
    

                
                </div>
    )
}

export default Header
