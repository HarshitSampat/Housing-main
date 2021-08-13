//import modules
const mongoose = require('mongoose')
// const { User } = require("./userModel");

mongoose.connect('mongodb://localhost/housing_harshit',{useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log('Connected to MongoDB...'))
    .catch(err => console.error(' Could not Connected to MongoDB...',err));

//create schema
const propertySchema = new mongoose.Schema({
    User: {
        type: mongoose.Schema.Types.ObjectId,
        ref:"User",
        required: true
    },  
    Rent_Buy: {
        type: String,
        required:true
    },
    Property_Type: {
        type: String,
        required: true,
        default: ['Apartment', 'Independent_House', 'Independent_Floor','Villa']
        },
        AgeOfProperties: {
            type: String
        },
        Bhk: {
            type: String,
            required: true,
            default:['1rk','1bhk','2bhk','3bhk','3+bhk']
        },
        Bathroom: {
            type: String,
            default:['0','1','2','3','3+']
        },
        Balcony: {
            type: String,
            default:['0','1','2','3','3+']
        },
        furnished_Type: {

            type:String,
        },
        CoveredParking: {
            type: String,
        },

        OpenParking: {
            type:String
        },
        AvailableFrom: {
            type: String
        },
        MonthlyRent: {
            type:Number,
        },
        Maintance_Charges: {
            type:Number
        },
        SecurityDepositAsk: {
            Type: Boolean,
        },
        SecurityDeposit: {
            Type: Number,
            
        },

        BuilTUpArea: {

            type:String
        },
        Prefferd_Tenant_Type: {
            Type: String,
            default:['Family','Bachelors','Company']
        },
        Image: {
            type: String,
            required: true,
            default: "https://pngimg.com/uploads/house/house_PNG57.png  "
        },
        City: {
             type: String,
             required:true
         },
         Locality: {
             type: String,
             required:true
         },
         contactNo: {
             type: Number,
             required:true
         }
},
    {
    timestamps:true
  }
)


//create model
const Property = mongoose.model('Property', propertySchema)


//export module
module.exports = { Property }
