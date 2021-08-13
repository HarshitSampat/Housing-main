// import modules
const {Property} = require("../Models/PropertyModel");

//get the property

exports.getProperty = async (req, res) => {
  try {
    if (req.params.id) {
      //search property By id
      const getProperty = await Property.findById(req.params.id);
      if (!getProperty) res.status(400).send("Could not get what you want");
      // else if(req.params.City){
      //   // Search Property By  City
      //   const getProperty = await Property.find({City:req.params.City , Locality:req.params.});
      //   if(!getProperty)res.status(400).send("Could not get what you want")
      // }
      // else if (req.params.City && req.Paraams.Locality) {
      //   const getProperty = await Property.find(req.params.City && req.params.Locality);
      //   if(!getProperty)res.status(400).send("Could not get what you want")
      // }
      res.send(getProperty);
    } else {
      //get all property
      const getproperty = await Property.find();
      res.send(getproperty);
    }
  } catch(error) {
    console.error(error);
    res.send(error)
  }
};

// get Property by City
exports.getPropertyByCity = async (req, res) => {
  try {
    if (req.params.City) {
      const getProperty = await Property.find({ City: req.params.City });
      if (!getProperty) res.status(400).send("Could not get what you want")
      res.send(getProperty);
    } else {
      //get all property
      const getproperty = await Property.find();
      res.send(getproperty);
    }
  }
  catch (error) {
    console.error(error);
    res.send(error)
  }
}
exports.getPropertyByCityAndLocality = async (req, res) => {
  try {
    if (req.params.City && req.params.Locality) {
      const getProperty = await Property.find({ City: req.params.City , Locality:req.params.Locality});
      if (!getProperty) res.status(400).send("Could not get what you want")
      res.send(getProperty);
    } else {
      //get all property
      const getproperty = await Property.find();
      res.send(getproperty);
    }
  }
  catch (error) {
    console.error(error);
    res.send(error)
  }
}

// get property By userId  
exports.getPropertyByUserID = async (req, res) => {
  try {
    if (req.params.User) {
      const getProperty = await Property.find({ User: req.params.User});
      if (!getProperty) res.status(400).send("Could not get what you want")
      res.send(getProperty);
    } else {
      //get all property
      const getproperty = await Property.find();
      res.send(getproperty);
    }
  }
  catch (error) {
    console.error(error);
    res.send(error)
  }
}





// add new property
exports.addNewProperty = async (req, res) => {
  try {
    const addnewProperty = new Property({
      User: req.body.User,
      Rent_Buy:req.body.Rent_Buy,
        Property_Type: req.body.Property_Type,
        AgeOfProperties: req.body.AgeOfProperties,
        Bhk: req.body.Bhk,
        Bathroom: req.body.Bathroom,
        Balcony: req.body.Balcony,
        furnished_Type:req.body.furnished_Type,
        CoveredParking: req.body.CoveredParking,
        OpenParking: req.body.OpenParking,
        AvailableFrom:req.body.AvailableFrom,
        MonthlyRent: req.body.MonthlyRent,
        Maintance_Charges: req.body.Maintance_Charges,
        SecurityDeposit:req.body.SecurityDeposit,
        BuilTUpArea: req.body.BuilTUpArea,
        Prefferd_Tenant_Type:req.body.Prefferd_Family_Type,
        City: req.body.City,
        Locality: req.body.Locality,
        contactNo:req.body.contactNo,
        Image: req.body.Image,
    });
    //save to databese
    await addnewProperty.save();

    //reponse
    res.send(addnewProperty);
  } catch(error) {
    console.error(error);
    res.send(error)
  }
};
