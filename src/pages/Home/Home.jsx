import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Card from '../../components/Card/Card'


import hero from './../../assets/Economic5.webp'
import card1 from './../../assets/card.jpg'
import card2 from './../../assets/card2.jpg'
import card3 from './../../assets/card3.jpg'
import card4 from './../../assets/card4.jpg'
import card5 from './../../assets/card5.jpg'

const newsCardsData = [
  { id: 1, title: 'أخبار الجمعية الحديثة', description: 'تم إطلاق دورة جديدة...', date: '28 مارس 2026', type: 'خبر الجمعية', image: card1 },
  { id: 2, title: 'عرض خاص للمحاضرين', description: 'تفاصيل حول برنامج الشراكة...', date: '26 مارس 2026', type: 'عرض خاص', image: card2 },
  { id: 3, title: 'دليل الانضمام', description: 'شرح مبسط للشروط...', date: '24 مارس 2026', type: 'دليل العضوية' },
  { id: 4, title: 'محاضرة PDF', description: 'يمكنك تصفح الملف...', date: '22 مارس 2026', type: 'وثائق PDF', image: card3 },
  { id: 5, title: 'دليل الانضمام', description: 'شرح مبسط...', date: '24 مارس 2026', type: 'دليل العضوية' },
  { id: 6, title: 'محاضرة PDF', description: 'تصفح الملف...', date: '22 مارس 2026', type: 'وثائق PDF', image: card4 },
  { id: 7, title: 'محاضرة PDF', description: 'تصفح الملف...', date: '22 مارس 2026', type: 'وثائق PDF', image: card5 },
]

const Home = () => {
  const [loading, setLoading] = useState(true)
  const [newsCards, setNewsCards] = useState([])

  useEffect(() => {
    setTimeout(() => {
      setNewsCards(newsCardsData)
      setLoading(false)
    }, 1000)
  }, [])

  return (
    <section className="space-y-10 py-10">

      {/* Hero */}
      <div className="grid gap-8 lg:grid-cols-[1.25fr_.85fr] items-center">
        <div className="space-y-6">
          <h1 className="text-4xl font-bold text-slate-900">منصة جمعية العلوم الاقتصادية السورية </h1>
          <p className="text-slate-600 font-bold">نحو وعي اقتصادي يصنع الفرق...</p>
          <p className="text-slate-600">نعمل على نشر المعرفة الاقتصادية وتسليط الضوء على القضايا المالية والمجتمعية من خلال الأخبار والمحاضرات والأنشطة التي تساهم في بناء وعي اقتصادي فعّال.</p>
        </div>

        <div className="rounded-3xl overflow-hidden w-[43vw]">
          <img src={hero} alt="hero" className="w-full object-cover" />
        </div>
      </div>

       {/* Masonry + limit */}
      <div className="relative">

        {/* المحتوى */}
        <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-3 gap-5 space-y-6 max-h-[700px] overflow-hidden">
          {loading
            ? Array.from({ length: 8 }).map((_, i) => <Card key={i} loading />)
            : newsCards.map((card) => (
                <Card key={card.id} {...card} />
              ))}
        </div>

        {/* Blur overlay */}
<div className="pointer-events-none absolute bottom-0 left-0 w-full h-52">
  <div className="absolute inset-0 bg-gradient-to-t from-white via-white/70 via-40% to-transparent" />
  <div className="absolute inset-0 backdrop-blur-[6px] mask-gradient" />
</div>
        {/* زر */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
          <Link
            to="/news"
            className="px-6 py-2 rounded-full bg-accentSoft text-white shadow-lg hover:scale-105 transition"
          >
            عرض جميع الأخبار
          </Link>
        </div>

      </div>

    </section>
  )
}

export default Home