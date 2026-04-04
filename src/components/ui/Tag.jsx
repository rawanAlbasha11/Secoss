const variantStyles = {
  default: 'bg-slate-100 text-slate-700',
  accent: 'bg-accentBg text-accent',
  accentSoft: 'bg-accentSoftBg text-accentSoft',
  info: 'bg-slate-900 text-white',
  muted: 'bg-slate-50 text-slate-500',
}

const Tag = ({ children, variant = 'default', className = '' }) => {
  return (
    <span className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-center ${variantStyles[variant]} ${className}`}>
      {children}
    </span>
  )
}

export default Tag
