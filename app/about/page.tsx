import CallToAction from "@/components/sections/cta";
import { Button } from "@/components/ui/button";
import { Star, Users, Award, ThumbsUp } from "lucide-react";
import Image from "next/image";

export default function About() {
  return (
    <>
      <div className="max-w-5xl mx-auto px-6 py-16 md:py-32">
        <div className="grid gap-12 md:grid-cols-2 md:gap-16">
          {/* Left side with image */}
          <div className="relative">
            <div className="aspect-[4/3] overflow-hidden rounded-lg">
              <Image
                src="/items/innovation.png"
                alt="Students learning technology online"
                className="rounded-lg object-cover"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>

          {/* Right side with content */}
          <div className="flex flex-col justify-center space-y-6">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              About Us
            </h2>
            <div className="space-y-4">
              <p className="text-base text-muted-foreground sm:text-lg">
                We started in 2015 with one mission — to make world-class
                technology education accessible to everyone. Our platform helps
                learners gain real skills in software engineering, design, data,
                and AI through hands-on projects, mentorship, and community
                support. 
              </p>
              <p className="text-base text-muted-foreground sm:text-lg">
                Over the years, we’ve empowered thousands of learners to build
                tech careers, launch startups, and contribute to the global
                developer ecosystem.
              </p>

              <div className="rounded-lg bg-accent p-6">
                {/* Stats */}
                <div className="grid grid-cols-2 gap-4 py-4">
                  <div className="flex items-center space-x-2">
                    <Users className="size-5 text-primary" />
                    <span className="text-sm font-medium">
                      50,000+ Learners
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Star className="size-5 text-primary" />
                    <span className="text-sm font-medium">4.9/5 Rated</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Award className="size-5 text-primary" />
                    <span className="text-sm font-medium">Top EdTech Award</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <ThumbsUp className="size-5 text-primary" />
                    <span className="text-sm font-medium">
                      97% Satisfaction
                    </span>
                  </div>
                </div>

                {/* Social Proof */}
                <blockquote className="border-l-2 border-primary pl-4">
                  <p className="text-sm italic text-muted-foreground sm:text-base">
                    This platform completely changed my career. I went from
                    learning to code at home to landing a full-time role as a
                    software engineer in less than a year!
                  </p>
                  <footer className="mt-2 text-sm font-medium text-foreground">
                    — Alex Chen, Graduate
                  </footer>
                </blockquote>

                <Button variant="default" size="lg" className="mt-4">
                  Start Learning Now
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <CallToAction />
    </>
  );
}
