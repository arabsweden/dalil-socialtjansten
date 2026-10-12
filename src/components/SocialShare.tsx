import { Share2 } from 'lucide-react';

export default function SocialShare({ title }: { title: string }) {
  const shareUrl = typeof window !== 'undefined' ? window.location.href : '';
  const encodedUrl = encodeURIComponent(shareUrl);
  const encodedTitle = encodeURIComponent(title);

  const WhatsAppIcon = () => (
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12.031 0C5.385 0 0 5.386 0 12.031c0 2.12.552 4.167 1.6 5.975L.036 24l6.19-1.624c1.761.954 3.754 1.455 5.805 1.455 6.646 0 12.031-5.386 12.031-12.031C24 5.386 18.615 0 12.031 0zm3.834 17.397c-.166.467-.962.906-1.378.966-.395.056-1.01.144-3.238-.781-2.67-1.109-4.364-3.83-4.496-4.005-.132-.175-1.074-1.428-1.074-2.723 0-1.295.666-1.932.902-2.189.236-.257.514-.321.685-.321.171 0 .342.002.493.009.155.007.363-.06.565.424.21.503.714 1.745.778 1.874.064.129.106.28.021.45-.086.171-.13.278-.26.429-.129.151-.274.331-.389.439-.124.116-.255.245-.112.493.143.248.636 1.054 1.365 1.703.94.838 1.728 1.096 1.982 1.222.254.126.402.106.55-.062.148-.168.643-.746.814-1.002.171-.256.342-.213.578-.126.236.087 1.492.704 1.749.833.257.129.429.193.493.299.064.106.064.619-.102 1.086z" />
    </svg>
  );

  const FacebookIcon = () => (
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
    </svg>
  );

  const TwitterIcon = () => (
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
    </svg>
  );

  const platforms = [
    {
      name: 'Facebook',
      icon: <FacebookIcon />,
      url: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
      color: 'bg-[#1877F2]'
    },
    {
      name: 'Twitter',
      icon: <TwitterIcon />,
      url: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
      color: 'bg-[#1DA1F2]'
    },
    {
      name: 'WhatsApp',
      icon: <WhatsAppIcon />,
      url: `https://api.whatsapp.com/send?text=${encodedTitle} ${encodedUrl}`,
      color: 'bg-[#25D366]'
    }
  ];

  return (
    <div className="flex items-center gap-3 mt-6 pt-4 border-t border-slate-100">
      <span className="text-xs font-bold text-slate-400 flex items-center gap-1">
        <Share2 className="w-3 h-3" /> شارك هذه المعلومات:
      </span>
      <div className="flex gap-2">
        {platforms.map((p) => (
          <a
            key={p.name}
            href={p.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`${p.color} text-white p-2 rounded-full hover:opacity-80 transition-opacity shadow-sm`}
            title={`مشاركة على ${p.name}`}
          >
            {p.icon}
          </a>
        ))}
      </div>
    </div>
  );
}
