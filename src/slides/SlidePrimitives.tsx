import type { CSSProperties, ReactNode } from 'react'

export const colors = ['#2563eb', '#10b981', '#f59e0b', '#8b5cf6', '#ef4444']

export function SlideHeading({ kicker, children }: { kicker: string; children: ReactNode }) {
  return <div className="a"><span className="kicker">{kicker}</span><h2>{children}</h2></div>
}

export function StatusTag({ status }: { status: 'Đã triển khai' | 'Đang phát triển' | 'Đề xuất tương lai' }) {
  return <span className={`status status-${status === 'Đã triển khai' ? 'done' : status === 'Đang phát triển' ? 'progress' : 'future'}`}>{status}</span>
}

export function InfoGrid({ items }: { items: Array<{ icon: string; title: string; text: string }> }) {
  return <div className="grid" style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
    {items.map((item, index) => <article className="card a" style={{ '--i': index } as CSSProperties} key={item.title}>
      <span className="ico">{item.icon}</span><b>{item.title}</b><p>{item.text}</p>
    </article>)}
  </div>
}

export function ListSlide({ kicker, title, items }: { kicker: string; title: string; items: string[] }) {
  return <><SlideHeading kicker={kicker}>{title}</SlideHeading><div className="grid" style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
    {items.map((item, index) => <div className="chip a" style={{ '--i': index } as CSSProperties} key={item}><i style={{ background: colors[index % colors.length] }}>{index + 1}</i>{item}</div>)}
  </div></>
}
