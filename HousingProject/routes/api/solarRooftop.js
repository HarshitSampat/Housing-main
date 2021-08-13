// import require modules
const { getsolarRoofTop, addRequest, deleterequest } = require('../../Controllers/solarRooftop');
const express = require('express');
const router = express.Router();

//get request
router.get('/', getsolarRoofTop)

//Post request
router.post('/addRequest', addRequest)

//delete request
router.delete('/', deleterequest)

//export modules
module.exports = router