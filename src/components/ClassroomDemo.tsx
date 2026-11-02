import React, { useState, useEffect } from 'react';
import { Play, Pause, RotateCcw, Volume2, VolumeX, Maximize2, CheckCircle2, Copy, Check, Sparkles, BookOpen, Terminal } from 'lucide-react';

export const ClassroomDemo: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(145); // seconds
  const totalDuration = 540; // 9 minutes
  const [speed, setSpeed] = useState<number>(1);
  const [isMuted, setIsMuted] = useState(false);
  const [activeTab, setActiveTab] = useState<'notes' | 'code' | 'playground'>('notes');
  const [copied, setCopied] = useState(false);

  // Completed checklist items
  const [completedNotes, setCompletedNotes] = useState<Record<number, boolean>>({
    0: true,
  });

  // Playground state
  const [customText, setCustomText] = useState('สวัสดีครับ ยินดีต้อนรับสู่ห้องเรียน!');
  const [btnColor, setBtnColor] = useState('bg-indigo-600');
  const [paddingSize, setPaddingSize] = useState('px-6 py-3');

  // Video playback timer simulation
  useEffect(() => {
    let interval: any;
    if (isPlaying) {
      interval = setInterval(() => {
        setCurrentTime((prev) => {
          if (prev >= totalDuration) {
            setIsPlaying(false);
            return totalDuration;
          }
          return prev + 1;
        });
      }, 1000 / speed);
    }
    return () => clearInterval(interval);
  }, [isPlaying, speed]);

  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = Math.floor(secs % 60);
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  const sampleSnippet = `<!-- โครงสร้างการสอนตัวอย่าง: Semantic Card & Tailwind CSS -->
<div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden">
  <div class="p-6 space-y-3">
    <div class="text-xs font-semibold text-indigo-600">MODERN WEB DEV</div>
    <h2 class="text-xl font-bold text-slate-900">สร้างหน้าเว็บแรกใน 10 นาที</h2>
    <p class="text-sm text-slate-600">เรียนรู้การจัด Layout ด้วย Flexbox และ Responsive Design</p>
    <button class="w-full mt-4 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
      เริ่มต้นเรียนรู้
    </button>
  </div>
</div>`;

  const handleCopy = () => {
    navigator.clipboard.writeText(sampleSnippet);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const toggleCheck = (index: number) => {
    setCompletedNotes((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  const handleScrub = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const percentage = Math.max(0, Math.min(1, clickX / rect.width));
    setCurrentTime(Math.floor(percentage * totalDuration));
  };

  return (
    <section id="classroom-demo" className="py-16 lg:py-24 bg-slate-50 dark:bg-slate-900/50 border-y border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 mb-2">
            Interactive Classroom Experience
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white tracking-tight">
            ห้องเรียนจำลอง & ทบทวนบทเรียนล่วงหน้า
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
            ดูวิดีโอบทเรียนวิทยาการคำนวณและวิทยาศาสตร์ พร้อมระบบจดบันทึกสรุปย่อ และสนามทดลองโค้ดแบบโต้ตอบได้ในหน้าเดียว
          </p>
        </div>

        {/* Two-Zone Layout: Interactive Video Stage + Learning Deck */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Video Player Stage */}
          <div className="lg:col-span-7 bg-slate-900 rounded-2xl overflow-hidden shadow-xl border border-slate-800">
            {/* Screen Area */}
            <div className="relative aspect-video bg-slate-950 flex flex-col justify-between p-6 overflow-hidden">
              {/* Background preview backdrop */}
              <div className="absolute inset-0 opacity-40 mix-blend-luminosity">
                <img
                  src="/src/assets/images/course_web_dev_1793593750859.jpg"
                  alt="Lesson preview backdrop"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-slate-950/40" />

              {/* Top HUD */}
              <div className="relative z-10 flex items-center justify-between text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  <span className="font-medium text-white">บทเรียนฟรีตัวอย่าง: ปูพื้นฐาน Web Component & Tailwind CSS</span>
                </div>
                <span className="font-mono tabular-nums text-slate-400">1080p HD</span>
              </div>

              {/* Center Play Button Overlay */}
              <div className="relative z-10 flex flex-col items-center justify-center my-auto text-center">
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="w-16 h-16 rounded-full bg-indigo-600 hover:bg-indigo-500 active:scale-95 text-white flex items-center justify-center shadow-lg transition-transform cursor-pointer"
                  aria-label={isPlaying ? 'หยุดชั่วคราว' : 'เล่นวิดีโอ'}
                >
                  {isPlaying ? (
                    <Pause className="w-7 h-7" />
                  ) : (
                    <Play className="w-7 h-7 ml-1 fill-current" />
                  )}
                </button>
                <div className="mt-3 text-xs text-slate-300 font-medium">
                  {isPlaying ? 'กำลังเล่นบทเรียน (คลิกเพื่อหยุด)' : 'คลิกเพื่อทดลองฟังบทเรียน'}
                </div>
              </div>

              {/* Video Bottom Timeline & Controls */}
              <div className="relative z-10 space-y-2 pt-4">
                {/* Scrub Bar */}
                <div
                  onClick={handleScrub}
                  className="w-full h-1.5 bg-slate-700/80 hover:h-2 rounded-full cursor-pointer relative transition-all"
                >
                  <div
                    className="h-full bg-indigo-500 rounded-full relative"
                    style={{ width: `${(currentTime / totalDuration) * 100}%` }}
                  >
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full shadow" />
                  </div>
                </div>

                {/* Control bar */}
                <div className="flex items-center justify-between text-xs text-slate-300 pt-1">
                  <div className="flex items-center gap-4">
                    <button
                      onClick={() => setIsPlaying(!isPlaying)}
                      className="hover:text-white transition-colors cursor-pointer"
                    >
                      {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 fill-current" />}
                    </button>
                    <button
                      onClick={() => setCurrentTime(0)}
                      className="hover:text-white transition-colors cursor-pointer"
                      title="เริ่มใหม่"
                    >
                      <RotateCcw className="w-3.5 h-3.5" />
                    </button>
                    <span className="font-mono tabular-nums text-slate-400">
                      {formatTime(currentTime)} / {formatTime(totalDuration)}
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => setIsMuted(!isMuted)}
                      className="hover:text-white transition-colors cursor-pointer"
                    >
                      {isMuted ? <VolumeX className="w-4 h-4 text-red-400" /> : <Volume2 className="w-4 h-4" />}
                    </button>
                    <button
                      onClick={() => {
                        const speeds = [1, 1.25, 1.5, 2];
                        const nextIndex = (speeds.indexOf(speed) + 1) % speeds.length;
                        setSpeed(speeds[nextIndex]);
                      }}
                      className="font-mono px-2 py-0.5 rounded bg-slate-800 hover:bg-slate-700 text-xs text-slate-300 font-semibold cursor-pointer"
                    >
                      {speed}x
                    </button>
                    <button
                      onClick={() => alert('จำลองการขยายเต็มจอ (Fullscreen Mode)')}
                      className="hover:text-white transition-colors cursor-pointer"
                    >
                      <Maximize2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Chapter Markers */}
            <div className="bg-slate-900 border-t border-slate-800 p-4 grid grid-cols-3 gap-2 text-xs">
              <button
                onClick={() => {
                  setCurrentTime(0);
                  setIsPlaying(true);
                }}
                className={`p-2 rounded-lg text-left transition-colors ${
                  currentTime < 180 ? 'bg-slate-800 text-white font-medium' : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                <div className="text-[10px] text-indigo-400">00:00 - ตอนที่ 1</div>
                <div className="truncate">ความสำคัญของ Semantic HTML</div>
              </button>
              <button
                onClick={() => {
                  setCurrentTime(180);
                  setIsPlaying(true);
                }}
                className={`p-2 rounded-lg text-left transition-colors ${
                  currentTime >= 180 && currentTime < 360 ? 'bg-slate-800 text-white font-medium' : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                <div className="text-[10px] text-indigo-400">03:00 - ตอนที่ 2</div>
                <div className="truncate">เทคนิค Tailwind Spacing</div>
              </button>
              <button
                onClick={() => {
                  setCurrentTime(360);
                  setIsPlaying(true);
                }}
                className={`p-2 rounded-lg text-left transition-colors ${
                  currentTime >= 360 ? 'bg-slate-800 text-white font-medium' : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                <div className="text-[10px] text-indigo-400">06:00 - ตอนที่ 3</div>
                <div className="truncate">เวิร์กช็อปโค้ดโต้ตอบได้</div>
              </button>
            </div>
          </div>

          {/* Right: Interactive Learning Deck & Sandbox */}
          <div className="lg:col-span-5 bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm overflow-hidden flex flex-col h-full min-h-[460px]">
            {/* Deck Segmented Tab Controls */}
            <div className="flex items-center gap-1 p-2 bg-slate-100 dark:bg-slate-900/60 border-b border-slate-200 dark:border-slate-700">
              <button
                onClick={() => setActiveTab('notes')}
                className={`flex-1 flex items-center justify-center gap-1.5 py-2 px-3 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                  activeTab === 'notes'
                    ? 'bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-xs'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                <BookOpen className="w-3.5 h-3.5" />
                <span>สรุปสำคัญ</span>
              </button>
              <button
                onClick={() => setActiveTab('code')}
                className={`flex-1 flex items-center justify-center gap-1.5 py-2 px-3 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                  activeTab === 'code'
                    ? 'bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-xs'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                <Terminal className="w-3.5 h-3.5" />
                <span>โค้ดตัวอย่าง</span>
              </button>
              <button
                onClick={() => setActiveTab('playground')}
                className={`flex-1 flex items-center justify-center gap-1.5 py-2 px-3 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                  activeTab === 'playground'
                    ? 'bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-xs'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>ลองปรับ UI</span>
              </button>
            </div>

            {/* Deck Body Content */}
            <div className="p-6 flex-1 flex flex-col justify-between">
              {activeTab === 'notes' && (
                <div className="space-y-4">
                  <div>
                    <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                      บันทึกสรุปบทเรียน: หลักการสร้างเว็บที่ดี
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                      ติ๊กถูกเพื่อบันทึกความเข้าใจในแต่ละหัวข้อ
                    </p>
                  </div>

                  <div className="space-y-2.5">
                    {[
                      {
                        title: 'ใช้ Semantic HTML แทน div เสมอเมื่อเป็นไปได้',
                        desc: 'ช่วยให้ Search Engine และ Screen Reader เข้าใจโครงสร้างเว็บได้ถูกต้อง',
                      },
                      {
                        title: 'กฎสัดส่วนสี 60-30-10 เพื่อความสบายตา',
                        desc: '60% พื้นหลังหลัก, 30% การ์ดและตัวอักษร, 10% สีแอ็กชันที่ปุ่มกด',
                      },
                      {
                        title: 'Mobile-First Design ด้วย Breakpoints',
                        desc: 'ออกแบบสำหรับจอมือถือเป็นพื้นฐาน แล้วใช้ md: และ lg: ขยายผลสู่เดสก์ท็อป',
                      },
                      {
                        title: 'คำนวณ Spacing: Padding ภายนอกต้องมากกว่าภายใน',
                        desc: 'เว้นระยะรอบกรอบการ์ดให้โปร่งกว่าระยะห่างระหว่างหัวข้อและเนื้อหา',
                      },
                    ].map((item, idx) => (
                      <div
                        key={idx}
                        onClick={() => toggleCheck(idx)}
                        className={`p-3 rounded-xl border text-xs cursor-pointer transition-all ${
                          completedNotes[idx]
                            ? 'border-indigo-200 dark:border-indigo-900/60 bg-indigo-50/50 dark:bg-indigo-950/20'
                            : 'border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600'
                        }`}
                      >
                        <div className="flex items-start gap-2.5">
                          <CheckCircle2
                            className={`w-4 h-4 shrink-0 mt-0.5 ${
                              completedNotes[idx]
                                ? 'text-indigo-600 dark:text-indigo-400'
                                : 'text-slate-300 dark:text-slate-600'
                            }`}
                          />
                          <div>
                            <div
                              className={`font-semibold ${
                                completedNotes[idx]
                                  ? 'text-slate-900 dark:text-white line-through decoration-indigo-400/60'
                                  : 'text-slate-800 dark:text-slate-200'
                              }`}
                            >
                              {item.title}
                            </div>
                            <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
                              {item.desc}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'code' && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                        โค้ดโครงสร้างที่ใช้ในคลิป
                      </h3>
                      <p className="text-xs text-slate-500 dark:text-slate-400">
                        สามารถคัดลอกไปวางในไฟล์ HTML ของคุณได้ทันที
                      </p>
                    </div>
                    <button
                      onClick={handleCopy}
                      className="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-medium text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 rounded-md transition-colors cursor-pointer"
                    >
                      {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                      <span>{copied ? 'คัดลอกแล้ว!' : 'คัดลอก'}</span>
                    </button>
                  </div>

                  <div className="bg-slate-950 text-slate-200 p-3.5 rounded-xl font-mono text-[11px] leading-relaxed overflow-x-auto border border-slate-800">
                    <pre>
                      <code>{sampleSnippet}</code>
                    </pre>
                  </div>

                  <div className="text-xs text-slate-500 dark:text-slate-400">
                    💡 <span className="font-medium text-slate-700 dark:text-slate-300">ข้อแนะนำ:</span> ในคอร์สจริงมีไฟล์ starter code ให้ดาวน์โหลดผ่าน GitHub พร้อมคำอธิบายทุกฟังก์ชัน
                  </div>
                </div>
              )}

              {activeTab === 'playground' && (
                <div className="space-y-4">
                  <div>
                    <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                      Interactive UI Playground
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      ทดลองปรับแต่งตัวแปรแบบเรียลไทม์เพื่อเห็นผลการทำงานของ Tailwind CSS
                    </p>
                  </div>

                  <div className="space-y-3 text-xs">
                    <div>
                      <label className="block text-slate-700 dark:text-slate-300 font-medium mb-1">
                        ข้อความบนปุ่มหรือการ์ด:
                      </label>
                      <input
                        type="text"
                        value={customText}
                        onChange={(e) => setCustomText(e.target.value)}
                        className="w-full px-3 py-2 text-xs rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block text-slate-700 dark:text-slate-300 font-medium mb-1">
                          สีปุ่มแอ็กชัน:
                        </label>
                        <select
                          value={btnColor}
                          onChange={(e) => setBtnColor(e.target.value)}
                          className="w-full px-3 py-2 text-xs rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white focus:outline-none"
                        >
                          <option value="bg-indigo-600">Indigo (สีหลัก)</option>
                          <option value="bg-emerald-600">Emerald (สีเขียวสด)</option>
                          <option value="bg-rose-600">Rose (สีชมพูแดง)</option>
                          <option value="bg-slate-900">Slate (สีเข้มมินิมอล)</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-slate-700 dark:text-slate-300 font-medium mb-1">
                          ขนาด Padding:
                        </label>
                        <select
                          value={paddingSize}
                          onChange={(e) => setPaddingSize(e.target.value)}
                          className="w-full px-3 py-2 text-xs rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white focus:outline-none"
                        >
                          <option value="px-4 py-2">กะทัดรัด (px-4 py-2)</option>
                          <option value="px-6 py-3">มาตรฐาน (px-6 py-3)</option>
                          <option value="px-8 py-4">โดดเด่น (px-8 py-4)</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Live Render Stage */}
                  <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-100/70 dark:bg-slate-900/60 flex flex-col items-center justify-center text-center">
                    <div className="text-[10px] text-slate-500 mb-2 uppercase tracking-wider font-semibold">
                      ผลลัพธ์แบบเรียลไทม์ (Live Preview)
                    </div>
                    <button
                      className={`${btnColor} ${paddingSize} text-white font-medium rounded-xl shadow-sm transition-all hover:opacity-90 active:scale-95`}
                    >
                      {customText || 'คลิกที่นี่'}
                    </button>
                  </div>
                </div>
              )}

              {/* Bottom Support Callout */}
              <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-700 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
                <span>พร้อมเรียนรู้เนื้อหาเต็ม 42+ ชั่วโมงหรือยัง?</span>
                <a
                  href="#courses"
                  className="font-semibold text-indigo-600 dark:text-indigo-400 hover:underline"
                >
                  เลือกคอร์สเรียน →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
