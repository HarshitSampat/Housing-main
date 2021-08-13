//import module
const mongoose = require('mongoose')

//create Schema
const paymentSchema = new mongoose.Schema({
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
const Payment = mongoose.model('payments', paymentSchema)

//exports model
module.exports = { Payment }
