import { useState } from 'react'

const ImageCarousel = ({ images = [] }) => {
  const [activeIndex, setActiveIndex] = useState(0)

  if (!images.length) return null

  const moveTo = (index) => {
    if (index < 0) index = images.length - 1
    if (index >= images.length) index = 0
    setActiveIndex(index)
  }

  return (
    <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-slate-50 shadow-sm">
      <div className="relative">
        <div className="flex transition-transform duration-500" style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
          {images.map((image, idx) => (
            <div key={image.alt || idx} className="min-w-full">
              <img src={image.src} alt={image.alt} className="h-[360px] w-full object-cover sm:h-[420px] md:h-[500px] lg:h-[560px]" />
            </div>
          ))}
        </div>

        <button
          type="button"
          onClick={() => moveTo(activeIndex - 1)}
          className="absolute left-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/90 p-3 text-slate-700 shadow-md transition hover:bg-white"
          aria-label="السابق"
        >
          ‹
        </button>
        <button
          type="button"
          onClick={() => moveTo(activeIndex + 1)}
          className="absolute right-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/90 p-3 text-slate-700 shadow-md transition hover:bg-white"
          aria-label="التالي"
        >
          ›
        </button>
      </div>

      <div className="flex items-center justify-center gap-3 bg-white/90 p-4">
        {images.map((image, idx) => (
          <button
            key={image.alt || idx}
            type="button"
            onClick={() => moveTo(idx)}
            className={`h-3 w-3 rounded-full transition ${idx === activeIndex ? 'bg-slate-900' : 'bg-slate-300 hover:bg-slate-400'}`}
            aria-label={`عرض الصورة ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

export default ImageCarousel
