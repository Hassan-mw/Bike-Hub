'use client'

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/carousel"
const SingleBikeData = () => {
  return (
    <div> 
    <Carousel className="w-full max-w-xl mb-36 ">
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card>
                <CardContent className="flex items-center justify-center p-6 w-[500px] h-[400px]">
                  <span className="text-4xl font-semibold">{index + 1}</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    
      <CarouselPrevious  className="opacity-0 md:opacity-100"/>
      <CarouselNext  className="opacity-0 md:opacity-100" />
    </Carousel> </div>
  )
}

export default SingleBikeData