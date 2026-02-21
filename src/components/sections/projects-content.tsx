"use client";

import Link from "next/link";
import { useLanguage } from "@/i18n/language-provider";
import { projects } from "@/data/projects";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, ArrowRight, FolderOpen } from "lucide-react";

export function ProjectsContent() {
  const { t } = useLanguage();

  return (
    <div className="pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="mb-12">
          <p className="font-mono text-primary text-sm mb-2">// projects</p>
          <h1 className="text-4xl font-bold gradient-text mb-3">{t("projects-title")}</h1>
          <p className="text-muted-foreground">{t("projects-subtitle")}</p>
        </div>

        {projects.length === 0 ? (
          <div className="text-center py-20 text-muted-foreground">
            <FolderOpen className="h-12 w-12 mx-auto mb-4 opacity-40" />
            <p>{t("projects-empty")}</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {projects.map((project) => (
              <Card
                key={project.id}
                className="bg-card border-border card-hover flex flex-col h-full"
              >
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between gap-2">
                    <CardTitle className="text-base font-semibold leading-snug">
                      {t(project.titleKey)}
                    </CardTitle>
                    <div className="flex flex-col items-end gap-1 shrink-0">
                      {project.featured && (
                        <Badge className="bg-secondary text-foreground border-border text-xs">
                          {t("projects-featured")}
                        </Badge>
                      )}
                    </div>
                  </div>
                  <p className="font-mono text-xs text-muted-foreground">{project.year}</p>
                </CardHeader>

                <CardContent className="flex-1 space-y-3">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {t(project.descriptionKey)}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="secondary"
                        className="text-xs bg-secondary text-foreground"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {project.techStack.map((tech) => (
                      <Badge
                        key={tech}
                        variant="outline"
                        className="text-xs border-border text-muted-foreground font-mono"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>

                <CardFooter className="pt-4 gap-2 flex-wrap">
                  <Button asChild size="sm" className="bg-primary hover:bg-primary/90 text-primary-foreground flex-1">
                    <Link href={`/projects/${project.slug}`}>
                      {t("projects-view")}
                      <ArrowRight className="h-3.5 w-3.5 ml-1.5" />
                    </Link>
                  </Button>
                  <div className="flex gap-2">
                    {project.githubUrl && (
                      <Button asChild size="sm" variant="outline" className="border-border hover:border-neutral-500 hover:text-foreground px-2.5">
                        <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                          <Github className="h-4 w-4" />
                        </Link>
                      </Button>
                    )}
                    {project.liveUrl && (
                      <Button asChild size="sm" variant="outline" className="border-border hover:border-neutral-500 hover:text-foreground px-2.5">
                        <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer" aria-label="Live">
                          <ExternalLink className="h-4 w-4" />
                        </Link>
                      </Button>
                    )}
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
