const paymentModel = require('../models/paymentModel');

const paymentController ={
    addPayment : async  (req,res)=>{
        try {
            const {cardName, cardNumber, cvv, cardExpire,contactDetails}=req.body;
            const newPayment = new paymentModel({ cardName, cardNumber, cvv, cardExpire,contactDetails})
            await newPayment.save();
            res.send({msg:"payment added successfull"})
        } catch (error) {
            return res.send(500).json({msg: error.message})
        }

    }

    // getConferenceDetail : async (req,res)=>{
    //     try {
    //         const conferences= await conferenceModel.find().then(conference => res.json(conference));
    //     } catch (err) {
    //         return res.status(500).json({msg: err.message})
    //     }
    // }


}

module.exports=paymentController