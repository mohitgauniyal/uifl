'use client'

import { useState } from 'react'
import { Play } from 'lucide-react'

interface IntroVideoProps {
  /** YouTube URL or watch/share link. When absent, a clean placeholder is shown. */
  videoUrl?: string
  /** Optional poster image behind the play button. */
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
 * Welcome / intro video slot. Plays inline when a YouTube URL is supplied;
 * otherwise shows an intentional "video coming soon" placeholder.
 */
export function IntroVideo({
  videoUrl,
  poster,
  label = 'Welcome to Unique Institute',
  caption = 'A short introduction to our centre & method',
}: IntroVideoProps) {
  const [playing, setPlaying] = useState(false)
  const id = getYoutubeId(videoUrl)
  const thumb = poster ?? (id ? `https://img.youtube.com/vi/${id}/hqdefault.jpg` : undefined)
  const playable = Boolean(id)

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
