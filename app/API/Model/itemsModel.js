const mongoose=require('mongoose');


const itemsModel=new mongoose.Schema({

name:{
    type:String,
    require:[true,'A item must have name']
},
price:{

    type:Number,
    require:[true,'A item must have price']
},
company:{
    type:String,
    require:[true,'A item must belong to some company']
},
size:{
    type:String,
    enum:['small','medium','large']
},
color:String,
matchedBike:String



})


const ITEMS=mongoose.model("ITEMS",itemsModel)
module.exports=ITEMS;