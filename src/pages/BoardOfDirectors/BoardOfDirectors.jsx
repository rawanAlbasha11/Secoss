import { useSelector } from 'react-redux'
import SectionHeader from '../../components/ui/SectionHeader'
import BackButton from '../../components/BackButton'
import Tag from '../../components/ui/Tag'
import logo from '../../assets/logo1.png' // ضع اللوجو المناسب هنا

const BoardOfDirectors = () => {
  const { boards } = useSelector(state => state.board)

  const staticInfo = "جمعية العلوم الاقتصادية السورية - عضو اتحاد الاقتصاديين العرب - Society Syrian Economic Sciences - Economists Union Member of The Arab"

  return (
    <section className="py-10 px-4 sm:px-6 lg:px-8" dir="rtl">
      <div className="space-y-10">

        {/* Header + Logo +زر الرجوع */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 text-right">
          <div className="space-y-4">
          <div className='flex justify-start items-baseline gap-6'>
           <BackButton />
            <SectionHeader
              eyebrow="مجلس الإدارة"
              title="أسماء أعضاء مجالس الإدارة في تاريخ الجمعية"
              description="عرض لمجالس الإدارة في جمعية العلوم الاقتصادية السورية حسب السنوات."
            />
            </div>
            {/* Static info */}
            <div className="rounded-2xl bg-slate-50/80 shadow-sm p-4 sm:p-6 text-slate-700 text-base sm:text-lg leading-relaxed">
              {staticInfo}
            </div>
          </div>

          <img
            src={logo}
            alt="شعار الجمعية"
            className="w-40 h-auto sm:w-48"
          />
        </div>

  
       

        {/* قائمة مجالس الإدارة */}
        <div className="space-y-10">
          {boards.map((board, idx) => (
            <div
              key={idx}
              className="rounded-[2rem] bg-white/90 border border-accent shadow-[0_20px_80px_rgba(15,23,42,0.08)] backdrop-blur-sm p-8 sm:p-12 space-y-6"
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-accent">{board.year}</h2>
              <p className="text-sm sm:text-base text-accentSoft">{board.period}</p>

              <div className="space-y-3 text-right text-slate-700">
                <p className="text-base sm:text-lg"><span className="font-semibold">الرئيس:</span> {board.president}</p>
                <p className="text-base sm:text-lg"><span className="font-semibold">نائب الرئيس:</span> {board.vicePresident}</p>
                <p className="text-base sm:text-lg"><span className="font-semibold">أمين السر:</span> {board.secretary}</p>
                <p className="text-base sm:text-lg"><span className="font-semibold">أمين الصندوق:</span> {board.treasurer}</p>
                <p className="font-semibold text-base sm:text-lg">الأعضاء:</p>
                <div className="flex flex-wrap gap-2">
                  {board.members.map((member, i) => (
                    <Tag key={i} variant="accent">{member}</Tag>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default BoardOfDirectors