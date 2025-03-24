import { Jost } from 'next/font/google';
import React from 'react'
import { BsFuelPumpFill } from 'react-icons/bs';
    
const jost=Jost({
    weight:['500'],
    subsets:['latin-ext']
  })

import { GrPerformance } from "react-icons/gr";

interface bikeDataType{
  brand:string;
  category:string;
  fuelType:string;
  mileage:number;
  model:number;
  name:string;
  price:number
  topSpeed:number;
  weight:number;
}

import { PiEngineBold } from "react-icons/pi";
import { SiTransmission } from 'react-icons/si';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitch } from 'react-icons/fa'
import LeftBikeDetails from './LeftBikeDetails';


const BikeDetails = ({brand,price,category,fuelType,mileage,model,name,topSpeed,weight}:bikeDataType) => 
  
  {const bikeDataArray=[

  {property:"Company",value:brand},
  {property:"price",value:price ,postfix:'$'},
  {property:"Category",value:category},
  {property:"Fueltype",value:fuelType},
  {property:"Mileage",value:mileage,postfix:"km/l"},
  {property:"Model",value:model},
  {property:"Topspeed",value:topSpeed ,postfix:'km/h'},
  {property:"Weight",value:weight,postfix:"kg"}
]
  return (
    <div className='w-full flex flex-col space-y-16 pb-24 p-8'>
        <div className={`${jost.className} text-6xl w-full flex items-center justify-center  `}>
          {name}
          </div>
          {/* //!  Below Image detaisl */}

        <div className='w-full grid grid-cols-2 md:grid-cols-3 place-content-center gap-7'>
          {/* 1 */}
         <div className='border-2 rounded-md w-full h-full flex flex-col space-y-5 items-center justify-between py-12 px-5'>
          <div style={{fontWeight:500}} className='flex items-center justify-between w-full text-md  '>
          <div  className={`${jost.className}  text-2xl`}>Enginer </div>
        <div className='text-[#80898f]'><PiEngineBold size={25}/></div>
          </div>
          <div className='flex items-center justify-between w-full'>
          <div  style={{fontWeight:500}} className={`${jost.className} text-sm`}>RPM</div>
          <div  style={{fontWeight:500}} className={`${jost.className} text-[#80898f] text-sm `}>5,500 </div>
          </div>
          <div className='flex items-center justify-between w-full'>
          <div style={{fontWeight:500}} className={`${jost.className} text-sm`}>HP </div>
          <div style={{fontWeight:500}} className={`${jost.className} text-[#80898f] text-sm`}>125 </div>
          </div>
        </div>
          {/* 2 */}
         <div className='border-2 rounded-md w-full h-full flex flex-col space-y-5 items-center justify-between py-12 px-5'>
          <div className='flex items-center justify-between w-full text-xl md:text-2xl'>
          <div className={`${jost.className} `}>Performance  </div>
        <div  className='text-[#80898f]'><GrPerformance size={25}/></div>
          </div>
          <div className='flex items-center justify-between w-full'>
          <div style={{fontWeight:500}} className={`${jost.className} text-sm`}> Torque</div>
          <div style={{fontWeight:500}}  className={`${jost.className} text-[#80898f] text-sm`}>170 Nm </div>
          </div>
          <div className='flex items-center justify-between w-full'>
          <div style={{fontWeight:500}} className={`${jost.className} text-sm `}>Top Speed </div>
          <div style={{fontWeight:500}} className={`${jost.className} text-[#80898f] text-sm`}>180 km/h</div>
          </div>
        </div>
          {/* 3 */}
         <div className='border-2 rounded-md w-full h-full flex flex-col space-y-5 items-center justify-between py-12 px-5'>
          <div className='flex items-center justify-between w-full text-xl md:text-2xl'>
          <div className={`${jost.className} `}> Fuel   </div>
        <div  className='text-[#80898f]'><BsFuelPumpFill size={25}/></div>
          </div>
          <div className='flex items-center justify-between w-full'>
          <div style={{fontWeight:500}} className={`${jost.className} text-sm`}> Fuel Type </div>
          <div style={{fontWeight:500}} className={`${jost.className} text-[#80898f] text-sm `}>Petrol</div>
          </div>
          <div className='flex items-center justify-between w-full'>
          <div style={{fontWeight:500}} className={`${jost.className} text-sm `}> Mileage</div>
          <div style={{fontWeight:500}} className={`${jost.className} text-[#80898f] text-sm`}>15-20 km/l</div>
          </div >
        </div>
        </div>


        <div className='grid grid-cols-1 lg:grid-cols-[70%_30%] gap-y-20 lg:gap-x-10'>
          {/* //! Left */}
       <LeftBikeDetails/>
       
        {/* //!  Right */}
        <div className='flex flex-col items-center justify-center space-y-10'>
          {/* Top */}
        <div className='w-full  flex flex-col space-y-4 md:space-y-8 rounded-lg bg-[#f1f4fb] p-5  text-xl '>
          <div style={{fontWeight:500}} className={`${jost.className} w-full flex items-center justify-center text-3xl border-b-4 pb-3`}>Bike Overview</div>
          {  
          bikeDataArray.map((data,index)=>
         
            <div key={index} className={`${jost.className} flex items-center justify-between `}>
               <div style={{fontWeight:500}} className={`${jost.className} text-sm `}>{data.property}</div> 
               <div style={{fontWeight:500}} className={`${jost.className} text-sm text-[#80898f] `}>{data.value} {data?.postfix}</div> 
            </div>
              )  }
        </div>
          {/* Bottom */}

        <div className='w-full  flex flex-col space-y-4 md:space-y-8 rounded-lg bg-[#f1f4fb] p-5  text-xl '>
          <div style={{fontWeight:500}} className={`${jost.className} w-full flex items-start justify-start space-x-3 `}>
            <div><img className='h-14 rounded-md' src="/honda-company-logo.jpeg"/></div>
            <div className={`${jost.className}`}>Honda</div>
          </div>
          <div className='flex flex-col space-y-3'>
          <div className='flex items-center justify-between '><div style={{fontWeight:500}} className='text-[#202124] text-sm'>Founded Date:</div><div  style={{fontWeight:500}}  className='text-[#77838f] text-sm'>1994</div></div>
          <div className='flex items-center justify-between '><div  style={{fontWeight:500}}   className='text-[#202124] text-sm'>Email:</div><div  style={{fontWeight:500}}  className='text-[#77838f] text-sm'>honda@apus.com</div></div>
          <div className='flex items-center justify-between '><div  style={{fontWeight:500}}  className='text-[#202124] text-sm'>Location:</div><div  style={{fontWeight:500}}   className='text-[#77838f] text-sm'>New York</div></div>
          <div className='flex items-center justify-between '><div  style={{fontWeight:500}}  className='text-[#202124] text-sm'>Socail:</div> <div className="flex items-start  space-x-6">
             <div className=" text-[#929292]  hover:cursor-pointer text-sm hover:scale-125 duration-300 "><FaFacebookF /></div>
               <div className=" text-[#929292]  hover:cursor-pointer text-sm  hover:scale-125 duration-300 "><FaTwitch /></div>
               <div className="  text-[#929292]  hover:cursor-pointer text-sm hover:scale-125 duration-300 "><FaLinkedinIn /></div>
               <div className="  text-[#929292]  hover:cursor-pointer text-sm hover:scale-125 duration-300 "><FaInstagram /></div>
              </div> </div>
          </div>
        </div>
        
        
        </div>   
 </div>

    </div>
  )
}

export default BikeDetails