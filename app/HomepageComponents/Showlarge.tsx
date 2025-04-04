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
    <div className=' w-full flex items-center justify-center  relative'>     
    <div className='hidden  w-full h-full lg:block  flex-col relative '>


<Image
  loading="lazy"
  className="object-cover w-full h-full max-h-[90vh]"
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