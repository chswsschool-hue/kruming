import React, { useState } from 'react';
import { X, Copy, Check, Download, FileCode } from 'lucide-react';

interface StandaloneCodeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const StandaloneCodeModal: React.FC<StandaloneCodeModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const standaloneHtmlCode = `<!DOCTYPE html>
<html lang="th" class="scroll-smooth">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>ClassroomHub - ห้องเรียนออนไลน์ มัธยมศึกษา ม.1 - ม.6</title>
  <meta name="description" content="เว็บไซต์การสอนระดับมัธยมศึกษาตอนต้นและมัธยมศึกษาตอนปลาย ศูนย์รวมสไลด์การสอน สื่อการเรียนรู้ และระบบส่งงานการบ้านออนไลน์" />

  <!-- Google Fonts: Noto Sans Thai & Plus Jakarta Sans -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+Thai:wght@300;400;500;600;700&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet">

  <!-- Tailwind CSS via CDN -->
  <script src="https://cdn.tailwindcss.com"></script>
  <script>
    tailwind.config = {
      darkMode: 'class',
      theme: {
        extend: {
          fontFamily: {
            sans: ['"Plus Jakarta Sans"', '"Noto Sans Thai"', 'sans-serif'],
          }
        }
      }
    }
  </script>

  <!-- Lucide Icons via CDN -->
  <script src="https://unpkg.com/lucide@latest"></script>

  <style>
    body { font-family: 'Plus Jakarta Sans', 'Noto Sans Thai', sans-serif; letter-spacing: -0.01em; }
  </style>
</head>
<body class="bg-white text-slate-800 dark:bg-slate-900 dark:text-slate-100 transition-colors duration-200">

  <!-- TOP BAR / HEADER (Top Bar Contract: 3 zones separated by gap-8) -->
  <header class="sticky top-0 z-40 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between gap-8 h-16">
        <!-- Zone 1: Wordmark -->
        <a href="#" class="text-xl font-bold tracking-tight text-slate-900 dark:text-white flex items-center gap-2 whitespace-nowrap shrink-0">
          <span class="w-8 h-8 rounded-lg bg-indigo-600 text-white font-black flex items-center justify-center text-sm shadow-sm">CH</span>
          <span>ClassroomHub</span>
        </a>

        <!-- Zone 2: Navigation Links -->
        <nav class="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-600 dark:text-slate-300">
          <a href="#slides" class="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors whitespace-nowrap">สไลด์การสอน</a>
          <a href="#media" class="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors whitespace-nowrap">สื่อการสอน & ใบงาน</a>
          <a href="#assignments" class="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors whitespace-nowrap">ส่งการบ้านออนไลน์</a>
          <a href="#instructor" class="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors whitespace-nowrap">คณะครูผู้สอน</a>
        </nav>

        <!-- Zone 3: 1 Primary Action + Theme Toggle -->
        <div class="flex items-center gap-3 shrink-0">
          <button id="themeToggle" class="p-2 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
            <i data-lucide="moon" class="w-4 h-4 block dark:hidden"></i>
            <i data-lucide="sun" class="w-4 h-4 hidden dark:block"></i>
          </button>
          <a href="#assignments" class="px-4 py-2 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg shadow-sm whitespace-nowrap">
            ส่งการบ้านทันที
          </a>
        </div>
      </div>
    </div>
  </header>

  <!-- HERO SECTION -->
  <section class="py-12 lg:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="max-w-3xl space-y-6">
      <div class="inline-flex items-center gap-2 text-xs font-semibold text-indigo-700 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/40 px-3 py-1 rounded-md">
        <span>ห้องเรียนออนไลน์ มัธยมศึกษาตอนต้น - มัธยมศึกษาตอนปลาย</span>
        <span>·</span>
        <span>ม.1 - ม.6</span>
      </div>
      <h1 class="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
        ศูนย์การเรียนรู้ออนไลน์ คลังสไลด์ สื่อการสอน และระบบส่งการบ้าน
      </h1>
      <p class="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
        แหล่งรวมสไลด์บทเรียนเข้มข้น คลิปวิดีโอเสริมทักษะ ใบงานฝึกทำ และระบบส่งการบ้านออนไลน์ที่นักเรียนส่งงานได้ทุกที่ ตรวจสอบสถานะได้ทันที
      </p>
      <div class="flex flex-wrap items-center gap-4 pt-2">
        <a href="#slides" class="px-6 py-3.5 text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-700 rounded-xl shadow-md">
          ดูสไลด์และสื่อการสอน
        </a>
        <a href="#assignments" class="px-5 py-3.5 text-sm font-semibold text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 rounded-xl hover:bg-slate-200">
          ส่งการบ้านออนไลน์
        </a>
      </div>
    </div>
  </section>

  <!-- ASSIGNMENT SUBMISSION FORM SECTION -->
  <section id="assignments" class="py-16 max-w-4xl mx-auto px-4 sm:px-6">
    <div class="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 p-6 sm:p-8 shadow-sm space-y-6">
      <div class="border-b border-slate-100 dark:border-slate-700 pb-4">
        <h2 class="text-xl font-bold text-slate-900 dark:text-white">ส่งการบ้านออนไลน์ (Assignment Hand-in)</h2>
        <p class="text-xs text-slate-500 mt-1">แนบลิงก์ Google Drive, Canva, OneDrive หรือ GitHub</p>
      </div>

      <form id="submissionForm" class="space-y-4 text-xs">
        <div class="grid grid-cols-2 gap-3">
          <div>
            <label class="block font-medium mb-1">ชื่อ-นามสกุล นักเรียน *</label>
            <input type="text" id="stdName" required placeholder="เช่น สมชาย ใจดี" class="w-full px-3 py-2 rounded-lg border border-slate-200 dark:border-slate-700 dark:bg-slate-900" />
          </div>
          <div>
            <label class="block font-medium mb-1">เลขที่ (No.) *</label>
            <input type="number" id="stdNo" required placeholder="เช่น 15" class="w-full px-3 py-2 rounded-lg border border-slate-200 dark:border-slate-700 dark:bg-slate-900" />
          </div>
        </div>

        <div>
          <label class="block font-medium mb-1">ระดับชั้นและห้องเรียน *</label>
          <select id="stdRoom" class="w-full px-3 py-2 rounded-lg border border-slate-200 dark:border-slate-700 dark:bg-slate-900">
            <option value="ม.1/1">ม.1/1</option>
            <option value="ม.2/1">ม.2/1</option>
            <option value="ม.3/1">ม.3/1</option>
            <option value="ม.4/1">ม.4/1 (วิทย์-คณิต)</option>
            <option value="ม.5/1">ม.5/1 (วิทย์-คณิต)</option>
            <option value="ม.6/1">ม.6/1 (วิทย์-คณิต)</option>
          </select>
        </div>

        <div>
          <label class="block font-medium mb-1">ลิงก์ส่งงาน (Google Drive / Canva / ไฟล์) *</label>
          <input type="url" id="stdLink" required placeholder="https://drive.google.com/..." class="w-full px-3 py-2 rounded-lg border border-slate-200 dark:border-slate-700 dark:bg-slate-900" />
        </div>

        <button type="submit" class="w-full py-2.5 px-4 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-700 rounded-xl transition-colors">
          ยืนยันการส่งงาน
        </button>
      </form>

      <div id="submitAlert" class="hidden p-3 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-400 rounded-xl text-xs font-semibold">
        ✓ ระบบบันทึกการส่งงานของคุณเรียบร้อยแล้ว!
      </div>
    </div>
  </section>

  <!-- JAVASCRIPT LOGIC -->
  <script>
    // Theme Switcher
    const themeBtn = document.getElementById('themeToggle');
    themeBtn?.addEventListener('click', () => {
      document.documentElement.classList.toggle('dark');
    });

    // Form Submission
    const form = document.getElementById('submissionForm');
    const alertBox = document.getElementById('submitAlert');
    form?.addEventListener('submit', (e) => {
      e.preventDefault();
      alertBox?.classList.remove('hidden');
      form.reset();
    });

    // Initialize Lucide Icons
    lucide.createIcons();
  </script>
</body>
</html>`;

  const handleCopy = () => {
    navigator.clipboard.writeText(standaloneHtmlCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = () => {
    const blob = new Blob([standaloneHtmlCode], { type: 'text/html;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'index.html';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-xs">
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl max-w-4xl w-full max-h-[90vh] flex flex-col shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="p-5 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 flex items-center justify-center">
              <FileCode className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white">
                ซอร์สโค้ดไฟล์เดี่ยว Standalone HTML + Tailwind CSS (CDN) + JavaScript
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                พร้อมเปิดในเบราว์เซอร์ได้ทันทีโดยไม่ต้องติดตั้ง Node.js หรือ build tools ใดๆ
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-700 dark:hover:text-white rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Code Content View */}
        <div className="p-4 flex-1 overflow-y-auto bg-slate-950 text-slate-200 font-mono text-xs">
          <pre className="leading-relaxed whitespace-pre-wrap">
            <code>{standaloneHtmlCode}</code>
          </pre>
        </div>

        {/* Footer Actions */}
        <div className="p-4 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 flex flex-wrap items-center justify-between gap-3">
          <div className="text-xs text-slate-500 dark:text-slate-400">
            ✓ ใช้ Tailwind CSS CDN (v3 script tag) + Vanilla JavaScript + Lucide CDN
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handleCopy}
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors cursor-pointer"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
              <span>{copied ? 'คัดลอกเรียบร้อยแล้ว!' : 'คัดลอกโค้ดทั้งหมด'}</span>
            </button>

            <button
              onClick={handleDownload}
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 transition-colors cursor-pointer"
            >
              <Download className="w-4 h-4" />
              <span>ดาวน์โหลดไฟล์ index.html</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
