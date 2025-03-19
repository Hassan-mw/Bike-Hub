import { Jost } from 'next/font/google'
import Link from 'next/link'
import React from 'react'
import SideBarFilter from '../SideBarFilter/SideBarFilter'



const jost=Jost({
  weight:['500'],
  subsets:['latin']
})


const page = () => {
  return (
    <div className='w-full '>
            {/* Upper Body */}
      <div className='w-full flex flex-col space-y-2 py-6 items-center justify-center bg-[#f3f6fb]'>
       <div className={`${jost.className} text-3xl text-[#202124]`}>Bike List</div>
       <div style={{fontWeight:300}} className={`${jost.className} text- text-[#202124]`}> <Link className='text-[#888888]' href="/">Home</Link> / Bike List</div>
      </div>
      {/* Middle Body */}
      <div className='w-full flex flex-col items-center justify-center p-3 bg-[#f3f6fb]'>
        <SideBarFilter/>
          <div className='w-full max-w-screen-xl grid grid-cols-1 md:grid-cols-2 gap-4 py-10'>
            {/* data */}
             <div className='flex flex-col items-center justify-center p-4 bg-white rounded-md overflow-hidden  relative shadow-xl'>
              <div className='absolute top-5 -right-14 bg-green-500 text-white rotate-45 w-40 flex itemscenter justify-center text-sm'>Honda</div>
              <div className='absolute top-5 -left-14 bg-green-500 text-white -rotate-45 w-40 flex itemscenter justify-center text-sm'>Sports</div>
              <img className='h-60  ' src="./b1.jpeg" />
              <div className='w-full flex flex-col items-center justify-center space-y-1 '>
              <div className={`${jost.className} text-xl`}> CBR250R</div>
              <div className={`${jost.className} flex items-center justify-between w-full text-[#635f5f]`}>
                <div >2021</div> <div >2,000 $</div><div >Honda</div>
                </div>

              </div>
             </div>

             <div className='flex flex-col items-center justify-center p-4 bg-white rounded-md overflow-hidden  relative shadow-xl'>
              <div className='absolute top-5 -right-14 bg-green-500 text-white rotate-45 w-40 flex itemscenter justify-center text-sm'>Honda</div>
              <div className='absolute top-5 -left-14 bg-green-500 text-white -rotate-45 w-40 flex itemscenter justify-center text-sm'>Sports</div>
              <img className='h-60  ' src="./b1.jpeg" />
              <div className='w-full flex flex-col items-center justify-center space-y-1 '>
              <div className={`${jost.className} text-xl`}> CBR250R</div>
              <div className={`${jost.className} flex items-center justify-between w-full text-[#635f5f]`}>
                <div >2021</div> <div >2,000 $</div><div >Honda</div>
                </div>

              </div>
             </div>
      </div>
    </div>
    </div>
  )
}

export default page