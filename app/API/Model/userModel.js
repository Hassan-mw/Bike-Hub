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

userSchema.methods.correctPassword=async function(candidatePassword,orignalPassword){
return await dcrypt.compare(candidatePassword,orignalPassword)
}

userSchema.methods.changePasswordAfter=function(JWTTimestamp){//JWTTimestap time when token was issued
   if(this.passwordChangeAt){
   const changeTimeStamp=parseInt(this.passwordChangeAt.getTime()/1000,10)
    return   JWTTimestamp  < changeTimeStamp;    
   }
   return false//Mean user necer change password
}

userSchema.pre('save',async function(next){
   if(!this.isModified('password')) return next()
      this.password=await dcrypt.hash(this.password,12);
   this.confirmPassword=undefined;
   next();
})






const USER=mongoose.model("USER",userSchema)
module.exports=USER;