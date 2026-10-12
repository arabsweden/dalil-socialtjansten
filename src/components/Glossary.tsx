import React, { useState } from 'react';
import { Search, BookOpen } from 'lucide-react';

const terms = [
  {
    term: "SoL (Socialtjänstlagen)",
    definition: "قانون الخدمات الاجتماعية. هو القانون الأساسي الذي يحكم عمل السوسيال، ويقوم على مبدأ التطوع والتعاون مع الفرد أو الأسرة لتقديم الدعم والمساعدة."
  },
  {
    term: "LVU (Lagen med särskilda bestämmelser om vård av unga)",
    definition: "قانون رعاية الشباب (القسري). يُستخدم فقط عندما يكون هناك خطر ملموس على صحة الطفل أو تطوره، وترفض الأسرة التعاون الطوعي."
  },
  {
    term: "LVM (Lagen om vård av missbrukare i vissa fall)",
    definition: "قانون رعاية المدمنين في حالات معينة. يسمح للسوسيال بتقديم رعاية قسرية للأشخاص الذين يعانون من إدمان شديد يهدد حياتهم، ويرفضون العلاج."
  },
  {
    term: "Orosanmälan",
    definition: "بلاغ قلق. هو بلاغ يتم تقديمه للسوسيال عند وجود قلق بشأن وضع طفل أو شخص بالغ. بعض المهنيين (كالمعلمين والأطباء) ملزمون قانوناً بتقديم هذا البلاغ."
  },
  {
    term: "Utredning",
    definition: "تحقيق. عملية تقييم يقوم بها السوسيال بعد تلقي بلاغ قلق، لجمع المعلومات وفهم حالة الأسرة أو الفرد وتحديد ما إذا كانت هناك حاجة للمساعدة."
  },
  {
    term: "BBIC (Barns behov i centrum)",
    definition: "احتياجات الطفل في المركز. هو نموذج عمل يستخدمه السوسيال لضمان التركيز دائماً على مصلحة واحتياجات الطفل أثناء التحقيقات واتخاذ القرارات."
  },
  {
    term: "Familjehem",
    definition: "بيت الأسرة البديلة. عائلة تستقبل طفلاً أو شاباً للعيش معها لفترة مؤقتة أو دائمة عندما لا يمكنه العيش مع والديه البيولوجيين."
  },
  {
    term: "HVB-hem (Hem för vård eller boende)",
    definition: "دور الرعاية والسكن. مؤسسات تقدم رعاية متخصصة وعلاجاً للأطفال والشباب أو البالغين الذين يحتاجون إلى دعم مكثف لا يمكن توفيره في المنزل."
  }
];

export default function Glossary() {
  const [searchTerm, setSearchTerm] = useState<string>('');

  if (typeof window === 'undefined' || !useState) {
    return <div className="py-16 px-4 bg-white"><div className="max-w-4xl mx-auto text-center">Loading...</div></div>;
  }

  const filteredTerms = terms.filter(item => 
    item.term.toLowerCase().includes(searchTerm.toLowerCase()) || 
    item.definition.includes(searchTerm)
  );

  return (
    <section id="glossary" className="py-16 px-6 bg-white rounded-3xl shadow-sm">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <BookOpen className="w-12 h-12 text-slate-700 mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-slate-800 mb-4">قاموس المصطلحات</h2>
          <p className="text-slate-600">شرح مبسط لأهم المصطلحات القانونية والاجتماعية المستخدمة في السويد.</p>
        </div>

        <div className="relative mb-8">
          <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
            <Search className="w-5 h-5 text-slate-400" />
          </div>
          <input
            type="text"
            className="block w-full p-4 pr-10 text-sm text-slate-900 border border-slate-300 rounded-xl bg-slate-50 focus:ring-blue-500 focus:border-blue-500 transition-colors"
            placeholder="ابحث عن مصطلح..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="space-y-4">
          {filteredTerms.length > 0 ? (
            filteredTerms.map((item, index) => (
              <div key={index} className="bg-slate-50 border border-slate-200 rounded-xl p-6 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold text-slate-800 mb-2" dir="ltr" style={{ textAlign: 'right' }}>{item.term}</h3>
                <p className="text-slate-600 leading-relaxed">{item.definition}</p>
              </div>
            ))
          ) : (
            <div className="text-center py-8 text-slate-500">
              لم يتم العثور على مصطلحات مطابقة للبحث.
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
