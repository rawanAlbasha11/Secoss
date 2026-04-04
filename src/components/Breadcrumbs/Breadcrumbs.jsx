import { Link, useLocation } from 'react-router-dom'

const breadcrumbLabels = {
  '/': 'الصفحة الرئيسية',
  '/lectures': 'المحاضرات',
  '/lecture-detail': 'تفاصيل المحاضرة',
  '/conditions': 'الشروط',
  '/board': 'مجلس الإدارة',
  '/about': 'حول',
  '/lecturers': 'المحاضرون',
  '/login': 'تسجيل دخول',
  '/news-details': 'تفاصيل الخبر',
  '/news': 'الأخبار',
}

const Breadcrumbs = () => {
  const location = useLocation()
  const path = location.pathname
  const pathParts = path.split('/').filter(Boolean)
  const items = [{ label: 'الصفحة الرئيسية', to: '/' }]

  if (path === '/') {
    return null
  }

  if (path.startsWith('/lecture-detail')) {
    items.push({ label: 'المحاضرات', to: '/lectures' })
    items.push({ label: 'تفاصيل المحاضرة', to: path })
  } 
  else if (path.startsWith('/news-details')) {
    items.push({ label: 'الأخبار', to: '/news' })
    items.push({ label: 'تفاصيل الخبر', to: path })
  } 
  else {
    const basePath = `/${pathParts[0]}`
    const label = breadcrumbLabels[basePath] || ''
    if (label) {
      items.push({ label, to: path })
    }
  }

  return (
    <div className="rounded-3xl border border-slate-200 bg-white/80 p-4 text-right text-slate-700 shadow-sm sm:p-6">
      <nav className="flex flex-wrap items-center gap-2 text-sm leading-6 text-slate-600" aria-label="Breadcrumb">
        {items.map((item, index) => (
          <span key={item.to} className="flex items-center gap-2">
            {index > 0 && <span className="text-slate-400">&lt;</span>}
            {index < items.length - 1 ? (
              <Link to={item.to} className="font-medium text-slate-700 hover:text-slate-900">
                {item.label}
              </Link>
            ) : (
              <span className="font-semibold text-slate-900">{item.label}</span>
            )}
          </span>
        ))}
      </nav>
    </div>
  )
}

export default Breadcrumbs
