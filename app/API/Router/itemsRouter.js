const express=require('express');
const router=express.Router();
const ItemsController=require('./../Controller/')

router.route('/items')
.get(ItemsController.getAllItems)



module.exports=router