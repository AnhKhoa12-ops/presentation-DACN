export function ProgressBar({ value }: { value: number }) {
  return <div className="progress"><i style={{ width: `${value * 100}%` }} /></div>
}
