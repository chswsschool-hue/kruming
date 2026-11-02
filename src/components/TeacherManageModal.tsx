import React, { useState } from 'react';
import { SlideItem, MediaItem, AssignmentItem, GradeLevel, SubjectCategory } from '../data/secondarySchool';
import { X, Presentation, Video, ClipboardList, Check, Plus } from 'lucide-react';

interface TeacherManageModalProps {
  isOpen: boolean;
  initialTab: 'slide' | 'media' | 'assignment';
  onClose: () => void;
  onAddSlide: (slide: SlideItem) => void;
  onAddMedia: (media: MediaItem) => void;
  onAddAssignment: (assignment: AssignmentItem) => void;
}

export const TeacherManageModal: React.FC<TeacherManageModalProps> = ({
  isOpen,
  initialTab,
  onClose,
  onAddSlide,
  onAddMedia,
  onAddAssignment,
}) => {
  const [activeTab, setActiveTab] = useState<'slide' | 'media' | 'assignment'>(initialTab);
  const [successNotice, setSuccessNotice] = useState(false);

  // Sync initial tab when opened
  React.useEffect(() => {
    setActiveTab(initialTab);
    setSuccessNotice(false);
  }, [initialTab, isOpen]);

  // Slide Form State
  const [slideTitle, setSlideTitle] = useState('');
  const [slideUnit, setSlideUnit] = useState('');
  const [slideGrade, setSlideGrade] = useState<GradeLevel>('m4');
  const [slideSubject, setSlideSubject] = useState<SubjectCategory>('science_tech');
  const [slideFormat, setSlideFormat] = useState<'Google Slides' | 'Canva' | 'PowerPoint' | 'PDF'>('Google Slides');
  const [slideCount, setSlideCount] = useState('32');
  const [slideUrl, setSlideUrl] = useState('');
  const [slideTeacher, setSlideTeacher] = useState('ครูอรณิชา วัฒนกุล');
  const [slideDesc, setSlideDesc] = useState('');
  const [slidePoint1, setSlidePoint1] = useState('');
  const [slidePoint2, setSlidePoint2] = useState('');

  // Media Form State
  const [mediaTitle, setMediaTitle] = useState('');
  const [mediaUnit, setMediaUnit] = useState('');
  const [mediaGrade, setMediaGrade] = useState<GradeLevel>('m4');
  const [mediaSubject, setMediaSubject] = useState<SubjectCategory>('science_tech');
  const [mediaType, setMediaType] = useState<'video' | 'worksheet' | 'simulation' | 'infographic'>('video');
  const [mediaDuration, setMediaDuration] = useState('15:00 นาที');
  const [mediaLink, setMediaLink] = useState('');
  const [mediaDesc, setMediaDesc] = useState('');

  // Assignment Form State
  const [assignTitle, setAssignTitle] = useState('');
  const [assignUnit, setAssignUnit] = useState('');
  const [assignGrade, setAssignGrade] = useState<GradeLevel>('m4');
  const [assignSubject, setAssignSubject] = useState<SubjectCategory>('science_tech');
  const [assignDueDate, setAssignDueDate] = useState('20 พ.ย. 2026 (23:59 น.)');
  const [assignPoints, setAssignPoints] = useState('10');
  const [assignInstructions, setAssignInstructions] = useState('');

  if (!isOpen) return null;

  const getGradeLabel = (g: GradeLevel) => {
    switch (g) {
      case 'm1': return 'มัธยมศึกษาปีที่ 1';
      case 'm2': return 'มัธยมศึกษาปีที่ 2';
      case 'm3': return 'มัธยมศึกษาปีที่ 3';
      case 'm4': return 'มัธยมศึกษาปีที่ 4';
      case 'm5': return 'มัธยมศึกษาปีที่ 5';
      case 'm6': return 'มัธยมศึกษาปีที่ 6';
      default: return 'ทุกระดับชั้น';
    }
  };

  const getSubjectLabel = (s: SubjectCategory) => {
    switch (s) {
      case 'science_tech': return 'วิทยาศาสตร์และเทคโนโลยี';
      case 'math': return 'คณิตศาสตร์';
      case 'english': return 'ภาษาอังกฤษ';
      case 'social_thai': return 'สังคมศึกษา & ภาษาไทย';
      default: return 'ทุกกลุ่มสาระ';
    }
  };

  const handleSlideSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!slideTitle || !slideUnit) return;

    const newSlide: SlideItem = {
      id: `slide-${Date.now()}`,
      title: slideTitle,
      unit: slideUnit,
      grade: slideGrade,
      gradeLabel: getGradeLabel(slideGrade),
      subject: slideSubject,
      subjectLabel: getSubjectLabel(slideSubject),
      slideCount: parseInt(slideCount) || 25,
      format: slideFormat,
      updatedDate: 'วันนี้',
      teacher: slideTeacher || 'ครูผู้สอน',
      description: slideDesc || 'สไลด์ประกอบการเรียนรู้และทบทวนบทเรียน',
      slideUrl: slideUrl || 'https://docs.google.com/presentation',
      previewSlides: [
        {
          pageNumber: 1,
          title: slideTitle,
          bullets: [
            slidePoint1 || 'แนวคิดสำคัญของหน่วยการเรียนรู้นี้',
            slidePoint2 || 'สาระสำคัญและโจทย์ฝึกทักษะประจำบท'
          ]
        }
      ]
    };

    onAddSlide(newSlide);
    setSuccessNotice(true);
    setTimeout(() => {
      onClose();
    }, 1200);
  };

  const handleMediaSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!mediaTitle) return;

    const typeLabels = {
      video: 'คลิปวิดีโอสอน',
      worksheet: 'ใบงานและสรุปสูตร',
      simulation: 'แบบจำลองเสมือนจริง (PhET)',
      infographic: 'อินโฟกราฟิกความรู้'
    };

    const newMedia: MediaItem = {
      id: `media-${Date.now()}`,
      title: mediaTitle,
      unit: mediaUnit || 'สื่อการสอนเสริมบทเรียน',
      grade: mediaGrade,
      gradeLabel: getGradeLabel(mediaGrade),
      subject: mediaSubject,
      subjectLabel: getSubjectLabel(mediaSubject),
      mediaType: mediaType,
      mediaTypeLabel: typeLabels[mediaType],
      durationOrPages: mediaDuration || 'สื่อการสอน',
      resourceLink: mediaLink || 'https://youtube.com',
      description: mediaDesc || 'สื่อการสอนเสริมความเข้าใจพร้อมแบบฝึกหัด',
      thumbnailGradient: 'from-indigo-600 to-sky-700'
    };

    onAddMedia(newMedia);
    setSuccessNotice(true);
    setTimeout(() => {
      onClose();
    }, 1200);
  };

  const handleAssignSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!assignTitle) return;

    const newAssign: AssignmentItem = {
      id: `assign-${Date.now()}`,
      title: assignTitle,
      unit: assignUnit || 'การบ้านประจำหน่วย',
      grade: assignGrade,
      gradeLabel: getGradeLabel(assignGrade),
      subject: assignSubject,
      subjectLabel: getSubjectLabel(assignSubject),
      dueDate: assignDueDate || 'ภายในสัปดาห์นี้',
      points: parseInt(assignPoints) || 10,
      instructions: assignInstructions || 'ให้นักเรียนทำแบบฝึกหัดแล้วส่งลิงก์ชิ้นงาน',
      submissionLinkType: 'google_drive',
      submittedCount: 0,
      totalStudents: 38
    };

    onAddAssignment(newAssign);
    setSuccessNotice(true);
    setTimeout(() => {
      onClose();
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/75 backdrop-blur-xs">
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl max-w-xl w-full p-6 sm:p-8 shadow-2xl relative space-y-6 max-h-[90vh] flex flex-col">
        {/* Modal Top Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-200 dark:border-slate-800">
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
              Teacher Control Center
            </div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">
              ระบบจัดการสำหรับครูผู้สอน
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-700 dark:hover:text-white rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Success Notice Banner */}
        {successNotice && (
          <div className="p-3 bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-200 dark:border-emerald-800 rounded-xl text-xs font-semibold text-emerald-700 dark:text-emerald-400 flex items-center gap-2">
            <Check className="w-4 h-4" />
            <span>บันทึกข้อมูลเรียบร้อยแล้ว! กำลังอัปเดตหน้าห้องเรียน...</span>
          </div>
        )}

        {/* Action Tabs */}
        <div className="flex items-center gap-1 p-1 bg-slate-100 dark:bg-slate-800 rounded-xl">
          <button
            onClick={() => setActiveTab('slide')}
            className={`flex-1 py-2 text-xs font-semibold rounded-lg transition-colors flex items-center justify-center gap-1.5 ${
              activeTab === 'slide'
                ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-xs'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
            }`}
          >
            <Presentation className="w-3.5 h-3.5" />
            <span>เพิ่มสไลด์</span>
          </button>

          <button
            onClick={() => setActiveTab('media')}
            className={`flex-1 py-2 text-xs font-semibold rounded-lg transition-colors flex items-center justify-center gap-1.5 ${
              activeTab === 'media'
                ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-xs'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
            }`}
          >
            <Video className="w-3.5 h-3.5" />
            <span>แปะสื่อการสอน</span>
          </button>

          <button
            onClick={() => setActiveTab('assignment')}
            className={`flex-1 py-2 text-xs font-semibold rounded-lg transition-colors flex items-center justify-center gap-1.5 ${
              activeTab === 'assignment'
                ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-xs'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
            }`}
          >
            <ClipboardList className="w-3.5 h-3.5" />
            <span>สั่งการบ้านใหม่</span>
          </button>
        </div>

        {/* Scrollable Form Area */}
        <div className="flex-1 overflow-y-auto pr-1">
          {/* 1. Add Slide Form */}
          {activeTab === 'slide' && (
            <form onSubmit={handleSlideSubmit} className="space-y-4 text-xs">
              <div>
                <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  ชื่อสไลด์การสอน *
                </label>
                <input
                  type="text"
                  required
                  placeholder="เช่น การสังเคราะห์ด้วยแสงและการลำเลียงสารในพืช"
                  value={slideTitle}
                  onChange={(e) => setSlideTitle(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    ระดับชั้น (Grade) *
                  </label>
                  <select
                    value={slideGrade}
                    onChange={(e) => setSlideGrade(e.target.value as GradeLevel)}
                    className="w-full px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none"
                  >
                    <option value="m1">มัธยมศึกษาปีที่ 1 (ม.1)</option>
                    <option value="m2">มัธยมศึกษาปีที่ 2 (ม.2)</option>
                    <option value="m3">มัธยมศึกษาปีที่ 3 (ม.3)</option>
                    <option value="m4">มัธยมศึกษาปีที่ 4 (ม.4)</option>
                    <option value="m5">มัธยมศึกษาปีที่ 5 (ม.5)</option>
                    <option value="m6">มัธยมศึกษาปีที่ 6 (ม.6)</option>
                  </select>
                </div>

                <div>
                  <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    กลุ่มสาระการเรียนรู้ *
                  </label>
                  <select
                    value={slideSubject}
                    onChange={(e) => setSlideSubject(e.target.value as SubjectCategory)}
                    className="w-full px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none"
                  >
                    <option value="science_tech">วิทยาศาสตร์และเทคโนโลยี</option>
                    <option value="math">คณิตศาสตร์</option>
                    <option value="english">ภาษาอังกฤษ</option>
                    <option value="social_thai">สังคมศึกษา & ภาษาไทย</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    หน่วยการเรียนรู้ / บทที่
                  </label>
                  <input
                    type="text"
                    placeholder="เช่น หน่วยที่ 3 ชีววิทยา"
                    value={slideUnit}
                    onChange={(e) => setSlideUnit(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    รูปแบบไฟล์สไลด์
                  </label>
                  <select
                    value={slideFormat}
                    onChange={(e) => setSlideFormat(e.target.value as any)}
                    className="w-full px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none"
                  >
                    <option value="Google Slides">Google Slides</option>
                    <option value="Canva">Canva Presentation</option>
                    <option value="PowerPoint">PowerPoint (.pptx)</option>
                    <option value="PDF">เอกสาร PDF</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  ลิงก์ไฟล์สไลด์ต้นฉบับ (Google Drive / Canva / OneDrive URL)
                </label>
                <input
                  type="url"
                  placeholder="https://docs.google.com/presentation/d/..."
                  value={slideUrl}
                  onChange={(e) => setSlideUrl(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    จำนวนหน้าสไลด์
                  </label>
                  <input
                    type="number"
                    value={slideCount}
                    onChange={(e) => setSlideCount(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    ครูผู้สอน
                  </label>
                  <input
                    type="text"
                    value={slideTeacher}
                    onChange={(e) => setSlideTeacher(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  จุดเน้นการสอน / ไฮไลท์สำคัญในสไลด์
                </label>
                <input
                  type="text"
                  placeholder="หัวข้อย่อย 1 เช่น การวิเคราะห์ตัวแปรและการสร้างฟังก์ชัน"
                  value={slidePoint1}
                  onChange={(e) => setSlidePoint1(e.target.value)}
                  className="w-full px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white mb-2"
                />
                <input
                  type="text"
                  placeholder="หัวข้อย่อย 2 เช่น โจทย์ทดสอบความเข้าใจ 5 ข้อ"
                  value={slidePoint2}
                  onChange={(e) => setSlidePoint2(e.target.value)}
                  className="w-full px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
                />
              </div>

              <button
                type="submit"
                className="w-full py-2.5 px-4 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-700 rounded-xl transition-colors shadow-xs"
              >
                บันทึกและเผยแพร่สไลด์
              </button>
            </form>
          )}

          {/* 2. Add Media Form */}
          {activeTab === 'media' && (
            <form onSubmit={handleMediaSubmit} className="space-y-4 text-xs">
              <div>
                <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  ชื่อสื่อการสอนหรือใบงาน *
                </label>
                <input
                  type="text"
                  required
                  placeholder="เช่น คลิปวิดีโอปฏิบัติการทดลองเคมีเรื่องกรด-เบส"
                  value={mediaTitle}
                  onChange={(e) => setMediaTitle(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    ประเภทสื่อ
                  </label>
                  <select
                    value={mediaType}
                    onChange={(e) => setMediaType(e.target.value as any)}
                    className="w-full px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none"
                  >
                    <option value="video">คลิปวิดีโอการสอน (YouTube/Drive)</option>
                    <option value="worksheet">ใบงานและสรุปสูตร (PDF/Docx)</option>
                    <option value="simulation">แบบจำลองทดลองเสมือนจริง (PhET)</option>
                    <option value="infographic">อินโฟกราฟิกความรู้</option>
                  </select>
                </div>

                <div>
                  <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    ระดับชั้น
                  </label>
                  <select
                    value={mediaGrade}
                    onChange={(e) => setMediaGrade(e.target.value as GradeLevel)}
                    className="w-full px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none"
                  >
                    <option value="m1">ม.1</option>
                    <option value="m2">ม.2</option>
                    <option value="m3">ม.3</option>
                    <option value="m4">ม.4</option>
                    <option value="m5">ม.5</option>
                    <option value="m6">ม.6</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  ลิงก์สื่อการสอน (URL)
                </label>
                <input
                  type="url"
                  placeholder="https://www.youtube.com/watch?v=... หรือลิงก์ Google Drive"
                  value={mediaLink}
                  onChange={(e) => setMediaLink(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    กลุ่มสาระ
                  </label>
                  <select
                    value={mediaSubject}
                    onChange={(e) => setMediaSubject(e.target.value as SubjectCategory)}
                    className="w-full px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none"
                  >
                    <option value="science_tech">วิทยาศาสตร์และเทคโนโลยี</option>
                    <option value="math">คณิตศาสตร์</option>
                    <option value="english">ภาษาอังกฤษ</option>
                    <option value="social_thai">สังคมศึกษา & ภาษาไทย</option>
                  </select>
                </div>

                <div>
                  <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    ความยาว / จำนวนหน้า
                  </label>
                  <input
                    type="text"
                    placeholder="เช่น 15 นาที หรือ 4 หน้า PDF"
                    value={mediaDuration}
                    onChange={(e) => setMediaDuration(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  คำอธิบายสื่อ
                </label>
                <textarea
                  rows={2}
                  placeholder="อธิบายสรุปเนื้อหาที่นักเรียนจะได้รับจากสื่อนี้..."
                  value={mediaDesc}
                  onChange={(e) => setMediaDesc(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-2.5 px-4 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-700 rounded-xl transition-colors shadow-xs"
              >
                บันทึกและแปะสื่อการสอน
              </button>
            </form>
          )}

          {/* 3. Add Assignment Form */}
          {activeTab === 'assignment' && (
            <form onSubmit={handleAssignSubmit} className="space-y-4 text-xs">
              <div>
                <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  หัวข้อการบ้าน / ชิ้นงาน *
                </label>
                <input
                  type="text"
                  required
                  placeholder="เช่น ใบงานที่ 3: ออกแบบโปรแกรมคำนวณภาษีอย่างง่าย"
                  value={assignTitle}
                  onChange={(e) => setAssignTitle(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    ระดับชั้นที่มอบหมาย
                  </label>
                  <select
                    value={assignGrade}
                    onChange={(e) => setAssignGrade(e.target.value as GradeLevel)}
                    className="w-full px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none"
                  >
                    <option value="m1">ม.1</option>
                    <option value="m2">ม.2</option>
                    <option value="m3">ม.3</option>
                    <option value="m4">ม.4</option>
                    <option value="m5">ม.5</option>
                    <option value="m6">ม.6</option>
                  </select>
                </div>

                <div>
                  <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    กลุ่มสาระ
                  </label>
                  <select
                    value={assignSubject}
                    onChange={(e) => setAssignSubject(e.target.value as SubjectCategory)}
                    className="w-full px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none"
                  >
                    <option value="science_tech">วิทยาศาสตร์และเทคโนโลยี</option>
                    <option value="math">คณิตศาสตร์</option>
                    <option value="english">ภาษาอังกฤษ</option>
                    <option value="social_thai">สังคมศึกษา & ภาษาไทย</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    กำหนดส่ง (Due Date)
                  </label>
                  <input
                    type="text"
                    placeholder="เช่น 20 พ.ย. 2026 (23:59 น.)"
                    value={assignDueDate}
                    onChange={(e) => setAssignDueDate(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    คะแนนเต็ม (Points)
                  </label>
                  <input
                    type="number"
                    value={assignPoints}
                    onChange={(e) => setAssignPoints(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  คำสั่ง / เกณฑ์การให้คะแนน
                </label>
                <textarea
                  rows={3}
                  placeholder="ระบุข้อกำหนดในการส่งงาน เช่น ให้นักเรียนแนบไฟล์ลิงก์ Google Drive ที่เปิดสิทธิ์แชร์..."
                  value={assignInstructions}
                  onChange={(e) => setAssignInstructions(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-2.5 px-4 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-700 rounded-xl transition-colors shadow-xs"
              >
                บันทึกและเปิดรับส่งงาน
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
