// import require modules
const {getProperty ,addNewProperty,getPropertyByCity,getPropertyByCityAndLocality,getPropertyByUserID} = require('../../Controllers/property');
const express= require('express');
const router = express.Router();

//get payment
router.get('/',getProperty)

router.get("/:id", getProperty);

// get  Property By City
router.get("/City/:City", getPropertyByCity);

// get PropertyBy city And locality
router.get("/City/:City/:Locality", getPropertyByCityAndLocality);

//add new payment deails
router.post('/', addNewProperty)

// getProperty By UserId
router.get('/User/:User',getPropertyByUserID)

//export modules
module.exports = router