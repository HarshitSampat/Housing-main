//import modules
const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
// const config = require('../config/custom-environment-variables.json');
// const jwt = require('jsonwebtoken');

//create schema
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  isAdmin: {
    type: Boolean,
    required: true,
    default: false
  },

  pic: {
    type: String,
    required: true,
    default: "http://thepeakid.com/wp-content/uploads/2016/03/default-profile-picture.jpg"
  },
  contactNo: {
    type: Number,
    required:true
  },
}, 
  {
    timestamps:true
  }
);

// userSchema.methods.generateAuthToken = ()=>{
  
//   const token =    jwt.sign({user:user},'secretkey',{expiresIn: '1d'},(err,token)=>{  
//         res.json({token})  
//     })  
//   return token
// }

// password Encryption
userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) {
    next();
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password,salt)
})

// decrypt assword for login
userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};


//create model
const User = mongoose.model('User', userSchema)


//export model
module.exports = { User }