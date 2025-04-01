// import { Card, CardContent, CardHeader } from '@/components/ui/card'
// import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
// import { Jost } from 'next/font/google'

// const jost=Jost({
//     weight:['500'],
//     subsets:['latin']
// })

// export default function Testimonials() {
//     return (
//         <section className="py-16 md:py-32 ">
//             <div className="mx-auto max-w-7xl space-y-8 px-6 md:space-y-16">
//                 <div className="w-full flex items-center justify-center">
//                     <h2 className={`${jost.className} text-black/80 text-3xl md:text-4xl`}>Build by makers, loved by thousand peopels</h2>
//                 </div>

//                 <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-rows-2">
//                     <Card className="grid grid-rows-[auto_1fr] gap-8 sm:col-span-2 sm:p-6 lg:row-span-2">
//                         <CardHeader>
//                             <img className="h-6 w-fit dark:invert" src="https://html.tailus.io/blocks/customers/nike.svg" alt="Nike Logo" height="24" width="auto" />
//                         </CardHeader>
//                         <CardContent>
//                             <blockquote className="grid h-full grid-rows-[1fr_auto] gap-6">
//                                 <p className={`${jost.className} text-black/60 text-xl`}>Finding the perfect motorcycle was overwhelming until I discovered Bike-Hub. Their expert reviews and comparisons helped me choose between a sportbike and a cruiser. I finally got the Yamaha MT-07, and I love it! If you're looking for your next ride, I highly recommend Bike-Hub!</p>

//                                 <div className="grid grid-cols-[auto_1fr] items-center gap-3">
//                                     <Avatar className="size-12">
//                                         <AvatarImage src="https://tailus.io/images/reviews/shekinah.webp" alt="Shekinah Tshiokufila" height="400" width="400" loading="lazy" />
//                                         <AvatarFallback>ST</AvatarFallback>
//                                     </Avatar>

//                                     <div>
//                                         <cite className="text-sm font-medium">Shekinah Tshiokufila</cite>
//                                     </div>
//                                 </div>
//                             </blockquote>
//                         </CardContent>
//                     </Card>
//                     <Card className="md:col-span-2">
//                         <CardContent className="h-full pt-6">
//                             <blockquote className="grid h-full grid-rows-[1fr_auto] gap-6">
//                                 <p className={`${jost.className} text-black/60 text-xl font-medium`}>I love how Bike-Hub lists all the top motorcycle brands in one place. It saved me hours of research!</p>

//                                 <div className="grid grid-cols-[auto_1fr] items-center gap-3">
//                                     <Avatar className="size-12">
//                                         <AvatarImage src="https://tailus.io/images/reviews/jonathan.webp" alt="Jonathan Yombo" height="400" width="400" loading="lazy" />
//                                         <AvatarFallback>JY</AvatarFallback>
//                                     </Avatar>
//                                     <div>
//                                         <cite className="text-sm font-medium">Jonathan Yombo</cite>
                                       
//                                     </div>
//                                 </div>
//                             </blockquote>
//                         </CardContent>
//                     </Card>
//                     <Card>
//                         <CardContent className="h-full pt-6">
//                             <blockquote className="grid h-full grid-rows-[1fr_auto] gap-6">
//                                 <p  className={`${jost.className} text-black/60`}>The comparison tool helped me pick between a sportbike and a cruiser. Now, I ride with confidence!</p>

//                                 <div className="grid items-center gap-3 [grid-template-columns:auto_1fr]">
//                                     <Avatar className="size-12">
//                                         <AvatarImage src="https://tailus.io/images/reviews/yucel.webp" alt="Yucel Faruksahan" height="400" width="400" loading="lazy" />
//                                         <AvatarFallback>YF</AvatarFallback>
//                                     </Avatar>
//                                     <div>
//                                         <cite className="text-sm font-medium">Yucel Faruksahan</cite>
                                        
//                                     </div>
//                                 </div>
//                             </blockquote>
//                         </CardContent>
//                     </Card>
//                     <Card>
//                         <CardContent className="h-full pt-6">
//                             <blockquote className="grid h-full grid-rows-[1fr_auto] gap-6">
//                                 <p  className={`${jost.className} text-black/60`}>Bike-Hub not only helped me find my motorcycle but also the perfect riding jacket and gloves.!</p>

//                                 <div className="grid items-center gap-3 [grid-template-columns:auto_1fr]">
//                                     <Avatar className="size-12">
//                                         <AvatarImage src="https://tailus.io/images/reviews/yucel.webp" alt="Yucel Faruksahan" height="400" width="400" loading="lazy" />
//                                         <AvatarFallback>YF</AvatarFallback>
//                                     </Avatar>
//                                     <div>
//                                         <cite className="text-sm font-medium">Liam J.</cite>
                                        
//                                     </div>
//                                 </div>
//                             </blockquote>
//                         </CardContent>
//                     </Card>
                
//                 </div>
//             </div>
//         </section>
//     )
// }

"use client";
import React from "react";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import Image from "next/image";
import { Jost } from "next/font/google";

const jost=Jost({
    weight:['500'],
    subsets:['latin']
})


const content = [
  {
    title: " Alex R.",
    description:
    "I was looking for a high-quality yet affordable bike, and Bike-Hub made the process so easy. Their collection is fantastic, and the customer support is top-notch. Highly recommend!",
    content: (
        <div className="flex h-full w-full items-center justify-center text-white">
        <Image
          src="/p-1.jpeg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Daniel S.",
    description:
    "I compared multiple sites before buying my road bike, and Bike-Hub had the best deals. The bike arrived in perfect condition, and the performance is outstanding. Absolutely worth it!",
    content: (
      <div className="flex h-full w-full items-center justify-center text-white">
        <Image
          src="/p-2.jpeg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: " Sam L",
    description:
      "If you're a cycling enthusiast like me, Bike-Hub is the ultimate destination! From accessories to premium bikes, they have it all. I’m impressed with their quality and service.",
    content: (
        <div className="flex h-full  w-full items-center justify-center text-white">
        <Image
          src="/p-3.jpeg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Michael T.",
    description:
      "Bike-Hub exceeded my expectations! The bike I purchased is sturdy, stylish, and rides smoothly. Their customer service was very helpful in guiding me to the right choice. Highly recommended!",
    content: (
        <div className="flex h-full  w-full items-center justify-center text-white">
        <Image
          src="/p-4.jpeg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
];
const Testmonials=()=> {
  return (

    <div className="w-full py-16 bg-[#f0f5f7]">
       <div className="w-full flex flex-col items-center justify-center">
                        {/* <p className="text-end text-sm">Best Companies</p> */}
                        <div className={`${jost.className} text-black/80 text-3xl md:text-4xl `}>Testimonials From Our Customers</div>
                        <div style={{fontWeight:400}} className={`${jost.className}  text-md text-[#879099]  `}>Lorem ipsum  sit amet elit, sed  tempor </div> 
        </div>
      <div className="w-full">
      <StickyScroll content={content} />
    </div></div>
  );
}

export default Testmonials;