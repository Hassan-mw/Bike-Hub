import { Jost } from 'next/font/google';
import React from 'react'
import { GoDotFill } from "react-icons/go";
    
const jost=Jost({
    weight:['500'],
    subsets:['latin-ext']
  })
  

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
        <div className={`${jost.className} text-8xl w-full flex items-center justify-center  `}>
          {name}
          </div>
        <div className='grid grid-cols-1 lg:grid-cols-[70%_30%] gap-y-20 lg:gap-x-10'>
         <div className='lg:w-full   flex flex-col space-y-16 items-start justify-start text-xl'>
          <div className={` flex flex-col items-start justify-start space-y-8`}>
           <div  className={`${jost.className} text-3xl`}>Bike Description</div>
           <div  className={`${jost.className}  text-[#80898f] leading-8 text-[18px] lg:text-md`}>The Aprilia RSV4 is a high-performance superbike known for its advanced technology, aggressive styling, and race-inspired engineering. It features a powerful 1,099cc V4 engine, delivering exhilarating speed and precise handling. Designed for both track and street use, the RSV4 offers cutting-edge aerodynamics, a lightweight chassis, and state-of-the-art electronics. With its MotoGP-derived technology, it provides an unmatched riding experience for enthusiasts. Aprilia continuously refines the RSV4 to stay ahead in the superbike segment, making it a favorite among sportbike lovers.</div>
          </div>
          <div className={`${jost.className} flex flex-col space-y-8 items-start justify-start`}>
           <div className={`${jost.className} text-3xl md:text-4xl`}>Key Features:</div>
          <div className=' flex flex-col space-y-6 md:space-y-14 items-start justify-start text-md'>
          <div style={{fontWeight:400}}   className={`${jost.className} text-[#80898f] flex items-start md:items-center justify-center space-x-2 text-[18px] md:text-xl `} ><span > <GoDotFill size={20} /> </span><span >1,099cc V4 Engine – Produces over 200 HP for thrilling performance.</span></div>  
          <div style={{fontWeight:400}}   className={`${jost.className} text-[#80898f] flex items-start md:items-center justify-center space-x-2 text-[18px]  md:text-xl`}><GoDotFill  size={20} />  <span>Advanced Electronics – Includes traction control, wheelie control.</span></div>  
          <div   style={{fontWeight:400}}  className={`${jost.className} text-[#80898f] flex items-start md:items-center justify-center space-x-2 text-[18px]  md:text-xl`}><GoDotFill size={20} />  <span>Aero Winglets – Improves stability at high speeds.</span></div>  
          <div  style={{fontWeight:400}}  className={`${jost.className} text-[#80898f] flex items-start  md:items-center justify-center space-x-2 text-[18px]  md:text-xl`}><GoDotFill size={20} />  <span>Lightweight Aluminum Frame – Ensures agile handling and cornering precision.</span></div>  
          <div  style={{fontWeight:400}}  className={`${jost.className} text-[#80898f] flex items-start  md:items-center justify-center space-x-2 text-[18px]  md:text-xl`}><GoDotFill size={20} />  <span>Full TFT Display – Offers intuitive controls and smartphone connectivity.</span></div>  
          <div  style={{fontWeight:400}}  className={`${jost.className} text-[#80898f] flex items-start  md:items-center justify-center space-x-2 text-[18px]  md:text-xl`}><GoDotFill size={20} />  <span>Advanced TFT Dash – Full-color display with smartphone connectivity.</span></div>  
          <div  style={{fontWeight:400}}  className={`${jost.className} text-[#80898f] flex items-start  md:items-center justify-center space-x-2 text-[18px]  md:text-xl`}><GoDotFill size={20} />  <span>Multiple Riding Modes – Adapt to street, sport, and race conditions.</span></div>  
          <div  style={{fontWeight:400}}  className={`${jost.className} text-[#80898f] flex items-start md:items-center justify-center space-x-2 text-[18px]  md:text-xl`}><GoDotFill size={20} />  <span>Up & Down Quickshifter – Enables seamless clutchless gear shifts.</span></div>  
            
          </div> 

         </div>
         </div>
       
        <div className='w-full  flex flex-col space-y-4 md:space-y-8 rounded-lg bg-[#f1f4fb] p-5  text-xl '>
          <div style={{fontWeight:500}} className={`${jost.className} text-3xl`}>Bike Overview</div>
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
  )
}

export default BikeDetails