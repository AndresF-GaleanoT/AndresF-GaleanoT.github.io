import { cn } from '@/lib/utils'

export function Marquee({
  items,
  className,
  separator = '✦',
}: {
  items: string[]
  className?: string
  separator?: string
}) {
  const row = [...items, ...items]

  return (
    <div
      className={cn(
        'overflow-hidden border-y-2 border-border bg-acid-green text-black',
        className,
      )}
    >
      <div className="flex w-max animate-marquee whitespace-nowrap py-2.5">
        {row.map((item, i) => (
          <span
            key={i}
            className="flex items-center gap-4 pr-4 font-mono text-sm font-bold uppercase tracking-[0.2em]"
          >
            {item}
            <span className="opacity-50">{separator}</span>
          </span>
        ))}
      </div>
    </div>
  )
}
