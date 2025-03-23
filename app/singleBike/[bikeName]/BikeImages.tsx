import SingleBikeData from "../singleBikeData"

interface bikeDataType{
   
    brand:string;
    category:string;
    fuelType:string;
    image:string;
    mileage:number;
    model:number;
    name:string;
    price:number
    slug:string;
    topSpeed:number;
    url:string;
    weight:number;
    
    
    }
    
    


const BikeImages = ({image}:bikeDataType) => {


    // const bikeData=await getBikeByID()
  return (
    <div className="w-full flex flex-col space-y-2">
    <SingleBikeData  image={image} />
 
     </div>
  )
}

export default BikeImages
