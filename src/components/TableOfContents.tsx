import React, { useState, useEffect } from 'react';
import { List } from 'lucide-react';

const sections = [
  { id: 'scope', title: 'نطاق التدخل' },
  { id: 'laws', title: 'القوانين والتشريعات' },
  { id: 'process', title: 'إجراءات العمل' },
  { id: 'myths', title: 'مفاهيم خاطئة' },
  { id: 'recovery', title: 'استعادة الحضانة' },
  { id: 'rights', title: 'حقوقك ونصائح' },
  { id: 'glossary', title: 'قاموس المصطلحات' },
];

export default function TableOfContents() {
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: '-20% 0px -80% 0px' }
    );

    sections.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="sticky top-24 max-h-[calc(100vh-8rem)] overflow-y-auto w-64 bg-white border border-slate-200 rounded-xl p-6 hidden lg:block shadow-sm">
      <div className="flex items-center gap-2 mb-6">
        <List className="w-5 h-5 text-blue-600" />
        <h3 className="font-bold text-slate-800">محتويات الدليل</h3>
      </div>
      <ul className="space-y-3 relative before:absolute before:inset-y-0 before:right-2 before:w-0.5 before:bg-slate-100">
        {sections.map(({ id, title }) => (
          <li key={id} className="relative z-10">
            <a
              href={`#${id}`}
              onClick={(e) => handleClick(e, id)}
              className={`flex items-center gap-3 text-sm transition-colors ${
                activeId === id
                  ? 'text-blue-600 font-bold'
                  : 'text-slate-600 hover:text-blue-600'
              }`}
            >
              <span 
                className={`w-4 h-4 rounded-full border-2 bg-white flex-shrink-0 transition-colors ${
                  activeId === id ? 'border-blue-600' : 'border-slate-300'
                }`}
              />
              {title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
