import React, {useState, useContext, useEffect} from 'react'
import axios from 'axios'
import './createProduct.css';


const initialState = {
    product_id: '',
    title: '',
    price: 0,
    description: 'MERN Stack is a Javascript Stack that is used for easier and faster deployment of full-stack web applications. MERN Stack comprises of 4 technologies namely: MongoDB, Express, React and Node.js. It is designed to make the development process smoother and easier..',
    content: 'MERN Stack is a Javascript Stack that is used for easier and faster deployment of full-stack web applications. MERN Stack comprises of 4 technologies namely: MongoDB, Express, React and Node.js. It is designed to make the development process smoother and easier..',
     _id: ''
}

function Clouduploading() {
   
    const [product, setProduct] = useState(initialState)
 
    const [images, setImages] = useState(false)
   




    

   
    
   


    const handleUpload = async e =>{
        e.preventDefault()
        try {
        
            const file = e.target.files[0]
            
            if(!file) return alert("File not exist.")

            if(file.size > 1024 * 1024) // 1mb
                return alert("Size too large!")
                

            if(file.type !== 'image/jpeg' && file.type !== 'image/png') // 1mb
                return alert("File format is incorrect.")

                
            let formData = new FormData()
            formData.append('file', file)

           
            const res = await axios.post('http://localhost:5000/api/upload', formData, {
                headers: {'content-type': 'multipart/form-data'}
            })
            
            setImages(res.data)

        } catch (err) {
            alert("image error")
        }
    }

    const handleDestroy = async () => {
        try {
          
           
            await axios.post('http://localhost:5000/api/destroy', {public_id: images.public_id})
           
            setImages(false)
        } catch (err) {
            alert(err.response.data.msg)
        }
    }

    const handleChangeInput = e =>{
        const {name, value} = e.target
        setProduct({...product, [name]:value})
    }

    const handleSubmit = async e =>{
        e.preventDefault()
        try {
           
            if(!images) return alert("No Image Upload")

           
                await axios.post('http://localhost:5000/api/products', {...product, images})
        } catch (err) {
            alert(err.response.data.msg)
        }
    }

    const styleUpload = {
        display: images ? "block" : "none"
    }
    return (
        <div className="create_product">
            <div className="upload">
                <input type="file" name="file" id="file_up" onChange={handleUpload}/>
                {
                   

                    <div id="file_img" style={styleUpload}>
                        <img src={images ? images.url : ''} alt=""/>
                        <span onClick={handleDestroy}>X</span>
                    </div>
                }
                
            </div>

            <form onSubmit={handleSubmit}>
                <div className="row">
                    <label htmlFor="product_id">Product ID</label>
                    <input type="text" name="product_id" id="product_id" required
                    value={product.product_id} onChange={handleChangeInput} />
                </div>

                <div className="row">
                    <label htmlFor="title">Title</label>
                    <input type="text" name="title" id="title" required
                    value={product.title} onChange={handleChangeInput} />
                </div>

                <div className="row">
                    <label htmlFor="price">Price</label>
                    <input type="number" name="price" id="price" required
                    value={product.price} onChange={handleChangeInput} />
                </div>

                <div className="row">
                    <label htmlFor="description">Description</label>
                    <textarea type="text" name="description" id="description" required
                    value={product.description} rows="5" onChange={handleChangeInput} />
                </div>

                <div className="row">
                    <label htmlFor="content">Content</label>
                    <textarea type="text" name="content" id="content" required
                    value={product.content} rows="7" onChange={handleChangeInput} />
                </div>

              

                <button type="submit">Create</button>
            </form>
        </div>
    )
}

export default Clouduploading
