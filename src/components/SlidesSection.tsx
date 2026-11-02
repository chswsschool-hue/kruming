import React, { useState } from 'react';
import { SlideItem, GradeLevel, SubjectCategory, GRADE_TABS, SUBJECT_TABS } from '../data/secondarySchool';
import { Presentation, PlusCircle, ExternalLink, Eye, Clock, User, Layers } from 'lucide-react';
import { SlideViewerModal } from './SlideViewerModal';

interface SlidesSectionProps {
  slides: SlideItem[];
  onOpenAddModal: (tab: 'slide' | 'media' | 'assignment') => void;
}

export const SlidesSection: React.FC<SlidesSectionProps> = ({ slides, onOpenAddModal }) => {
  const [selectedGrade, setSelectedGrade] = useState<GradeLevel>('all');
  const [selectedSubject, setSelectedSubject] = useState<SubjectCategory>('all');
  const [viewingSlide, setViewingSlide] = useState<SlideItem | null>(null);

  const filteredSlides = slides.filter((s) => {
    const matchGrade = selectedGrade === 'all' || s.grade === selectedGrade || s.grade === 'all';
    const matchSubject = selectedSubject === 'all' || s.subject === selectedSubject || s.subject === 'all';
    return matchGrade && matchSubject;
  });

  return (
    <section id="slides" className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 mb-2">
              Teaching Presentations & Slides
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white tracking-tight">
              สไลด์การสอนประจำหน่วยการเรียนรู้
            </h2>
            <p className="mt-2 text-slate-600 dark:text-slate-400 text-sm sm:text-base">
              สไลด์สรุปเนื้อหาเข้มข้น ครอบคลุมหลักสูตร ม.1 - ม.6 พร้อมเปิดดูออนไลน์หรือนำไปทบทวนได้ทุกที่
            </p>
          </div>

          <button
            onClick={() => onOpenAddModal('slide')}
            className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-700 active:scale-[0.98] rounded-xl transition-all shadow-sm self-start md:self-auto cursor-pointer"
          >
            <PlusCircle className="w-4 h-4" />
            <span>เพิ่มสไลด์การสอนใหม่</span>
          </button>
        </div>

        {/* Filter Bar: Grade Level + Subject Tabs */}
        <div className="space-y-3 mb-8 bg-slate-50 dark:bg-slate-800/40 p-3 sm:p-4 rounded-2xl border border-slate-200 dark:border-slate-800">
          {/* Grade Level Buttons */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1">
            <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 mr-2 shrink-0">
              ระดับชั้น:
            </span>
            {GRADE_TABS.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedGrade(tab.id)}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
                  selectedGrade === tab.id
                    ? 'bg-indigo-600 text-white shadow-xs'
                    : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Subject Buttons */}
          <div className="flex items-center gap-1.5 overflow-x-auto pt-2 border-t border-slate-200/60 dark:border-slate-700/60">
            <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 mr-2 shrink-0">
              กลุ่มสาระ:
            </span>
            {SUBJECT_TABS.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedSubject(tab.id)}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
                  selectedSubject === tab.id
                    ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-900 shadow-xs'
                    : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Slides Grid */}
        {filteredSlides.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredSlides.map((slide) => (
              <div
                key={slide.id}
                className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 p-6 flex flex-col justify-between shadow-xs hover:shadow-md transition-shadow"
              >
                <div className="space-y-3">
                  {/* Metadata (clean unboxed text with separators) */}
                  <div className="flex items-center gap-2 text-xs text-indigo-600 dark:text-indigo-400 font-medium">
                    <span>{slide.gradeLabel}</span>
                    <span aria-hidden="true">·</span>
                    <span>{slide.subjectLabel}</span>
                  </div>

                  <h3 className="text-base font-bold text-slate-900 dark:text-white leading-snug line-clamp-2">
                    {slide.title}
                  </h3>

                  <div className="text-xs font-medium text-slate-500 dark:text-slate-400">
                    {slide.unit}
                  </div>

                  <p className="text-xs text-slate-600 dark:text-slate-300 line-clamp-2 leading-relaxed">
                    {slide.description}
                  </p>

                  <div className="pt-3 border-t border-slate-100 dark:border-slate-700/60 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
                    <span className="flex items-center gap-1">
                      <Layers className="w-3.5 h-3.5 text-slate-400" />
                      {slide.slideCount} สไลด์ ({slide.format})
                    </span>
                    <span className="flex items-center gap-1">
                      <User className="w-3.5 h-3.5 text-slate-400" />
                      {slide.teacher}
                    </span>
                  </div>
                </div>

                {/* Card Actions */}
                <div className="pt-4 mt-4 border-t border-slate-100 dark:border-slate-700 flex items-center gap-2">
                  <button
                    onClick={() => setViewingSlide(slide)}
                    className="flex-1 py-2 px-3 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>เปิดดูสไลด์</span>
                  </button>

                  <a
                    href={slide.slideUrl}
                    target="_blank"
                    rel="noreferrer"
                    title={`เปิดลิงก์ ${slide.format}`}
                    className="p-2 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 rounded-lg transition-colors cursor-pointer"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="p-12 text-center rounded-2xl border border-dashed border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/40">
            <Presentation className="w-10 h-10 text-slate-400 mx-auto mb-3" />
            <div className="text-sm font-semibold text-slate-700 dark:text-slate-300">
              ไม่พบสไลด์การสอนในระดับชั้นหรือกลุ่มสาระนี้
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
              ลองเลือกตัวกรองอื่น หรือคลิกปุ่ม "เพิ่มสไลด์การสอนใหม่" เพื่ออัปโหลดบทเรียน
            </p>
          </div>
        )}
      </div>

      {/* Slide Viewer Modal */}
      <SlideViewerModal
        slide={viewingSlide}
        onClose={() => setViewingSlide(null)}
      />
    </section>
  );
};
