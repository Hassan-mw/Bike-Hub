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
         <Link className='text-[#706d6d] hover:text-blue-400 duration-600 pr-2' href="/">Home</Link> 
         / FAQ
         </div>
      </div>

      {/* Down Body */}
      <div className="w-full flex items-center justify-center py-20 px-10">

      <div className='w-full max-w-screen-md flex flex-col items-center justify-center p-3 py-11  bg-white'>
      <Accordion type="single" collapsible className="w-full space-y-16">
      <AccordionItem value="item-1" className="border rounded-md p-3">
        <AccordionTrigger style={{fontWeight:400}} className={`${jost.className} text-md hover:cursor-pointer`}>What types of bikes are listed on Bike-Hub?</AccordionTrigger>
        <AccordionContent style={{fontWeight:300}} className={`${jost.className} text-[#888888] text-sm py-8`}>
        Pharetra nulla ullamcorper sit lectus. Fermentum mauris pellentesque nec nibh sed et, vel diam, massa. Placerat quis vel fames interdum urna lobortis sagittis sed pretium. Aliquam eget posuere sit enim elementum nulla vulputate magna. Morbi sed arcu proin quis tortor non risus.
Elementum lectus a porta commodo suspendisse arcu, aliquam lectus faucibus. Nisl malesuada tortor, ligula aliquet felis vitae enim. Mi augue aliquet mauris non elementum tincidunt eget facilisi. Pellentesque massa ipsum tempus vel aliquam massa eu pulvinar eget.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger className={`${jost.className} text-2xl hover:cursor-pointer`}> How can I compare different bikes?</AccordionTrigger>
        <AccordionContent className={`${jost.className} text-[#888888] text-sm  py-8`}>
        Use our comparison tool to view key specs like engine capacity, fuel efficiency, features, and price side-by-side.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger className={`${jost.className} text-2xl hover:cursor-pointer`}>Is Bike-Hub a dealership?</AccordionTrigger>
        <AccordionContent className={`${jost.className} text-[#888888] text-sm  py-8`}>
        No, Bike-Hub is a platform that connects you with sellers and helps you explore and compare different bikes.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-4">
        <AccordionTrigger className={`${jost.className} text-2xl hover:cursor-pointer`}>Can I buy a bike directly from Bike-Hub?</AccordionTrigger>
        <AccordionContent className={`${jost.className} text-[#888888] text-sm  py-8`}>
        Bike-Hub helps you explore and compare bikes, but actual purchases are handled through the dealers or sellers linked in each listing.
        </AccordionContent>
      </AccordionItem>
     
     
    </Accordion>
    </div>
    </div>
    </div>


  )
}


export default page