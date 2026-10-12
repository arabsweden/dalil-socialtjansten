import { Languages, FileText, Gavel, ScrollText, Lightbulb } from 'lucide-react';
import SocialShare from './SocialShare';

export default function RightsAndTips() {
  const rights = [
    {
      icon: <Languages className="w-6 h-6 text-blue-600" />,
      title: "مترجم مجاني",
      desc: "من حقك وجود مترجم في كل اجتماع لتفهم كل كلمة بدقة."
    },
    {
      icon: <FileText className="w-6 h-6 text-blue-600" />,
      title: "الاطلاع على الملفات",
      desc: "من حقك قراءة كل ما يُكتب عنك وتصحيح الأخطاء."
    },
    {
      icon: <Gavel className="w-6 h-6 text-blue-600" />,
      title: "محامٍ مجاني",
      desc: "في قضايا LVU (سحب الرعاية)، تدفع الدولة تكاليف محاميك."
    },
    {
      icon: <ScrollText className="w-6 h-6 text-blue-600" />,
      title: "حق الاستئناف",
      desc: "إذا لم يعجبك القرار، يمكنك الاعتراض عليه في المحكمة."
    }
  ];

  const tips = [
    "احتفظ بهدوئك: الغضب والصراخ لا يخدم قضيتك.",
    "اطرح الأسئلة: لا تخرج من الاجتماع وأنت غير فاهم لما حدث.",
    "أظهر حسن النية: أكد لهم أن مصلحة طفلك هي أولويتك وأنك مستعد لتلقي الدعم.",
    "استعن بالخبراء: تواصل مع منظمات قانونية إذا شعرت بالظلم."
  ];

  return (
    <section className="max-w-6xl mx-auto py-16 px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        
        {/* Rights List */}
        <div>
          <h2 className="text-2xl font-bold text-blue-900 mb-6 flex items-center">
            <span className="bg-blue-100 p-2 rounded-full ml-3">⚖️</span>
            حقوقك القانونية
          </h2>
          <ul className="space-y-4">
            {rights.map((right, index) => (
              <li key={index} className="flex items-start bg-white p-4 rounded-lg shadow-sm border border-slate-100">
                <div className="ml-4 mt-1">{right.icon}</div>
                <div>
                  <strong className="block text-slate-800">{right.title}</strong>
                  <span className="text-sm text-slate-500">{right.desc}</span>
                </div>
              </li>
            ))}
          </ul>
          <SocialShare title="حقوقك القانونية عند التعامل مع السوسيال في السويد" />
        </div>

        {/* Tips List */}
        <div className="bg-amber-50 p-8 rounded-2xl border border-amber-100">
          <h2 className="text-2xl font-bold text-amber-700 mb-6 flex items-center">
            <span className="bg-amber-200 p-2 rounded-full ml-3">
              <Lightbulb className="w-6 h-6 text-amber-700" />
            </span>
            نصائح ذهبية
          </h2>
          <div className="space-y-5">
            {tips.map((tip, index) => (
              <div key={index} className="flex items-start">
                <div className="bg-amber-500 text-white font-bold w-8 h-8 flex items-center justify-center rounded-full ml-4 shrink-0">
                  {index + 1}
                </div>
                <p className="text-slate-800 leading-relaxed">
                  {tip.split(':')[0]}: <span className="font-normal text-slate-600">{tip.split(':')[1]}</span>
                </p>
              </div>
            ))}
          </div>
          <SocialShare title="نصائح ذهبية للتعامل مع السوسيال في السويد" />
        </div>

      </div>
    </section>
  );
}
