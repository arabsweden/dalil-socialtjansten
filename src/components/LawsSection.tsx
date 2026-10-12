import React from 'react';

export default function LawsSection() {
  return (
    <section className="bg-slate-100 py-16 px-6 rounded-3xl">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-blue-900 mb-4 text-center">القوانين الأساسية: الفرق الذي يجب أن تعرفه</h2>
        <p className="text-center text-slate-600 max-w-2xl mx-auto mb-12">
          يخلط الكثيرون بين الدعم الطوعي والتدخل القسري. فهم الفرق بين قانون SoL وقانون LVU هو مفتاح التعامل الصحيح.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-md border-r-4 border-green-500">
            <h3 className="text-2xl font-bold text-green-700 mb-2">قانون SoL (طوعي)</h3>
            <p className="text-sm text-slate-500 mb-4 font-mono">Socialtjänstlagen</p>
            <ul className="space-y-3 text-slate-700">
              <li className="flex items-start"><span className="ml-2 text-green-500">✔</span> يقوم على موافقة العائلة.</li>
              <li className="flex items-start"><span className="ml-2 text-green-500">✔</span> يشمل دعم مالي، استشارات، ومساعدين.</li>
              <li className="flex items-start"><span className="ml-2 text-green-500">✔</span> هو الأساس في معظم الحالات.</li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-md border-r-4 border-red-500">
            <h3 className="text-2xl font-bold text-red-700 mb-2">قانون LVU (قسري)</h3>
            <p className="text-sm text-slate-500 mb-4 font-mono">Lagen om vård av unga</p>
            <ul className="space-y-3 text-slate-700">
              <li className="flex items-start"><span className="ml-2 text-red-500">⚠</span> يُطبق فقط عند وجود "خطر جسيم".</li>
              <li className="flex items-start"><span className="ml-2 text-red-500">⚠</span> حل أخير عند رفض التعاون.</li>
              <li className="flex items-start"><span className="ml-2 text-red-500">⚠</span> يحتاج لقرار من المحكمة الإدارية.</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md flex flex-col justify-center">
            <h3 className="text-lg font-bold text-center mb-6 text-slate-700">تكرار التدخلات</h3>
            
            <div className="space-y-6">
              <div>
                <div className="flex justify-between text-sm font-bold text-slate-700 mb-2">
                  <span>تدخل طوعي (SoL)</span>
                  <span className="text-green-600">98%</span>
                </div>
                <div className="w-full bg-slate-100 rounded-full h-4">
                  <div className="bg-green-500 h-4 rounded-full" style={{ width: '98%' }}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between text-sm font-bold text-slate-700 mb-2">
                  <span>تدخل قسري (LVU)</span>
                  <span className="text-red-600">2%</span>
                </div>
                <div className="w-full bg-slate-100 rounded-full h-4">
                  <div className="bg-red-500 h-4 rounded-full" style={{ width: '2%' }}></div>
                </div>
              </div>
            </div>
            
            <p className="text-xs text-center text-slate-400 mt-6">السوسيال يسعى دائماً للحلول الطوعية أولاً</p>
          </div>
        </div>
      </div>
    </section>
  );
}
