
import { heroData } from '@/_data/hero-data';
import { Button } from '@/components/ui/button';
import { ArrowUpRight } from 'lucide-react';


export default function CallToAction(){
    return (
        <section className="bg-primary">
            {/* Reduced horizontal padding (px-60) for a better mobile-first layout. 
                Consider using responsive classes like px-4 sm:px-10 lg:px-20. */}
            <div className="mx-auto px-4 sm:px-10 lg:px-20 rounded-[2rem] border py-16">
                {/* The text-center class already handles horizontal centering for block elements and text. */}
                <div className="text-center"> 
                    <h2 className="text-title text-balance text-4xl font-semibold lg:text-5xl">Got a problem worth solving?</h2>
                    <p className="text-body mt-4 lg:px-30">We&apos;re building a bridge from curiosity to innovation, from young potential real-world impact.</p>

                    {/* This container ensures the buttons (or button) are centered */}
                    <div className="mt-12 flex items-center justify-center"> 
                        
                        
                        {/* If you had multiple buttons, the outer flex-wrap and gap-4 would center them as a group. */}
                        <div className="group rounded-[calc(var(--radius-sm)+0.125rem)]">
                            <Button
                                asChild
                                size="lg"
                                variant={"secondary"}
                                // Removed flex h-11 flex-1 to allow the button to size based on content.
                                className="relative flex h-11 items-center justify-center overflow-hidden rounded-sm px-5 text-base transition-colors duration-300 hover:text-white"
                            >
                                <a href={heroData.button2.href}>
                                    <span className="relative z-10 flex items-center gap-3 text-nowrap transition-all duration-300 group-hover:translate-x-1">
                                        {heroData.button2.text}
                                        <ArrowUpRight className="transition-transform duration-300 group-hover:rotate-45" />
                                    </span>
                                    <div className="absolute inset-y-0 left-0 h-full w-full -translate-x-full transition-transform duration-300 group-hover:translate-x-0 bg-gradient-to-r from-[var(--color-green)] to-[var(--color-orange)]"></div>
                                </a>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}