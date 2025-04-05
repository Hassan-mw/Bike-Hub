import { VscGitStashApply } from "react-icons/vsc";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Jost } from "next/font/google";

const jost=Jost({
  weight:['500'],
  subsets:['latin']
})




const TextRelatedComparision = () => {
  return (
    <div className='w-full max-w-screen-xl py-6 px-10   flex flex-col space-y-5 items-center border-t justify-center  bg-[#f4f7fc]  shadow-sm md:shadow-md '>
 <div className='w-full items-start justify-start flex flex-col space-y-2'>
<div className={`${jost.className} w-full flex items-start justify-start  text-2xl md:text-3xl lg:text-4xl   `}>Bikes Comparison in Pakistan</div>
 <div className={`${jost.className} text-2xl text-[#434343]`}></div>
  <div style={{fontWeight:300}} className={`${jost.className} text-[#3b3939] text-md max-w-screen-lg`}>If you’re still in a dilemma on purchasing a new bike, BikeHub is here to help you in choosing you the best bike in your desired budget. BikeHub bike comparison tool made with comprehensive research and practicality. Although there is no direct naming of the brand in regards to which one is better or not we still try to make it clear to the assumed rational customers with a good list of points. </div>
 </div>
 <Accordion type="single" collapsible className='w-full '>
    <AccordionItem value="item-1" className="group">
    <AccordionTrigger className="w-f group-focus-visible:ring-0 group-focus-visible:border-0 outline-none">
   <div className={`${jost.className} text-2xl`}>Comparison History</div>
    </AccordionTrigger>
  <AccordionContent  className='w-full space-y-10'>
  <div style={{fontWeight:300}} className={`${jost.className} text-[#3b3939] text-md max-w-screen-lg `}>All you need to do is filling in the name of at least two automakers and their respective models, and you have a good list of comparison. Some of the top Companies Models you might wish to compare, however; you can always change it according to your needs and desire. You'll be able to see bike comparison of Honda 125, Yamaha YBR 125, Suzuki GS 150 and Honda Deluxe, if that's what you were looking for, all you need to do is just click anywhere on the two bikes, and you'll have a healthy list of comparison. </div>
 {/*  */}
 <div className='w-full flex flex-col space-y-6'>
{/* 2-1 */}
  <div className='w-full items-start justify-start flex flex-col space-y-3'>
  <div className={`${jost.className} text-2xl`}>Top Comparisons</div>
  <div  className={`${jost.className} text-sm flex flex-col space-y-1 items-start justify-start`}>
   <div style={{fontWeight:300}} className={`${jost.className} text-md flex items-center justify-center space-x-2`}><div>1. </div><div className='text-blue-400'>Compare Yamaha YBR 125 and Honda CG 125</div>  </div>
   <div style={{fontWeight:300}}  className={`${jost.className} text-md flex items-center justify-center space-x-2`}><div>2.</div><div className='text-blue-400'>Compare Ravi Piaggio and Honda 125 Deluxe</div>  </div>
   <div style={{fontWeight:300}}  className={`${jost.className} text-md flex items-center justify-center space-x-2`}><div>3.</div><div className='text-blue-400'>Compare Suzuki 150 and Honda CG 125</div>  </div>
 
   </div>
 </div>
 {/*2-2*/}
  <div className='w-full items-start justify-start flex flex-col space-y-3'>
  <div className={`${jost.className} text-2xl`}>Popular Manufacturers</div>
  <div style={{fontWeight:300}} className={`${jost.className} text-[#3b3939] text-md max-w-screen-lg`}>The Pakistan market is very unpredictable, and one cannot easily determine what the next move of customers will be. There are few companies which are magnificent, but they fail in the Pakistani market and few companies are not at all expected to flourish, but they do. However, the most famous manufacturers are Honda, Yamaha, Suzuki, Metro, Unique and Super Power. </div>

 </div>
 </div>
  </AccordionContent>
  </AccordionItem>
  </Accordion>

       </div>
  )
}

export default TextRelatedComparision