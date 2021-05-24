const  mongoose = require('mongoose')

const userSchema = new mongoose.Schema({

    name:{
        type:String,
        required:true
    },
    cardnumber:{
        type:String,
        required:true,
        unique:true
    },
    cvv:{
        type:String,
        required:true
    },
    expirydate:{
        type:String,
        required:true
    }



})

module.exports = mongoose.model('Payment', userSchema)