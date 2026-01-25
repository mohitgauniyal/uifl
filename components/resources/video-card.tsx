'use client'

import { Card } from '@/components/ui/card'
import { PlayCircle } from 'lucide-react'

interface VideoCardProps {
  title: string
  youtubeLink: string
  language: string
}

export function VideoCard({ title, youtubeLink, language }: VideoCardProps) {
  // Extract YouTube ID
  const getYoutubeId = (url: string) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/
    const match = url.match(regExp)
    return match && match[2].length === 11 ? match[2] : null
  }

  const videoId = getYoutubeId(youtubeLink)
  const thumbnailUrl = videoId ? `https://img.youtube.com/vi/${videoId}/hqdefault.jpg` : null

  return (
    <Card 
      className="group overflow-hidden border-border hover:shadow-xl transition-all duration-500 hover:border-primary/50 cursor-pointer bg-card/50 backdrop-blur-sm"
      onClick={() => window.open(youtubeLink, '_blank')}
    >
      <div className="relative aspect-video overflow-hidden">
        {thumbnailUrl ? (
          <img 
            src={thumbnailUrl} 
            alt={title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
        ) : (
          <div className="w-full h-full bg-muted flex items-center justify-center">
            <PlayCircle size={48} className="text-muted-foreground/30" />
          </div>
        )}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
            <PlayCircle size={64} className="text-white drop-shadow-2xl" />
          </div>
        </div>
        <div className="absolute top-3 left-3">
          <span className="text-[10px] font-bold uppercase tracking-wider bg-primary/90 text-primary-foreground px-2 py-1 rounded-md backdrop-blur-md shadow-lg">
            {language}
          </span>
        </div>
      </div>
      <div className="p-5 space-y-3">
        <h4 className="font-bold text-foreground line-clamp-2 min-h-[3rem] group-hover:text-primary transition-colors duration-300 leading-tight">
          {title}
        </h4>
        <div className="flex items-center justify-between pt-2 border-t border-border/50">
          <span className="text-xs text-muted-foreground font-medium flex items-center gap-1.5">
             <div className="w-1.5 h-1.5 rounded-full bg-primary/60" />
             YouTube Lesson
          </span>
          <span className="text-[10px] font-bold text-primary group-hover:underline underline-offset-4 decoration-2">
            WATCH NOW
          </span>
        </div>
      </div>
    </Card>
  )
}
