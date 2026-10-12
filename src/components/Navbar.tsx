import { CircleUser } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-blue-900/95 backdrop-blur-sm text-white py-3 px-4 shadow-md border-b border-blue-800">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <div className="flex items-center gap-3">
          <CircleUser className="w-10 h-10 text-amber-400" />
          <span className="font-bold text-lg hidden sm:block">دليل السوسيال في السويد</span>
        </div>
        
        <div className="flex gap-6 text-sm font-medium">
          <a href="#" className="hover:text-amber-400 transition-colors">الرئيسية</a>
          <a href="#laws" className="hover:text-amber-400 transition-colors">القوانين</a>
          <a href="#process" className="hover:text-amber-400 transition-colors">المراحل</a>
          <a href="#recovery" className="hover:text-amber-400 transition-colors">استرجاع الأطفال</a>
          <a href="#rights" className="hover:text-amber-400 transition-colors">حقوقك</a>
        </div>
      </div>
    </nav>
  );
}
