const  mongoose = require('mongoose')

const workshopSchema = new mongoose.Schema({

    name:{
        type:String,
        required:true
    },
    university:{
        type:String,
        required:true
      
    },
    mobileNumber:{
        type:Number,
        required:true
    },
    topic:{
        type:String,
        required:true
      
    },
    statementOfIntrest:{
        type:String,
        required:true
    }



})

module.exports = mongoose.model('Workshop', workshopSchema)