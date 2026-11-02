export type GradeLevel = 'all' | 'm1' | 'm2' | 'm3' | 'm4' | 'm5' | 'm6';
export type SubjectCategory = 'all' | 'science_tech' | 'math' | 'english' | 'social_thai';

export interface SlideItem {
  id: string;
  title: string;
  unit: string;
  grade: GradeLevel;
  gradeLabel: string;
  subject: SubjectCategory;
  subjectLabel: string;
  slideCount: number;
  format: 'Google Slides' | 'Canva' | 'PowerPoint' | 'PDF';
  updatedDate: string;
  teacher: string;
  description: string;
  slideUrl: string;
  previewSlides: {
    pageNumber: number;
    title: string;
    bullets: string[];
  }[];
}

export interface MediaItem {
  id: string;
  title: string;
  unit: string;
  grade: GradeLevel;
  gradeLabel: string;
  subject: SubjectCategory;
  subjectLabel: string;
  mediaType: 'video' | 'worksheet' | 'simulation' | 'infographic';
  mediaTypeLabel: string;
  durationOrPages: string;
  resourceLink: string;
  description: string;
  thumbnailGradient: string;
}

export interface AssignmentItem {
  id: string;
  title: string;
  unit: string;
  grade: GradeLevel;
  gradeLabel: string;
  subject: SubjectCategory;
  subjectLabel: string;
  dueDate: string;
  points: number;
  instructions: string;
  submissionLinkType: 'google_drive' | 'canva' | 'file';
  submittedCount: number;
  totalStudents: number;
}

export interface SubmissionRecord {
  id: string;
  assignmentId: string;
  assignmentTitle: string;
  studentName: string;
  studentNo: string;
  classroom: string;
  submissionLink: string;
  note: string;
  submittedAt: string;
}

export const INITIAL_SLIDES: SlideItem[] = [
  {
    id: 'slide-01',
    title: 'การออกแบบอัลกอริทึมและเขียนโค้ดภาษา Python เบื้องต้น',
    unit: 'หน่วยที่ 2: วิทยาการคำนวณและเทคโนโลยี',
    grade: 'm4',
    gradeLabel: 'มัธยมศึกษาปีที่ 4',
    subject: 'science_tech',
    subjectLabel: 'วิทยาศาสตร์และเทคโนโลยี',
    slideCount: 42,
    format: 'Google Slides',
    updatedDate: '1 พ.ย. 2026',
    teacher: 'ครูอรณิชา วัฒนกุล',
    description: 'สไลด์ประกอบการสอนแนวคิดเชิงคำนวณ ตัวแปร ชนิดข้อมูล โครงสร้างเงื่อนไข if-else และการวนซ้ำ พร้อมตัวอย่างโค้ดและโจทย์ฝึกทักษะ',
    slideUrl: 'https://docs.google.com/presentation',
    previewSlides: [
      {
        pageNumber: 1,
        title: 'แนวคิดเชิงคำนวณ (Computational Thinking)',
        bullets: [
          'Decomposition: การย่อยปัญหาออกเป็นส่วนเล็กๆ',
          'Pattern Recognition: การหารูปแบบและความเหมือน',
          'Abstraction: การแยกแยะสาระสำคัญและการละทิ้งรายละเอียดที่ไม่จำเป็น',
          'Algorithm Design: การลำดับขั้นตอนวิธีแก้ปัญหาอย่างชัดเจน'
        ]
      },
      {
        pageNumber: 2,
        title: 'ตัวแปรและประเภทข้อมูลใน Python',
        bullets: [
          'int: จำนวนเต็ม เช่น 10, -5, 0',
          'float: ทศนิยม เช่น 3.14, 0.5',
          'str: ข้อความ ตัวอักษร ในเครื่องหมายคำพูด',
          'bool: ค่าความจริง True หรือ False'
        ]
      },
      {
        pageNumber: 3,
        title: 'โครงสร้างการตัดสินใจ If - Elif - Else',
        bullets: [
          'ตรวจสอบเงื่อนไขทางตรรกะ เช่น if score >= 80:',
          'การเว้นระยะ Indentation 4 เคาะ (สำคัญมากใน Python)',
          'ตัวอย่าง: ระบบตัดเกรด 4 ระดับอัตโนมัติ'
        ]
      }
    ]
  },
  {
    id: 'slide-02',
    title: 'กลไกการสังเคราะห์ด้วยแสงและการลำเลียงในพืช (Photosynthesis)',
    unit: 'หน่วยที่ 3: ชีววิทยาและสิ่งแวดล้อม',
    grade: 'm5',
    gradeLabel: 'มัธยมศึกษาปีที่ 5',
    subject: 'science_tech',
    subjectLabel: 'วิทยาศาสตร์และเทคโนโลยี',
    slideCount: 36,
    format: 'Canva',
    updatedDate: '28 ต.ค. 2026',
    teacher: 'ครูณัฐพล ชัยสิทธิ์',
    description: 'แผนภาพคลอโรพลาสต์ ปฏิกิริยาแสง (Light Reaction) วัฏจักรคัลวิน (Calvin Cycle) และการทดลองแป้งในใบพืช',
    slideUrl: 'https://www.canva.com',
    previewSlides: [
      {
        pageNumber: 1,
        title: 'โครงสร้างของคลอโรพลาสต์ (Chloroplast Structure)',
        bullets: [
          'Thylakoid Membrane: บริเวณเกิดปฏิกิริยาใช้แสง',
          'Granum: ตั้งซ้อนกันของไทลาคอยด์',
          'Stroma: ของเหลวภายใน บริเวณเกิดวัฏจักรคัลวิน'
        ]
      },
      {
        pageNumber: 2,
        title: 'สมการการสังเคราะห์ด้วยแสง',
        bullets: [
          '6CO₂ + 12H₂O + แสง → C₆H₁₂O₆ + 6O₂ + 6H₂O',
          'น้ำ (H₂O) ถูกสลายให้แก๊สออกซิเจน (O₂) ในระยะ Light reaction',
          'แก๊ส CO₂ ถูกตรึงกลายเป็นน้ำตาลใน Stroma'
        ]
      }
    ]
  },
  {
    id: 'slide-03',
    title: 'เรขาคณิตวิเคราะห์และภาคตัดกรวย (Conic Sections)',
    unit: 'หน่วยที่ 1: คณิตศาสตร์เพิ่มเติม',
    grade: 'm4',
    gradeLabel: 'มัธยมศึกษาปีที่ 4',
    subject: 'math',
    subjectLabel: 'คณิตศาสตร์',
    slideCount: 48,
    format: 'PowerPoint',
    updatedDate: '25 ต.ค. 2026',
    teacher: 'ครูพงศ์พิพัฒน์ มณีวงษ์',
    description: 'สูตรระยะห่างจุด เส้นตรง วงกลม พาราโบลา วงรี และไฮเพอร์โบลา พร้อมตัวอย่างข้อสอบเตรียมเข้ามหาวิทยาลัย (A-Level)',
    slideUrl: 'https://onedrive.live.com',
    previewSlides: [
      {
        pageNumber: 1,
        title: 'สมการมาตรฐานวงกลม (Circle Equation)',
        bullets: [
          '(x - h)² + (y - k)² = r²',
          'จุดศูนย์กลาง C(h, k) และรัศมี r',
          'การจัดรูปกำลังสองสมบูรณ์จากรูปทั่วไป Ax² + Ay² + Dx + Ey + F = 0'
        ]
      },
      {
        pageNumber: 2,
        title: 'พาราโบลาแกนตั้งและแกนนอน',
        bullets: [
          'หงาย/คว่ำ: (x - h)² = 4c(y - k)',
          'เปิดขวา/เปิดซ้าย: (y - k)² = 4c(x - h)',
          'จุดยอด V(h, k), โฟกัส F, และเส้นไดเรกตริกซ์'
        ]
      }
    ]
  },
  {
    id: 'slide-04',
    title: 'English Academic Presentation & Speech Writing',
    unit: 'Unit 4: Global Communication',
    grade: 'm6',
    gradeLabel: 'มัธยมศึกษาปีที่ 6',
    subject: 'english',
    subjectLabel: 'ภาษาอังกฤษ',
    slideCount: 30,
    format: 'Canva',
    updatedDate: '24 ต.ค. 2026',
    teacher: 'Teacher Sarah / ครูวรรณพร',
    description: 'โครงสร้างการนำเสนองานวิชาการ Signposting language สำนวนเชื่อมประโยค และเทคนิคการตอบคำถาม Q&A',
    slideUrl: 'https://www.canva.com',
    previewSlides: [
      {
        pageNumber: 1,
        title: 'Structuring an Engaging Academic Talk',
        bullets: [
          'Hook & Attention Grabber: Story, Stat, or Thought-provoking Question',
          'Signposting: "First, I will discuss...", "Moving on to...", "In conclusion..."',
          'The Rule of Three: Ideas presented in threes are inherently more memorable'
        ]
      }
    ]
  },
  {
    id: 'slide-05',
    title: 'วงจรไฟฟ้าเบื้องต้นและกฎของโอห์ม (Ohm\'s Law)',
    unit: 'หน่วยที่ 3: ไฟฟ้าและแม่เหล็ก',
    grade: 'm3',
    gradeLabel: 'มัธยมศึกษาปีที่ 3',
    subject: 'science_tech',
    subjectLabel: 'วิทยาศาสตร์และเทคโนโลยี',
    slideCount: 32,
    format: 'PDF',
    updatedDate: '20 ต.ค. 2026',
    teacher: 'ครูอรณิชา วัฒนกุล',
    description: 'การต่อวงจรแบบอนุกรมและขนาน การคำนวณแรงดันไฟฟ้า (V) กระแสไฟฟ้า (I) และความต้านทาน (R) V = IR',
    slideUrl: 'https://drive.google.com',
    previewSlides: [
      {
        pageNumber: 1,
        title: 'ความสัมพันธ์ตามกฎของโอห์ม: V = I × R',
        bullets: [
          'V (Voltage): ความต่างศักย์ไฟฟ้า มีหน่วยเป็น โวลต์ (V)',
          'I (Current): กระแสไฟฟ้า มีหน่วยเป็น แอมแปร์ (A)',
          'R (Resistance): ความต้านทานไฟฟ้า มีหน่วยเป็น โอห์ม (Ω)'
        ]
      }
    ]
  },
  {
    id: 'slide-06',
    title: 'สมการเชิงเส้นสองตัวแปรและการประยุกต์',
    unit: 'หน่วยที่ 1: พีชคณิตพื้นฐาน',
    grade: 'm1',
    gradeLabel: 'มัธยมศึกษาปีที่ 1',
    subject: 'math',
    subjectLabel: 'คณิตศาสตร์',
    slideCount: 28,
    format: 'Google Slides',
    updatedDate: '18 ต.ค. 2026',
    teacher: 'ครูพงศ์พิพัฒน์ มณีวงษ์',
    description: 'ความหมายของตัวแปร การแก้สมการเชิงเส้น และโจทย์ปัญหาเกี่ยวกับอายุและจำนวนเงิน',
    slideUrl: 'https://docs.google.com/presentation',
    previewSlides: [
      {
        pageNumber: 1,
        title: 'หลักการย้ายข้างและสมบัติการเท่ากัน',
        bullets: [
          'บวกเข้าหรือลบออกทั้งสองข้างด้วยจำนวนที่เท่ากัน',
          'คูณหรือหารทั้งสองข้างด้วยจำนวนที่ไม่เท่ากับศูนย์',
          'การตรวจคำตอบโดยแทนค่าตัวแปรกลับเข้าไปในสมการเดิม'
        ]
      }
    ]
  }
];

export const INITIAL_MEDIA: MediaItem[] = [
  {
    id: 'media-01',
    title: 'วิดีโอสอน: ปฏิบัติการทดลองเรื่องการตกอย่างอิสระและแรงโน้มถ่วง (Free Fall)',
    unit: 'ฟิสิกส์ ม.4 · การเคลื่อนที่แนวตรง',
    grade: 'm4',
    gradeLabel: 'ม.4',
    subject: 'science_tech',
    subjectLabel: 'วิทยาศาสตร์',
    mediaType: 'video',
    mediaTypeLabel: 'คลิปวิดีโอสอน',
    durationOrPages: '18:45 นาที',
    resourceLink: 'https://www.youtube.com',
    description: 'คลิปสาธิตการจับเวลาด้วยแถบกระดาษเคาะสัญญาณและการคำนวณค่าความเร่ง g = 9.8 m/s²',
    thumbnailGradient: 'from-blue-600 to-indigo-700'
  },
  {
    id: 'media-02',
    title: 'แบบฝึกหัด & ใบงานสรุปสูตรตรีโกณมิติฉบับพกพา (Trigonometry Sheet)',
    unit: 'คณิตศาสตร์ ม.5 · ฟังก์ชันตรีโกณมิติ',
    grade: 'm5',
    gradeLabel: 'ม.5',
    subject: 'math',
    subjectLabel: 'คณิตศาสตร์',
    mediaType: 'worksheet',
    mediaTypeLabel: 'ใบงานและสรุปสูตร (PDF)',
    durationOrPages: '6 หน้า PDF',
    resourceLink: 'https://drive.google.com',
    description: 'ตารางค่า sin, cos, tan วงกลมหนึ่งหน่วย สูตรผลบวกผลต่างมุม sin(A±B) และโจทย์ประยุกต์ 20 ข้อ',
    thumbnailGradient: 'from-emerald-600 to-teal-700'
  },
  {
    id: 'media-03',
    title: 'สื่อจำลองการทำงาน Interactive PhET: การต่อวงจรไฟฟ้าเสมือนจริง',
    unit: 'วิทยาศาสตร์ ม.3 · วงจรไฟฟ้ากระแสตรง',
    grade: 'm3',
    gradeLabel: 'ม.3',
    subject: 'science_tech',
    subjectLabel: 'วิทยาศาสตร์',
    mediaType: 'simulation',
    mediaTypeLabel: 'แบบจำลองอินเทอร์แอคทีฟ',
    durationOrPages: 'HTML5 Simulation',
    resourceLink: 'https://phet.colorado.edu',
    description: 'ทดลองลากสายไฟ หลอดไฟ แบตเตอรี่ และตัวต้านทาน วัดค่ากระแสและแรงดันไฟฟ้าได้จริงบนหน้าจอ',
    thumbnailGradient: 'from-amber-500 to-orange-600'
  },
  {
    id: 'media-04',
    title: 'อินโฟกราฟิกสรุป 12 Tenses ภาษาอังกฤษ พร้อม Timeline และตัวอย่างประโยค',
    unit: 'ภาษาอังกฤษ ม.ต้น - ม.ปลาย',
    grade: 'all',
    gradeLabel: 'ทุกระดับชั้น',
    subject: 'english',
    subjectLabel: 'ภาษาอังกฤษ',
    mediaType: 'infographic',
    mediaTypeLabel: 'อินโฟกราฟิกความรู้',
    durationOrPages: 'ภาพความละเอียดสูง',
    resourceLink: 'https://canva.com',
    description: 'แผนภาพเปรียบเทียบ Past, Present, Future ทั้ง Simple, Continuous, Perfect และ Perfect Continuous',
    thumbnailGradient: 'from-purple-600 to-pink-600'
  }
];

export const INITIAL_ASSIGNMENTS: AssignmentItem[] = [
  {
    id: 'assign-01',
    title: 'การบ้านที่ 1: เขียนโปรแกรมคำนวณดัชนีมวลกาย (BMI Calculator) ด้วย Python',
    unit: 'วิทยาการคำนวณ ม.4',
    grade: 'm4',
    gradeLabel: 'มัธยมศึกษาปีที่ 4',
    subject: 'science_tech',
    subjectLabel: 'วิทยาศาสตร์และเทคโนโลยี',
    dueDate: '10 พ.ย. 2026 (23:59 น.)',
    points: 10,
    instructions: 'ให้นักเรียนเขียนโปรแกรมรับค่าน้ำหนัก (kg) และส่วนสูง (cm) แล้วคำนวณค่า BMI พร้อมแสดงผลว่าอยู่ในเกณฑ์ใด แนบเป็นลิงก์ Google Colab หรือ GitHub / Replit พร้อมแชร์สิทธิ์เป็น Anyone with the link can view',
    submissionLinkType: 'google_drive',
    submittedCount: 28,
    totalStudents: 36
  },
  {
    id: 'assign-02',
    title: 'ใบงานที่ 2: วาดแผนผังมโนทัศน์ (Mind Map) ปฏิกิริยาการสังเคราะห์ด้วยแสง',
    unit: 'ชีววิทยา ม.5',
    grade: 'm5',
    gradeLabel: 'มัธยมศึกษาปีที่ 5',
    subject: 'science_tech',
    subjectLabel: 'วิทยาศาสตร์และเทคโนโลยี',
    dueDate: '12 พ.ย. 2026 (18:00 น.)',
    points: 15,
    instructions: 'สรุปขั้นตอน Light reaction และ Calvin cycle ในรูปแบบภาพหรืออินโฟกราฟิก ส่งเป็นลิงก์ Canva View link หรือรูปภาพบน Google Drive',
    submissionLinkType: 'canva',
    submittedCount: 31,
    totalStudents: 38
  },
  {
    id: 'assign-03',
    title: 'แบบฝึกหัดโจทย์ตรีโกณมิติประยุกต์ วัดความสูงตึกและระยะห่าง (5 ข้อ)',
    unit: 'คณิตศาสตร์ ม.3',
    grade: 'm3',
    gradeLabel: 'มัธยมศึกษาปีที่ 3',
    subject: 'math',
    subjectLabel: 'คณิตศาสตร์',
    dueDate: '14 พ.ย. 2026 (23:59 น.)',
    points: 10,
    instructions: 'แสดงวิธีทำอย่างละเอียดลงในสมุด ถ่ายภาพให้ชัดเจน แล้วอัปโหลดใส่โฟลเดอร์ Google Drive หรือส่งเป็นไฟล์ PDF',
    submissionLinkType: 'google_drive',
    submittedCount: 19,
    totalStudents: 40
  },
  {
    id: 'assign-04',
    title: 'Mini Essay: "How AI Influences Our Daily Lives" (150 - 200 words)',
    unit: 'English Writing ม.6',
    grade: 'm6',
    gradeLabel: 'มัธยมศึกษาปีที่ 6',
    subject: 'english',
    subjectLabel: 'ภาษาอังกฤษ',
    dueDate: '18 พ.ย. 2026 (23:59 น.)',
    points: 20,
    instructions: 'เขียนเรียงความขนาดสั้นตามโครงสร้าง Introduction, Body, Conclusion ส่งเป็นลิงก์ Google Docs (ตั้งค่าสิทธิ์ Comment/View)',
    submissionLinkType: 'google_drive',
    submittedCount: 22,
    totalStudents: 35
  }
];

export const GRADE_TABS: { id: GradeLevel; label: string }[] = [
  { id: 'all', label: 'ทุกระดับชั้น' },
  { id: 'm1', label: 'ม.1' },
  { id: 'm2', label: 'ม.2' },
  { id: 'm3', label: 'ม.3' },
  { id: 'm4', label: 'ม.4' },
  { id: 'm5', label: 'ม.5' },
  { id: 'm6', label: 'ม.6' },
];

export const SUBJECT_TABS: { id: SubjectCategory; label: string }[] = [
  { id: 'all', label: 'ทุกกลุ่มสาระ' },
  { id: 'science_tech', label: 'วิทยาศาสตร์และเทคโนโลยี' },
  { id: 'math', label: 'คณิตศาสตร์' },
  { id: 'english', label: 'ภาษาอังกฤษ' },
  { id: 'social_thai', label: 'สังคมศึกษา & ภาษาไทย' },
];
