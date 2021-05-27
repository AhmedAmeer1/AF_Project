import React, { PureComponent } from 'react'
import axios from 'axios'

class ViewConference extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            conferences:[]
        }
    }


    componentDidMount(){
         axios.get('http://localhost:5000/conference/getConference').then(response =>{
            this.setState({conferences:response.data})
        } )
        
    }

    deleteUser(id){
        axios.delete(`http://localhost:5000/admin/users/${id}`).then(res => alert(res.data.msg))
    }


    editUser(id){
        this.props.history.push(`/updateUser/${id}`);
    }

    render() {
        return (
                <div>
                    
                    <div className="Row">
                    <h1 className="text-center" style={{ marginTop:"200PX"}}>Conference Details</h1>
                    <table className="table table-striped table-bordered" style={{width:"1430px",marginLeft:"10px", marginTop:"20PX"}}>
                   
                     <thead>
                        <tr>
                            <th>name</th>
                            <th>email</th>
                            <th>password</th>
                            <th>Action</th>
                        </tr>
                     </thead>

                        <tbody>
                        {
                            this.state.conferences.map(
                                conference =>
                            <tr key ={conference._id}>
                                <td>{conference.name}</td>
                                <td>{conference.time}</td>
                                <td>{conference.place}</td>
                                <td>
                                     <button  className="btn btn-info" onClick={()=> this.editUser(conference._id)}   >Update</button>
                                    <button style={{marginLeft:"10px"}} onClick={()=> this.deleteUser(conference._id)} className="btn btn-danger">Delete</button>
                                
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

export default ViewConference