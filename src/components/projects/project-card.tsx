"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/i18n/language-provider";
import { cn } from "@/lib/utils";
import type { Project, ProjectStatus } from "@/data/projects";

const MAX_TECH_ON_CARD = 4;

const statusStyles: Record<ProjectStatus, string> = {
  live: "border-green-500/30 text-green-500",
  completed: "border-border text-muted-foreground",
  "in-progress": "border-yellow-500/30 text-yellow-500",
};

export function ProjectStatusBadge({ status, className }: { status?: ProjectStatus; className?: string }) {
  const { t } = useLanguage();
  if (!status) return null;

  return (
    <Badge variant="outline" className={cn("text-xs gap-1.5 shrink-0", statusStyles[status], className)}>
      {status === "live" && <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />}
      {t(`projects-status-${status}`)}
    </Badge>
  );
}

function ProjectYear({ year }: { year?: number }) {
  if (!year) return null;
  return <p className="font-mono text-xs text-muted-foreground">{year}</p>;
}

function ProjectCover({ project, sizes, className }: { project: Project; sizes: string; className?: string }) {
  const cover = project.images?.[0];

  return (
    <div className={cn("relative overflow-hidden bg-secondary", className)}>
      {cover ? (
        <Image
          src={cover}
          alt={project.title}
          fill
          sizes={sizes}
          className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
        />
      ) : (
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="font-mono text-2xl font-semibold text-foreground/80 px-4 text-center">{project.title}</span>
        </div>
      )}
    </div>
  );
}

export function TechList({ stack, max }: { stack: string[]; max?: number }) {
  const shown = max ? stack.slice(0, max) : stack;
  const hidden = stack.length - shown.length;
  if (stack.length === 0) return null;

  return (
    <div className="flex flex-wrap gap-1.5">
      {shown.map((tech) => (
        <Badge key={tech} variant="outline" className="text-xs border-border text-muted-foreground font-mono">
          {tech}
        </Badge>
      ))}
      {hidden > 0 && (
        <Badge variant="outline" className="text-xs border-border text-muted-foreground font-mono">
          +{hidden}
        </Badge>
      )}
    </div>
  );
}

export function ProjectCard({ project }: { project: Project }) {
  const { tl } = useLanguage();

  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group flex flex-col h-full rounded-xl border border-border bg-card overflow-hidden card-hover"
    >
      <ProjectCover
        project={project}
        sizes="(min-width: 1280px) 384px, (min-width: 768px) 50vw, 100vw"
        className="aspect-[16/10] border-b border-border"
      />
      <div className="flex flex-col gap-3 p-5 flex-1">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-semibold leading-snug flex items-center gap-1">
            {project.title}
            <ArrowUpRight className="h-4 w-4 text-muted-foreground opacity-0 -translate-x-1 transition-all group-hover:opacity-100 group-hover:translate-x-0" />
          </h3>
          <ProjectStatusBadge status={project.status} />
        </div>
        <ProjectYear year={project.year} />
        <p className="text-sm text-muted-foreground leading-relaxed">{tl(project.summary)}</p>
        <div className="mt-auto pt-2">
          <TechList stack={project.techStack} max={MAX_TECH_ON_CARD} />
        </div>
      </div>
    </Link>
  );
}

/** Card largo do projeto carro-chefe, com os produtos que compõem a plataforma. */
export function FlagshipCard({ project }: { project: Project }) {
  const { t, tl } = useLanguage();

  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group grid grid-cols-1 lg:grid-cols-5 rounded-xl border border-border bg-card overflow-hidden card-hover"
    >
      <ProjectCover
        project={project}
        sizes="(min-width: 1024px) 680px, 100vw"
        className="aspect-[16/10] lg:aspect-auto lg:min-h-80 lg:col-span-3 border-b lg:border-b-0 lg:border-r border-border"
      />
      <div className="flex flex-col gap-4 p-6 lg:col-span-2">
        <div className="flex items-center justify-between gap-2">
          <Badge className="bg-secondary text-foreground border-border text-xs">{t("projects-featured")}</Badge>
          <ProjectStatusBadge status={project.status} />
        </div>
        <div className="space-y-1">
          <h3 className="text-2xl font-bold flex items-center gap-1.5">
            {project.title}
            <ArrowUpRight className="h-5 w-5 text-muted-foreground opacity-0 -translate-x-1 transition-all group-hover:opacity-100 group-hover:translate-x-0" />
          </h3>
          <ProjectYear year={project.year} />
        </div>
        <p className="text-sm text-muted-foreground leading-relaxed">{tl(project.summary)}</p>

        {project.subprojects && project.subprojects.length > 0 && (
          <div className="space-y-2">
            <p className="text-xs font-mono text-muted-foreground">{t("projects-platform")}</p>
            <div className="flex flex-wrap gap-1.5">
              {project.subprojects.map((sub) => (
                <Badge key={sub.name.pt} variant="secondary" className="text-xs bg-secondary text-foreground">
                  {tl(sub.name)}
                </Badge>
              ))}
            </div>
          </div>
        )}

        <div className="mt-auto pt-2">
          <TechList stack={project.techStack} max={6} />
        </div>
      </div>
    </Link>
  );
}

/** Card de projeto corporativo: resumo e funcionalidades, sem print nem página de detalhe. */
export function CorporateProjectCard({ project }: { project: Project }) {
  const { tl } = useLanguage();

  return (
    <article className="flex flex-col gap-4 rounded-xl border border-border bg-card p-5">
      <div className="space-y-1">
        {project.context && <p className="font-mono text-xs text-muted-foreground">{project.context}</p>}
        <h3 className="text-lg font-semibold leading-snug">{project.title}</h3>
        {project.subtitle && <p className="text-sm text-muted-foreground">{tl(project.subtitle)}</p>}
      </div>

      <p className="text-sm text-muted-foreground leading-relaxed">{tl(project.summary)}</p>

      {project.features && project.features.length > 0 && (
        <ul className="space-y-1.5">
          {project.features.map((feature) => (
            <li key={feature.pt} className="flex items-start gap-2 text-sm text-muted-foreground">
              <Check className="h-4 w-4 mt-0.5 shrink-0 text-foreground" />
              {tl(feature)}
            </li>
          ))}
        </ul>
      )}
    </article>
  );
}
