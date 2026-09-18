'use client'

import { SectionHeading } from '@/components/section-heading'
import { Stagger, StaggerItem } from '@/components/reveal'
import { TiltCard } from '@/components/tilt-card'
import { BLOG_CATEGORIES, BLOG_POSTS } from '@/lib/data'
import { Calendar, Clock, ArrowRight } from 'lucide-react'

export function Blog() {
  return (
    <section id="blog" className="border-t-2 border-border py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          index="06"
          title="Blog"
          subtitle="Próximamente — artículos sobre Data Engineering, Python, SQL, ML, Cloud y más."
        />

        <Stagger className="mb-8 flex flex-wrap gap-2">
          {BLOG_CATEGORIES.map((cat) => (
            <StaggerItem key={cat}>
              <span className="border-2 border-border bg-card px-3 py-1.5 font-mono text-xs uppercase tracking-wider transition-colors hover:border-foreground hover:bg-accent hover:text-accent-foreground">
                {cat}
              </span>
            </StaggerItem>
          ))}
        </Stagger>

        <Stagger className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {BLOG_POSTS.map((post, i) => (
            <StaggerItem key={`${post.title}-${i}`} y={28}>
              <TiltCard max={4}>
                <article className="flex h-full flex-col border-2 border-border bg-card p-6 shadow-hard-sm transition-colors hover:border-foreground">
                  <div className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Calendar className="size-3" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="size-3" />
                      {post.readTime}
                    </span>
                  </div>
                  <div className="mt-3 inline-flex self-start border border-accent px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-accent">
                    {post.category}
                  </div>
                  <h3 className="mt-4 flex-1 text-lg font-bold uppercase leading-tight tracking-tight">
                    {post.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {post.excerpt}
                  </p>
                  <div className="mt-5 flex items-center gap-1.5 font-mono text-[11px] font-semibold uppercase tracking-wider text-foreground transition-colors hover:text-accent">
                    Leer más <ArrowRight className="size-3.5" />
                  </div>
                </article>
              </TiltCard>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  )
}
