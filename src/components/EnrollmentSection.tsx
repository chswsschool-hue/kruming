import React, { useState } from 'react';
import { COURSES } from '../data/courses';
import { CheckCircle, CreditCard, QrCode, Building, ShieldCheck, Tag, ArrowRight, Sparkles } from 'lucide-react';

interface EnrollmentSectionProps {
  selectedCourseId: string;
  initialCoupon: string;
}

export const EnrollmentSection: React.FC<EnrollmentSectionProps> = ({
  selectedCourseId,
  initialCoupon,
}) => {
  const [courseId, setCourseId] = useState(selectedCourseId || 'web-dev-mastery');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [couponCode, setCouponCode] = useState(initialCoupon || '');
  const [appliedDiscountRate, setAppliedDiscountRate] = useState<number>(initialCoupon ? 0.2 : 0);
  const [couponMessage, setCouponMessage] = useState<string>(initialCoupon ? 'ใช้โค้ดลด 20% สำเร็จ!' : '');
  const [paymentMethod, setPaymentMethod] = useState<'promptpay' | 'credit' | 'bank'>('promptpay');
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Sync when prop changes
  React.useEffect(() => {
    if (selectedCourseId) {
      setCourseId(selectedCourseId);
    }
  }, [selectedCourseId]);

  React.useEffect(() => {
    if (initialCoupon) {
      setCouponCode(initialCoupon);
      setAppliedDiscountRate(0.2);
      setCouponMessage('ใช้โค้ดลด 20% สำเร็จ!');
    }
  }, [initialCoupon]);

  const activeCourse = COURSES.find((c) => c.id === courseId) || COURSES[0];
  const discountAmount = Math.round(activeCourse.price * appliedDiscountRate);
  const finalPrice = activeCourse.price - discountAmount;

  const handleApplyCoupon = (e: React.FormEvent) => {
    e.preventDefault();
    const clean = couponCode.trim().toUpperCase();
    if (clean === 'KRUTUTOR20' || clean === 'EARLYBIRD') {
      setAppliedDiscountRate(0.2);
      setCouponMessage('ยินดีด้วย! ได้รับส่วนลดพิเศษ 20%');
    } else if (clean === 'VIP500') {
      setAppliedDiscountRate(0.15);
      setCouponMessage('ยินดีด้วย! ได้รับส่วนลด 15%');
    } else {
      setAppliedDiscountRate(0);
      setCouponMessage('ขออภัย โค้ดส่วนลดนี้ไม่ถูกต้องหรือหมดอายุแล้ว');
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !email || !phone) {
      alert('กรุณากรอกข้อมูลชื่อ อีเมล และเบอร์โทรศัพท์ให้ครบถ้วน');
      return;
    }
    setIsSubmitted(true);
  };

  return (
    <section id="enroll" className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 mb-2">
            Online Enrollment & Registration
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white tracking-tight">
            ลงทะเบียนเรียนออนไลน์ทันที
          </h2>
          <p className="mt-2 text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            เริ่มต้นเรียนได้ทันทีหลังชำระเงิน ระบบจะส่งข้อมูลบัญชีและลิงก์เข้าเรียนไปยังอีเมลของคุณโดยอัตโนมัติ
          </p>
        </div>

        {!isSubmitted ? (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left: Input Form */}
            <form
              onSubmit={handleSubmit}
              className="lg:col-span-7 bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 p-6 sm:p-8 shadow-xs space-y-6"
            >
              {/* 1. Course Selection */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-2">
                  1. เลือกหลักสูตรที่ต้องการสมัคร
                </label>
                <div className="space-y-2">
                  {COURSES.map((c) => (
                    <label
                      key={c.id}
                      className={`flex items-center justify-between p-3.5 rounded-xl border cursor-pointer transition-all ${
                        courseId === c.id
                          ? 'border-indigo-600 bg-indigo-50/40 dark:bg-indigo-950/20'
                          : 'border-slate-200 dark:border-slate-700 hover:border-slate-300'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <input
                          type="radio"
                          name="courseChoice"
                          value={c.id}
                          checked={courseId === c.id}
                          onChange={() => setCourseId(c.id)}
                          className="w-4 h-4 text-indigo-600 focus:ring-indigo-500"
                        />
                        <div>
                          <div className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white">
                            {c.title}
                          </div>
                          <div className="text-[11px] text-slate-500 dark:text-slate-400">
                            {c.level} · {c.durationHours} ชม. ({c.totalLessons} บทเรียน)
                          </div>
                        </div>
                      </div>
                      <div className="text-right shrink-0">
                        <div className="text-xs sm:text-sm font-bold text-indigo-600 dark:text-indigo-400 tabular-nums">
                          ฿{c.price.toLocaleString()}
                        </div>
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              {/* 2. Personal Information */}
              <div className="space-y-4 pt-2">
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                  2. ข้อมูลผู้สมัครเรียน
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="sm:col-span-2">
                    <label className="block text-xs text-slate-600 dark:text-slate-400 mb-1">
                      ชื่อ-นามสกุล (สำหรับออกใบประกาศนียบัตร) *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="เช่น ณัฐวุฒิ สดใส"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs text-slate-600 dark:text-slate-400 mb-1">
                      อีเมล (สำหรับรับรหัสผ่านและห้องเรียน) *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="name@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs text-slate-600 dark:text-slate-400 mb-1">
                      เบอร์โทรศัพท์ติดต่อ *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="08X-XXX-XXXX"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                  </div>
                </div>
              </div>

              {/* 3. Payment Method */}
              <div className="space-y-3 pt-2">
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                  3. ช่องทางการชำระเงิน
                </label>
                <div className="grid grid-cols-3 gap-3">
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('promptpay')}
                    className={`p-3 rounded-xl border text-center transition-all cursor-pointer ${
                      paymentMethod === 'promptpay'
                        ? 'border-indigo-600 bg-indigo-50/50 dark:bg-indigo-950/30 text-indigo-700 dark:text-indigo-400 font-bold'
                        : 'border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400'
                    }`}
                  >
                    <QrCode className="w-5 h-5 mx-auto mb-1" />
                    <div className="text-[11px]">PromptPay QR</div>
                  </button>

                  <button
                    type="button"
                    onClick={() => setPaymentMethod('credit')}
                    className={`p-3 rounded-xl border text-center transition-all cursor-pointer ${
                      paymentMethod === 'credit'
                        ? 'border-indigo-600 bg-indigo-50/50 dark:bg-indigo-950/30 text-indigo-700 dark:text-indigo-400 font-bold'
                        : 'border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400'
                    }`}
                  >
                    <CreditCard className="w-5 h-5 mx-auto mb-1" />
                    <div className="text-[11px]">บัตรเครดิต 0%</div>
                  </button>

                  <button
                    type="button"
                    onClick={() => setPaymentMethod('bank')}
                    className={`p-3 rounded-xl border text-center transition-all cursor-pointer ${
                      paymentMethod === 'bank'
                        ? 'border-indigo-600 bg-indigo-50/50 dark:bg-indigo-950/30 text-indigo-700 dark:text-indigo-400 font-bold'
                        : 'border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400'
                    }`}
                  >
                    <Building className="w-5 h-5 mx-auto mb-1" />
                    <div className="text-[11px]">โอนผ่านธนาคาร</div>
                  </button>
                </div>
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                className="w-full py-3.5 px-6 rounded-xl font-semibold text-white bg-indigo-600 hover:bg-indigo-700 active:scale-[0.99] transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>ยืนยันการสมัครเรียน (฿{finalPrice.toLocaleString()})</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="flex items-center justify-center gap-2 text-xs text-slate-400">
                <ShieldCheck className="w-4 h-4 text-emerald-500" />
                <span>การันตีความปลอดภัยและรับประกันความพึงพอใจ 7 วันเต็ม</span>
              </div>
            </form>

            {/* Right: Order Summary & Coupon Deck */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 p-6 shadow-xs space-y-4">
                <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                  สรุปรายการสั่งซื้อ
                </h3>

                <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-100 dark:border-slate-700/60 space-y-1">
                  <div className="text-xs font-bold text-slate-900 dark:text-white">
                    {activeCourse.title}
                  </div>
                  <div className="text-[11px] text-slate-500 dark:text-slate-400">
                    เข้าเรียนได้ตลอดชีพ พร้อมสิทธิ์ดาวน์โหลดไฟล์และเอกสาร
                  </div>
                </div>

                {/* Coupon Code Input */}
                <div className="pt-2">
                  <label className="block text-xs font-medium text-slate-600 dark:text-slate-400 mb-1">
                    โค้ดส่วนลด (Coupon Code):
                  </label>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      placeholder="ใส่โค้ด เช่น KRUTUTOR20"
                      value={couponCode}
                      onChange={(e) => setCouponCode(e.target.value)}
                      className="flex-1 px-3 py-2 text-xs rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:outline-none uppercase"
                    />
                    <button
                      type="button"
                      onClick={handleApplyCoupon}
                      className="px-3.5 py-2 text-xs font-semibold text-white bg-slate-800 dark:bg-slate-700 hover:bg-slate-900 rounded-lg transition-colors cursor-pointer"
                    >
                      ใช้โค้ด
                    </button>
                  </div>
                  {couponMessage && (
                    <div
                      className={`text-[11px] mt-1.5 font-medium ${
                        appliedDiscountRate > 0
                          ? 'text-emerald-600 dark:text-emerald-400'
                          : 'text-rose-500'
                      }`}
                    >
                      {couponMessage}
                    </div>
                  )}
                </div>

                {/* Calculation breakdown */}
                <div className="pt-4 border-t border-slate-100 dark:border-slate-700 space-y-2 text-xs">
                  <div className="flex justify-between text-slate-600 dark:text-slate-400">
                    <span>ราคาหลักสูตร</span>
                    <span className="tabular-nums">฿{activeCourse.price.toLocaleString()}</span>
                  </div>

                  {appliedDiscountRate > 0 && (
                    <div className="flex justify-between text-emerald-600 dark:text-emerald-400 font-medium">
                      <span>ส่วนลดโปรโมชัน</span>
                      <span className="tabular-nums">-฿{discountAmount.toLocaleString()}</span>
                    </div>
                  )}

                  <div className="flex justify-between text-slate-600 dark:text-slate-400">
                    <span>ภาษีมูลค่าเพิ่ม 7%</span>
                    <span className="text-emerald-600">รวมอยู่ในราคาแล้ว</span>
                  </div>

                  <div className="pt-3 border-t border-slate-200 dark:border-slate-700 flex justify-between items-baseline">
                    <span className="text-sm font-bold text-slate-900 dark:text-white">
                      ยอดชำระสุทธิ
                    </span>
                    <span className="text-2xl font-extrabold text-indigo-600 dark:text-indigo-400 tabular-nums">
                      ฿{finalPrice.toLocaleString()}
                    </span>
                  </div>
                </div>
              </div>

              {/* Installment note */}
              <div className="p-4 rounded-xl bg-slate-100 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 text-xs text-slate-600 dark:text-slate-400 space-y-1">
                <div className="font-semibold text-slate-800 dark:text-slate-200">
                  💳 ผ่อนชำระ 0% นาน 3 เดือน
                </div>
                <div>
                  เพียงเดือนละ ฿{Math.round(finalPrice / 3).toLocaleString()} บาท ผ่านบัตรเครดิตที่ร่วมรายการ
                </div>
              </div>
            </div>
          </div>
        ) : (
          /* Success Screen */
          <div className="max-w-2xl mx-auto bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 p-8 sm:p-12 text-center shadow-lg space-y-6">
            <div className="w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto">
              <CheckCircle className="w-8 h-8" />
            </div>

            <div className="space-y-2">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                การลงทะเบียนสำเร็จเรียบร้อยแล้ว!
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-300">
                ยินดีต้อนรับคุณ <span className="font-bold text-slate-900 dark:text-white">{fullName}</span> สู่หลักสูตร{' '}
                <span className="font-bold text-indigo-600 dark:text-indigo-400">{activeCourse.title}</span>
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-700 text-left text-xs space-y-2">
              <div className="flex justify-between">
                <span className="text-slate-500">อีเมลผู้เรียน:</span>
                <span className="font-mono text-slate-900 dark:text-white">{email}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">ยอดชำระ:</span>
                <span className="font-bold text-slate-900 dark:text-white tabular-nums">฿{finalPrice.toLocaleString()} บาท</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">ช่องทางชำระ:</span>
                <span className="text-slate-900 dark:text-white uppercase">{paymentMethod}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">สถานะ:</span>
                <span className="font-semibold text-emerald-600">พร้อมเข้าเรียนทันที</span>
              </div>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href="#classroom-demo"
                onClick={() => setIsSubmitted(false)}
                className="w-full sm:w-auto px-6 py-3 rounded-xl font-semibold text-white bg-indigo-600 hover:bg-indigo-700 transition-colors text-xs"
              >
                เข้าสู่ห้องเรียนออนไลน์ทันที
              </a>
              <button
                type="button"
                onClick={() => setIsSubmitted(false)}
                className="w-full sm:w-auto px-4 py-3 rounded-xl font-medium text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors text-xs"
              >
                สมัครหลักสูตรอื่นเพิ่มเติม
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
