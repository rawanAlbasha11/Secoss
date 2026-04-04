import { useMemo } from 'react'
import { Link, useParams } from 'react-router-dom'
import { lectures } from '../../data/lectures'

const LecturesContent = () => {
  const { id } = useParams()
  const lecture = useMemo(() => lectures.find((item) => item.id === id), [id])

  if (!lecture) {
    return (
      <section className="space-y-6 py-10">
        <h1 className="text-3xl font-semibold text-slate-900">محاضرة غير موجودة</h1>
        <p className="max-w-3xl text-slate-600">
          لم نعثر على محاضرة مطابقة. اختر محاضرة من صفحة المحاضرات.</p>
        <Link
          to="/lectures"
          className="inline-flex items-center justify-center rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
        >
          العودة إلى المحاضرات
        </Link>
      </section>
    )
  }

  const isPdf = lecture.attachmentType === 'pdf'
  const isLink = lecture.attachmentType === 'link'

  return (
    <section className="space-y-8 py-10">
      <div className="space-y-3">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-600">عرض محتوى المحاضرة</p>
        <h1 className="text-3xl font-semibold text-slate-900">{lecture.title}</h1>
        <p className="max-w-3xl text-slate-600">{lecture.summary}</p>
      </div>

      <div className="grid gap-6 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="grid gap-4 sm:grid-cols-3">
          <div className="rounded-3xl bg-slate-50 p-4">
            <p className="text-xs uppercase tracking-[0.25em] text-slate-500">المحاضر</p>
            <p className="mt-2 text-sm font-semibold text-slate-900">{lecture.speaker}</p>
          </div>
          <div className="rounded-3xl bg-slate-50 p-4">
            <p className="text-xs uppercase tracking-[0.25em] text-slate-500">التصنيف</p>
            <p className="mt-2 text-sm font-semibold text-slate-900">{lecture.category}</p>
          </div>
          <div className="rounded-3xl bg-slate-50 p-4">
            <p className="text-xs uppercase tracking-[0.25em] text-slate-500">نوع المرفق</p>
            <p className="mt-2 text-sm font-semibold text-slate-900">{lecture.attachmentType}</p>
          </div>
        </div>

        {isPdf && (
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
        )}

        {isLink && (
          <div className="space-y-4">
            <p className="text-sm text-slate-600">
              هذا المحتوى متاح عبر رابط خارجي. اضغط لفتحه في نافذة جديدة.
            </p>
            <a
              href={lecture.attachmentUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
            >
              فتح الرابط
            </a>
          </div>
        )}
      </div>
    </section>
  )
}

export default LecturesContent
