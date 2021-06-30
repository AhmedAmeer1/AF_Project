const adminController = require('../controllers/adminController')
const router = require ('express').Router()
const { auth } =require('../middleware/auth')

router.get('/users',auth,adminController.getUserDetail)
router.delete('/users/:id',adminController.deleteUser).put(adminController.getUser)
router.get('/users/:id',adminController.getUser)

module.exports = router