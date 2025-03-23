import React from 'react'
import BikeImages from './BikeImages'
import { Search } from 'lucide-react'
import { getBikeById } from '@/app/DataFetching/api'

interface bikeDataType{
bike:{
brand:string;
category:string;
fuelType:string;
image:string;
mileage:number;
model:number;
name:string;
price:number
slug:string;
topSpeed:number;
url:string;
weight:number;
}

}


const page = async({params}:{params:{bikeName:any}}) => {

  const bikeNames=await params.bikeName
  const {bike}=await getBikeById({bikeNames})
  const {name,brand,image,fuelType,model,mileage,price,weight,topSpeed,category}=bike

 

  return (
    <div className='w-full flex items-center justify-center'>
      <div className='w-full flex flex-col items-center justify-center max-w-screen-xl'>
      <div ><BikeImages/> </div>
     
      </div>
      </div>
  )
}

export default page