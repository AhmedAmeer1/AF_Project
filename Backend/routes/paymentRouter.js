const router = require ('express').Router()
const paymentController = require('../controllers/paymentController')




router.post('/addPayment',paymentController.addPayment)

// router.get('/getConference',conferenceController.getConferenceDetail)
//
// router.put('/editStatus/:id',conferenceController.updateStatus)
//
// router.get('/conference/:id',conferenceController.getConferenceById)
//
//
// router.put('/editConference/:id',conferenceController.updateConferenceDetail)










   
    



module.exports  = router