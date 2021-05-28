const router = require ('express').Router()
const conferenceController = require('../controllers/conferenceController')




router.post('/addConference',conferenceController.addConference)

router.get('/getConference',conferenceController.getConferenceDetail)

router.put('/editConference/:id',conferenceController.updateConferenceDetail)









   
    



module.exports  = router