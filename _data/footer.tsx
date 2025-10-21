import { InstagramIcon, LinkedInIcon, XIcon, YouTubeIcon } from "@/components/shared/social-icons";

export const footerData = {
  brand: {
    name: "The Global MA",
    bio: "The Global MA. Where innovation meets impact. Your journey to greatness begins here!",
    address: "",
    telephone: "",
    email: "Email: hello@theglobalma.com",
    buitBy: "Made with ❤️ by Damola",
    copyright: ". All rights reserved.",
    ownedBy: "The Global MA",
  },
  socialLinks: [
    {
      href: "https://www.instagram.com/theglobalma",
      label: "Instagram",
      icon: InstagramIcon,
    },
    {
      href: "https://www.youtube.com/theglobalma",
      label: "YouTube",
      icon: YouTubeIcon,
    },
    {
      href: "https://www.linkedin.com/company/theglobalma",
      label: "LinkedIn",
      icon: LinkedInIcon,
    },
    {
      href: "https://x.com/theglobalma",
      label: "X",
      icon: XIcon,
    },
  ],
    programs: {
    group: "Programs",
    items: [
      { href: "/programs/aina", label: "Project AINA" },
      { href: "/programs/bridgit-accelerator", label: "Bridgit Accelerator" },
      { href: "/programs/instructional-design-bootcamp", label: "Instructional Design" },
    ],
  },
  about: {
    group: "About",
    items: [
      { href: "/about-us", label: "About Us" },
      { href: "/programs", label: "Programs" },
      { href: "/contact", label: "Contact" },
    ],
  }
    
};