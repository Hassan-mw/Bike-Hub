const catchAsync = require("../Errorhandler/catchAsync");
const USER=require('../Model/userModel')
const jwt=require('jsonwebtoken');

exports.signup=catchAsync(async(req,res,next)=>{
console.log(req.body)
  const newUser=await USER.create(req.body)

  const token=jwt.sign({id:newUser._id},
    'asasfasasgasg',{expiresIn:90}
  )
  res.status(201).json({
    status:'success',
    token
  })
 })