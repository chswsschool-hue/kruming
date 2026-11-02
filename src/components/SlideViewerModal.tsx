import React, { useState } from 'react';
import { SlideItem } from '../data/secondarySchool';
import { X, ChevronLeft, ChevronRight, ExternalLink, Presentation, BookOpen } from 'lucide-react';

interface SlideViewerModalProps {
  slide: SlideItem | null;
  onClose: () => void;
}

export const SlideViewerModal: React.FC<SlideViewerModalProps> = ({ slide, onClose }) => {
  const [currentPage, setCurrentPage] = useState(0);

  if (!slide) return null;

  const totalPages = slide.previewSlides?.length || 1;
  const currentSlideData = slide.previewSlides ? slide.previewSlides[currentPage] : null;

  const handleNext = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrev = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/80 backdrop-blur-xs">
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl max-w-4xl w-full flex flex-col shadow-2xl overflow-hidden max-h-[92vh]">
        {/* Top Header */}
        <div className="p-4 sm:p-5 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 flex items-center justify-center shrink-0">
              <Presentation className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs text-slate-500 dark:text-slate-400">
                {slide.gradeLabel} · {slide.subjectLabel} · {slide.format}
              </div>
              <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white truncate max-w-xl">
                {slide.title}
              </h3>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={slide.slideUrl}
              target="_blank"
              rel="noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/40 rounded-lg hover:bg-indigo-100 transition-colors"
            >
              <span>เปิดต้นฉบับ ({slide.format})</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
            <button
              onClick={onClose}
              className="p-2 text-slate-400 hover:text-slate-700 dark:hover:text-white rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Slide Canvas Body */}
        <div className="p-4 sm:p-8 flex-1 overflow-y-auto bg-slate-100 dark:bg-slate-950 flex flex-col justify-center items-center">
          <div className="w-full max-w-3xl aspect-[16/9] bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-lg p-6 sm:p-10 flex flex-col justify-between relative overflow-hidden">
            {/* Header of slide */}
            <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
              <span className="text-xs font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider">
                {slide.unit}
              </span>
              <span className="text-xs font-mono text-slate-400">
                สไลด์ที่ {currentPage + 1} / {totalPages}
              </span>
            </div>

            {/* Content of slide */}
            <div className="my-auto space-y-4 py-4">
              <h4 className="text-lg sm:text-2xl font-bold text-slate-900 dark:text-white">
                {currentSlideData?.title || slide.title}
              </h4>
              <ul className="space-y-3">
                {currentSlideData?.bullets.map((b, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3 text-xs sm:text-sm text-slate-700 dark:text-slate-300"
                  >
                    <span className="w-2 h-2 rounded-full bg-indigo-600 dark:bg-indigo-400 shrink-0 mt-1.5" />
                    <span className="leading-relaxed">{b}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Footer of slide */}
            <div className="flex items-center justify-between pt-3 border-t border-slate-100 dark:border-slate-800 text-[11px] text-slate-400">
              <span>{slide.teacher}</span>
              <span>ClassroomHub มัธยมศึกษา</span>
            </div>
          </div>
        </div>

        {/* Navigation & Controls */}
        <div className="p-4 border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 flex items-center justify-between">
          <div className="text-xs text-slate-500 dark:text-slate-400">
            รวม {slide.slideCount} สไลด์เต็มในชุดการสอน
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handlePrev}
              disabled={currentPage === 0}
              className={`flex items-center gap-1 px-3 py-1.5 text-xs font-medium rounded-lg border border-slate-200 dark:border-slate-700 transition-colors ${
                currentPage === 0
                  ? 'opacity-40 cursor-not-allowed text-slate-400'
                  : 'text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer'
              }`}
            >
              <ChevronLeft className="w-4 h-4" />
              <span>ก่อนหน้า</span>
            </button>

            <span className="text-xs font-mono font-semibold text-slate-700 dark:text-slate-300">
              {currentPage + 1} / {totalPages}
            </span>

            <button
              onClick={handleNext}
              disabled={currentPage === totalPages - 1}
              className={`flex items-center gap-1 px-3 py-1.5 text-xs font-medium rounded-lg border border-slate-200 dark:border-slate-700 transition-colors ${
                currentPage === totalPages - 1
                  ? 'opacity-40 cursor-not-allowed text-slate-400'
                  : 'text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer'
              }`}
            >
              <span>ถัดไป</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
