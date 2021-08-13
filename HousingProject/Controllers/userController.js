var express = require("express");
var router = express.Router();
const { User } = require("../Models/userModel");
const _ = require("lodash");
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');
const config = require('../config/custom-environment-variables.json');
const asyncHandler = require('express-async-handler')
const  generateToken  = require( "../utils/generateTokens");


//@description     Auth the user
//@route           POST /api/users/login
//@access          Public
const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      contactNo:user.contactNo,
      pic: user.pic,
      token: generateToken(user._id),
    });
  } else {
    res.status(401);
    throw new Error("Invalid Email or Password");
  }
});

//@description     Register new user
//@route           POST /api/users/
//@access          Public
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password, pic,contactNo } = req.body;

  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(404);
    throw new Error("User already exists");
  }

  const user = await User.create({
    name,
    email,
    password,
    pic,
    contactNo
  });

  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      pic: user.pic,
      contactNo:user.contactNo,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("User not found");
  }
});

// @desc    GET user profile
// @route   GET /api/users/profile
// @access  Private
const updateUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user.id);

  if (user) {
    user.name = req.body.name || user.name;
    user.email = req.body.email || user.email;
    user.pic = req.body.pic || user.pic;
    if (req.body.password) {
      user.password = req.body.password;
    }

    const updatedUser = await user.save();

    res.json({
      _id: updatedUser._id,
      name: updatedUser.name,
      email: updatedUser.email,
      pic: updatedUser.pic,
      isAdmin: updatedUser.isAdmin,
      contactNo:upadateUser.contactNo,
      token: generateToken(updatedUser._id),
    });
  } else {
    res.status(404);
    throw new Error("User Not Found");
  }
});

const getResponse = async function (req, res, next) {
  if (req.params.id) {
    //get USer by id
    const getUser = await User.findById(req.params.id)
    console.log(getUser);
    if (!getUser) res.send("Could not get what you want")
    //send response
    res.send(getUser)
  }
  else {
    const getUser = await User.find()
    res.send(getUser)
  }
}
  const DeleteUser = async function (req, res, next) {
    if (req.params.id) {
      try {
        const getUser = await User.findById(req.params.id)
        if (getUser) { await User.findByIdAndDelete(getUser)}
        res.send("deleteUser")
        console.log("You reached ")
      } catch (err) {
        res.send(err)
      }
    }
  }
  

  

module.exports = { authUser, updateUserProfile, registerUser,getResponse,DeleteUser};




//generate new object for google auth
// const client = new OAuth2Client(
//   "453908982436-la0ufvl0tp76uictsrcclobevjsmeth7.apps.googleusercontent.com"
// );

// const { response } = require("express");

// /* GET users listing. */
// exports.getResponse = async function (req, res, next) {
//   if(req.params.id){
//         //get Interior by id
//         const getUser = await User.findById(req.params.id)
//         if(!getUser) res.send("Could not get what you want")
//         //send response
//         res.send(getUser)
//     }
//     else{
//         const getUser = await User.find()
//         res.send(getUser)
//     }
// };

// // For User Registration
// exports.Register = asyncHandler(
  
//   async function (req, res) {
//     const { name, email, password, pic } = req.body
  
//     // check user existance
//     const userExist = await User.findOne({ email: email });

//       if (userExist) {
//         res.status(400)
//         throw new Error("User Already Exist")
//     }
  
//     // Else New user created   
//     const user = await User.create({
//       name,
//       email,
//       password,
//       pic
//     })

//     if (user) {
//       res.status(201).json({
//         _id: user._id,
//         name: user.name,
//         email: user.email,
//         isAdmin: user.isAdmin,
//         pic: user.pic
//       });
//     } else {
//       res.status(400)
//       throw new Error('Error occured');
//     }


//     user.save(err => {
//       if (err) {
//         res.send(err)
//       } else {
//         res.send({ message: "Success Fully registered", user })
//       }
//     })
    
// )
  

// exports.login = async function (req, res, next) {
//   try {
//     const { email,password} = req.body
//     User.findOne({ email: email }, (err, user) => {
//       if (user) {
//         if (password === user.password) {
//           accesstoken=jwt.sign({username:user.password},"secret");
//         return  res.status(201).send(accesstoken)
//         return  res.send({ message: "Login Successfully", accessToken:accesstoken, user: user })
//         }
//         else {
//          return res.send({message:"Password din't match"})
//         }
//       } else {
//        return res.send("User Not registered")
//       }
//     });

//   //   let user = await User.findOne({ email: req.body.email });
//   //   if (user) return res.status(400).send("User alredy registerd");

//   //   user = new User(_.pick(req.body, ["name", "email", "password"]));
//   //   const salt = await bcrypt.genSalt(10);
//   //   user.password = await bcrypt.hash(user.password, salt);

//   //   await user.save();

//   //   const token = user.generateAuthToken();
//   //   res
//   //     .header("x-auth-token", token)
//   //     .send(_.pick(user, ["_id", "name", "email"]));
//   //   console.log("login successfully!!");
//   }
//   catch {
//   return  res.send("Something went wrong");
//   }
// };

//  exports.googleLogin = (req, res) => {
//   try{
//       const { tokenId } = req.body;
// // 
//   client.verifyIdToken({
//     idToken:tokenId,
//     audience:
//       "453908982436-la0ufvl0tp76uictsrcclobevjsmeth7.apps.googleusercontent.com"
//   }).then(response=>{
//     const {email_verified,name,email} = response.payload
//     if(email_verified) {
//       User.findOne({email}.exec((err,user)=>{
//         if(err){
//             return res.status(400).json({
//               error:"Something went wrong"
//             })
//         }else{
//           if(user){
//               const token = jwt.sign({_id:user._id},process.env.JWT_SIGIN_KEY,{expiresIn:'7d'})
//               const {_id,name,email} =user;
//               res.json({
//                 token,
//                 user:{_id,name,email}
//               })
//               // 
//           }else{
//               let password = email+process.env.JWT_SIGNIN_KEY
//               let newUser = new User({name,email,password});
//               newUser.save((err,data) ={
//                 if(err){
//                   return res.status(400).json({
//                     error:"Something went wrong..."
//                   })
//                 }
//                 const token = jwt.sign({_id:data._id},process.env.JWT_SIGNIN_KEY,{expiresIn:'7d'})
//                 const {_id,name,email} = user;
//                 res.json({
//                   tokken,
//                   user:{_id,name,email}
//                 })
//               })else{
//                 let password = email+process.env.JWT_SIGNIN_KEY;
//                 let newUser = new User({name,email,password});
//                 newUser.save((err,data)=>{
//                   if(err){
//                     return res.status(400).json({
//                       error:"Something went wrong..."
//                     })
//                   }
//                 })
//               }
//           }
//         }
//       })
//       // 
//       )}
//     console.log(response.payload);
//   });
//   console.log();
// }catch{
//   res.send('something happend dear.Its look like you are not a programmer' )
// }
