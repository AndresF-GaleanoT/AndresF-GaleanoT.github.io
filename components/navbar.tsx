'use client'

import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { Download, Menu, X } from 'lucide-react'
import { GitHubIcon } from '@/components/icons'
import { NAV_LINKS, SOCIALS } from '@/lib/data'
import { ThemeToggle } from '@/components/theme-toggle'
import { cn } from '@/lib/utils'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  const handleNav = (href: string) => {
    setMobileOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  const navItems = NAV_LINKS.filter(
    (l) => l.href !== '#educacion' && l.href !== '#certificaciones',
  )

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-[70] transition-all duration-300',
        scrolled
          ? 'border-b-2 border-border bg-background/90 backdrop-blur-md'
          : 'border-b-2 border-transparent',
      )}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <button
          onClick={() => handleNav('#inicio')}
          className="group glitch flex items-center gap-2 font-mono text-sm font-bold uppercase tracking-tight"
        >
          <span className="grid size-8 place-items-center border-2 border-foreground bg-accent text-accent-foreground">
            AG
          </span>
          <span className="hidden sm:inline">galeano.dev</span>
        </button>

        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNav(link.href)}
              className="relative px-3 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <a
            href={SOCIALS.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="grid size-11 place-items-center border-2 border-border transition-colors hover:bg-accent hover:text-accent-foreground"
          >
            <GitHubIcon className="size-4" />
          </a>

          <ThemeToggle />

          <a
            href="/cv-andres-galeano.pdf"
            download
            className="hidden items-center gap-2 border-2 border-foreground bg-accent px-4 py-2.5 text-sm font-bold text-accent-foreground shadow-hard-sm transition-transform hover:-translate-y-0.5 lg:flex"
          >
            <Download className="size-4" />
            Download CV
          </a>

          <button
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Menú"
            className="grid size-11 place-items-center border-2 border-border lg:hidden"
          >
            {mobileOpen ? <X className="size-4" /> : <Menu className="size-4" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-b-2 border-border bg-background lg:hidden"
          >
            <div className="grid gap-1 px-4 py-4 sm:px-6">
              {navItems.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNav(link.href)}
                  className="flex items-center justify-between border-2 border-border px-4 py-3 text-left text-base font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
                >
                  {link.label}
                </button>
              ))}
              <a
                href="/cv-andres-galeano.pdf"
                download
                className="mt-2 flex items-center justify-center gap-2 border-2 border-foreground bg-accent px-4 py-3 text-base font-bold text-accent-foreground"
              >
                <Download className="size-4" />
                Download CV
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
