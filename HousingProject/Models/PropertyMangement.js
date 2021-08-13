//import modules
const mongoose = require('mongoose')
// const {User} = require('./userModel')

//Create Schema 
const propertyManagementSchema = new mongoose.Schema({
    User:{
        type:mongoose.Schema.Types.ObjectId,
        required:true
    },
    Property_City:{
        type:String,
        Reqquired:true
    },
    House_Configuration:{
        type:String,
        required:true
    },
    ExpectedRent:
    {
        type:Number,
        required:true
    },
    Special_Request:[{
        type:String
    }]
})

//ceate model
const propertyManagement = mongoose.model('PropertyMangement',propertyManagementSchema)

//module exports
module.exports = {propertyManagement}