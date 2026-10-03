import { useEffect, useRef, useState } from 'react'
import { slides } from '../data/slides'
import { ProgressBar } from './ProgressBar'
import { SidebarOutline } from './SidebarOutline'
import { SlideControlBar, SlideControls } from './SlideControls'
import { SlideRenderer } from './SlideRenderer'
import { WebClientDemo, type DemoModuleId } from '../demo/WebClientDemo'

type Props = {
  index: number
  isFullscreen: boolean
  onIndexChange: (index: number) => void
  onNext: () => void
  onPrevious: () => void
}

export function PresentationLayout({ index, isFullscreen, onIndexChange, onNext, onPrevious }: Props) {
  const root = useRef<HTMLDivElement>(null)
  const stage = useRef<HTMLDivElement>(null)
  const [menuOpen, setMenuOpen] = useState(false)
  const [scale, setScale] = useState(1)
  const [demoModule, setDemoModule] = useState<DemoModuleId | null>(null)
  const toggleFullscreen = () =>
    document.fullscreenElement ? document.exitFullscreen() : root.current?.requestFullscreen()

  useEffect(() => {
    const onDemoOpen = (event: Event) => {
      const moduleId = (event as CustomEvent<string>).detail
      const validModules: DemoModuleId[] = ['dashboard', 'pos', 'inventory', 'purchases', 'customers', 'reports', 'finance', 'expiry', 'employees', 'delivery']
      if (validModules.includes(moduleId as DemoModuleId)) setDemoModule(moduleId as DemoModuleId)
    }
    const onDemoKeyDown = (event: KeyboardEvent) => {
      if (demoModule && (event.key === 'Escape' || event.key === 'ArrowLeft' || event.key === 'Backspace')) {
        event.preventDefault()
        event.stopImmediatePropagation()
        setDemoModule(null)
      }
    }
    window.addEventListener('presentation-demo-open', onDemoOpen)
    window.addEventListener('keydown', onDemoKeyDown, true)
    return () => {
      window.removeEventListener('presentation-demo-open', onDemoOpen)
      window.removeEventListener('keydown', onDemoKeyDown, true)
    }
  }, [demoModule])

  useEffect(() => {
    const element = stage.current
    if (!element) return
    const fit = () => setScale(Math.min(element.clientWidth / 1920, element.clientHeight / 1080))
    fit()
    const observer = new ResizeObserver(fit)
    observer.observe(element)
    return () => observer.disconnect()
  }, [isFullscreen])

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key.toLowerCase() === 'f') toggleFullscreen()
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  })

  const onStageClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const bounds = event.currentTarget.getBoundingClientRect()
    if ((event.clientX - bounds.left) / bounds.width < 0.3) onPrevious()
    else onNext()
  }

  return (
    <div ref={root} className={`app ${isFullscreen ? 'is-full' : ''}`}>
      <SlideControls
        onMenu={() => setMenuOpen((open) => !open)}
      />
      <SidebarOutline index={index} open={menuOpen} onSelect={(next) => { onIndexChange(next); setMenuOpen(false) }} />
      <main ref={stage} className="stage" onClick={demoModule ? undefined : onStageClick}>
        {demoModule
          ? <WebClientDemo moduleId={demoModule} onBack={() => setDemoModule(null)} />
          : <SlideRenderer slide={slides[index]} scale={scale} />}
      </main>
      <footer className="bar">
        <SlideControlBar
          index={index}
          total={slides.length}
          onPrevious={onPrevious}
          onNext={onNext}
          onFullscreen={toggleFullscreen}
        />
        <ProgressBar value={(index + 1) / slides.length} />
      </footer>
      <p className="rotate">Xoay ngang điện thoại để xem slide rõ hơn</p>
    </div>
  )
}
