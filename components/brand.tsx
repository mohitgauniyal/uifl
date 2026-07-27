'use client'

import Link from 'next/link'
import { useState } from 'react'

// Drop the logo at public/brand/logo.png (see public/ASSETS.md). Until it
// exists, the text wordmark shows instead — no broken image.
const LOGO_SRC: string | undefined = '/brand/logo.png'

// Your logo already contains the word "Unique", so we don't repeat it in text
// beside the mark. If you ever swap to an emblem-only logo (no word), set this
// to false and the full "Unique Institute" wordmark returns.
const LOGO_HAS_WORDMARK = true

interface BrandProps {
  className?: string
  /** Logo height utility (e.g. 'h-10', 'h-9'). */
  logoClassName?: string
  /** 'row' (logo beside text, for the navbar) or 'stacked' (logo above text, for the footer). */
  layout?: 'row' | 'stacked'
}

/**
 * Brand lockup used in the header and footer. Shows the logo when available and
 * avoids repeating "Unique" in text; falls back to the full text wordmark when
 * the logo is missing, fails to load, or is emblem-only.
 */
export function Brand({ className = '', logoClassName = 'h-10', layout = 'row' }: BrandProps) {
  const [logoOk, setLogoOk] = useState(Boolean(LOGO_SRC))
  const showLogo = Boolean(LOGO_SRC) && logoOk
  const showFullText = !showLogo || !LOGO_HAS_WORDMARK
  const container =
    layout === 'stacked' ? 'flex flex-col items-start gap-3' : 'flex items-center gap-3'

  return (
    <Link href="/" className={`${container} ${className}`}>
      {showLogo && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={LOGO_SRC}
          alt="Unique Institute of Foreign Languages"
          onError={() => setLogoOk(false)}
          className={`${logoClassName} w-auto`}
        />
      )}
      <span className="leading-none">
        {showFullText ? (
          <>
            <span className="block text-base font-bold tracking-tight text-foreground">Unique Institute</span>
            <span className="block mt-1 text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
              Foreign Languages · Est. 1999
            </span>
          </>
        ) : (
          <>
            <span className="block text-base font-bold tracking-tight text-foreground">
              Institute of Foreign Languages
            </span>
            <span className="block mt-1 text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
              Dehradun · Est. 1999
            </span>
          </>
        )}
      </span>
    </Link>
  )
}
