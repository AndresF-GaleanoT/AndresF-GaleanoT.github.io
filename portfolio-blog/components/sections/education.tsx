'use client'

import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/reveal'
import { EDUCATION } from '@/lib/data'
import { GraduationCap } from 'lucide-react'

const timelineLine = {
  hidden: { height: 0 },
  visible: {
    height: '100%',
    transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] },
  },
}

const timelineDot = {
  hidden: { scale: 0, opacity: 0 },
  visible: (i: number) => ({
    scale: 1,
    opacity: 1,
    transition: { delay: 0.15 + i * 0.12, duration: 0.4, ease: [0.22, 1, 0.36, 1] },
  }),
}

const timelineCard = {
  hidden: { opacity: 0, x: -20 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { delay: 0.2 + i * 0.12, duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  }),
}

export function Education() {
  return (
    <section id="educacion" className="border-t-2 border-border py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          index="02"
          title="Educación"
          subtitle="Formación académica y diplomados."
        />

        <Reveal>
          <div className="relative overflow-hidden">
            <div
              className="absolute left-[19px] top-0 w-0.5 bg-border md:left-[23px]"
              style={{ height: '100%' }}
            />
            <div className="space-y-10 pl-12 md:pl-14">
              {EDUCATION.map((item, i) => (
                <div key={`${item.title}-${i}`} className="relative">
                  <div
                    className="absolute left-[-30px] top-1 z-10 grid size-10 place-items-center border-2 border-foreground bg-accent text-accent-foreground md:left-[-36px] md:size-12"
                  >
                    <GraduationCap className="size-4 md:size-5" />
                  </div>
                  <div className="border-2 border-border bg-card p-6 shadow-hard-sm md:p-8">
                    <div className="flex flex-wrap items-start justify-between gap-2">
                      <div>
                        <h3 className="text-xl font-bold uppercase tracking-tight md:text-2xl">
                          {item.title}
                        </h3>
                        <p className="mt-1 font-mono text-sm text-accent">
                          {item.org}
                        </p>
                      </div>
                      <span className="shrink-0 border border-border px-3 py-1 font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
                        {item.period}
                      </span>
                    </div>
                    <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
