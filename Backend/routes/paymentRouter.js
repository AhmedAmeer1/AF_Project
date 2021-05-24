const router = require ('express').Router()
const paymentController = require('../controllers/paymentController')




router.post('/makepayment',paymentController.addpayment)






module.exports  = router