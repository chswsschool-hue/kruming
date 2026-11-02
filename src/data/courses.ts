export interface Lesson {
  title: string;
  duration: string;
  freePreview: boolean;
}

export interface Module {
  title: string;
  duration: string;
  lessons: Lesson[];
}

export interface Course {
  id: string;
  title: string;
  subtitle: string;
  category: 'web' | 'ai' | 'design';
  level: string;
  durationHours: number;
  totalLessons: number;
  rating: number;
  reviewCount: number;
  price: number;
  originalPrice: number;
  image: string;
  description: string;
  highlights: string[];
  modules: Module[];
}

export const COURSES: Course[] = [
  {
    id: 'web-dev-mastery',
    title: 'Full-Stack Modern Web Developer 2026',
    subtitle: 'สร้างเว็บแอปพลิเคชันจากศูนย์สู่ระดับโปรด้วย HTML, CSS, JavaScript, React และ Node.js',
    category: 'web',
    level: 'เริ่มต้น - ระดับกลาง',
    durationHours: 42,
    totalLessons: 58,
    rating: 4.95,
    reviewCount: 3840,
    price: 2490,
    originalPrice: 4990,
    image: '/src/assets/images/course_web_dev_1793593750859.jpg',
    description: 'เรียนรู้การพัฒนาเว็บสมัยใหม่แบบเข้าใจลึกซึ้ง ไม่ใช่แค่จำโค้ด สอนโครงสร้าง HTML5 ที่ถูกต้อง การจัดเลย์เอาต์ด้วย Tailwind CSS สถาปัตยกรรม JavaScript ESNext และการต่อยอดสู่ React SPA พร้อมลงมือทำโปรเจกต์จริง 4 ชิ้นงาน',
    highlights: [
      'เข้าใจรากฐาน HTML5, Flexbox & CSS Grid อย่างแม่นยำ',
      'เขียน JavaScript สมัยใหม่ DOM Manipulation & Async/Await',
      'ออกแบบ UI ด้วย Tailwind CSS ให้ Responsive ทุกหน้าจอ',
      'โปรเจกต์จริง: E-commerce, Task App, Dashboard และ Portfolio'
    ],
    modules: [
      {
        title: 'โมดูล 1: รากฐาน HTML5 & การจัดโครงสร้างเว็บเชิงความหมาย (Semantic)',
        duration: '6 ชั่วโมง',
        lessons: [
          { title: 'โครงสร้างพื้นฐาน HTML5 & การตั้งค่าสภาพแวดล้อม', duration: '25 นาที', freePreview: true },
          { title: 'Semantic Tags: header, main, section, nav และ article', duration: '35 นาที', freePreview: true },
          { title: 'Forms & Input Validation แบบมืออาชีพ', duration: '40 นาที', freePreview: false },
          { title: 'SEO Basics & Open Graph Tags เพื่อการแชร์บนโซเชียล', duration: '30 นาที', freePreview: false }
        ]
      },
      {
        title: 'โมดูล 2: ออกแบบเว็บ Responsive สวยงามด้วย Tailwind CSS',
        duration: '10 ชั่วโมง',
        lessons: [
          { title: 'แนวคิด Utility-First & การติดตั้ง Tailwind', duration: '30 นาที', freePreview: true },
          { title: 'Responsive Design: sm, md, lg, xl เบื้องหลังระบบ Grid', duration: '45 นาที', freePreview: false },
          { title: 'Flexbox & CSS Grid Mastery ฉบับจับมือทำ', duration: '60 นาที', freePreview: false },
          { title: 'การทำ Dark Mode และ Micro-interactions', duration: '40 นาที', freePreview: false }
        ]
      },
      {
        title: 'โมดูล 3: JavaScript ESNext & การควบคุมพฤติกรรมหน้าเว็บ',
        duration: '14 ชั่วโมง',
        lessons: [
          { title: 'ตัวแปร, Data Types, Arrow Functions & Destructuring', duration: '45 นาที', freePreview: true },
          { title: 'DOM Events, Event Bubbling & Dynamic Rendering', duration: '55 นาที', freePreview: false },
          { title: 'ทำงานกับ Fetch API, Promises และ Async/Await', duration: '60 นาที', freePreview: false },
          { title: 'Local Storage & การจัดการสถานะฝั่ง Client', duration: '40 นาที', freePreview: false }
        ]
      },
      {
        title: 'โมดูล 4: เวิร์กช็อปโปรเจกต์จริง & Deploy สู่ Production',
        duration: '12 ชั่วโมง',
        lessons: [
          { title: 'พัฒนาโปรเจกต์ Single Page Teaching Platform', duration: '90 นาที', freePreview: false },
          { title: 'Deploy เว็บไซต์ขึ้น Cloud ฟรีด้วย Vercel & Netlify', duration: '35 นาที', freePreview: false },
          { title: 'การตรวจสอบ Lighthouse Performance & Accessibility', duration: '30 นาที', freePreview: false }
        ]
      }
    ]
  },
  {
    id: 'ai-data-essentials',
    title: 'AI & Data Intelligence for Modern Creators',
    subtitle: 'ประยุกต์ใช้โมเดล AI, การวิเคราะห์ข้อมูล และเครื่องมือสร้างระบบอัตโนมัติในงานจริง',
    category: 'ai',
    level: 'เริ่มต้น - ทุกระดับ',
    durationHours: 35,
    totalLessons: 46,
    rating: 4.92,
    reviewCount: 2910,
    price: 2790,
    originalPrice: 5200,
    image: '/src/assets/images/course_data_ai_1793593750819.jpg',
    description: 'ก้าวทันการปฏิวัติด้าน AI สู่ผู้ใช้ที่ฉลาดกว่า เรียนรู้การเขียน Prompt Engineering ขั้นสูง, การสร้าง Data Pipeline ขนาดย่อม, การดึง Insights จากข้อมูล และการเชื่อมต่อ AI APIs เข้ากับเว็บแอปพลิเคชันของคุณ',
    highlights: [
      'หลักการ Prompt Engineering ขั้นสูงและการสั่งงานโมเดลอย่างแม่นยำ',
      'การวิเคราะห์ข้อมูลและสร้าง Interactive Dashboard',
      'การเชื่อมต่อ Gemini API และ LLMs เข้ากับเว็บไซต์',
      'สร้างผู้ช่วยอัจฉริยะช่วยตอบคำถามและทำงานอัตโนมัติ'
    ],
    modules: [
      {
        title: 'โมดูล 1: ทำความเข้าใจโมเดล AI สมัยใหม่ & Prompt Engineering',
        duration: '8 ชั่วโมง',
        lessons: [
          { title: 'สถาปัตยกรรม LLM เบื้องต้น: สิ่งที่ทำได้และทำไม่ได้', duration: '30 นาที', freePreview: true },
          { title: 'เทคนิค Zero-shot, Few-shot และ Chain-of-Thought', duration: '45 นาที', freePreview: true },
          { title: 'Structured Output & JSON Generation สำหรับนักพัฒนา', duration: '50 นาที', freePreview: false }
        ]
      },
      {
        title: 'โมดูล 2: การจัดการและแสดงผลข้อมูล (Data Visualization)',
        duration: '12 ชั่วโมง',
        lessons: [
          { title: 'การแปลง Data ดิบให้อยู่ในรูปที่พร้อมใช้งาน', duration: '40 นาที', freePreview: false },
          { title: 'สร้างกราฟและ Dashboard ด้วย JavaScript Charts', duration: '60 นาที', freePreview: false },
          { title: 'Metric KPIs & การจัดระเบียบตารางข้อมูลเชิงสถิติ', duration: '45 นาที', freePreview: false }
        ]
      },
      {
        title: 'โมดูล 3: เวิร์กช็อปสร้างระบบอัจฉริยะ & Deploy ใช้งานจริง',
        duration: '15 ชั่วโมง',
        lessons: [
          { title: 'เชื่อมต่อ AI API เพื่อประมวลผลข้อความและข้อมูลอัตโนมัติ', duration: '75 นาที', freePreview: false },
          { title: 'การควบคุมความปลอดภัยและจัดการ API Key ใน Production', duration: '35 นาที', freePreview: false }
        ]
      }
    ]
  },
  {
    id: 'ui-ux-design-systems',
    title: 'UI/UX Design Systems & Product Craft',
    subtitle: 'ออกแบบอินเทอร์เฟซผู้ใช้ที่สวยงาม ใช้งานง่าย มีมาตรฐาน และตอบโจทย์ธุรกิจ',
    category: 'design',
    level: 'เริ่มต้น - ระดับกลาง',
    durationHours: 32,
    totalLessons: 40,
    rating: 4.88,
    reviewCount: 2150,
    price: 2190,
    originalPrice: 4200,
    image: '/src/assets/images/hero_modern_classroom_1793593749381.jpg',
    description: 'เรียนรู้หลักจิตวิทยาการออกแบบ UX, การวาง Typographic Hierarchy, การเลือกคู่สีตามกฎ 60-30-10, การสร้าง Design System บน Figma และการแปลงดีไซน์เป็นโค้ด Responsive HTML/Tailwind CSS ได้จริง',
    highlights: [
      'เข้าใจจิตวิทยาการมองเห็น และ User Journey Mapping',
      'ระบบสี 60-30-10 และหลักการจัดสัดส่วนช่องไฟ Spacing Math',
      'สร้าง Reusable Components ใน Figma ให้พร้อมส่งต่อ Developer',
      'ออกแบบหน้าจอ Mobile-First รองรับทุกขนาดอุปกรณ์'
    ],
    modules: [
      {
        title: 'โมดูล 1: กฎการออกแบบ UI ที่ดูเป็นมืออาชีพ & ปราศจากความรก',
        duration: '8 ชั่วโมง',
        lessons: [
          { title: 'Hierarchy ทางสายตา & การตัดสิ่งไม่จำเป็นออกจาก UI', duration: '35 นาที', freePreview: true },
          { title: 'คู่มือเลือกใช้ Font และการเว้นบรรทัดที่สบายตา', duration: '40 นาที', freePreview: true },
          { title: 'การคำนวณ Border Radius และ Inner vs Outer Spacing', duration: '30 นาที', freePreview: false }
        ]
      },
      {
        title: 'โมดูล 2: การสร้าง Design System ครบวงจร',
        duration: '12 ชั่วโมง',
        lessons: [
          { title: 'วาง Token สี, ตัวอักษร และขนาด Elevation', duration: '50 นาที', freePreview: false },
          { title: 'ออกแบบ Interactive States: Hover, Focus, Active, Disabled', duration: '45 นาที', freePreview: false },
          { title: 'การทำ Responsive Layout Grid สำหรับมือถือและแท็บเล็ต', duration: '55 นาที', freePreview: false }
        ]
      },
      {
        title: 'โมดูล 3: Hand-off จากดีไซน์สู่โค้ด HTML + Tailwind CSS',
        duration: '12 ชั่วโมง',
        lessons: [
          { title: 'แปลง Figma Frames สู่ Semantic HTML & Tailwind Classes', duration: '80 นาที', freePreview: false },
          { title: 'Accessibility (a11y) และเกณฑ์ผ่าน WCAG AA', duration: '40 นาที', freePreview: false }
        ]
      }
    ]
  }
];

export interface Testimonial {
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  highlight: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    name: 'กิตติศักดิ์ ชัยมงคล',
    role: 'Frontend Developer',
    company: 'Fintech Startup (กรุงเทพฯ)',
    content: 'ก่อนหน้านี้ผมศึกษาเองแบบงูๆ ปลาๆ ติดตรง JavaScript และการจัด Layout ตลอด พอได้มาเรียนกับครูอรณิชา ทุกอย่างเชื่อมโยงกันอย่างมีตรรกะ ครูอธิบายลึกซึ้งถึง "ทำไมต้องเขียนแบบนี้" ปัจจุบันได้งานแรกในสายเทคแล้วครับ',
    rating: 5,
    highlight: 'ย้ายสายงานสำเร็จ ได้งาน Frontend ภายใน 4 เดือน'
  },
  {
    name: 'พรทิพย์ สุริยวงศ์',
    role: 'Product Designer',
    company: 'Digital Agency',
    content: 'เป็นคอร์สสอนที่กระชับ ไม่เยิ่นเย้อ ทุกบทเรียนมีแบบฝึกหัดจริงให้ทำตาม การสอนเรื่อง Tailwind CSS และการแปลงดีไซน์เป็นโค้ดช่วยให้การทำงานร่วมกับทีม Developer ราบรื่นขึ้นอย่างเห็นได้ชัด',
    rating: 5,
    highlight: 'ทำงานร่วมกับทีมนักพัฒนาได้เข้าใจ 100%'
  },
  {
    name: 'ณัฐพงษ์ วิเศษสุข',
    role: 'Entrepreneur & Tech Founder',
    company: 'E-commerce Platform',
    content: 'ผมต้องการสร้างเว็บหน้าเดียวและ Landing Page ของโปรเจกต์ตัวเองโดยไม่ต้องจ้างทีมภายนอก คอร์สนี้ให้คำตอบครบตั้งแต่ Semantic HTML, Tailwind CSS ยันการเขียน JS โต้ตอบ คุ้มค่าที่สุดที่เคยลงเรียนมา',
    rating: 5,
    highlight: 'สร้างเว็บธุรกิจเองได้ ลดต้นทุนหลักแสน'
  }
];

export interface FaqItem {
  question: string;
  answer: string;
}

export const FAQS: FaqItem[] = [
  {
    question: 'ไม่มีพื้นฐานการเขียนโค้ดมาก่อน สามารถเรียนได้ไหม?',
    answer: 'เรียนได้แน่นอนครับ หลักสูตรออกแบบมาให้เริ่มต้นจากศูนย์ (Zero-to-Hero) โดยเริ่มตั้งแต่การเข้าใจวิธีคิดเชิงตรรกะ โครงสร้างพื้นฐานของ HTML5, การจัดสไตล์ด้วย Tailwind CSS และการเขียน JavaScript พื้นฐาน พร้อมคำอธิบายที่เห็นภาพชัดเจนและแบบฝึกหัดจับมือทำทีละสเต็ป'
  },
  {
    question: 'บทเรียนมีอายุการเข้าชมกี่วัน ดูย้อนหลังได้หรือไม่?',
    answer: 'เข้าชมได้ตลอดชีพ (Lifetime Access) ไม่มีวันหมดอายุครับ และหากมีเนื้อหาอัปเดตหรือเทคโนโลยีใหม่ๆ เช่น ฟีเจอร์ใหม่ของ Tailwind หรือ JavaScript ทางทีมงานจะอัปเดตบทเรียนให้ผู้เรียนฟรีโดยไม่มีค่าใช้จ่ายเพิ่มเติม'
  },
  {
    question: 'เมื่อเรียนจบจะได้รับใบประกาศนียบัตร (Certificate) หรือไม่?',
    answer: 'ผู้เรียนที่ทำการบ้านและส่งโปรเจกต์เวิร์กช็อปครบถ้วนตามเกณฑ์ จะได้รับ Certificate of Completion พร้อมรหัสตรวจสอบ Verification ID ที่สามารถนำไปแนบบน LinkedIn, เรซูเม หรือ Portfolio สมัครงานได้ทันที'
  },
  {
    question: 'หากติดปัญหาหรือเขียนโค้ดแล้ว Error มีผู้ช่วยตอบคำถามหรือไม่?',
    answer: 'เรามีกลุ่มสนทนาและ Q&A Community เฉพาะผู้เรียน โดยมีครูผู้สอนและทีม Teaching Assistants (TA) คอยตรวจโค้ด ให้ฟีดแบ็ก และตอบข้อสงสัยอย่างใกล้ชิดทุกวันทำการ'
  },
  {
    question: 'รองรับการชำระเงินผ่านช่องทางใดบ้าง มีผ่อนชำระหรือไม่?',
    answer: 'รองรับการชำระผ่าน PromptPay QR, บัตรเครดิต/เดบิต (Visa, Mastercard, JCB) และการโอนเงินผ่านธนาคาร พร้อมตัวเลือกผ่อนชำระ 0% นานสูงสุด 3 เดือนสำหรับยอดชำระตั้งแต่ 2,000 บาทขึ้นไป'
  }
];

export interface QuizQuestion {
  id: number;
  question: string;
  options: {
    label: string;
    sublabel: string;
    courseRecommendation: 'web-dev-mastery' | 'ai-data-essentials' | 'ui-ux-design-systems';
  }[];
}

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    question: 'ระดับประสบการณ์พื้นฐานด้านคอมพิวเตอร์และเทคโนโลยีของคุณในปัจจุบัน?',
    options: [
      {
        label: 'ผู้เริ่มต้นแท้จริง (Beginner)',
        sublabel: 'ไม่เคยเขียนโค้ดมาก่อน ต้องการเข้าใจหลักการสร้างเว็บตั้งแต่รากฐาน',
        courseRecommendation: 'web-dev-mastery'
      },
      {
        label: 'ชอบงานดีไซน์และความคิดสร้างสรรค์',
        sublabel: 'สนใจการจัดวางภาพ การเลือกสี และอยากแปลงไอเดียเป็นหน้าจอจริง',
        courseRecommendation: 'ui-ux-design-systems'
      },
      {
        label: 'สนใจการใช้เครื่องมือ AI และข้อมูล',
        sublabel: 'ต้องการเพิ่มผลผลิตในการทำงาน วิเคราะห์ข้อมูล และเชื่อมต่อ API ฉลาดๆ',
        courseRecommendation: 'ai-data-essentials'
      }
    ]
  },
  {
    id: 2,
    question: 'เป้าหมายที่สำคัญที่สุดของคุณในการเรียนรู้ครั้งนี้คืออะไร?',
    options: [
      {
        label: 'สร้างเว็บไซต์หรือเว็บแอปพลิเคชันได้ด้วยตนเอง',
        sublabel: 'อยากสร้างผลงาน Single Page หรือเว็บธุรกิจที่ใช้งานได้จริงบนเบราว์เซอร์',
        courseRecommendation: 'web-dev-mastery'
      },
      {
        label: 'ยกระดับการทำงานอัตโนมัติด้วย AI & Data',
        sublabel: 'นำ AI มาช่วยวิเคราะห์ตัวเลขและสรุปผลเพื่อสร้างความได้เปรียบ',
        courseRecommendation: 'ai-data-essentials'
      },
      {
        label: 'ออกแบบ UI/UX ให้สวยงาม สบายตา ถูกหลักสากล',
        sublabel: 'อยากเข้าใจระบบ Design System และสร้างผลงานพอร์ตฟอลิโอระดับมือโปร',
        courseRecommendation: 'ui-ux-design-systems'
      }
    ]
  },
  {
    id: 3,
    question: 'รูปแบบการเรียนรู้ที่คุณชอบมากที่สุด?',
    options: [
      {
        label: 'ลงมือทำโปรเจกต์จริงทีละบรรทัด (Practical Coding)',
        sublabel: 'เห็นผลลัพธ์ทันทีที่เขียน และเข้าใจโครงสร้างผ่านการทดลองสร้าง',
        courseRecommendation: 'web-dev-mastery'
      },
      {
        label: 'วิเคราะห์เคสตัวอย่างและการนำไปใช้งานจริง (Case Study & Tools)',
        sublabel: 'เน้นความเร็วในการสร้างคุณค่าและการต่อยอดเครื่องมือสมัยใหม่',
        courseRecommendation: 'ai-data-essentials'
      },
      {
        label: 'เรียนรู้ผ่านภาพ กริด และสุนทรียภาพ (Visual & Layout)',
        sublabel: 'ให้ความสำคัญกับประสบการณ์ของผู้ใช้งานและความประณีตของรายละเอียด',
        courseRecommendation: 'ui-ux-design-systems'
      }
    ]
  }
];
