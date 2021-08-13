const {rentAgreement} = require('../Models/rentAgreement')

//get all rentagreemnet request

exports.getrentAgreement = async(req,res)=>{
    //get property management request
    if(req.params.id){
        //get rentAgreement by id
        const rentagreement = await rentAgreement.findById(req.params.id)
        if(!rentagreement) res.send("Could not get what you want")

        //send response
        res.send(rentagreement)
    }
    else{
        // get all rentagreement
        const getrentagreement = await rentAgreement.find()
        res.send(getrentagreement)
    }

}

//add new rentAgrrement request
exports.addrentAgreement= async(req,res)=>{
          
    const addRequest = new rentAgreement({
      User: req.body.User,
        
        LandLord_Name: req.body.LandLord_Name,
        Landlord_Phone_No: req.body.Landlord_Phone_No,
        IFSC_Code: req.body.IFSC_Code,
        Bank_Account_No: req.body.Bank_Account_No,
        Pan_No: req.body.Pan_No,
     
        
          FullName: req.body.FullName,
          contactNo: req.body.contactNo,
          cuurrentAddress: req.body.cuurrentAddress,
          email: req.body.email,
          PanNo: req.body.PanNo,
        
      
        Address: req.body.Address,
        flooarNo: req.body.flooarNo,
        Locality: req.body.Locality,
        PinCode: req.body.PinCode,
        State: req.body.State,
        Property_Type: req.body.Property_Type,
        Bhk: req.body.Bhk,
      
        StartDate: req.body.StartDate,
        monthly_Rent: req.body.monthly_Rent,
        rent_Payment_Date: req.body.rent_Payment_Date,
        Security_amount: req.body.Security_amount,
        Notice_Period: req.body.Notice_Period,
        rentIncrement: req.body.rentIncrement,
        IncrementPercentage: req.body.IncrementPercentage,
      
      FurnitureItems: [req.body.FurnitureItems],
    });
    //save to database
    await addRequest.save()

    //respond to clinent  
    res.send(addRequest)
}

exports.deleterequest = async(req,res)=>{
    //find request by id
    const deleterequest = rentAgreement.findOneAndDelete(req.params.id)
    if(!deleterequest) res.send("could not find what you want")

    res.send('Deleted data permanently')
}