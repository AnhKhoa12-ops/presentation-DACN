import type { DemoModuleId } from './WebClientDemo'

export function DemoOpenButton({ moduleId, icon, title, description }: {
  moduleId: DemoModuleId; icon: string; title: string; description: string
}) {
  return (
    <button
      className="wc-open-demo"
      type="button"
      onClick={(event) => {
        event.stopPropagation()
        window.dispatchEvent(new CustomEvent('presentation-demo-open', { detail: moduleId }))
      }}
    >
      <span className="wc-open-demo-icon">{icon}</span>
      <span><strong>{title}</strong><small>{description}</small></span>
      <b aria-hidden="true">↗</b>
    </button>
  )
}
