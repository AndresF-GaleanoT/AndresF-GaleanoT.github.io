'use client'

import { useRef, useState } from 'react'
import { chatCompletion } from '@/lib/nvidia-chat'
import { buildSystemPrompt } from '@/lib/portfolio-data'

type Msg = { role: 'user' | 'assistant'; content: string }

export function AIChat() {
  const [msgs, setMsgs] = useState<Msg[]>([])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const abortRef = useRef<AbortController | null>(null)
  const endRef = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  const scroll = () => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight
    }
  }

  async function send() {
    const q = input.trim()
    if (!q || loading) return
    setInput('')

    const userMsg: Msg = { role: 'user', content: q }
    setMsgs((prev) => [...prev, userMsg])
    setLoading(true)

    const controller = new AbortController()
    abortRef.current = controller

    const allMsgs = [
      { role: 'system' as const, content: buildSystemPrompt() },
      ...msgs.map((m) => ({ role: m.role as 'user' | 'assistant', content: m.content })),
      { role: 'user' as const, content: q },
    ]

    try {
      const stream = await chatCompletion(allMsgs, controller.signal)
      const reader = stream.getReader()

      let accumulated = ''
      setMsgs((prev) => [...prev, { role: 'assistant', content: '' }])

      while (true) {
        const { done, value } = await reader.read()
        if (done) break
        accumulated += value
        setMsgs((prev) => {
          const copy = [...prev]
          copy[copy.length - 1] = { role: 'assistant', content: accumulated }
          return copy
        })
        scroll()
      }
    } catch (err: any) {
      if (err.name !== 'AbortError') {
        setMsgs((prev) => [
          ...prev,
          { role: 'assistant', content: `_Error: ${err.message}_` },
        ])
      }
    } finally {
      setLoading(false)
      abortRef.current = null
      scroll()
    }
  }

  function stop() {
    abortRef.current?.abort()
  }

  function handleKey(e: React.KeyboardEvent) {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      send()
    }
  }

  return (
    <div className="flex h-full flex-col border-2 border-foreground bg-card shadow-hard">
      <div className="flex items-center justify-between border-b-2 border-foreground px-4 py-3">
        <span className="font-mono text-xs font-bold uppercase tracking-wider text-accent">
          Chat Andres AI
        </span>
        <span className="size-2 animate-pulse bg-accent" />
      </div>

      <div ref={containerRef} className="flex-1 overflow-y-auto p-4 space-y-3" style={{ minHeight: 0 }}>
        {msgs.length === 0 && (
          <p className="font-mono text-xs text-muted-foreground">
            Pregúntame sobre Andres: experiencia, proyectos, skills, educación...
          </p>
        )}
        {msgs.map((m, i) => (
          <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div
              className={`max-w-[90%] border-2 px-3 py-2 font-mono text-sm leading-relaxed ${
                m.role === 'user'
                  ? 'border-foreground bg-background text-foreground'
                  : 'border-foreground'
              }`}
              style={
                m.role === 'assistant'
                  ? { background: '#0a0a0a', color: '#55ff55', borderColor: '#55ff55' }
                  : undefined
              }
            >
              {m.content}
            </div>
          </div>
        ))}
        {loading && (
          <div className="flex justify-start">
            <div className="animate-pulse border-2 border-accent px-3 py-2 font-mono text-sm text-accent">
              Escribiendo...
            </div>
          </div>
        )}
        <div ref={endRef} />
      </div>

      <div className="flex items-end gap-2 border-t-2 border-foreground p-3">
        <div className="relative flex-1">
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKey}
            placeholder="Escribe tu pregunta..."
            rows={1}
            className="w-full resize-none border-2 border-foreground bg-background px-3 py-2.5 font-mono text-sm text-foreground outline-none placeholder:text-muted-foreground"
          />
        </div>
        <button
          onClick={loading ? stop : send}
          className={`flex items-center gap-1.5 border-2 px-4 py-2.5 font-mono text-xs font-bold uppercase tracking-wider shadow-hard-sm transition-transform hover:-translate-x-0.5 hover:-translate-y-0.5 ${
            loading
              ? 'border-destructive bg-destructive text-destructive-foreground'
              : 'border-foreground bg-accent text-accent-foreground'
          }`}
        >
          {loading ? 'Stop' : 'Enviar'}
        </button>
      </div>
    </div>
  )
}
