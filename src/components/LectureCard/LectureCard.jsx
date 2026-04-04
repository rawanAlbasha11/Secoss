import Button from '../../components/ui/Button'
import Tag from '../../components/ui/Tag'

// Reusable card component for each lecture item.
const LectureCard = ({ lecture }) => {
  const isPdf = lecture.attachmentType === 'pdf'
  const isLink = lecture.attachmentType === 'link'

  return (
    <article className=" bg-surface rounded-xl2 shadow-card border border-gray-100 overflow-hidden transition hover:shadow-cardHover hover:-translate-y-1">
      
      <div className=" px-6 py-5">
        
        {/* Top */}
        <div className="flex flex-wrap items-center justify-between gap-3">
          <Tag variant="muted">
            {lecture.attachmentType.toUpperCase()}
          </Tag>
          <span className="text-[12px] text-textSecondary">
            {lecture.date}
          </span>
        </div>

        {/* Title */}
        <h2 className="mt-4 text-lg font-semibold text-textPrimary leading-snug">
          {lecture.title}
        </h2>

        {/* معلومات بدل الأزرار */}
        <div className="mt-4 space-y-1 text-sm text-textSecondary">
          <Tag variant="accentSoft">المحاضر: {lecture.speaker}</Tag>
          <Tag variant="accent">التصنيف الرئيسي: {lecture.category}</Tag>
          <Tag variant="accentSoft">التصنيف الفرعي: {lecture.subCategory}</Tag>
        </div>

        {/* Actions */}
        <div className="mt-6 flex flex-wrap items-center gap-3">
          
          {isPdf && (
            <Button
              to={`/lecture-detail/${lecture.id}`}
              variant="primary"
              className="whitespace-nowrap"
            >
              عرض الملف
            </Button>
          )}

          {isLink && (
            <Button
              href={lecture.attachmentUrl}
              variant="primary"
              target="_blank"
              rel="noreferrer"
              className="whitespace-nowrap"
            >
              فتح الرابط
            </Button>
          )}

          {!isPdf && !isLink && (
            <Button
              href={lecture.attachmentUrl}
              variant="primary"
              download
              className="whitespace-nowrap"
            >
              تحميل الملف
            </Button>
          )}

        </div>

      </div>
    </article>
  )
}

export default LectureCard