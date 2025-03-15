const mongoose=require('mongoose');
const dcrypt=require('bcrypt')
const userSchema=new mongoose.Schema({
 
 name:String,
 
 email:{
   type:String,
   required:[true,'A user must have email'],
   unique:true 
   },

 password:{
    type:String,
    required:[true,'A user must have password']
  },

 confirmPassword:{
    type:String,
    required:[true,'A user must have confirmPassword']
  }

})


userSchema.pre('save',async function(next){
   if(!this.isModified('password')) return next()
      this.password=await dcrypt.hash(this.password,12);
   this.confirmPassword=undefined;
   next();
})


const USER=mongoose.model("USER",userSchema)
module.exports=USER;