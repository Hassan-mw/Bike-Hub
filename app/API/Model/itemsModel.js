const mongoose=require('mongoose');


const itemsModel=new mongoose.Schema({





})


const ITEMS=mongoose.model("ITEMS",itemsModel)
module.exports=ITEMS;