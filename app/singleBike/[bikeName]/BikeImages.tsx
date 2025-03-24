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
         <img className="w-full  max-w-[800px] scale-90 max-h-[600px]" src={`/${image}`} />
         {/* <div className="absolute top-0  hidden lg:block bg-green-500 rounded-full px-8 py-5"> v</div> */}
        </div>
     </div>
  )
}

export default BikeImages
