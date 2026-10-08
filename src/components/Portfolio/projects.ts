import { LucideIcon, Truck, CreditCard, Sprout, Plane, HeartPulse } from "lucide-react";

// Shape of a single portfolio project. This is a text-first, image-free
// model: visual identity comes from an abstract category icon rather than
// screenshots, since most projects are proprietary client work.
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
  },
  {
    id: "tower-travel",
    title: "Tower Travel — Booking Engine",
    description:
      "Large-scale travel booking platform handling thousands of daily reservations.",
    icon: Plane,
    achievements: [
      "Search and filtering across large travel inventories",
      "Optimized reservation flows for higher conversion",
      "Built for performance at scale at The Flock",
    ],
    technologies: ["React", "Next.js", "TypeScript", "Node.js"],
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
  },
];
