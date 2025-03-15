const express=require('express');
const router=express.Router();
const bikeController=require('./../Controller/bikeController')

router
.route('/')
.get(bikeController.getAllBike)
.post(bikeController.createBike)


router
.route('/:name')
.get(bikeController.getBikeByName)



module.exports=router