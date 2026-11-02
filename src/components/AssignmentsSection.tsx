import React, { useState } from 'react';
import { AssignmentItem, SubmissionRecord, GradeLevel, SubjectCategory, GRADE_TABS } from '../data/secondarySchool';
import { ClipboardList, PlusCircle, Clock, Award, Users, CheckCircle, Send, Link as LinkIcon, Check, X, FileCheck } from 'lucide-react';

interface AssignmentsSectionProps {
  assignments: AssignmentItem[];
  submissions: SubmissionRecord[];
  onOpenAddModal: (tab: 'slide' | 'media' | 'assignment') => void;
  onSubmitAssignment: (record: Omit<SubmissionRecord, 'id' | 'submittedAt'>) => void;
}

export const AssignmentsSection: React.FC<AssignmentsSectionProps> = ({
  assignments,
  submissions,
  onOpenAddModal,
  onSubmitAssignment,
}) => {
  const [selectedGrade, setSelectedGrade] = useState<GradeLevel>('all');
  const [activeSubmitAssignment, setActiveSubmitAssignment] = useState<AssignmentItem | null>(null);
  const [showSubmissionsLog, setShowSubmissionsLog] = useState(false);

  // Form states for submitting homework
  const [studentName, setStudentName] = useState('');
  const [studentNo, setStudentNo] = useState('');
  const [classroom, setClassroom] = useState('ม.4/1');
  const [submissionLink, setSubmissionLink] = useState('');
  const [note, setNote] = useState('');
  const [submittedSuccess, setSubmittedSuccess] = useState(false);

  const filteredAssignments = assignments.filter((a) => {
    return selectedGrade === 'all' || a.grade === selectedGrade || a.grade === 'all';
  });

  const handleOpenSubmit = (item: AssignmentItem) => {
    setActiveSubmitAssignment(item);
    setSubmittedSuccess(false);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!studentName || !studentNo || !submissionLink || !activeSubmitAssignment) {
      alert('กรุณากรอกชื่อ เลขที่ และลิงก์ส่งงานให้ครบถ้วน');
      return;
    }

    onSubmitAssignment({
      assignmentId: activeSubmitAssignment.id,
      assignmentTitle: activeSubmitAssignment.title,
      studentName,
      studentNo,
      classroom,
      submissionLink,
      note,
    });

    setSubmittedSuccess(true);
  };

  return (
    <section id="assignments" className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 mb-2">
              Online Homework & Assignment Submission
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white tracking-tight">
              ระบบสั่งงานและส่งการบ้านออนไลน์
            </h2>
            <p className="mt-2 text-slate-600 dark:text-slate-400 text-sm sm:text-base">
              ติดตามกำหนดส่งงาน เกณฑ์คะแนน และส่งลิงก์งาน (Google Drive / Canva / ไฟล์) ได้สะดวกรวดเร็ว
            </p>
          </div>

          <div className="flex items-center gap-2 self-start md:self-auto">
            <button
              onClick={() => setShowSubmissionsLog(true)}
              className="px-3.5 py-2.5 text-xs font-semibold text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-xl transition-colors cursor-pointer flex items-center gap-1.5"
            >
              <FileCheck className="w-4 h-4 text-emerald-600" />
              <span>ประวัติการส่ง ({submissions.length})</span>
            </button>

            <button
              onClick={() => onOpenAddModal('assignment')}
              className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-700 active:scale-[0.98] rounded-xl transition-all shadow-sm cursor-pointer"
            >
              <PlusCircle className="w-4 h-4" />
              <span>สั่งการบ้านใหม่</span>
            </button>
          </div>
        </div>

        {/* Grade Filter */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-4 mb-6">
          <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 mr-2 shrink-0">
            เลือกระดับชั้น:
          </span>
          {GRADE_TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setSelectedGrade(tab.id)}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
                selectedGrade === tab.id
                  ? 'bg-indigo-600 text-white shadow-xs'
                  : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Assignments Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredAssignments.map((task) => {
            const hasSubmitted = submissions.some(
              (s) => s.assignmentId === task.id
            );

            return (
              <div
                key={task.id}
                className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 p-6 flex flex-col justify-between shadow-xs hover:shadow-md transition-shadow"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400">
                      <span className="font-semibold text-indigo-600 dark:text-indigo-400">
                        {task.gradeLabel}
                      </span>
                      <span aria-hidden="true">·</span>
                      <span>{task.subjectLabel}</span>
                    </div>

                    <div className="flex items-center gap-1 text-amber-600 dark:text-amber-400 font-semibold tabular-nums">
                      <Award className="w-3.5 h-3.5" />
                      <span>{task.points} คะแนน</span>
                    </div>
                  </div>

                  <h3 className="text-base font-bold text-slate-900 dark:text-white leading-snug">
                    {task.title}
                  </h3>

                  <div className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                    {task.unit}
                  </div>

                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed bg-slate-50 dark:bg-slate-900/50 p-3 rounded-xl border border-slate-100 dark:border-slate-700/60">
                    <span className="font-semibold text-slate-700 dark:text-slate-200 block mb-0.5">
                      คำชี้แจง / คำสั่ง:
                    </span>
                    {task.instructions}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-100 dark:border-slate-700/60 space-y-3">
                  <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
                    <span className="flex items-center gap-1 text-rose-500 font-medium">
                      <Clock className="w-3.5 h-3.5" />
                      <span>กำหนดส่ง: {task.dueDate}</span>
                    </span>

                    <span className="flex items-center gap-1">
                      <Users className="w-3.5 h-3.5" />
                      <span>ส่งแล้ว {task.submittedCount} / {task.totalStudents} คน</span>
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => handleOpenSubmit(task)}
                      className="flex-1 py-2.5 px-4 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-700 rounded-xl transition-colors shadow-xs flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>ส่งงานชิ้นนี้ (Submit Work)</span>
                    </button>

                    {hasSubmitted && (
                      <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 flex items-center gap-1 shrink-0">
                        <CheckCircle className="w-4 h-4" />
                        <span>คุณส่งแล้ว</span>
                      </span>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Submit Work Modal */}
      {activeSubmitAssignment && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-xs">
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative space-y-5">
            <button
              onClick={() => setActiveSubmitAssignment(null)}
              className="absolute top-4 right-4 p-1.5 text-slate-400 hover:text-slate-700 dark:hover:text-white rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800"
            >
              <X className="w-5 h-5" />
            </button>

            {!submittedSuccess ? (
              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div>
                  <div className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 mb-1">
                    แบบฟอร์มส่งการบ้านออนไลน์
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white leading-snug">
                    {activeSubmitAssignment.title}
                  </h3>
                  <div className="text-xs text-slate-500 mt-1">
                    {activeSubmitAssignment.gradeLabel} · กำหนดส่ง: {activeSubmitAssignment.dueDate}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">
                      ชื่อ-นามสกุล นักเรียน *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="เช่น สมชาย ใจดี"
                      value={studentName}
                      onChange={(e) => setStudentName(e.target.value)}
                      className="w-full px-3 py-2 text-xs rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">
                      เลขที่ (No.) *
                    </label>
                    <input
                      type="number"
                      required
                      placeholder="เช่น 14"
                      value={studentNo}
                      onChange={(e) => setStudentNo(e.target.value)}
                      className="w-full px-3 py-2 text-xs rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">
                    ห้องเรียน (Classroom) *
                  </label>
                  <select
                    value={classroom}
                    onChange={(e) => setClassroom(e.target.value)}
                    className="w-full px-3 py-2 text-xs rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none"
                  >
                    <option value="ม.1/1">มัธยมศึกษาปีที่ 1/1</option>
                    <option value="ม.1/2">มัธยมศึกษาปีที่ 1/2</option>
                    <option value="ม.2/1">มัธยมศึกษาปีที่ 2/1</option>
                    <option value="ม.3/1">มัธยมศึกษาปีที่ 3/1</option>
                    <option value="ม.4/1">มัธยมศึกษาปีที่ 4/1 (วิทย์-คณิต)</option>
                    <option value="ม.4/2">มัธยมศึกษาปีที่ 4/2 (ศิลป์-คำนวณ)</option>
                    <option value="ม.5/1">มัธยมศึกษาปีที่ 5/1 (วิทย์-คณิต)</option>
                    <option value="ม.6/1">มัธยมศึกษาปีที่ 6/1</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">
                    ลิงก์ส่งงาน (Google Drive / Canva / OneDrive / GitHub) *
                  </label>
                  <div className="relative">
                    <LinkIcon className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="url"
                      required
                      placeholder="https://drive.google.com/... หรือ https://canva.com/..."
                      value={submissionLink}
                      onChange={(e) => setSubmissionLink(e.target.value)}
                      className="w-full pl-9 pr-3 py-2 text-xs rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                  </div>
                  <p className="text-[11px] text-slate-400 mt-1">
                    💡 โปรดตรวจสอบว่าได้ตั้งค่าสิทธิ์ลิงก์เป็น "Anyone with the link can view" เรียบร้อยแล้ว
                  </p>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">
                    ข้อความหรือบันทึกเพิ่มเติมถึงครูผู้สอน (ถ้ามี)
                  </label>
                  <textarea
                    rows={2}
                    placeholder="เช่น ส่งงานเรียบร้อยครับ มีข้อสงสัยข้อ 4..."
                    value={note}
                    onChange={(e) => setNote(e.target.value)}
                    className="w-full px-3 py-2 text-xs rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none"
                  />
                </div>

                <div className="pt-2 flex items-center justify-end gap-2">
                  <button
                    type="button"
                    onClick={() => setActiveSubmitAssignment(null)}
                    className="px-4 py-2 text-xs font-medium text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg"
                  >
                    ยกเลิก
                  </button>

                  <button
                    type="submit"
                    className="px-5 py-2 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-700 rounded-xl transition-colors shadow-xs"
                  >
                    ยืนยันการส่งงาน
                  </button>
                </div>
              </form>
            ) : (
              /* Success Confirmation */
              <div className="text-center py-4 space-y-4">
                <div className="w-14 h-14 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto">
                  <Check className="w-7 h-7" />
                </div>

                <div>
                  <h4 className="text-lg font-bold text-slate-900 dark:text-white">
                    ส่งการบ้านเรียบร้อยแล้ว!
                  </h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                    ระบบบันทึกเวลาการส่งและลิงก์งานของคุณไปยังฐานข้อมูลครูผู้สอนแล้ว
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-left text-xs space-y-1">
                  <div>
                    <span className="text-slate-500">นักเรียน: </span>
                    <span className="font-semibold text-slate-800 dark:text-slate-200">{studentName} (เลขที่ {studentNo}) ห้อง {classroom}</span>
                  </div>
                  <div>
                    <span className="text-slate-500">การบ้าน: </span>
                    <span className="font-semibold text-slate-800 dark:text-slate-200">{activeSubmitAssignment.title}</span>
                  </div>
                  <div className="truncate">
                    <span className="text-slate-500">ลิงก์งาน: </span>
                    <a href={submissionLink} target="_blank" rel="noreferrer" className="text-indigo-600 hover:underline">
                      {submissionLink}
                    </a>
                  </div>
                </div>

                <button
                  onClick={() => setActiveSubmitAssignment(null)}
                  className="w-full py-2.5 px-4 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-700 rounded-xl transition-colors"
                >
                  เสร็จสิ้นและปิดหน้าต่าง
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Submissions Log Modal */}
      {showSubmissionsLog && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-xs">
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl max-w-2xl w-full p-6 shadow-2xl space-y-4 max-h-[85vh] flex flex-col">
            <div className="flex items-center justify-between pb-3 border-b border-slate-200 dark:border-slate-800">
              <div className="flex items-center gap-2">
                <FileCheck className="w-5 h-5 text-indigo-600" />
                <h3 className="text-base font-bold text-slate-900 dark:text-white">
                  ประวัติการส่งงานล่าสุด ({submissions.length} รายการ)
                </h3>
              </div>
              <button
                onClick={() => setShowSubmissionsLog(false)}
                className="p-1.5 text-slate-400 hover:text-slate-700 dark:hover:text-white rounded-lg"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto space-y-2.5 pr-1">
              {submissions.length > 0 ? (
                submissions.map((item) => (
                  <div
                    key={item.id}
                    className="p-3.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-800/40 text-xs space-y-1.5"
                  >
                    <div className="flex items-center justify-between font-semibold text-slate-900 dark:text-white">
                      <span>{item.studentName} (เลขที่ {item.studentNo}) ห้อง {item.classroom}</span>
                      <span className="text-[11px] font-normal text-slate-400">{item.submittedAt}</span>
                    </div>
                    <div className="text-slate-600 dark:text-slate-300">
                      งาน: {item.assignmentTitle}
                    </div>
                    <div className="flex items-center justify-between pt-1">
                      <a
                        href={item.submissionLink}
                        target="_blank"
                        rel="noreferrer"
                        className="text-indigo-600 dark:text-indigo-400 hover:underline flex items-center gap-1 font-medium truncate max-w-sm"
                      >
                        <LinkIcon className="w-3 h-3" />
                        <span>เปิดตรวจลิงก์งาน</span>
                      </a>
                      <span className="text-[11px] font-semibold text-emerald-600 dark:text-emerald-400">
                        ✓ บันทึกสำเร็จ
                      </span>
                    </div>
                  </div>
                ))
              ) : (
                <div className="p-8 text-center text-slate-500 text-xs">
                  ยังไม่มีประวัติการส่งงานในระบบ
                </div>
              )}
            </div>

            <div className="pt-2 border-t border-slate-200 dark:border-slate-800 text-right">
              <button
                onClick={() => setShowSubmissionsLog(false)}
                className="px-4 py-2 text-xs font-semibold text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg"
              >
                ปิดหน้าต่าง
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
