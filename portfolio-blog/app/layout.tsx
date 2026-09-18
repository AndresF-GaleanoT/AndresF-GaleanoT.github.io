import type { Metadata, Viewport } from 'next'
import { Space_Grotesk, IBM_Plex_Mono } from 'next/font/google'
import './globals.css'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
})

const plexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-plex-mono',
  display: 'swap',
})

const SITE_URL = 'https://AndresF-GaleanoT.github.io'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Andres Felipe Galeano Tellez — Ingeniero de Sistemas, Data & AI Engineer',
    template: '%s — Andres Galeano',
  },
  description:
    'Ingeniero de Sistemas, Data Engineer y AI Engineer. Construyo pipelines de datos, arquitecturas escalables y soluciones inteligentes con Python, SQL, Cloud y Machine Learning.',
  keywords: [
    'Andres Felipe Galeano Tellez',
    'Andres Galeano',
    'AndresF-GaleanoT',
    'Data Engineer',
    'AI Engineer',
    'Software Engineer',
    'Python',
    'SQL',
    'Snowflake',
    'Docker',
    'Machine Learning',
    'Cybersecurity',
    'Colombia',
    'AWS',
    'Cloud Architecture',
    'Data Pipeline',
    'ETL',
    'Big Data',
    'Ingeniero de Sistemas',
    'Ingenieria de Sistemas',
    'Ingeniero de Datos',
  ],
  authors: [{ name: 'Andres Felipe Galeano Tellez' }],
  creator: 'Andres Felipe Galeano Tellez',
  alternates: { canonical: SITE_URL },
  openGraph: {
    type: 'website',
    locale: 'es_CO',
    url: SITE_URL,
    title: 'Andres Felipe Galeano Tellez — Ingeniero de Sistemas, Data & AI Engineer',
    description:
      'Portfolio y blog técnico de Andres Galeano: Data Engineering, IA, Cloud y Ciberseguridad.',
    siteName: 'Andres Galeano',
    images: [{ url: '/hero-blueprint.png', width: 800, height: 800, alt: 'Andres Felipe Galeano Tellez' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Andres Felipe Galeano Tellez — Ingeniero de Sistemas, Data & AI Engineer',
    description:
      'Portfolio y blog técnico: Data Engineering, IA, Cloud y Ciberseguridad.',
    images: ['/hero-blueprint.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
  generator: 'v0.app',
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#000000',
  width: 'device-width',
  initialScale: 1,
}

const jsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Andres Felipe Galeano Tellez',
    alternateName: 'AndresF-GaleanoT',
    givenName: 'Andres Felipe',
    familyName: 'Galeano Tellez',
    description:
      'Ingeniero de Sistemas, Data Engineer y AI Engineer. Construyo pipelines de datos, arquitecturas escalables y soluciones inteligentes.',
    image: `${SITE_URL}/hero-blueprint.png`,
    jobTitle: 'Ingeniero de Sistemas, Data Engineer',
    email: 'andresfelipegt70@gmail.com',
    url: SITE_URL,
    sameAs: [
      'https://github.com/AndresF-GaleanoT',
      'https://www.linkedin.com/in/andres-galeano-dev',
    ],
    knowsAbout: [
      'Data Engineering',
      'Artificial Intelligence',
      'Software Architecture',
      'Cybersecurity',
      'Cloud Computing',
    ],
    knowsLanguage: ['es', 'en'],
    nationality: { '@type': 'Country', name: 'Colombia' },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    url: SITE_URL,
    name: 'Andres Felipe Galeano Tellez — Data & AI Engineer',
    description:
      'Portfolio y blog técnico de Andres Galeano: Data Engineering, IA, Cloud y Ciberseguridad.',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'ProfilePage',
    url: SITE_URL,
    name: 'Andres Felipe Galeano Tellez',
    description:
    'Andres Felipe Galeano Tellez — Data Engineer, AI Engineer y Software Engineer. Construyo pipelines de datos, arquitecturas escalables y soluciones inteligentes con Python, SQL, Cloud y Machine Learning.',
    mainEntity: { '@id': `${SITE_URL}#person` },
  },
]

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="es"
      className={`dark ${spaceGrotesk.variable} ${plexMono.variable} bg-background`}
      suppressHydrationWarning
    >
      <head>
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        {jsonLd.map((schema, i) => (
          <script
            key={i}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />
        ))}
      </head>
      <body className="font-sans antialiased" suppressHydrationWarning>
        {children}
      </body>
    </html>
  )
}
