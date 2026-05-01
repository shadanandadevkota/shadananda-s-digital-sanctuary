import {
  Code2, Smartphone, Palette, Layout, Server, Cloud,
  GitBranch, Database, Zap, Workflow, ShieldCheck, Network,
  type LucideIcon,
} from "lucide-react";

export const skills: { icon: LucideIcon; label: string; group: string }[] = [
  { icon: Code2, label: "Full-Stack Web Dev", group: "Engineering" },
  { icon: Smartphone, label: "Mobile (iOS & Android)", group: "Engineering" },
  { icon: Server, label: "API Design & Integration", group: "Engineering" },
  { icon: Database, label: "Databases & Storage", group: "Engineering" },
  { icon: Cloud, label: "Cloud (AWS · Azure · GCP)", group: "Infrastructure" },
  { icon: GitBranch, label: "Git & Version Control", group: "Infrastructure" },
  { icon: ShieldCheck, label: "Testing & Debugging", group: "Infrastructure" },
  { icon: Network, label: "Network Engineering", group: "Infrastructure" },
  { icon: Palette, label: "UI / UX & Prototyping", group: "Design" },
  { icon: Layout, label: "Responsive Design", group: "Design" },
  { icon: Zap, label: "Performance & SEO", group: "Craft" },
  { icon: Workflow, label: "Agile Project Management", group: "Craft" },
];

export interface Project {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  tech: string[];
  category: string;
  year: string;
  client: string;
  role: string;
  featured: boolean;
  cover: string;
  gallery: string[];
  highlights: string[];
  link?: string;
  repo?: string;
}

export const projects: Project[] = [
  {
    slug: "atlas-saas-dashboard",
    title: "Atlas",
    tagline: "Real-time analytics platform with AI insights",
    description:
      "A production-grade SaaS dashboard featuring real-time charts, role-based access, and AI-driven insights. Built with a modern full-stack architecture for high performance at scale.",
    tech: ["React", "TypeScript", ".NET", "PostgreSQL", "Tailwind", "Recharts"],
    category: "SaaS · Web App",
    year: "2025",
    client: "Internal Product",
    role: "Lead Full-Stack Engineer",
    featured: true,
    cover: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1600&q=80",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1600&q=80",
      "https://images.unsplash.com/photo-1543286386-713bdd548da4?w=1600&q=80",
    ],
    highlights: [
      "Sub-200ms p95 dashboard load",
      "Role-based access with row-level security",
      "AI-powered anomaly detection on time-series data",
      "Custom chart engine on top of D3 + Recharts",
    ],
  },
  {
    slug: "lumen-mobile-banking",
    title: "Lumen",
    tagline: "Secure cross-platform banking experience",
    description:
      "Cross-platform mobile banking application with biometric auth, instant transfers, and quietly delightful animated transitions across every flow.",
    tech: ["React Native", "Node.js", "MongoDB", "JWT", "Plaid"],
    category: "Mobile · FinTech",
    year: "2024",
    client: "Lumen Financial",
    role: "Mobile Engineer & Designer",
    featured: true,
    cover: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=1600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=1600&q=80",
      "https://images.unsplash.com/photo-1601597111158-2fceff292cdc?w=1600&q=80",
    ],
    highlights: [
      "Biometric + 2FA auth flow audited by 3rd-party",
      "Instant P2P transfers with optimistic UI",
      "60fps animated transitions across stack navigators",
      "Offline-first transaction history with conflict resolution",
    ],
  },
  {
    slug: "nova-ecommerce",
    title: "Nova",
    tagline: "Lightning-fast headless storefront",
    description:
      "Headless commerce platform with sub-second page loads, advanced search, and a checkout flow tuned for real-world conversion.",
    tech: ["Next.js", "Stripe", "PostgreSQL", "Redis", "Algolia"],
    category: "E-Commerce",
    year: "2024",
    client: "Nova Retail",
    role: "Full-Stack Lead",
    featured: true,
    cover: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=1600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=1600&q=80",
      "https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?w=1600&q=80",
    ],
    highlights: [
      "+38% checkout conversion vs. previous platform",
      "Average LCP 0.9s on mobile 4G",
      "Algolia-powered faceted search across 12k SKUs",
      "Stripe + Apple Pay + Google Pay in one flow",
    ],
  },
  {
    slug: "prism-design-system",
    title: "Prism",
    tagline: "Token-driven component library",
    description:
      "An end-to-end design system with semantic tokens, Figma sync, and full accessibility coverage — adopted across 4 internal product teams.",
    tech: ["Figma", "Storybook", "Tailwind", "Radix", "Style Dictionary"],
    category: "Design System",
    year: "2024",
    client: "Internal",
    role: "Design Engineer",
    featured: true,
    cover: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=1600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=1600&q=80",
      "https://images.unsplash.com/photo-1561070791-2526d30994b8?w=1600&q=80",
    ],
    highlights: [
      "120+ components, all WCAG AA compliant",
      "Tokens synced bi-directionally with Figma",
      "Adopted by 4 internal product teams",
      "Bundle-size budget enforced in CI",
    ],
  },
  {
    slug: "echo-realtime-chat",
    title: "Echo",
    tagline: "Slack-style team communication",
    description:
      "Realtime messaging with channels, threads, presence, and end-to-end encryption — built to feel as fast as Slack on first load.",
    tech: ["React", "WebSockets", ".NET", "Redis", "SignalR"],
    category: "Realtime · Web App",
    year: "2023",
    client: "Echo Labs",
    role: "Full-Stack Engineer",
    featured: false,
    cover: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=1600&q=80",
    gallery: ["https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=1600&q=80"],
    highlights: [
      "End-to-end encrypted DMs",
      "Presence + typing indicators under 80ms RTT",
      "Threaded conversations with full search",
    ],
  },
  {
    slug: "vertex-portfolio-cms",
    title: "Vertex",
    tagline: "Headless CMS for creatives",
    description:
      "A headless CMS focused on portfolios, with media management, draft previews, and a polished admin UI made for non-technical editors.",
    tech: ["Blazor", ".NET", "PostgreSQL", "Azure Blob"],
    category: "CMS · Web App",
    year: "2023",
    client: "Vertex Studio",
    role: "Full-Stack Engineer",
    featured: false,
    cover: "https://images.unsplash.com/photo-1481487196290-c152efe083f5?w=1600&q=80",
    gallery: ["https://images.unsplash.com/photo-1481487196290-c152efe083f5?w=1600&q=80"],
    highlights: [
      "Drag-and-drop media library with on-the-fly transforms",
      "Live draft previews",
      "Role-based editor / reviewer / admin permissions",
    ],
  },
];

export const experience = [
  {
    company: "Tukisoft",
    role: "Web Developer",
    period: "2023 — Present",
    location: "Remote",
    summary:
      "Building production web apps end-to-end — from architecture through deployment — for clients across SaaS, e-commerce and content.",
    points: [
      "Developed and maintained responsive websites using modern frameworks.",
      "Collaborated with design and content teams to ensure smooth project delivery.",
      "Optimized website performance, SEO, and cross-browser compatibility.",
      "Integrated backend and frontend components for dynamic web applications.",
      "Worked remotely with clients to provide continuous updates and support.",
    ],
  },
  {
    company: "Classic Tech",
    role: "Retail Support Associate",
    period: "Nov 2024 — Sep 2025",
    location: "Kathmandu, Nepal",
    summary:
      "Frontline technical support for ISP customers — diagnosing connectivity issues and shipping calm, helpful communication.",
    points: [
      "Handled customer inquiries and technical issues effectively.",
      "Assisted in troubleshooting internet connectivity and router configuration.",
      "Ensured customer satisfaction through prompt and professional communication.",
      "Maintained detailed logs of support requests and solutions.",
    ],
  },
  {
    company: "Classic Tech",
    role: "Retail Specialist",
    period: "2022 — 2023",
    location: "Kathmandu, Nepal",
    summary:
      "Retail operations and customer engagement at one of Nepal's largest tech retailers.",
    points: [
      "Supported retail operations and customer engagement.",
      "Built strong client relationships and product expertise.",
    ],
  },
] as const;

export const certificates = [
  {
    group: "LinkedIn Learning",
    items: [
      { title: ".NET Essential Training", year: "2024" },
      { title: "Building Web Apps with Blazor", year: "2024" },
      { title: "Domain-Driven Design Foundations", year: "2024" },
      { title: "Clean Code Principles", year: "2023" },
    ],
  },
  {
    group: "Coursera",
    items: [
      { title: "Full-Stack Web Development", year: "2023" },
      { title: "UI / UX Design Specialization", year: "2023" },
      { title: "Cloud Fundamentals", year: "2024" },
    ],
  },
  {
    group: "Other",
    items: [
      { title: "Responsive Web Design — freeCodeCamp", year: "2022" },
      { title: "JavaScript Algorithms & Data Structures — freeCodeCamp", year: "2023" },
    ],
  },
] as const;

export const services = [
  {
    title: "Full-Stack Web Development",
    short: "Web platforms",
    description:
      "End-to-end web applications with modern frameworks, robust APIs and clean architecture — from MVP to production scale.",
    deliverables: ["React / Next.js front-ends", ".NET / Node back-ends", "Postgres / Mongo data layer", "CI/CD on AWS or Azure"],
    icon: Code2,
  },
  {
    title: "Mobile App Development",
    short: "iOS & Android",
    description:
      "Cross-platform iOS and Android apps with native-feeling performance, smooth animation, and a seamless release pipeline.",
    deliverables: ["React Native / Expo", "Push notifications & deep links", "Offline-first sync", "App Store & Play Store delivery"],
    icon: Smartphone,
  },
  {
    title: "UI / UX Design",
    short: "Product design",
    description:
      "Research-driven product design — wireframes, prototypes, and design systems that engineering can ship without translation loss.",
    deliverables: ["Figma design + prototype", "Token-based design system", "Usability testing", "Accessibility (WCAG AA)"],
    icon: Palette,
  },
  {
    title: "Performance & SEO",
    short: "Optimization",
    description:
      "Audit, optimize and ship — Core Web Vitals, accessibility, structured data and SEO done right.",
    deliverables: ["Lighthouse 95+ targets", "Schema.org JSON-LD", "Image & font optimization", "Edge caching strategy"],
    icon: Zap,
  },
];

export const profile = {
  name: "Shadananda Devkota",
  title: "Full-Stack Developer · UI/UX Designer · Freelancer",
  location: "Kathmandu, Nepal",
  tagline: "Crafting calm, premium digital products.",
  email: "hello@shadananda.dev",
  github: "https://github.com/shadananda",
  linkedin: "https://linkedin.com/in/shadananda",
  twitter: "https://twitter.com/shadananda",
  bio: [
    "I'm Shadananda — a full-stack developer and product designer building software with the same care a craftsman gives a hand-made object.",
    "I work across the stack: React, TypeScript, .NET, Node, mobile, and the design system that ties it all together. I care about quiet interfaces, fast pages, and code that the next person to read it will thank you for.",
    "I'm based in Kathmandu and work with founders, studios and small teams worldwide.",
  ],
  values: [
    { title: "Calm by default", body: "Software should reduce noise, not add to it. Premium feel comes from restraint." },
    { title: "Performance is a feature", body: "Sub-second loads aren't an upgrade — they're table stakes for a product that respects its user." },
    { title: "Design is engineering", body: "I refuse the wall between design and code. Tokens, systems, and a single source of truth." },
    { title: "Ship the boring parts", body: "Auth, billing, error states, empty states — the unglamorous 80% is where trust is earned." },
  ],
  stats: [
    { k: "5+", v: "Years building products" },
    { k: "30+", v: "Shipped projects" },
    { k: "12", v: "Countries served" },
    { k: "100%", v: "Client retention this year" },
  ],
};
