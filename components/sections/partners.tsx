import { ChevronRight } from "lucide-react"
import Link from "next/link"

const Partners = () => {

    return (
                        
        <section className="bg-neutral-100 dark:bg-background pb-8 mt-24 pt-8">
            <div className="group relative m-auto max-w-6xl px-6">
                <div className="absolute inset-0 z-10 flex scale-95 items-center justify-center opacity-0 duration-500 group-hover:scale-100 group-hover:opacity-100">
                    <Link
                        href="/"
                        className="block text-sm duration-150 hover:opacity-75">
                        <span>Our Partners</span>

                        <ChevronRight className="ml-1 inline-block size-3" />
                    </Link>
                </div>

                <div className="group-hover:blur-xs mx-auto mt-8 grid max-w-6xl grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-6 transition-all duration-500 group-hover:opacity-50 sm:gap-x-12 sm:gap-y-8 md:gap-x-16 md:gap-y-14">
                    <div className="flex">
                        <img
                            className="mx-auto h-16 w-auto max-w-[200px] sm:h-20 sm:max-w-[300px] md:max-w-[400px] dark:invert"
                            src="blocks/the-ark.svg"
                            alt="Nvidia Logo"
                            height="200"
                            width="200"
                        />
                    </div>

                    <div className="flex">
                        <img
                            className="mx-auto h-16 w-auto max-w-[200px] sm:h-20 sm:max-w-[300px] md:max-w-[400px] dark:invert"
                            src="blocks/alberta.svg"
                            alt="Laravel Logo"
                            height="200"
                            width="200"
                        />
                    </div>    

                    <div className="flex">
                        <img
                            className="mx-auto h-16 w-auto max-w-[200px] sm:h-20 sm:max-w-[300px] md:max-w-[400px] dark:invert"
                            src="blocks/consulting.svg"
                            alt="Column Logo"
                            height="200"
                            width="200"
                        />
                    </div>
                    <div className="flex">
                        <img
                            className="mx-auto h-16 w-auto max-w-[200px] sm:h-20 sm:max-w-[300px] md:max-w-[400px] dark:invert"
                            src="blocks/crown.svg"
                            alt="GitHub Logo"
                            height="200"
                            width="200"
                        />
                    </div>
                    <div className="flex">
                        <img
                            className="mx-auto h-16 w-auto max-w-[200px] sm:h-20 sm:max-w-[300px] md:max-w-[400px] dark:invert"
                            src="blocks/i-techies.svg"
                            alt="Nike Logo"
                            height="200"
                            width="200"
                        />
                    </div>
                    <div className="flex">
                        <img
                            className="mx-auto h-16 w-auto max-w-[200px] sm:h-20 sm:max-w-[300px] md:max-w-[400px] dark:invert"
                            src="blocks/bipoc.svg"
                            alt="Lemon Squeezy Logo"
                            height="200"
                            width="200"
                        />
                    </div>
                                  
                </div> 

            </div>
        </section>

    )
}

export default Partners