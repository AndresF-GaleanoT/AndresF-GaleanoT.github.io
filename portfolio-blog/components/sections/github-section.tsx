'use client'

import { SectionHeading } from '@/components/section-heading'
import { Stagger, StaggerItem } from '@/components/reveal'
import { TiltCard } from '@/components/tilt-card'
import { PROJECTS, GITHUB_USERNAME } from '@/lib/data'
import { Code2, GitCommit, ExternalLink } from 'lucide-react'
import { GitHubIcon } from '@/components/icons'

function repoName(url: string) {
  return url.split('/').pop() || ''
}

function primaryLang(stack: string[]) {
  return stack[0] || 'N/A'
}

const technologies = () => {
  const set = new Set<string>()
  PROJECTS.forEach((p) => p.stack.forEach((s) => set.add(s)))
  return Array.from(set).sort()
}

export function GithubSection() {
  const techs = technologies()

  return (
    <section id="github" className="border-t-2 border-border py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          index="07"
          title="GitHub"
          subtitle="Contribuciones, actividad y código abierto."
        />

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          <Stagger className="lg:col-span-2">
            <StaggerItem>
              <div className="border-2 border-foreground bg-card shadow-hard">
                <div className="flex items-center justify-between border-b-2 border-border px-6 py-4">
                  <h3 className="font-mono text-sm font-bold uppercase tracking-wider">
                    Repositorios Destacados
                  </h3>
                  <a
                    href={`https://github.com/${GITHUB_USERNAME}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 py-1.5 font-mono text-xs text-muted-foreground transition-colors hover:text-foreground"
                  >
                    <GitHubIcon className="size-4" />
                    @{GITHUB_USERNAME}
                  </a>
                </div>
                <div className="grid grid-cols-1 divide-y-2 divide-border sm:grid-cols-2 sm:divide-y-0 sm:divide-x-2">
                  {PROJECTS.map((project) => (
                    <a
                      key={project.title}
                      href={project.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex flex-col p-6 no-underline transition-colors hover:bg-secondary"
                    >
                      <div className="flex items-start justify-between">
                        <Code2 className="size-5 text-accent" />
                      </div>
                      <h4 className="mt-3 font-mono text-sm font-bold uppercase tracking-tight">
                        {repoName(project.repo)}
                      </h4>
                      <p className="mt-1 flex-1 text-sm text-muted-foreground">
                        {project.description}
                      </p>
                      <div className="mt-4 flex items-center justify-between">
                        <span className="font-mono text-[10px] uppercase tracking-wider text-accent">
                          {primaryLang(project.stack)}
                        </span>
                        <ExternalLink className="size-3.5 text-muted-foreground" />
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </StaggerItem>
          </Stagger>

          <Stagger>
            <StaggerItem>
              <TiltCard max={4}>
                <div className="border-2 border-foreground bg-card p-6 shadow-hard-sm">
                  <h3 className="flex items-center gap-2 font-mono text-sm font-bold uppercase tracking-wider">
                    <Code2 className="size-4 text-accent" />
                    Tecnologías
                  </h3>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {techs.map((tech) => (
                      <span
                        key={tech}
                        className="border-2 border-border bg-background px-2.5 py-1 font-mono text-[11px] uppercase tracking-wider"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a
                    href={`https://github.com/${GITHUB_USERNAME}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 flex w-full items-center justify-center gap-2 border-2 border-foreground bg-accent px-5 py-3 text-sm font-bold uppercase tracking-wide text-accent-foreground shadow-hard-sm transition-transform hover:-translate-x-0.5 hover:-translate-y-0.5"
                  >
                    <GitCommit className="size-4" />
                    Ver actividad
                  </a>
                </div>
              </TiltCard>
            </StaggerItem>
          </Stagger>
        </div>
      </div>
    </section>
  )
}
