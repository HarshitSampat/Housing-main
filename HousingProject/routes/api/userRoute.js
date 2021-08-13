// import require modules
const {authUser, updateUserProfile, registerUser,getResponse,DeleteUser} = require("../../Controllers/userController");
const express= require('express');
const { User } = require("../../Models/userModel");
const router = express.Router();

//get request
// router.get('/',getResponse)

// get request by id
// router.get('/:id',getResponse)

// Post  for login
 router.post('/login',authUser)


router.post('/register', registerUser)

// get all user
router.get('/',getResponse)

// get user By its id
router.get('/:id', getResponse)



// deletem user
router.delete('/:id',DeleteUser)

//export modules
module.exports = router