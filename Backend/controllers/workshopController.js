const workshopModel = require('../models/workshopModel');



const workshopController ={

    addWorkshop: async  (req,res)=>{
        try {
              
        
                const {name,university,mobileNumber,topic,statementOfIntrest}=req.body;
                                                 
                const newworkshop = new workshopModel({name,university,mobileNumber,topic,statementOfIntrest})
              

                await newworkshop.save();
        
                res.send({msg:"workshop added successfull"})

        } catch (error) {
            return res.send(500).json({msg: error.message})
        }

    }

    



  





}

module.exports=workshopController