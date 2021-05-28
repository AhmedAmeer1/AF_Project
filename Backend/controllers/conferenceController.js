const conferenceModel = require('../models/conferenceModel');



const conferenceController ={

    addConference : async  (req,res)=>{
        try {
          
                const {name, time, date, venue}=req.body;
                                                 
                const newConference = new conferenceModel({ name, time, date, venue})
              

                await newConference.save();
        
                res.send({msg:"conference added successfull"})

        } catch (error) {
            return res.send(500).json({msg: error.message})
        }

    },

    getConferenceDetail : async (req,res)=>{
        try {
           const conferences= await conferenceModel.find().then(conference => res.json(conference));
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },

    updateConferenceDetail : async (req,res)=>{
        try {
            console.log("inside update controller")

            console.log(req.params.id)

            const {status}=req.body;

            console.log(status)
            console.log(req.body)

            await conferenceModel.findOneAndUpdate({_id: req.params.id}, {
                status 
            })



           //const conferences= await conferenceModel.find().then(conference => res.json(conference));
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    }




  





}

module.exports=conferenceController