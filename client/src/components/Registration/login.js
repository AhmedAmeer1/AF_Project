import React, { PureComponent } from 'react'
import axios from 'axios'
import Header from'../header/header'
import './login.css'

class Login extends PureComponent {
    constructor(props) {
        super(props)

         
            this.onChangeEmail=this.onChangeEmail.bind(this);
            this.onChangePassword=this.onChangePassword.bind(this);

            this.onSubmit=this.onSubmit.bind(this);
        this.state = {
       
            email:'',
            password:'',
            loginUser:'',
            name:''
            
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

                axios.post('http://localhost:5000/user/login',users).then(res=>{ sessionStorage.setItem("token",res.data)}
                   
                )
console.log(sessionStorage)
                
                axios.post('http://localhost:5000/user/login',users).then(res =>
                {
                    res.data.role==='user'? this.props.history.push('/userUI')
                    :
                    res.data.role==='editor'?  this.props.history.push('/editorUI')
                    :
                    res.data.role==='reviewer'?  this.props.history.push('/reviwerUI')
                    :
                    this.props.history.push('/adminUI')



                
                
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
               < Header />
            <div className="login-page">
                <h1>LOGIN FORM </h1>

            <form  onSubmit={this.onSubmit}>

            
                <input type='text'  placeholder="Email" name="email"  value={this.state.email}  onChange={this.onChangeEmail}/>
             <input type='text'  placeholder="password" name="password"  value={this.state.password}  onChange={this.onChangePassword}/>

              <div className="row">
              <button type="submit">Login</button>
                </div>

            </form>

            </div>
            </div>
        )
    }
}

export default Login
