import { cn } from '@/lib/utils'

/**
 * Small, refined SVG flags for the languages we teach — not emoji, so they
 * render consistently everywhere. Keyed by language id.
 */
const flags: Record<string, React.ReactNode> = {
  french: (
    <svg viewBox="0 0 3 2" className="h-full w-full" preserveAspectRatio="none">
      <rect width="3" height="2" fill="#F5F5F5" />
      <rect width="1" height="2" fill="#0055A4" />
      <rect x="2" width="1" height="2" fill="#EF4135" />
    </svg>
  ),
  german: (
    <svg viewBox="0 0 3 2" className="h-full w-full" preserveAspectRatio="none">
      <rect width="3" height="2" fill="#000000" />
      <rect y="0.667" width="3" height="0.667" fill="#DD0000" />
      <rect y="1.333" width="3" height="0.667" fill="#FFCE00" />
    </svg>
  ),
  spanish: (
    <svg viewBox="0 0 3 2" className="h-full w-full" preserveAspectRatio="none">
      <rect width="3" height="2" fill="#AA151B" />
      <rect y="0.5" width="3" height="1" fill="#F1BF00" />
    </svg>
  ),
  japanese: (
    <svg viewBox="0 0 3 2" className="h-full w-full" preserveAspectRatio="none">
      <rect width="3" height="2" fill="#F5F5F5" />
      <circle cx="1.5" cy="1" r="0.6" fill="#BC002D" />
    </svg>
  ),
  russian: (
    <svg viewBox="0 0 3 2" className="h-full w-full" preserveAspectRatio="none">
      <rect width="3" height="2" fill="#F5F5F5" />
      <rect y="0.667" width="3" height="0.667" fill="#0039A6" />
      <rect y="1.333" width="3" height="0.667" fill="#D52B1E" />
    </svg>
  ),
  english: (
    <svg viewBox="0 0 60 30" className="h-full w-full" preserveAspectRatio="none">
      <clipPath id="uk">
        <rect width="60" height="30" />
      </clipPath>
      <g clipPath="url(#uk)">
        <rect width="60" height="30" fill="#012169" />
        <path d="M0,0 L60,30 M60,0 L0,30" stroke="#FFFFFF" strokeWidth="6" />
        <path d="M0,0 L60,30 M60,0 L0,30" stroke="#C8102E" strokeWidth="2.5" />
        <rect x="25" width="10" height="30" fill="#FFFFFF" />
        <rect y="10" width="60" height="10" fill="#FFFFFF" />
        <rect x="27" width="6" height="30" fill="#C8102E" />
        <rect y="12" width="60" height="6" fill="#C8102E" />
      </g>
    </svg>
  ),
  chinese: (
    <svg viewBox="0 0 3 2" className="h-full w-full" preserveAspectRatio="none">
      <rect width="3" height="2" fill="#DE2910" />
      <g fill="#FFDE00">
        <polygon
          points="0,-1 0.2245,-0.309 0.951,-0.309 0.363,0.118 0.588,0.809 0,0.382 -0.588,0.809 -0.363,0.118 -0.951,-0.309 -0.2245,-0.309"
          transform="translate(0.5,0.5) scale(0.33)"
        />
        <polygon
          points="0,-1 0.2245,-0.309 0.951,-0.309 0.363,0.118 0.588,0.809 0,0.382 -0.588,0.809 -0.363,0.118 -0.951,-0.309 -0.2245,-0.309"
          transform="translate(1.0,0.18) scale(0.1)"
        />
        <polygon
          points="0,-1 0.2245,-0.309 0.951,-0.309 0.363,0.118 0.588,0.809 0,0.382 -0.588,0.809 -0.363,0.118 -0.951,-0.309 -0.2245,-0.309"
          transform="translate(1.22,0.45) scale(0.1)"
        />
        <polygon
          points="0,-1 0.2245,-0.309 0.951,-0.309 0.363,0.118 0.588,0.809 0,0.382 -0.588,0.809 -0.363,0.118 -0.951,-0.309 -0.2245,-0.309"
          transform="translate(1.22,0.78) scale(0.1)"
        />
        <polygon
          points="0,-1 0.2245,-0.309 0.951,-0.309 0.363,0.118 0.588,0.809 0,0.382 -0.588,0.809 -0.363,0.118 -0.951,-0.309 -0.2245,-0.309"
          transform="translate(1.0,1.05) scale(0.1)"
        />
      </g>
    </svg>
  ),
}

interface FlagProps {
  /** Language id: french, german, spanish, japanese, russian, english, chinese */
  code: string
  /** Tailwind size classes for the 3:2 frame, e.g. 'h-4 w-6'. */
  className?: string
}

export function Flag({ code, className }: FlagProps) {
  const flag = flags[code]
  if (!flag) return null
  return (
    <span
      className={cn(
        'inline-flex overflow-hidden rounded-[3px] ring-1 ring-black/10 shadow-sm shrink-0',
        className,
      )}
      aria-hidden="true"
    >
      {flag}
    </span>
  )
}
