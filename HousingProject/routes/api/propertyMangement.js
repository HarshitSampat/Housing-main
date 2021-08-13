// import require modules
const {getPropertyManagementRequest ,addPropertymanagementRequest,deleterequest} = require('../../Controllers/propertyMangement');
const express= require('express');
const router = express.Router();

//get payment
router.get('/',getPropertyManagementRequest)

//add new payment deails
router.post('/',addPropertymanagementRequest)

//delete payment details
router.delete('/',deleterequest)

//export modules
module.exports = router