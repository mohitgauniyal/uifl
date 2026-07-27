'use client'

import { useState } from 'react'
import { Play } from 'lucide-react'

interface IntroVideoProps {
  /** YouTube URL or watch/share link. When present, the slot becomes an inline player. */
  videoUrl?: string
  /** Standing photo shown when there's no video yet (e.g. '/gallery/hero.jpg').
   *  Swap in `videoUrl` later and this becomes the poster / player automatically. */
  image?: string
  /** Optional explicit poster image behind the play button (defaults to YouTube thumb). */
  poster?: string
  label?: string
  caption?: string
}

function getYoutubeId(url?: string) {
  if (!url) return null
  const match = url.match(/^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/)
  return match && match[2].length === 11 ? match[2] : null
}

/**
 * Hero media slot with three states, so it's swap-ready end to end:
 *  1. `videoUrl` set  → inline YouTube player (play button + poster).
 *  2. only `image` set → clean framed photo, no fake play button.
 *  3. nothing set      → intentional "coming soon" placeholder.
 */
export function IntroVideo({
  videoUrl,
  image,
  poster,
  label = 'Welcome to Unique Institute',
  caption = 'A short introduction to our centre & method',
}: IntroVideoProps) {
  const [playing, setPlaying] = useState(false)
  const [imgErrored, setImgErrored] = useState(false)
  const id = getYoutubeId(videoUrl)
  const playable = Boolean(id)

  // State 1: inline player once opened
  if (playing && id) {
    return (
      <div className="relative aspect-video overflow-hidden rounded-xl border border-border bg-black shadow-sm">
        <iframe
          className="absolute inset-0 h-full w-full"
          src={`https://www.youtube.com/embed/${id}?autoplay=1&rel=0`}
          title={label}
          allow="accelerated-motion; autoplay; encrypted-media; picture-in-picture"
          allowFullScreen
        />
      </div>
    )
  }

  // State 2: standing photo, no video yet — a real photo, not a broken player
  if (!playable && image && !imgErrored) {
    return (
      <figure className="relative aspect-video w-full overflow-hidden rounded-xl border border-border bg-muted shadow-sm">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={image}
          alt={label}
          onError={() => setImgErrored(true)}
          className="absolute inset-0 h-full w-full object-cover [filter:saturate(1.08)_contrast(1.04)]"
        />
        {/* Subtle vignette for a cinematic, intentional feel (no blur — the real photo stays sharp) */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              'radial-gradient(115% 115% at 50% 42%, transparent 55%, color-mix(in oklch, var(--foreground) 32%, transparent) 100%)',
          }}
        />
        {caption && (
          <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-foreground/70 to-transparent p-4 text-sm font-medium text-white">
            {caption}
          </figcaption>
        )}
      </figure>
    )
  }

  // State 1 (poster) / State 3 (placeholder)
  const thumb = poster ?? (id ? `https://img.youtube.com/vi/${id}/hqdefault.jpg` : undefined)

  return (
    <button
      type="button"
      onClick={() => playable && setPlaying(true)}
      aria-label={playable ? `Play: ${label}` : `${label} — video coming soon`}
      className="group relative block aspect-video w-full overflow-hidden rounded-xl border border-border bg-muted shadow-sm text-left"
      style={
        thumb
          ? undefined
          : {
              backgroundImage:
                'repeating-linear-gradient(45deg, color-mix(in oklch, var(--foreground) 4%, transparent) 0 1px, transparent 1px 14px)',
            }
      }
    >
      {thumb && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={thumb}
          alt={label}
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      )}
      {thumb && <div className="absolute inset-0 bg-foreground/20" />}

      <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 p-6 text-center">
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg transition-transform duration-300 group-hover:scale-110">
          <Play size={22} className="ml-0.5 fill-current" />
        </span>
        <span className={`text-sm font-semibold ${thumb ? 'text-white' : 'text-foreground'}`}>{label}</span>
        <span className={`text-xs ${thumb ? 'text-white/80' : 'text-muted-foreground'}`}>
          {playable ? caption : 'Video coming soon'}
        </span>
      </div>
    </button>
  )
}
