import React from 'react';
import { Mail, Phone, MapPin, Globe } from 'lucide-react';

interface FooterProps {
  onOpenCodeModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenCodeModal }) => {
  return (
    <footer className="bg-slate-900 text-slate-400 text-xs border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand Col */}
          <div className="space-y-3 md:col-span-1">
            <div className="text-white font-bold text-base flex items-center gap-2">
              <span className="w-6 h-6 rounded bg-indigo-600 text-white font-black flex items-center justify-center text-xs">
                CH
              </span>
              <span>ClassroomHub</span>
            </div>
            <p className="text-slate-400 text-xs leading-relaxed">
              ระบบศูนย์กลางการเรียนรู้ระดับมัธยมศึกษาตอนต้นและมัธยมศึกษาตอนปลาย (ม.1 - ม.6) แหล่งรวบรวมสื่อการสอนและติดตามการส่งงาน
            </p>
          </div>

          {/* Links 1 */}
          <div className="space-y-2">
            <div className="text-white font-semibold text-xs uppercase tracking-wider mb-3">
              กลุ่มสาระการเรียนรู้
            </div>
            <ul className="space-y-2">
              <li>
                <a href="#slides" className="hover:text-white transition-colors">
                  วิทยาศาสตร์และเทคโนโลยี
                </a>
              </li>
              <li>
                <a href="#slides" className="hover:text-white transition-colors">
                  คณิตศาสตร์ ม.1 - ม.6
                </a>
              </li>
              <li>
                <a href="#slides" className="hover:text-white transition-colors">
                  ภาษาอังกฤษเพื่อการสื่อสาร
                </a>
              </li>
            </ul>
          </div>

          {/* Links 2 */}
          <div className="space-y-2">
            <div className="text-white font-semibold text-xs uppercase tracking-wider mb-3">
              ฟังก์ชันหลักของระบบ
            </div>
            <ul className="space-y-2">
              <li>
                <a href="#slides" className="hover:text-white transition-colors">
                  สไลด์การสอน (Canva, Slides, PPT)
                </a>
              </li>
              <li>
                <a href="#media" className="hover:text-white transition-colors">
                  สื่อการสอนและใบงาน (PDF, Video, PhET)
                </a>
              </li>
              <li>
                <a href="#assignments" className="hover:text-white transition-colors">
                  ระบบส่งการบ้านออนไลน์
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-2">
            <div className="text-white font-semibold text-xs uppercase tracking-wider mb-3">
              ติดต่อสถาบัน
            </div>
            <div className="space-y-1.5 text-slate-400">
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-indigo-400" />
                <span>support@krututor.academy</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-indigo-400" />
                <span>02-123-4567 (จันทร์-ศุกร์ 09:00 - 18:00)</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-indigo-400" />
                <span>กรุงเทพมหานคร, ประเทศไทย</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500">
          <div>
            © 2026 KruTutor Academy. All rights reserved. ออกแบบตามหลัก Responsive Web Design
          </div>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-slate-400 transition-colors">ข้อกำหนดการให้บริการ</a>
            <span>·</span>
            <a href="#" className="hover:text-slate-400 transition-colors">นโยบายความเป็นส่วนตัว</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
