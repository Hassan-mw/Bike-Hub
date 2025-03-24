
const catchAsync=require('./../Errorhandler/catchAsync')

exports.getAllItems=catchAsync(async(req,res,next)=>{
const allItems=await ITEMS.find()

})