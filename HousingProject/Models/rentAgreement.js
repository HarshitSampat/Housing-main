//import module
const mongoose = require('mongoose')
// const  {User} = require('./userModel')

//create schema
const rentAgreementSchema = new mongoose.Schema({
    User:{
        type:mongoose.Schema.Types.ObjectId,
        required:true
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
    
        FullName:{
            type:String,
            required:true
        },
        contactNo:{
            type:Number,
            required:true
        },
        cuurrentAddress:{
            type:String,
            required:true
        },
        email:{
            type:String,
            required:true
        },
        PanNo:{
            type:String
        },
     
        Address: {
            type: String,
            required: true
        },
        flooarNo:{
            type:Number,
            required:true
        },
        Locality:{
            type:String,
            required:true
        },
        PinCode:{
            type:Number,
            required:true
        },
        State:{
            type:String,
            required:true
        },
        Property_Type: {
            type: String,
            required: true
        },
        Bhk: {
            type: String,
            required: true
        },
    
        StartDate:{
            type:Date,
            reqired:true
        },
        monthly_Rent:{
            type:Number,
            required:true
        },
        rent_Payment_Date:{
            type:Date,
            required:true
        },
        Security_amount:{
            type:Number,
            required:true
        },
        Notice_Period:{
            type:Number,
            required:true
        },
        rentIncrement:{
            type:Boolean,
            required:true
        },
        IncrementPercentage:{
            type:Number
        },
    
    FurnitureItems:[{
        type:String
    }],

});

//create Model
const rentAgreement  = mongoose.model('agreements',rentAgreementSchema)

//exports module
module.exports = {rentAgreement}