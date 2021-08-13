// import modules
const mongoose = require('mongoose')
// const { User } = require('./userModel')

// create schema
const rentSchema = new mongoose.Schema({
    User: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
    },
        LandLord_Name: {
            type: String,
            required: true
        },
        Landlord_Phone_No: {
            type: Number,
            required: true
        },
        IFSC_Code: {
            type: Number,
            required: true
        },
        Bank_Account_No: {
            type: Number,
            required: true,
        },
        Pan_No: {
            type: String,
            required: true
        },
    
        Address: {
            type: String,
            required: true
        },
        Property_Type: {
            type: String,
            required: true
        },
        Bhk: {
            type: String,
            required: true
        },
    
        paymen_Mode: {
            type: String,
            require: true
        },
        Amount: {
            type: Number,
            require: true
        },
        choose_Payment_Mode: {
            type: String,
            require: true
        }
})

//create model
const Rent = mongoose.model('rents',rentSchema)

//module exports
module.exports = {Rent}