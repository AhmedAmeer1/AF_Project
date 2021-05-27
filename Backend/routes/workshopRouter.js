const router = require ('express').Router()
const workshopController = require('../controllers/workshopController')




router.post('/addWorkshop',workshopController.addWorkshop)

//router.get('/getWorkshop',workshopController.getConferenceDetail)





   
    



module.exports  = router