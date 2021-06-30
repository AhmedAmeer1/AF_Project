const router = require ('express').Router()
const userController = require('../controllers/userController')

router.post('/register',userController.register)
router.post('/login',userController.login)
router.put('/editUser/:id',userController.updateUser)
router.delete('/deleteUser/:id',userController.deleteUser)

module.exports  = router