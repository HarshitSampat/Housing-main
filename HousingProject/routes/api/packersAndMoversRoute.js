// import require modules
const {
  getpackerAndMovers,
  addNewData_Packers_ANd_Movers,
  deletePackersAndMovers
} = require("../../Controllers/packersMovers");
const express = require('express');
const router = express.Router();


//get request 
router.get('/', getpackerAndMovers);

// get request by id
router.get('/',getpackerAndMovers)


//post request 
router.post("/", addNewData_Packers_ANd_Movers);

// delete  Packeers And Movers
router.delete('/:id',deletePackersAndMovers)

module.exports = router