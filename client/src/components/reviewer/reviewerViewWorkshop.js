import React, { PureComponent } from 'react'
import axios from 'axios'
import Header from './header/reviewerHeader'


class ReviewerViewWorkshop extends PureComponent {
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

    ApproveConference(id){
        const workshop = {
            status: "approved"
            
              }
        axios.put(`http://localhost:5000/workshop/editWorkshop/${id}`,workshop).then(res => alert(res.data.msg))
    }


   RejectConference(id){
        const workshop = {
            status: "reject"
            
              }
        axios.put(`http://localhost:5000/workshop/editWorkshop/${id}`,workshop).then(res => alert(res.data.msg))
    }




    render() {
        return (
                <div>
                    <Header   />
                    
                    <div className="Row">
                    <h1 className="text-center" style={{ marginTop:"200PX"}}>Reviewer View Workshop </h1>
                    <table className="table table-striped table-bordered" style={{width:"1430px",marginLeft:"10px", marginTop:"20PX"}}>
                   
                     <thead>
                        <tr>
                        <th>id</th>
                            <th>name</th>
                            <th>university</th>
                            <th>mobileNumber</th>
                            <th>topic</th>
                            <th>statementOfIntrest</th>
                            <th>status</th>
                            <th>Action</th>
                        </tr>
                     </thead>

                        <tbody>
                        {
                            this.state.workshops.map(
                                workshop =>
                                    <tr key ={workshop._id}>
                                        <td>{workshop._id}</td>
                                        <td>{workshop.name}</td>
                                        <td>{workshop.university}</td>
                                        <td>{workshop.mobileNumber}</td>
                                        <td>{workshop.topic }</td>
                                        <td>{workshop.statementOfIntrest}</td>
                                        <td>{workshop.status}</td>

                                 <td>
                                     <button  className="btn btn-info" onClick={()=> this.ApproveConference(workshop._id)}>Approved</button>
                                    <button style={{marginLeft:"10px"}} onClick={()=> this.RejectConference(workshop._id)} className="btn btn-danger">Reject</button>
                                
                                </td>
                                
                               
                            </tr>
                            )
                        }

                        </tbody>

                    </table>

                    </div>
                </div>
        )
    }
}

export default ReviewerViewWorkshop