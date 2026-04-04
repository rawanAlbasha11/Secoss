import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

const Pagination = ({ items, perPage = 4, maxVisible = 9 }) => {
  
    if (!items || items.length === 0) {
    return <p className="text-center text-gray-500">لا يوجد بيانات لعرضها</p>;
  }

    const totalPages = Math.ceil(items.length / perPage)
  const [currentPage, setCurrentPage] = useState(1)

  // العناصر اللي رح تظهر بالصفحة الحالية
  const visibleItems = items.slice(
    (currentPage - 1) * perPage,
    currentPage * perPage
  )

  const handleChange = (page) => {
    if (page >= 1 && page <= totalPages) setCurrentPage(page)
  }

  // حساب الصفحات المرئية مع ... و maxVisible
  const getPages = () => {
    const pages = []
    let start = Math.max(1, currentPage - Math.floor(maxVisible / 2))
    let end = start + maxVisible - 1
    if (end > totalPages) {
      end = totalPages
      start = Math.max(1, end - maxVisible + 1)
    }

    if (start > 1) {
      pages.push(1)
      if (start > 2) pages.push("...")
    }

    for (let i = start; i <= end; i++) pages.push(i)

    if (end < totalPages) {
      if (end < totalPages - 1) pages.push("...")
      pages.push(totalPages)
    }

    return pages
  }

  const pages = getPages()

  return (
    <div className=" p-4 space-y-6">
      {/* العناصر */}
      <div className='flex flex-wrap justify-center gap-[41px]'>
      <AnimatePresence  mode="wait">
        {visibleItems.map((item, index) => (
          <motion.div
            key={item}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            className=" p-4 bg-white rounded-2xl shadow hover:shadow-lg transition cursor-pointer"
          >
            {item}
          </motion.div>
        ))}
      </AnimatePresence>
      </div>
      {/* Pagination */}
      <div className="flex items-center justify-center gap-2 mt-6">
        {/* Previous */}
        <button
          onClick={() => handleChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="group px-3 py-2 rounded-xl bg-white shadow-md hover:shadow-lg transition-all duration-200 disabled:opacity-40"
        >
          <span className="inline-block transition-transform group-hover:-translate-x-1">
            ←
          </span>
        </button>

        {/* Pages */}
        <AnimatePresence mode="popLayout">
          {pages.map((page, index) =>
            page === "..." ? (
              <motion.span
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="px-2 text-gray-400"
              >
                ...
              </motion.span>
            ) : (
              <motion.button
                key={page}
                onClick={() => handleChange(page)}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-200
                  ${
                    currentPage === page
                      ? "bg-accent text-white shadow-lg scale-110"
                      : "bg-white text-gray-700 hover:bg-gray-100 hover:scale-105 shadow-sm"
                  }`}
              >
                {page}
              </motion.button>
            )
          )}
        </AnimatePresence>

        {/* Next */}
        <button
          onClick={() => handleChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="group px-3 py-2 rounded-xl bg-white shadow-md hover:shadow-lg transition-all duration-200 disabled:opacity-40"
        >
          <span className="inline-block transition-transform group-hover:translate-x-1">
            →
          </span>
        </button>
      </div>
    </div>
  )
}

export default Pagination