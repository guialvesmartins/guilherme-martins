"use client";

import Image from "next/image";
import Link from "next/link";
import { Github, Linkedin, Mail, ArrowRight, Code2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/i18n/language-provider";

const stats = [
  { value: "8+", key: "hero-years" },
  { value: "20+", key: "hero-projects" },
  { value: "15+", key: "hero-technologies" },
];

const socialLinks = [
  { href: "https://github.com/guialvesmartins", icon: Github, label: "GitHub" },
  { href: "https://www.linkedin.com/in/guilhermealmartins/", icon: Linkedin, label: "LinkedIn" },
  { href: "mailto:guilhermealmartins@gmail.com", icon: Mail, label: "Email" },
];

const techBadges = ["Java", "Spring", "React", "TypeScript", "Next.js", "SQL Server"];

export function HeroSection() {
  const { t } = useLanguage();

  return (
    <section className="min-h-screen flex items-center pt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: text content */}
          <div className="order-2 lg:order-1 space-y-6">
            {/* Greeting */}
            <div className="flex items-center gap-2">
              <Code2 className="h-5 w-5 text-primary" />
              <span className="font-mono text-sm text-muted-foreground">full-stack-developer</span>
            </div>

            {/* Title */}
            <div>
              <h1 className="text-4xl sm:text-5xl font-bold leading-tight text-foreground">
                {t("hero-title")}
              </h1>
              <p className="mt-2 font-mono text-xl gradient-text font-medium">
                {t("hero-subtitle")}
              </p>
            </div>

            {/* Description */}
            <p className="text-muted-foreground leading-relaxed text-base sm:text-lg max-w-lg">
              {t("hero-description")}
            </p>

            {/* Tech badges */}
            <div className="flex flex-wrap gap-2">
              {techBadges.map((tech) => (
                <Badge
                  key={tech}
                  variant="outline"
                  className="border-border text-muted-foreground hover:border-neutral-500 hover:text-foreground transition-colors font-mono text-xs"
                >
                  {tech}
                </Badge>
              ))}
            </div>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                <Link href="mailto:guilhermealmartins@gmail.com">
                  <Mail className="h-4 w-4 mr-2" />
                  {t("hero-contact")}
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-border hover:border-neutral-500 hover:text-foreground">
                <Link href="/projects">
                  {t("hero-know-more")}
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Link>
              </Button>
            </div>

            {/* Social links */}
            <div className="flex items-center gap-3 pt-2">
              {socialLinks.map(({ href, icon: Icon, label }) => (
                <Link
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="p-2 rounded-md border border-border text-muted-foreground hover:text-foreground hover:border-neutral-500 transition-colors"
                  aria-label={label}
                >
                  <Icon className="h-5 w-5" />
                </Link>
              ))}
            </div>
          </div>

          {/* Right: avatar + stats */}
          <div className="order-1 lg:order-2 flex flex-col items-center gap-8">
            {/* Avatar */}
            <div className="relative">
              <div className="w-56 h-56 sm:w-64 sm:h-64 rounded-full border-2 border-primary animate-pulse-glow overflow-hidden">
                <Image
                  src="/avatar.png"
                  alt="Guilherme Martins"
                  width={256}
                  height={256}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
              {/* Status badge */}
              <div className="absolute bottom-3 right-3 flex items-center gap-1.5 bg-card border border-border rounded-full px-3 py-1 text-xs font-medium">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-foreground">Open to work</span>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 w-full max-w-xs">
              {stats.map(({ value, key }) => (
                <div
                  key={key}
                  className="flex flex-col items-center gap-1 bg-card border border-border rounded-xl p-4"
                >
                  <span className="font-mono text-2xl font-bold text-primary">{value}</span>
                  <span className="text-xs text-muted-foreground text-center leading-tight">{t(key)}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
