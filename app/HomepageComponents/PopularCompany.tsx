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

    <section className="bg-background overflow-hidden py-16">
            <div className="group relative m-auto max-w-7xl px-6">
                <div className="flex flex-col items-center md:flex-row">
                    <div className="md:max-w-44 md:border-r md:pr-6">
                        <p className="text-end text-sm">Best Companies</p>
                    </div>
                    <div className="relative py-6 md:w-[calc(100%-11rem)]">
                        <InfiniteSlider
                            speedOnHover={20}
                            speed={40}
                            gap={112}>
                            <div className="flex">
                            <SiHonda size={40} />
                            </div>

                            <div className="flex">
                            <SiYamahacorporation size={40}  />
                            </div>
                            <div className="flex">
                            <SiSuzuki  size={40} /> 
                            </div>
                            <div className="flex">
                            <CgBmw  size={40} />
                            </div>
                            <div className="flex">
                            <SiKtm  size={40} />
                            </div>
                            <div className="flex">
                            <SiDucati  size={40} /> 
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
