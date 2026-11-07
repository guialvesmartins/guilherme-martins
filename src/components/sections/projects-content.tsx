"use client";

import { useLanguage } from "@/i18n/language-provider";
import { corporateProjects, independentProjects } from "@/data/projects";
import { CorporateProjectCard, FlagshipCard, ProjectCard } from "@/components/projects/project-card";

function SectionHeader({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div className="mb-6">
      <h2 className="text-2xl font-bold mb-1.5">{title}</h2>
      <p className="text-muted-foreground max-w-2xl">{subtitle}</p>
    </div>
  );
}

export function ProjectsContent() {
  const { t } = useLanguage();
  const flagship = independentProjects.find((p) => p.flagship);
  const others = independentProjects.filter((p) => !p.flagship);

  return (
    <div className="pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="mb-12">
          <p className="font-mono text-primary text-sm mb-2">{"// projects"}</p>
          <h1 className="text-4xl font-bold gradient-text mb-3">{t("projects-title")}</h1>
          <p className="text-muted-foreground leading-relaxed max-w-3xl">{t("projects-subtitle")}</p>
        </div>

        {/* Produtos próprios e freelas */}
        <section className="mb-16">
          <SectionHeader title={t("projects-independent-title")} subtitle={t("projects-independent-subtitle")} />
          <div className="space-y-6">
            {flagship && <FlagshipCard project={flagship} />}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {others.map((project) => (
                <ProjectCard key={project.slug} project={project} />
              ))}
            </div>
          </div>
        </section>

        {/* Sistemas corporativos */}
        {corporateProjects.length > 0 && (
          <section>
            <SectionHeader title={t("projects-corporate-title")} subtitle={t("projects-corporate-subtitle")} />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {corporateProjects.map((project) => (
                <CorporateProjectCard key={project.slug} project={project} />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
