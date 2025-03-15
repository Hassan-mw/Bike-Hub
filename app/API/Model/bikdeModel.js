const mongoose=require('mongoose')
const slugify=require('slugify')
const bikeSchema = new mongoose.Schema({
  name: {
    type:String,
    unique:true,
    required:[true,'A bike must hve name'],
  },
  brand: String,
  category: String,
  price: Number,
  mileage: Number,  // Changed to Number
  topSpeed: Number, // Changed to Number
  weight: Number,
  images: String, // Array of image URLs
  description: String,
  slug:String,
  url:String,
  fuelType: {
    type: String,
    enum: ['Hybrid', 'Electric', 'Petrol'], // Fixed spelling of "Hybrid"
  },
});

//! Pre Save Middleware
bikeSchema.pre('save',function(next){
  this.create({unique:true})
this.slug=slugify(this.name,{lower:true})
next();
})
const BIKE = mongoose.model("BIKE", bikeSchema); // Changed model name to "Bike"
module.exports = BIKE;
