"use client";

import Link from "next/link";
import { Github, Linkedin, Mail, MapPin } from "lucide-react";
import { useLanguage } from "@/i18n/language-provider";
import { Separator } from "@/components/ui/separator";
import { WhatsAppIcon } from "@/components/icons/whatsapp-icon";
import { PHONE_DISPLAY, whatsappUrl } from "@/data/profile";

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-card border-t border-border mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <span className="font-mono text-primary font-semibold text-xl">
              GUILHERME MARTINS<span className="text-accent">.</span>
            </span>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed max-w-xs">
              {t("footer-description")}
            </p>
          </div>

          {/* Contact info */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4">{t("contact-title")}</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a
                  href={whatsappUrl(t("contact-whatsapp-message"))}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-foreground transition-colors"
                  aria-label={`${t("contact-whatsapp-label")}: ${PHONE_DISPLAY}`}
                  title={t("contact-whatsapp-label")}
                >
                  <WhatsAppIcon className="h-4 w-4 text-primary shrink-0" />
                  <span>{PHONE_DISPLAY}</span>
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary shrink-0" />
                <a href="mailto:guilhermealmartins@gmail.com"                 className="hover:text-foreground transition-colors">
                  guilhermealmartins@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary shrink-0" />
                <span>{t("contact-location-value")}</span>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4">{t("contact-social")}</h3>
            <div className="flex gap-3">
              <Link
                href="https://github.com/guialvesmartins"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-md border border-border text-muted-foreground hover:text-foreground hover:border-neutral-500 transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </Link>
              <Link
                href="https://www.linkedin.com/in/guilhermealmartins/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-md border border-border text-muted-foreground hover:text-foreground hover:border-neutral-500 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link
                href="mailto:guilhermealmartins@gmail.com"
                className="p-2 rounded-md border border-border text-muted-foreground hover:text-foreground hover:border-neutral-500 transition-colors"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-border" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Guilherme Martins. {t("footer-text")}</p>
          <p>{t("footer-rights")}</p>
        </div>
      </div>
    </footer>
  );
}
