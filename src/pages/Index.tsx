import Hero from "@/components/sections/Hero";
import SkillsPreview from "@/components/sections/SkillsPreview";
import FeaturedProjects from "@/components/sections/FeaturedProjects";
import ExperienceSnapshot from "@/components/sections/ExperienceSnapshot";
import CertificatesPreview from "@/components/sections/CertificatesPreview";
import ServicesOverview from "@/components/sections/ServicesOverview";
import CallToAction from "@/components/sections/CallToAction";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    document.title = "Shadananda Devkota — Full-Stack Developer & UI/UX Designer";
    const meta = document.querySelector('meta[name="description"]');
    meta?.setAttribute(
      "content",
      "Portfolio of Shadananda Devkota — full-stack web & mobile developer, UI/UX designer, and freelancer crafting modern digital experiences."
    );
  }, []);

  return (
    <>
      {/* Structured data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Shadananda Devkota",
            jobTitle: "Full-Stack Web & Mobile App Developer",
            email: "shadanandadevkota@gmail.com",
            telephone: "+9779861015671",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Pokhara",
              addressRegion: "Gandaki",
              addressCountry: "Nepal",
            },
          }),
        }}
      />


      <Hero />
      <SkillsPreview />
      <FeaturedProjects />
      <ExperienceSnapshot />
      <CertificatesPreview />
      <ServicesOverview />
      <CallToAction />
    </>
  );
};

export default Index;
