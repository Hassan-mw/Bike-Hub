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
  weight:['500'],
  subsets:['latin']
})


const CompareBikeData = ({name,brand,category,price,mileage,topSpeed,weight,image,fuelType,model}:dataType) => {
  return (
    <div className='w-full flex flex-col '>
   <div className='h-[150px] sm:h-[200px] md:h-[270px] lg:h-[350px] overflow-hidden  mb-10'>
     <img className='' src={`/${image}`}/>
     </div>
    <div className='border-2 border-blue-400 w-full flex flex-col items-center justify-center '><div className={`${jost.className} text-2xl py-2`}>{name}</div></div>
    <div className='border-2 w-full flex flex-col items-center justify-center '><div className={`${jost.className} text-2xl py-2`}>{brand}</div></div>
    <div className='border-2 w-full flex flex-col items-center justify-center '><div className={`${jost.className} text-2xl py-2`}>{category}</div></div>
    <div className='border-2 w-full flex flex-col items-center justify-center '><div className={`${jost.className} text-2xl py-2`}>${price}</div></div>
    <div className='border-2 w-full flex flex-col items-center justify-center '><div className={`${jost.className} text-2xl py-2`}>{mileage}</div></div>
    <div className='border-2 w-full flex flex-col items-center justify-center '><div className={`${jost.className} text-2xl py-2`}>{topSpeed} km/h</div></div>
    <div className='border-2 w-full flex flex-col items-center justify-center '><div className={`${jost.className} text-2xl py-2`}>{weight} kg</div></div>
    <div className='border-2 w-full flex flex-col items-center justify-center '><div className={`${jost.className} text-2xl py-2`}>{fuelType}</div></div>

    </div>
  )
}

export default CompareBikeData