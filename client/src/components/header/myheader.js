import React from 'react'
import {Link  } from 'react-router-dom'

class Myheader extends React.Component{

    render() {
        return(
        <div  >

            <header id="header" style={{backgroundColor:"black"}}>
                <div className="container">

                    <div id="logo" className="pull-left">



                        <img src="assets/img/logo.png" alt="" title="" style={{width:"100px",marginLeft:"100px",maxHeight:"2000px",marginBottom:"800px",marginTop:"-30px"}}></img>


                    </div>

                    <nav id="nav-menu-container" >

                        <ul className="nav-menu"  style={{color:"red"}} >
                            <li className="menu-active"><a href="/">Home</a></li>
                            <li><a href="#about">About the Conference</a></li>
                            <li><a href="/viewWorkshop1">Workshop</a>


                            </li>
                            <li><a href="#schedule" >Resech paper</a></li>
                            <li><a href="#venue">Presentation</a></li>

                            <li className="buy-tickets"><a href="/registration">REGISTER</a></li>
                            <li className="buy-tickets"><a href="/login">LOGIN</a></li>
                        </ul>
                    </nav>

                </div>
            </header>

        </div>

        )
    }
}
export default Myheader