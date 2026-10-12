import React, { useState } from 'react';
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';
import { Download } from 'lucide-react';

export default function PdfExportButton() {
  const [isExporting, setIsExporting] = useState(false);

  const exportToPDF = async () => {
    setIsExporting(true);
    try {
      const element = document.body;
      const canvas = await html2canvas(element, {
        scale: 2,
        useCORS: true,
        logging: false,
        windowWidth: document.documentElement.offsetWidth,
        windowHeight: document.documentElement.offsetHeight,
      });

      const imgData = canvas.toDataURL('image/png');
      
      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'px',
        format: [canvas.width, canvas.height]
      });

      pdf.addImage(imgData, 'PNG', 0, 0, canvas.width, canvas.height);
      pdf.save('social-guide-sweden.pdf');
    } catch (error) {
      console.error('Error generating PDF:', error);
      alert('حدث خطأ أثناء إنشاء ملف PDF. ' + (error as Error).message);
    } finally {
      setIsExporting(false);
    }
  };

  return (
    <button
      onClick={exportToPDF}
      disabled={isExporting}
      className={`fixed bottom-6 left-6 z-50 flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white px-4 py-3 rounded-full shadow-lg transition-all duration-300 font-bold ${
        isExporting ? 'opacity-70 cursor-not-allowed' : 'hover:scale-105'
      }`}
      title="تحميل كملف PDF"
    >
      <Download className="w-5 h-5" />
      <span className="hidden sm:inline">
        {isExporting ? 'جاري التحميل...' : 'حفظ كملف PDF'}
      </span>
    </button>
  );
}

