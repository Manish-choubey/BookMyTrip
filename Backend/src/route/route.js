const express = require("express")
const router = express.Router()
const usercontroller =  require('../controllers/Usercontroller')
const roomcontroller = require('../controllers/Roomcontroller')

const {verifyToken, verifyTokenAdmin,} = require("../middleware/auth")




// -----------------------USERINFO--------------------------

router.post('/register',usercontroller.createUser)
router.post('/login',usercontroller.loginUser)

//-------------------------------BookDetails-------------
router.get('/', verifyToken,roomcontroller.getAll)
router.get('/find/types',roomcontroller.gettype)
router.get('/find/:id',roomcontroller.getById)
router.post('createroom',verifyTokenAdmin,roomcontroller.createRoom)
router.put('update/:id',verifyTokenAdmin,roomcontroller.updateroom)
router.delete('delet/:id',verifyTokenAdmin,roomcontroller.deleteRoom)
router.post('bookroom/:id', verifyToken,roomcontroller.bookHotel)

router.post('update/:id',usercontroller.createUser)







module.exports = router;