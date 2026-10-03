export function DemoFrame({ title, children }: { title: string; children: React.ReactNode }) {
  return <div className="demo-frame"><div className="demo-head"><span /> <b>{title}</b></div><div className="demo-body">{children}</div></div>
}
