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
   
    brand:string;
    category:string;
    fuelType:string;
    image:string;
    mileage:number;
    model:number;
    name:string;
    price:number
    slug:string;
    topSpeed:number;
    url:string;
    weight:number;
    
    
    }
    
    

const SingleBikeData = ({image}:bikeDataType) => {
  return (
    <div> 
    <Carousel className="w-full max-w-xl mb-36 ">
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card>
                <CardContent className="flex items-center justify-center p-6 w-[500px] h-[400px]">
               <img src={image}  />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>


      <div className="hidden md:opacity-100">
      <CarouselPrevious />
      <CarouselNext />
      </div>
    </Carousel> </div>
  )
}

export default SingleBikeData