import React from "react";

const Footer = () => {
  return (
    <footer className="border-t border-[#1e293b] bg-[#0f172a80] backdrop-blur-sm mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-center gap-4">
          <div className="w-10 h-10 relative flex items-center justify-center">
            {/* Soft cyan halo background */}
            <div className="absolute inset-0 bg-[#00a3ff33] blur-xl rounded-full"></div>
            {/* Logo container with primary border and glow */}
            <div className="relative bg-[#0f172a] border-2 border-[#00a3ff] rounded-lg flex items-center justify-center w-full h-full shadow-[0_0_10px_rgba(0,163,255,0.4)]">
              <span className="text-[#00a3ff] font-bold text-xl [text-shadow:0_0_15px_rgba(0,163,255,0.6)]">
                AG
              </span>
            </div>
          </div>

          <div className="text-center space-y-2">
            <p className="text-sm text-[#94a3b8]">مفهوم ومطور بواسطة</p>
            <p className="text-lg font-bold text-[#00a3ff] [text-shadow:0_0_15px_rgba(0,163,255,0.6)]">
              عبدالجليل قنيبر
            </p>
            <p className="text-sm font-semibold text-[#f8fafc]">
              Abdeldjalil Gouneiber
            </p>
          </div>

              <div className="flex flex-wrap justify-center items-center gap-6 mt-4">
                <a 
                  href="/about" 
                  className="text-sm font-semibold text-[#94a3b8] hover:text-[#00a3ff] transition-colors"
                >
                  عن المؤسس
                </a>
                <a 
                  href="/insights" 
                  className="text-sm font-semibold text-[#94a3b8] hover:text-[#00a3ff] transition-colors"
                >
                  رؤى مهنية
                </a>
                <a 
                  href="/lessons" 
                  className="text-sm font-semibold text-[#94a3b8] hover:text-[#00a3ff] transition-colors"
                >
                  الدروس
                </a>
                <a 
                  href="/tools" 
                  className="text-sm font-semibold text-[#94a3b8] hover:text-[#00a3ff] transition-colors"
                >
                  الأدوات
                </a>
                <a 
                  href="https://solo.to/jlg-ps" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sm font-semibold text-[#94a3b8] hover:text-[#00a3ff] transition-colors"
                >
                  اتصل بنا
                </a>
              </div>

            <div className="text-[10px] md:text-xs text-[#94a3b8] tracking-tight mt-4">
              © 2025 Math Companion Pro. جميع الحقوق محفوظة
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;