import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import BackButton from '../../components/BackButton'
import {
  FaWhatsapp,
  FaTelegramPlane,
  FaLinkedin,
  FaFacebookF,
} from 'react-icons/fa'

const NewsDetails = () => {
  const { id } = useParams()
  const { items } = useSelector(state => state.news)

  const newsItem = items.find(n => n.id === Number(id))

  if (!newsItem)
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-center text-gray-500 text-xl">لا يوجد خبر</p>
      </div>
    )

  return (
    <section className="py-10 px-4 sm:px-6 lg:px-8" dir="rtl">
      <div className=" rounded-[2rem] bg-white/80 border border-slate-200 shadow-[0_20px_80px_rgba(15,23,42,0.08)] backdrop-blur-sm p-6 sm:p-10 space-y-6">

        {/* زر الرجوع */}
        <BackButton />

        {/* صورة الخبر */}
        {newsItem.image && (
          <img
            src={newsItem.image}
            alt={newsItem.title}
            className="w-full rounded-3xl object-cover h-96 sm:h-[500px]"
          />
        )}

        {/* محتوى الخبر */}
        <div className="space-y-4 text-right">
          <h1 className="text-3xl font-extrabold text-slate-900">{newsItem.title}</h1>
          <p className="text-gray-400 text-sm">{newsItem.date} · {newsItem.type}</p>
          <p className="text-slate-700 leading-relaxed">{newsItem.description}</p>
          <p className="text-slate-700 leading-relaxed">{newsItem.content}</p>
        </div>

        {/* أيقونات المشاركة */}
        <div className="flex gap-4 mt-4 justify-end">
          {[FaWhatsapp, FaTelegramPlane, FaLinkedin, FaFacebookF].map(
            (Icon, i) => (
              <a
                key={i}
                href={window.location.href}
                className="text-gray-500 hover:text-blue-500 transition-colors duration-300 text-2xl"
              >
                <Icon />
              </a>
            )
          )}
        </div>

      </div>
    </section>
  )
}

export default NewsDetails