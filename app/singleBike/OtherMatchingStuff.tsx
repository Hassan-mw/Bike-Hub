import { Jost } from 'next/font/google'
import React from 'react'
import { FaHeart } from 'react-icons/fa'

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
         <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 '>
        <div className='w-full flex flex-col items-center justify-center space-y-1 bg-[#faf9f9] rounded-xl p-2 relative'>
            <div className={`${jost.className} top-3 left-5 absolute bg-[#2d972f] px-1 py-2 flex items-center justify-center text-xs rounded-full text-white`}>50%</div>
            <div className={`${jost.className} top-5 right-5 absolute text-[#2d972f] text-xl hover:text-blue-600 duration-500 hover:cursor-pointer`}><FaHeart  /></div>
        <img loading='lazy' className='size-48' src="/helmet.png"/>
        <div className={`${jost.className} text-xl`}>Aerion Carrbo Helmet</div>
        <div style={{fontWeight:200}} className={`${jost.className} text-xs`}> (Fashion,Twin Disc)</div>
        <div className={`${jost.className} flex items-end justify-end space-x-0.5 `}><span className='text-xl text-[#2d972f]'>$699</span><span className='text-sm'>$899</span></div>
        <div className={`${jost.className} w-5/6 flex items-center justify-center bg-[#2d972f] rounded-lg p-3 text-white hover:cursor-pointer hover:bg-green-700 duration-500`}>Buy Now</div>
        </div>
        <div className='w-full flex flex-col items-center justify-center space-y-1 bg-[#faf9f9] rounded-xl p-2 relative'>
            <div className={`${jost.className} top-3 left-5 absolute bg-[#2d972f] px-1 py-2 flex items-center justify-center text-xs rounded-full text-white`}>50%</div>
            <div className={`${jost.className} top-5 right-5 absolute text-[#2d972f] text-xl hover:text-blue-600 duration-500 hover:cursor-pointer`}><FaHeart  /></div>
        <img loading='lazy' className='size-48' src="/helmet.png"/>
        <div className={`${jost.className} text-xl`}>Aerion Carrbo Helmet</div>
        <div style={{fontWeight:200}} className={`${jost.className} text-xs`}> (Fashion,Twin Disc)</div>
        <div className={`${jost.className} flex items-end justify-end space-x-0.5 `}><span className='text-xl text-[#2d972f]'>$699</span><span className='text-sm'>$899</span></div>
        <div className={`${jost.className} w-5/6 flex items-center justify-center bg-[#2d972f] rounded-lg p-3 text-white hover:cursor-pointer hover:bg-green-700 duration-500`}>Buy Now</div>
        </div>
        <div className='w-full flex flex-col items-center justify-center space-y-1 bg-[#faf9f9] rounded-xl p-2 relative'>
            <div className={`${jost.className} top-3 left-5 absolute bg-[#2d972f] px-1 py-2 flex items-center justify-center text-xs rounded-full text-white`}>50%</div>
            <div className={`${jost.className} top-5 right-5 absolute text-[#2d972f] text-xl hover:text-blue-600 duration-500 hover:cursor-pointer`}><FaHeart  /></div>
        <img loading='lazy' className='size-48' src="/helmet.png"/>
        <div className={`${jost.className} text-xl`}>Aerion Carrbo Helmet</div>
        <div style={{fontWeight:200}} className={`${jost.className} text-xs`}> (Fashion,Twin Disc)</div>
        <div className={`${jost.className} flex items-end justify-end space-x-0.5 `}><span className='text-xl text-[#2d972f]'>$699</span><span className='text-sm'>$899</span></div>
        <div className={`${jost.className} w-5/6 flex items-center justify-center bg-[#2d972f] rounded-lg p-3 text-white hover:cursor-pointer hover:bg-green-700 duration-500`}>Buy Now</div>
        </div>
        <div className='w-full flex flex-col items-center justify-center space-y-1 bg-[#faf9f9] rounded-xl p-2 relative'>
            <div className={`${jost.className} top-3 left-5 absolute bg-[#2d972f] px-1 py-2 flex items-center justify-center text-xs rounded-full text-white`}>50%</div>
            <div className={`${jost.className} top-5 right-5 absolute text-[#2d972f] text-xl hover:text-blue-600 duration-500 hover:cursor-pointer`}><FaHeart  /></div>
        <img loading='lazy' className='size-48' src="/helmet.png"/>
        <div className={`${jost.className} text-xl`}>Aerion Carrbo Helmet</div>
        <div style={{fontWeight:200}} className={`${jost.className} text-xs`}> (Fashion,Twin Disc)</div>
        <div className={`${jost.className} flex items-end justify-end space-x-0.5 `}><span className='text-xl text-[#2d972f]'>$699</span><span className='text-sm'>$899</span></div>
        <div className={`${jost.className} w-5/6 flex items-center justify-center bg-[#2d972f] rounded-lg p-3 text-white hover:cursor-pointer hover:bg-green-700 duration-500`}>Buy Now</div>
        </div>
         </div>
            

        </div>


    </div>
  )
}

export default OtherMatchingStuff