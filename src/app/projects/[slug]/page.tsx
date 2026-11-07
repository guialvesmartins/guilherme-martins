import { notFound } from "next/navigation";
import { independentProjects } from "@/data/projects";
import { ProjectDetailContent } from "@/components/sections/project-detail-content";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ slug: string }>;
}

// Só os projetos independentes têm página; os corporativos ficam só no card.
export async function generateStaticParams() {
  return independentProjects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = independentProjects.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: `${project.title} | Guilherme Martins`,
    description: project.summary.pt,
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = independentProjects.find((p) => p.slug === slug);
  if (!project) notFound();

  return <ProjectDetailContent project={project} />;
}
