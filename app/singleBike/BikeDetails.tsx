import { Jost } from 'next/font/google';
import React from 'react'
import { BsFuelPumpFill } from 'react-icons/bs';
import { GoDotFill } from "react-icons/go";
    
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
          <div className='flex items-center justify-between w-full text-xl md:text-2xl'>
          <div className={`${jost.className} `}>Enginer </div>
        <div><PiEngineBold size={25}/></div>
          </div>
          <div className='flex items-center justify-between w-full'>
          <div className={`${jost.className} `}>RPM</div>
          <div className={`${jost.className} `}>5,500 </div>
          </div>
          <div className='flex items-center justify-between w-full'>
          <div className={`${jost.className} `}>HP </div>
          <div className={`${jost.className} `}>125 </div>
          </div>
        </div>
          {/* 2 */}
         <div className='border-2 rounded-md w-full h-full flex flex-col space-y-5 items-center justify-between py-12 px-5'>
          <div className='flex items-center justify-between w-full text-xl md:text-2xl'>
          <div className={`${jost.className} `}>Performance  </div>
        <div><GrPerformance size={25}/></div>
          </div>
          <div className='flex items-center justify-between w-full'>
          <div className={`${jost.className} `}> Torque</div>
          <div className={`${jost.className} `}>170 Nm </div>
          </div>
          <div className='flex items-center justify-between w-full'>
          <div className={`${jost.className} `}>Top Speed </div>
          <div className={`${jost.className} `}>180 km/h</div>
          </div>
        </div>
          {/* 3 */}
         <div className='border-2 rounded-md w-full h-full flex flex-col space-y-5 items-center justify-between py-12 px-5'>
          <div className='flex items-center justify-between w-full text-xl md:text-2xl'>
          <div className={`${jost.className} `}> Fuel   </div>
        <div><BsFuelPumpFill size={25}/></div>
          </div>
          <div className='flex items-center justify-between w-full'>
          <div className={`${jost.className} `}> Fuel Type </div>
          <div className={`${jost.className} `}>Petrol</div>
          </div>
          <div className='flex items-center justify-between w-full'>
          <div className={`${jost.className} `}> Mileage</div>
          <div className={`${jost.className} `}>15-20 km/l</div>
          </div>
        </div>
        </div>


        <div className='grid grid-cols-1 lg:grid-cols-[70%_30%] gap-y-20 lg:gap-x-10'>
         <div className='lg:w-full   flex flex-col space-y-16 items-start justify-start text-xl'>
          <div className={` flex flex-col items-start justify-start space-y-8`}>
           <div  className={`${jost.className} text-3xl`}>Bike Description</div>
           <div  className={`${jost.className}  text-[#80898f] leading-8 text-[18px] lg:text-md`}>The Aprilia RSV4 is a high-performance superbike known for its advanced technology, aggressive styling, and race-inspired engineering. It features a powerful 1,099cc V4 engine, delivering exhilarating speed and precise handling. Designed for both track and street use, the RSV4 offers cutting-edge aerodynamics, a lightweight chassis, and state-of-the-art electronics. With its MotoGP-derived technology, it provides an unmatched riding experience for enthusiasts. Aprilia continuously refines the RSV4 to stay ahead in the superbike segment, making it a favorite among sportbike lovers.</div>
          </div>
          <div className={`${jost.className} flex flex-col space-y-8 items-start justify-start`}>
           <div className={`${jost.className} text-3xl md:text-4xl`}>Key Features:</div>
          <div className=' flex flex-col space-y-6 md:space-y-8 items-start justify-start text-md'>
          <div style={{fontWeight:400}}   className={`${jost.className} text-[#80898f] flex items-start md:items-center justify-center space-x-2 md:space-x-5 text-[18px] md:text-md `} ><span > <GoDotFill size={16} /> </span><span >1,099cc V4 Engine – Produces over 200 HP for thrilling performance.</span></div>  
          <div style={{fontWeight:400}}   className={`${jost.className} text-[#80898f] flex items-start md:items-center justify-center space-x-2 md:space-x-5 text-[18px]  md:text-md`}><GoDotFill  size={16} />  <span>Advanced Electronics – Includes traction control, wheelie control.</span></div>  
          <div   style={{fontWeight:400}}  className={`${jost.className} text-[#80898f] flex items-start md:items-center justify-center space-x-2 md:space-x-5 text-[18px]  md:text-md`}><GoDotFill size={16} />  <span>Aero Winglets – Improves stability at high speeds.</span></div>  
          <div  style={{fontWeight:400}}  className={`${jost.className} text-[#80898f] flex items-start  md:items-center justify-center space-x-2 md:space-x-5 text-[18px]  md:text-md`}><GoDotFill size={16} />  <span>Lightweight Aluminum Frame – Ensures agile handling and cornering precision.</span></div>  
          <div  style={{fontWeight:400}}  className={`${jost.className} text-[#80898f] flex items-start  md:items-center justify-center space-x-2  md:space-x-5 text-[18px]  md:text-md`}><GoDotFill size={16} />  <span>Full TFT Display – Offers intuitive controls and smartphone connectivity.</span></div>  
          <div  style={{fontWeight:400}}  className={`${jost.className} text-[#80898f] flex items-start  md:items-center justify-center space-x-2 md:space-x-5 text-[18px]  md:text-md`}><GoDotFill size={16} />  <span>Advanced TFT Dash – Full-color display with smartphone connectivity.</span></div>  
          <div  style={{fontWeight:400}}  className={`${jost.className} text-[#80898f] flex items-start  md:items-center justify-center space-x-2 md:space-x-5 text-[18px]  md:text-md`}><GoDotFill size={16} />  <span>Multiple Riding Modes – Adapt to street, sport, and race conditions.</span></div>  
          <div  style={{fontWeight:400}}  className={`${jost.className} text-[#80898f] flex items-start md:items-center justify-center space-x-2  md:space-x-5text-[18px]  md:text-md`}><GoDotFill size={16} />  <span>Up & Down Quickshifter – Enables seamless clutchless gear shifts.</span></div>  
            
          </div> 

         </div>
         </div>
       
        {/* //!  Right */}
        <div className='flex flex-col items-center justify-center space-y-10'>
          {/* Top */}
        <div className='w-full  flex flex-col space-y-4 md:space-y-8 rounded-lg bg-[#f1f4fb] p-5  text-xl '>
          <div style={{fontWeight:500}} className={`${jost.className} w-full flex items-center justify-center text-3xl border-b-4 pb-3`}>Bike Overview</div>
          {  
          bikeDataArray.map((data,index)=>
         
            <div key={index} className={`${jost.className} flex items-center justify-between `}>
               <div style={{fontWeight:400}} className={`${jost.className} `}>{data.property}</div> 
               <div style={{fontWeight:400}} className={`${jost.className} text-[#80898f] `}>{data.value} {data?.postfix}</div> 
            </div>
              )  }
        </div>
          {/* Bottom */}

        <div className='w-full  flex flex-col space-y-4 md:space-y-8 rounded-lg bg-[#f1f4fb] p-5  text-xl '>
          <div style={{fontWeight:500}} className={`${jost.className} w-full flex items-center justify-center text-3xl border-b-4 pb-3`}>Bike Overview</div>
          {  
          bikeDataArray.map((data,index)=>
         
            <div key={index} className={`${jost.className} flex items-center justify-between `}>
               <div style={{fontWeight:400}} className={`${jost.className} `}>{data.property}</div> 
               <div style={{fontWeight:400}} className={`${jost.className} text-[#80898f] `}>{data.value} {data?.postfix}</div> 
            </div>
              )  }
        </div>
        
        
        </div>   
 </div>

    </div>
  )
}

export default BikeDetails