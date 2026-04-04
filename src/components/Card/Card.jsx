import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaWhatsapp, FaTelegramPlane, FaLinkedin, FaFacebookF } from 'react-icons/fa'

const Card = ({ id, title, description, image, date, type, shareUrl, loading }) => {
  const [imgLoaded, setImgLoaded] = useState(false)

  // Skeleton
  if (loading) {
    return (
      <div className="break-inside-avoid mb-6 rounded-3xl bg-slate-100 animate-pulse h-[250px]" />
    )
  }

  return (
    <Link to={`/news-details/${id}`}>
      <article className="group break-inside-avoid mb-6 overflow-hidden rounded-3xl border border-accentSoft bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl">

        {/* Image */}
        {image && (
          <div className="relative overflow-hidden">
            
            {/* skeleton للصورة */}
            {!imgLoaded && (
              <div className="absolute inset-0 bg-slate-200 animate-pulse" />
            )}

            <img
              src={image}
              alt={title}
              loading="lazy"
              onLoad={() => setImgLoaded(true)}
              className={`w-full h-auto object-cover transition duration-500 group-hover:scale-110 ${
                imgLoaded ? 'opacity-100' : 'opacity-0'
              }`}
            />

            {/* blur overlay */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
          </div>
        )}

        {/* Content */}
        <div className="p-5">
          <div className="flex items-center justify-between">
            <span className="text-[10px] px-3 py-1 rounded-full bg-accentSoftBg text-accentSoft border border-accentSoft">
              {type}
            </span>
            <span className="text-xs text-slate-400">{date}</span>
          </div>

          <h2 className="mt-3 font-semibold text-slate-900 group-hover:text-accent transition">
            {title}
          </h2>

          <p className="mt-2 text-sm text-slate-600">
            {description}
          </p>

          {/* Share */}
          <div className="mt-4 flex gap-2">
            {[FaWhatsapp, FaTelegramPlane, FaLinkedin, FaFacebookF].map((Icon, i) => (
              <a
                key={i}
                href={shareUrl || '#'}
                target="_blank"
                rel="noopener noreferrer"
                className="h-8 w-8 flex items-center justify-center rounded-full bg-accentSoftBg text-accentSoft hover:bg-accentSoft hover:text-white transition"
              >
                <Icon size={14} />
              </a>
            ))}
          </div>
        </div>
      </article>
    </Link>
  )
}

export default Card