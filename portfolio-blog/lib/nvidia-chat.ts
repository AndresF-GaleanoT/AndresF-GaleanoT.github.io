type Message = { role: 'system' | 'user' | 'assistant'; content: string }

export async function chatCompletion(messages: Message[], signal?: AbortSignal) {
  const res = await fetch('/api/chat', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      model: 'meta/llama-3.2-11b-vision-instruct',
      messages,
      temperature: 0.7,
      max_tokens: 512,
      stream: true,
    }),
    signal,
  })

  if (!res.ok) {
    const text = await res.text()
    throw new Error(`Error ${res.status}: ${text}`)
  }

  const reader = res.body?.getReader()
  if (!reader) throw new Error('No response body')

  const decoder = new TextDecoder()

  return new ReadableStream<string>({
    async start(controller) {
      while (true) {
        const { done, value } = await reader.read()
        if (done) break
        const text = decoder.decode(value, { stream: true })
        controller.enqueue(text)
      }
      controller.close()
    },
    cancel() { reader.cancel() },
  })
}
