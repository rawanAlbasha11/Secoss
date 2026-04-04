const SectionHeader = ({ eyebrow, title, description, meta }) => {
  return (
    <div className="space-y-3 text-right">
      {eyebrow && <p className="text-sm font-semibold uppercase tracking-[0.3em] text-accent">{eyebrow}</p>}
      {title && <h1 className="text-3xl font-semibold text-slate-900">{title}</h1>}
      {description && <p className="max-w-3xl text-slate-600">{description}</p>}
      {meta && <div className="text-sm text-slate-500">{meta}</div>}
    </div>
  )
}

export default SectionHeader
