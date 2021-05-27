import React, { PureComponent } from 'react'

import axios from 'axios'


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
                const workshops={
                    name:this.state.name,
                    university:this.state.university,
                    mobileNumber:this.state.mobileNumber,
                    topic:this.state.topic,
                    statementOfIntrest:this.state.statementOfIntrest




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
                <h1>Rgistration Form</h1>

            <form  onSubmit={this.onSubmit}>

              <p>Name  <input type='text'  name="name" value={this.state.name} onChange={this.onChangeName} /></p>
              <p>university  <input type='text'  name="university"  value={this.state.university}  onChange={this.onChangeUniversity}/></p>
              <p>mobileNumber  <input type='number'  name="mobileNumber"  value={this.state.mobileNumber}  onChange={this.onChangeMobileNumber}/></p>
              <p>topic  <input type='text'  name="topic" value={this.state.topic} onChange={this.onChangeTopic} /></p>
              <p>statementOfIntrest  <input type='text'  name="statementOfIntrest"  value={this.state.statementOfIntrest}  onChange={this.onChangeStatementOfIntrest}/></p>



           

                <input type='submit' value="submit" />


            </form>

            </div>
        )
    }
}

export default CreateWorkshop