import type { ReactNode } from 'react'

export function DemoPageHeader({ kicker, title, description, action }: {
  kicker: string; title: string; description: string; action?: string
}) {
  return <div className="wc-page-heading"><div><span>{kicker}</span><h1>{title}</h1><p>{description}</p></div>{action && <button className="wc-primary">{action}</button>}</div>
}

export function DemoStats({ items }: { items: Array<{ label: string; value: string; note?: string; tone?: string }> }) {
  return <div className="wc-stats">{items.map((item) => <article className="wc-stat" key={item.label}><span>{item.label}</span><strong className={item.tone || ''}>{item.value}</strong>{item.note && <small>{item.note}</small>}</article>)}</div>
}

export function DemoCard({ title, description, action, children }: {
  title: string; description?: string; action?: ReactNode; children: ReactNode
}) {
  return <section className="wc-card"><header className="wc-card-heading"><div><h2>{title}</h2>{description && <p>{description}</p>}</div>{action}</header>{children}</section>
}

export function DemoTable({ headers, rows }: { headers: string[]; rows: ReactNode[][] }) {
  return <div className="wc-table-wrap"><table className="wc-table"><thead><tr>{headers.map((header) => <th key={header}>{header}</th>)}</tr></thead><tbody>{rows.map((row, rowIndex) => <tr key={rowIndex}>{row.map((cell, cellIndex) => <td key={cellIndex}>{cell}</td>)}</tr>)}</tbody></table></div>
}

export function DemoBadge({ children, tone = 'green' }: { children: ReactNode; tone?: string }) {
  return <span className={`wc-badge ${tone}`}>{children}</span>
}
