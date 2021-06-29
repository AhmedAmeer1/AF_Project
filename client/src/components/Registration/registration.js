import React, { PureComponent } from 'react'
import Myheader from "../header/myheader";
import axios from 'axios'
import './login.css'




class Registration extends PureComponent {

    constructor(props) {
        super(props)

            this.onChangeName=this.onChangeName.bind(this);
        this.onChangeRole=this.onChangeRole.bind(this);
            this.onChangeEmail=this.onChangeEmail.bind(this);
            this.onChangePassword=this.onChangePassword.bind(this);

            this.onSubmit=this.onSubmit.bind(this);
        this.state = {
            name:'',
            role:'',
            email:'',
            password:''
            
        }
    }


    onChangeName(e){
        this.setState({
            name: e.target.value
        })
    }


    onChangeRole(e){
        this.setState({
            role: e.target.value
        })
    }




    onChangeEmail(e){
        this.setState({
            email: e.target.value
        })
    }


    onChangePassword(e){
        this.setState({
            password:e.target.value
        })
    }

    onSubmit(e){
        e.preventDefault();

        try {
                const users={
                    userRole:this.state.role,
                    name:this.state.name,
                    email:this.state.email,
                    password:this.state.password
                }
                console.log(users.role);

                axios.post('http://localhost:5000/user/register',users).then(res => alert(res.data.msg),

            users.role === 'workshop presenter' ? this.props.history.push(`/addWorkshop/${users.email}`)
            :
            this.props.history.push('/viewWorkshop')

            )



        } catch (error) {
            alert(error.response.data.msg)
        }
    }

    render() {
        return (

        <div>

    <Myheader/>
    <br/>
    <br/>
            <div className="login-page"style={{  height: 600, borderColor:"red"}}>
               
               
                <h1>Registration Form</h1>

            <form  onSubmit={this.onSubmit}   > 

            <div className="form-group" style={{borderColor:"red"}}>
                    
                    <input type="text" className="form-control" style={{borderColor:"red"}} placeholder="Enter Name" name="name" value={this.state.name} onChange={this.onChangeName} />
            </div>    

           
                     <div className="form-group">
                     <select    name="role" value={this.state.role} onChange={this.onChangeRole}>
                        <option value="attendee" >attendee</option>
                        <option value="researcher">researcher</option>
                        <option value="workshop presenter">workshop presenter</option>
                    </select>
                     </div>

              
     
            <div className="form-group">
                   
                    <input type="email" className="form-control" style={{borderColor:"#FF0000"}} placeholder="Enter Email" name="email"  value={this.state.email}  onChange={this.onChangeEmail} />
            </div>



               

               <div className="form-group">
                   
                    <input type="text" className="form-control" style={{borderColor:"#FF0000"}} placeholder="Enter Password" name="password"  value={this.state.password}  onChange={this.onChangePassword} />
            </div>

              <div className="row">
              <button type="submit" style={{backgroundColor:"#DC3545", border:"none", marginLeft:"20px"}}>submit</button>
              </div>
            </form>

            </div>

        </div>
        )
    }
}

export default Registration