import { Jost } from 'next/font/google'
import React from 'react'


const jost=Jost({
  weight:['500'],
  subsets:['latin']
})


const BikeRight = () => {
  return (
    <div className='w-full flex flex-col space-y-3'>
    <div className={`${jost.className} w-full flex items-center justify-center h-80 border-4 rounded-md rounded-l-none group cursor-pointer`}>
    <div className='w-full h-full flex flex-col space-y-2 items-center justify-center  '>
        <div className='size-16 flex items-center justify-center border-4 text-2xl rounded-full group-hover:border-green-500  duration-500  '>+</div>
        <div className={`${jost.className} text-sm group-hover:text-green-500 `}>Add Bike</div>
      </div>
    </div>

</div>
   )
 }

export default BikeRight