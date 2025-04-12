import { Jost } from 'next/font/google'
import Image from 'next/image'
import HeroData from './HeroData'


const jost=Jost({
  weight:['500'],
  subsets:['latin']
})

// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select"

const Showlarge = () => {
  return (
    <div className=' w-full  flex items-center justify-center  '>     
    <div className='hidden  w-full  lg:block  relative '>


<Image
  loading="lazy"
  className=" w-full max-h-[85vh]  object-cover"
  src="/bg-image-hd.jpg"
  alt="Background image"
  width={1920} // Adjust as needed
  height={1080} // Adjust as needed
  priority={false} // Use true if it's above the fold
/>

   </div>
   <HeroData/>

</div>
  )
}

export default Showlarge