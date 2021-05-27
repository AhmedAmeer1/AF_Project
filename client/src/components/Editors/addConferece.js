import React, { PureComponent } from 'react'

import axios from 'axios'


class AddConference extends PureComponent {

    constructor(props) {
        super(props)

            this.onChangeName=this.onChangeName.bind(this);
            this.onChangeTime=this.onChangeTime.bind(this);
            this.onChangePlace=this.onChangePlace.bind(this);

            this.onSubmit=this.onSubmit.bind(this);
        this.state = {
            name:'',
            time:'',
            place:''
            
        }
    }


    onChangeName(e){
        this.setState({
            name: e.target.value
        })
    }

    onChangeTime(e){
        this.setState({
            time: e.target.value
        })
    }


    onChangePlace(e){
        this.setState({
            place:e.target.value
        })
    }

    onSubmit(e){
        e.preventDefault();

        try {
                const conference={
                    name:this.state.name,
                    time:this.state.time,
                    place:this.state.place
                }
                console.log(conference);

                axios.post('http://localhost:5000/conference/addConference',conference).then(res => alert(res.data.msg))
                this.props.history.push('/viewConference')

        } catch (error) {
            alert(error.response.data.msg)
        }
    }

    render() {
        return (
            <div>
                <h1>Conference Form</h1>

            <form  onSubmit={this.onSubmit}>

              <p>Confenece Name  <input type='text'  name="name" value={this.state.name} onChange={this.onChangeName} /></p>
              <p>Confenece time  <input type='text'  name="time"  value={this.state.time}  onChange={this.onChangeTime}/></p>
              <p>Confenece place    <input type='text'  name="place"  value={this.state.place}  onChange={this.onChangePlace}/></p>

                <input type='submit' value="submit" />


            </form>

            </div>
        )
    }
}

export default AddConference