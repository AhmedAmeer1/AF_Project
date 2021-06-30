const  mongoose = require('mongoose')

const conferenceSchema = new mongoose.Schema({

    

    name:{
        type:String,
        required:true,
        unique:true
    },
    time:{
        type:String,
        required:true
       
    },
    date:{
        type:Date,
        required:true,
        unique:true
    },
    venue:{
        type:String,
        required:true,
        unique:true
    },
    status:{
        type:String,
        default:'pending'
    }



})

module.exports = mongoose.model('Conference', conferenceSchema)