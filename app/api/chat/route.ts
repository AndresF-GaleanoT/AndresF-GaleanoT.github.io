import { NextRequest } from 'next/server'

const NVIDIA_URL = 'https://integrate.api.nvidia.com/v1/chat/completions'

export async function POST(req: NextRequest) {
  const apiKey = process.env.NVIDIA_API_KEY
  if (!apiKey) return Response.json({ error: 'API key no configurada' }, { status: 500 })

  const body = await req.json()

  const res = await fetch(NVIDIA_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify(body),
  })

  if (!res.ok) {
    const text = await res.text()
    return Response.json({ error: `NVIDIA error ${res.status}: ${text}` }, { status: res.status })
  }

  const reader = res.body?.getReader()
  if (!reader) return Response.json({ error: 'No response body' }, { status: 502 })

  const encoder = new TextEncoder()
  const decoder = new TextDecoder()

  const stream = new ReadableStream({
    async start(controller) {
      let buffer = ''
      while (true) {
        const { done, value } = await reader.read()
        if (done) break
        buffer += decoder.decode(value, { stream: true })
        const lines = buffer.split('\n')
        buffer = lines.pop() || ''
        for (const line of lines) {
          const t = line.trim()
          if (!t || !t.startsWith('data: ')) continue
          const d = t.slice(6)
          if (d === '[DONE]') continue
          try {
            const p = JSON.parse(d)
            const c = p.choices?.[0]?.delta?.content || ''
            if (c) controller.enqueue(encoder.encode(c))
          } catch { /* skip */ }
        }
      }
      controller.close()
    },
    cancel() { reader.cancel() },
  })

  return new Response(stream, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  })
}
