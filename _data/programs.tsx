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
      src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1400&h=1400&fit=crop",
      alt: "AINA AI-powered government procurement system dashboard showing vendor analytics and tender matching",
      height: 1400,
      width: 1400,
    },
    button1: {
      id: "01",
      href: "/learn-more",
      text: "Learn More",
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
        id: "vendor-onboarding",
        title: "Vendor Onboarding",
        description:
          "Streamlined AI-powered vendor registration and verification system that reduces onboarding time by 70% and ensures compliance with procurement standards.",
        icon: "Users",
      },
      {
        id: "tender-matching",
        title: "Smart Tender Matching",
        description:
          "Advanced machine learning algorithms that automatically match government tenders with qualified vendors based on capabilities, past performance, and compliance history.",
        icon: "Target",
      },
      {
        id: "fraud-detection",
        title: "Fraud Detection",
        description:
          "Real-time AI monitoring system that identifies suspicious procurement patterns, duplicate submissions, and potential collusion to ensure transparent and fair processes.",
        icon: "Shield",
      },
      {
        id: "data-visualization",
        title: "Procurement Analytics",
        description:
          "Comprehensive dashboards and visualizations that provide real-time insights into procurement outcomes, vendor performance, and spending patterns for better decision-making.",
        icon: "BarChart3",
      },
    ],
  },
  {
    id: "bridgit-accelerator",
    heading: "Bridgit Accelerator",
    subheading:
      "BridgIT is a 6-week immersive program designed to prepare high schoolers for the IT market. The program is a community project that aims to provide practical training to students in the fields of UI/UX design and Coding. By providing hands-on projects and assignments, experienced instructors, and real-world scenarios, BridgIT will help students develop the skills and knowledge needed to excel in these in-demand careers.",
    image: {
      src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1400&h=1400&fit=crop",
      alt: "Bridgit Accelerator students learning UI/UX design and coding in a modern classroom setting",
      height: 1400,
      width: 1400,
    },

    button1: {
      id: "01",
      href: "/learn-more",
      text: "Learn More",
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
        id: "ui-ux-design",
        title: "UI/UX Design",
        description:
          "Comprehensive training in user interface and user experience design principles, prototyping tools, and design thinking methodologies for creating intuitive digital products.",
        icon: "Palette",
      },
      {
        id: "coding-fundamentals",
        title: "Coding Fundamentals",
        description:
          "Hands-on programming education covering modern web technologies, version control, debugging techniques, and best practices for clean, maintainable code.",
        icon: "Code",
      },
      {
        id: "real-world-projects",
        title: "Real-World Projects",
        description:
          "Practical assignments and capstone projects that simulate real industry scenarios, helping students build a professional portfolio and gain practical experience.",
        icon: "Briefcase",
      },
      {
        id: "career-readiness",
        title: "Career Readiness",
        description:
          "Professional development workshops, resume building, interview preparation, and networking opportunities to prepare students for successful tech careers.",
        icon: "Rocket",
      },
    ],
  },
  {
    id: "instructional-design-bootcamp",
    heading: "Instructional Design Beginner Bootcamp",
    subheading:
      "The ID Beginner Bootcamp is a hands-on program designed to kickstart your journey into the exciting world of instructional design! Whether you're new to the field or looking to enhance your skills, this program is perfect for beginners eager to dive into instructional design. Get a handle of the full Instructional Design process and learn how to create high-impact eLearning courses.",
    image: {
      src: "/items/instruct.png",
      alt: "Instructional Design Beginner Bootcamp - hands-on learning program for aspiring instructional designers",
      height: 612,
      width: 1206,
    },
    button1: {
      id: "01",
      href: "https://www.thearkademy.com/idbeginnerbootcamp",
      text: "Become an Instructional Designer",
      variant: "default" as const,
    },
    button2: {
      id: "02",
      href: "/download",
      text: "Download Program Guide",
      variant: "glow" as const,
      icon: "Arrow",
    },
    features: [
      {
        id: "full-id-process",
        title: "Full ID Process",
        description:
          "Get a handle of the full Instructional Design process with comprehensive training covering analysis, design, development, implementation, and evaluation phases.",
        icon: "BookOpen",
      },
      {
        id: "hands-on-practice",
        title: "Hands-on Practice",
        description:
          "Practice with scenarios, assessments and assignments that mirror real-world instructional design challenges and workplace situations.",
        icon: "Target",
      },
      {
        id: "elearning-creation",
        title: "eLearning Course Creation",
        description:
          "Learn how to create a high-impact eLearning course using industry-standard tools and methodologies for maximum learner engagement and retention.",
        icon: "Monitor",
      },
      {
        id: "expert-guidance",
        title: "Expert Guidance",
        description:
          "Get step-by-step expert guidance & personalized feedback from experienced instructional designers throughout your learning journey.",
        icon: "Users",
      },
      {
        id: "portfolio-building",
        title: "Portfolio Development",
        description:
          "Create an effective Instructional Design portfolio showcasing your skills and projects to potential employers and clients.",
        icon: "Briefcase",
      },
      {
        id: "continuous-support",
        title: "Instructional Design Lab",
        description:
          "Join the Instructional Design Lab for continuous support, networking opportunities, and ongoing professional development.",
        icon: "Lightbulb",
      },
    ],
  },
  {
    id: "community-outreach",
    heading: "Community Outreach Program",
    subheading:
      "A grassroots initiative focused on democratizing technology education and digital literacy across underserved communities. Our Community Outreach Program brings technology training, mentorship, and resources directly to local communities, schools, and organizations. We believe in the power of technology to transform lives and create opportunities for economic empowerment and social mobility.",
    image: {
      src: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=1400&h=1400&fit=crop",
      alt: "Community Outreach Program volunteers teaching digital literacy to diverse community members",
      height: 1400,
      width: 1400,
    },
    button1: {
      id: "01",
      href: "/apply-now",
      text: "Volunteer Now",
      variant: "default" as const,
    },
    button2: {
      id: "02",
      href: "/download",
      text: "Impact Report",
      variant: "glow" as const,
      icon: "Arrow",
    },
    features: [
      {
        id: "digital-literacy",
        title: "Digital Literacy",
        description:
          "Comprehensive digital literacy programs teaching basic computer skills, internet navigation, online safety, and digital communication tools to bridge the digital divide in underserved communities.",
        icon: "BookOpen",
      },
      {
        id: "youth-mentorship",
        title: "Youth Mentorship",
        description:
          "One-on-one and group mentorship programs connecting young people with tech professionals, providing career guidance, skill development, and networking opportunities for future success.",
        icon: "Users",
      },
      {
        id: "mobile-labs",
        title: "Mobile Tech Labs",
        description:
          "Portable technology labs that travel to remote communities, bringing hands-on tech education, coding workshops, and digital tools directly to areas with limited access to technology resources.",
        icon: "Truck",
      },
      {
        id: "community-projects",
        title: "Community Projects",
        description:
          "Collaborative technology projects that address local community needs, from building websites for small businesses to creating apps that solve community-specific challenges and promote civic engagement.",
        icon: "Heart",
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
      title: "The AINA Project",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1400&h=1400&fit=crop",
      description:
        "AINA (AI for National Access) is a GovTech innovation built to reimagine how public procurement operates in emerging economies. Through a suite of artificial intelligence tools, AINA helps governments onboard vendors, match tenders, detect fraud, and visualize procurement outcomes in real time. The goal: smart, fair, and inclusive procurement ecosystems.",
      cta: {
        label: "Learn More",
        link: "/programs/aina",
      },
    },
    {
      id: "bridgit-accelerator",
      title: "Bridgit Accelerator",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1400&h=1400&fit=crop",
      description:
        "BridgIT is a 6-week immersive program designed to prepare high schoolers for the IT market. The program is a community project that aims to provide practical training to students in the fields of UI/UX design and Coding. By providing hands-on projects and assignments, experienced instructors, and real-world scenarios, BridgIT will help students develop the skills and knowledge needed to excel in these in-demand careers.",
      cta: {
        label: "Learn more",
        link: "/programs/bridgit-accelerator",
      },
    },
    {
      id: "instructional-design-bootcamp",
      title: "Instructional Design Beginner Bootcamp",
      image: "/items/instruct.png",
      description:
        "The ID Beginner Bootcamp is a hands-on program designed to kickstart your journey into the exciting world of instructional design! Whether you're new to the field or looking to enhance your skills, this program is perfect for beginners eager to dive into instructional design.",
      cta: {
        label: "Join Bootcamp",
        link: "https://www.thearkademy.com/idbeginnerbootcamp",
      },
    },
    {
      id: "community-outreach",
      title: "Community Outreach Program",
      image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=1400&h=1400&fit=crop",
      description:
        "A grassroots initiative focused on democratizing technology education and digital literacy across underserved communities. Our Community Outreach Program brings technology training, mentorship, and resources directly to local communities, schools, and organizations.",
      cta: {
        label: "Volunteer",
        link: "/programs/community-outreach",
      },
    },
  ],
};
