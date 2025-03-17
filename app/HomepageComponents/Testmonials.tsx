import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

export default function Testimonials() {
    return (
        <section className="py-16 md:py-32">
            <div className="mx-auto max-w-6xl space-y-8 px-6 md:space-y-16">
                <div className="relative z-10 mx-auto max-w-xl space-y-6 text-center md:space-y-12">
                    <h2 className="text-4xl font-medium lg:text-5xl">Build by makers, loved by thousand developers</h2>
                    <p>Gemini is evolving to be more than just the models. It supports an entire to the APIs and platforms helping developers and businesses innovate.</p>
                </div>

                <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-rows-2">
                    <Card className="grid grid-rows-[auto_1fr] gap-8 sm:col-span-2 sm:p-6 lg:row-span-2">
                        <CardHeader>
                            <img className="h-6 w-fit dark:invert" src="https://html.tailus.io/blocks/customers/nike.svg" alt="Nike Logo" height="24" width="auto" />
                        </CardHeader>
                        <CardContent>
                            <blockquote className="grid h-full grid-rows-[1fr_auto] gap-6">
                                <p className="text-xl font-medium">Finding the perfect motorcycle was overwhelming until I discovered Bike-Hub. Their expert reviews and comparisons helped me choose between a sportbike and a cruiser. I finally got the Yamaha MT-07, and I love it! If you're looking for your next ride, I highly recommend Bike-Hub!</p>

                                <div className="grid grid-cols-[auto_1fr] items-center gap-3">
                                    <Avatar className="size-12">
                                        <AvatarImage src="https://tailus.io/images/reviews/shekinah.webp" alt="Shekinah Tshiokufila" height="400" width="400" loading="lazy" />
                                        <AvatarFallback>ST</AvatarFallback>
                                    </Avatar>

                                    <div>
                                        <cite className="text-sm font-medium">Shekinah Tshiokufila</cite>
                                    </div>
                                </div>
                            </blockquote>
                        </CardContent>
                    </Card>
                    <Card className="md:col-span-2">
                        <CardContent className="h-full pt-6">
                            <blockquote className="grid h-full grid-rows-[1fr_auto] gap-6">
                                <p className="text-xl font-medium">I love how Bike-Hub lists all the top motorcycle brands in one place. It saved me hours of research!</p>

                                <div className="grid grid-cols-[auto_1fr] items-center gap-3">
                                    <Avatar className="size-12">
                                        <AvatarImage src="https://tailus.io/images/reviews/jonathan.webp" alt="Jonathan Yombo" height="400" width="400" loading="lazy" />
                                        <AvatarFallback>JY</AvatarFallback>
                                    </Avatar>
                                    <div>
                                        <cite className="text-sm font-medium">Jonathan Yombo</cite>
                                       
                                    </div>
                                </div>
                            </blockquote>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardContent className="h-full pt-6">
                            <blockquote className="grid h-full grid-rows-[1fr_auto] gap-6">
                                <p>The comparison tool helped me pick between a sportbike and a cruiser. Now, I ride with confidence!</p>

                                <div className="grid items-center gap-3 [grid-template-columns:auto_1fr]">
                                    <Avatar className="size-12">
                                        <AvatarImage src="https://tailus.io/images/reviews/yucel.webp" alt="Yucel Faruksahan" height="400" width="400" loading="lazy" />
                                        <AvatarFallback>YF</AvatarFallback>
                                    </Avatar>
                                    <div>
                                        <cite className="text-sm font-medium">Yucel Faruksahan</cite>
                                        
                                    </div>
                                </div>
                            </blockquote>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardContent className="h-full pt-6">
                            <blockquote className="grid h-full grid-rows-[1fr_auto] gap-6">
                                <p>Bike-Hub not only helped me find my motorcycle but also the perfect riding jacket and gloves.!</p>

                                <div className="grid items-center gap-3 [grid-template-columns:auto_1fr]">
                                    <Avatar className="size-12">
                                        <AvatarImage src="https://tailus.io/images/reviews/yucel.webp" alt="Yucel Faruksahan" height="400" width="400" loading="lazy" />
                                        <AvatarFallback>YF</AvatarFallback>
                                    </Avatar>
                                    <div>
                                        <cite className="text-sm font-medium">Liam J.</cite>
                                        
                                    </div>
                                </div>
                            </blockquote>
                        </CardContent>
                    </Card>
                
                </div>
            </div>
        </section>
    )
}
