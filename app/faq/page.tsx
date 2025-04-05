import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
import { Jost } from "next/font/google"
import Link from "next/link"


const jost=Jost({
  weight:['500'],
  subsets:['latin']
})


const page=()=>{

  return (
    <div className='w-full  pb-24'>
            {/* Upper Body */}
      <div className='w-full flex flex-col space-y-2 py-10 lg:py-20 items-center justify-center bg-[#f4f7fc] border-t'>
       {/* <div className={`${jost.className} text-5xl text-[#202124]`}>Bike List</div> */}
       <div style={{fontWeight:400}} className={`${jost.className} text-4xl text-[#202124]`}>
         <Link className='text-[#888888] hover:text-blue-400 duration-600' href="/">Home</Link> 
         / FAQ
         </div>
      </div>
      <div>

      </div>
      {/* Down Body */}
      <div className='w-full flex flex-col items-center justify-center p-3  bg-white'>

    </div>
    </div>

  )
}


export default page