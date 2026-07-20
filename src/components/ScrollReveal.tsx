'use client'
import { useEffect, useRef } from 'react'

export default function ScrollReveal({
  children,
  className = '',
  delay = 0,
  direction,
}: {
  children: React.ReactNode
  className?: string
  delay?: number
  direction?: 'left' | 'right' | 'scale' | 'fade'
}) {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('in')
          observer.unobserve(el)
        }
      },
      { threshold: 0.12 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const dirClass = direction ? ` reveal--${direction}` : ''

  return (
    <div ref={ref} className={`reveal${dirClass} ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  )
}
