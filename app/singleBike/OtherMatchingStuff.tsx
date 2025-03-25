import { Jost } from 'next/font/google'
import React from 'react'

const jost=Jost({
    weight:['500'],
    subsets:['latin-ext']
  })

  interface DataType{
    brand:string,
    name:string,
  }

const OtherMatchingStuff = ({brand,name}:DataType) => {
  return (
    <div className='w-full flex items-center justify-center p-8'>
        <div className='w-full max-w-screen-xl flex flex-col space-y-8'>
        <div className={`${jost.className} text-3xl md:text-4xl`}> Matching items with <span className='text-green-600'>{brand} {name}</span></div>

            

        </div>


    </div>
  )
}

export default OtherMatchingStuff