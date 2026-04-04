import { useMemo, useState } from 'react'
import { useSelector } from 'react-redux'
import Button from '../../components/ui/Button'
import SectionHeader from '../../components/ui/SectionHeader'
import LectureCard from '../../components/LectureCard/LectureCard'
import Pagination from '../../components/ui/Pagination'
import SearchInput from '../../components/ui/SearchInput'
import SelectFilter from '../../components/ui/SelectFilter'
import { useLocation } from 'react-router-dom'
import { useEffect } from 'react'

const Lectures = () => {
  const lectures = useSelector((state) => state.lectures.items)

// في Lectures.jsx
const location = useLocation()

useEffect(() => {
  const params = new URLSearchParams(location.search)
  const speaker = params.get('speaker')
  if (speaker) setSelectedSpeaker(speaker)
}, [location.search])
  // حالة البحث والفلاتر
  const [search, setSearch] = useState('')
  const [selectedSpeaker, setSelectedSpeaker] = useState('')
  const [selectedYear, setSelectedYear] = useState('')
  const [selectedSubCategory, setSelectedSubCategory] = useState('')
  const [selectedMainCategory, setSelectedMainCategory] = useState('')

  // خيارات الفلاتر
  const speakers = useMemo(() => Array.from(new Set(lectures.map(l => l.speaker))), [lectures])
  const years = useMemo(() => Array.from(new Set(lectures.map(l => l.year))), [lectures])
  const subCategories = useMemo(() => Array.from(new Set(lectures.map(l => l.subCategory))), [lectures])
  const mainCategories = useMemo(() => Array.from(new Set(lectures.map(l => l.category))), [lectures])

  // تصفية المحاضرات
  const filteredLectures = useMemo(() =>
    lectures.filter(l => {
      const matchesSearch = search ? l.title.toLowerCase().includes(search.toLowerCase()) : true
      const matchesSpeaker = selectedSpeaker ? l.speaker === selectedSpeaker : true
      const matchesYear = selectedYear ? l.year === selectedYear : true
      const matchesSubCat = selectedSubCategory ? l.subCategory === selectedSubCategory : true
      const matchesMainCat = selectedMainCategory ? l.mainCategory === selectedMainCategory : true
      return matchesSearch && matchesSpeaker && matchesYear && matchesSubCat && matchesMainCat
    }),
    [lectures, search, selectedSpeaker, selectedYear, selectedSubCategory, selectedMainCategory]
  )

  const clearFilters = () => {
    setSearch('')
    setSelectedSpeaker('')
    setSelectedYear('')
    setSelectedSubCategory('')
    setSelectedMainCategory('')
  }

  return (
    <section className="space-y-10 py-10">
      <SectionHeader
        eyebrow="المحاضرات"
        title="قائمة المحاضرات"
        description="ابحث أو استخدم الفلاتر لمراجعة المحاضرات."
        meta={
          search || selectedSpeaker || selectedYear || selectedSubCategory || selectedMainCategory
            ? 'الفلاتر الحالية مفعلّة'
            : 'عرض جميع المحاضرات بدون فلترة'
        }
      />

      {/* صندوق البحث */}
      <div className="w-full mb-6">
        <SearchInput value={search} onChange={setSearch} />
      </div>

      {/* الفلاتر في Grid responsive */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <SelectFilter label="المحاضر" options={speakers} value={selectedSpeaker} onChange={setSelectedSpeaker} />
        <SelectFilter label="السنة" options={years} value={selectedYear} onChange={setSelectedYear} />
        <SelectFilter label="تصنيف فرعي" options={subCategories} value={selectedSubCategory} onChange={setSelectedSubCategory} />
        <SelectFilter label="تصنيف رئيسي" options={mainCategories} value={selectedMainCategory} onChange={setSelectedMainCategory} />

        <div className="flex items-end">
          <Button type="button" variant="secondary" className="w-full" onClick={clearFilters}>
            مسح الفلاتر
          </Button>
        </div>
      </div>

      {/* قائمة المحاضرات مع Pagination و framer-motion */}
      <div className="space-y-6">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">المحاضرات</p>
            <h2 className="text-2xl font-semibold text-slate-900">{filteredLectures.length} محاضرة</h2>
          </div>
        </div>

        <Pagination
          items={filteredLectures.map((lecture) => (
            <LectureCard
              key={lecture.id}
              lecture={lecture}
              onFilterSpeaker={setSelectedSpeaker}
              onFilterCategory={setSelectedMainCategory}
            />
          ))}
          perPage={6}
        />
      </div>
    </section>
  )
}

export default Lectures