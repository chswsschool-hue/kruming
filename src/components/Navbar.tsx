import React, { useState } from 'react';
import { Sun, Moon, Menu, X, Code2 } from 'lucide-react';

interface NavbarProps {
  isDark: boolean;
  onToggleTheme: () => void;
  onOpenCodeModal: () => void;
  onOpenTeacherModal: () => void;
  onGoToAssignments: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  isDark,
  onToggleTheme,
  onOpenCodeModal,
  onOpenTeacherModal,
  onGoToAssignments,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8 h-16">
          {/* Zone 1: Single text element wordmark */}
          <a
            href="#"
            className="text-lg sm:text-xl font-bold tracking-tight text-slate-900 dark:text-white whitespace-nowrap shrink-0 flex items-center gap-2"
          >
            <span className="w-8 h-8 rounded-lg bg-indigo-600 text-white font-black flex items-center justify-center text-sm shadow-sm">
              CH
            </span>
            <span>ClassroomHub</span>
          </a>

          {/* Zone 2: 4–5 clean single-line text navigation links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-600 dark:text-slate-300">
            <button
              onClick={() => handleNavClick('slides')}
              className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors whitespace-nowrap shrink-0 cursor-pointer"
            >
              สไลด์การสอน
            </button>
            <button
              onClick={() => handleNavClick('media')}
              className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors whitespace-nowrap shrink-0 cursor-pointer"
            >
              สื่อการสอน & ใบงาน
            </button>
            <button
              onClick={() => handleNavClick('assignments')}
              className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors whitespace-nowrap shrink-0 cursor-pointer"
            >
              ระบบส่งการบ้าน
            </button>
            <button
              onClick={() => handleNavClick('classroom-demo')}
              className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors whitespace-nowrap shrink-0 cursor-pointer"
            >
              ห้องเรียนจำลอง
            </button>
            <button
              onClick={() => handleNavClick('instructor')}
              className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors whitespace-nowrap shrink-0 cursor-pointer"
            >
              คณะครูผู้สอน
            </button>
          </nav>

          {/* Zone 3: 1 primary action + utility buttons */}
          <div className="flex items-center gap-2.5 shrink-0">
            <button
              onClick={onOpenCodeModal}
              title="ดูโค้ดเดี่ยว Standalone HTML + Tailwind CDN"
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-lg transition-colors cursor-pointer"
            >
              <Code2 className="w-3.5 h-3.5" />
              <span>โค้ด HTML CDN</span>
            </button>

            <button
              onClick={onToggleTheme}
              aria-label="เปลี่ยนโหมดการแสดงผล (Light / Dark)"
              className="p-2 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
            >
              {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            <button
              onClick={onOpenTeacherModal}
              className="px-3.5 py-2 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-700 active:scale-[0.98] rounded-lg transition-all shadow-sm whitespace-nowrap shrink-0 cursor-pointer"
            >
              + สั่งงาน / เพิ่มสไลด์
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="เปิดเมนูบนมือถือ"
              className="lg:hidden p-2 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-4 pt-3 pb-5 space-y-2 shadow-lg">
          <button
            onClick={() => handleNavClick('slides')}
            className="block w-full text-left px-3 py-2 text-sm font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg"
          >
            สไลด์การสอน (Slides)
          </button>
          <button
            onClick={() => handleNavClick('media')}
            className="block w-full text-left px-3 py-2 text-sm font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg"
          >
            สื่อการสอน & ใบงาน
          </button>
          <button
            onClick={() => handleNavClick('assignments')}
            className="block w-full text-left px-3 py-2 text-sm font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg"
          >
            ระบบส่งการบ้าน (Assignments)
          </button>
          <button
            onClick={() => handleNavClick('classroom-demo')}
            className="block w-full text-left px-3 py-2 text-sm font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg"
          >
            ห้องเรียนจำลอง
          </button>
          <button
            onClick={() => handleNavClick('instructor')}
            className="block w-full text-left px-3 py-2 text-sm font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg"
          >
            คณะครูผู้สอน
          </button>

          <div className="pt-2 border-t border-slate-100 dark:border-slate-800 space-y-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenTeacherModal();
              }}
              className="w-full py-2 px-3 text-xs font-semibold text-white bg-indigo-600 rounded-lg text-center"
            >
              + สั่งงาน / เพิ่มสไลด์ (สำหรับครู)
            </button>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCodeModal();
              }}
              className="flex items-center gap-2 w-full px-3 py-2 text-xs font-medium text-indigo-600 dark:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-950/30 rounded-lg"
            >
              <Code2 className="w-4 h-4" />
              <span>ดูโค้ดไฟล์เดี่ยว Standalone HTML + CDN</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
