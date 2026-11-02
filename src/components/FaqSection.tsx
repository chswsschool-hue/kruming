import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const SECONDARY_FAQS = [
  {
    question: 'นักเรียนส่งงานผ่าน Google Drive หรือ Canva ต้องตั้งค่าสิทธิ์อย่างไร?',
    answer: 'ก่อนคัดลอกลิงก์ส่งงาน ให้นักเรียนกดปุ่ม "แชร์ (Share)" แล้วเปลี่ยนการตั้งค่าการเข้าถึงจาก "จำกัด (Restricted)" ให้เป็น "ทุกคนที่มีลิงก์ (Anyone with the link can view)" เพื่อให้คุณครูสามารถเปิดตรวจและให้คะแนนได้อย่างถูกต้อง'
  },
  {
    question: 'หากส่งงานเลยกำหนด (Late Submission) ระบบจะยังรับงานหรือไม่?',
    answer: 'ระบบจะยังคงอนุญาตให้นักเรียนส่งงานได้ตลอดเวลา แต่จะมีบันทึกวันและเวลาที่ส่งจริงกำกับไว้ในการส่งงาน เพื่อให้คุณครูประจำวิชาพิจารณาหักคะแนนตามเกณฑ์ที่ตกลงกันในห้องเรียน'
  },
  {
    question: 'สไลด์การสอนและสื่อวิดีโอ สามารถเปิดดูผ่านมือถือได้หรือไม่?',
    answer: 'สามารถเปิดดูผ่านสมาร์ตโฟน แท็บเล็ต หรือคอมพิวเตอร์ได้ 100% โดยเว็บไซต์ออกแบบมาให้ Responsive และรองรับทั้ง Google Slides, Canva และไฟล์ PDF โดยไม่ต้องติดตั้งแอปพลิเคชันเพิ่มเติม'
  },
  {
    question: 'คุณครูสามารถเพิ่มสไลด์ สื่อการสอน หรือสร้างการบ้านใหม่ได้อย่างไร?',
    answer: 'คุณครูสามารถกดที่ปุ่ม "+ สั่งงาน / เพิ่มสไลด์" ที่แถบเมนูด้านบน แล้วเลือกแถบที่ต้องการ (เพิ่มสไลด์ / แปะสื่อ / สั่งการบ้านใหม่) กรอกข้อมูลและลิงก์ ระบบจะแสดงผลบทเรียนใหม่บนหน้าห้องเรียนทันที'
  }
];

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-16 lg:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="text-xs font-semibold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 mb-2">
            Frequently Asked Questions
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white tracking-tight">
            คำถามที่พบบ่อยสำหรับนักเรียนและคุณครู
          </h2>
          <p className="mt-2 text-slate-600 dark:text-slate-400 text-sm">
            คำแนะนำเกี่ยวกับการเข้าถึงสไลด์ การเปิดดูสื่อ และข้อกำหนดในการส่งงานออนไลน์
          </p>
        </div>

        <div className="space-y-3">
          {SECONDARY_FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 overflow-hidden shadow-xs transition-colors"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 hover:bg-slate-50 dark:hover:bg-slate-700/40 transition-colors cursor-pointer"
                >
                  <span className="text-sm sm:text-base font-bold text-slate-900 dark:text-white">
                    {faq.question}
                  </span>
                  <div className="text-slate-400 shrink-0">
                    {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-100 dark:border-slate-700/60">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
