import { useEffect, useMemo } from 'react'
import { useSelector } from 'react-redux'
import {  setFilter } from './../../store/slices/newsSlice'

import SearchInput from '../../components/ui/SearchInput'
import SelectFilter from '../../components/ui/SelectFilter'
import InfiniteScrollFeed from '../../components/ui/InfiniteScrollFeed'
import Card from '../../components/Card/Card'
import SectionHeader from '../../components/ui/SectionHeader'

const News= () => {
  // const dispatch = useDispatch()
  const { items, filters } = useSelector(state => state.news)

  // useEffect(() => {
  //   dispatch(fetchNews())
  // }, [])

  const types = useMemo(
    () => Array.from(new Set(items.map(n => n.type))),
    [items]
  )

  const years = useMemo(
    () =>
      Array.from(new Set(items.map(n => n.year))).sort((a, b) => b - a),
    [items]
  )

  const filteredNews = useMemo(() => {
    return items.filter(n => {
      const matchesType = filters.type ? n.type === filters.type : true
      const matchesYear = filters.year
        ? n.year?.toString() === filters.year
        : true
      const matchesSearch = filters.search
        ? n.title.toLowerCase().includes(filters.search.toLowerCase())
        : true

      return matchesType && matchesYear && matchesSearch
    })
  }, [items, filters])

  const itemsToRender = filteredNews.map(n => (
    <Card key={n.id} {...n} shareUrl={window.location.href} />
  ))

  return (
    <section className="space-y-5 py-5 px-4 max-w-7xl mx-auto">
      <SectionHeader
        eyebrow="أخبار الجمعية"
        title="الأخبار"
      />

      {/* filters */}
      <div className="flex justify-between items-end sm:flex-row gap-4">


        <SelectFilter
          label="نوع الخبر"
          options={types}
          value={filters.type}
          onChange={value =>
            dispatch(setFilter({ key: 'type', value }))
          }
        />

        <SelectFilter
          label="السنة"
          options={years}
          value={filters.year}
          onChange={value =>
            dispatch(setFilter({ key: 'year', value }))
          }
        />
        <div className="w-full">
                <SearchInput
          value={filters.search}
          onChange={value =>
            dispatch(setFilter({ key: 'search', value }))
          }
        />
        </div>
      </div>

      <InfiniteScrollFeed items={itemsToRender} perPage={6} />
    </section>
  )
}

export default News