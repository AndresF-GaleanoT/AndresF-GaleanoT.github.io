'use client'

import { SectionHeading } from '@/components/section-heading'
import { Stagger, StaggerItem } from '@/components/reveal'
import { TiltCard } from '@/components/tilt-card'
import { SKILLS } from '@/lib/data'

function SkillBar({ level }: { level: number }) {
  return (
    <div className="mt-3 h-2 w-full border border-foreground bg-background">
      <div
        className="h-full bg-accent transition-all duration-1000"
        style={{ width: `${level}%` }}
      />
    </div>
  )
}

export function Skills() {
  return (
    <section id="skills" className="border-t-2 border-border py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          index="01"
          title="Skills"
          subtitle="Tecnologías y herramientas con las que construyo soluciones de datos."
        />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {SKILLS.map((category) => (
            <Stagger key={category.id}>
              <StaggerItem>
                <TiltCard max={4}>
                  <div className="flex h-full flex-col border-2 border-foreground bg-card p-6 shadow-hard-sm">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs text-accent">
                        {category.index}
                      </span>
                      <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                        {category.skills.length} items
                      </span>
                    </div>
                    <h3 className="mt-4 text-xl font-bold uppercase tracking-tight">
                      {category.title}
                    </h3>
                    <div className="mt-6 flex-1 space-y-4">
                      {category.skills.map((skill) => (
                        <div key={skill.name}>
                          <div className="flex items-center justify-between font-mono text-sm">
                            <span>{skill.name}</span>
                            <span className="tabular-nums text-muted-foreground">
                              {skill.level}%
                            </span>
                          </div>
                          <SkillBar level={skill.level} />
                        </div>
                      ))}
                    </div>
                  </div>
                </TiltCard>
              </StaggerItem>
            </Stagger>
          ))}
        </div>
      </div>
    </section>
  )
}
