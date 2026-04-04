import { NavLink, useNavigate, useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useState, useMemo, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaBars, FaTimes } from 'react-icons/fa'
import logo from '../../assets/logo1.png'
import Button from '../ui/Button'

const Navbar = () => {
  const navigate = useNavigate()
  const location = useLocation()

  const lectures = useSelector(state => state.lectures.items)
  const news = useSelector(state => state.news.items)

  const [menuOpen, setMenuOpen] = useState(false)
  const [megaOpen, setMegaOpen] = useState(null)
  const [scrolled, setScrolled] = useState(false)

  // 🔥 scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // استخراج الفلاتر
  const lectureCategories = useMemo(
    () => Array.from(new Set(lectures.map(l => l.category))),
    [lectures]
  )

  const newsCategories = useMemo(
    () => Array.from(new Set(news.map(n => n.type))),
    [news]
  )

  const params = new URLSearchParams(location.search)
  const activeCategory = params.get('category')

  const pages = [
    { label: 'الرئيسية', to: '/' },
    { label: 'المحاضرون', to: '/lecturers' },
    { label: 'الشروط', to: '/conditions' },
    { label: 'مجلس الإدارة', to: '/board' },
    { label: 'حول', to: '/about' },
  ]

  const dropdownVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0 },
  }

  return (
    <header
      dir="rtl"
      className={`sticky top-0 z-50 transition-all duration-300 border-b ${
        scrolled
          ? 'bg-white shadow-md py-2'
          : 'bg-white/80 backdrop-blur py-3'
      }`}
    >
      <div className="flex flex-row-reverse items-center justify-between px-6">

        {/* 🔥 LEFT */}
        <div className="hidden md:block">
          <Button to="/login" variant="accent">
            تسجيل دخول
          </Button>
        </div>

        {/* 🔥 CENTER */}
        <nav className="hidden md:flex items-center gap-8 relative">

          {pages.map((p) => (
            <NavLink key={p.to} to={p.to}>
              {({ isActive }) => (
                <div className="relative px-1 py-2 group">

                  {/* text */}
                  <span
                    className={`text-sm font-medium transition ${
                      isActive
                        ? 'text-emerald-600'
                        : 'text-slate-700 group-hover:text-emerald-600'
                    }`}
                  >
                    {p.label}
                  </span>

                  {/* hover underline */}
                  <span className="absolute right-0 bottom-0 h-[2px] w-0 bg-emerald-400 transition-all duration-300 group-hover:w-full" />

                  {/* 🔥 shared active underline */}
                  {isActive && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute right-0 bottom-0 h-[2px] w-full bg-emerald-600"
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    />
                  )}
                </div>
              )}
            </NavLink>
          ))}

          {/* 🔥 NEWS */}
          <div
            onMouseEnter={() => setMegaOpen('news')}
            onMouseLeave={() => setMegaOpen(null)}
            className="relative"
          >
            <button
              onClick={() => navigate('/news')}
              className="text-sm font-medium hover:text-emerald-600"
            >
              الأخبار
            </button>

            <AnimatePresence>
              {megaOpen === 'news' && (
                <motion.div
                  variants={dropdownVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="absolute top-full right-1/2 translate-x-1/2 mt-4 w-[260px] bg-white shadow-xl rounded-2xl border"
                >
                  <div className="max-h-[260px] overflow-y-auto p-2 space-y-1">

                    <p className="px-4 py-2 text-xs text-slate-400">
                      اختر تصنيف
                    </p>

                    {newsCategories.map((cat, i) => (
                      <button
                        key={i}
                        onClick={() => navigate(`/news?category=${cat}`)}
                        className={`block w-full text-right px-4 py-2 rounded-lg transition ${
                          activeCategory === cat
                            ? 'bg-emerald-100 text-emerald-600'
                            : 'hover:bg-slate-100'
                        }`}
                      >
                        {cat}
                      </button>
                    ))}

                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* 🔥 LECTURES */}
          <div
            onMouseEnter={() => setMegaOpen('lectures')}
            onMouseLeave={() => setMegaOpen(null)}
            className="relative"
          >
            <button
              onClick={() => navigate('/lectures')}
              className="text-sm font-medium hover:text-emerald-600"
            >
              المحاضرات
            </button>

            <AnimatePresence>
              {megaOpen === 'lectures' && (
                <motion.div
                  variants={dropdownVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="absolute top-full right-1/2 translate-x-1/2 mt-4 w-[260px] bg-white shadow-xl rounded-2xl border"
                >
                  <div className="max-h-[260px] overflow-y-auto p-2 space-y-1">

                    <p className="px-4 py-2 text-xs text-slate-400">
                      اختر تصنيف
                    </p>

                    {lectureCategories.map((cat, i) => (
                      <button
                        key={i}
                        onClick={() => navigate(`/lectures?category=${cat}`)}
                        className={`block w-full text-right px-4 py-2 rounded-lg transition ${
                          activeCategory === cat
                            ? 'bg-emerald-100 text-emerald-600'
                            : 'hover:bg-slate-100'
                        }`}
                      >
                        {cat}
                      </button>
                    ))}

                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* 🔥 indicator bar */}
          <motion.div
            layoutId="nav-bar"
            className="absolute bottom-[-6px] h-[3px] bg-emerald-500 rounded-full"
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          />
        </nav>

        {/* 🔥 RIGHT */}
        <NavLink to="/" className="flex items-center gap-2">
          <img src={logo} className="w-10 h-10 rounded-full" />
          <span className="hidden sm:block font-semibold">
            الجمعية الاقتصادية
          </span>
        </NavLink>

        {/* 📱 Mobile */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-xl"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* 📱 Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="md:hidden px-6 pb-6 space-y-4 bg-white border-t"
          >
            {pages.map((p) => (
              <NavLink key={p.label} to={p.to} className="block py-2">
                {p.label}
              </NavLink>
            ))}

            <Button to="/login" className="w-full">
              تسجيل دخول
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Navbar