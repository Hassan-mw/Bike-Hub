const express=require('express');
const router=express.Router();
const bikeController=require('./../Controller/bikeController')
const authController=require('../Controller/authController');
router
.route('/')
.get(bikeController.getAllBike)
.post(bikeController.createBike)


router
.route('/:id')
.get(authController.protect,bikeController.getBikeByName)



module.exports=router