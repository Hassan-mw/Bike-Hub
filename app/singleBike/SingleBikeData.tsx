'use client'

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/carousel"

interface bikeDataType{
   
  
    
    }
    
    

const SingleBikeData = ( => {
    // console.log(image,'👺👺👺👺👺👺👺👺👺👺👺')
  return (
    <div> 
    <Carousel className="w-full max-w-xl mb-36 ">
      <CarouselContent>

          <CarouselItem >
            <div className="p-1">
              <Card>
                <CardContent className="flex items-center justify-center p-6 w-[500px] h-[400px]">
                {/* <img className='h-60  ' src={`/${image} `} /> */}
                </CardContent>
              </Card>
            </div>
          </CarouselItem>

      </CarouselContent>


      <div className="hidden md:opacity-100">
      <CarouselPrevious />
      <CarouselNext />
      </div>
    </Carousel> </div>
  )
}

export default SingleBikeData