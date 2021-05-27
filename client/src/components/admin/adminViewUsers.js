import React, { PureComponent } from 'react'
import axios from 'axios'

class AdminViewUsers extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            users:[]
        }
    }


    componentDidMount(){
         axios.get('http://localhost:5000/admin/users').then(response =>{
            this.setState({users:response.data})
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
                    <h1 className="text-center" style={{ marginTop:"200PX"}}>Registration Details</h1>
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
                            this.state.users.map(
                                user =>
                            <tr key ={user._id}>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.password}</td>
                                <td>
                                     <button  className="btn btn-info" onClick={()=> this.editUser(user._id)}   >Update</button>
                                    <button style={{marginLeft:"10px"}} onClick={()=> this.deleteUser(user._id)} className="btn btn-danger">Delete</button>
                                
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

export default AdminViewUsers