require('dotenv').config();
const express=require('express')
const app=express()
const mongose=require("mongoose");
const bikeRouter=require('./Router/bikeRouter');
const userRoutes=require('./Router/userRoutes');
const itemsRoutes=require('./Router/itemsRouter');
const AppError = require('./Errorhandler/errorHandler');
const globalErrorhandler = require('./Errorhandler/globalErrorhandler');
const cors=require('cors')
const path = require("path");

app.use(express.json())
app.use(cors())
app.use(express.urlencoded({ extended: true }));
app.use("/public", express.static(path.join(__dirname, "public")));


app.use('/api/bike',bikeRouter)
app.use('/api/user',userRoutes)
app.use('/api/items',itemsRoutes)


mongose.connect(process.env.DATABASE_URL,{
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

const port = 5500;

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});