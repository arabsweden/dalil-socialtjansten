import { FileText, Search, FolderOpen, Scale } from 'lucide-react';

export default function ProcessSection() {
  const steps = [
    {
      icon: <FileText className="w-10 h-10 text-blue-500" />,
      title: "1. البلاغ",
      description: "يصل بلاغ قلق من المدرسة أو الشرطة أو الجيران بوجود خطر محتمل على الطفل.",
      borderColor: "border-blue-500"
    },
    {
      icon: <Search className="w-10 h-10 text-teal-500" />,
      title: "2. التقييم الأولي",
      description: "خلال 14 يوماً، يقرر السوسيال هل يستدعي الأمر فتح تحقيق رسمي أم لا.",
      borderColor: "border-teal-500"
    },
    {
      icon: <FolderOpen className="w-10 h-10 text-amber-500" />,
      title: "3. التحقيق",
      description: "جمع معلومات من العائلة والمدرسة والطبيب. المدة القصوى 4 أشهر.",
      borderColor: "border-amber-500"
    },
    {
      icon: <Scale className="w-10 h-10 text-slate-700" />,
      title: "4. القرار",
      description: "إما إغلاق الملف، تقديم دعم طوعي (SoL)، أو طلب رعاية قسرية (LVU) من المحكمة في الحالات الخطرة.",
      borderColor: "border-slate-700"
    }
  ];

  return (
    <section className="max-w-6xl mx-auto py-16 px-4">
      <h2 className="text-3xl font-bold text-blue-900 mb-10 text-center">ماذا يحدث بعد "بلاغ القلق"؟</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
        {steps.map((step, index) => (
          <div 
            key={index}
            className={`relative bg-white p-6 rounded-xl shadow-lg border-t-8 ${step.borderColor} transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:scale-[1.02] cursor-default group`}
          >
            <div className="flex justify-center mb-4 transition-transform duration-300 group-hover:scale-110">{step.icon}</div>
            <h3 className="text-xl font-bold text-slate-800 mb-2">{step.title}</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              {step.description}
            </p>
            
            {/* Arrow for Desktop */}
            {index < steps.length - 1 && (
              <div className="hidden md:block absolute top-1/2 -left-4 transform -translate-y-1/2 z-10">
                <span className="text-slate-300 text-2xl">←</span>
              </div>
            )}
            
            {/* Arrow for Mobile */}
            {index < steps.length - 1 && (
              <div className="md:hidden mt-4 text-slate-300 text-2xl">
                ▼
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
