import { Jost } from 'next/font/google'
import React from 'react'

const jost=Jost({
    weight:['500'],
    subsets:['latin']
})

const FeaturesBike = () => {
  return (
    <div className='w-full flex  items-center justify-center py-10'>
    <div className='w-full max-w-screen-xl flex flex-col items-center justify-center space-y-10'>


        {/* Upper Test */}
    <div className={`${jost.className} flex flex-col items-center justify-center space-y-3 `}>
    <div className={`${jost.className} text-[#252629] text-3xl md:text-4xl border-b-4 pb-2 `}>Featured Bikes</div>
   <div style={{fontWeight:400}} className={`${jost.className}  text-md text-[#a1a9b2] `}>Find the perfect ride that matches your lifestyle and adventure. </div> 
    </div>



    {/* Data */}
    <div className='w-full grid grid-col-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 px-4'>
    <div   className='flex flex-col items-center justify-center p-4 bg-white rounded-md overflow-hidden border-4 group relative '>
         <div className='absolute top-8 -right-10 bg-green-500 text-white rotate-45 w-40 flex itemscenter justify-center text-lg'>Honda 125</div>
         {/* <div className='absolute top-5 -left-14 bg-green-500 text-white -rotate-45 w-40 flex itemscenter justify-center text-sm'>{data.category}</div> */}
         <img className='h-60  ' src="./user-1742578600336.jpeg" />
         <div className='w-full flex flex-col items-center justify-center space-y-5 '>
         <div className={`${jost.className} text-4xl tracking-widest `}>Honda 150</div>
         <div className={`${jost.className} flex items-center justify-between w-full text-[#635f5f]`}>
             {/* 1 */}
           <div className="flex flex-col gap-y-1 items-center justify-center" >
            {/* <span className="text-blue-400"><BsDropletHalf size={20} /></span>  */}
            {/* {data.mileage} MPG </div>  */}
            {/* 2 */}
           <div className="flex flex-col gap-y-1 items-center justify-center" >
            {/* <span className="text-green-400">{data.fuelType==="Petrol" ? <BsFuelPumpFill/> :<GiSteeringWheel  size={20}/>}</span>  */}
            {/* {data.fuelType}  </div>  */}
            {/* 3 */}
           <div className="flex flex-col gap-y-1 items-center justify-center" >
            {/* <span className="text-[#E60000]"><IoMdSpeedometer  size={25}/></span>  */}
            {/* {data.topSpeed} km/h </div>  */}
            
            {/* <div  className="flex items-center justify-center"> {data.price} $</div><div  className="flex items-center justify-center"><IoSpeedometerOutline /> {data.brand}</div> */}
           </div>
            </div>
         </div>
    </div>
    </div>
    </div>
    </div>
    </div>
    </div>
  )
}

export default FeaturesBike