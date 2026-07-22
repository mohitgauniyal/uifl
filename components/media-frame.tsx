import { ImageIcon } from 'lucide-react'
import { cn } from '@/lib/utils'

interface MediaFrameProps {
  /** When provided, the real image is shown; otherwise a clean labelled placeholder. */
  src?: string
  alt?: string
  /** Caption shown on the placeholder so it reads as intentional, not broken. */
  label?: string
  className?: string
  /** Tailwind aspect utility, e.g. 'aspect-video', 'aspect-square', 'aspect-[4/3]'. */
  aspect?: string
  rounded?: string
}

/**
 * Image slot with a graceful no-asset fallback. Drop a real `src` in later and
 * it just appears — no layout shift, no empty boxes.
 */
export function MediaFrame({
  src,
  alt = '',
  label = 'Photo',
  className,
  aspect = 'aspect-[4/3]',
  rounded = 'rounded-xl',
}: MediaFrameProps) {
  return (
    <div className={cn('relative overflow-hidden border border-border bg-muted', aspect, rounded, className)}>
      {src ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={src} alt={alt} className="absolute inset-0 h-full w-full object-cover" />
      ) : (
        <div
          className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-muted-foreground"
          style={{
            backgroundImage:
              'repeating-linear-gradient(45deg, color-mix(in oklch, var(--foreground) 4%, transparent) 0 1px, transparent 1px 12px)',
          }}
        >
          <ImageIcon size={22} className="opacity-50" />
          <span className="text-xs font-medium opacity-70">{label}</span>
        </div>
      )}
    </div>
  )
}
