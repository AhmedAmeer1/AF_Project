const workshopModel = require('../models/workshopModel');

const workshopController ={
    addWorkshop: async  (req,res)=>{
        try {
                const {name,university,mobileNumber,topic,statementOfIntrest,contactDetail}=req.body;
                const newworkshop = new workshopModel({name,university,mobileNumber,topic,statementOfIntrest,contactDetail})
                await newworkshop.save();
                res.send({msg:"workshop added successfull"})
        } catch (error) {
            return res.send(500).json({msg: error.message})
        }
    },
    getWorkshopDetail : async (req,res)=>{
        try {
            const workshops= await workshopModel.find().then(workshop => res.json(workshop));
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
    updateWorkshopDetail : async (req,res)=>{
        try {
            const {status}=req.body;
            await workshopModel.findOneAndUpdate({_id: req.params.id}, {
                status
            })
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    }

}

module.exports=workshopController