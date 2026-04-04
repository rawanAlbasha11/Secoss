
import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"

const InfiniteScrollFeed = ({ items, perPage = 10 }) => {
  const [visibleItems, setVisibleItems] = useState([])
  const [page, setPage] = useState(1)
  const loader = useRef(null)

  // عرض الدفعات حسب الصفحة
  useEffect(() => {
    setVisibleItems(items.slice(0, perPage * page))
  }, [items, page, perPage])

  // مراقبة آخر عنصر للتحميل التلقائي
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && visibleItems.length < items.length) {
          setPage((prev) => prev + 1)
        }
      },
      { threshold: 1 }
    )
    if (loader.current) observer.observe(loader.current)
    return () => {
      if (loader.current) observer.unobserve(loader.current)
    }
  }, [visibleItems, items.length])

  return (
    <div className="p-4">
      {/* Masonry Layout */}
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-6">
        <AnimatePresence>
          {visibleItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, delay: index * 0.03 }}
              className="break-inside-avoid mb-6"
            >
              {item}
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Loader */}
      <div ref={loader} className="h-12 flex justify-center items-center mt-4">
        {visibleItems.length < items.length ? (
          <span className="text-gray-400 animate-pulse">Loading...</span>
        ) : (
          <span className="text-gray-400">No more items</span>
        )}
      </div>
    </div>
  )
}

export default InfiniteScrollFeed