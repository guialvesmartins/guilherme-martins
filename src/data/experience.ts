export interface Job {
  id: number;
  titleKey: string;
  company: string;
  period: string;
  descKey: string;
  tags: string[];
  current?: boolean;
}

export interface Education {
  id: number;
  titleKey: string;
  institutionKey: string;
  yearKey: string;
  descKey: string;
  type: "postgrad" | "bachelor";
}

export const jobs: Job[] = [
  {
    id: 1,
    titleKey: "job-title-1",
    company: "SESI-GO",
    period: "2025 - Atual",
    descKey: "job-desc-1",
    tags: ["Java", "Quarkus", "Spring", "React", "TypeScript", "Node.js", "SQL Server", "JSF"],
    current: true,
  },
  {
    id: 2,
    titleKey: "job-title-2",
    company: "SESI-GO",
    period: "2023 - 2025",
    descKey: "job-desc-2",
    tags: ["TOTVS Protheus", "ADVPL", "TL++", "POUI", "API Rest", "SQL Server"],
  },
  {
    id: 3,
    titleKey: "job-title-3",
    company: "Libert Solutions",
    period: "2021 - 2023",
    descKey: "job-desc-3",
    tags: ["TOTVS Protheus", "ADVPL", "SQL", "Stored Procedures"],
  },
  {
    id: 4,
    titleKey: "job-title-4",
    company: "Libert Solutions",
    period: "2019 - 2021",
    descKey: "job-desc-4",
    tags: ["ADVPL", "ERP Protheus"],
  },
  {
    id: 5,
    titleKey: "job-title-5",
    company: "Libert Solutions",
    period: "2017 - 2018",
    descKey: "job-desc-5",
    tags: ["Suporte Técnico", "Infraestrutura", "Hardware"],
  },
];

export const education: Education[] = [
  {
    id: 2,
    titleKey: "education-2-title",
    institutionKey: "education-2-institution",
    yearKey: "education-2-year",
    descKey: "education-2-desc",
    type: "postgrad",
  },
  {
    id: 1,
    titleKey: "education-1-title",
    institutionKey: "education-1-institution",
    yearKey: "education-1-year",
    descKey: "education-1-desc",
    type: "postgrad",
  },
  {
    id: 3,
    titleKey: "education-3-title",
    institutionKey: "education-3-institution",
    yearKey: "education-3-year",
    descKey: "education-3-desc",
    type: "bachelor",
  },
];
