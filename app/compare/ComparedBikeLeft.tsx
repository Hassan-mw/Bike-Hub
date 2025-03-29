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

  interface ParamsDatType{
    data:BikeDataType
  }

const ComparedBikeLeft = ({data}:ParamsDatType) => {
    console.log(data)
    const {brand,image}=data
console.log(brand,image,'🐆🐆🐆🐆🐆🐆🐆🐆🐆🐆🐆🐆🐆🐆🐆🐆🐆🐆')

  return (
    <div className='w-full flex flex-col space-y-3'>
        <CompareBikeData/>
        <img src={`/${image}`}/>

    </div>
  )
}

export default ComparedBikeLeft