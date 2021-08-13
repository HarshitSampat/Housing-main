//import modules
const {Interior} = require('../Models/interirorMatrieal')

//get all interior 
exports.getInterriorDetails= async(req,res)=>{
    if(req.params.id){
        //get Interior by id
        const getInterrior = await Interior.findById(req.params.id)
        if(!getInterrior) res.send("Could not get what you want")

        //send response
        res.send(getInterior)
    }
    else{
        const getInterior = await Interior.find()
        res.send(getInterior)
    }
}

//add new details of Interrior

exports.addNewInteriorDetails= async(req,res)=>{
    
    try{
  const addNewInteriorDetails=new  Interior({ 
    // User:req.body.User,
    User:req.body.User,
    pinCode:req.body.pinCode,
    Budget:req.body.Budget,
    Scope_Of_Work:req.body.Scope_Of_Work,
    Type_Of_Appartment:req.body.Type_Of_Appartment,
    PosesetionTimeLine:req.body.PosesetionTimeLine,
    Comments:[req.body.Comments]
  });
  //save to database
  await addNewInteriorDetails.save()

  //send Details to databse
  res.send(addNewInteriorDetails)
}catch(err){
  res.send(err)
}
}

exports.deleteInterior = async (req, res) => {
  try {
            
        const deleterequest = await Interior.findByIdAndDelete(req.params.id)
        if (!deleterequest) res.send("could not delete this")
        
        res.send("Interior Deleted And Movers Deleted")
        
    } catch (err) {
        res.send(err)
    }
}


