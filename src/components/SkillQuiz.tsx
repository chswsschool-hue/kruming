import React, { useState } from 'react';
import { QUIZ_QUESTIONS, COURSES } from '../data/courses';
import { HelpCircle, ArrowRight, RotateCcw, CheckCircle, Tag } from 'lucide-react';

interface SkillQuizProps {
  onSelectCourseWithCoupon: (courseId: string, coupon: string) => void;
}

export const SkillQuiz: React.FC<SkillQuizProps> = ({ onSelectCourseWithCoupon }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({});
  const [isFinished, setIsFinished] = useState(false);

  const currentQ = QUIZ_QUESTIONS[currentStep];

  const handleSelectOption = (optIndex: number) => {
    const updatedAnswers = { ...selectedAnswers, [currentStep]: optIndex };
    setSelectedAnswers(updatedAnswers);

    if (currentStep < QUIZ_QUESTIONS.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setIsFinished(true);
    }
  };

  const resetQuiz = () => {
    setCurrentStep(0);
    setSelectedAnswers({});
    setIsFinished(false);
  };

  // Determine recommended course based on most frequent recommendation
  const getRecommendation = () => {
    const counts: Record<string, number> = {};
    QUIZ_QUESTIONS.forEach((q, idx) => {
      const optIdx = selectedAnswers[idx] ?? 0;
      const rec = q.options[optIdx]?.courseRecommendation || 'web-dev-mastery';
      counts[rec] = (counts[rec] || 0) + 1;
    });

    let topCourseId = 'web-dev-mastery';
    let maxCount = -1;
    for (const [cid, count] of Object.entries(counts)) {
      if (count > maxCount) {
        maxCount = count;
        topCourseId = cid;
      }
    }

    return COURSES.find((c) => c.id === topCourseId) || COURSES[0];
  };

  const recommendedCourse = isFinished ? getRecommendation() : null;

  return (
    <section id="quiz" className="py-16 lg:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 p-6 sm:p-10 shadow-sm">
          {!isFinished ? (
            <div>
              {/* Progress Indicator */}
              <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 mb-6 pb-4 border-b border-slate-100 dark:border-slate-700/60">
                <div className="flex items-center gap-2 font-semibold text-indigo-600 dark:text-indigo-400">
                  <HelpCircle className="w-4 h-4" />
                  <span>แบบทดสอบประเมินเส้นทางการเรียนที่เหมาะกับคุณ</span>
                </div>
                <div className="font-mono tabular-nums">
                  ข้อ {currentStep + 1} จาก {QUIZ_QUESTIONS.length}
                </div>
              </div>

              {/* Question Title */}
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white leading-snug mb-6">
                {currentQ.question}
              </h3>

              {/* Options */}
              <div className="space-y-3">
                {currentQ.options.map((option, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSelectOption(idx)}
                    className="w-full text-left p-4 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-indigo-500 dark:hover:border-indigo-400 hover:bg-indigo-50/30 dark:hover:bg-indigo-950/20 transition-all cursor-pointer group"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="space-y-1">
                        <div className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                          {option.label}
                        </div>
                        <div className="text-xs text-slate-500 dark:text-slate-400">
                          {option.sublabel}
                        </div>
                      </div>
                      <div className="w-5 h-5 rounded-full border border-slate-300 dark:border-slate-600 group-hover:border-indigo-600 flex items-center justify-center shrink-0 mt-0.5">
                        <div className="w-2.5 h-2.5 rounded-full bg-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                    </div>
                  </button>
                ))}
              </div>

              {/* Footer controls */}
              <div className="mt-6 flex items-center justify-between text-xs text-slate-400">
                <span>คลิกตัวเลือกเพื่อไปยังข้อถัดไป</span>
                {currentStep > 0 && (
                  <button
                    onClick={() => setCurrentStep(currentStep - 1)}
                    className="text-slate-600 dark:text-slate-300 hover:underline"
                  >
                    ← ย้อนกลับ
                  </button>
                )}
              </div>
            </div>
          ) : (
            /* Quiz Result Screen */
            <div className="space-y-6 text-center sm:text-left">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-semibold text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40">
                <CheckCircle className="w-3.5 h-3.5" />
                <span>ประเมินผลลัพธ์สำเร็จแล้ว</span>
              </div>

              <div className="space-y-2">
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                  หลักสูตรที่เหมาะสมกับเป้าหมายของคุณมากที่สุด
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-300">
                  จากคำตอบของคุณ เราขอแนะนำหลักสูตรนี้ที่จะช่วยให้คุณบรรลุเป้าหมายได้อย่างรวดเร็วและตรงจุด
                </p>
              </div>

              {recommendedCourse && (
                <div className="p-6 rounded-2xl border border-indigo-200 dark:border-indigo-900/60 bg-indigo-50/40 dark:bg-indigo-950/20 text-left space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                      <div className="text-xs font-semibold text-indigo-600 dark:text-indigo-400">
                        {recommendedCourse.level} · {recommendedCourse.durationHours} ชั่วโมง
                      </div>
                      <div className="text-lg font-bold text-slate-900 dark:text-white mt-1">
                        {recommendedCourse.title}
                      </div>
                      <div className="text-xs text-slate-600 dark:text-slate-300 mt-1">
                        {recommendedCourse.subtitle}
                      </div>
                    </div>

                    <div className="sm:text-right shrink-0">
                      <div className="text-xs text-slate-400 line-through">
                        ฿{recommendedCourse.originalPrice.toLocaleString()}
                      </div>
                      <div className="text-xl font-bold text-indigo-600 dark:text-indigo-400">
                        ฿{recommendedCourse.price.toLocaleString()}
                      </div>
                    </div>
                  </div>

                  {/* Special Coupon Callout */}
                  <div className="pt-3 border-t border-indigo-100 dark:border-indigo-900/40 flex flex-wrap items-center justify-between gap-3 text-xs">
                    <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300 font-medium">
                      <Tag className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                      <span>โค้ดส่วนลดพิเศษสำหรับคุณ:</span>
                      <code className="font-mono font-bold bg-white dark:bg-slate-800 px-2 py-0.5 rounded border border-indigo-300 dark:border-indigo-700 text-indigo-600 dark:text-indigo-400">
                        KRUTUTOR20
                      </code>
                      <span className="text-emerald-600 dark:text-emerald-400 font-semibold">(ลดเพิ่ม 20%)</span>
                    </div>

                    <div className="flex items-center gap-3">
                      <button
                        onClick={resetQuiz}
                        className="inline-flex items-center gap-1 text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 cursor-pointer"
                      >
                        <RotateCcw className="w-3.5 h-3.5" />
                        <span>ทำใหม่อีกครั้ง</span>
                      </button>

                      <button
                        onClick={() =>
                          onSelectCourseWithCoupon(recommendedCourse.id, 'KRUTUTOR20')
                        }
                        className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg transition-colors shadow-xs cursor-pointer"
                      >
                        <span>สมัครคอร์สนี้ทันที</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
