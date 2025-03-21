const express=require('express')
const app=express()
const mongose=require("mongoose");
const bikeRouter=require('./Router/bikeRouter');
const userRoutes=require('./Router/userRoutes');
const AppError = require('./Errorhandler/errorHandler');
const globalErrorhandler = require('./Errorhandler/globalErrorhandler');
const cors=require('cors')


app.use(express.json())
app.use(cors())
app.use(express.urlencoded({ extended: true }));
app.use('/api/bike',bikeRouter)
app.use('/api/user',userRoutes)




mongose.connect("mongodb+srv://ahsanmushtaq7894:j8cz7WgYUnJayW8w@cluster0.6otap.mongodb.net/",{
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log("Database connected successfully!");
})
.catch((err) => {
  console.error("Database connection error:", err);
});

//! GLobal Error Middleware
app.all('*',(req,res,next)=>{
  next(new AppError(`Can't fins ${req.originalUrl} on this`,404))
  })

//! GLobal Error Middleware
app.use(globalErrorhandler)

const port = 5000;

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});