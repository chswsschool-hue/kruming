import React, { useState } from 'react';
import { MediaItem, GradeLevel, SubjectCategory, GRADE_TABS, SUBJECT_TABS } from '../data/secondarySchool';
import { Video, FileText, Cpu, Image as ImageIcon, PlusCircle, ExternalLink, Play } from 'lucide-react';

interface MediaSectionProps {
  mediaList: MediaItem[];
  onOpenAddModal: (tab: 'slide' | 'media' | 'assignment') => void;
}

export const MediaSection: React.FC<MediaSectionProps> = ({ mediaList, onOpenAddModal }) => {
  const [selectedGrade, setSelectedGrade] = useState<GradeLevel>('all');
  const [selectedSubject, setSelectedSubject] = useState<SubjectCategory>('all');
  const [activeMediaType, setActiveMediaType] = useState<'all' | 'video' | 'worksheet' | 'simulation' | 'infographic'>('all');

  const filteredMedia = mediaList.filter((m) => {
    const matchGrade = selectedGrade === 'all' || m.grade === selectedGrade || m.grade === 'all';
    const matchSubject = selectedSubject === 'all' || m.subject === selectedSubject || m.subject === 'all';
    const matchType = activeMediaType === 'all' || m.mediaType === activeMediaType;
    return matchGrade && matchSubject && matchType;
  });

  const getMediaIcon = (type: MediaItem['mediaType']) => {
    switch (type) {
      case 'video':
        return <Video className="w-4 h-4 text-rose-500" />;
      case 'worksheet':
        return <FileText className="w-4 h-4 text-emerald-500" />;
      case 'simulation':
        return <Cpu className="w-4 h-4 text-amber-500" />;
      case 'infographic':
        return <ImageIcon className="w-4 h-4 text-purple-500" />;
    }
  };

  return (
    <section id="media" className="py-16 lg:py-24 bg-slate-50 dark:bg-slate-900/40 border-y border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 mb-2">
              Teaching Media & Worksheets
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white tracking-tight">
              คลังสื่อการสอนและใบงานแบบฝึกหัด
            </h2>
            <p className="mt-2 text-slate-600 dark:text-slate-400 text-sm sm:text-base">
              คลิปวิดีโอเสริมความรู้ ใบงานพร้อมเฉลย แบบจำลองการทดลอง PhET และแผนภาพสรุปมโนทัศน์
            </p>
          </div>

          <button
            onClick={() => onOpenAddModal('media')}
            className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold text-white bg-slate-900 dark:bg-white dark:text-slate-900 hover:bg-slate-800 active:scale-[0.98] rounded-xl transition-all shadow-sm self-start md:self-auto cursor-pointer"
          >
            <PlusCircle className="w-4 h-4" />
            <span>แปะสื่อการสอนใหม่</span>
          </button>
        </div>

        {/* Media Type Filter Buttons */}
        <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-6">
          <button
            onClick={() => setActiveMediaType('all')}
            className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
              activeMediaType === 'all'
                ? 'bg-indigo-600 text-white shadow-xs'
                : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700'
            }`}
          >
            สื่อทั้งหมด ({mediaList.length})
          </button>
          <button
            onClick={() => setActiveMediaType('video')}
            className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
              activeMediaType === 'video'
                ? 'bg-indigo-600 text-white shadow-xs'
                : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700'
            }`}
          >
            คลิปวิดีโอสอน
          </button>
          <button
            onClick={() => setActiveMediaType('worksheet')}
            className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
              activeMediaType === 'worksheet'
                ? 'bg-indigo-600 text-white shadow-xs'
                : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700'
            }`}
          >
            ใบงานและสรุปสูตร
          </button>
          <button
            onClick={() => setActiveMediaType('simulation')}
            className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
              activeMediaType === 'simulation'
                ? 'bg-indigo-600 text-white shadow-xs'
                : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700'
            }`}
          >
            แบบจำลองเสมือนจริง (PhET)
          </button>
          <button
            onClick={() => setActiveMediaType('infographic')}
            className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
              activeMediaType === 'infographic'
                ? 'bg-indigo-600 text-white shadow-xs'
                : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700'
            }`}
          >
            อินโฟกราฟิก
          </button>
        </div>

        {/* Media Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredMedia.map((media) => (
            <div
              key={media.id}
              className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 p-6 flex flex-col justify-between shadow-xs hover:shadow-md transition-shadow"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs font-semibold text-slate-700 dark:text-slate-300">
                    {getMediaIcon(media.mediaType)}
                    <span>{media.mediaTypeLabel}</span>
                    <span aria-hidden="true" className="text-slate-300 dark:text-slate-600">·</span>
                    <span className="text-slate-500 dark:text-slate-400">{media.gradeLabel}</span>
                  </div>

                  <span className="text-xs font-mono text-slate-400">
                    {media.durationOrPages}
                  </span>
                </div>

                <h3 className="text-base font-bold text-slate-900 dark:text-white leading-snug">
                  {media.title}
                </h3>

                <div className="text-xs font-medium text-indigo-600 dark:text-indigo-400">
                  {media.unit}
                </div>

                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  {media.description}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-100 dark:border-slate-700 flex items-center justify-between">
                <span className="text-xs text-slate-500 dark:text-slate-400">
                  {media.subjectLabel}
                </span>

                <a
                  href={media.resourceLink}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg transition-colors cursor-pointer"
                >
                  <span>เปิดดูสื่อ / ดาวน์โหลด</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
