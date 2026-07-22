import type { ReactNode } from 'react'

interface PageHeaderProps {
  eyebrow?: string
  title: string
  description?: string
  children?: ReactNode
}

/** Consistent page header used across all inner pages. */
export function PageHeader({ eyebrow, title, description, children }: PageHeaderProps) {
  return (
    <section className="border-b border-border bg-muted/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-20">
        {eyebrow && <p className="text-sm font-semibold text-primary mb-3">{eyebrow}</p>}
        <h1 className="text-4xl sm:text-5xl font-bold text-foreground max-w-3xl leading-[1.1]">
          {title}
        </h1>
        {description && (
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl leading-relaxed">
            {description}
          </p>
        )}
        {children}
      </div>
    </section>
  )
}
