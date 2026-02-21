"use client";

import Link from "next/link";
import { useLanguage } from "@/i18n/language-provider";
import { type Project } from "@/data/projects";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ProjectCarousel } from "@/components/ui/project-carousel";
import { Github, ExternalLink, ArrowLeft, Calendar, Tag } from "lucide-react";

interface ProjectDetailContentProps {
  project: Project;
}

export function ProjectDetailContent({ project }: ProjectDetailContentProps) {
  const { t } = useLanguage();

  return (
    <div className="pt-24 pb-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
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
            {project.featured && (
              <Badge className="bg-secondary text-foreground border-border">
                {t("projects-featured")}
              </Badge>
            )}
            <Badge
              variant="outline"
              className={
                project.status === "completed"
                  ? "border-green-500/30 text-green-400"
                  : "border-yellow-500/30 text-yellow-400"
              }
            >
              {t(`projects-status-${project.status}`)}
            </Badge>
          </div>
          <h1 className="text-4xl font-bold gradient-text mb-3">{t(project.titleKey)}</h1>
          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <Calendar className="h-4 w-4" />
              {project.year}
            </span>
            <span className="flex items-center gap-1.5">
              <Tag className="h-4 w-4" />
              {project.tags.join(", ")}
            </span>
          </div>
        </div>

        <Separator className="bg-border mb-8" />

        {/* Carousel */}
        {project.images && project.images.length > 0 && (
          <ProjectCarousel images={project.images} altPrefix={project.slug} />
        )}

        {/* Long description */}
        <div className="prose prose-invert max-w-none mb-8">
          <p className="text-muted-foreground leading-relaxed text-base">
            {t(project.longDescriptionKey)}
          </p>
        </div>

        {/* Tech stack */}
        <div className="mb-8">
          <h2 className="text-lg font-semibold mb-3">{t("projects-tech")}</h2>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <Badge
                key={tech}
                variant="outline"
                className="border-border text-muted-foreground hover:border-neutral-500 hover:text-foreground transition-colors font-mono"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>

        {/* Links */}
        {(project.githubUrl || project.liveUrl) && (
          <div>
            <h2 className="text-lg font-semibold mb-3">{t("projects-links")}</h2>
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
          </div>
        )}
      </div>
    </div>
  );
}
