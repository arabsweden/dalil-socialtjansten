import { UserCheck, FileSearch, Handshake, Scale, Home, Heart } from 'lucide-react';
import SocialShare from './SocialShare';

export default function RecoverySection() {
  const steps = [
    {
      icon: <UserCheck className="w-8 h-8 text-blue-600" />,
      title: "1. توكيل محامٍ (الخطوة الأهم)",
      content: "في حالات سحب الأطفال القسري بموجب 'قانون رعاية الشباب' (LVU)، يحق لك الحصول على محامٍ عام (Offentligt biträde) تدفع الدولة أتعابه. المحامي هو الشخص المؤهل لشرح وضعك القانوني، قراءة التقارير، وتقديم الطلبات نيابة عنك."
    },
    {
      icon: <FileSearch className="w-8 h-8 text-teal-600" />,
      title: "2. فهم الأسباب وخطة الرعاية (Vårdplan)",
      content: "من الضروري جداً أن تفهم بالضبط لماذا تم اتخاذ هذا القرار. اطلب من السوسيال تزويدك بـ 'خطة الرعاية' (Vårdplan). هذه الخطة توضح الأسباب التي أدت لسحب الطفل، والأهداف التي يجب تحقيقها لكي يتمكن الطفل من العودة إلى المنزل."
    },
    {
      icon: <Handshake className="w-8 h-8 text-amber-600" />,
      title: "3. التعاون وإظهار حسن النية",
      content: "أحد أهم العوامل التي ينظر إليها السوسيال والمحكمة هو مدى استعداد الوالدين للتعاون وإحداث تغيير إيجابي. حافظ على تواصل هادئ ومحترم مع الموظفين المسؤولين. الغضب أو التهديد يعقد الأمور ويُستخدم كدليل ضد الوالدين."
    },
    {
      icon: <Scale className="w-8 h-8 text-indigo-600" />,
      title: "4. حق الاستئناف (Överklagan)",
      content: "إذا صدر قرار بسحب الطفل، يحق لك استئناف القرار أمام المحكمة الإدارية (Förvaltningsrätten). سيقوم محاميك بمساعدتك في كتابة الاستئناف وتقديم الأدلة التي تثبت قدرتك على رعاية طفلك."
    },
    {
      icon: <Home className="w-8 h-8 text-green-600" />,
      title: "5. طلب إنهاء الرعاية (Hemställan om vårdens upphörande)",
      content: "حتى إذا أقرت المحكمة قرار السحب، فإن الرعاية بموجب قانون (LVU) يجب أن تنتهي بمجرد زوال الأسباب التي أدت إليها. يمكنك تقديم طلب رسمي للسوسيال يسمى 'طلب إنهاء الرعاية' لفتح تحقيق جديد لتقييم تحسن الظروف."
    },
    {
      icon: <Heart className="w-8 h-8 text-red-600" />,
      title: "6. الحفاظ على التواصل مع الطفل (Umgänge)",
      content: "يحق لك عادةً رؤية طفلك والتواصل معه أثناء فترة وجوده في الرعاية. التزم بمواعيد الزيارة أو الاتصال، وأظهر التزامك وحبك للطفل خلال هذه الأوقات، حيث تتم كتابة تقارير عن هذه الزيارات."
    }
  ];

  return (
    <section className="bg-white py-16 px-6 border border-slate-100 rounded-3xl shadow-sm">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-black text-blue-900 mb-4">كيف يتم استرجاع الاطفال من السوسيال؟</h2>
          <p className="text-slate-600 max-w-3xl mx-auto">
            الخطوات الأساسية والإجراءات القانونية التي يجب التركيز عليها لضمان عودة أطفالك بأمان وقانونية.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="bg-slate-50 p-6 rounded-2xl border border-slate-100 hover:shadow-md transition-shadow">
              <div className="mb-4 bg-white w-14 h-14 rounded-xl flex items-center justify-center shadow-sm">
                {step.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">{step.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                {step.content}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-blue-50 p-6 rounded-2xl border border-blue-100">
          <p className="text-blue-800 text-sm text-center font-medium">
            ⚠️ ملاحظة هامة: هذا توجيه عام عن النظام المتبع في السويد ولا يُغني بأي حال من الأحوال عن الاستشارة القانونية المتخصصة.
          </p>
        </div>

        <div className="flex justify-center mt-8">
          <SocialShare title="دليل استرجاع الأطفال من السوسيال في السويد" />
        </div>
      </div>
    </section>
  );
}
