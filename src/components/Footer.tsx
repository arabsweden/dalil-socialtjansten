export default function Footer() {
  return (
    <footer className="bg-slate-800 text-slate-400 py-12 text-center px-4">
      <div className="max-w-4xl mx-auto">
        <p className="mb-4 text-lg">تم إنشاء هذا الدليل التوضيحي بناءً على القوانين السويدية الحالية.</p>
        <p className="text-sm text-slate-500 mb-6">
          ملاحظة: هذا المحتوى للأغراض الإعلامية ولا يُغني عن الاستشارة القانونية المختصة.
        </p>
        <div className="border-t border-slate-700 pt-6">
          <p className="text-xs">© {new Date().getFullYear()} دليل السوسيال في السويد. جميع الحقوق محفوظة.</p>
        </div>
      </div>
    </footer>
  );
}
