import SectionHeader from '../../components/ui/SectionHeader'
import { contractOne, contractTwo } from '../../assets/conditionsAffiliation'

const ConditionsOfAffiliation = () => {
  return (
    <section dir="rtl" className="space-y-10 py-10">
      <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm">
        <div className="space-y-6 px-8 py-10 lg:py-12">
<SectionHeader
  eyebrow="دليل الانتساب"
  title="شروط العضوية في الجمعية"
  description="اطلع على الأحكام والشروط المعتمدة للانتساب إلى الجمعية، بما في ذلك أنواع العضوية، متطلبات القبول، وحقوق وواجبات الأعضاء ضمن الإطار التنظيمي المعتمد."
/>


          <div className="grid gap-4 md:grid-cols-2">
            <div className="overflow-hidden rounded-3xl border border-slate-300 bg-slate-200 p-4 shadow-sm">
              <div className="h-[520px] overflow-hidden rounded-2xl bg-white">
                <img src={contractOne} alt="عقد الجمعية 1" className="h-full w-full object-contain bg-white" />
              </div>
            </div>
            <div className="overflow-hidden rounded-3xl border border-slate-300 bg-slate-200 p-4 shadow-sm">
              <div className="h-[520px] overflow-hidden rounded-2xl bg-white">
                <img src={contractTwo} alt="عقد الجمعية 2" className="h-full w-full object-contain bg-white" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-6 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <article className="space-y-4 text-slate-700 leading-8">
            <p className="font-semibold text-slate-900">مادة 5 – تتألف الجمعية من أربعة أنواع من الأعضاء:</p>
            <ul className="list-decimal list-inside space-y-2">
              <li>أ – أعضاء عاملون.</li>
              <li>ب – أعضاء مؤازرون.</li>
              <li>ج – أعضاء شرف .</li>
              <li>د –أعضاء مراسلون.</li>
            </ul>
          </article>

          <article className="space-y-4 text-slate-700 leading-8">
            <p className="font-semibold text-slate-900">مادة 6</p>
            <p>يقصد بالعضو العامل الشخص الطبيعي الذي يقبله المجلس ليساهم في نشاط الجمعية مساهمة فعلية.</p>
          </article>

          <article className="space-y-4 text-slate-700 leading-8">
            <p className="font-semibold text-slate-900">مادة 7</p>
            <p>
              للمجلس أن يمنح لقب عضو مؤازر للأشخاص الطبيعيين أو الاعتباريين المقيمين في الجمهورية العربية السورية أو في خارجها الذين يقدمون للجمعية مساعدات ذات قيمة تفيد أغراض الجمعية أو تكون لهم مؤلفات اقتصادية قيمة .
            </p>
          </article>

          <article className="space-y-4 text-slate-700 leading-8">
            <p className="font-semibold text-slate-900">مادة 8</p>
            <p>
              للمجلس أن يمنح عضوية الشرف لمن يراهم جديرون بهذا اللقب ممن قدموا خدمات جليلة للجمعية أو للعلوم الاقتصادية في الجمهورية العربية السورية أو خارجها.
            </p>
          </article>

          <article className="space-y-4 text-slate-700 leading-8">
            <p className="font-semibold text-slate-900">مادة 9</p>
            <p>
              للمجلس أن يسمي أعضاء مراسلين من بين الأشخاص المقيمين في الخارج الذين يؤازرون الجمعية أو يقدمون خدمات جليلة للعلوم الاقتصادية .
            </p>
          </article>

          <article className="space-y-4 text-slate-700 leading-8">
            <p className="font-semibold text-slate-900">مادة 10</p>
            <p>حق التصويت في هيئات الجمعية ومجالسها ينحصر في الأعضاء العاملين .</p>
          </article>

          <article className="space-y-4 text-slate-700 leading-8">
            <p className="font-semibold text-slate-900">مادة 11</p>
            <p>يشترط في قبول العضو العامل ما يلي:</p>
            <ul className="list-disc list-inside space-y-2 pl-4">
              <li>
                آ-أن يكون من حملة الدكتوراه أو الماجستير أو دبلوم الدراسات العليا في أحد فروع العلوم الاقتصادية أو الإحصائية أو إدارة الأعمال (التجارية) أو المالية أو شهادة عليا جامعية في الاقتصاد أو المالية لا تقل الدراسة فيها عن ثلاث سنوات بعد الشهادة الثانوية.
              </li>
              <li>ب-البكالوريوس أو الإجازة في الاقتصاد .</li>
              <li>ج- أن لا يكون محروما من مباشرة حقوقه السياسية.</li>
              <li>د- أن يكون حسن السلوك والسيرة.</li>
              <li>ه- أن يقدم طلب انتساب خطي يزكيه عضوان من الجمعية.</li>
              <li>و- أن يكون قد قيل كتابة نظام الجمعية.</li>
              <li>ز – أن يكون قد دفع رسم الانتساب.</li>
            </ul>
          </article>

          <article className="space-y-4 text-slate-700 leading-8">
            <p className="font-semibold text-slate-900">مادة 12</p>
            <p>تزول صفة العضوية في الحالات الآتية:</p>
            <ul className="list-disc list-inside space-y-2 pl-4">
              <li>آ – الاستقالة.</li>
              <li>ب – الوفاة.</li>
              <li>ج – إذا فقد العضو شرطا من شروط العضوية.</li>
              <li>د – إذا تأخر عن تسديد رسم الاشتراك مرة أخيرة بكتاب مضمون.</li>
              <li>ه – الفصل.</li>
            </ul>
            <p>ويكون زوال صفة العضوية بقرار يتخذه المجلس.</p>
          </article>

          <article className="space-y-4 text-slate-700 leading-8">
            <p className="font-semibold text-slate-900">مادة 13</p>
            <p>يفصل العضو في إحدى الحالتين التاليتين:</p>
            <ul className="list-disc list-inside space-y-2 pl-4">
              <li>آ – إذا أتى عملا من شأنه أن يلحق بالجمعية ضررا" جسميا" أو ماديا" أو أدبيا".</li>
              <li>ب – إذا استغل انضمامه للجمعية لغرض شخصي.</li>
            </ul>
          </article>

          <article className="space-y-4 text-slate-700 leading-8">
            <p className="font-semibold text-slate-900">مادة 14</p>
            <p>
              يبلغ العضو قرار المجلس بزوال صفة العضوية عنه وذلك خلال مدة خمسة عشر يوما" من تاريخ صدور هذا القرار على أن يعلن قرار الفصل على الجمعية العمومية في أول اجتماع لإقراره.
            </p>
          </article>

          <article className="space-y-4 text-slate-700 leading-8">
            <p className="font-semibold text-slate-900">مادة 15</p>
            <p>
              يجوز إعادة صفة العضوية إلى الأعضاء الذين زالت عنهم هذه الصفة بسبب عدم دفعهم رسوم الاشتراك في سنة ما إذا أدوا الرسوم المستحقة عليهم خلال السنة التالية وذلك بقرار يتخذه المجلس.
            </p>
          </article>

          <article className="space-y-4 text-slate-700 leading-8">
            <p className="font-semibold text-slate-900">مادة 16</p>
            <p>
              لا يجوز للعضو أو لمن زالت صفة العضوية عنه أو لورثة العضو المتوفى استرداد رسم الانتساب أو رسم الاشتراك أو الهبات أو التبرعات التي قدمها للجمعية.
            </p>
          </article>
        </div>
      </section>
  )
}

export default ConditionsOfAffiliation
