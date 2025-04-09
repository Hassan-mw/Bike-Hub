class AppError extends Error {
    constructor(message,statusCode){
        super(message)
        this.statusCode=statusCode
        this.status=`${statusCode}`.startsWith(4)? 'fail' :'error'
        this.isOperational=true;
        Error.captureStackTrace(this,this.constructor)
    }
}


module.exports=AppError;


// extend mean take properties of Error
//super(message) sending message to upper class that call it