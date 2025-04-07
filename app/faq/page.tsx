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
             {/* Upper Body */}
             <div className='w-full flex flex-col space-y-2 py-10 lg:py-20 items-center justify-center bg-[#e5ebf5] border-t'>
       <div className={`${jost.className} text-3xl md:text-4xl text-[#202124]`}> FAQ</div>
       <div style={{fontWeight:400}} className={`${jost.className} text-md md:text-xl text-[#202124]`}> <Link className='text-[#888888]' href="/">Home</Link> /  FAQ</div>
      </div>

      {/* Down Body */}
      <div className="w-full flex flex-col items-center justify-center py-2 px-10">
   {/* 1 */}
      <div className='w-full max-w-screen-md flex flex-col items-center justify-center p-3 py-10  '>
        <div className={`${jost.className} text-2xl py-3 w-full flex items-start justify-start`}>ABCDEF</div>
      <Accordion type="single" collapsible className="w-full space-y-6 ">
      <AccordionItem value="item-1" className="border rounded-md p-3">
        <AccordionTrigger style={{fontWeight:400}} className={`${jost.className} text-md hover:cursor-pointer `}>What types of bikes are listed on Bike-Hub?</AccordionTrigger>
        <AccordionContent style={{fontWeight:300}} className={`${jost.className} text-[#888888] text-sm py-8 border-t` }>
        Pharetra nulla ullamcorper sit lectus. Fermentum mauris pellentesque nec nibh sed et, vel diam, massa. Placerat quis vel fames interdum urna lobortis sagittis sed pretium. Aliquam eget posuere sit enim elementum nulla vulputate magna. Morbi sed arcu proin quis tortor non risus.
Elementum lectus a porta commodo suspendisse arcu, aliquam lectus faucibus. Nisl malesuada tortor, ligula aliquet felis vitae enim. Mi augue aliquet mauris non elementum tincidunt eget facilisi. Pellentesque massa ipsum tempus vel aliquam massa eu pulvinar eget.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2" className="border rounded-md p-3">
        <AccordionTrigger style={{fontWeight:400}} className={`${jost.className} text-md hover:cursor-pointer`}> How can I compare different bikes?</AccordionTrigger>
        <AccordionContent style={{fontWeight:300}} className={`${jost.className} text-[#888888] text-sm py-8 border-t`}>
        Pharetra nulla ullamcorper sit lectus. Fermentum mauris pellentesque nec nibh sed et, vel diam, massa. Placerat quis vel fames interdum urna lobortis sagittis sed pretium. Aliquam eget posuere sit enim elementum nulla vulputate magna. Morbi sed arcu proin quis tortor non risus.
Elementum lectus a porta commodo suspendisse arcu, aliquam lectus faucibus. Nisl malesuada tortor, ligula aliquet felis vitae enim. Mi augue aliquet mauris non elementum tincidunt eget facilisi. Pellentesque massa ipsum tempus vel aliquam massa eu pulvinar eget.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3" className="border rounded-md p-3">
        <AccordionTrigger style={{fontWeight:400}} className={`${jost.className} text-md hover:cursor-pointer`}>Is Bike-Hub a dealership?</AccordionTrigger>
        <AccordionContent style={{fontWeight:300}} className={`${jost.className} text-[#888888] text-sm py-8 border-t`}>
        Pharetra nulla ullamcorper sit lectus. Fermentum mauris pellentesque nec nibh sed et, vel diam, massa. Placerat quis vel fames interdum urna lobortis sagittis sed pretium. Aliquam eget posuere sit enim elementum nulla vulputate magna. Morbi sed arcu proin quis tortor non risus.
Elementum lectus a porta commodo suspendisse arcu, aliquam lectus faucibus. Nisl malesuada tortor, ligula aliquet felis vitae enim. Mi augue aliquet mauris non elementum tincidunt eget facilisi. Pellentesque massa ipsum tempus vel aliquam massa eu pulvinar eget.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-4" className="border rounded-md p-3">
        <AccordionTrigger style={{fontWeight:400}} className={`${jost.className} text-md hover:cursor-pointer`}>Can I buy a bike directly from Bike-Hub?</AccordionTrigger>
        <AccordionContent style={{fontWeight:300}} className={`${jost.className} text-[#888888] text-sm py-8 border-t`}>
        Pharetra nulla ullamcorper sit lectus. Fermentum mauris pellentesque nec nibh sed et, vel diam, massa. Placerat quis vel fames interdum urna lobortis sagittis sed pretium. Aliquam eget posuere sit enim elementum nulla vulputate magna. Morbi sed arcu proin quis tortor non risus.
Elementum lectus a porta commodo suspendisse arcu, aliquam lectus faucibus. Nisl malesuada tortor, ligula aliquet felis vitae enim. Mi augue aliquet mauris non elementum tincidunt eget facilisi. Pellentesque massa ipsum tempus vel aliquam massa eu pulvinar eget.
        </AccordionContent>
      </AccordionItem>
     
     
    </Accordion>
    </div>
   
    {/* 2 */}
      <div className="w-full flex items-center justify-center py-2 px-10">

      <div className='w-full max-w-screen-md flex flex-col items-center justify-center p-3 py-10  '>
        <div className={`${jost.className} text-2xl py-3 w-full flex items-start justify-start`}>ABCDEF</div>
      <Accordion type="single" collapsible className="w-full space-y-6 ">
      <AccordionItem value="item-5" className="border rounded-md p-3">
        <AccordionTrigger style={{fontWeight:400}} className={`${jost.className} text-md hover:cursor-pointer `}>What types of bikes are listed on Bike-Hub?</AccordionTrigger>
        <AccordionContent style={{fontWeight:300}} className={`${jost.className} text-[#888888] text-sm py-8 border-t` }>
        Pharetra nulla ullamcorper sit lectus. Fermentum mauris pellentesque nec nibh sed et, vel diam, massa. Placerat quis vel fames interdum urna lobortis sagittis sed pretium. Aliquam eget posuere sit enim elementum nulla vulputate magna. Morbi sed arcu proin quis tortor non risus.
Elementum lectus a porta commodo suspendisse arcu, aliquam lectus faucibus. Nisl malesuada tortor, ligula aliquet felis vitae enim. Mi augue aliquet mauris non elementum tincidunt eget facilisi. Pellentesque massa ipsum tempus vel aliquam massa eu pulvinar eget.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-6" className="border rounded-md p-3">
        <AccordionTrigger style={{fontWeight:400}} className={`${jost.className} text-md hover:cursor-pointer`}> How can I compare different bikes?</AccordionTrigger>
        <AccordionContent style={{fontWeight:300}} className={`${jost.className} text-[#888888] text-sm py-8 border-t`}>
        Pharetra nulla ullamcorper sit lectus. Fermentum mauris pellentesque nec nibh sed et, vel diam, massa. Placerat quis vel fames interdum urna lobortis sagittis sed pretium. Aliquam eget posuere sit enim elementum nulla vulputate magna. Morbi sed arcu proin quis tortor non risus.
Elementum lectus a porta commodo suspendisse arcu, aliquam lectus faucibus. Nisl malesuada tortor, ligula aliquet felis vitae enim. Mi augue aliquet mauris non elementum tincidunt eget facilisi. Pellentesque massa ipsum tempus vel aliquam massa eu pulvinar eget.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-7" className="border rounded-md p-3">
        <AccordionTrigger style={{fontWeight:400}} className={`${jost.className} text-md hover:cursor-pointer`}>Is Bike-Hub a dealership?</AccordionTrigger>
        <AccordionContent style={{fontWeight:300}} className={`${jost.className} text-[#888888] text-sm py-8 border-t`}>
        Pharetra nulla ullamcorper sit lectus. Fermentum mauris pellentesque nec nibh sed et, vel diam, massa. Placerat quis vel fames interdum urna lobortis sagittis sed pretium. Aliquam eget posuere sit enim elementum nulla vulputate magna. Morbi sed arcu proin quis tortor non risus.
Elementum lectus a porta commodo suspendisse arcu, aliquam lectus faucibus. Nisl malesuada tortor, ligula aliquet felis vitae enim. Mi augue aliquet mauris non elementum tincidunt eget facilisi. Pellentesque massa ipsum tempus vel aliquam massa eu pulvinar eget.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-8" className="border rounded-md p-3">
        <AccordionTrigger style={{fontWeight:400}} className={`${jost.className} text-md hover:cursor-pointer`}>Can I buy a bike directly from Bike-Hub?</AccordionTrigger>
        <AccordionContent style={{fontWeight:300}} className={`${jost.className} text-[#888888] text-sm py-8 border-t`}>
        Pharetra nulla ullamcorper sit lectus. Fermentum mauris pellentesque nec nibh sed et, vel diam, massa. Placerat quis vel fames interdum urna lobortis sagittis sed pretium. Aliquam eget posuere sit enim elementum nulla vulputate magna. Morbi sed arcu proin quis tortor non risus.
Elementum lectus a porta commodo suspendisse arcu, aliquam lectus faucibus. Nisl malesuada tortor, ligula aliquet felis vitae enim. Mi augue aliquet mauris non elementum tincidunt eget facilisi. Pellentesque massa ipsum tempus vel aliquam massa eu pulvinar eget.
        </AccordionContent>
      </AccordionItem>
     
     
    </Accordion>
    </div>
    </div>
    </div>
 </div>

  )
}


export default page