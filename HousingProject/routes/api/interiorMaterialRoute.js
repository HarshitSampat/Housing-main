// import require modules
const {getInterriorDetails,addNewInteriorDetails,deleteInterior} = require('../../Controllers/interiorMatrial');
const express= require('express');
const router = express.Router();


//get request
router.get('/', getInterriorDetails)

// get Interior by Id
router.get('/:id',getInterriorDetails)

//post request for interior
router.post('/', addNewInteriorDetails)

// delete Interior
router.delete('/:id',deleteInterior)
    
//exports modules
module.exports = router



