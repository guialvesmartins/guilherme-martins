import type { Localized } from "@/i18n/language-provider";

/**
 * independent: produtos meus e freelas — com prints, link e página de detalhe.
 * corporate: sistemas em que trabalhei em empresas — card resumido, sem print nem stack.
 */
export type ProjectCategory = "independent" | "corporate";
export type ProjectStatus = "live" | "completed" | "in-progress";
export type SubProjectIcon = "panel" | "server" | "calendar" | "trophy" | "globe";

/** Parte de uma plataforma maior (ex.: os produtos do ArenaFácil). */
export interface SubProject {
  name: Localized;
  description: Localized;
  stack: string[];
  icon: SubProjectIcon;
  url?: string;
}

export interface Project {
  slug: string;
  title: string;
  /** Linha abaixo do título: nome por extenso de uma sigla (ex.: CR5) ou o foco do card. */
  subtitle?: Localized;
  category: ProjectCategory;
  /** Rótulo acima do título nos cards corporativos (ex.: Sistema FIEG). */
  context?: string;
  summary: Localized;
  /** Texto da página de detalhe. Parágrafos separados por linha em branco. */
  description?: Localized;
  features?: Localized[];
  subprojects?: SubProject[];
  tags: string[];
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
  images?: string[];
  /** Aparece na home. */
  featured?: boolean;
  /** Card largo no topo da página de projetos e da home. */
  flagship?: boolean;
  status?: ProjectStatus;
  year?: number;
}

export const projects: Project[] = [
  {
    slug: "arena-facil",
    title: "ArenaFácil",
    category: "independent",
    flagship: true,
    featured: true,
    status: "live",
    year: 2025,
    summary: {
      pt: "SaaS multi-tenant para gestão de arenas esportivas, com agendamento online, pagamento por Pix ou cartão, PDV, financeiro e um app de torneios.",
      es: "SaaS multi-tenant para la gestión de arenas deportivas, con reservas online, pago con Pix o tarjeta, PDV, finanzas y una app de torneos.",
    },
    description: {
      pt: "Plataforma completa para arenas de futebol society, beach tennis e vôlei. Cobre agenda e mensalistas, aulas e turmas, Day Use, PDV com comandas e fila da cozinha, estoque, caixa, financeiro e dashboard, além do agendamento online em que o próprio jogador reserva e paga. Cada arena assina um plano: recursos e limites são liberados por feature gates, e a cobrança recorrente roda via Asaas.\n\nA plataforma é dividida em produtos independentes: uma API central em Quarkus, o painel da arena em React, a vitrine pública de agendamento atrás de um BFF em Express, um microsserviço de torneios com banco próprio e o site institucional em Next.js. A autenticação é centralizada no Keycloak (SSO), e tudo roda em Docker Swarm com deploy automatizado pelo GitHub Actions.",
      es: "Plataforma completa para arenas de fútbol society, beach tennis y vóley. Cubre agenda y abonados, clases y grupos, Day Use, PDV con comandas y cola de cocina, inventario, caja, finanzas y dashboard, además de las reservas online, donde el propio jugador reserva y paga. Cada arena contrata un plan: las funciones y los límites se habilitan por feature gates, y el cobro recurrente se hace vía Asaas.\n\nLa plataforma está dividida en productos independientes: una API central en Quarkus, el panel de la arena en React, la página pública de reservas detrás de un BFF en Express, un microservicio de torneos con base de datos propia y el sitio institucional en Next.js. La autenticación está centralizada en Keycloak (SSO), y todo corre en Docker Swarm con deploy automatizado por GitHub Actions.",
    },
    features: [
      {
        pt: "Agenda por quadra com reservas avulsas, mensalistas e bloqueios de horário",
        es: "Agenda por cancha con reservas sueltas, abonados y bloqueos de horario",
      },
      {
        pt: "Aulas e turmas com professor, matrícula e mensalidade",
        es: "Clases y grupos con profesor, matrícula y mensualidad",
      },
      {
        pt: "PDV com comandas, baixa automática de estoque e fila da cozinha",
        es: "PDV con comandas, descuento automático de inventario y cola de cocina",
      },
      {
        pt: "Caixa, financeiro e dashboard de indicadores",
        es: "Caja, finanzas y dashboard de indicadores",
      },
      {
        pt: "Agendamento online sem cadastro, com pagamento por Pix ou cartão (Mercado Pago)",
        es: "Reservas online sin registro, con pago por Pix o tarjeta (Mercado Pago)",
      },
      {
        pt: "Planos de assinatura com período de teste e cobrança recorrente via Asaas",
        es: "Planes de suscripción con período de prueba y cobro recurrente vía Asaas",
      },
      {
        pt: "Torneios com ranking ao vivo, link público e modo telão",
        es: "Torneos con ranking en vivo, enlace público y modo pantalla gigante",
      },
    ],
    subprojects: [
      {
        icon: "panel",
        name: { pt: "Painel da arena", es: "Panel de la arena" },
        description: {
          pt: "Usado pelo dono e pela equipe no dia a dia: agenda, clientes, PDV, caixa, financeiro e relatórios. Instalável como PWA.",
          es: "Lo usan el dueño y el equipo en el día a día: agenda, clientes, PDV, caja, finanzas y reportes. Instalable como PWA.",
        },
        stack: ["React 19", "Vite", "TanStack Query", "Zustand"],
        url: "https://app.arenafacil.com.br",
      },
      {
        icon: "calendar",
        name: { pt: "Agendamento online", es: "Reservas online" },
        description: {
          pt: "Vitrine pública em que o jogador reserva sem cadastro e paga na hora. Um BFF em Express protege a API com Turnstile, rate limit e idempotência.",
          es: "Página pública donde el jugador reserva sin registrarse y paga en el momento. Un BFF en Express protege la API con Turnstile, rate limit e idempotencia.",
        },
        stack: ["React 19", "Node.js", "Express", "Mercado Pago"],
        url: "https://agendar.arenafacil.com.br",
      },
      {
        icon: "trophy",
        name: { pt: "Torneios", es: "Torneos" },
        description: {
          pt: "Microsserviço independente, com banco próprio, para torneios em duplas (americano/Super N, grupos e mata-mata), com ranking ao vivo, link público e modo telão.",
          es: "Microservicio independiente, con base de datos propia, para torneos en parejas (americano/Super N, grupos y eliminatoria), con ranking en vivo, enlace público y modo pantalla gigante.",
        },
        stack: ["Node.js", "Express", "MongoDB", "React 19"],
        url: "https://torneios.arenafacil.com.br",
      },
      {
        icon: "server",
        name: { pt: "API central", es: "API central" },
        description: {
          pt: "Toda a regra de negócio em um backend multi-tenant: isolamento por arena, planos com feature gates e integrações de pagamento.",
          es: "Toda la regla de negocio en un backend multi-tenant: aislamiento por arena, planes con feature gates e integraciones de pago.",
        },
        stack: ["Java 21", "Quarkus", "PostgreSQL", "Keycloak"],
      },
      {
        icon: "globe",
        name: { pt: "Site institucional", es: "Sitio institucional" },
        description: {
          pt: "Site de marketing focado em SEO, com página por funcionalidade, planos, sitemap e dados estruturados (JSON-LD).",
          es: "Sitio de marketing enfocado en SEO, con página por funcionalidad, planes, sitemap y datos estructurados (JSON-LD).",
        },
        stack: ["Next.js", "Tailwind CSS"],
        url: "https://arenafacil.com.br",
      },
    ],
    tags: ["SaaS", "Multi-tenant", "Fullstack"],
    techStack: [
      "Java 21",
      "Quarkus",
      "PostgreSQL",
      "Keycloak",
      "React 19",
      "TypeScript",
      "Node.js",
      "Express",
      "MongoDB",
      "Next.js",
      "Tailwind CSS",
      "TanStack Query",
      "Zustand",
      "Docker Swarm",
      "GitHub Actions",
    ],
    liveUrl: "https://arenafacil.com.br",
    images: [
      "/projects/arena-facil/print_project1.png",
      "/projects/arena-facil/print_project2.png",
      "/projects/arena-facil/print_project3.png",
      "/projects/arena-facil/agendar.png",
      "/projects/arena-facil/site.png",
    ],
  },
  {
    slug: "credenciar",
    title: "Credenciar",
    category: "independent",
    featured: true,
    status: "live",
    year: 2026,
    summary: {
      pt: "Plataforma para igrejas, escolas e empresas emitirem carteirinhas e crachás com QR code validável, do cadastro à impressão.",
      es: "Plataforma para iglesias, escuelas y empresas emitir carnés y credenciales con código QR verificable, del registro a la impresión.",
    },
    description: {
      pt: "Cada instituição cadastra as pessoas, monta o layout das carteirinhas a partir de modelos prontos, emite e imprime. Cada carteirinha tem um QR code que mostra, na hora, se ela é válida.\n\nMonorepo com backend em Express 5 e MongoDB, frontend em React 19 instalável como PWA e um pacote compartilhado com as regras de domínio e os contratos da API validados com Zod. O PDF é gerado no servidor com Chromium (Playwright), os dados de cada entidade ficam isolados das demais e o projeto tem mais de 500 testes automatizados, entre unitários, de integração e end-to-end.",
      es: "Cada institución registra a las personas, arma el diseño de los carnés a partir de plantillas, los emite e imprime. Cada carné tiene un código QR que muestra, en el momento, si es válido.\n\nMonorepo con backend en Express 5 y MongoDB, frontend en React 19 instalable como PWA y un paquete compartido con las reglas de dominio y los contratos de la API validados con Zod. El PDF se genera en el servidor con Chromium (Playwright), los datos de cada entidad están aislados de los demás y el proyecto tiene más de 500 pruebas automatizadas, entre unitarias, de integración y end-to-end.",
    },
    features: [
      {
        pt: "Editor visual de layouts, com frente e verso, a partir de modelos prontos",
        es: "Editor visual de diseños, con frente y reverso, a partir de plantillas",
      },
      {
        pt: "Campos configuráveis por entidade e importação de pessoas por planilha",
        es: "Campos configurables por entidad e importación de personas por planilla",
      },
      {
        pt: "Link de autocadastro com aprovação antes da emissão",
        es: "Enlace de autorregistro con aprobación antes de la emisión",
      },
      {
        pt: "Emissão em PDF gerada no servidor",
        es: "Emisión en PDF generada en el servidor",
      },
      {
        pt: "Validação pública pelo QR code",
        es: "Validación pública por código QR",
      },
      {
        pt: "Conta própria para cada pessoa ver as carteirinhas no celular",
        es: "Cuenta propia para que cada persona vea sus carnés en el celular",
      },
      {
        pt: "Equipe com papéis definidos e dados isolados por entidade",
        es: "Equipo con roles definidos y datos aislados por entidad",
      },
    ],
    tags: ["SaaS", "PWA", "Fullstack"],
    techStack: [
      "Express 5",
      "TypeScript",
      "MongoDB",
      "Mongoose",
      "Better Auth",
      "Zod",
      "Playwright",
      "React 19",
      "Vite",
      "Tailwind CSS",
      "shadcn/ui",
      "TanStack Query",
      "Vitest",
      "Docker Swarm",
    ],
    liveUrl: "https://credenciar.art.br",
    images: [
      "/projects/credenciar/print_project1.png",
      "/projects/credenciar/print_project2.png",
      "/projects/credenciar/print_project3.png",
    ],
  },
  {
    slug: "pacotera",
    title: "Pacotera",
    category: "independent",
    featured: true,
    status: "completed",
    year: 2024,
    summary: {
      pt: "Finanças pessoais com cartões, faturas, pagamentos recorrentes, importação de extratos OFX e análise com IA.",
      es: "Finanzas personales con tarjetas, facturas, pagos recurrentes, importación de extractos OFX y análisis con IA.",
    },
    description: {
      pt: "Aplicação para organizar as finanças pessoais, do lançamento da despesa à fatura do cartão.\n\nBackend em Node.js e Express com API REST autenticada por JWT, validação com express-validator e PostgreSQL via Prisma ORM. Frontend em React com TailwindCSS, Radix UI e TanStack Query. Publicado com Docker Swarm.",
      es: "Aplicación para organizar las finanzas personales, desde el registro del gasto hasta la factura de la tarjeta.\n\nBackend en Node.js y Express con API REST autenticada por JWT, validación con express-validator y PostgreSQL vía Prisma ORM. Frontend en React con TailwindCSS, Radix UI y TanStack Query. Publicado con Docker Swarm.",
    },
    features: [
      {
        pt: "Receitas e despesas com calendário mensal de transações",
        es: "Ingresos y gastos con calendario mensual de transacciones",
      },
      {
        pt: "Cartões de crédito, faturas e pagamentos recorrentes",
        es: "Tarjetas de crédito, facturas y pagos recurrentes",
      },
      {
        pt: "Importação de extratos bancários no formato OFX",
        es: "Importación de extractos bancarios en formato OFX",
      },
      {
        pt: "Dashboard com a visão geral das finanças",
        es: "Dashboard con la visión general de las finanzas",
      },
      {
        pt: "Análise dos dados com IA (Google Generative AI)",
        es: "Análisis de los datos con IA (Google Generative AI)",
      },
    ],
    tags: ["Fullstack", "IA"],
    techStack: [
      "Node.js",
      "Express",
      "TypeScript",
      "Prisma ORM",
      "PostgreSQL",
      "JWT",
      "React",
      "Vite",
      "TailwindCSS",
      "Radix UI",
      "TanStack Query",
      "Docker Swarm",
    ],
    liveUrl: "https://pacotera.guilhermemartins.dev.br",
    images: [
      "/projects/pacotera/print_project1.png",
      "/projects/pacotera/print_project2.png",
      "/projects/pacotera/print_project3.png",
    ],
  },
  {
    slug: "my-eventos",
    title: "MyEventos",
    category: "independent",
    status: "completed",
    year: 2023,
    summary: {
      pt: "Gestão de eventos com API REST em ASP.NET Core e frontend em Angular.",
      es: "Gestión de eventos con API REST en ASP.NET Core y frontend en Angular.",
    },
    description: {
      pt: "Projeto desenvolvido em um curso prático de ASP.NET Core e Angular. Uma API REST em C# expõe o cadastro de eventos, e o frontend em Angular, com componentes TypeScript, consome essa API por HTTP.",
      es: "Proyecto desarrollado en un curso práctico de ASP.NET Core y Angular. Una API REST en C# expone el registro de eventos, y el frontend en Angular, con componentes TypeScript, consume esa API por HTTP.",
    },
    tags: ["Fullstack", "API REST"],
    techStack: ["ASP.NET Core", "C#", "Angular", "TypeScript", "HTML"],
    images: [
      "/projects/my-eventos/print_project1.png",
      "/projects/my-eventos/print_project2.png",
      "/projects/my-eventos/print_project3.png",
    ],
  },

  // ---------------------------------------------------------------------------
  // Projetos corporativos: card resumido, sem print, link ou stack (a stack da
  // empresa não é exposta) e sem página de detalhe.
  // ---------------------------------------------------------------------------
  {
    slug: "portal-de-pagamentos",
    title: "Portal de Pagamentos FIEG",
    category: "corporate",
    context: "Fullstack",
    summary: {
      pt: "Portal em que os clientes da FIEG, do SESI, do SENAI e do IEL pagam suas cobranças por Pix, boleto ou cartão.",
      es: "Portal donde los clientes de FIEG, SESI, SENAI e IEL pagan sus cobros con Pix, boleto o tarjeta.",
    },
    features: [
      { pt: "Pagamento por Pix, boleto ou cartão", es: "Pago con Pix, boleto o tarjeta" },
      { pt: "Atende as quatro casas: FIEG, SESI, SENAI e IEL", es: "Atiende a las cuatro instituciones: FIEG, SESI, SENAI e IEL" },
      { pt: "Integrado ao CR5, o sistema de contas a receber", es: "Integrado al CR5, el sistema de cuentas por cobrar" },
    ],
    tags: [],
    techStack: [],
  },
  {
    slug: "cr5",
    title: "CR5",
    subtitle: { pt: "Controle de Recebimento", es: "Control de Cobros" },
    category: "corporate",
    context: "Fullstack",
    summary: {
      pt: "Sistema que controla o faturamento e concentra grande parte do contas a receber da FIEG, do SESI, do SENAI e do IEL.",
      es: "Sistema que controla la facturación y concentra gran parte de las cuentas por cobrar de FIEG, SESI, SENAI e IEL.",
    },
    features: [
      { pt: "Geração de boletos e de cobranças Pix", es: "Generación de boletos y cobros Pix" },
      { pt: "Integração com meios de pagamento", es: "Integración con medios de pago" },
      { pt: "Conciliação de cartão de crédito", es: "Conciliación de tarjetas de crédito" },
      { pt: "Relatórios de faturamento e recebimento", es: "Reportes de facturación y cobros" },
    ],
    tags: [],
    techStack: [],
  },
  {
    slug: "sgr",
    title: "SGR",
    subtitle: { pt: "Sistema de Gestão de Representantes", es: "Sistema de Gestión de Representantes" },
    category: "corporate",
    context: "Fullstack",
    summary: {
      pt: "Controla onde a FIEG tem representação, em câmaras e eventos, e os mandatos de cada representante.",
      es: "Controla dónde la FIEG tiene representación, en cámaras y eventos, y los mandatos de cada representante.",
    },
    features: [
      { pt: "Representações da FIEG em câmaras", es: "Representaciones de la FIEG en cámaras" },
      { pt: "Controle dos eventos com representação da FIEG", es: "Control de los eventos con representación de la FIEG" },
      { pt: "Controle de mandatos dos representantes", es: "Control de mandatos de los representantes" },
    ],
    tags: [],
    techStack: [],
  },
  {
    slug: "integracoes-protheus",
    title: "Integrações com ERP Protheus",
    subtitle: { pt: "Integrações diversas", es: "Integraciones diversas" },
    category: "corporate",
    context: "Analista Protheus",
    summary: {
      pt: "Seis anos (2019–2025) dedicados ao ERP TOTVS Protheus: customizações em ADVPL e TL++ e integrações do ERP com os demais sistemas da empresa.",
      es: "Seis años (2019–2025) dedicados al ERP TOTVS Protheus: personalizaciones en ADVPL y TL++ e integraciones del ERP con los demás sistemas de la empresa.",
    },
    features: [
      {
        pt: "Portal de aprovação de solicitações e pedidos de compra (SC e PC)",
        es: "Portal de aprobación de solicitudes y pedidos de compra (SC y PC)",
      },
      { pt: "Integração de pagamentos", es: "Integración de pagos" },
      { pt: "Integração contábil", es: "Integración contable" },
      {
        pt: "Processos de Compras, Financeiro, Contábil, Fiscal e Estoque",
        es: "Procesos de Compras, Finanzas, Contabilidad, Fiscal e Inventario",
      },
    ],
    tags: [],
    techStack: [],
  },
];

/** Produtos próprios e freelas: têm prints e página de detalhe. */
export const independentProjects = projects.filter((p) => p.category === "independent");

/** Sistemas da empresa: só o card resumido. */
export const corporateProjects = projects.filter((p) => p.category === "corporate");

export const flagshipProject = independentProjects.find((p) => p.flagship);

/** Destaques da home, sem o carro-chefe (que tem card próprio). */
export const featuredProjects = independentProjects.filter((p) => p.featured && !p.flagship);
