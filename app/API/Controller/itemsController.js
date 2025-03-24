
const catchAsync=require('./../Errorhandler/catchAsync')
const ITEMS=require('./../Model/itemsModel')
const APIFeatures = require('../dev-data/apiFeatures');



exports.getAllItems=catchAsync(async(req,res,next)=>{
const items=new APIFeatures(ITEMS.find(),req.query).filter().sort().limitedFields()

res.status(200).json({
    status:'success',
    data:items
})
})