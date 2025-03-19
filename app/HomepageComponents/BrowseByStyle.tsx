import { Jost } from 'next/font/google'
import React from 'react'

const jost=Jost({
    weight:['500'],
    subsets:['latin']
})

const BrowseByStyle = () => {
  return (
    <div className='w-full flex items-center justify-center p-6'>
     <div className='w-full flex flex-col items-center justify-center max-w-screen-xl '>
     <div style={{fontWeight:500}} className={`${jost.className} text-2xl lg:text-4xl  `}>Ride in Style – Pick Your Bike</div>
     <div className='bg-green-400 w-full grid grid-cols-2'>
     <div className='w-full flex flex-col space-y-2'>
        <div></div>
     <div>Adventure</div>
     </div>
     </div> 
     </div>
    </div>
  )
}

export default BrowseByStyle