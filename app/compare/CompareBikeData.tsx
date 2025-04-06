'use client'

import { Jost } from 'next/font/google'
import React, { useState } from 'react'
interface dataType{
  name: string;
  brand: string;
  category: string;
  price: number; // ✅ Fix: Change 'Number' to 'number'
  mileage: number; // ✅ Fix: Change 'Number' to 'number'
  topSpeed: number; // ✅ Fix: Change 'Number' to 'number'
  weight: number; // ✅ Fix: Change 'Number' to 'number'
  fuelType: string;
  image:string;
  model:string;
}

const jost=Jost({
  weight:['400'],
  subsets:['latin']
})


const CompareBikeData = ({name,brand,category,price,mileage,topSpeed,weight,image,fuelType,model}:dataType) => {
  const [showSideIcon,setShowSideIcon]=useState(false)
  return (
    <div className='w-full grid gap-6  '>
       <div className="w-[400px] h-[100px]  flex items-center justify-end  fixed top-1/2 right-1/2">
       <div
  onClick={() => setShowSideIcon(!showSideIcon)}
  className="z-20 hover:cursor-pointer size-6 rounded-full bg-green-600 relative"
>
  {/* Dot 1 */}
  <div
    className={`${
      showSideIcon ? 'translate-x-[100px] translate-y-[0px]' : 'translate-x-0 translate-y-0'
    } transition-transform duration-500 ease-in-out size-6 rounded-full bg-blue-600 absolute z-10`}
  ></div>
  {/* Dot 2 */}
  <div
    className={`${
      showSideIcon ? 'translate-x-[71px] translate-y-[71px]' : 'translate-x-0 translate-y-0'
    } transition-transform duration-500 ease-in-out size-6 rounded-full bg-yellow-600 absolute z-10`}
  ></div>


  {/* Dot 3 */}
  <div
    className={`${
      showSideIcon ? 'translate-x-[-100px] translate-y-[0px]' : 'translate-x-0 translate-y-0'
    } transition-transform duration-500 ease-in-out size-6 rounded-full bg-purple-600 absolute z-10`}
  ></div>

  {/* Dot 4 */}
  <div
    className={`${
      showSideIcon ? 'translate-x-[-71px] translate-y-[71px]' : 'translate-x-0 translate-y-0'
    } transition-transform duration-500 ease-in-out size-6 rounded-full bg-amber-950 absolute z-10`}
  ></div>

  {/* Dot 5 */}
  <div
    className={`${
      showSideIcon ? 'translate-x-[-71px] translate-y-[-71px]' : 'translate-x-0 translate-y-0'
    } transition-transform duration-500 ease-in-out size-6 rounded-full bg-black absolute z-10`}
  ></div>

  {/* Dot6 */}
  <div
    className={`${
      showSideIcon ? 'translate-x-[-0px] translate-y-[-100px]' : 'translate-x-0 translate-y-0'
    } transition-transform duration-500 ease-in-out size-6 rounded-full bg-black absolute z-10`}
  ></div>
  {/* Dot7 */}
  <div
    className={`${
      showSideIcon ? 'translate-x-[71px] translate-y-[-71px]' : 'translate-x-0 translate-y-0'
    } transition-transform duration-500 ease-in-out size-6 rounded-full bg-black absolute z-10`}
  ></div>
  {/* Dot7 */}
  <div
    className={`${
      showSideIcon ? 'translate-x-[0px] translate-y-[100px]' : 'translate-x-0 translate-y-0'
    } transition-transform duration-500 ease-in-out size-6 rounded-full bg-black absolute z-10`}
  ></div>
</div>

    {/* <div className="size-6 rounded-full bg-green-600"></div> */}
    {/* <div className="size-6 rounded-full bg-green-600"></div> */}
    </div>
   <div className='  '>
     {/* <div>Check bike In Detail</div> */}
     <img className=' aspect-auto object-cover' src={`/image-1.png`}/> 
     </div>
     <div className='w-full flex flex-col  min-h-[450px]'>
    <div  style={{fontWeight:500}}   className={`${jost.className} border w-full truncate overflow-hidden flex flex-col items-start p-3 px-8 justify-start   text-xs md:text-2xl py-2`}>{name}</div>
    <div style={{fontWeight:300}} className={`${jost.className}   text-md p-3 border w-full flex flex-col items-start  justify-start px-8 `}>{brand}</div>
    <div style={{fontWeight:300}} className={`${jost.className}   text-md p-3 border w-full flex flex-col items-start  justify-start px-8 `}>⭐⭐⭐ 44 Rating</div>
    <div style={{fontWeight:300}} className={`${jost.className}  text-md p-3 border w-full flex flex-col items-start justify-start px-8 `}>{category}</div>
    <div style={{fontWeight:300}} className={`${jost.className}  text-md p-3 border w-full flex flex-col items-start  justify-start px-8 `}>${price}</div>
    <div style={{fontWeight:300}} className={`${jost.className}  text-md p-3 border w-full flex flex-col items-start   justify-start px-8 `}>{mileage}</div>
    <div style={{fontWeight:300}} className={`${jost.className}  text-md p-3 border w-full flex flex-col items-start  justify-start px-8 `}>{topSpeed} km/h</div>
    <div style={{fontWeight:300}} className={`${jost.className}  text-md p-3 border w-full flex flex-col items-start   justify-start px-8 `}>{weight} kg</div>
    <div style={{fontWeight:300}} className={`${jost.className}  text-md p-3 border w-full flex flex-col items-start  justify-start px-8 `}>{fuelType}</div>
    <div style={{fontWeight:300}} className={`${jost.className}  text-md p-3 border w-full flex flex-col items-start  justify-start px-8 `}>{fuelType}</div>

     </div>
     
     </div>
  )
}

export default CompareBikeData