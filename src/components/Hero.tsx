import React from 'react';
import { ArrowRight, Play, Award, Users, Star, Clock } from 'lucide-react';

interface HeroProps {
  onExploreSlides: () => void;
  onGoToAssignments: () => void;
  onOpenTeacherModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onExploreSlides,
  onGoToAssignments,
  onOpenTeacherModal,
}) => {
  return (
    <section className="relative pt-12 pb-16 lg:pt-20 lg:pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headline and CTAs */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-indigo-700 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/40 px-3 py-1 rounded-md">
              <span>ห้องเรียนออนไลน์ มัธยมศึกษาตอนต้น - มัธยมศึกษาตอนปลาย</span>
              <span aria-hidden="true">·</span>
              <span>ม.1 - ม.6</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.2] text-balance">
              ศูนย์การเรียนรู้ออนไลน์ คลังสไลด์ สื่อการสอน และระบบส่งการบ้าน
            </h1>

            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl">
              แหล่งรวมสไลด์บทเรียนเข้มข้น คลิปวิดีโออธิบายเข้าใจง่าย ใบงานฝึกทักษะ
              และระบบส่งการบ้านออนไลน์ที่นักเรียนส่งงานได้ทุกที่ ทุกเวลา ตรวจสอบสถานะได้ทันที
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={onExploreSlides}
                className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-700 active:scale-[0.98] rounded-xl transition-all shadow-md shadow-indigo-600/20 cursor-pointer"
              >
                <span>ดูสไลด์และสื่อการสอน</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onGoToAssignments}
                className="inline-flex items-center gap-2 px-5 py-3.5 text-sm font-semibold text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700/80 border border-slate-200 dark:border-slate-700 rounded-xl transition-all cursor-pointer"
              >
                <span>ส่งการบ้านออนไลน์</span>
              </button>

              <button
                onClick={onOpenTeacherModal}
                className="inline-flex items-center gap-1.5 px-4 py-3.5 text-xs font-medium text-indigo-600 dark:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-950/40 rounded-xl transition-colors cursor-pointer"
              >
                <span>+ จัดการห้องเรียน (คุณครู)</span>
              </button>
            </div>

            {/* Quick Micro-Proofs (Unboxed metadata, no pills) */}
            <div className="pt-4 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-slate-500 dark:text-slate-400 border-t border-slate-200/80 dark:border-slate-800/80">
              <div className="flex items-center gap-1.5">
                <span className="font-semibold text-slate-800 dark:text-slate-200">ม.1 - ม.6</span>
                <span>ครอบคลุมทุกระดับชั้น</span>
              </div>
              <span aria-hidden="true" className="hidden sm:inline">·</span>
              <div className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-slate-400" />
                <span>อัปเดตสไลด์ตามชั่วโมงสอนจริง</span>
              </div>
              <span aria-hidden="true" className="hidden sm:inline">·</span>
              <div className="flex items-center gap-1.5">
                <Award className="w-4 h-4 text-emerald-500" />
                <span>ส่งงานสะดวกผ่าน Google Drive / Canva</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual Asset */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-xl bg-slate-100 dark:bg-slate-800">
              <img
                src="/src/assets/images/hero_modern_classroom_1793593749381.jpg"
                alt="บรรยากาศการเรียนและการสอนระดับมัธยมศึกษา"
                className="w-full h-[360px] sm:h-[420px] object-cover"
                referrerPolicy="no-referrer"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent flex flex-col justify-end p-6 text-white">
                <div className="text-xs uppercase tracking-wider text-indigo-300 font-semibold mb-1">
                  Secondary School Learning Hub
                </div>
                <div className="text-lg font-bold">ห้องเรียนดิจิทัล ม.1 - ม.6</div>
                <div className="text-xs text-slate-300 mt-1">
                  ศูนย์รวมสื่อ นวัตกรรมการสอน และช่องทางส่งงานที่มีระเบียบสำหรับคุณครูและนักเรียน
                </div>
              </div>
            </div>

            {/* Floating Quick Card */}
            <div className="absolute -bottom-5 -left-4 sm:left-4 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-3 shadow-lg flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-indigo-50 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400 flex items-center justify-center font-bold">
                ✓
              </div>
              <div className="text-xs">
                <p className="font-semibold text-slate-900 dark:text-white">ส่งงานตรงเวลา</p>
                <p className="text-slate-500 dark:text-slate-400">เช็กสถานะการส่งได้ทันที</p>
              </div>
            </div>
          </div>
        </div>

        {/* 4-Column Proof & Metric Strip below Hero */}
        <div className="mt-16 pt-8 border-t border-slate-200 dark:border-slate-800 grid grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="space-y-1">
            <div className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white tabular-nums">
              6 ระดับชั้น
            </div>
            <div className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
              ม.1 - ม.3 และ ม.4 - ม.6
            </div>
          </div>

          <div className="space-y-1">
            <div className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white tabular-nums">
              100%
            </div>
            <div className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
              เข้าถึงสไลด์และส่งงานผ่านมือถือได้
            </div>
          </div>

          <div className="space-y-1">
            <div className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white tabular-nums">
              5 กลุ่มสาระ
            </div>
            <div className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
              วิทย์-เทคโนฯ, คณิต, อังกฤษ, สังคม, ภาษาไทย
            </div>
          </div>

          <div className="space-y-1">
            <div className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white tabular-nums">
              24 ชม.
            </div>
            <div className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
              ทบทวนบทเรียนและทำแบบฝึกหัดได้ตลอดเวลา
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
