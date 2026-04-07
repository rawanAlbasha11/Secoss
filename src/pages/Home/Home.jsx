import { useEffect, useState } from 'react'
import BlurShowcase from './../../components/ui/BlurShowcase'
import hero from './../../assets/Economic5.webp'
import { newsData } from './../../data/news'
import Card from '../../components/Card/Card'
import StatsSection from '../../components/StatsSection/StatsSection'
import { statsData,events } from '../../data/dataOfHomePage'
import ImageCarousel from '../../components/ui/ImageCarousel'
import EventCard from '../../components/EventCard/EventCard'



const Home = () => {
  const [loading, setLoading] = useState(true)
  const [newsCards, setNewsCards] = useState([])

  useEffect(() => {
    setTimeout(() => {
      setNewsCards(newsData)
      setLoading(false)
    }, 1000)
  }, [])
  const sortedNews = [...newsCards].sort((a, b) => new Date(b.date) - new Date(a.date));

  return (
    <section className="space-y-10 py-10">
    <ImageCarousel
  SlideComponent={EventCard}
  items={events}
/>
      {/* Hero */}
      <div className="grid gap-8 lg:grid-cols-[1.25fr_.85fr] items-center">
        <div className="space-y-6">
          <h1 className="text-4xl font-bold text-slate-900">منصة جمعية العلوم الاقتصادية السورية</h1>
          <p className="text-slate-600 font-bold">نحو وعي اقتصادي يصنع الفرق...</p>
          <p className="text-slate-600">
            نعمل على نشر المعرفة الاقتصادية وتسليط الضوء على القضايا المالية والمجتمعية من خلال الأخبار والمحاضرات والأنشطة التي تساهم في بناء وعي اقتصادي فعّال.
          </p>
        </div>
        <div className="rounded-3xl overflow-hidden w-[43vw]">
          <img src={hero} alt="hero" className="w-full object-cover" />
        </div>
      </div>

      {/* آخر 5 أخبار نوع "خبر الجمعية" */}
    {/*   <BlurShowcase        
        title="محاضرات PDF"
        items={newsCards}
        loading={loading}
        limit={5}
        filter={card => card.type === 'خبر الجمعية'}
        buttonLink="/pdfs"
          CardComponent={Card} 
      /> */}

      {/* كل الأخبار */}
      <BlurShowcase           
        title="جميع الأخبار"
        items={sortedNews}
        loading={loading}
        limit={4}
        buttonLink="/news"
        CardComponent={Card} 
      />

      <StatsSection data={statsData} />
    </section>
  )
}

export default Home

