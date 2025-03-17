import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/carousel"

const Carousels = () => {
  return (
    <div className="w-full  flex items-center justify-center">
    <div className="w-full max-w-screen-xl  flex items-center justify-center">

    <Carousel>
  <CarouselContent>
    <CarouselItem className="md:basis-1/2 lg:basis-1/3">
    <div className="flex flex-col ">
      <img src=""/>
      <div className="flex flex-col space-y-2 bg-white">
     <div>Sportdter 833</div>
     <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, consectetur omnis labore, commodi itaque ea, sed autem ullam saepe modi natus in? Error facere assumenda illo accusantium voluptate, dolor fugiat.</div>
      </div>
    </div>
    </CarouselItem>
    <CarouselItem className="md:basis-1/2 lg:basis-1/3">...</CarouselItem>
    <CarouselItem className="md:basis-1/2 lg:basis-1/3">...</CarouselItem>
  </CarouselContent>
</Carousel>
    </div>
    </div>
  )
}

export default Carousels