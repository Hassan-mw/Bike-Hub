import React from 'react'
import CompareBikeData from './CompareBikeData';

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

interface ParamsDataType{
  data:BikeDataType
}

const ComparedBikeRight = ({data}:ParamsDataType)=> {
  const {brand,image}=data


  return (
    <div className='w-full flex flex-col space-y-3'>
        <CompareBikeData image={image} />

    </div>
  )
}
export default ComparedBikeRight