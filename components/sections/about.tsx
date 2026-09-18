import { SectionHeading } from '@/components/section-heading'
import { Reveal, Stagger, StaggerItem } from '@/components/reveal'
import { CountUp } from '@/components/count-up'
import { STATS } from '@/lib/data'
import { AIChat } from '@/components/ai-chat'

const KNOWLEDGE = ['Python', 'SQL', 'PostgreSQL', 'Snowflake', 'Docker']

export function About() {
  return (
    <section id="sobre-mi" className="border-t-2 border-border py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          index="00"
          title="Sobre mí"
          subtitle="Ingeniero de Sistemas, Ingeniero de Datos e IA, y Especialista en Ciencia de Datos."
        />

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
          <Reveal className="lg:col-span-7">
            <div className="h-full border-2 border-foreground bg-card p-8 shadow-hard md:p-10">
              <p className="text-pretty text-xl leading-relaxed md:text-2xl">
                Soy <strong>Andres Felipe Galeano Tellez</strong>, Ingeniero
                de Sistemas, Ingeniero de Datos e IA y Especialista en Ciencia
                de Datos. Diseño y construyo sistemas de datos de extremo a
                extremo: ingesta, transformación, modelado analítico y
                despliegue en la nube, con{' '}
                <span className="bg-accent px-1 font-semibold text-accent-foreground">
                  pipelines de datos
                </span>{' '}
                confiables para analítica moderna.
              </p>

              <p className="mt-6 text-pretty leading-relaxed text-muted-foreground">
                Actualmente curso Ingeniería de Sistemas e Ingeniería de Datos
                e IA en la Universidad Santo Tomás, junto con la
                Especialización en Ciencia de Datos. En ciberseguridad, Top 2%
                mundial en TryHackMe con 179 salas completadas y 19 insignias.
              </p>

              <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
                Stack principal: Python, SQL, FastAPI, Docker, PostgreSQL y
                Snowflake. Trabajo con AWS (S3, EC2) y automatizo pipelines con
                GitHub Actions.
              </p>

              <div className="mt-8">
                <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                  Conocimientos clave
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {KNOWLEDGE.map((k) => (
                    <span
                      key={k}
                      className="border-2 border-border px-3 py-1.5 font-mono text-sm"
                    >
                      {k}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal className="lg:col-span-5">
            <div className="h-full">
              <AIChat />
            </div>
          </Reveal>
        </div>

        <Stagger className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4">
          {STATS.map((stat) => (
            <StaggerItem key={stat.label}>
              <div className="border-2 border-border bg-card p-6">
                <p className="text-4xl font-bold tracking-tight text-accent md:text-5xl">
                  <CountUp value={stat.value} suffix={stat.suffix} />
                </p>
                <p className="mt-2 font-mono text-xs uppercase tracking-widest text-muted-foreground">
                  {stat.label}
                </p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  )
}
