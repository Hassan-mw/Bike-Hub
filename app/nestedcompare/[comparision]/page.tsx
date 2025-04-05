

// import ComparedBikeLeft from './ComparedBikeLeft'
// import ComparedBikeRight from './ComparedBikeRight'

import { MdCompareArrows } from "react-icons/md";
import { Jost } from 'next/font/google';
import { getBikeById } from "@/app/DataFetching/api";
import ComparedBikeLeft from "../ComparedBikeLeft";
import ComparedBikeRight from "../ComparedBikeRight";
// import ComparedBikeLeft from "@/app/compare/ComparedBikeLeft";
// import ComparedBikeRight from "@/app/compare/ComparedBikeRight";



const jost=Jost({
  weight:['500'],
  subsets:['latin']
})



const page = async({params}:{params:{comparision:string}}) => {
const x=await params.comparision
const splitingValue=x.toString()
const [bike1,bike2]=splitingValue.split('-vs-')
console.log(bike1,bike2)
const firstBikeData=await getBikeById({bikeNames:bike1}) || []
const secondBikeData=await getBikeById({bikeNames:bike2}) || []
console.log(firstBikeData,secondBikeData)
  return (
    <div className='w-full flex flex-col items-center justify-center space-y-6 py-20 px-5'>
    {/* <div className='w-full max-w-screen-xl bg-[#f0f5f7] p-2 rounded-md  flex items-center justify-between'>
    <div onClick={handleGoBack}>Go Back</div> 
     <div  className={`${jost.className} bg-blue-500 rounded-md px-2 hover:cursor-pointer text-white hover:bg-blue-600`}>Save it</div>
     </div>  */}
    <div className='w-full max-w-screen-xl flex items-center justify-between  '>
        <ComparedBikeLeft data={firstBikeData.bike} />
        <ComparedBikeRight data={secondBikeData.bike}/>
    </div>
 
   </div>)
  
}

export default page