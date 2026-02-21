import { ProjectsContent } from "@/components/sections/projects-content";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projetos | Guilherme Martins",
  description: "Projetos desenvolvidos por Guilherme Martins.",
};

export default function ProjectsPage() {
  return <ProjectsContent />;
}
