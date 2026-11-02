import React, { useState } from 'react';
import { COURSES } from '../data/courses';
import { ChevronDown, ChevronUp, Play, CheckCircle, FileText, Sparkles } from 'lucide-react';

export const SyllabusSection: React.FC = () => {
  const [selectedCourseIndex, setSelectedCourseIndex] = useState(0);
  const [openModuleIndex, setOpenModuleIndex] = useState<number | null>(0);

  const currentCourse = COURSES[selectedCourseIndex];

  return (
    <section id="syllabus" className="py-16 lg:py-24 bg-slate-50 dark:bg-slate-900/40 border-y border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 mb-2">
            Detailed Course Syllabus
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white tracking-tight">
            สารบัญเนื้อหาแบบละเอียด เจาะลึกทุกขั้นตอน
          </h2>
          <p className="mt-2 text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            โครงสร้างการเรียนรู้เรียงลำดับจากง่ายไปยาก พร้อมตัวอย่างจริงและโจทย์ฝึกฝนทุกสัปดาห์
          </p>
        </div>

        {/* Course Switcher Pills/Tabs for Syllabus */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8">
          {COURSES.map((course, idx) => (
            <button
              key={course.id}
              onClick={() => {
                setSelectedCourseIndex(idx);
                setOpenModuleIndex(0);
              }}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap cursor-pointer ${
                selectedCourseIndex === idx
                  ? 'bg-indigo-600 text-white shadow-xs'
                  : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600'
              }`}
            >
              {course.title.split('2026')[0].split('for')[0]}
            </button>
          ))}
        </div>

        {/* Syllabus Accordion Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Accordion Modules */}
          <div className="lg:col-span-8 space-y-4">
            {currentCourse.modules.map((mod, modIdx) => {
              const isOpen = openModuleIndex === modIdx;
              return (
                <div
                  key={modIdx}
                  className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 overflow-hidden shadow-xs transition-colors"
                >
                  <button
                    onClick={() => setOpenModuleIndex(isOpen ? null : modIdx)}
                    className="w-full p-5 flex items-center justify-between gap-4 text-left hover:bg-slate-50 dark:hover:bg-slate-700/40 transition-colors cursor-pointer"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-7 h-7 rounded-lg bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 font-bold text-xs flex items-center justify-center shrink-0">
                        {modIdx + 1}
                      </div>
                      <div>
                        <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white">
                          {mod.title}
                        </h3>
                        <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                          {mod.lessons.length} บทเรียน · รวม {mod.duration}
                        </div>
                      </div>
                    </div>

                    <div className="p-1 text-slate-400">
                      {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                    </div>
                  </button>

                  {/* Accordion Body */}
                  {isOpen && (
                    <div className="px-5 pb-5 pt-2 border-t border-slate-100 dark:border-slate-700/60 divide-y divide-slate-100 dark:divide-slate-700/40">
                      {mod.lessons.map((lesson, lesIdx) => (
                        <div
                          key={lesIdx}
                          className="py-3 flex items-center justify-between gap-4 text-xs hover:bg-slate-50/50 dark:hover:bg-slate-700/20 px-2 rounded-lg transition-colors"
                        >
                          <div className="flex items-center gap-2.5">
                            <CheckCircle className="w-4 h-4 text-slate-300 dark:text-slate-600 shrink-0" />
                            <span className="text-slate-800 dark:text-slate-200 font-medium">
                              {lesson.title}
                            </span>
                          </div>

                          <div className="flex items-center gap-3 shrink-0">
                            {lesson.freePreview && (
                              <span className="text-[11px] font-semibold text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
                                <Play className="w-3 h-3 fill-current" />
                                <span>ดูฟรี</span>
                              </span>
                            )}
                            <span className="text-slate-400 tabular-nums">
                              {lesson.duration}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Right: What You'll Receive & Certificate Preview */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 p-6 shadow-xs space-y-4">
              <div className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-bold text-sm">
                <Sparkles className="w-4 h-4" />
                <span>สิ่งที่คุณจะได้รับในหลักสูตรนี้</span>
              </div>

              <ul className="space-y-3 text-xs text-slate-600 dark:text-slate-300">
                <li className="flex items-start gap-2">
                  <span className="text-emerald-600 dark:text-emerald-400 font-bold">✓</span>
                  <span>สิทธิ์เข้าดูวิดีโอตลอดชีพ อัปเดตฟรีตลอดปี 2026</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-600 dark:text-emerald-400 font-bold">✓</span>
                  <span>ซอร์สโค้ดต้นฉบับและโปรเจกต์ Starter Kit บน GitHub</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-600 dark:text-emerald-400 font-bold">✓</span>
                  <span>สิทธิ์เข้า Discord Community ถามตอบและตรวจการบ้าน</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-600 dark:text-emerald-400 font-bold">✓</span>
                  <span>ใบประกาศนียบัตรรับรองความสามารถ (Verifiable Certificate)</span>
                </li>
              </ul>

              {/* Certificate Mockup Frame */}
              <div className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-700">
                <div className="p-4 rounded-xl border border-indigo-200 dark:border-indigo-900/60 bg-indigo-50/50 dark:bg-indigo-950/20 text-center space-y-2">
                  <FileText className="w-8 h-8 text-indigo-600 dark:text-indigo-400 mx-auto" />
                  <div className="text-xs font-bold text-slate-900 dark:text-white">
                    Certificate of Competence
                  </div>
                  <div className="text-[11px] text-slate-500 dark:text-slate-400">
                    ออกให้โดย KruTutor Academy สำหรับแนบประกอบเรซูเมและ LinkedIn
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
