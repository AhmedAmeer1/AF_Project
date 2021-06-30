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
           const {status,name, time, date, venue}=req.body;
           await conferenceModel.findOneAndUpdate({_id: req.params.id}, {
                status, name, time, date, venue
            })

        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },

    getConferenceById: async (req, res) =>{
        try {
            const conference = await conferenceModel.findById(req.params.id)
            if(!conference) return res.status(400).json({msg: "User does not exist."})
            res.send(conference)
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
    updateStatus : async (req,res)=>{
        try {
            const {status}=req.body;
            await conferenceModel.findOneAndUpdate({_id: req.params.id}, {
                status
            })

        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    }

}

module.exports=conferenceController