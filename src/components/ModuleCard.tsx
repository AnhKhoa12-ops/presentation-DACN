export function ModuleCard({ icon, title, description }: { icon: string; title: string; description: string }) {
  return <article className="card"><span className="ico">{icon}</span><b>{title}</b><p>{description}</p></article>
}
