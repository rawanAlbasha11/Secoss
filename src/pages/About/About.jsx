import SectionHeader from "../../components/ui/SectionHeader";
import logo from "../../assets/logo1.png";

const About = () => {
  return (
    <section className="py-10">
      <div className="px-4 sm:px-6 lg:px-8" dir="rtl">
        <div className="rounded-[2rem] border border-slate-200 bg-slate-50/80 p-8 shadow-[0_20px_80px_rgba(15,23,42,0.08)] backdrop-blur-sm sm:p-10">

          {/* Header + Logo */}
          <div className="flex  items-center justify-between space-y-6 text-center">
            <SectionHeader
              eyebrow="من نحن"
              title="جمعية العلوم الاقتصادية السورية"
              description="تأسست الجمعية عام 1965 بهدف تطوير البحث الاقتصادي، دعم الكفاءات، وتعزيز التعاون العلمي بين الاقتصاديين على المستوى المحلي والعربي."
            />

            <img
              src={logo}
              alt="شعار الجمعية"
              className="w-[13rem] h-auto"
            />
          </div>

          {/* Content */}
          <div className="mt-10 space-y-6 text-right text-slate-700">

            <div className="rounded-3xl bg-white p-6 shadow-sm sm:p-8">
              
              <p className="mb-4 text-lg font-semibold text-slate-900">
                وقد تضمن نظامها الداخلي أهداف الجمعية كما يلي:
              </p>

              <div className="space-y-4">

                {/* Goals */}
                <div className="rounded-2xl bg-slate-50 p-5">
                  <p className="mb-3 font-semibold text-slate-900">
                    مادة 3 – تهدف الجمعية إلى:
                  </p>

                  <ol className="list-decimal list-inside space-y-3 text-slate-700">
                    <li>النهوض بالأبحاث المتعلقة بالعلوم الاقتصادية.</li>
                    <li>
                      خدمة القضايا المتعلقة باقتصاديات الأقطار العربية عامة
                      والقطر العربي السوري خاصة.
                    </li>
                    <li>
                      المساهمة مع الاقتصاديين العرب في تحقيق الأهداف الاقتصادية
                      القومية للأمة العربية في كافة أقطارها.
                    </li>
                    <li>
                      توثيق الروابط بين جميع العاملين في حقل العلوم الاقتصادية.
                    </li>
                    <li>النهوض بالمستوى العلمي والمهني للاقتصاديين.</li>
                    <li>
                      المساهمة في تأمين العناصر الفنية التي يحتاجها النمو
                      الاقتصادي والاجتماعي.
                    </li>
                  </ol>
                </div>

                {/* Activities */}
                <div className="rounded-2xl bg-slate-50 p-5">
                  <p className="mb-3 font-semibold text-slate-900">
                    وللجمعية أن تستعمل في سبيل تحقيق أهدافها بصورة خاصة ما يلي:
                  </p>

                  <ul className="list-disc list-inside space-y-3 text-slate-700">
                    <li>تنظيم محاضرات وندوات ومناقشات تتعلق بتلك العلوم.</li>
                    <li>
                      القيام بنشر المؤلفات والبحوث وإصدار النشرات والمجلات
                      الاقتصادية أو المساعدة على نشرها.
                    </li>
                    <li>
                      تنظيم المؤتمرات والاشتراك فيما يعقد منها في الداخل
                      والخارج.
                    </li>
                    <li>
                      تنظيم الرحلات الدراسية أو المتعلقة بالبحوث وإعانتها
                      وتنشيطها.
                    </li>
                    <li>إنشاء مكتبة ومراكز للأبحاث والدراسات الاقتصادية.</li>
                    <li>
                      تخصيص منح للدراسة والبحث في المجالات التي تحقق أغراض
                      الجمعية.
                    </li>
                    <li>
                      التعاون مع الجمعيات الاقتصادية العربية بصورة عامة لخدمة
                      الأهداف الاقتصادية القومية للجمعية.
                    </li>
                  </ul>
                </div>

                {/* General */}
                <p className="rounded-2xl bg-slate-50 p-5 leading-8">
                  بوجه عام تستخدم الجمعية كل ما لديها من الوسائل في تنشيط الجهود
                  المتعلقة بأغراضها.
                </p>

                {/* Rule */}
                <p className="rounded-2xl bg-slate-50 p-5 font-semibold leading-8">
                  مادة 4 – لا يجوز للجمعية أن تتدخل في الأمور السياسية والعقائد
                  الدينية.
                </p>

              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;