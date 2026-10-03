import { slides } from '../data/slides'

export function SidebarOutline({ index, open, onSelect }: { index: number; open: boolean; onSelect: (index: number) => void }) {
  return (
    <aside className={`side ${open ? 'open' : ''}`}>
      {slides.map((slide, slideIndex) => (
        <button key={slide.title} className={slideIndex === index ? 'item on' : 'item'} onClick={() => onSelect(slideIndex)}>
          <em>{slideIndex + 1}</em><span>{slide.title}</span>
        </button>
      ))}
    </aside>
  )
}
