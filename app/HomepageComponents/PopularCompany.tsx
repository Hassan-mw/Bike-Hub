import { Jost } from 'next/font/google'
import React from 'react'
import { SiDucati, SiHonda, SiKtm, SiSuzuki, SiYamahacorporation } from 'react-icons/si'
import { CgBmw } from "react-icons/cg";
import Button from '@/components/Button';
const jost=Jost({
    weight:['500'],
    subsets:['latin']
})

const PopularCompany = () => {
  return (
    <div className='w-full flex items-center justify-center p-5 bg-[#f9fafb] '>
    <div className='w-full flex flex-col space-y-8 max-w-screen-lg  '>
    <div className={`${jost.className} text-[#32aa27]  text-3xl md:text-4xl`}>Popular Company</div>
    <div className='w-full grid grid-cols-3 lg:grid-cols-6 gap-x-4 gap-y-6 items-center justify-center'>
        <div className='flex flex-col items-center hover:cursor-pointer justify-center hover:text-red-600 duration-500 border-b border-white hover:border-red-300  '><SiHonda size={25} /> <span className={`${jost.className}`}>HONDA</span></div>
        <div className='flex flex-col items-center hover:cursor-pointer justify-center hover:text-red-600 duration-500 border-b border-white hover:border-red-300 '><SiYamahacorporation size={25}  /> <span className={`${jost.className}`}>YAMAHA</span></div>
        <div className='flex flex-col items-center  hover:cursor-pointer justify-center hover:text-red-600 duration-500 border-b border-white hover:border-red-300 '><SiSuzuki  size={25} /> <span className={`${jost.className}`}>SUZUKI</span></div>
        <div className='flex flex-col items-center  hover:cursor-pointer justify-center hover:text-red-600 duration-500 border-b border-white hover:border-red-300 '><CgBmw  size={25} /> <span className={`${jost.className}`}>BMW</span></div>
        <div className='flex flex-col items-center  hover:cursor-pointer justify-center hover:text-red-600 duration-500 border-b border-white hover:border-red-300 '><SiKtm  size={25} /> <span className={`${jost.className}`}>KTM</span></div>
        <div className='flex flex-col items-center  hover:cursor-pointer justify-center hover:text-red-600 duration-500 border-b border-white hover:border-red-300 '><SiDucati  size={25} /> <span className={`${jost.className}`}>DUCATI</span></div>
    </div>
    </div>
    </div>
  )
}

export default PopularCompany