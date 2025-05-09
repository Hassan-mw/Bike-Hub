const APIFeatures = require('../dev-data/apiFeatures');
const BIKE=require('./../Model/bikdeModel')
const catchAsync=require('../Errorhandler/catchAsync');
const AppError = require('../Errorhandler/errorHandler');
const multer =require('multer');
const path = require("path");

/////////////////////////////////////////////////////////////////////
const uploadPath=path.join(__dirname,"../../../public")

const multerStorage=multer.diskStorage({
  destination:(req,file,cb)=>{
    cb(null,uploadPath)
  },
  filename:(req,file,cb)=>{
    const ext =file.mimetype.split('/')[1];
    cb(null,`user-${Date.now()}.${ext}`)
    // cb(null,`user-${req.user.id}-${Date.now()}.${ext}`)
  }
})

const multerFilter=(req,file,cb)=>{
console.log(file)
  if(file.mimetype.startsWith('image')){
    cb(null,true)
  }else{
    cb(new AppError('Not an image ! Please upload only image',400),false )
  }
}

const upload=multer({
  storage:multerStorage,
  fileFilter:multerFilter
})

exports.uploadBikePhoto=upload.single('image')

/////////////////////////////////////////////////////////////////////






exports.createBike=catchAsync(async(req,res,next)=>{
  try {

    const newBike = await BIKE.create({
      name: req.body.name,
      brand: req.body.brand,
      category: req.body.category,
      url:req.body.url, 
      price: req.body.price,
      model: req.body.model,
      mileage: req.body.mileage,
      topSpeed: req.body.topSpeed,
      weight: req.body.weight,
      fuelType: req.body.fuelType,
      image:req.file.filename, // Store fixed path
    });
    console.log(req.file,req.body)

    res.status(201).json({
      status: "success",
      data: newBike,
    });
    } catch (error) {
    res.status(500).json({ status: "error", message: error.message });
   }
  })


exports.getBikeById=catchAsync(async(req,res,next)=>{
  const bike=await BIKE.findById(req.params.id)
    res.status(200).json({
    status:'success',
    bike
   })
})



exports.getAllBike=catchAsync(async(req,res,next)=>{

  const features=new APIFeatures(BIKE.find(),req.query).filter().sort().limitedFields()
  const bike=await features.query;
  res.status(200).json({
    status:'sucess',
    data:bike
  })
})