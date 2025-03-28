import { Jost } from 'next/font/google'
import React from 'react'
import BikeSelector from './BikeSelector'



const jost=Jost({
  weight:['500'],
  subsets:['latin']
})


const BikeRight = () => {
const value='right';
  return (
    <div className='w-full flex flex-col space-y-3'>
  <div>
  <BikeSelector border='border-4 border-r-4 rounded-md ' type='hidden' value={value}/>

  </div>
    </div>


   )
 }

export default BikeRight