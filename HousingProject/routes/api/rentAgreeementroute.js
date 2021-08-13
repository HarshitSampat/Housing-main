// import require modules
const {getrentAgreement ,addrentAgreement,deleterequest} = require('../../Controllers/rentAgreementController');
const express= require('express');
const router = express.Router();

//get request
router.get('/',getrentAgreement)

//Post request
router.post('/',addrentAgreement)

//delete request
router.delete('/',deleterequest)

//export modules
module.exports = router