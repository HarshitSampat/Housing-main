const {Rent} = require('../Models/rentModel')


//get all rent request

exports.getrent = async(req,res)=>{
    //get property management request
    if(req.params.id){
        //get rent by id
        const getrentByid = await Rent.findById(req.params.id)
        if(!getRentByid) res.send("Could not get what you want")

        //send response
        res.send(getRentByid)
    }
    else{
        // get all people who want rent property
        const getRent = await Rent.find()
        res.send(getRent)
    }

}

//add new rent request
exports.addRent= async(req,res)=>{
    
    const addRequest = new Rent({
            
            User:req.body.User,
            LandLord_Name:req.body.LandLord_Name,
            Landlord_Phone_No: req.body.Landlord_Phone_No,
            IFSC_Code: req.body.IFSC_Code,
            Bank_Account_No: req.body.Bank_Account_No,
            Pan_No: req.body.Pan_No,
            Address: req.body.Address,
            Property_Type: req.body.Property_Type,
            Bhk: req.body.Bhk,
            paymen_Mode: req.body.paymen_Mode,
            Amount: req.body.Amount,
            choose_Payment_Mode: req.body.choose_Payment_Mode
    })
    //save to database
    await addRequest.save()

    //respond to clinent
    res.send(addRequest)
}
// delete request
exports.deleterequest = async(req,res)=>{
    //find request by id
    const deleterequest = Rent.findOneAndDelete(req.params.id)
    if(!deleterequest) res.send("could not find what you want")

    res.send('Deleted data permanently')
}