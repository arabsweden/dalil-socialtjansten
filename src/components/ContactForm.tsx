import React, { useState } from 'react';
import { Send, CircleCheck } from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate sending data
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-16 px-6 bg-slate-100 rounded-3xl">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-slate-800 mb-4">تواصل معنا</h2>
          <p className="text-slate-600">هل لديك أسئلة عامة حول محتوى الدليل؟ أرسلها لنا وسنحاول الإجابة عليها.</p>
        </div>

        {isSubmitted ? (
          <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center animate-in fade-in zoom-in duration-300">
            <CircleCheck className="w-16 h-16 text-green-500 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-green-800 mb-2">تم الإرسال بنجاح!</h3>
            <p className="text-green-600">شكراً لك على تواصلك. سنتلقى رسالتك قريباً.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-sm p-8 border border-slate-200">
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">الاسم</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    placeholder="أدخل اسمك"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">البريد الإلكتروني</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    placeholder="أدخل بريدك الإلكتروني"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">رسالتك</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors resize-none"
                  placeholder="اكتب سؤالك أو استفسارك هنا..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-slate-800 hover:bg-slate-700 text-white font-bold py-4 px-8 rounded-xl flex justify-center items-center gap-2 transition-colors"
              >
                <span>إرسال الرسالة</span>
                <Send className="w-5 h-5 rotate-180" />
              </button>
            </div>
            <p className="text-xs text-center text-slate-400 mt-6">ملاحظة: هذا النموذج للأسئلة العامة فقط. يُرجى عدم إرسال معلومات شخصية حساسة.</p>
          </form>
        )}
      </div>
    </section>
  );
}
