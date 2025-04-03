const AppError = require("./errorHandler");

const handleDublicateFieldError=(error)=>{
console.log(error)
return  new AppError(`Deblicate fields are not allow`,404)

}

const handleInvalidId=(error)=>{
  return new AppError('Invalid Id',400)
}
const handleValidatorError=(error)=>{
  return new AppError('Invalid data entered',400)
}
const handleExpiredToken=(error)=>{
  return new AppError('Your token hasbeen expired',400)
}


module.exports=(err,req,res,next)=>{
 
    err.statusCode=err.statusCode || 500;
    err.status=err.status || 'err';
  let error={...err};
 
    if(err.code===11000) error=handleDublicateFieldError(error)
    if(err.path==='_id' && err.kind==='ObjectId') error=handleInvalidId(error)  
      if(err.name==='ValidationError')  error=handleValidatorError(error)
      if(err.name==='TokenExpiredError')  error=handleExpiredToken(error)
     
      res.status(err.statusCode).json({
        status:err.status,
        message:err.message
    })
}