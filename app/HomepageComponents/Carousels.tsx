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
    <div className="w-full max-w-screen-xl  flex items-center justify-center">
    <div className={`${jost.className} text-black/80 text-3xl md:text-4xl`}>Discover top motorcycle brands today!</div>
    <Carousel>
  <CarouselContent>
    <CarouselItem className="sm:basis-1/2 md:basis-1/3">
    <div className="flex flex-col ">
      <img className="h-60 w-full object-cover" src="./bike-1.jpeg"/>
      <div className="flex flex-col space-y-2 bg-white">
     <div>Sportdter 833</div>
     <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, consectetur omnis labore, commodi itaque ea, sed autem ullam saepe modi natus in? Error facere assumenda illo accusantium voluptate, dolor fugiat.</div>
      </div>
    </div>
    </CarouselItem>
    <CarouselItem className="sm:basis-1/2 md:basis-1/3">
    <div className="flex flex-col ">
      <img className="h-60 w-full object-cover" src="./bike-2.jpeg"/>
      <div className="flex flex-col space-y-2 bg-white">
     <div>Sportdter 833</div>
     <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, consectetur omnis labore, commodi itaque ea, sed autem ullam saepe modi natus in? Error facere assumenda illo accusantium voluptate, dolor fugiat.</div>
      </div>
    </div>
    </CarouselItem>
    <CarouselItem className="sm:basis-1/2 md:basis-1/3">
    <div className="flex flex-col ">
      <img className="h-60 w-full object-cover" src="./bike-3.jpeg"/>
      <div className="flex flex-col space-y-2 bg-white">
     <div>Sportdter 833</div>
     <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, consectetur omnis labore, commodi itaque ea, sed autem ullam saepe modi natus in? Error facere assumenda illo accusantium voluptate, dolor fugiat.</div>
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