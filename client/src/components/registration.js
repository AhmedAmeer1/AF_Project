import React, { PureComponent } from 'react'

import axios from 'axios'


class Registration extends PureComponent {

    constructor(props) {
        super(props)

            this.onChangeName=this.onChangeName.bind(this);
            this.onChangeEmail=this.onChangeEmail.bind(this);
            this.onChangePassword=this.onChangePassword.bind(this);

            this.onSubmit=this.onSubmit.bind(this);
        this.state = {
            name:'',
            email:'',
            password:''
            
        }
    }


    onChangeName(e){
        this.setState({
            name: e.target.value
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
                    name:this.state.name,
                    email:this.state.email,
                    password:this.state.password
                }
                console.log(users);

                axios.post('http://localhost:5000/user/register',users).then(res => alert(res.data.msg))

        } catch (error) {
            alert(error.response.data.msg)
        }
    }

    render() {
        return (
            <div>
                <h1>Rgistration Form</h1>

            <form  onSubmit={this.onSubmit}>

              <p>Name  <input type='text'  name="name" value={this.state.name} onChange={this.onChangeName} /></p>
              <p>Email  <input type='text'  name="email"  value={this.state.email}  onChange={this.onChangeEmail}/></p>
              <p>Password  <input type='text'  name="password"  value={this.state.password}  onChange={this.onChangePassword}/></p>

                <input type='submit' value="submit" />


            </form>

            </div>
        )
    }
}

export default Registration