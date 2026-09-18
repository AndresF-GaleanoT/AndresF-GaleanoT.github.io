# Andres Felipe Galeano Tellez — Portfolio

Portfolio personal y blog técnico construido con **Next.js 16**, **React 19**, **TypeScript**, **Tailwind CSS** y **shadcn/ui**.

## Stack

- **Framework:** Next.js 16 (App Router, static export)
- **Language:** TypeScript
- **Styling:** Tailwind CSS, shadcn/ui, tw-animate-css
- **Animations:** motion (Framer Motion)
- **Deploy:** GitHub Pages (vía GitHub Actions)

## Características

- Diseño brutalista oscuro con estética Minecraft
- CD flotante con la canción actual de Spotify (vía GitHub Actions + API)
- Chat IA嵌入ido en la sección "Sobre mí" que responde preguntas sobre mi perfil (vía NVIDIA API, Llama 3.1)
- SEO optimizado con JSON-LD (Person, WebSite, ProfilePage)
- Sitemap dinámico y robots.txt
- Totalmente responsivo

## Desarrollo local

```bash
cd portfolio-blog
npm install
npm run dev
```

Variables de entorno necesarias (`.env.local`):

```
NEXT_PUBLIC_NVIDIA_API_KEY=tu_key_aqui
```

## Build

```bash
npm run build
```

El build genera una exportación estática en `out/`.

## Estructura

```
portfolio-blog/
├── app/
│   ├── api/chat/       # Proxy API para NVIDIA
│   ├── layout.tsx       # Layout raíz con SEO + JSON-LD
│   ├── page.tsx         # Página principal
│   ├── sitemap.ts       # Sitemap dinámico
│   └── globals.css      # Estilos globales + animaciones
├── components/
│   ├── sections/        # Secciones del portfolio
│   ├── ai-chat.tsx      # Chat IA integrado en About
│   └── spotify-now-playing.tsx  # CD flotante de Spotify
├── lib/                 # Datos, utilidades y contexto para IA
├── public/              # Assets estáticos
└── scripts/             # Scripts (Spotify now-playing)
```

## Licencia

MIT
