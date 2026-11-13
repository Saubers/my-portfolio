import {
  LucideIcon,
  Truck,
  CreditCard,
  Sprout,
  Plane,
  HeartPulse,
  Boxes,
  ShoppingBag,
} from "lucide-react";

// Shape of a single portfolio project. Visual identity comes primarily from
// an abstract category icon, but a project can optionally provide
// screenshots to show inside a <ProjectCarousel />.
export interface Project {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  achievements: string[];
  technologies: string[];
  // Optional links: proprietary client work rarely has a public repo or
  // demo, so these are left undefined when not available and the related
  // action button is rendered in a disabled state.
  githubUrl?: string;
  liveUrl?: string;
  // Optional screenshots for this project. Store the files in
  // `public/assets/projects/<id>/` and list their public paths here, e.g.
  // `/assets/projects/root-track/1.webp`. Omit this field entirely (or leave
  // it as an empty array) for projects with no screenshots — the carousel
  // will simply not render for that card. Mobile (portrait) and desktop
  // (landscape) screenshots can be freely mixed in the same array.
  images?: string[];
}

export const projects: Project[] = [
  {
    id: "trakion",
    title: "Trakion — Fleet Tracking",
    description:
      "Web-based vehicle tracking platform for cargo fleet management, built at Coderio.",
    icon: Truck,
    achievements: [
      "Real-time GPS visualization for live fleet monitoring",
      "Route optimization dashboards to reduce delivery times",
      "Custom reporting modules for full fleet visibility",
    ],
    technologies: ["React", "TypeScript", "Next.js", "Node.js"],
    images: [
      "/assets/projects/trakion/1.webp",
      "/assets/projects/trakion/2.webp",
      "/assets/projects/trakion/3.webp",
      "/assets/projects/trakion/4.webp",
      "/assets/projects/trakion/5.webp",
    ],
  },
  {
    id: "cairo",
    title: "Cairo — E-commerce Platform",
    description:
      "E-commerce storefront with product catalog, cart, and checkout flows built for a retail brand.",
    icon: ShoppingBag,
    achievements: [
      "Built a responsive storefront from product listing to checkout",
      "Integrated cart and order flows with the backend API",
      "Focused on fast load times and mobile-first shopping UX",
    ],
    technologies: ["React", "TypeScript", "Node.js"],
    images: [
      "/assets/projects/cairo/1.webp",
      "/assets/projects/cairo/2.webp",
      "/assets/projects/cairo/3.webp",
      "/assets/projects/cairo/4.webp",
    ],
  },
  {
    id: "dlocal",
    title: "dLocal — Pix Payments",
    description:
      "Mobile banking interface for dLocal's instant Pix payment system across Latin America.",
    icon: CreditCard,
    achievements: [
      "Real-time transaction flows for instant payments",
      "Engineered for reliability under high-throughput conditions",
      "Seamless UX across diverse LATAM banking markets",
    ],
    technologies: ["React Native", "TypeScript", "Node.js"],
  },
  {
    id: "root-track",
    title: "Root Track — Grow App",
    description:
      "Mobile application for cannabis cultivation and plant lifecycle management.",
    icon: Sprout,
    achievements: [
      "Plant lifecycle tracking from seed to harvest",
      "Environment monitoring with sensor integration",
      "Guided grow schedules for a complex domain",
    ],
    technologies: ["React Native", "TypeScript", "Node.js", "Expo"],
    // Pending: screenshots to be added later. Leaving `images` undefined
    // means the carousel simply doesn't render for this card — once files
    // are dropped into `public/assets/projects/root-track/`, list their
    // paths here the same way other projects do.
  },
  {
    id: "tower-travel",
    title: "Tower Travel — Booking Engine",
    description:
      "Developed and maintained a large-scale travel web platform, managing UI architectures across both React (Next.js) and Angular ecosystems.",
    icon: Plane,
    achievements: [
      "Search and filtering across large travel inventories",
      "Optimized reservation flows for higher conversion",
      "Built for performance at scale at The Flock",
    ],
    technologies: ["React", "Next.js", "Angular", "TypeScript", "Node.js"],
    images: ["/assets/projects/tower-travel/1.webp"],
  },
  {
    id: "medife",
    title: "Medife Mobile — Health Insurance",
    description:
      "Health insurance mobile app simplifying policy management for thousands of users.",
    icon: HeartPulse,
    achievements: [
      "Led architecture decisions and code reviews",
      "Directed sprint planning as mobile team lead",
      "Shipped features that simplified policy management",
    ],
    technologies: ["React Native", "Expo", "TypeScript", "Node.js"],
    images: [
      "/assets/projects/medife/1.webp",
      "/assets/projects/medife/2.webp",
      "/assets/projects/medife/3.webp",
      "/assets/projects/medife/4.webp",
      "/assets/projects/medife/5.webp",
      "/assets/projects/medife/6.webp",
      "/assets/projects/medife/7.webp",
      "/assets/projects/medife/8.webp",
      "/assets/projects/medife/9.webp",
      "/assets/projects/medife/10.webp",
      "/assets/projects/medife/11.webp",
    ],
  },
  {
    id: "andreani",
    title: "Andreani — Logistics & Supply Chain",
    description:
      "Engineered scalable frontend architectures and enterprise tracking dashboards. Developed complex logistics modules, optimizing data rendering and RESTful API integrations to support high-volume traffic.",
    icon: Boxes,
    achievements: [
      "Built enterprise tracking dashboards for high-volume logistics data",
      "Optimized data rendering for large, high-frequency datasets",
      "Integrated RESTful APIs across complex supply chain modules",
    ],
    technologies: ["Angular", "TypeScript", "Node.js"],
  },
];
