'use client'

import { Star, PlayCircle, Quote } from 'lucide-react'
import { Card } from '@/components/ui/card'

interface TestimonialCardProps {
    name: string
    role: string
    content: string
    type: 'text' | 'video'
    language?: string
    avatar?: string
    videoUrl?: string
    rating?: number
}

export function TestimonialCard({
    name,
    role,
    content,
    type,
    language,
    avatar,
    videoUrl,
    rating = 5
}: TestimonialCardProps) {

    const getYoutubeId = (url: string) => {
        const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/
        const match = url?.match(regExp)
        return match && match[2].length === 11 ? match[2] : null
    }

    const videoId = videoUrl ? getYoutubeId(videoUrl) : null
    const thumbnailUrl = videoId ? `https://img.youtube.com/vi/${videoId}/hqdefault.jpg` : null

    // Function to get initials for avatar
    const getInitials = (name: string) => {
        return name
            .split(' ')
            .map((n) => n[0])
            .join('')
            .toUpperCase()
            .substring(0, 2)
    }

    return (
        <Card className="h-full flex flex-col overflow-hidden border-border hover:shadow-2xl transition-all duration-500 group bg-card/50 backdrop-blur-sm">
            {type === 'video' && videoUrl ? (
                <div
                    className="relative aspect-video overflow-hidden cursor-pointer"
                    onClick={() => window.open(videoUrl, '_blank')}
                >
                    {thumbnailUrl ? (
                        <img
                            src={thumbnailUrl}
                            alt={`${name}'s testimonial`}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                    ) : (
                        <div className="w-full h-full bg-secondary/10 flex items-center justify-center">
                            <PlayCircle size={48} className="text-primary/30" />
                        </div>
                    )}
                    <div className="absolute inset-0 bg-black/40 opacity-40 group-hover:opacity-60 transition-opacity" />
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="transform scale-90 group-hover:scale-100 transition-transform duration-300">
                            <PlayCircle size={64} className="text-white drop-shadow-2xl fill-primary/20" />
                        </div>
                    </div>
                    {language && (
                        <div className="absolute top-3 left-3">
                            <span className="text-[10px] font-bold uppercase tracking-wider bg-primary/90 text-primary-foreground px-2 py-1 rounded-md backdrop-blur-md shadow-lg">
                                {language}
                            </span>
                        </div>
                    )}
                </div>
            ) : (
                <div className="p-8 pb-0">
                    <Quote className="text-primary/10 w-12 h-12 -ml-2" />
                </div>
            )}

            <div className="p-8 pt-6 flex-1 flex flex-col">
                {type === 'text' && (
                    <div className="flex gap-1 mb-6">
                        {Array.from({ length: rating }).map((_, i) => (
                            <Star key={i} size={16} className="fill-secondary text-secondary" />
                        ))}
                    </div>
                )}

                <p className={`text-foreground/80 leading-relaxed italic mb-8 flex-1 ${type === 'text' ? 'text-lg' : 'text-sm'}`}>
                    &quot;{content}&quot;
                </p>

                <div className="flex items-center gap-4 pt-6 border-t border-border/50">
                    <div className="w-12 h-12 rounded-full overflow-hidden bg-primary/10 flex items-center justify-center border-2 border-primary/20 shadow-inner flex-shrink-0">
                        {avatar ? (
                            <img src={avatar} alt={name} className="w-full h-full object-cover" />
                        ) : (
                            <span className="text-sm font-black text-primary tracking-tighter">
                                {getInitials(name)}
                            </span>
                        )}
                    </div>
                    <div className="min-w-0">
                        <h4 className="font-bold text-foreground text-sm truncate leading-none mb-1.5">{name}</h4>
                        <p className="text-xs text-muted-foreground font-medium truncate italic">{role}</p>
                    </div>
                    {type === 'text' && language && (
                        <div className="ml-auto">
                            <span className="text-[9px] font-extra-bold bg-muted text-muted-foreground px-2 py-0.5 rounded uppercase tracking-widest border border-border">
                                {language}
                            </span>
                        </div>
                    )}
                </div>
            </div>
        </Card>
    )
}
