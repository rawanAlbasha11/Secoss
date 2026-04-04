import { Link as RouterLink } from 'react-router-dom'

const variantStyles = {
  primary: 'bg-slate-900 text-white hover:bg-slate-800',
  secondary: 'border border-slate-300 bg-slate-50 text-slate-700 hover:bg-slate-100',
  accent: 'bg-emerald-600 text-white hover:bg-emerald-500',
}

const Button = ({ children, to, href, variant = 'primary', className = '', ...props }) => {
  const buttonClassName = `inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition focus:outline-none focus:ring-2 focus:ring-emerald-200 ${variantStyles[variant]} ${className}`

  if (to) {
    return (
      <RouterLink to={to} className={buttonClassName} {...props}>
        {children}
      </RouterLink>
    )
  }

  if (href) {
    return (
      <a href={href} className={buttonClassName} {...props}>
        {children}
      </a>
    )
  }

  return (
    <button type="button" className={buttonClassName} {...props}>
      {children}
    </button>
  )
}

export default Button
