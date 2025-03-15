const catchAsync = require("../Errorhandler/catchAsync");
const USER=require('../Model/userModel')
const jwt=require('jsonwebtoken');
const AppError = require('../Errorhandler/errorHandler');



const signToken=(id)=>{
 return jwt.sign({id},
    'asasfasasgasg',{expiresIn:'90d'}
  )
}

exports.signup=catchAsync(async(req,res,next)=>{
console.log(req.body)
  const newUser=await USER.create(req.body)
  const token= signToken(newUser._id)
 
   res.status(201).json({
    status:'success',
    token
  })
 })

 exports.login=catchAsync(async(req,res,next)=>{
const {email,password}=req.body

if(!email || !password){
  return next( new AppError('Email or Password not provided',400))
}

const user=await USER.findOne({email}).select('+password');
console.log(user)
if(!user){
  return next( new AppError('Invalid email ',400))
}

const correct=await user.correctPassword(password,user.password)
if( !correct){
  return next(  new AppError(' Password not correct',400))
}

 const token=signToken(user._id)

 res.status(201).json({
  status:'success',
  token
})


 })

