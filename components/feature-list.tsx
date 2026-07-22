interface FeatureListItem {
  title: string
  description: string
  /** Optional small meta line under the description (e.g. duration). */
  meta?: string
}

interface FeatureListProps {
  eyebrow: string
  title: string
  intro?: string
  items: FeatureListItem[]
}

/**
 * Editorial "sticky heading + ruled list" section (no cards, no icon chips).
 * The heading holds on the left while the list scrolls on the right.
 */
export function FeatureList({ eyebrow, title, intro, items }: FeatureListProps) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
      <div className="lg:col-span-4">
        <div className="lg:sticky lg:top-32">
          <p className="text-sm font-semibold text-primary mb-2">{eyebrow}</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">{title}</h2>
          {intro && <p className="mt-4 text-muted-foreground leading-relaxed">{intro}</p>}
        </div>
      </div>
      <div className="lg:col-span-8">
        <dl className="divide-y divide-border border-t border-border">
          {items.map((item) => (
            <div key={item.title} className="py-6 grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-6">
              <dt className="font-semibold text-foreground">{item.title}</dt>
              <dd className="sm:col-span-2 text-muted-foreground leading-relaxed">
                {item.description}
                {item.meta && (
                  <span className="block mt-2 text-sm text-muted-foreground/80">{item.meta}</span>
                )}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  )
}
