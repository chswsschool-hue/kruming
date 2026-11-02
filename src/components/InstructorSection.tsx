import React, { useState } from 'react';
import { Award, Briefcase, Calendar, CheckCircle2, MessageSquare } from 'lucide-react';

export const InstructorSection: React.FC = () => {
  const [bookingSent, setBookingSent] = useState(false);

  return (
    <section id="instructor" className="py-16 lg:py-24 bg-slate-50 dark:bg-slate-900/50 border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Portrait & Credentials */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-sm rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700 shadow-xl bg-slate-100 dark:bg-slate-800">
              <img
                src="/src/assets/images/instructor_portrait_1793593750676.jpg"
                alt="ครูอรณิชา วัฒนกุล - ผู้สอนหลัก KruTutor Academy"
                className="w-full aspect-square object-cover"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex flex-col justify-end p-6 text-white">
                <div className="text-lg font-bold">ครูอรณิชา วัฒนกุล (Kru Ornicha)</div>
                <div className="text-xs text-indigo-300 font-medium">
                  หัวหน้ากลุ่มสาระวิทยาศาสตร์และเทคโนโลยี · ผู้สอนวิทยาการคำนวณ ม.ต้น - ม.ปลาย
                </div>
              </div>
            </div>

            {/* Credential Badges beneath portrait */}
            <div className="mt-4 flex flex-wrap items-center justify-center gap-3 text-xs text-slate-600 dark:text-slate-400">
              <span className="flex items-center gap-1">
                <Briefcase className="w-3.5 h-3.5 text-indigo-600" />
                ประสบการณ์สอนมัธยมฯ 8+ ปี
              </span>
              <span aria-hidden="true">·</span>
              <span className="flex items-center gap-1">
                <Award className="w-3.5 h-3.5 text-amber-500" />
                ครูผู้ฝึกสอนโครงงานระดับประเทศ
              </span>
            </div>
          </div>

          {/* Right Column: Bio & Teaching Philosophy */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <div className="text-xs font-semibold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 mb-2">
                Secondary School Teaching Faculty
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white tracking-tight">
                คุณครูผู้ทุ่มเทเพื่อศักยภาพของนักเรียนทุกคน
              </h2>
            </div>

            <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              "ระดับมัธยมศึกษาคือช่วงเวลาสำคัญในการค้นหาความถนัดและสร้างพื้นฐานวิชาการที่แข็งแกร่ง
              ครูเชื่อว่าเมื่อนักเรียนสามารถเข้าถึงสไลด์ที่จัดระเบียบดี สื่อการสอนที่น่าสนใจ และมีระบบส่งงานที่ชัดเจน
              การเรียนรู้จะสนุก เข้าใจง่าย และนำไปต่อยอดสู่ระดับอุดมศึกษาได้อย่างมั่นใจ"
            </p>

            {/* Key Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 space-y-1.5">
                <div className="flex items-center gap-2 font-bold text-sm text-slate-900 dark:text-white">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                  <span>เน้นทำโปรเจกต์จริง</span>
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  เรียนผ่านการเขียนเว็บจริง 4 โปรเจกต์ นำไปใส่พอร์ตโฟลิโอสมัครงานได้ทันที
                </p>
              </div>

              <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 space-y-1.5">
                <div className="flex items-center gap-2 font-bold text-sm text-slate-900 dark:text-white">
                  <MessageSquare className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                  <span>ตรวจโค้ดละเอียดรายบุคคล</span>
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  ส่งการบ้านแล้วได้รับ Code Review เพื่อแนะนำจุดปรับปรุงเรื่องความปลอดภัยและ Performance
                </p>
              </div>
            </div>

            {/* Booking / Consultation interactive affordance */}
            <div className="pt-4 border-t border-slate-200 dark:border-slate-700 flex flex-wrap items-center gap-4">
              <button
                onClick={() => setBookingSent(true)}
                className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-slate-900 dark:bg-slate-100 dark:text-slate-900 hover:bg-slate-800 dark:hover:bg-white rounded-xl transition-colors cursor-pointer"
              >
                <Calendar className="w-4 h-4" />
                <span>จองเวลาปรึกษาเส้นทางอาชีพ (Office Hours ฟรี 15 นาที)</span>
              </button>

              {bookingSent && (
                <div className="text-xs font-medium text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>บันทึกคำขอแล้ว! เจ้าหน้าที่จะส่งลิงก์เลือกเวลานัดหมายเข้าสู่อีเมลของคุณ</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
