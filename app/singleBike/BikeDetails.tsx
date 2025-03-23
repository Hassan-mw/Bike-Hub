import { Jost } from 'next/font/google';
import React from 'react'

    
const jost=Jost({
    weight:['500'],
    subsets:['latin']
  })
  

interface bikeDataType{
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



const BikeDetails = ({brand,price,category,fuelType,mileage,model,name,topSpeed,weight}:bikeDataType) => 
  
  {const bikeDataArray=[

  {property:"Company",value:brand},
  {property:"price",value:price},
  {property:"Category",value:category},
  {property:"Fueltype",value:fuelType},
  {property:"Mileage",value:mileage},
  {property:"Model",value:model},
  {property:"Topspeed",value:topSpeed},
  {property:"Weight",value:weight}
]
  return (
    <div className='w-full flex flex-col space-y-7 p-8'>
        <div className={`${jost.className} text-8xl w-full flex items-center justify-center `}>{name}</div>
        <div className='w-full flex flex-col space-y-4 rounded-lg bg-[#e2eaf7] p-5  text-2xl '>
          
          {  
          bikeDataArray.map((data,index)=>
         
            <div className={`${jost.className} flex items-center justify-between `}>
               <div className={`${jost.className} `}>{data.property}</div> 
               <div className={`${jost.className} `}>{data.value}</div> 
            </div>
              )  }
        </div>


    </div>
  )
}

export default BikeDetails