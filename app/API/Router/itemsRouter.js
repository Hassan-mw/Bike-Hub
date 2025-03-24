const express=require('express');
const router=express.Router();
const ItemsController=require('./../Controller/')

router.route('/items')
.get(itemsController.getAllItems)



module.exports=router