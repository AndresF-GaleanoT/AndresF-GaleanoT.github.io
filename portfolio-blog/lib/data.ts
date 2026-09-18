export const NAV_LINKS = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Sobre mí', href: '#sobre-mi' },
  { label: 'Experiencia', href: '#experiencia' },
  { label: 'Proyectos', href: '#proyectos' },
  { label: 'Blog', href: '#blog' },
  { label: 'Educación', href: '#educacion' },
  { label: 'Certificaciones', href: '#certificaciones' },
  { label: 'Contacto', href: '#contacto' },
] as const

export const SOCIALS = {
  github: 'https://github.com/AndresF-GaleanoT',
  linkedin: 'https://www.linkedin.com/in/andres-galeano-dev',
  email: 'andresfelipegt70@gmail.com',
  phone: '+57 316 368 4112',
}

export const ROLES = [
  'Ingeniero de Sistemas',
  'Ingeniero de Datos e IA',
  'Especialista en Ciencia de Datos',
]

export const STATS = [
  { value: 2, suffix: '%', label: 'Top TryHackMe' },
  { value: 179, suffix: '', label: 'Salas completadas' },
  { value: 19, suffix: '', label: 'Insignias' },
  { value: 3, suffix: 'M+', label: 'Usuarios' },
]

export type SkillCategory = {
  id: string
  title: string
  index: string
  skills: { name: string; level: number }[]
}

export const SKILLS: SkillCategory[] = [
  {
    id: 'languages',
    title: 'Lenguajes',
    index: '01',
    skills: [
      { name: 'Python', level: 92 },
      { name: 'SQL', level: 90 },
      { name: 'Java', level: 78 },
      { name: 'R', level: 70 },
    ],
  },
  {
    id: 'data',
    title: 'Datos & BI',
    index: '02',
    skills: [
      { name: 'Pandas', level: 88 },
      { name: 'NumPy', level: 82 },
      { name: 'Polars', level: 74 },
      { name: 'Scikit-learn', level: 80 },
      { name: 'Power BI', level: 78 },
      { name: 'Tableau', level: 72 },
      { name: 'Excel', level: 86 },
    ],
  },
  {
    id: 'cloud',
    title: 'Cloud & DevOps',
    index: '03',
    skills: [
      { name: 'AWS', level: 76 },
      { name: 'Docker', level: 85 },
      { name: 'Git', level: 88 },
      { name: 'GitHub', level: 88 },
      { name: 'Linux', level: 80 },
    ],
  },
]

export type TimelineItem = {
  title: string
  org: string
  period: string
  description: string
  tags?: string[]
}

export const EDUCATION: TimelineItem[] = [
  {
    title: 'Ingeniería de Sistemas',
    org: 'Universidad Santo Tomás',
    period: 'ene 2022 — nov 2026',
    description:
      'Formación en fundamentos de software, algoritmos, estructuras de datos y arquitectura de sistemas.',
  },
  {
    title: 'Ingeniería de Datos e Inteligencia Artificial',
    org: 'Universidad Santo Tomás',
    period: 'ago 2026 — ago 2028',
    description:
      'Enfoque en pipelines de datos, machine learning e inteligencia artificial aplicada.',
  },
  {
    title: 'Especialización en Ciencia de Datos',
    org: 'Universidad Santo Tomás',
    period: 'ago 2026 — ago 2027',
    description:
      'Análisis estadístico avanzado, modelado predictivo y analítica moderna.',
  },
  {
    title: 'Diplomados en IA Generativa y Arquitectura de Software',
    org: 'Universidad de La Sabana',
    period: '2026',
    description:
      'IA generativa, ingeniería de prompts, agentes inteligentes, patrones de diseño y arquitecturas escalables.',
  },
  {
    title: 'Diplomado en Data Science (People Analytics)',
    org: 'Universidad del Rosario',
    period: '2025',
    description:
      'Aplicación de ciencia de datos a analítica de personas y toma de decisiones.',
  },
  {
    title: 'Diplomado en Excel',
    org: 'Universidad EAN',
    period: '2024',
    description:
      'Análisis avanzado, tablas dinámicas y modelado de datos en hojas de cálculo.',
  },
]

export type Certification = {
  name: string
  org: string
  year: string
  description: string
}

export const CERTIFICATIONS: Certification[] = [
  {
    name: 'Certificado profesional de Análisis de Datos',
    org: 'Google',
    year: '2023',
    description:
      'Análisis de datos, limpieza, visualización y toma de decisiones basada en datos.',
  },
  {
    name: 'Defending AWS',
    org: 'TryHackMe',
    year: '2026',
    description:
      'Ruta defensiva de seguridad en la nube AWS: monitoreo, detección y respuesta.',
  },
  {
    name: 'Essentials for Snowflake SnowPro Core',
    org: 'DataCamp',
    year: '2026',
    description:
      'Data warehousing en la nube, modelado y consultas analíticas escalables.',
  },
  {
    name: 'Supervised Machine Learning: Regression and Classification',
    org: 'DeepLearning.AI',
    year: '2025',
    description:
      'Modelos supervisados de regresión y clasificación con Python.',
  },
]

export const EXPERIENCE: TimelineItem[] = [
  {
    title: 'Desarrollador de Proyectos Académicos',
    org: 'Universidad Santo Tomás',
    period: 'ene 2023 — actualidad',
    description:
      'Desarrollo de proyectos de ingeniería aplicando buenas prácticas de backend, datos e IA generativa, con código público en GitHub.',
    tags: ['Backend', 'Datos', 'IA Generativa', 'GitHub'],
  },
  {
    title: 'Estudiante de Ciberseguridad / Aprendizaje Práctico',
    org: 'TryHackMe',
    period: 'ene 2023 — actualidad',
    description:
      'Laboratorios de seguridad ofensiva y defensiva; completé la ruta Defending AWS y me especialicé en AI Security. Top 2% mundial (entre más de 3 millones de usuarios) con 179 salas completadas y 19 insignias.',
    tags: ['Defending AWS', 'AI Security', 'Top 2%', '179 salas'],
  },
]

export type Project = {
  title: string
  description: string
  stack: string[]
  repo: string
  index: string
}

export const PROJECTS: Project[] = [
  {
    title: 'PricePulse-AI',
    description:
      'Análisis de precios en e-commerce con IA generativa: monitoreo y análisis automatizado de precios usando agentes.',
    stack: ['CrewAI', 'NVIDIA NIM', 'SerpAPI', 'n8n', 'Docker'],
    repo: 'https://github.com/AndresF-GaleanoT/pricepulse-ai',
    index: '01',
  },
  {
    title: 'Góndola Inteligente',
    description:
      'Visión computacional para retail: detección y seguimiento de productos en góndolas.',
    stack: ['YOLO', 'ByteTrack', 'FastAPI', 'React'],
    repo: 'https://github.com/AndresF-GaleanoT/gondola-inteligente',
    index: '02',
  },
  {
    title: 'CMS Multipaís',
    description:
      'Sistema de gestión de contenidos multi-país con arquitectura hexagonal.',
    stack: ['Express', 'Supabase', 'Arquitectura Hexagonal'],
    repo: 'https://github.com/KarollAmayita/ProyectoIntegradorVr1',
    index: '03',
  },
]

export type BlogPost = {
  title: string
  category: string
  excerpt: string
  date: string
  readTime: string
}

export const BLOG_CATEGORIES: string[] = []

export const BLOG_POSTS: BlogPost[] = []

export const GITHUB_USERNAME = 'AndresF-GaleanoT'
