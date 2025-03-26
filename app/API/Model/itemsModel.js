const mongoose=require('mongoose');
const { type } = require('os');


const itemsModel=new mongoose.Schema({

discount:Number,
image:String,
name:{
    type:String,
    required:[true,'A item must have name']
},
subtitle:String,
price:{
    type:Number,
    required:[true,'A item must have price']
},
company:{
    type:String,
    required:[true,'A item must belong to some company']
},
category:{
type:String,
required:[true,'A item mssut have category']
},
size:{
    type:String,
    enum:['Small','Medium','Large']
},
matchedBike:String



})


const ITEMS=mongoose.model("ITEMS",itemsModel)
module.exports=ITEMS;