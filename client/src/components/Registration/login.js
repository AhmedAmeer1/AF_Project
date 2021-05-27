import React, { PureComponent } from 'react'
import axios from 'axios'

class Login extends PureComponent {
    constructor(props) {
        super(props)

         
            this.onChangeEmail=this.onChangeEmail.bind(this);
            this.onChangePassword=this.onChangePassword.bind(this);

            this.onSubmit=this.onSubmit.bind(this);
        this.state = {
       
            email:'',
            password:'',
            loginUser:''
            
        }
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
                   
                    email:this.state.email,
                    password:this.state.password
                }
                console.log(users);

                axios.post('http://localhost:5000/user/login',users).then(res =>{this.setState({loginUser:res.data})})

                
                axios.post('http://localhost:5000/user/login',users).then(res =>
                {
                    res.data.role==='user'? this.props.history.push('/userUI')
                    :
                    res.data.role==='admin'?  this.props.history.push('/editorUI')
                    :
                    this.props.history.push('/editorUI')
                
                
                })
                    
               

               
                


// //////////
// this.state.users.map(
//     user =>
//     console.log(user)
  
   
//     )
// /////////


                console.log("loginnnn : ")
                console.log(this.state.loginUser.role)

                if(this.state.loginUser.role === 'user'){
                    //this.props.history.push('/payment')
                }else{
                    //this.props.history.push('/ImageView')
                }

                


        } catch (error) {
            alert(error.response.data.msg)
        }
    }

    render() {
        return (
            <div>
                <h1>LOGIN FORM </h1>

            <form  onSubmit={this.onSubmit}>

            
              <p>Email  <input type='text'  name="email"  value={this.state.email}  onChange={this.onChangeEmail}/></p>
              <p>Password  <input type='text'  name="password"  value={this.state.password}  onChange={this.onChangePassword}/></p>

                <input type='submit' value="submit" />


            </form>

            </div>
        )
    }
}

export default Login