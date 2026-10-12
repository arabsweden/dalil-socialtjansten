import React from 'react';

export default function ScopeSection() {
  const scopeData = [
    { label: "رعاية المسنين", value: 45, color: "bg-blue-900" },
    { label: "دعم العائلات والأطفال", value: 25, color: "bg-blue-500" },
    { label: "المساعدات المالية", value: 15, color: "bg-teal-500" },
    { label: "دعم ضحايا العنف", value: 10, color: "bg-amber-500" },
    { label: "علاج الإدمان", value: 5, color: "bg-slate-500" }
  ];

  return (
    <section className="max-w-6xl mx-auto py-12 px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-bold text-blue-900 mb-6 border-r-4 border-amber-500 pr-4">ما هو السوسيال؟</h2>
          <p className="text-lg leading-relaxed text-slate-600 mb-6">
            الخدمات الاجتماعية (Socialtjänsten) هي شبكة أمان تهدف لضمان حصول جميع الأفراد في المجتمع على الدعم والحماية.
            خلافاً للاعتقاد السائد، عملهم لا يقتصر على قضايا الأطفال، بل يشمل شرائح واسعة من المجتمع.
          </p>
          <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-teal-500">
            <p className="font-bold text-teal-700 mb-2">💡 الحقيقة الأساسية:</p>
            <p className="text-slate-700">الهدف الأساسي هو تقديم الدعم والمساعدة، وليس العقاب أو التفكيك.</p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-lg">
          <h3 className="text-xl font-bold text-center mb-6 text-slate-700">مجالات عمل السوسيال</h3>
          <div className="space-y-4">
            {scopeData.map((item, index) => (
              <div key={index}>
                <div className="flex justify-between text-sm font-bold text-slate-700 mb-1">
                  <span>{item.label}</span>
                  <span>{item.value}%</span>
                </div>
                <div className="w-full bg-slate-100 rounded-full h-3">
                  <div className={`${item.color} h-3 rounded-full`} style={{ width: `${item.value}%` }}></div>
                </div>
              </div>
            ))}
          </div>
          <p className="text-sm text-center text-slate-500 mt-6">توزيع توضيحي للمجالات المختلفة التي يغطيها السوسيال</p>
        </div>
      </div>
    </section>
  );
}
