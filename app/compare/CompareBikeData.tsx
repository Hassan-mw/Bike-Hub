import { Jost } from 'next/font/google'
import React from 'react'
interface dataType{
  name: string;
  brand: string;
  category: string;
  price: number; // ✅ Fix: Change 'Number' to 'number'
  mileage: number; // ✅ Fix: Change 'Number' to 'number'
  topSpeed: number; // ✅ Fix: Change 'Number' to 'number'
  weight: number; // ✅ Fix: Change 'Number' to 'number'
  fuelType: string;
  image:string;
  model:string;
}

const jost=Jost({
  weight:['400'],
  subsets:['latin']
})


const CompareBikeData = ({name,brand,category,price,mileage,topSpeed,weight,image,fuelType,model}:dataType) => {
  return (
    <div className='w-full flex flex-col border'>
    <div  style={{fontWeight:500}}   className={`${jost.className}  w-full flex flex-col items-center p-3 px-2 justify-center   text-2xl py-2`}>{name}</div>
   <div className='object-cover overflow-hidden  mb-10 h- lg:h-[500px]'>
     <img className='' src={`/${image}`}/>
     </div>
    <div  style={{fontWeight:500}}   className={`${jost.className} border w-full flex flex-col items-start p-3 px-2 justify-start   text-2xl md:text-3xl py-2`}>{name}</div>
    <div style={{fontWeight:200}} className={`${jost.className}   text-md p-3 border w-full flex flex-col items-start  justify-start  px-2 `}>{brand}</div>
    <div style={{fontWeight:200}} className={`${jost.className}  text-md p-3 border w-full flex flex-col items-start justify-start  px-2 `}>{category}</div>
    <div style={{fontWeight:200}} className={`${jost.className}  text-md p-3 border w-full flex flex-col items-start  justify-start  px-2 `}>${price}</div>
    <div style={{fontWeight:200}} className={`${jost.className}  text-md p-3 border w-full flex flex-col items-start   justify-start  px-2 `}>{mileage}</div>
    <div style={{fontWeight:200}} className={`${jost.className}  text-md p-3 border w-full flex flex-col items-start  justify-start  px-2 `}>{topSpeed} km/h</div>
    <div style={{fontWeight:200}} className={`${jost.className}  text-md p-3 border w-full flex flex-col items-start   justify-start  px-2 `}>{weight} kg</div>
    <div style={{fontWeight:200}} className={`${jost.className}  text-md p-3 border w-full flex flex-col items-start  justify-start  px-2 `}>{fuelType}</div>

    </div>
  )
}

export default CompareBikeData