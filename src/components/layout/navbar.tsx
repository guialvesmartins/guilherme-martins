"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, Sun, Moon } from "lucide-react";
import { useLanguage } from "@/i18n/language-provider";
import { useTheme } from "@/components/theme-provider";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const navLinks = [
  { href: "/", key: "nav-home" },
  { href: "/about", key: "nav-about" },
  { href: "/experience", key: "nav-experience" },
  { href: "/projects", key: "nav-projects" },
];

export function Navbar() {
  const { t, language, setLanguage } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/80 border-b border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="font-mono text-foreground font-semibold text-base tracking-tight hover:opacity-70 transition-opacity"
        >
          GUILHERME MARTINS
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-foreground",
                pathname === link.href ? "text-foreground" : "text-muted-foreground"
              )}
            >
              {t(link.key)}
            </Link>
          ))}
        </nav>

        {/* Controls: language + theme + mobile */}
        <div className="flex items-center gap-2">
          {/* Language switcher */}
          <div className="flex items-center font-mono text-xs border border-border rounded-md overflow-hidden">
            <button
              onClick={() => setLanguage("pt")}
              className={cn(
                "px-2.5 py-1.5 transition-colors",
                language === "pt"
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground"
              )}
              aria-label="Português"
            >
              PT
            </button>
            <span className="w-px h-4 bg-border" />
            <button
              onClick={() => setLanguage("es")}
              className={cn(
                "px-2.5 py-1.5 transition-colors",
                language === "es"
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground"
              )}
              aria-label="Español"
            >
              ES
            </button>
          </div>

          {/* Theme toggle */}
          <button
            onClick={toggleTheme}
            className="p-1.5 rounded-md border border-border text-muted-foreground hover:text-foreground hover:border-ring transition-colors"
            aria-label={theme === "dark" ? "Mudar para tema claro" : "Mudar para tema escuro"}
          >
            {theme === "dark" ? (
              <Sun className="h-4 w-4" />
            ) : (
              <Moon className="h-4 w-4" />
            )}
          </button>

          {/* Mobile menu */}
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" aria-label="Menu">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-card border-border w-64">
              <div className="flex flex-col gap-1 mt-8">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={cn(
                      "px-4 py-3 rounded-md text-sm font-medium transition-colors",
                      pathname === link.href
                        ? "bg-secondary text-foreground"
                        : "text-muted-foreground hover:bg-secondary hover:text-foreground"
                    )}
                  >
                    {t(link.key)}
                  </Link>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
