export interface AboutUsData {
  heading: string;
  subheading: string;
  description: string;
  image: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  stats: {
    reach: string;
    projects: string;
    communities: string;
    mentorship: string;
  };
  achievements: {
    title: string;
    items: {
      title: string;
      description: string;
    }[];
  };
  contact: {
    email: string;
    tagline: string;
  };
  testimonial: {
    quote: string;
    author: string;
    role: string;
  };
  button: {
    id: string;
    text: string;
    href: string;
    variant: "default" | "outline" | "secondary";
  };
}

export const AboutUsData: AboutUsData = {
  heading: "Welcome to The Global MA.",
  subheading: "We believe innovation begins at the intersection of purpose, people, and possibility. This is the heartbeat of Michael Agbabiaka's journey, bringing together every program, project, and initiative shaping lives, businesses, and communities across Canada and beyond.",
  description: "The Global MA. Where innovation meets impact. Your journey to greatness begins here!",
  image: {
    src: "/blocks/thema.png",
    alt: "The Global MA - Innovation and Impact",
    width: 1248,
    height: 765,
  },
  stats: {
    reach: "2,000+ individuals",
    projects: "Cross-cultural networking events",
    communities: "Alberta, BC, Saskatchewan, Manitoba",
    mentorship: "Newcomer career readiness"
  },
  achievements: {
    title: "Key Achievements & Leadership",
    items: [
      {
        title: "Project Operations Lead",
        description: "Directed planning and execution for cross-cultural networking and entrepreneurial events funded by the Government of Canada, fostering collaboration and business growth across Western Canada."
      },
      {
        title: "DEI Leadership",
        description: "Served as Chair of the Diversity, Equity & Inclusion Subcommittee under the Heart of Our City Committee, City of Lethbridge Boards, Commissions & Committees—advancing inclusive urban development conversations."
      },
      {
        title: "Program Adjudication",
        description: "Selected as a panelist for the Deloitte-Funded Bursary Program within the CMF Alliance Mentorship Program, evaluating and supporting newcomer youth development initiatives."
      },
      {
        title: "BIPOC Community Engagement",
        description: "Designed and facilitated procurement and franchising sessions for the BIPOC Foundation Community, empowering entrepreneurs with resources for business expansion."
      },
      {
        title: "Mentorship & Program Design",
        description: "Led the program framework and curated mentorship sessions for the Alberta Newcomers Program—a consultative project supporting newcomer career readiness through the Crown Mentorship Foundation."
      },
      {
        title: "Speaking Engagement",
        description: "Delivered a keynote on Purpose and The Marketplace at a Purpose Workshop in Calgary, organized by The Arkademy, speaking to professionals from diverse fields on aligning personal purpose with marketplace influence."
      }
    ]
  },
  contact: {
    email: "hello@theglobalma.com",
    tagline: "Reach: Engaged 2,000+ individuals across communities in Alberta, British Columbia, Saskatchewan, and Manitoba through entrepreneurship, networking, and cultural integration initiatives."
  },
  testimonial: {
    quote: "This platform completely changed my career. I went from learning to code at home to landing a full-time role as a software engineer in less than a year!",
    author: "Participant",
    role: "Graduate"
  },
  button: {
    id: "01",
    text: "About",
    href: "/about",
    variant: "default" as const,
  },
}