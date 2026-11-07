"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/i18n/language-provider";
import { featuredProjects, flagshipProject } from "@/data/projects";
import { FlagshipCard, ProjectCard } from "@/components/projects/project-card";
import { Button } from "@/components/ui/button";

export function FeaturedProjects() {
  const { t } = useLanguage();

  return (
    <section className="pb-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
          <div>
            <p className="font-mono text-primary text-sm mb-2">{"// featured-projects"}</p>
            <h2 className="text-3xl font-bold mb-2">{t("home-featured-title")}</h2>
            <p className="text-muted-foreground">{t("home-featured-subtitle")}</p>
          </div>
          <Button asChild variant="outline" className="border-border hover:border-neutral-500 hover:text-foreground self-start sm:self-auto">
            <Link href="/projects">
              {t("projects-all")}
              <ArrowRight className="h-4 w-4 ml-2" />
            </Link>
          </Button>
        </div>

        <div className="space-y-6">
          {flagshipProject && <FlagshipCard project={flagshipProject} />}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
