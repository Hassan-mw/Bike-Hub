
const catchAsync=require('./../Errorhandler/catchAsync')
const ITEMS=require('./../Model/itemsModel')
const APIFeatures = require('../dev-data/apiFeatures');
const multer =require('multer');
const path = require("path");



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



exports.uploadItemPhoto=upload.single('image')






exports.getAllItems=catchAsync(async(req,res,next)=>{
const items=new APIFeatures(ITEMS.find(),req.query).filter().sort().limitedFields()

res.status(200).json({
    status:'success',
    data:items
})
})


exports.createItem=catchAsync(async(req,res,next)=>{

    const newItem=await ITEMS.create({
        name: req.body.name,
        discount: req.body.discount,
        image:  req.file.filename, // Store fixed path
        subtitle: req.body.subtitle,
        category: req.body.category,
        price: req.body.price,
        company: req.body.company,
        category: req.body.category,
        size: req.body.size,
        matchedBike:req.body.matchedBike,
      });
  

    res.status(201).json({
        status:'success',
        data:newItem
    })
})