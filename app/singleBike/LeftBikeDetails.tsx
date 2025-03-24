'use client'
import { Jost } from 'next/font/google'
import { GoDotFill } from "react-icons/go";


const jost=Jost({
    weight:['500'],
    subsets:['latin-ext']
  })


const LeftBikeDetails = () => {
  return (
    <div className='lg:w-full   flex flex-col space-y-16 items-start justify-start text-xl'>
    <div className={` flex flex-col items-start justify-start space-y-8`}>
     <div  className={`${jost.className} text-3xl`}>Bike Description</div>
     <div style={{fontWeight:500}}  className={`${jost.className}  text-[#80898f] leading-8 text-sm`}>The Aprilia RSV4 is a high-performance superbike known for its advanced technology, aggressive styling, and race-inspired engineering. It features a powerful 1,099cc V4 engine, delivering exhilarating speed and precise handling. Designed for both track and street use, the RSV4 offers cutting-edge aerodynamics, a lightweight chassis, and state-of-the-art electronics. With its MotoGP-derived technology, it provides an unmatched riding experience for enthusiasts. Aprilia continuously refines the RSV4 to stay ahead in the superbike segment, making it a favorite among sportbike lovers.</div>
    </div>
    <div className={`${jost.className} flex flex-col space-y-8 items-start justify-start`}>
     <div className={`${jost.className} text-3xl md:text-4xl`}>Key Features:</div>
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
   </div>
  )
}

export default LeftBikeDetails