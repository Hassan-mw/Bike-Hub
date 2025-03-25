import React from 'react'
import BikeImages from './BikeImages'
import { Search } from 'lucide-react'
import { getBikeById } from '@/app/DataFetching/api'
import BikeDetails from '../BikeDetails'

interface bikeDataType{

brand:string;
category:string;
fuelType:string;
image:string;
mileage:number;
model:number;
name:string;
price:number
topSpeed:number;
weight:number;


}
      


const page = async({params}:{params:{bikeName:any}}) => {

  const bikeNames=await params.bikeName
  const {bike}=await getBikeById({bikeNames})
  const {name,brand,image,fuelType,model,mileage,price,weight,topSpeed,category}:bikeDataType=bike

 
console.log(bike)
  return (
    <div className='w-full   flex items-center justify-center'>
      <div className='w-full flex flex-col items-center justify-center max-w-screen-xl'>
     <BikeImages  image={image}/> 
      <BikeDetails brand={brand} category={category} fuelType={fuelType} mileage={mileage} model={model}  name={name} price={price}   topSpeed={topSpeed} weight={weight} />


      <div className="flex w-52 flex-col gap-4">
  <div className="skelti h-32 w-full">f</div>
  <div className="skeleton h-4 w-28"></div>
  <div className="skeleton h-4 w-full"></div>
  <div className="skeleton h-4 w-full"></div>
</div>
   

      </div>

      </div>
  )
}

export default page