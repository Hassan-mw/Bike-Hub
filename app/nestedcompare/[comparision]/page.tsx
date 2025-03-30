

// import ComparedBikeLeft from './ComparedBikeLeft'
// import ComparedBikeRight from './ComparedBikeRight'

import { MdCompareArrows } from "react-icons/md";
import { Jost } from 'next/font/google';



const jost=Jost({
  weight:['500'],
  subsets:['latin']
})



const page = async({params}:{params:URLSearchParams}) => {
const x=await params.comparision
console.log(x)
  return (
    <div className='w-full flex flex-col items-center justify-center space-y-6 py-20 px-5'>
    {/* <div className='w-full max-w-screen-xl bg-[#f0f5f7] p-2 rounded-md  flex items-center justify-between'>
    <div onClick={handleGoBack}>Go Back</div> 
     <div  className={`${jost.className} bg-blue-500 rounded-md px-2 hover:cursor-pointer text-white hover:bg-blue-600`}>Save it</div>
     </div>  */}
    <div className='w-full max-w-screen-xl flex items-center justify-between space-x-4  '>
        {/* <ComparedBikeLeft data={firstBike} /> */}
        <MdCompareArrows />
        {/* <ComparedBikeRight data={secondBike}/> */}
    </div>
 
   </div>)
  
}

export default page