import React from 'react'
import CompareBikeData from '../compare/CompareBikeData';
// import CompareBikeData from './CompareBikeData';

interface BikeDataType {
    name: string;
    brand: string;
    category: string;
    price: number; // ✅ Fix: Change 'Number' to 'number'
    mileage: number; // ✅ Fix: Change 'Number' to 'number'
    topSpeed: number; // ✅ Fix: Change 'Number' to 'number'
    weight: number; // ✅ Fix: Change 'Number' to 'number'
    fuelType: string;
    status: string;
    image:string;
    model:string;
  }

  interface ParamsDataType{
    data:BikeDataType
  }

const ComparedBikeLeft = ({data}:ParamsDataType) => {

    const {name,brand,category,price,mileage,topSpeed,weight,image,fuelType,model}=data


  return (
    <div className='w-full flex flex-col space-y-3 col-span-3 lg:col-span-4'>
        <CompareBikeData name={name} brand={brand} category={category} price={price} mileage={mileage} topSpeed={topSpeed} weight={weight} fuelType={fuelType} model={model} image={image}   />

    </div>
  )
}

export default ComparedBikeLeft