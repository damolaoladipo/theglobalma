import CallToAction from "@/components/sections/cta";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Globe, Twitter, Linkedin, Instagram, ArrowRight } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | The Global MA",
  description:
    "Get in touch with The Global MA team for partnerships, support, or general questions.",
  openGraph: {
    title: "Contact Us | The Global MA",
    description:
      "Connect with The Global MA team for partnerships, support, or inquiries.",
    url: "https://theglobalma.org/contact",
    siteName: "The Global MA",
    images: [
      {
        url: "/og/contact.png",
        width: 1200,
        height: 630,
        alt: "Contact The Global MA",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us | The Global MA",
    description:
      "Connect with The Global MA team for partnerships, support, or inquiries.",
    images: ["/og/contact.png"],
  },
};

const contactCards = [
  {
    id: "instagram",
    title: "Follow on Instagram",
    description:
      "Get inspired with visuals, updates, and stories from The Global MA.",
    icon: Instagram,
    href: "https://instagram.com/theglobalma",
    buttonText: "Visit Instagram",
  },
  {
    id: "community",
    title: "Send us an email",
    description:
      "Reach out to our team via email for questions, support, or partnerships.",
    icon: Globe,
    href: "mailto:hello@theglobalma.org",
    buttonText: "Send Email",
  },
  {
    id: "twitter",
    title: "Follow us on Twitter",
    description: "Stay updated on our latest programs, events, and insights.",
    icon: Twitter,
    href: "https://twitter.com/theglobalma",
    buttonText: "Visit Twitter",
  },
  {
    id: "linkedin",
    title: "Connect on LinkedIn",
    description:
      "Discover our professional updates, partnerships, and job opportunities.",
    icon: Linkedin,
    href: "https://linkedin.com/company/theglobalma",
    buttonText: "Visit LinkedIn",
  },
];

export default function Contact() {
  return (
    <>
      <div className="max-w-5xl mx-auto px-6 py-16">
        <div className="container mx-auto py-12">
          <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1fr,2fr]">
            <div>
              <h2 className="mb-4 text-3xl font-bold tracking-tight">
                Let&apos;s Connect
              </h2>
              <p className="text-muted-foreground">
                We&apos;re here to help and answer any question you might have.
                <br />
                We look forward to hearing from you.
              </p>
            </div>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-2">
              {contactCards.map((card) => {
                const Icon = card.icon;
                return (
                  <Card key={card.id} className="border-0 shadow-none">
                    <CardContent className="space-y-4 p-6 bg-accent rounded-md">
                      <div className="flex size-12 items-center justify-center rounded-full border-2 border-primary/30">
                        <Icon className="size-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="mb-2 text-lg font-semibold">
                          {card.title}
                        </h3>
                        <p className="mb-4 text-muted-foreground">
                          {card.description}
                        </p>
                        <Button
                          variant="link"
                          className="h-auto p-0 font-medium"
                          asChild
                        >
                          <a href={card.href} className="flex items-center">
                            {card.buttonText}
                            <ArrowRight className="ml-1 size-4" />
                          </a>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <CallToAction />
    </>
  );
}
