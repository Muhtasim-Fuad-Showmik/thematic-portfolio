"use client";

import CertificatesSection from "@/components/sections/certificates-section";
import ContactSection from "@/components/sections/contact-section";
import ExperienceSection from "@/components/sections/experience-section";
import HeroSection from "@/components/sections/hero-section";
import ProjectsSection from "@/components/sections/projects-section";
import SkillsSection from "@/components/sections/skills-section";

export default function Home() {
  return (
    <>
      {/* TODO: Add resume download option somewhere */}
      <HeroSection />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
      <CertificatesSection />
      <ContactSection />
    </>
  );
}
