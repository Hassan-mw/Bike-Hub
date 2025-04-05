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
    <div className='w-full grid gap-6   '>
   <div className='  '> <img className=' aspect-auto object-cover' src={`/image-1.png`}/> </div>
     <div className='w-full flex flex-col  h-[450px]'>
    <div  style={{fontWeight:500}}   className={`${jost.className} border w-full flex flex-col items-start p-3 px-8 justify-start   text-2xl md:text-3xl py-2`}>{name}</div>
    <div style={{fontWeight:300}} className={`${jost.className}   text-md p-3 border w-full flex flex-col items-start  justify-start px-8 `}>{brand}</div>
    <div style={{fontWeight:300}} className={`${jost.className}  text-md p-3 border w-full flex flex-col items-start justify-start px-8 `}>{category}</div>
    <div style={{fontWeight:300}} className={`${jost.className}  text-md p-3 border w-full flex flex-col items-start  justify-start px-8 `}>${price}</div>
    <div style={{fontWeight:300}} className={`${jost.className}  text-md p-3 border w-full flex flex-col items-start   justify-start px-8 `}>{mileage}</div>
    <div style={{fontWeight:300}} className={`${jost.className}  text-md p-3 border w-full flex flex-col items-start  justify-start px-8 `}>{topSpeed} km/h</div>
    <div style={{fontWeight:300}} className={`${jost.className}  text-md p-3 border w-full flex flex-col items-start   justify-start px-8 `}>{weight} kg</div>
    <div style={{fontWeight:300}} className={`${jost.className}  text-md p-3 border w-full flex flex-col items-start  justify-start px-8 `}>{fuelType}</div>
    <div style={{fontWeight:300}} className={`${jost.className}  text-md p-3 border w-full flex flex-col items-start  justify-start px-8 `}>{fuelType}</div>

     </div>
     </div>
  )
}

export default CompareBikeData