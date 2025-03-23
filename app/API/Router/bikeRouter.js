const express=require('express');
const router=express.Router();
const bikeController=require('./../Controller/bikeController')
const multer =require('multer');
const authController=require('../Controller/authController');
const upload=multer({dest:'public'})


router
.route('/')
.get(bikeController.getAllBike)
.post(bikeController.uploadBikePhoto,bikeController.createBike)
// .patch(bikeController.imageHandler)


router.route('/imageHandler')


router
.route('/:id')
.get(bikeController.getBikeByName)
// .get(authController.protect,bikeController.getBikeByName)



module.exports=router