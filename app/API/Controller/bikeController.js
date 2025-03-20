const APIFeatures = require('../dev-data/apiFeatures');
const BIKE=require('./../Model/bikdeModel')
const catchAsync=require('../Errorhandler/catchAsync');
const AppError = require('../Errorhandler/errorHandler');
const multer =require('multer');
const upload=multer({dest:'public'})

exports.uploadBikePhoto=upload.single('photo')




exports.getAllBike=catchAsync(async(req,res,next)=>{

  const features=new APIFeatures(BIKE.find(),req.query).filter().sort().limitedFields()
  const bike=await features.query;
  res.status(200).json({
    status:'sucess',
    data:bike
  })
})


exports.createBike=catchAsync(async(req,res,next)=>{

    const createdBike=await BIKE.create(req.body)    
    res.status(201).json({
    status:'sucess',
    data:createdBike
      })
})

exports.getBikeByName=catchAsync(async(req,res,next)=>{
  console.log(req.params.id,'😍😍😍😍😍😍😍')
    const bike=await BIKE.findById(req.params.id)
    res.status(200).json({
    status:'success',
    bike
   })
})

exports.imageHandler=catchAsync(async(req,res,next)=>{
  console.log('🦎🦎🦎🦎🦎🦎🦎🦎🦎🦎🦎🦎🦎🦎🦎🦎🦎')

 console.log(req.body)
 console.log(req.file)


})