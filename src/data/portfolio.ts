import {
  Code2, Smartphone, Palette, Layout, Server, Cloud,
  GitBranch, Database, Zap, Workflow, ShieldCheck, Network,
} from "lucide-react";

export const skills = [
  { icon: Code2, label: "Full-Stack Web Dev", color: "primary" },
  { icon: Smartphone, label: "Mobile (iOS & Android)", color: "secondary" },
  { icon: Palette, label: "UI/UX & Prototyping", color: "accent" },
  { icon: Layout, label: "Responsive Design", color: "primary" },
  { icon: Server, label: "API Design & Integration", color: "secondary" },
  { icon: Cloud, label: "Cloud (AWS · Azure · GCP)", color: "accent" },
  { icon: GitBranch, label: "Git & Version Control", color: "primary" },
  { icon: Database, label: "Databases & Storage", color: "secondary" },
  { icon: Zap, label: "Performance & SEO", color: "accent" },
  { icon: Workflow, label: "Agile Project Management", color: "primary" },
  { icon: ShieldCheck, label: "Testing & Debugging", color: "secondary" },
  { icon: Network, label: "Network Engineering", color: "accent" },
] as const;

export const projects = [
  {
    slug: "atlas-saas-dashboard",
    title: "Atlas — SaaS Analytics Dashboard",
    tagline: "Real-time analytics platform with AI insights",
    description:
      "A production-grade SaaS dashboard featuring real-time charts, role-based access, and AI-driven insights. Built with a modern full-stack architecture for high performance.",
    tech: ["React", "TypeScript", ".NET", "PostgreSQL", "Tailwind"],
    category: "Web App",
    featured: true,
    accent: "primary",
  },
  {
    slug: "lumen-mobile-banking",
    title: "Lumen — Mobile Banking App",
    tagline: "Secure cross-platform banking experience",
    description:
      "Cross-platform mobile banking application with biometric auth, instant transfers, and beautiful animated transitions.",
    tech: ["React Native", "Node.js", "MongoDB", "JWT"],
    category: "Mobile",
    featured: true,
    accent: "secondary",
  },
  {
    slug: "nova-ecommerce",
    title: "Nova — Headless E-Commerce",
    tagline: "Lightning-fast headless storefront",
    description:
      "Headless commerce platform with sub-second page loads, advanced search, and a delightful checkout flow.",
    tech: ["Next.js", "Stripe", "PostgreSQL", "Redis"],
    category: "Web App",
    featured: true,
    accent: "accent",
  },
  {
    slug: "prism-design-system",
    title: "Prism — Design System",
    tagline: "Token-driven component library",
    description:
      "An end-to-end design system with semantic tokens, Figma sync, and full accessibility coverage.",
    tech: ["Figma", "Storybook", "Tailwind", "Radix"],
    category: "UI/UX",
    featured: true,
    accent: "primary",
  },
  {
    slug: "echo-realtime-chat",
    title: "Echo — Realtime Chat",
    tagline: "Slack-style team communication",
    description:
      "Realtime messaging with channels, threads, presence, and end-to-end encryption.",
    tech: ["React", "WebSockets", ".NET", "Redis"],
    category: "Web App",
    featured: false,
    accent: "secondary",
  },
  {
    slug: "vertex-portfolio-cms",
    title: "Vertex — Portfolio CMS",
    tagline: "Headless CMS for creatives",
    description:
      "A headless CMS focused on portfolios, with media management, draft previews, and a polished admin UI.",
    tech: ["Blazor", ".NET", "PostgreSQL"],
    category: "Web App",
    featured: false,
    accent: "accent",
  },
] as const;

export const experience = [
  {
    company: "Tukisoft",
    role: "Web Developer",
    period: "2023 — Present",
    location: "Remote",
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
] as const;

export const services = [
  {
    title: "Full-Stack Web Development",
    description:
      "End-to-end web applications with modern frameworks, robust APIs and clean architecture.",
    features: ["React / Next.js", ".NET / Node APIs", "Postgres / Mongo", "CI/CD"],
    icon: "Code2",
  },
  {
    title: "Mobile App Development",
    description:
      "Cross-platform iOS and Android apps with native-feeling performance and polish.",
    features: ["React Native", "Push notifications", "Offline-first", "App Store delivery"],
    icon: "Smartphone",
  },
  {
    title: "UI / UX Design",
    description:
      "Research-driven product design — wireframes, prototypes and design systems.",
    features: ["Figma", "Design tokens", "Prototyping", "Accessibility"],
    icon: "Palette",
  },
  {
    title: "Performance & SEO",
    description:
      "Audit, optimize and ship — Core Web Vitals, accessibility and SEO done right.",
    features: ["Lighthouse 95+", "Schema.org", "Image optimization", "Caching"],
    icon: "Zap",
  },
] as const;
