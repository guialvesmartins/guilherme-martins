"use client";

import { useLanguage } from "@/i18n/language-provider";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { jobs } from "@/data/experience";
import { Building2 } from "lucide-react";
import { cn } from "@/lib/utils";

export function ExperienceContent() {
  const { t } = useLanguage();

  return (
    <div className="pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Experience header */}
        <div className="mb-12">
          <p className="font-mono text-primary text-sm mb-2">// experience</p>
          <h1 className="text-4xl font-bold gradient-text mb-3">{t("experience-title")}</h1>
          <p className="text-muted-foreground">{t("experience-subtitle")}</p>
        </div>

        {/* Timeline */}
        <div className="relative mb-20">
          {/* Vertical line */}
          <div className="absolute left-5 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-border to-transparent" />

          <div className="space-y-8">
            {jobs.map((job) => (
              <div key={job.id} className="relative flex gap-6 pl-14">
                {/* Dot */}
                <div
                  className={cn(
                    "absolute left-[14px] top-5 w-3 h-3 rounded-full border-2 border-primary shrink-0",
                    job.current ? "bg-primary" : "bg-background"
                  )}
                />

                {/* Card */}
                <Card className="flex-1 bg-card border-border card-hover">
                  <CardHeader className="pb-2">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                      <CardTitle className="text-base font-semibold leading-snug">
                        {t(job.titleKey)}
                      </CardTitle>
                      {job.current && (
                        <Badge className="bg-green-500/15 text-green-400 border-green-500/30 self-start sm:self-auto text-xs shrink-0">
                          <span className="mr-1 inline-block w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                          {t("current-badge")}
                        </Badge>
                      )}
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 mt-1">
                       <span className="flex items-center gap-1.5 text-sm text-foreground font-medium">
                        <Building2 className="h-3.5 w-3.5" />
                        {job.company}
                      </span>
                      <span className="hidden sm:block text-muted-foreground">·</span>
                      <span className="font-mono text-xs text-muted-foreground">{job.period}</span>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <p className="text-sm text-muted-foreground leading-relaxed">{t(job.descKey)}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {job.tags.map((tag) => (
                        <Badge
                          key={tag}
                          variant="outline"
                          className="text-xs border-border text-muted-foreground hover:border-neutral-500 hover:text-foreground transition-colors"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
