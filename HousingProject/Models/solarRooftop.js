//import modules
const mongoose = require('mongoose')
// const {User} = require('./userModel')

//create Schema
 const solarrooftopSchema = new mongoose.Schema({
     User:{
         type:mongoose.Schema.Types.ObjectId,
         requird:true
     },
     TypesOfHouse:{
         type:String,
         required:true
     },
     SpecificRequest:[{
         type:String

     }]

 });

 //create model
 const RoofTop = mongoose.model('solarrooftops',solarrooftopSchema)

 //export module
 module.exports ={RoofTop}
 