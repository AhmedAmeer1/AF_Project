import React from 'react'
import Myheader from "../header/myheader";

import {Button, Card} from "react-bootstrap";
import axios from 'axios'



class ViewWorkshop extends React.Component{

    constructor(props) {
        super(props)

        this.state = {
            workshops:[]
        }
    }


    componentDidMount(){
        axios.get('http://localhost:5000/workshop/getWorkshop').then(response =>{
            this.setState({workshops:response.data})
        } )

    }




    render() {
        return(
            <div  >

<Myheader/>

                <div>


                    <div className="intro-container"  data-aos-delay="100"   style={{ marginLeft:200 , marginTop:100}}>




                        {
                            this.state.workshops.map(
                                workshop =>{
                                    if (workshop.status === 'approved') {
                                        return(


                                            <Card border="danger"

                                                  bg={"danger"}
                                                  text={'light'}

                                                  style={{ width: '70rem', height: '20rem' , color:'white'}}
                                                  className="mb-2"
                                            >
                                                {/*<Card.Header><h2>Advanced Instrumental Techniques and Future of Advanced Materials</h2></Card.Header>*/}
                                                <br></br>
                                                <Card.Title>  <b>{workshop.name}</b></Card.Title>
                                                <hr style={{ borderTopColor:"white" }} ></hr>
                                                <Card.Body style={{color:'white',opacity: 8}}>

                                                    <Card.Text>

                                                        <p> {workshop.statementOfIntrest}</p>
                                                        <p>{workshop.university}</p>
                                                        <p>DATE</p>
                                                    </Card.Text>



                                                </Card.Body>

                                            </Card>


                                           )}}
                            )



                            }

                    </div>



</div>


            </div>


        )
    }
}
export default ViewWorkshop