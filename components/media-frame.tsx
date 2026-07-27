'use client'

import { useState, type ReactNode } from 'react'
import { ImageIcon } from 'lucide-react'
import { cn } from '@/lib/utils'

interface MediaFrameProps {
  /** Point this at the final image path now (e.g. '/faculty/dhananjay.jpg').
   *  Until that file exists, the placeholder shows automatically — drop the
   *  correctly-named file in /public and it just appears, no code change. */
  src?: string
  alt?: string
  /** Caption shown on the placeholder so it reads as intentional, not broken. */
  label?: string
  /** Custom node shown in place of the default hatch placeholder (e.g. initials). */
  fallback?: ReactNode
  className?: string
  /** Tailwind aspect utility, e.g. 'aspect-video', 'aspect-square', 'aspect-[4/3]'. */
  aspect?: string
  rounded?: string
}

/**
 * Image slot with a graceful no-asset fallback. If `src` is missing OR the file
 * fails to load, a clean labelled placeholder (or a custom `fallback`) is shown
 * instead of a broken image — so pages look intentional before real media exists.
 */
export function MediaFrame({
  src,
  alt = '',
  label = 'Photo',
  fallback,
  className,
  aspect = 'aspect-[4/3]',
  rounded = 'rounded-xl',
}: MediaFrameProps) {
  const [errored, setErrored] = useState(false)
  const showImage = Boolean(src) && !errored

  return (
    <div className={cn('relative overflow-hidden border border-border bg-muted', aspect, rounded, className)}>
      {showImage ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={src}
          alt={alt}
          onError={() => setErrored(true)}
          className="absolute inset-0 h-full w-full object-cover"
        />
      ) : (
        <div
          className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-muted-foreground"
          style={{
            backgroundImage:
              'repeating-linear-gradient(45deg, color-mix(in oklch, var(--foreground) 4%, transparent) 0 1px, transparent 1px 12px)',
          }}
        >
          {fallback ?? (
            <>
              <ImageIcon size={22} className="opacity-50" />
              <span className="text-xs font-medium opacity-70">{label}</span>
            </>
          )}
        </div>
      )}
    </div>
  )
}
