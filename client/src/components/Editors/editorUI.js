import React, { PureComponent } from 'react'
import {Link} from 'react-router-dom'


class EditoeUI extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    render() {
        return (
            <div>

                <h1>welcome Editor</h1><hr /><hr />

                <div >
              
               
               


                <Link to="/addConference"   >
                        <button  > <h2>add conference details</h2></button>
                </Link>


                <Link to="/editConference"   >
                        <button  >  <h2>edit conference details</h2></button>
                </Link>


                <Link to="/viewConference"   >
                        <button  >  <h2>view conference details</h2>  </button>
                </Link>




                </div>



            </div>
        )
    }
}

export default EditoeUI