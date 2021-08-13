//import modules
const {propertyManagement} = require('../Models/PropertyMangement')

//get all propertyMangement request

exports.getPropertyManagementRequest = async(req,res)=>{
    //get property management request
    if(req.params.id){
        //get Interior by id
        const propertymanagementrequest = await propertyManagement.findById(req.params.id)
        if(!propertymanagementrequest) res.send("Could not get what you want")

        //send response
        res.send(prepertymanagementrequest)
    }
    else{
        // get all propertymangement request
        const getPropertyManagementRequests = await propertyManagement.find()
        res.send(getPropertyManagementRequests)
    }

}

//add new property managemnet request
exports.addPropertymanagementRequest= async(req,res)=>{
    
    const addRequest = new propertyManagement({
        User:req.body.User,         
        Property_City:req.body.Property_City,
        House_Configuration:req.body.House_Configuration,
        ExpectedRent:req.body.ExpectedRent,
        Special_Request:[req.body.Special_Request]
    })
    //save to database
    await addRequest.save()

    //respond to clinent
    res.send(addRequest)
}

exports.deleterequest = async(req,res)=>{
    //find request by id
    const deleterequest = propertyManagement.findOneAndDelete(req.params.id)
    if(!deleterequest) res.send("could not find what you want")

    res.send('Deleted data from permanent')
}