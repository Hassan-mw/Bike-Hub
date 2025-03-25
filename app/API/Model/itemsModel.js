const mongoose=require('mongoose');
const { type } = require('os');


const itemsModel=new mongoose.Schema({

discount:Number,
image:String,
name:{
    type:String,
    require:[true,'A item must have name']
},
subtitle:String,
price:{
    type:Number,
    require:[true,'A item must have price']
},
company:{
    type:String,
    require:[true,'A item must belong to some company']
},
category:{
type:String,
require:[true,'A item mssut have category']
},
size:{
    type:String,
    enum:['small','medium','large']
},
matchedBike:String



})


const ITEMS=mongoose.model("ITEMS",itemsModel)
module.exports=ITEMS;