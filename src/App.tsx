import { useEffect, useState } from 'react'
import { PresentationLayout } from './components/PresentationLayout'
import { slides } from './data/slides'
import './App.css'

const clamp = (value: number) => Math.max(0, Math.min(slides.length - 1, value))

export default function App() {
  const [index, setIndex] = useState(() => clamp((Number.parseInt(location.hash.slice(1), 10) || 1) - 1))
  const [isFullscreen, setIsFullscreen] = useState(false)

  const next = () => setIndex((current) => clamp(current + 1))
  const previous = () => setIndex((current) => clamp(current - 1))

  useEffect(() => {
    location.hash = String(index + 1)
  }, [index])

  useEffect(() => {
    const onFullscreenChange = () => setIsFullscreen(Boolean(document.fullscreenElement))
    const onKeyDown = (event: KeyboardEvent) => {
      if (['ArrowRight', 'ArrowDown', 'PageDown', ' ', 'Enter'].includes(event.key)) {
        event.preventDefault()
        next()
      } else if (['ArrowLeft', 'ArrowUp', 'PageUp', 'Backspace'].includes(event.key)) {
        event.preventDefault()
        previous()
      } else if (event.key === 'Home') {
        setIndex(0)
      } else if (event.key === 'End') {
        setIndex(slides.length - 1)
      }
    }

    document.addEventListener('fullscreenchange', onFullscreenChange)
    window.addEventListener('keydown', onKeyDown)
    return () => {
      document.removeEventListener('fullscreenchange', onFullscreenChange)
      window.removeEventListener('keydown', onKeyDown)
    }
  })

  return (
    <PresentationLayout
      index={index}
      isFullscreen={isFullscreen}
      onIndexChange={setIndex}
      onNext={next}
      onPrevious={previous}
    />
  )
}
