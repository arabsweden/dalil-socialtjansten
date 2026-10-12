import SocialShare from './SocialShare';

export default function MythsSection() {
  const myths = [
    {
      myth: "السوسيال يخطف الأطفال بسبب اختلافات ثقافية أو دينية.",
      fact: "التدخل يحدث فقط عند وجود عنف، إهمال شديد، أو خطر على حياة الطفل، بغض النظر عن الدين أو الثقافة. القانون السويدي يحظر العنف تماماً."
    },
    {
      myth: "لا تتحدث معهم واطردهم إذا جاؤوا.",
      fact: "رفض التعاون قد يُعتبر دليلاً ضدك. الشفافية وإظهار الاستعداد لقبول النصيحة هو أفضل طريق لحماية عائلتك."
    },
    {
      myth: "المعلمون يبلغون عني لأنهم يكرهونني.",
      fact: "موظفو المدارس والصحة مُلزمون قانونياً بالتبليغ عند مجرد 'الاشتباه' بوجود خطر، لحماية الطفل، وليس لأسباب شخصية."
    }
  ];

  return (
    <section className="bg-blue-50 py-16 px-6 rounded-3xl">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">خرافات وحقائق</h2>
        
        <div className="space-y-6">
          {myths.map((item, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm overflow-hidden flex flex-col md:flex-row">
              <div className="bg-red-100 p-6 md:w-1/2 border-r-0 md:border-l-4 border-red-500">
                <h4 className="font-bold text-red-800 text-lg mb-2">🚫 الشائعة</h4>
                <p className="text-slate-700">{item.myth}</p>
              </div>
              <div className="bg-green-100 p-6 md:w-1/2 border-green-500">
                <h4 className="font-bold text-green-800 text-lg mb-2">✅ الحقيقة</h4>
                <p className="text-slate-700">{item.fact}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <SocialShare title="خرافات وحقائق حول السوسيال في السويد" />
        </div>
      </div>
    </section>
  );
}
