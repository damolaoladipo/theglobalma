import { heroData } from "@/_data/hero-data"
import { Button } from "@/components/ui/button"
import { ArrowUpRight } from "lucide-react"

export default function CallToAction() {
    return (
        <section className="bg-primary text-primary-foreground">
            <div className="mx-auto px-4 sm:px-10 lg:px-20 rounded-2xl border border-primary-foreground/20 py-16">
                <div className="text-center">
                    <h2 className="text-4xl font-semibold lg:text-5xl">
                        Got a problem worth solving?
                    </h2>

                    <p className="mt-4 text-primary-foreground/80 lg:px-30">
                        We are building a bridge from curiosity to innovation, from young potential to real world impact.
                    </p>

                    <div className="mt-12 flex items-center justify-center">
                        <div className="group rounded-md">
                            <Button
                                asChild
                                size="lg"
                                variant="secondary"
                                className="relative h-11 overflow-hidden px-5 text-base bg-white text-primary hover:text-white"
                            >
                                <a href={heroData.button2.href}>
                                    <span className="relative z-10 flex items-center gap-3 transition-all duration-300 group-hover:translate-x-1">
                                        {heroData.button2.text}
                                        <ArrowUpRight className="transition-transform duration-300 group-hover:rotate-45" />
                                    </span>

                                    {/* Gradient hover */}
                                    <div className="absolute inset-0 -z-10 translate-x-[-100%] bg-gradient-to-r from-green-500 to-orange-500 transition-transform duration-300 group-hover:translate-x-0"></div>
                                </a>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
