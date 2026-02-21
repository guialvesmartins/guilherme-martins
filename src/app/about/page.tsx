import { AboutContent } from "@/components/sections/about-content";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sobre | Guilherme Martins",
  description: "Conheça mais sobre Guilherme Martins, Desenvolvedor Full Stack com 8+ anos de experiência.",
};

export default function AboutPage() {
  return <AboutContent />;
}
