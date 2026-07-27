'use client'

import { Card } from '@/components/ui/card'
import { Play } from 'lucide-react'

interface VideoCardProps {
  title: string
  youtubeLink: string
  language: string
}

export function VideoCard({ title, youtubeLink, language }: VideoCardProps) {
  const getYoutubeId = (url: string) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/
    const match = url.match(regExp)
    return match && match[2].length === 11 ? match[2] : null
  }

  const videoId = getYoutubeId(youtubeLink)
  const thumbnailUrl = videoId ? `https://img.youtube.com/vi/${videoId}/hqdefault.jpg` : null

  return (
    <Card
      className="group overflow-hidden border-border hover:border-primary/40 transition-colors cursor-pointer"
      onClick={() => window.open(youtubeLink, '_blank')}
    >
      <div className="relative aspect-video overflow-hidden bg-muted">
        {thumbnailUrl && (
          <img src={thumbnailUrl} alt={title} className="w-full h-full object-cover" />
        )}
        <div className="absolute inset-0 flex items-center justify-center bg-foreground/10 group-hover:bg-foreground/25 transition-colors">
          <span className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-sm">
            <Play size={20} className="ml-0.5 fill-current" />
          </span>
        </div>
        <div className="absolute top-3 left-3">
          <span className="text-[10px] font-semibold uppercase tracking-wider bg-primary text-primary-foreground px-2 py-1 rounded">
            {language}
          </span>
        </div>
      </div>
      <div className="p-5 space-y-3">
        <h4 className="font-semibold text-foreground line-clamp-2 min-h-[3rem] group-hover:text-primary transition-colors leading-tight">
          {title}
        </h4>
        <div className="flex items-center justify-between pt-2 border-t border-border">
          <span className="text-xs text-muted-foreground font-medium flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-primary/60" />
            YouTube lesson
          </span>
          <span className="text-[10px] font-semibold text-primary uppercase tracking-wider">Watch</span>
        </div>
      </div>
    </Card>
  )
}
