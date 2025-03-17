import { Jost } from "next/font/google"

const jost=Jost({
    weight:['500'],
    subsets:['latin']
})

export default function Status() {
    return (

            <div className="w-full  mx-auto max-w-screen-xl space-y-8 px-6 md:space-y-16">
                <div className="w-full flex flex-col items-start justify-start space-y-4">
                    <h2 className={`${jost.className} text-black/80 text-3xl md:text-4xl`}>Bike-Hub in Numbers</h2>
                    <p className={`${jost.className} text-[#828282]`}>Connecting riders with the best motorcycles and gear worldwide</p>
                </div>

                <div className="w-full grid gap-6 *:text-center sm:grid-cols-2 lg:grid-cols-4">
                    <div className="rounded-(--radius) space-y-4 border py-12">
                        <div className={`${jost.className} text-5xl font-bold`}>+10,000</div>
                        <p className={`${jost.className} text-[#828282]`}>Motorcycles Listed</p>
                    </div>
                    <div className="rounded-(--radius) space-y-4 border py-12">
                        <div className={`${jost.className} text-5xl font-bold`}>85%</div>
                        <p  className={`${jost.className} text-[#828282]`}>Customer Satisfaction Rate</p>
                    </div>
                    <div className="rounded-(--radius) space-y-4 border py-12">
                        <div className={`${jost.className} text-5xl font-bold`}>+5,000</div>
                        <p className={`${jost.className} text-[#828282]`}>Accessories & Gear Available</p>
                    </div>
                    <div className="rounded-(--radius) space-y-4 border py-12">
                        <div  className={`${jost.className} text-5xl font-bold`}>2015</div>
                        <p className={`${jost.className} text-[#828282]`}>Trusted by Riders for Years</p>
                    </div>
                </div>
            </div>
    )
}
