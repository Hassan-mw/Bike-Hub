import React from 'react'

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
    data:BikeDataType[]
  }

const ComparedBikeLeft = ({data}:ParamsDatType) => {
  return (
    <div className='w-full flex flex-col space-y-3'>

    </div>
  )
}

export default ComparedBikeLeft