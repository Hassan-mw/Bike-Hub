const express=require('express');
const router=express.Router();
const ItemsController=require('./../Controller/itemsController')

router.route('/items')
.get(ItemsController.getAllItems)



module.exports=router