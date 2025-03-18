import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/carousel"
import { Jost } from "next/font/google"


const jost=Jost({
    weight:['500'],
    subsets:['latin']
})

const Carousels = () => {
  return (
    <div className="w-full  flex items-center justify-center">
    <div className="w-full max-w-screen-xl  flex flex-col space-y-12  items-center justify-center p-9">
    <div className={`${jost.className} text-black/80 text-3xl md:text-4xl`}>Discover top motorcycle brands today!</div>
    <Carousel>
  <CarouselContent className=" m-2">
    <CarouselItem className="sm:basis-1/2 md:basis-1/3 hover:scale-90 duration-500  hover:cursor-pointer">
    <div className="flex flex-col ">
      <img className="h-60 sm:h-40  lg:h-72 w-full object-cover rounded-t-md" src="./bike-1.jpeg"/>
      <div className="flex flex-col space-y-2 bg-white rounded-b-md border  p-3">
     <div className={`${jost.className} text-xl`}>Sportdter 833</div>
     <div style={{fontWeight:300}} className={`${jost.className} text-[#828282]`}>Classic motorcycle with a robust engine for an exhilarating ride.</div>
      </div>
    </div>
    </CarouselItem>
    <CarouselItem className="sm:basis-1/2 md:basis-1/3  hover:scale-90 duration-500  hover:cursor-pointer">
    <div className="flex flex-col ">
      <img className="h-60 sm:h-40 lg:h-72 w-full object-cover rounded-t-md" src="./bike-2.jpeg"/>
      <div  className="flex flex-col space-y-2 bg-white rounded-b-md border  p-3">
     <div className={`${jost.className} text-xl`}>Yamaha YZF-R3</div>
    <div style={{fontWeight:300}} className={`${jost.className} text-[#828282]`}>Sporty motorcycle designed for agility thrilling performance.</div>
      </div>
    </div>
    </CarouselItem>
    <CarouselItem className="sm:basis-1/2 md:basis-1/3  hover:scale-90 duration-500 hover:cursor-pointer">
    <div className="flex flex-col ">
      <img className="h-60 sm:h-40  lg:h-72 w-full object-cover rounded-t-md" src="./bike-3.jpeg"/>
      <div  className="flex flex-col space-y-2 bg-white rounded-b-md border  p-3">
     <div className={`${jost.className} text-xl`}>Kawasaki ninja 650</div>
     <div style={{fontWeight:300}} className={`${jost.className} text-[#828282]`}>Versatile sport bike combining performance and comfort.</div>
      </div>
    </div>
    </CarouselItem>
  </CarouselContent>
</Carousel>
    </div>
    </div>
  )
}

export default Carousels