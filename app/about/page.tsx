import CallToAction from "@/components/sections/cta";
import { Users, MapPin, Target, Heart } from "lucide-react";
import Image from "next/image";
import { AboutUsData } from "@/_data/about-us";

export default function About() {
  return (
    <>
      <div className="max-w-5xl mx-auto px-6 py-16 md:py-32">
        <div className="grid gap-12 md:grid-cols-2 md:gap-16">
          {/* Left side with image */}
          <div className="relative">
            <div className="aspect-[4/3] overflow-hidden rounded-lg">
              <Image
                src={AboutUsData.image.src}
                alt={AboutUsData.image.alt}
                className="rounded-lg object-cover"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>

          {/* Right side with content */}
          <div className="flex flex-col justify-center space-y-6">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              {AboutUsData.heading}
            </h2>
            <div className="space-y-4">
              <p className="text-base text-muted-foreground sm:text-lg">
                {AboutUsData.subheading}
              </p>
              <p className="text-base text-muted-foreground sm:text-lg">
                {AboutUsData.description}
              </p>

              <div className="rounded-lg bg-accent p-6">
                {/* Stats */}
                <div className="grid grid-cols-2 gap-4 py-4">
                  <div className="flex items-center space-x-2">
                    <Users className="size-5 text-primary" />
                    <span className="text-sm font-medium">
                      {AboutUsData.stats.reach}
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Target className="size-5 text-primary" />
                    <span className="text-sm font-medium">{AboutUsData.stats.projects}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin className="size-5 text-primary" />
                    <span className="text-sm font-medium">{AboutUsData.stats.communities}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Heart className="size-5 text-primary" />
                    <span className="text-sm font-medium">
                      {AboutUsData.stats.mentorship}
                    </span>
                  </div>
                </div>

                {/* Contact Info */}
                <div className="py-4 border-t border-border">
                  <p className="text-sm text-muted-foreground mb-2">
                    <strong>Email:</strong> {AboutUsData.contact.email}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {AboutUsData.contact.tagline}
                  </p>
                </div>

                {/* Social Proof */}
                <blockquote className="border-l-2 border-primary pl-4">
                  <p className="text-sm italic text-muted-foreground sm:text-base">
                    {AboutUsData.testimonial.quote}
                  </p>
                  <footer className="mt-2 text-sm font-medium text-foreground">
                    — {AboutUsData.testimonial.author}, {AboutUsData.testimonial.role}
                  </footer>
                </blockquote>

              </div>
            </div>
          </div>
        </div>

      </div>

      <CallToAction />
    </>
  );
}
