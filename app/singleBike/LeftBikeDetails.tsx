'use client'
import { Jost } from 'next/font/google'
import { GoDotFill } from "react-icons/go";


const jost=Jost({
    weight:['500'],
    subsets:['latin-ext']
  })


import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
 


const LeftBikeDetails = () => {

    const engineData=[
        {leftValue:" Engine Type",rightValue:'	150cc liquid-cooled single cylinder'},
        {leftValue:"Bore and Stroke",rightValue:'		66.0mm x 43.8mm'},
        {leftValue:" Compression Ratio",rightValue:'		11.7:1'},
        {leftValue:"Valve Train",rightValue:'	Unicam SOHC; four valves per cylinder'},
    ]

    const deiveTrain=[
        {leftValue:" Transmission",rightValue:'		Close-ratio five-speed'},
        {leftValue:"Final Drive",rightValue:'			#420 chain; 15T/50T'},
    ]
    
    const brake=[
        {leftValue:" Front Suspension",rightValue:'37mm leading-axle inverted Showa® fork; 10.8-inch travel'},
        {leftValue:"Rear Suspension",rightValue:'Pro-Link® Showa® single shock; 10.7-inch travel'},
        {leftValue:"Front Brake",rightValue:'	Single 220mm disc'},
        {leftValue:"Rare Brake",rightValue:'	Single 190mm disc'},
        {leftValue:"Front Tire",rightValue:'Dunlop MX51;70/100-17'},
        {leftValue:"Rare Tire",rightValue:'	Dunlop MX51; 90/100-14'},
    ]
    const dimension=[
        {leftValue:"Rear ",rightValue:'P27.0°'},
        {leftValue:"Trail",rightValue:'3.1 inches'},
        {leftValue:"Wheelbase",rightValue:'49.6 inches'},
        {leftValue:"Seat Height",rightValue:'32.8 inches'},
        {leftValue:"Ground Clearance",rightValue:'11.9 inches'},
        {leftValue:"Curb Weight",rightValue:'185 pounds'},
        {leftValue:"Fuel Capacity",rightValue:'1.1 gallons'},
    ]

  return (
    <div className='lg:w-full   flex flex-col space-y-16 items-start justify-start text-xl'>
   {/* Bike Details */}
    <div className={` flex flex-col items-start justify-start space-y-8`}>
     <div  className={`${jost.className} text-3xl`}>Bike Description</div>
     <div style={{fontWeight:500}}  className={`${jost.className}  text-[#80898f] leading-8 text-sm`}>The Aprilia RSV4 is a high-performance superbike known for its advanced technology, aggressive styling, and race-inspired engineering. It features a powerful 1,099cc V4 engine, delivering exhilarating speed and precise handling. Designed for both track and street use, the RSV4 offers cutting-edge aerodynamics, a lightweight chassis, and state-of-the-art electronics. With its MotoGP-derived technology, it provides an unmatched riding experience for enthusiasts. Aprilia continuously refines the RSV4 to stay ahead in the superbike segment, making it a favorite among sportbike lovers.</div>
    </div>
    {/* Key Features */}
    <div className={`${jost.className} flex flex-col space-y-8 items-start justify-start`}>
     <div className={`${jost.className} text-3xl md:text-4xl`}>Key Features</div>
    <div className=' flex flex-col space-y-6 md:space-y-8 items-start justify-start text-md'>
    <div style={{fontWeight:500}}   className={`${jost.className} text-[#80898f] flex items-start md:items-center justify-center space-x-2 md:space-x-5 text-sm `} ><span > <GoDotFill size={16} /> </span><span >1,099cc V4 Engine – Produces over 200 HP for thrilling performance.</span></div>  
    <div style={{fontWeight:500}}   className={`${jost.className} text-[#80898f] flex items-start md:items-center justify-center space-x-2 md:space-x-5 text-sm`}><GoDotFill  size={16} />  <span>Advanced Electronics – Includes traction control, wheelie control.</span></div>  
    <div   style={{fontWeight:500}}  className={`${jost.className} text-[#80898f] flex items-start md:items-center justify-center space-x-2 md:space-x-5 text-sm`}><GoDotFill size={16} />  <span>Aero Winglets – Improves stability at high speeds.</span></div>  
    <div  style={{fontWeight:500}}  className={`${jost.className} text-[#80898f] flex items-start  md:items-center justify-center space-x-2 md:space-x-5 text-sm`}><GoDotFill size={16} />  <span>Lightweight Aluminum Frame – Ensures agile handling and cornering precision.</span></div>  
    <div  style={{fontWeight:500}}  className={`${jost.className} text-[#80898f] flex items-start  md:items-center justify-center space-x-2  md:space-x-5 text-sm`}><GoDotFill size={16} />  <span>Full TFT Display – Offers intuitive controls and smartphone connectivity.</span></div>  
    <div  style={{fontWeight:500}}  className={`${jost.className} text-[#80898f] flex items-start  md:items-center justify-center space-x-2 md:space-x-5 text-sm`}><GoDotFill size={16} />  <span>Advanced TFT Dash – Full-color display with smartphone connectivity.</span></div>  
    <div  style={{fontWeight:500}}  className={`${jost.className} text-[#80898f] flex items-start  md:items-center justify-center space-x-2 md:space-x-5 text-sm`}><GoDotFill size={16} />  <span>Multiple Riding Modes – Adapt to street, sport, and race conditions.</span></div>  
    <div  style={{fontWeight:500}}  className={`${jost.className} text-[#80898f] flex items-start md:items-center justify-center space-x-2  md:space-x-5text-sm`}><GoDotFill size={16} />  <span>Up & Down Quickshifter – Enables seamless clutchless gear shifts.</span></div>  
      
    </div> 

   </div>    
   {/* Full Bike details */}

   <div className='w-full flex flex-col space-y-9 items-start justify-start '>
   <Accordion type="single" className='w-full' collapsible>
  <AccordionItem value="item-1">
    <AccordionTrigger>  <div  className={`${jost.className} text-3xl md:text-4xl`}> Full Bike Details</div></AccordionTrigger>
    <AccordionContent  className='flex flex-col items-start justify-start space-y-10  w-full '>
 
   {/* Coloum of details */}
   {/* <div> */}
    {/* 1 */}

    {/* <div className='flex flex-col w-full space-y-4 '> */}
    {/* 1 */}
    <Accordion type="single" className='w-full' collapsible>
  <AccordionItem value="item-2">
    <AccordionTrigger> 
    <div className={`${jost.className} text-xl`}>Engine</div>

         </AccordionTrigger>
    <AccordionContent  className='flex flex-col items-start justify-start space-y-10  w-full '>
 
    <div className='flex flex-col space-y-1  w-full bg-red-40fg0'>
        { 
        engineData.map((data,index)=>
        <div key={index} className={`${jost.className} flex items-center justify-between bg-[#f7f7f7] p-3 rounded-sm`}>
     <div  className='text-xs md:text-sm'>{data.leftValue}</div>
    <div  className='text-xs  md:text-sm '>{data.rightValue}</div>
        </div>
    ) }
     </div>
    {/* </div> */}
    </AccordionContent>
  </AccordionItem>
</Accordion>

     {/* 2 */}
    <Accordion type="single" className='w-full' collapsible>
  <AccordionItem value="item-2">
    <AccordionTrigger> 
    <div className={`${jost.className} text-xl`}>Driver Train</div>

         </AccordionTrigger>
    <AccordionContent  className='flex flex-col items-start justify-start space-y-10  w-full '>
 
    <div className='flex flex-col space-y-1  w-full bg-red-40fg0'>
    { 
       deiveTrain.map((data,index)=>
        <div key={index} className={`${jost.className} flex items-center justify-between bg-[#f7f7f7] p-3 rounded-sm`}>
     <div  className='text-xs md:text-sm'>{data.leftValue}</div>
    <div  className='text-xs  md:text-sm '>{data.rightValue}</div>
        </div>
    ) }
     </div>
    {/* </div> */}
    </AccordionContent>
  </AccordionItem>
</Accordion>

     {/* 3 */}
    <Accordion type="single" className='w-full' collapsible>
  <AccordionItem value="item-2">
    <AccordionTrigger> 
    <div className={`${jost.className} text-xl`}>Chassis Suspension Brakes</div>

         </AccordionTrigger>
    <AccordionContent  className='flex flex-col items-start justify-start space-y-10  w-full '>
 
    <div className='flex flex-col space-y-1  w-full bg-red-40fg0'>
    { 
       brake.map((data,index)=>
        <div key={index} className={`${jost.className} flex items-center justify-between bg-[#f7f7f7] p-3 rounded-sm`}>
     <div  className='text-xs md:text-sm'>{data.leftValue}</div>
    <div  className='text-xs  md:text-sm max-w-50'>{data.rightValue}</div>
        </div>
    ) }
     </div>
    {/* </div> */}
    </AccordionContent>
  </AccordionItem>
</Accordion>
     {/* 4 */}
    <Accordion type="single" className='w-full' collapsible>
  <AccordionItem value="item-2">
    <AccordionTrigger> 
    <div className={`${jost.className} text-xl `}>Dimensions</div>

         </AccordionTrigger>
    <AccordionContent  className='flex flex-col items-start justify-start space-y-10  w-full '>
 
    <div className='flex flex-col space-y-1  w-full bg-red-40fg0'>
    { 
       dimension.map((data,index)=>
        <div key={index} className={`${jost.className} flex items-center justify-between bg-[#f7f7f7] p-3 rounded-sm`}>
     <div  className='text-xs md:text-sm'>{data.leftValue}</div>
    <div  className='text-xs  md:text-sm max-w-50'>{data.rightValue}</div>
        </div>
    ) }
     </div>
    {/* </div> */}
    </AccordionContent>
  </AccordionItem>
</Accordion>


   {/* </div> */}
   </AccordionContent>
  </AccordionItem>
</Accordion>
   </div>
   </div>
  )
}

export default LeftBikeDetails