const catchAsync = require("../Errorhandler/catchAsync");
const {promisify}=require('util')
const AppError = require("../Errorhandler/errorHandler");
const USER = require("../Model/userModel");
const jwt=require('jsonwebtoken')

exports.protect=catchAsync(async(req,res,next)=>{
console.log(req.headers.authorization,'🤑🤑🤑🤑🤑🤑🤑🤑')
let token;
if(req.headers.authorization){
token=req.headers.authorization.split(' ')[1];

}
if(!token){
    return next(new AppError('invalid token',401))
}
const decode=await promisify(jwt.verify)(token,'asasfasasgasg')

const currentUser=await USER.findById(decode.id)

if(!currentUser){
    return next(new AppError('invalid id',401))
}

if(currentUser.changePasswordAfter(decode.iat)){
    return next(new AppError('invalid id',401))
}

req.user=currentUser
next();
})