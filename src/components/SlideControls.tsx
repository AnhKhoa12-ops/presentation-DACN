export function SlideControls({ onMenu }: { onMenu: () => void }) {
  return (
    <header className="topbar">
      <button className="ghost burger" onClick={onMenu}>☰</button>
      <div className="brand"><span className="logo">M</span><b>MiniMart</b><small>Nhóm 1 · Phân tích & Thiết kế hệ thống</small></div>
      <div className="grow" />
      <span className="hint">← → điều hướng · F toàn màn hình</span>
    </header>
  )
}

export function SlideControlBar({ index, total, onPrevious, onNext, onFullscreen }: {
  index: number; total: number; onPrevious: () => void; onNext: () => void; onFullscreen: () => void
}) {
  return (
    <div className="controlbar">
      <span className="count">{index + 1} / {total}</span>
      <button className="ghost" onClick={onPrevious} disabled={index === 0}>← Trước</button>
      <button className="ghost" onClick={onNext} disabled={index === total - 1}>Sau →</button>
      <button className="primary" onClick={onFullscreen}>⛶ Toàn màn hình</button>
    </div>
  )
}
