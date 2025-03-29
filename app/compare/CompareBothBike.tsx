import React from 'react'
import ComparedBikeLeft from './ComparedBikeLeft'
import ComparedBikeRight from './ComparedBikeRight'

interface BikeDataType {
  _id:number;
  name: string;
  brand: string;
  category: string;
  price: number; // ✅ Fix: Change 'Number' to 'number'
  mileage: number; // ✅ Fix: Change 'Number' to 'number'
  topSpeed: number; // ✅ Fix: Change 'Number' to 'number'
  weight: number; // ✅ Fix: Change 'Number' to 'number'
  url: string;
  fuelType: string;
  slug: string;
  status: string;
  image:string;
}

interface parametersTyes{
  left:string;
  right:string;
  leftBike:BikeDataType;
  rightBike:BikeDataType;
}

const CompareBothBike = ({leftBike,rightBike}:parametersTyes) => {
  return (
    <div className='w-full flex flex-col items-center justify-center space-y-4 py-20 px-5'>
    <div className='w-full max-w-screen-xl flex items-center justify-between   '>
        <ComparedBikeLeft data={leftBike} />
        <ComparedBikeRight/>
    </div>
 
   </div>)
  
}

export default CompareBothBike