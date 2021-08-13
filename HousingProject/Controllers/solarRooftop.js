const {RoofTop} = require('../Models/solarRooftop')

//get all solarRoofTop request

exports.getsolarRoofTop = async(req,res)=>{
    //get solarRooftop request
    if(req.params.id){
        //get soalrrooftop by id
        const getSolarRooftopbyId = await RoofTop.findById(req.params.id)
        if(!getSolarRooftop) res.send("Could not get what you want")

        //send response
        res.send(getSolarRooftopbyId)
    }
    else{
        // get all packers and movers 
        const getAllSolar = await RoofTop.find()
        res.send(getAllSolar)
    }

}

//add new solarRooftop request
exports.addRequest = async(req,res)=>{
    
    const addRequest = new RoofTop({
        User:req.body.User,
        TypesOfHouse:req.body.TypesOfHouse,
        SpecificRequest:req.body.SpecificRequest
   
    })
    //save to database
    await addRequest.save()

    //respond to clinent
    res.send(addRequest)
}

exports.deleterequest = async(req,res)=>{
    //find request by id
    const deleterequest = RoofTop.findOneAndDelete(req.params.id)
    if(!deleterequest) res.send("could not find what you want")

    res.send('Deleted data permanently')
}