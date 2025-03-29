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
    <div className='w-full flex flex-col space-y-3'>
    <img className='relative' src={`/${image}`}/>
    <div className='border w-full flex flex-col space-y-3'>
      <div className={`${jost.className}`}></div>

    </div>

    </div>
  )
}

export default CompareBikeData