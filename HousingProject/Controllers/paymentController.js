//import modules
const {Payment} = require('../Models/paymentModel')

//get all payment request

exports.getPayment = async(req,res)=>{
    //get solarRooftop request
    if(req.params.id){
        //get Payment by id
        const getPaymentDetails = await Payment.findById(req.params.id)
        if(!getPaymentDetails) res.send("Could not get what you want")

        //send response
        res.send(getPaymentDetails)
    }
    else{
        // get all payment 
        const getAllPaymentDetails = await Payment.find()
        res.send(getAllpaymentDetails)
    }   

}

//add new payment request
exports.addRequest = async(req,res)=>{
    
    const addRequest = new RoofTop({
        User:req.body.User,
        TypesOfHouse:req.body.TypesOfHouse,
        SpecificRequest:req.body.SpecificRequest
   
    })
    //save to database
    await addRequest.save()

    //respond to client
    res.send(addRequest)
}

exports.deleterequest = async(req,res)=>{
    //find request by id
    const deleterequest = Payment.findOneAndDelete(req.params.id)
    if(!deleterequest) res.send("could not find what you want")

    res.send('Deleted data permanently')
}