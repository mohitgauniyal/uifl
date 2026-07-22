import type { ReactNode } from 'react'

interface EditorialStatementProps {
  eyebrow: string
  /** Large statement line; wrap a phrase in a primary-colored span for emphasis. */
  statement: ReactNode
  pillars: { title: string; description: string }[]
}

/**
 * Editorial "big statement + supporting pillars" section. No cards, no icon
 * chips — the statement carries the section, with clean ruled columns below.
 */
export function EditorialStatement({ eyebrow, statement, pillars }: EditorialStatementProps) {
  return (
    <div>
      <p className="text-sm font-semibold text-primary mb-4">{eyebrow}</p>
      <p className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-[1.15] max-w-4xl">
        {statement}
      </p>
      <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0">
        {pillars.map((pillar, i) => (
          <div
            key={pillar.title}
            className={`pt-6 border-t border-border md:pt-0 md:border-t-0 md:pl-8 md:border-l ${
              i === 0 ? 'md:pl-0 md:border-l-0' : ''
            }`}
          >
            <h3 className="font-semibold text-foreground">{pillar.title}</h3>
            <p className="mt-2 text-muted-foreground leading-relaxed">{pillar.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
