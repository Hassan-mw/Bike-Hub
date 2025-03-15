const express=require('express');
const router=express.Router();
const userController=require('../Controller/userControler')



router
.route('/')
.get(userController.signup)


module.exports=router
