const  mongoose = require('mongoose')

const paymentSchema = new mongoose.Schema({



    cardName:{
        type:String,
        required:true,
        unique:true
    },
    cardNumber:{
        type:Number,
        required:true
       
    },
    cvv:{
        type:Number,
        required:true,
        unique:true
    },
    cardExpire:{
        type:Number,
        required:true,
        unique:true
    },
    contactDetails:{
        type:String,
        default:'pending'
    }



})

module.exports = mongoose.model('Payment', paymentSchema)