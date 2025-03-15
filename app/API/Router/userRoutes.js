const express=require('express');
const router=express.Router();
const userController=require('../Controller/userControler')



router
.route('/')
.get(userController.signup)
.post(userController.login)


module.exports=router
