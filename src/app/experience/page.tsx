import { ExperienceContent } from "@/components/sections/experience-content";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Experiência | Guilherme Martins",
  description: "Jornada profissional e formação acadêmica de Guilherme Martins.",
};

export default function ExperiencePage() {
  return <ExperienceContent />;
}
