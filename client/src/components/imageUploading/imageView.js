import React, { PureComponent } from 'react'
import axios from 'axios'

class ImageView extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            products:[]
        }
    }


    componentDidMount(){
         axios.get('http://localhost:5000/api/products').then(response =>{
            this.setState({products:response.data})
        } )
        
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
                            this.state.products.map(
                                product =>
                            <tr key ={product._id}>
                                <td>{product.product_id}</td>
                                <td>{product.title}</td>

                               
                                <td> <img src={product.images.url} alt="" /></td>
                                <td>
                                   
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

export default ImageView