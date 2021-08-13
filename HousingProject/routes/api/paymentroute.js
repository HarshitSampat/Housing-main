// import require modules
const {getPayment ,addRequest,deleterequest} = require('../../Controllers/paymentController');
const express= require('express');
const router = express.Router();

//get payment
router.get('/',getPayment)

//add new payment deails
router.post('/addRequest',addRequest)

//delete payment details
router.delete('/',deleterequest)

//export modules
module.exports = router