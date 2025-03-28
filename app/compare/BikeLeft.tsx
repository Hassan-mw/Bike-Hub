import { Jost } from 'next/font/google'
import React from 'react'
import { CiCirclePlus } from 'react-icons/ci'


const jost=Jost({
  weight:['500'],
  subsets:['latin']
})


const BikeLeft = () => {
  return (
    <div className='w-full flex flex-col space-y-3'>
        <div className={`${jost.className} w-full flex items-center justify-center h-80 border-y-4 border-l-4 rounded-md rounded-r-none relative group hover:cursor-pointer `}>
      <div className='w-full h-full flex flex-col space-y-2 items-center justify-center  '>
        <div className='size-16 flex items-center justify-center border-4 text-2xl rounded-full group-hover:border-green-500  duration-500  '>+</div>
        <div className={`${jost.className} text-sm group-hover:text-green-500 `}>Add Bike</div>
      </div>
       <div className={`${jost.className} absolute top-1/2 -right-7 text-2xl  size-12 border-4 bg-white rounded-full text-red-400 flex items-center justify-center`}>vs</div>
        </div>

    </div>
  )
}

export default BikeLeft