import { Jost } from "next/font/google"

const jost=Jost({
  weight:['500'],
  subsets:['latin']
})
const HotBikeComparision = () => {
  return (
    <div className='w-full max-w-screen-xl flex flex-col py-4 space-y-9  rounded-lg px-10 border-t  shadow-md'>

    <div className={`${jost.className} w-full flex items-start justify-start text-4xl  `}>Hot Bike Comparisons</div>
    
    <div className="w-full grid grid-cols-1  md:grid-cols-2 gap-6   pb-6 max-w-screen-xl  ">
    {/* 1 */}
      <div className='flex items-center justify-center rounded-lg  bg-white  shadow-sm'>
    <div className="flex flex-col  p-3 rounded-md">
          <div className={`${jost.className} w-full flex items-center justify-center text-xl border-b`}>Suzuki GS 150</div>
          <img className=" w-full object-cover rounded-t-md " src="./suzuki-150.jpg"/>
          </div>
          <div className='h-full flex items-center justify-center  '>
        <span className='size-12 rounded-full bg-red-500 text-white flex items-center justify-center text-2xl'>vs</span>
          </div>
    <div className="flex flex-col  p-3 rounded-md">
          <div className={`${jost.className} w-full flex items-center justify-center text-xl border-b`}>Yamaha YBR 125</div>
          <img className=" w-full object-cover rounded-t-md " src="./ybr-125.jpg"/>
          </div>
          </div> 
         {/* 2 */}
      <div className='flex items-center justify-center  rounded-lg   bg-white shadow-sm'>
    <div className="flex flex-col  p-3 rounded-md">
          <div className={`${jost.className} w-full flex items-center justify-center text-xl`}>Honda CG 125</div>
          <img className=" w-full object-cover rounded-t-md " src="./honda-125.jpeg"/>
          </div>
          <div className='h-full flex items-center justify-center  '>
        <span className='size-12 rounded-full bg-red-500 text-white flex items-center justify-center text-2xl'>vs</span>
          </div>
    <div className="flex flex-col  p-3 rounded-md">
          <div className={`${jost.className} w-full flex items-center justify-center text-xl`}>Honda Pridor</div>
          <img className=" w-full object-cover rounded-t-md " src="./honda-pridor.jpg"/>
          </div>
          </div> 
    </div>
          </div>
  )
}

export default HotBikeComparision