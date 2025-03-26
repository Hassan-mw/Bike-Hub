const express=require('express');
const router=express.Router();
const ItemsController=require('./../Controller/itemsController')

router.route('/')
.get(ItemsController.getAllItems)
.post(ItemsController.createItem)



module.exports=router