"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface ValuesSectionProps {
  className?: string;
}

const items = [
  {
    title: "Vision",
    description:
      "To be a catalyst for innovative change, empowering people and communities to thrive through purpose-driven initiatives.",
  },
  {
    title: "Mission",
    description:
      "We connect ideas, people, and opportunities—designing programs, mentorship, and partnerships that translate potential into measurable impact.",
  },
  {
    title: "Core Values",
    description:
      "Integrity, Collaboration, Inclusion, Excellence, and Impact—guiding every relationship, decision, and outcome.",
  },
  {
    title: "Goals",
    description:
      "Scale programs, deepen community engagement, and build sustainable ecosystems that unlock growth for newcomers and entrepreneurs.",
  },
];

export default function ValuesSection({ className }: ValuesSectionProps) {
  return (
    <section className="bg-neutral-100 dark:bg-neutral-900">
      <div className={cn("mx-auto max-w-5xl px-6 py-16 md:py-24", className)}>
        <div className="mb-10 text-center">
        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Our Mission and Vision
        </h2>
        <p className="mt-3 text-base text-muted-foreground sm:text-lg">
          What drives our work and the outcomes we strive to achieve.
        </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {items.map((item) => (
            <Card key={item.title}>
              <CardHeader>
                <CardTitle className="text-xl">{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}


