
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

const {name: name1, brand: brand1, category: category1, price: price1, mileage: mileage1, topSpeed: topSpeed1, weight: weight1, image: image1, fuelType: fuelType1, model: model1} = firstBikeData.bike;

const {name: name2, brand: brand2, category: category2, price: price2, mileage: mileage2, topSpeed: topSpeed2, weight: weight2, image: image2, fuelType: fuelType2, model: model2} = secondBikeData.bike;

  return (
    <div className='w-full flex flex-col items-center justify-center space-y-6 py-20 px-5 bg-[#f4f7fc]' >
{!firstBikeData || !secondBikeData
?
<div className="w-full min-h-[70vh] flex flex-col space-y-8 items-center justify-center ">
  <div className={`${jost.className} text-xl max-w-lg`}>No bikes found matching your comparison criteria. Please try adjusting your filters or check back later :)</div>
  <Link href="/compare" className={`${jost.className} flex items-center justify-center text-md gap-x-8 text-blue-500 hover:text-blue-600 hover:cursor-pointer `}> Main Page <FaArrowRightLong /></Link>

</div>


:


    <div className='w-full max-w-screen-xl grid grid-cols-10  bg-white shadow-2xl rounded-lg'>
        <ComparedBikeLeft data={firstBikeData.bike} />

    {/* <div className='w-full flex flex-col items-center justify-between col-span-3 lg:col-span-1 '>
     */}
      <div className='w-full flex flex-col items-center justify-between gap-6 col-span-2   '>
   <div className='  '>
     {/* <div>Check bike In Detail</div> */}
     <img className=' aspect-auto object-cover opacity-0' src={`/image-1.png`}/> 
     </div>
     <div className='w-full flex flex-col  min-h-[450px]  '>
    <div  style={{fontWeight:500}}   className={`${jost.className} border w-full  flex flex-col items-center p-3 px-2 justify-center   text-xs md:text-3xl py-2`}>Name</div>
    <div style={{fontWeight:300}} className={`${jost.className}   text-md p-3 border w-full flex flex-col items-center  justify-center  px-8 `}>Company</div>
    <div style={{fontWeight:300}} className={`${jost.className}  text-md p-3 border w-full flex flex-col items-center justify-center  px-8 `}>Category</div>
    <div style={{fontWeight:300}} className={`${jost.className}  text-md p-3 border w-full flex flex-col items-center  justify-center  px-8 `}>Price</div>
    <div style={{fontWeight:300}} className={`${jost.className}  text-md p-3 border w-full flex flex-col items-center   justify-center  px-8 `}>Mileage</div>
    <div style={{fontWeight:300}} className={`${jost.className}  text-md p-3 border w-full flex flex-col items-center  justify-center  px-8 `}>Top Speed</div>
    <div style={{fontWeight:300}} className={`${jost.className}  text-md p-3 border w-full flex flex-col items-center   justify-center  px-8 `}>Weight</div>
    <div style={{fontWeight:300}} className={`${jost.className}  text-md p-3 border w-full flex flex-col items-center  justify-center  px-8 `}>Fuel Type</div>
    <div style={{fontWeight:300}} className={`${jost.className}  text-md p-3 border w-full flex flex-col items-center  justify-center  px-8 `}>Fuel Type</div>
    {/* <div style={{fontWeight:200}} className={`${jost.className}  text-md p-3 border w-full flex flex-col items-start  justify-start  px-2 `}>{fuelType}</div> */}

     </div>
     </div>
        <ComparedBikeRight data={secondBikeData.bike}/>
    </div>
 }
   </div>)
  
}

export default page