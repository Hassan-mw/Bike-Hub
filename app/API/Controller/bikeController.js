const APIFeatures = require('../dev-data/apiFeatures');
const BIKE=require('./../Model/bikdeModel')
const catchAsync=require('../Errorhandler/catchAsync');
const AppError = require('../Errorhandler/errorHandler');


exports.getAllBike=catchAsync(async(req,res,next)=>{

  const features=new APIFeatures(BIKE.find(),req.query).filter().sort().limitedFields()
  const bike=await features.query;
  res.status(200).json({
    status:'sucess',
    data:bike
  })
})


exports.createBike=catchAsync(async(req,res,next)=>{

    const createdBike=await BIKE.findOneAndUpdate(req.body,{runValidator:true})    
    console.log(createdBike,'😎😎😋')
    res.status(201).json({
    status:'sucess',
    data:createdBike
      })
})

exports.getBikeByName=catchAsync(async(req,res,next)=>{
    const bike=await BIKE.find({url:req.params.name})
    res.status(200).json({
    status:'success',
    bike
   })
})