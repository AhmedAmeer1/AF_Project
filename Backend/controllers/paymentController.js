const paymentModel = require('../models/paymentModel');


const paymentController ={

    addpayment : async  (req,res)=>{
        try {
            console.log("inside payment controler")
            const {name,cardnumber,cvv,expirydate}=req.body;
            console.log("ggggggg"+name)




            const newPayment = new paymentModel({name,cardnumber,cvv,expirydate})
            console.log("aaaaaaa"+name)

            await newPayment.save();
            res.send({msg:"user saved in the database"})

        } catch (error) {
            return res.send(500).json({msg: error.message})
        }

    }



}

module.exports=paymentController