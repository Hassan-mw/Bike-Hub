import { Jost } from 'next/font/google'
import React from 'react'

const jost=Jost({
    weight:['500'],
    subsets:['latin']
})

const PopularCompany = () => {
  return (
    <div className='w-full flex items-center justify-center p-5 '>
    <div className='w-full flex flex-col space-y-4 max-w-screen-xl  '>
    <div className={`${jost.className} text-[#32aa27] text-2xl`}>Popular Company</div>
    <div className='w-full grid grid-cols-4 place-content-center'>
    <div></div>
    </div>
    </div>
    </div>
  )
}

export default PopularCompany