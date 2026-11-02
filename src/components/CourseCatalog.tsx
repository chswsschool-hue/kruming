import React, { useState } from 'react';
import { COURSES, Course } from '../data/courses';
import { Star, Clock, BookOpen, Check, ArrowRight, X } from 'lucide-react';

interface CourseCatalogProps {
  onEnrollCourse: (courseId: string) => void;
}

export const CourseCatalog: React.FC<CourseCatalogProps> = ({ onEnrollCourse }) => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'web' | 'ai' | 'design'>('all');
  const [selectedCourseForModal, setSelectedCourseForModal] = useState<Course | null>(null);

  const filteredCourses = activeFilter === 'all'
    ? COURSES
    : COURSES.filter((c) => c.category === activeFilter);

  return (
    <section id="courses" className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 mb-2">
              Featured Curriculums 2026
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white tracking-tight">
              หลักสูตรยอดนิยมสำหรับผู้เรียนยุคใหม่
            </h2>
            <p className="mt-2 text-slate-600 dark:text-slate-400 text-sm sm:text-base">
              ออกแบบโครงสร้างบทเรียนให้เข้าใจง่าย ลำดับขั้นชัดเจน พร้อมโปรเจกต์จริงให้ลงมือทำ
            </p>
          </div>

          {/* Filter Tabs / Segmented Controls (Buttons allowed per constitution) */}
          <div className="flex items-center gap-1.5 p-1.5 bg-slate-100 dark:bg-slate-800 rounded-xl overflow-x-auto self-start md:self-auto shrink-0">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
                activeFilter === 'all'
                  ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-xs'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              ทั้งหมด ({COURSES.length})
            </button>
            <button
              onClick={() => setActiveFilter('web')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
                activeFilter === 'web'
                  ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-xs'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              การพัฒนาเว็บ (Web)
            </button>
            <button
              onClick={() => setActiveFilter('ai')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
                activeFilter === 'ai'
                  ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-xs'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              ปัญญาประดิษฐ์ & ข้อมูล (AI)
            </button>
            <button
              onClick={() => setActiveFilter('design')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
                activeFilter === 'design'
                  ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-xs'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              ออกแบบ (UI/UX)
            </button>
          </div>
        </div>

        {/* Course Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.map((course) => (
            <div
              key={course.id}
              className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 overflow-hidden shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div>
                {/* Course Thumbnail */}
                <div className="relative aspect-4/3 overflow-hidden bg-slate-100 dark:bg-slate-900">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3 bg-slate-900/80 backdrop-blur-xs text-white text-[11px] font-medium px-2.5 py-1 rounded-md">
                    {course.category === 'web' ? 'Web Development' : course.category === 'ai' ? 'AI & Data' : 'UI/UX Design'}
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 space-y-4">
                  {/* Clean unboxed metadata with separators (NO PILLS) */}
                  <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
                    <span>{course.level}</span>
                    <span aria-hidden="true">·</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {course.durationHours} ชั่วโมง
                    </span>
                    <span aria-hidden="true">·</span>
                    <span className="flex items-center gap-1">
                      <BookOpen className="w-3 h-3" />
                      {course.totalLessons} บทเรียน
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 dark:text-white leading-snug">
                    {course.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 line-clamp-2">
                    {course.subtitle}
                  </p>

                  {/* Highlights list */}
                  <div className="space-y-1.5 pt-2 border-t border-slate-100 dark:border-slate-700/60">
                    {course.highlights.slice(0, 3).map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-300">
                        <Check className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400 shrink-0 mt-0.5" />
                        <span className="truncate">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer: Rating, Price, & Action */}
              <div className="p-6 pt-0 space-y-4">
                <div className="flex items-center justify-between text-xs pt-3 border-t border-slate-100 dark:border-slate-700/60">
                  <div className="flex items-center gap-1 text-amber-500">
                    <Star className="w-3.5 h-3.5 fill-current" />
                    <span className="font-semibold text-slate-800 dark:text-slate-200 tabular-nums">
                      {course.rating}
                    </span>
                    <span className="text-slate-400">({course.reviewCount.toLocaleString()})</span>
                  </div>
                  <div className="text-right">
                    <span className="text-xs text-slate-400 line-through tabular-nums mr-1.5">
                      ฿{course.originalPrice.toLocaleString()}
                    </span>
                    <span className="text-base font-extrabold text-indigo-600 dark:text-indigo-400 tabular-nums">
                      ฿{course.price.toLocaleString()}
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => setSelectedCourseForModal(course)}
                    className="px-3 py-2 text-xs font-semibold text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-700/70 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-lg transition-colors cursor-pointer text-center"
                  >
                    ดูเนื้อหา & รายละเอียด
                  </button>

                  <button
                    onClick={() => onEnrollCourse(course.id)}
                    className="px-3 py-2 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg transition-colors shadow-xs cursor-pointer text-center"
                  >
                    สมัครเรียนคอร์สนี้
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Course Detail Modal */}
      {selectedCourseForModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs">
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl p-6 sm:p-8 space-y-6">
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 mb-1">
                  รายละเอียดหลักสูตรอย่างเป็นทางการ
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                  {selectedCourseForModal.title}
                </h3>
              </div>
              <button
                onClick={() => setSelectedCourseForModal(null)}
                className="p-1.5 text-slate-400 hover:text-slate-700 dark:hover:text-white rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              {selectedCourseForModal.description}
            </p>

            {/* Modules Outline */}
            <div className="space-y-3">
              <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                โครงสร้างโมดูลการเรียน ({selectedCourseForModal.modules.length} โมดูล / {selectedCourseForModal.totalLessons} บท)
              </h4>
              <div className="space-y-2">
                {selectedCourseForModal.modules.map((mod, i) => (
                  <div
                    key={i}
                    className="p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/40"
                  >
                    <div className="flex items-center justify-between text-xs font-semibold text-slate-900 dark:text-white mb-1.5">
                      <span>{mod.title}</span>
                      <span className="text-slate-400 tabular-nums">{mod.duration}</span>
                    </div>
                    <div className="space-y-1">
                      {mod.lessons.map((les, j) => (
                        <div
                          key={j}
                          className="flex items-center justify-between text-xs text-slate-600 dark:text-slate-400 pl-2"
                        >
                          <span className="truncate">· {les.title}</span>
                          <span className="text-[11px] tabular-nums text-slate-400 shrink-0 ml-2">
                            {les.freePreview ? '🟢 ทดลองฟรี' : les.duration}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Price & CTA in Modal */}
            <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
              <div>
                <div className="text-xs text-slate-400">ราคาพิเศษวันนี้</div>
                <div className="text-xl font-bold text-indigo-600 dark:text-indigo-400 tabular-nums">
                  ฿{selectedCourseForModal.price.toLocaleString()}
                  <span className="text-xs text-slate-400 font-normal line-through ml-2">
                    ฿{selectedCourseForModal.originalPrice.toLocaleString()}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => setSelectedCourseForModal(null)}
                  className="px-4 py-2 text-xs font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
                >
                  ปิดหน้าต่าง
                </button>
                <button
                  onClick={() => {
                    const cid = selectedCourseForModal.id;
                    setSelectedCourseForModal(null);
                    onEnrollCourse(cid);
                  }}
                  className="px-5 py-2.5 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg transition-colors flex items-center gap-1.5"
                >
                  <span>ลงทะเบียนทันที</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
