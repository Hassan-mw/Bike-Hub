import { Jost } from "next/font/google";
import SingleBikeData from "../SingleBikeData";
import { FaCircle } from "react-icons/fa";

interface bikeDataType{
   
  image:String;
    
    }
    



const BikeImages = ({image}:bikeDataType) => {


    // const bikeData=await getBikeByID()
  return (
    <div className="w-full flex flex-col space-y-10">
        <div className="w-full flex flex-col md:flex-row items-center justify-center px-8   overflow-hidden ">
         <img className="w-full  max-w-[800px] scale-90 max-h-[600px]" src={`/${image}`} />
         <div className=" text-green-600 hover:cursor-pointer"><FaCircle size={30} /></div>
         {/* <div className="absolute top-0  hidden lg:block bg-green-500 rounded-full px-8 py-5"> v</div> */}
        </div>
     </div>
  )
}

export default BikeImages
