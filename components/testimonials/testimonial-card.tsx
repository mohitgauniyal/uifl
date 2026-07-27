'use client'

import { Star, Play, Quote } from 'lucide-react'
import { Card } from '@/components/ui/card'
import {
    Dialog,
    DialogContent,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog'
import { useState } from 'react'

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
    rating = 5,
}: TestimonialCardProps) {
    const [isOpen, setIsOpen] = useState(false)
    const charLimit = 160
    const isLong = content.length > charLimit
    const displayedContent = isLong ? `${content.substring(0, charLimit)}...` : content

    const getYoutubeId = (url: string) => {
        const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/
        const match = url?.match(regExp)
        return match && match[2].length === 11 ? match[2] : null
    }

    const videoId = videoUrl ? getYoutubeId(videoUrl) : null
    const thumbnailUrl = videoId ? `https://img.youtube.com/vi/${videoId}/hqdefault.jpg` : null

    const getInitials = (name: string) =>
        name.split(' ').map((n) => n[0]).join('').toUpperCase().substring(0, 2)

    const PlayButton = ({ size }: { size: number }) => (
        <span
            className="flex items-center justify-center rounded-full bg-primary text-primary-foreground shadow-sm"
            style={{ height: size, width: size }}
        >
            <Play size={size * 0.42} className="ml-0.5 fill-current" />
        </span>
    )

    const CardBody = (
        <Card className="h-full flex flex-col overflow-hidden border-border hover:border-primary/40 transition-colors group cursor-pointer">
            {type === 'video' && videoUrl ? (
                <div
                    className="relative aspect-video overflow-hidden bg-muted"
                    onClick={(e) => {
                        e.stopPropagation()
                        window.open(videoUrl, '_blank')
                    }}
                >
                    {thumbnailUrl && (
                        <img src={thumbnailUrl} alt={`${name}'s testimonial`} className="w-full h-full object-cover" />
                    )}
                    <div className="absolute inset-0 flex items-center justify-center bg-foreground/10 group-hover:bg-foreground/25 transition-colors">
                        <PlayButton size={48} />
                    </div>
                    {language && (
                        <div className="absolute top-3 left-3">
                            <span className="text-[9px] font-semibold uppercase tracking-wider bg-primary text-primary-foreground px-2 py-0.5 rounded">
                                {language}
                            </span>
                        </div>
                    )}
                </div>
            ) : (
                <div className="px-6 pt-6 pb-2">
                    <Quote className="text-primary/15 w-8 h-8 -ml-1" />
                </div>
            )}

            <div className="px-6 pb-6 pt-2 flex-1 flex flex-col">
                {type === 'text' && (
                    <div className="flex gap-0.5 mb-3">
                        {Array.from({ length: rating }).map((_, i) => (
                            <Star key={i} size={12} className="fill-highlight text-highlight" />
                        ))}
                    </div>
                )}

                <div className="flex-1">
                    <p className={`text-foreground/80 leading-snug italic mb-4 ${type === 'text' ? 'text-sm' : 'text-xs'}`}>
                        &quot;{displayedContent}&quot;
                    </p>
                    {isLong && (
                        <button
                            className="text-[10px] font-semibold text-primary hover:underline underline-offset-4 uppercase tracking-wider mb-4 block"
                            onClick={() => setIsOpen(true)}
                        >
                            Read full story
                        </button>
                    )}
                </div>

                <div className="flex items-center gap-3 pt-4 border-t border-border">
                    <div className="w-10 h-10 rounded-full overflow-hidden bg-primary/5 flex items-center justify-center border border-primary/10 flex-shrink-0">
                        {avatar ? (
                            <img src={avatar} alt={name} className="w-full h-full object-cover" />
                        ) : (
                            <span className="text-xs font-bold text-primary">{getInitials(name)}</span>
                        )}
                    </div>
                    <div className="min-w-0">
                        <h4 className="font-semibold text-foreground text-[13px] truncate leading-none mb-1">{name}</h4>
                        <p className="text-[10px] text-muted-foreground font-medium truncate italic">{role}</p>
                    </div>
                    {type === 'text' && language && (
                        <div className="ml-auto">
                            <span className="text-[8px] font-semibold bg-muted text-muted-foreground px-1.5 py-0.5 rounded uppercase tracking-widest border border-border">
                                {language}
                            </span>
                        </div>
                    )}
                </div>
            </div>
        </Card>
    )

    return (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
                <div className="h-full">{CardBody}</div>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[500px] border border-border bg-background shadow-lg p-0 overflow-hidden rounded-xl">
                <DialogTitle className="sr-only">{name} — testimonial</DialogTitle>
                <div className="flex flex-col">
                    {type === 'video' && videoUrl ? (
                        <div
                            className="relative aspect-video overflow-hidden bg-muted cursor-pointer"
                            onClick={() => window.open(videoUrl, '_blank')}
                        >
                            {thumbnailUrl && (
                                <img src={thumbnailUrl} alt={`${name}'s testimonial`} className="w-full h-full object-cover" />
                            )}
                            <div className="absolute inset-0 flex items-center justify-center bg-foreground/15">
                                <PlayButton size={64} />
                            </div>
                        </div>
                    ) : (
                        <div className="p-10 pb-0 flex justify-center">
                            <Quote className="text-primary/15 w-20 h-20" />
                        </div>
                    )}

                    <div className="p-10 pt-6">
                        <div className="flex gap-1 mb-6">
                            {Array.from({ length: rating }).map((_, i) => (
                                <Star key={i} size={18} className="fill-highlight text-highlight" />
                            ))}
                        </div>

                        <p className="text-lg md:text-xl text-foreground leading-relaxed italic mb-10 text-balance">
                            &quot;{content}&quot;
                        </p>

                        <div className="flex items-center gap-6 pt-8 border-t border-border">
                            <div className="w-16 h-16 rounded-full overflow-hidden bg-primary/10 flex items-center justify-center border border-border flex-shrink-0">
                                {avatar ? (
                                    <img src={avatar} alt={name} className="w-full h-full object-cover" />
                                ) : (
                                    <span className="text-xl font-bold text-primary">{getInitials(name)}</span>
                                )}
                            </div>
                            <div className="min-w-0">
                                <h4 className="font-bold text-foreground text-2xl leading-none mb-2">{name}</h4>
                                <p className="text-sm text-primary font-semibold uppercase tracking-widest">{role}</p>
                                {language && (
                                    <p className="text-xs text-muted-foreground mt-1 font-medium">{language} Student</p>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    )
}
