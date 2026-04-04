import { useMemo } from 'react'
import { useSelector } from 'react-redux'
import { Link, Navigate, useParams } from 'react-router-dom'

const LectureDetail = () => {
  const { id } = useParams()
  const lectures = useSelector((state) => state.lectures.items)
  const lecture = useMemo(() => lectures.find((item) => item.id === id), [lectures, id])

  if (!lecture) {
    return (
      <section className="space-y-6 py-10">
        <h1 className="text-3xl font-semibold text-slate-900">المحاضرة غير موجودة</h1>
        <p className="text-slate-600">لم نعثر على محاضرة بالمعرف المحدد. حاول العودة إلى قائمة المحاضرات.</p>
        <Link to="/lectures" className="inline-flex rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white">
          العودة إلى المحاضرات
        </Link>
      </section>
    )
  }

  if (lecture.attachmentType !== 'pdf') {
    return <Navigate to="/lectures" replace />
  }

  return (
    <section className="space-y-8 py-10">
      <div className="space-y-4 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-600">تفاصيل المحاضرة</p>
            <h1 className="mt-2 text-3xl font-semibold text-slate-900">{lecture.title}</h1>
          </div>
          <Link
            to="/lectures"
            className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-slate-50 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-100"
          >
            العودة إلى المحاضرات
          </Link>
        </div>

        <div className="space-y-4">
          <iframe
            src={lecture.attachmentUrl}
            title={lecture.title}
            className="h-[65vh] w-full rounded-3xl border border-slate-200"
          />
          <a
            href={lecture.attachmentUrl}
            download
            className="inline-flex items-center justify-center rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
          >
            تحميل ملف PDF
          </a>
        </div>
      </div>
    </section>
  )
}

export default LectureDetail
