
import { FaArrowRightLong } from "react-icons/fa6";
import { MdCompareArrows } from "react-icons/md";
import { Jost } from 'next/font/google';
import { getBikeById } from "@/app/DataFetching/api";
import ComparedBikeLeft from "../ComparedBikeLeft";
import ComparedBikeRight from "../ComparedBikeRight";
import Link from "next/link";


const jost=Jost({
  weight:['500'],
  subsets:['latin']
})



const page = async({params}:{params:{comparision:string}}) => {
const x=await params.comparision
const splitingValue=x.toString()
const [bike1,bike2]=splitingValue.split('-vs-')
console.log(bike1,bike2)
const firstBikeData=await getBikeById({bikeNames:bike1}) 
const secondBikeData=await getBikeById({bikeNames:bike2}) 

const {name,brand,category,price,mileage,topSpeed,weight,image,fuelType,model}=firstBikeData.bike
  return (
    <div className='w-full flex flex-col items-center justify-center space-y-6 py-20 px-5'>
{!firstBikeData || !secondBikeData
?
<div className="w-full min-h-[70vh] flex flex-col space-y-8 items-center justify-center ">
  <div className={`${jost.className} text-xl max-w-lg`}>No bikes found matching your comparison criteria. Please try adjusting your filters or check back later :)</div>
  <Link href="/compare" className={`${jost.className} flex items-center justify-center text-md gap-x-8 text-blue-500 hover:text-blue-600 hover:cursor-pointer `}> Main Page <FaArrowRightLong /></Link>

</div>


:


    <div className='w-full max-w-screen-xl flex items-center justify-between  '>
      
        <ComparedBikeLeft data={firstBikeData.bike} />
        <ComparedBikeRight data={secondBikeData.bike}/>
    </div>
 }
   </div>)
  
}

export default page