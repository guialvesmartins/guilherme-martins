"use client";

import Link from "next/link";
import {
  ArrowLeft,
  ArrowUpRight,
  Calendar,
  CalendarCheck,
  Check,
  ExternalLink,
  Github,
  Globe,
  LayoutDashboard,
  Server,
  Trophy,
} from "lucide-react";
import { useLanguage } from "@/i18n/language-provider";
import type { Project, SubProject, SubProjectIcon } from "@/data/projects";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ProjectCarousel } from "@/components/ui/project-carousel";
import { ProjectStatusBadge, TechList } from "@/components/projects/project-card";

const subProjectIcons: Record<SubProjectIcon, React.ElementType> = {
  panel: LayoutDashboard,
  server: Server,
  calendar: CalendarCheck,
  trophy: Trophy,
  globe: Globe,
};

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-10">
      <h2 className="text-lg font-semibold mb-4">{title}</h2>
      {children}
    </section>
  );
}

function SubProjectCard({ sub }: { sub: SubProject }) {
  const { t, tl } = useLanguage();
  const Icon = subProjectIcons[sub.icon];

  return (
    <div className="flex flex-col rounded-xl border border-border bg-card">
      <div className="flex flex-col gap-3 p-4 flex-1">
        <div className="flex items-center gap-2">
          <div className="p-1.5 rounded-md bg-secondary">
            <Icon className="h-4 w-4 text-foreground" />
          </div>
          <h3 className="font-semibold text-sm">{tl(sub.name)}</h3>
        </div>
        <p className="text-sm text-muted-foreground leading-relaxed">{tl(sub.description)}</p>
        <div className="mt-auto flex items-end justify-between gap-2 pt-1">
          <TechList stack={sub.stack} />
          {sub.url && (
            <Link
              href={sub.url}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 flex items-center gap-0.5 text-xs font-mono text-muted-foreground hover:text-foreground transition-colors"
              aria-label={`${t("projects-open")} ${tl(sub.name)}`}
            >
              {t("projects-open")}
              <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

export function ProjectDetailContent({ project }: { project: Project }) {
  const { t, tl } = useLanguage();
  const paragraphs = project.description ? tl(project.description).split("\n\n") : [];

  return (
    <div className="pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Back link */}
        <div className="mb-8">
          <Button asChild variant="ghost" className="text-muted-foreground hover:text-foreground -ml-2">
            <Link href="/projects">
              <ArrowLeft className="h-4 w-4 mr-2" />
              {t("projects-back")}
            </Link>
          </Button>
        </div>

        {/* Header */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-2 mb-3">
            <Badge className="bg-secondary text-foreground border-border">
              {t(`projects-category-${project.category}`)}
            </Badge>
            <ProjectStatusBadge status={project.status} />
          </div>
          <h1 className="text-4xl font-bold gradient-text mb-3">{project.title}</h1>
          <p className="text-muted-foreground mb-4 max-w-2xl">{tl(project.summary)}</p>
          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
            {project.year && (
              <span className="flex items-center gap-1.5">
                <Calendar className="h-4 w-4" />
                {project.year}
              </span>
            )}
            {project.tags.length > 0 && <span className="font-mono text-xs">{project.tags.join(" · ")}</span>}
          </div>
        </div>

        <Separator className="bg-border mb-8" />

        {project.images && project.images.length > 0 && (
          <ProjectCarousel images={project.images} altPrefix={project.slug} />
        )}

        {/* Description */}
        <div className="space-y-4 mb-10">
          {paragraphs.map((text, i) => (
            <p key={i} className="text-muted-foreground leading-relaxed">
              {text}
            </p>
          ))}
        </div>

        {project.features && project.features.length > 0 && (
          <Section title={t("projects-features")}>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2.5">
              {project.features.map((feature) => (
                <li key={feature.pt} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <Check className="h-4 w-4 mt-0.5 shrink-0 text-foreground" />
                  {tl(feature)}
                </li>
              ))}
            </ul>
          </Section>
        )}

        {project.subprojects && project.subprojects.length > 0 && (
          <Section title={t("projects-platform")}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {project.subprojects.map((sub) => (
                <SubProjectCard key={sub.name.pt} sub={sub} />
              ))}
            </div>
          </Section>
        )}

        {project.techStack.length > 0 && (
          <Section title={t("projects-tech")}>
            <TechList stack={project.techStack} />
          </Section>
        )}

        {(project.githubUrl || project.liveUrl) && (
          <Section title={t("projects-links")}>
            <div className="flex flex-wrap gap-3">
              {project.githubUrl && (
                <Button asChild variant="outline" className="border-border hover:border-neutral-500 hover:text-foreground">
                  <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4 mr-2" />
                    {t("projects-github")}
                  </Link>
                </Button>
              )}
              {project.liveUrl && (
                <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    {t("projects-live")}
                  </Link>
                </Button>
              )}
            </div>
          </Section>
        )}
      </div>
    </div>
  );
}
