export interface TechCategory {
  id: string;
  titleKey: string;
  icon: string;
  items: TechItem[];
}

export interface TechItem {
  labelKey: string;
  values: string[];
}

export interface SoftSkill {
  key: string;
  icon: string;
}

export interface Language {
  key: string;
  levelKey: string;
  percentage: number;
  flag: string;
}

export const techCategories: TechCategory[] = [
  {
    id: "backend",
    titleKey: "backend-title",
    icon: "Server",
    items: [
      { labelKey: "tech-languages", values: ["Java", "C#"] },
      { labelKey: "tech-frameworks", values: ["Spring Boot", "Quarkus", "ASP.NET"] },
      { labelKey: "tech-architecture", values: ["Microsserviços", "REST APIs", "Integrações"] },
    ],
  },
  {
    id: "frontend",
    titleKey: "frontend-title",
    icon: "Monitor",
    items: [
      { labelKey: "tech-frontend-libs", values: ["JavaScript", "TypeScript", "React","Angular"] },
      { labelKey: "tech-frameworks", values: ["Next.js", "Tailwind CSS", "ShadCN UI", "POUI"] },
    ],
  },
  {
    id: "database",
    titleKey: "database-title",
    icon: "Database",
    items: [
      { labelKey: "tech-languages", values: ["SQL Server", "PostgreSQL", "MySQL"] },
      { labelKey: "tech-tools", values: ["Stored Procedures", "Queries Complexas", "Modelagem"] },
    ],
  },
  {
    id: "erp",
    titleKey: "erp-title",
    icon: "Layers",
    items: [
      { labelKey: "erp-languages", values: ["ADVPL", "TL++","POUI"] },
      { labelKey: "erp-modules", values: ["Financeiro", "Contábil", "Fiscal", "Compras", "Estoque","Gestão de Contratos"] },
    ],
  },
  {
    id: "software-engineering",
    titleKey: "software-engineering-title",
    icon: "GitBranch",
    items: [
      { labelKey: "tech-practices", values: ["Clean Code", "SOLID"] },
      { labelKey: "tech-architecture-patterns", values: ["Clean Architecture", "DDD"] },
      { labelKey: "tech-devops", values: ["CI/CD", "Git Flow", "Docker"] },
    ],
  },
];

export const softSkills: SoftSkill[] = [
  { key: "skill-communication", icon: "MessageSquare" },
  { key: "skill-teamwork", icon: "Users" },
  { key: "skill-critical-thinking", icon: "Brain" },
  { key: "skill-organization", icon: "FolderOpen" },
  { key: "skill-proactivity", icon: "Zap" },
  { key: "skill-adaptability", icon: "RefreshCw" },
  { key: "skill-continuous-learning", icon: "BookOpen" },
];

export const spokenLanguages: Language[] = [
  {
    key: "language-portuguese",
    levelKey: "level-native",
    percentage: 100,
    flag: "🇧🇷",
  },
  {
    key: "language-spanish",
    levelKey: "level-intermediate-advanced",
    percentage: 75,
    flag: "🇪🇸",
  },
];
