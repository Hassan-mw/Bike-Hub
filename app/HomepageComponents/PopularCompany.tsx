import { Jost } from 'next/font/google'
import React from 'react'
import { SiDucati, SiHonda, SiKtm, SiSuzuki, SiYamahacorporation } from 'react-icons/si'
import { CgBmw } from "react-icons/cg";
import Button from '@/components/Button';
const jost=Jost({
    weight:['500'],
    subsets:['latin']
})
import { InfiniteSlider } from '@/components/ui/infinite-slider'
import { ProgressiveBlur } from '@/components/ui//progressive-blur'
const PopularCompany = () => {
  return (
    // <div className='w-full flex items-center justify-center p-5 bg-[#f9fafb] '>
    // <div className='w-full flex flex-col space-y-8 max-w-screen-lg  '>
    // <div className={`${jost.className} text-[#32aa27]  text-3xl md:text-4xl`}>Popular Company</div>
    // <div className='w-full grid grid-cols-3 lg:grid-cols-6 gap-x-4 gap-y-6 items-center justify-center'>
    //     <div className='flex flex-col items-center hover:cursor-pointer justify-center hover:text-red-600 duration-500 border-b border-white hover:border-red-300  '><SiHonda size={25} /> <span className={`${jost.className}`}>HONDA</span></div>
    //     <div className='flex flex-col items-center hover:cursor-pointer justify-center hover:text-red-600 duration-500 border-b border-white hover:border-red-300 '><SiYamahacorporation size={25}  /> <span className={`${jost.className}`}>YAMAHA</span></div>
    //     <div className='flex flex-col items-center  hover:cursor-pointer justify-center hover:text-red-600 duration-500 border-b border-white hover:border-red-300 '><SiSuzuki  size={25} /> <span className={`${jost.className}`}>SUZUKI</span></div>
    //     <div className='flex flex-col items-center  hover:cursor-pointer justify-center hover:text-red-600 duration-500 border-b border-white hover:border-red-300 '><CgBmw  size={25} /> <span className={`${jost.className}`}>BMW</span></div>
    //     <div className='flex flex-col items-center  hover:cursor-pointer justify-center hover:text-red-600 duration-500 border-b border-white hover:border-red-300 '><SiKtm  size={25} /> <span className={`${jost.className}`}>KTM</span></div>
    //     <div className='flex flex-col items-center  hover:cursor-pointer justify-center hover:text-red-600 duration-500 border-b border-white hover:border-red-300 '><SiDucati  size={25} /> <span className={`${jost.className}`}>DUCATI</span></div>
    // </div>
    // </div>
    // </div>
    <section className="bg-background overflow-hidden py-16">
            <div className="group relative m-auto max-w-7xl px-6">
                <div className="flex flex-col items-center md:flex-row">
                    <div className="md:max-w-44 md:border-r md:pr-6">
                        <p className="text-end text-sm">Powering the best teams</p>
                    </div>
                    <div className="relative py-6 md:w-[calc(100%-11rem)]">
                        <InfiniteSlider
                            speedOnHover={20}
                            speed={40}
                            gap={112}>
                            <div className="flex">
                                <img
                                    className="mx-auto h-5 w-fit dark:invert"
                                    src="https://html.tailus.io/blocks/customers/nvidia.svg"
                                    alt="Nvidia Logo"
                                    height="20"
                                    width="auto"
                                />
                            </div>

                            <div className="flex">
                                <img
                                    className="mx-auto h-4 w-fit dark:invert"
                                    src="https://html.tailus.io/blocks/customers/column.svg"
                                    alt="Column Logo"
                                    height="16"
                                    width="auto"
                                />
                            </div>
                            <div className="flex">
                                <img
                                    className="mx-auto h-4 w-fit dark:invert"
                                    src="https://html.tailus.io/blocks/customers/github.svg"
                                    alt="GitHub Logo"
                                    height="16"
                                    width="auto"
                                />
                            </div>
                            <div className="flex">
                                <img
                                    className="mx-auto h-5 w-fit dark:invert"
                                    src="https://html.tailus.io/blocks/customers/nike.svg"
                                    alt="Nike Logo"
                                    height="20"
                                    width="auto"
                                />
                            </div>
                            <div className="flex">
                                <img
                                    className="mx-auto h-5 w-fit dark:invert"
                                    src="https://html.tailus.io/blocks/customers/lemonsqueezy.svg"
                                    alt="Lemon Squeezy Logo"
                                    height="20"
                                    width="auto"
                                />
                            </div>
                            <div className="flex">
                                <img
                                    className="mx-auto h-4 w-fit dark:invert"
                                    src="https://html.tailus.io/blocks/customers/laravel.svg"
                                    alt="Laravel Logo"
                                    height="16"
                                    width="auto"
                                />
                            </div>
                            <div className="flex">
                                <img
                                    className="mx-auto h-7 w-fit dark:invert"
                                    src="https://html.tailus.io/blocks/customers/lilly.svg"
                                    alt="Lilly Logo"
                                    height="28"
                                    width="auto"
                                />
                            </div>

                            <div className="flex">
                                <img
                                    className="mx-auto h-6 w-fit dark:invert"
                                    src="https://html.tailus.io/blocks/customers/openai.svg"
                                    alt="OpenAI Logo"
                                    height="24"
                                    width="auto"
                                />
                            </div>
                        </InfiniteSlider>

                        <div className="bg-linear-to-r from-background absolute inset-y-0 left-0 w-20"></div>
                        <div className="bg-linear-to-l from-background absolute inset-y-0 right-0 w-20"></div>
                        <ProgressiveBlur
                            className="pointer-events-none absolute left-0 top-0 h-full w-20"
                            direction="left"
                            blurIntensity={1}
                        />
                        <ProgressiveBlur
                            className="pointer-events-none absolute right-0 top-0 h-full w-20"
                            direction="right"
                            blurIntensity={1}
                        />
                    </div>
                </div>
            </div>
        </section>
  )
}

export default PopularCompany


// import { InfiniteSlider } from '@/components/motion-primitives/infinite-slider'
// import { ProgressiveBlur } from '@/components/motion-primitives/progressive-blur'

// export default function LogoCloud() {
//     return (
        
//     )
// }
