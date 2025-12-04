import { BookOpen, Target } from 'lucide-react'
import Image from 'next/image'
import { upcomingEventsData } from '../_data/upcoming-events'
import Link from 'next/link'

export default function UpcomingEvents() {
    const { badge, heading, description, features, cta, image } = upcomingEventsData
    return (
        <section className="py-16 md:py-32">
            <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-8">
                <div className="space-y-4">
                    <div className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                        <span className="relative flex h-2 w-2 mr-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                        </span>
                        {badge.text}
                    </div>
                    <h2 className="relative z-10 max-w-xl text-4xl font-medium lg:text-5xl">{heading}</h2>
                </div>
                
                <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-6">
                    <div className="relative space-y-4">
                        <p className="text-muted-foreground">
                            {description.primary}
                        </p>
                        <p className="text-muted-foreground">{description.secondary}</p>

                        <div className="grid grid-cols-2 gap-3 pt-6 sm:gap-4">
                            {features.map((feature, index) => {
                                const IconComponent = feature.icon === 'BookOpen' ? BookOpen : Target
                                return (
                                    <div key={index} className="space-y-3">
                                        <div className="flex items-center gap-2">
                                            <IconComponent className="size-4" />
                                            <h3 className="text-sm font-medium">{feature.title}</h3>
                                        </div>
                                        <p className="text-muted-foreground text-sm">{feature.description}</p>
                                    </div>
                                )
                            })}
                        </div>
                        
                        <div className="pt-6">

                            <Link href={cta.href} target="_blank" rel="noopener noreferrer">
                               <button className="inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 shadow-lg hover:shadow-xl">
                                {cta.text}
                            </button>
                            
                            </Link>
                         
                        </div>
                    </div>
                    <div className="relative mt-6 sm:mt-0">
                        <div className="bg-linear-to-b aspect-67/34 relative rounded-2xl from-zinc-300 to-transparent p-px dark:from-zinc-700">
                            <Image src={image.src} className="hidden rounded-[15px] dark:block" alt={`${image.alt} dark`} width={image.width} height={image.height} />
                            <Image src={image.src} className="rounded-[15px] shadow dark:hidden" alt={`${image.alt} light`} width={image.width} height={image.height} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
