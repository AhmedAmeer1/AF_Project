import React, { PureComponent } from 'react'

import axios from 'axios'
import  './createWorkshop.css'

import Header from "../header/myheader";
class CreateWorkshop extends PureComponent {

    constructor(props) {
        super(props)

            this.onChangeName=this.onChangeName.bind(this);
            this.onChangeUniversity=this.onChangeUniversity.bind(this);
            this.onChangeMobileNumber=this.onChangeMobileNumber.bind(this);
            this.onChangeTopic=this.onChangeTopic.bind(this);
            this.onChangeStatementOfIntrest=this.onChangeStatementOfIntrest.bind(this);
            


            this.onSubmit=this.onSubmit.bind(this);
        this.state = {
            name:'',
            university:'',
            mobileNumber:'',
            topic:'',
            statementOfIntrest:''
            
        }
    }


    onChangeName(e){
        this.setState({
            name: e.target.value
        })
    }

    onChangeUniversity(e){
        this.setState({
            university: e.target.value
        })
    }


    onChangeMobileNumber(e){
        this.setState({
            mobileNumber:e.target.value
        })
    }


    onChangeTopic(e){
        this.setState({
            topic: e.target.value
        })
    }

    onChangeStatementOfIntrest(e){
        this.setState({
            statementOfIntrest: e.target.value
        })
    }

    onSubmit(e){
        e.preventDefault();

        try {

            const email =this.props.match.params.email;
                const workshops={
                    name:this.state.name,
                    university:this.state.university,
                    mobileNumber:this.state.mobileNumber,
                    topic:this.state.topic,
                    statementOfIntrest:this.state.statementOfIntrest,
                    contactDetail:email
                }
                console.log(workshops);

                axios.post('http://localhost:5000/workshop/addWorkshop',workshops).then(res => alert(res.data.msg))

        } catch (error) {
            alert(error.response.data.msg)
        }
    }

    render() {
        return (
            <div>
                <Header   />

                <div className="login-page"    style={{  height: 700}}>
                      <h1>Add Workshop</h1>

                      <form  onSubmit={this.onSubmit}>

                          <input type='text'  placeholder="Name"  name="name" value={this.state.name} onChange={this.onChangeName} />
                            <input type='text'  placeholder="university"  name="university"  value={this.state.university}  onChange={this.onChangeUniversity}/>
                           <input type='number'  placeholder="mobileNumber"  name="mobileNumber"  value={this.state.mobileNumber}  onChange={this.onChangeMobileNumber}/>
                          <input type='text'   placeholder="topic" name="topic" value={this.state.topic} onChange={this.onChangeTopic} />
                            <input type='description'  placeholder="statementOfIntrest" name="statementOfIntrest"  value={this.state.statementOfIntrest}  onChange={this.onChangeStatementOfIntrest}/>

                          <div className="row">
                              <button type="submit">submit</button>

                          </div>


                      </form>

                </div>




            </div>
        )
    }
}

export default CreateWorkshop