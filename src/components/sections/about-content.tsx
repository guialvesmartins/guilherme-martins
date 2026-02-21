"use client";

import { useLanguage } from "@/i18n/language-provider";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { techCategories, softSkills, spokenLanguages } from "@/data/skills";
import { education } from "@/data/experience";
import {
  Server,
  Monitor,
  Database,
  Layers,
  MessageSquare,
  Users,
  Brain,
  FolderOpen,
  Zap,
  RefreshCw,
  BookOpen,
  User,
  GitBranch,
  GraduationCap,
} from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  Server,
  Monitor,
  Database,
  Layers,
  MessageSquare,
  Users,
  Brain,
  FolderOpen,
  Zap,
  RefreshCw,
  BookOpen,
  GitBranch,
};

export function AboutContent() {
  const { t } = useLanguage();

  return (
    <div className="pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="mb-12">
          <p className="font-mono text-primary text-sm mb-2">// about-me</p>
          <h1 className="text-4xl font-bold gradient-text mb-3">{t("about-title")}</h1>
          <p className="text-muted-foreground">{t("about-subtitle")}</p>
        </div>

        {/* About me text + soft skills */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Bio */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-4">
              <User className="h-5 w-5 text-primary" />
              <h2 className="text-xl font-semibold">{t("about-title")}</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed">{t("about-description-1")}</p>
            <p className="text-muted-foreground leading-relaxed">{t("about-description-2")}</p>
          </div>

          {/* Soft Skills */}
          <div>
            <h2 className="text-xl font-semibold mb-4">{t("soft-skills-title")}</h2>
            <div className="flex flex-wrap gap-2">
              {softSkills.map(({ key, icon }) => {
                const Icon = iconMap[icon];
                return (
                  <Badge
                    key={key}
                    variant="outline"
                    className="border-border text-muted-foreground hover:border-neutral-500 hover:text-foreground transition-colors gap-1.5 py-1.5 px-3"
                  >
                    {Icon && <Icon className="h-3.5 w-3.5" />}
                    {t(key)}
                  </Badge>
                );
              })}
            </div>

            {/* Languages */}
            <div className="mt-8">
              <h2 className="text-xl font-semibold mb-4">{t("languages-title")}</h2>
              <div className="space-y-4">
                {spokenLanguages.map(({ key, levelKey, percentage, flag }) => (
                  <div key={key}>
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-sm font-medium flex items-center gap-2">
                        <span>{flag}</span>
                        {t(key)}
                      </span>
                      <span className="text-xs text-muted-foreground">{t(levelKey)}</span>
                    </div>
                    <Progress
                      value={percentage}
                      className="h-2 bg-secondary [&>div]:bg-primary"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Tech Stack */}
        <div>
          <div className="mb-8">
            <p className="font-mono text-primary text-sm mb-2">// tech-stack</p>
            <h2 className="text-3xl font-bold mb-2">{t("skills-title")}</h2>
            <p className="text-muted-foreground">{t("skills-subtitle")}</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {techCategories.map((category) => {
              const Icon = iconMap[category.icon];
              return (
                <Card
                  key={category.id}
                  className="bg-card border-border card-hover"
                >
                  <CardHeader className="pb-3">
                    <CardTitle className="flex items-center gap-2 text-base">
                      {Icon && <Icon className="h-5 w-5 text-primary" />}
                      {t(category.titleKey)}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    {category.items.map((item, idx) => (
                      <div key={idx}>
                        <p className="text-xs text-muted-foreground mb-1.5 font-mono">
                          {t(item.labelKey)}
                        </p>
                        <div className="flex flex-wrap gap-1.5">
                          {item.values.map((val) => (
                            <Badge
                              key={val}
                              variant="secondary"
                              className="text-xs bg-secondary text-foreground hover:bg-accent transition-colors"
                            >
                              {val}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Education */}
        <div className="mt-16">
          <div className="mb-8">
            <p className="font-mono text-primary text-sm mb-2">// education</p>
            <h2 className="text-3xl font-bold mb-2">{t("education-title")}</h2>
            <p className="text-muted-foreground">{t("education-subtitle")}</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {education.map((edu) => (
              <Card key={edu.id} className="bg-card border-border card-hover">
                <CardHeader className="pb-2">
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-primary/10 shrink-0 mt-0.5">
                      <GraduationCap className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-sm font-semibold leading-snug">
                        {t(edu.titleKey)}
                      </CardTitle>
                      <p className="text-muted-foreground text-sm mt-1 font-medium">{t(edu.institutionKey)}</p>
                      <p className="font-mono text-xs text-muted-foreground mt-0.5">{t(edu.yearKey)}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground leading-relaxed">{t(edu.descKey)}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
