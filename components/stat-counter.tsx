'use client'

import { useEffect, useRef, useState } from 'react'

interface StatCounterProps {
  target: number
  suffix?: string
  className?: string
}

export default function StatCounter({ target, suffix = '', className = '' }: StatCounterProps) {
  const [count, setCount] = useState(0)
  const hasAnimated = useRef(false)

  useEffect(() => {
    if (hasAnimated.current) return

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true
          const duration = 2000 // 2 seconds
          const start = Date.now()

          const timer = setInterval(() => {
            const elapsed = Date.now() - start
            const progress = Math.min(elapsed / duration, 1)
            
            // Easing function for smooth counting
            const easeOutQuad = 1 - (1 - progress) * (1 - progress)
            const currentCount = Math.floor(target * easeOutQuad)
            
            setCount(currentCount)

            if (progress === 1) {
              clearInterval(timer)
              setCount(target)
            }
          }, 16)

          return () => clearInterval(timer)
        }
      },
      { threshold: 0.3 }
    )

    const element = document.querySelector('[data-counter]')
    if (element) {
      observer.observe(element)
    }

    return () => observer.disconnect()
  }, [target])

  return (
    <div data-counter className={className}>
      {count.toLocaleString()}{suffix}
    </div>
  )
}
