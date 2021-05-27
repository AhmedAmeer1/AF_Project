import React, { PureComponent } from 'react'
import {Link} from 'react-router-dom'



class UserUI extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    render() {
        return (
            <div>

                <h1>welcome USER</h1>


                                    <div>
                                                            
                                


                                <Link to="/addWorkshop"   >
                                        <button  > <h2>Add workshop details</h2></button>
                                </Link>


                                <Link to="/editConference"   >
                                        <button  >  <h2>edit workshop details</h2></button>
                                </Link>


                                <Link to="/viewConference"   >
                                        <button  >  <h2>view workshop details</h2>  </button>
                                </Link>




                                </div>

            </div>
        )
    }
}

export default UserUI