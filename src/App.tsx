/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { SlidesSection } from './components/SlidesSection';
import { MediaSection } from './components/MediaSection';
import { AssignmentsSection } from './components/AssignmentsSection';
import { ClassroomDemo } from './components/ClassroomDemo';
import { InstructorSection } from './components/InstructorSection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { TeacherManageModal } from './components/TeacherManageModal';
import { StandaloneCodeModal } from './components/StandaloneCodeModal';
import {
  INITIAL_SLIDES,
  INITIAL_MEDIA,
  INITIAL_ASSIGNMENTS,
  SlideItem,
  MediaItem,
  AssignmentItem,
  SubmissionRecord,
} from './data/secondarySchool';

export default function App() {
  const [isDark, setIsDark] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      return (
        localStorage.getItem('theme') === 'dark' ||
        (!('theme' in localStorage) &&
          window.matchMedia('(prefers-color-scheme: dark)').matches)
      );
    }
    return false;
  });

  // Dynamic Secondary School Data
  const [slides, setSlides] = useState<SlideItem[]>(() => {
    const saved = localStorage.getItem('secondary_slides');
    return saved ? JSON.parse(saved) : INITIAL_SLIDES;
  });

  const [mediaList, setMediaList] = useState<MediaItem[]>(() => {
    const saved = localStorage.getItem('secondary_media');
    return saved ? JSON.parse(saved) : INITIAL_MEDIA;
  });

  const [assignments, setAssignments] = useState<AssignmentItem[]>(() => {
    const saved = localStorage.getItem('secondary_assignments');
    return saved ? JSON.parse(saved) : INITIAL_ASSIGNMENTS;
  });

  const [submissions, setSubmissions] = useState<SubmissionRecord[]>(() => {
    const saved = localStorage.getItem('secondary_submissions');
    return saved
      ? JSON.parse(saved)
      : [
          {
            id: 'sub-sample-1',
            assignmentId: 'assign-01',
            assignmentTitle: 'การบ้านที่ 1: เขียนโปรแกรมคำนวณดัชนีมวลกาย (BMI Calculator) ด้วย Python',
            studentName: 'ณภัทร วัฒนเดช',
            studentNo: '7',
            classroom: 'ม.4/1',
            submissionLink: 'https://colab.research.google.com/drive/sample',
            note: 'ส่งเรียบร้อยครับ ทดสอบรันครบทุกช่วงค่า',
            submittedAt: '1 พ.ย. 2026, 14:20 น.',
          },
          {
            id: 'sub-sample-2',
            assignmentId: 'assign-02',
            assignmentTitle: 'ใบงานที่ 2: วาดแผนผังมโนทัศน์ (Mind Map) ปฏิกิริยาการสังเคราะห์ด้วยแสง',
            studentName: 'พิมพ์มาดา สิทธิโชค',
            studentNo: '23',
            classroom: 'ม.5/1',
            submissionLink: 'https://canva.com/design/sample-mindmap',
            note: 'ใส่รูปประกอบ Thylakoid และ Calvin cycle เพิ่มเติมค่ะ',
            submittedAt: '31 ต.ค. 2026, 19:45 น.',
          },
        ];
  });

  // Modal States
  const [isTeacherModalOpen, setIsTeacherModalOpen] = useState(false);
  const [teacherModalTab, setTeacherModalTab] = useState<'slide' | 'media' | 'assignment'>('slide');
  const [isCodeModalOpen, setIsCodeModalOpen] = useState(false);

  // Sync dark theme
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  // Persist items
  useEffect(() => {
    localStorage.setItem('secondary_slides', JSON.stringify(slides));
  }, [slides]);

  useEffect(() => {
    localStorage.setItem('secondary_media', JSON.stringify(mediaList));
  }, [mediaList]);

  useEffect(() => {
    localStorage.setItem('secondary_assignments', JSON.stringify(assignments));
  }, [assignments]);

  useEffect(() => {
    localStorage.setItem('secondary_submissions', JSON.stringify(submissions));
  }, [submissions]);

  const toggleTheme = () => {
    setIsDark((prev) => !prev);
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenTeacherModal = (tab: 'slide' | 'media' | 'assignment' = 'slide') => {
    setTeacherModalTab(tab);
    setIsTeacherModalOpen(true);
  };

  // Handlers for Teacher Actions
  const handleAddSlide = (newSlide: SlideItem) => {
    setSlides((prev) => [newSlide, ...prev]);
  };

  const handleAddMedia = (newMedia: MediaItem) => {
    setMediaList((prev) => [newMedia, ...prev]);
  };

  const handleAddAssignment = (newAssignment: AssignmentItem) => {
    setAssignments((prev) => [newAssignment, ...prev]);
  };

  // Handler for Student Assignment Submission
  const handleSubmitAssignment = (
    record: Omit<SubmissionRecord, 'id' | 'submittedAt'>
  ) => {
    const newSubmission: SubmissionRecord = {
      ...record,
      id: `sub-${Date.now()}`,
      submittedAt: new Date().toLocaleString('th-TH', {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
      }),
    };

    setSubmissions((prev) => [newSubmission, ...prev]);

    // Update assignment counter
    setAssignments((prev) =>
      prev.map((a) =>
        a.id === record.assignmentId
          ? { ...a, submittedCount: a.submittedCount + 1 }
          : a
      )
    );
  };

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100 font-sans selection:bg-indigo-500 selection:text-white transition-colors duration-200">
      {/* 1. Top Bar Navigation */}
      <Navbar
        isDark={isDark}
        onToggleTheme={toggleTheme}
        onOpenCodeModal={() => setIsCodeModalOpen(true)}
        onOpenTeacherModal={() => handleOpenTeacherModal('slide')}
        onGoToAssignments={() => scrollToSection('assignments')}
      />

      {/* 2. Main Sections */}
      <main>
        {/* Hero Section */}
        <Hero
          onExploreSlides={() => scrollToSection('slides')}
          onGoToAssignments={() => scrollToSection('assignments')}
          onOpenTeacherModal={() => handleOpenTeacherModal('slide')}
        />

        {/* Teaching Slides Section (สไลด์การสอน ม.1 - ม.6) */}
        <SlidesSection
          slides={slides}
          onOpenAddModal={handleOpenTeacherModal}
        />

        {/* Teaching Media & Worksheets (สื่อการสอนและใบงาน) */}
        <MediaSection
          mediaList={mediaList}
          onOpenAddModal={handleOpenTeacherModal}
        />

        {/* Online Homework & Assignment Submission (ระบบสั่งงานและส่งการบ้าน) */}
        <AssignmentsSection
          assignments={assignments}
          submissions={submissions}
          onOpenAddModal={handleOpenTeacherModal}
          onSubmitAssignment={handleSubmitAssignment}
        />

        {/* Interactive Classroom Demo */}
        <ClassroomDemo />

        {/* Faculty & Teachers */}
        <InstructorSection />

        {/* FAQ Section */}
        <FaqSection />
      </main>

      {/* Footer */}
      <Footer onOpenCodeModal={() => setIsCodeModalOpen(true)} />

      {/* Teacher Control Modal (เพิ่มสไลด์ / แปะสื่อ / สั่งการบ้าน) */}
      <TeacherManageModal
        isOpen={isTeacherModalOpen}
        initialTab={teacherModalTab}
        onClose={() => setIsTeacherModalOpen(false)}
        onAddSlide={handleAddSlide}
        onAddMedia={handleAddMedia}
        onAddAssignment={handleAddAssignment}
      />

      {/* Standalone Code Viewer Modal */}
      <StandaloneCodeModal
        isOpen={isCodeModalOpen}
        onClose={() => setIsCodeModalOpen(false)}
      />
    </div>
  );
}
