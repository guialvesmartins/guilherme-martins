export interface Project {
  id: number;
  slug: string;
  titleKey: string;
  descriptionKey: string;
  longDescriptionKey: string;
  tags: string[];
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
  images?: string[];
  featured: boolean;
  status: "completed" | "in-progress" | "archived";
  year: number;
}

export const projects: Project[] = [
  {
    id: 1,
    slug: "arena-facil",
    titleKey: "project-arena-title",
    descriptionKey: "project-arena-desc",
    longDescriptionKey: "project-arena-long",
    tags: ["Fullstack", "SaaS", "Multi-tenant"],
    techStack: ["Quarkus", "Java 21", "PostgreSQL", "Keycloak", "React 19", "TypeScript", "Tailwind CSS", "Zustand", "React Query", "Vite"],
    liveUrl: "https://arenafacil.com.br",
    images: [
      "/projects/arena-facil/print_project1.png",
      "/projects/arena-facil/print_project2.png",
      "/projects/arena-facil/print_project3.png",
    ],
    featured: true,
    status: "completed",
    year: 2025,
  },
  {
    id: 2,
    slug: "pacotera",
    titleKey: "project-pacotera-title",
    descriptionKey: "project-pacotera-desc",
    longDescriptionKey: "project-pacotera-long",
    tags: ["Fullstack", "Finanças"],
    techStack: ["Node.js", "Express", "TypeScript", "Prisma ORM", "PostgreSQL", "JWT", "React", "Vite", "TailwindCSS", "Radix UI", "TanStack Query", "Docker", "Docker Swarm"],
    liveUrl: "https://pacotera.guilhermemartins.dev.br",
    images: [
      "/projects/pacotera/print_project1.png",
      "/projects/pacotera/print_project2.png",
      "/projects/pacotera/print_project3.png",
    ],
    featured: false,
    status: "completed",
    year: 2024,
  },
  {
    id: 3,
    slug: "my-eventos",
    titleKey: "project-myeventos-title",
    descriptionKey: "project-myeventos-desc",
    longDescriptionKey: "project-myeventos-long",
    tags: ["Fullstack", "API REST"],
    techStack: ["ASP.NET Core", "C#", "Angular", "TypeScript", "HTML"],
    images: [
      "/projects/my-eventos/print_project1.png",
      "/projects/my-eventos/print_project2.png",
      "/projects/my-eventos/print_project3.png",
    ],
    featured: false,
    status: "completed",
    year: 2023,
  },
];
