import type { SlideDefinition } from '../data/slides'

export function SlideRenderer({ slide, scale }: { slide: SlideDefinition; scale: number }) {
  const Slide = slide.component
  return (
    <div className="frame" style={{ width: 1920 * scale, height: 1080 * scale }}>
      <div className="canvas" style={{ width: 1920, height: 1080, transform: `scale(${scale})` }}>
        <section className="slide"><Slide /></section>
      </div>
    </div>
  )
}
