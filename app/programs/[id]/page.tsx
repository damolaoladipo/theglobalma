import { Suspense } from "react";
import * as Icons from "lucide-react";
import React from "react";
import { Button } from "@/components/ui/button";
import { ProgramsData } from "@/_data/programs";
import { TextEffect } from "@/components/ui/text-effect";
import Image from "next/image";
import { AnimatedGroup } from "@/components/ui/animated-group";
import { Transition } from "motion/react";
import { Metadata, ResolvingMetadata } from "next";

type ParamsType = {
  params: {
    id: string;
  };
};

export async function generateMetadata(
  { params }: ParamsType,
  _parent: ResolvingMetadata
): Promise<Metadata> {
  
  const { id } = await params;

  // Optional: pull data from your ProgramsData array
  const program = ProgramsData.find((p) => p.id === id);

  return {
    title: program
      ? `${program.heading} | The Global MA`
      : `${id} | The Global MA`,
    description: program
      ? program.subheading
      : `Learn more about the ${id} program at The Global MA.`,
  };
}

const springTransition: Transition = {
  type: "spring",
  bounce: 0.3,
  duration: 1.5,
};

const transitionVariants = {
  item: {
    hidden: {
      opacity: 0,
      filter: "blur(12px)",
      y: 12,
    },
    visible: {
      opacity: 1,
      filter: "blur(0px)",
      y: 0,
      transition: springTransition,
    },
  },
};

function ProgramComponent({ id }: { id: string }) {
  const program = ProgramsData.find((p) => p.id === id);

  if (!program) {
    return <p className="p-6 text-center">Program not found</p>;
  }

  return (
    <section className="py-16 md:py-32">
      <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-12">
        {/* Heading + Subheading + Button */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between md:gap-x-12">
          <div className="flex-1 items-start space-y-6">
            <TextEffect
              preset="fade-in-blur"
              speedSegment={0.3}
              as="h1"
              className="mt-6 max-w-1xl text-left text-4xl font-medium md:text-5xl"
            >
              {program.heading}
            </TextEffect>

            <TextEffect
              per="line"
              preset="fade-in-blur"
              speedSegment={0.3}
              delay={0.5}
              as="p"
              className="max-w-1xl mt-4 text-left text-lg text-pretty"
            >
              {program.subheading}
            </TextEffect>

            <AnimatedGroup
              variants={{
                container: {
                  visible: {
                    transition: {
                      staggerChildren: 0.05,
                      delayChildren: 0.75,
                    },
                  },
                },
                ...transitionVariants,
              }}
              className="mt-8 flex items-center gap-2"
            >
              <div
                key={program.button1.id}
                className="group flex flex-1 rounded-[calc(var(--radius-sm)+0.125rem)]"
              >
                <Button
                  asChild
                  size="lg"
                  className="relative flex h-11 flex-1 items-center justify-center overflow-hidden rounded-sm px-5 text-base transition-colors duration-300 hover:text-white"
                >
                  <a href={program.button1.href}>
                    <span className="relative z-10 flex items-center gap-3 text-nowrap transition-all duration-300 group-hover:translate-x-1">
                      {program.button1.text}
                      <Icons.ArrowUpRight className="transition-transform duration-300 group-hover:rotate-45" />
                    </span>

                    <div className="absolute inset-y-0 left-0 h-full w-full -translate-x-full bg-gradient-to-r from-[var(--color-green)] to-[var(--color-orange)] transition-transform duration-300 group-hover:translate-x-0"></div>
                  </a>
                </Button>
              </div>

              <div className="group flex flex-1 rounded-[calc(var(--radius-sm)+0.125rem)]">
                <Button
                  key={program.button2?.id}
                  asChild
                  size="lg"
                  variant="outline"
                  className="bg-background relative flex h-11 flex-1 items-center justify-center overflow-hidden rounded-sm px-5 text-base transition-colors duration-300 hover:text-white"
                >
                  <a href={program.button2?.href}>
                    <span className="relative z-10 flex items-center gap-3 text-nowrap transition-all duration-300 group-hover:translate-x-1">
                      {program.button2?.text}
                      <Icons.ArrowUpRight className="transition-transform duration-300 group-hover:rotate-45" />
                    </span>

                    <div className="absolute inset-y-0 left-0 h-full w-full -translate-x-full bg-gradient-to-r from-[var(--color-green)] to-[var(--color-orange)] transition-transform duration-300 group-hover:translate-x-0"></div>
                  </a>
                </Button>
              </div>
            </AnimatedGroup>
          </div>
        </div>

        {/* Dynamic Features */}
        <div className="relative mx-auto grid grid-cols-2 gap-x-3 gap-y-6 sm:gap-8 lg:grid-cols-4">
          {program.features.map((feature) => {
            const Icon =
              (Icons as unknown as Record<string, React.ElementType>)[
                feature.icon
              ] || Icons.Zap;

            return (
              <div key={feature.id} className="space-y-3">
                <div className="flex items-center gap-2">
                  <Icon className="size-4" />
                  <h3 className="text-sm font-medium">{feature.title}</h3>
                </div>
                <p className="text-muted-foreground text-sm">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Program image */}
        <Image
          className="rounded-lg grayscale"
          src={program.image.src}
          alt={program.image.alt}
          width={program.image.width}
          height={program.image.height}
          loading="lazy"
        />
      </div>
    </section>
  );
}

export default async function Program({ params }: { params: { id: string } }) {

  const { id } = await params

  return (
    <Suspense fallback={<div>Loading program details...</div>}>
      <ProgramComponent id={id} />
    </Suspense>
  );
}
