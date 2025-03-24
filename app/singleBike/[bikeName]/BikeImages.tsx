import { Jost } from "next/font/google";
import SingleBikeData from "../SingleBikeData";


interface bikeDataType{
   
  image:String;
    
    }
    



const BikeImages = ({image}:bikeDataType) => {


    // const bikeData=await getBikeByID()
  return (
    <div className="w-full flex flex-col space-y-10">
        <div className="w-full flex items-center justify-center   overflow-hidden ">
         <img className="w-full  max-w-[600px] scale-90 max-h-[400px]" src={`/${image}`} />
        </div>
     </div>
  )
}

export default BikeImages
