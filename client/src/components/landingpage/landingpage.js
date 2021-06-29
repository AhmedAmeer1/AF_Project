import React from 'react'
import Myheader from "../header/myheader";
import {Button} from "react-bootstrap";

class Landingpage extends React.Component{

    render() {
        return(
            <div  >

               <Myheader/>


                <section id="intro">
                <div classname="intro-container" data-aos="zoom-in" data-aos-delay="100">
                    <br></br>
                    <br></br>
                    <br></br><center>
                                         <div style={{marginTop:150}}>
                    <h1 classname="mb-4 pb-0">2021<br/><span>Technical Reserchers</span>  Conference</h1>
                    <p classname="mb-4 pb-0">10-12 December, Downtown Conference Center, New York</p>
                                             <Button variant="outline-danger">About The Event</Button>
                                             </div>
                </center>
                </div>
            </section>

        <main id="main">


            <section id="about">
                <div classname="container" data-aos="fade-up">
                    <center>
                    <div classname="row">
                        <div classname="col-lg-6">
                            <h2>About The Event</h2>

                            <p>Sed nam ut dolor qui repellendus iusto odit. Possimus inventore eveniet accusamus error amet eius aut
                                <br></br>
                                accusantium et. Non odit consequatur repudiandae sequi ea odio molestiae. Enim possimus sunt inventore in
                                <br></br>
                                est ut optio sequi unde.</p>
                        </div>

                        <div classname="col-lg-3">
                            <br></br>
                            <h3>Where</h3>

                             <p>Downtown Conference Center, New York</p>
                        </div>
                        <div classname="col-lg-3">
                            <h3>When</h3>
                            <p>Monday to Wednesday<br/>10-12 December</p>
                        </div>
                    </div>
                    </center>
                </div>
            </section>



        </main>

            </div>

        )
    }
}
export default Landingpage