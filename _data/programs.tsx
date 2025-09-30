// @/_data/programs.ts
export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: string; // we’ll map this to lucide icons dynamically
}

export interface Program {
  id: string;
  heading: string;
  subheading: string;
  image: {
    src: string;
    alt: string;
    width?: number;
    height?: number;
  };
  button1: {
    id: string;
    text: string;
    href: string;
    variant: "default" | "outline" | "secondary" | "glow";
  };
  button2?: {
    id: string;
    text: string;
    href: string;
    variant: "default" | "outline" | "secondary" | "glow";
    icon?: string;
  };

  features: Feature[];
}

export const ProgramsData: Program[] = [
  {
    id: "aina",
    heading: "The AINA Project",
    subheading:
      "AINA (AI for National Access) is a GovTech innovation built to reimagine how public procurement operates in emerging economies. Through a suite of artificial intelligence tools, AINA helps governments onboard vendors, match tenders, detect fraud, and visualize procurement outcomes in real time. The goal: smart, fair, and inclusive procurement ecosystems.",
    image: {
      src: "/items/innovation.png",
      alt: "Idea hub",
      height: 1400,
      width: 1400,
    },
    button1: {
      id: "01",
      href: "/apply-now",
      text: "Apply Now",
      variant: "default" as const,
    },
    button2: {
      id: "02",
      href: "/download",
      text: "Download Guide",
      variant: "glow" as const,
      icon: "Arrow",
    },
    features: [
      {
        id: "mentorship",
        title: "Mentorship",
        description:
          "Business incubation and coaching from Lagos Innovates’ experienced and seasoned mentors.",
        icon: "Lightbulb",
      },
      {
        id: "network",
        title: "Network",
        description:
          "Access to Lagos Innovates’ strong ecosystem of government, corporates, startups, and investors.",
        icon: "Network",
      },
      {
        id: "services",
        title: "Services",
        description:
          "Administrative support including legal, accounting, human resources, and more.",
        icon: "Briefcase",
      },
      {
        id: "funding",
        title: "Funding",
        description:
          "An opportunity to pitch for Lagos Innovates Workspace Vouchers for 6 or 12 months (valued between ₦120,000 – ₦1,800,000).",
        icon: "CreditCard",
      },
    ],
  },
  {
    id: "bridgit-accelerator",
    heading: "Bridgit Accelerator",
    subheading:
      "BridgIT is a 6-week immersive program designed to prepare high schoolers for the IT market. The program is a community project that aims to provide practical training to students in the fields of UI/UX design and Coding. By providing hands-on projects and assignments, experienced instructors, and real-world scenarios, BridgIT will help students develop the skills and knowledge needed to excel in these in-demand careers.",
    image: {
      src:  "/items/innovation.png",
      alt: "Idea hub",
      height: 1400,
      width: 1400,
    },

    button1: {
      id: "01",
      href: "/apply-now",
      text: "Apply Now",
      variant: "default" as const,
    },
    button2: {
      id: "02",
      href: "/download",
      text: "Download Guide",
      variant: "glow" as const,
      icon: "Arrow",
    },
    features: [
      {
        id: "access",
        title: "Access",
        description:
          "Covers up to 80% of course fees through the student loan program, making quality training affordable for aspiring tech talent.",
        icon: "BookOpen",
      },
      {
        id: "upskill",
        title: "Upskill",
        description:
          "Supports Lagos residents in gaining in-demand technology skills that improve employability and career growth.",
        icon: "GraduationCap",
      },
      {
        id: "support",
        title: "Support",
        description:
          "Backed by Lagos Innovates in partnership with Honeywell Group to build a formidable talent pipeline for the ecosystem.",
        icon: "Handshake",
      },
      {
        id: "impact",
        title: "Impact",
        description:
          "Focused on high-potential individuals such as founders, developers, and startup employees who can strengthen the Lagos tech ecosystem.",
        icon: "Users",
      },
    ],
  }
];

export const ProgramsSection = {
  heading: "Explore our programs",
  subheading:
    "Discover initiatives and opportunities crafted to support talents, startups, and innovation hubs.",
  items: [
    {
      id: "aina",
      title: "Ihe AINA Project",
      image: "/items/innovation.png",
      description:
        "AINA (AI for National Access) is a GovTech innovation built to reimagine how public procurement operates in emerging economies. Through a suite of artificial intelligence tools, AINA helps governments onboard vendors, match tenders, detect fraud, and visualize procurement outcomes in real time. The goal: smart, fair, and inclusive procurement ecosystems.",
      cta: {
        label: "Learn More",
        link: "programs/idea-hub",
      },
    },
    {
      id: "bridgit-accelerator",
      title: "Bridgit Accelerator",
      image: "/items/innovation.png",
      description:
        "BridgIT is a 6-week immersive program designed to prepare high schoolers for the IT market. The program is a community project that aims to provide practical training to students in the fields of UI/UX design and Coding. By providing hands-on projects and assignments, experienced instructors, and real-world scenarios, BridgIT will help students develop the skills and knowledge needed to excel in these in-demand careers.",
      cta: {
        label: "Apply now",
        link: "/programs/talent",
      },
    },
  ],
};
