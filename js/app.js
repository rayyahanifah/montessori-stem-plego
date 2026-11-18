/* =====================================================================
       1. DATA STRUCTURE: PLEGO CURRICULUM v3.2 & APP STATE
       ===================================================================== */
const initialCurriculumItems = [
  // Level 0 Green (Preschool - PLEGO Blocks)
  {
    id: 'c-0-1',
    level: 'level-0',
    semester: 'Gasal',
    week: 1,
    bloom: 'Remembering',
    title_id: 'Misi Nusa Penida: Lampu Nelayan Otomatis',
    title_en: 'Mission Nusa Penida: Automatic Fisher Lamp',
    tools: 'Light Sensor, LED, Baki Kayu',
    elo: 'Peserta dapat menyebutkan bahwa teknologi terdiri dari komponen input dan output, serta mengelompokkan contoh benda sehari-hari.',
    domain: 'science',
    canva_url: 'https://www.canva.com/design/DAF8_Plego_NusaPenida/view?embed',
    materials_id: ['Sensor Cahaya (LDR) Plego', 'Modul Lampu LED', 'Kabel Konektor Magnetik', 'Baki Kayu Montessori', 'Kain Penutup Gelap'],
    materials_en: ['Plego Light Sensor (LDR)', 'LED Light Module', 'Magnetic Connecting Cables', 'Montessori Wooden Tray', 'Dark Cover Cloth'],
    local_tips_id: 'Gunakan tempurung kelapa atau kain perca batik untuk mensimulasikan kondisi malam hari di atas perahu nelayan tradisional.',
    local_tips_en: 'Use coconut halves or local batik scraps to simulate night conditions on fisherman boats.',
    steps_id: [
      { phase: '1. Undangan (Invitation)', text: 'Ajak anak ke rak sains: "Kenzo, nelayan di Nusa Penida melaut saat gelap. Bagaimana jika lampu perahunya bisa menyala sendiri saat malam tiba?"' },
      { phase: '2. Demonstrasi (Demonstration)', text: 'Rangkai sensor cahaya dan LED di atas baki. Tutup sensor dengan telapak tangan secara perlahan, amati bersama anak bagaimana lampu LED menyala seketika.' },
      { phase: '3. Eksplorasi Mandiri (Child Work)', text: 'Beri kebebasan anak memilih benda penutup sensor: daun kering, kain, atau jari tangan tanpa interupsi.' }
    ],
    steps_en: [
      { phase: '1. Invitation', text: 'Invite child: "Fishermen set sail at night. Can our boat light turn on automatically when darkness falls?"' },
      { phase: '2. Demonstration', text: 'Connect light sensor and LED. Cover sensor with palm slowly, observe LED illuminating together.' },
      { phase: '3. Child Work', text: 'Grant full freedom for child to experiment covering sensor with leaves, fabric, or fingers.' }
    ],
    montessori_notes_id: 'Kontrol Kesalahan Visual: Lampu LED hanya menyala saat intensitas cahaya berkurang.',
    montessori_notes_en: 'Visual Control of Error: LED illuminates only when light is occluded.'
  },
  {
    id: 'c-0-2',
    level: 'level-0',
    semester: 'Gasal',
    week: 2,
    bloom: 'Remembering',
    title_id: 'Misi Wakatobi: Jejak Sang Peneliti Laut',
    title_en: 'Mission Wakatobi: Marine Explorer Trail',
    tools: 'Push Button, Tilt Sensor, LED',
    elo: 'Peserta dapat mengenal berbagai jenis input sederhana (tombol, sensor cahaya) dan mencocokkannya dengan output yang sesuai.',
    domain: 'science',
    canva_url: 'https://www.canva.com/design/DAF8_Plego_Wakatobi/view?embed',
    materials_id: ['Push Button Block', 'Tilt Sensor Block', 'LED Indicator', 'Baki Kayu'],
    materials_en: ['Push Button Block', 'Tilt Sensor Block', 'LED Indicator', 'Wooden Tray'],
    local_tips_id: 'Gunakan kerang laut dan pasir halus di atas baki untuk mensimulasikan ekosistem terumbu karang Wakatobi.',
    local_tips_en: 'Use sea shells and fine beach sand on the tray to simulate Wakatobi coral reefs.',
    steps_id: [
      { phase: '1. Undangan (Invitation)', text: 'Tunjukkan miniatur biota laut dan ajak anak menyalakan senter penjelajah bawah air.' },
      { phase: '2. Demonstrasi (Demonstration)', text: 'Tekan push button lembut dengan jari telunjuk (pincer grasp), tunjukkan lampu menyala.' },
      { phase: '3. Eksplorasi Mandiri (Child Work)', text: 'Anak mengeksplorasi perbedaan antara menekan tombol sesaat dan memiringkan tilt sensor.' }
    ],
    steps_en: [
      { phase: '1. Invitation', text: 'Display sea creatures and invite child to turn on the underwater explorer torch.' },
      { phase: '2. Demonstration', text: 'Press push button gently with index finger, demonstrating the light.' },
      { phase: '3. Child Work', text: 'Child freely compares momentary button presses with tilting the sensor.' }
    ],
    montessori_notes_id: 'Melatih koordinasi motorik halus pincer-grasp dan persepsi sebab-akibat langsung.',
    montessori_notes_en: 'Refines fine-motor pincer grasp and builds intuitive cause-and-effect perception.'
  },
  {
    id: 'c-0-3',
    level: 'level-0',
    semester: 'Gasal',
    week: 3,
    bloom: 'Remembering-Understanding',
    title_id: 'Misi Sulawesi Tengah: Tanggap Bencana Sinyal Siaga',
    title_en: 'Mission Central Sulawesi: Disaster Signal Simulation',
    tools: 'Tilt Sensor, Buzzer, LED',
    elo: 'Peserta dapat mengenal jenis output sederhana (LED, buzzer) dan menunjukkan cara kerja Tilt Sensor sebagai input.',
    domain: 'engineering',
    canva_url: 'https://www.canva.com/design/DAF8_Plego_Sulteng/view?embed'
  },
  {
    id: 'c-0-4',
    level: 'level-0',
    semester: 'Gasal',
    week: 4,
    bloom: 'Understanding',
    title_id: 'Misi Maumere: Terbang Seimbang',
    title_en: 'Mission Maumere: Balanced Flight',
    tools: 'Tilt Sensor, Buzzer, LED',
    elo: 'Peserta bereksplorasi mengganti-ganti jenis sensor pada rangkaian yang sama untuk mengamati output yang dipicu input berbeda.',
    domain: 'engineering',
    canva_url: 'https://www.canva.com/design/DAF8_Plego_Maumere/view?embed'
  },
  {
    id: 'c-0-5',
    level: 'level-0',
    semester: 'Gasal',
    week: 5,
    bloom: 'Applying',
    title_id: 'Misi Banjarmasin: Perahu Klotok',
    title_en: 'Mission Banjarmasin: Klotok Boat',
    tools: 'Push Button, Motor DC, Balok Kayu',
    elo: 'Peserta dapat mencoba menggunakan Motor DC sebagai aktuator yang menghasilkan gerak, dipicu oleh input tombol.',
    domain: 'engineering',
    canva_url: 'https://www.canva.com/design/DAF8_Plego_Banjarmasin/view?embed'
  },
  {
    id: 'c-0-6',
    level: 'level-0',
    semester: 'Gasal',
    week: 6,
    bloom: 'Applying',
    title_id: 'Misi NTB: Sistem Tambak Garam',
    title_en: 'Mission NTB: Solar Salt Pond System',
    tools: 'Sensor Cahaya, Motor DC',
    elo: 'Peserta dapat mengombinasikan Sensor Cahaya sebagai input dengan Motor DC sebagai output dalam satu rangkaian fungsional.',
    domain: 'science',
    canva_url: 'https://www.canva.com/design/DAF8_Plego_NTB/view?embed'
  },
  {
    id: 'c-0-7',
    level: 'level-0',
    semester: 'Gasal',
    week: 7,
    bloom: 'Applying',
    title_id: 'Misi Kintamani: Delivery Bot',
    title_en: 'Mission Kintamani: Delivery Bot',
    tools: 'Motor DC, Switch Lock',
    elo: 'Peserta dapat merancang rangkaian dengan 2 Motor DC sebagai aktuator ganda yang menghasilkan gerak terkoordinasi.',
    domain: 'technology',
    canva_url: 'https://www.canva.com/design/DAF8_Plego_Kintamani/view?embed'
  },
  {
    id: 'c-0-8',
    level: 'level-0',
    semester: 'Gasal',
    week: 8,
    bloom: 'Creating',
    title_id: 'Misi Biak: Inventors Challenge',
    title_en: 'Mission Biak: Inventors Challenge',
    tools: 'Kombinasi Komponen Bebas',
    elo: 'Peserta dapat merancang, menyelesaikan, dan mempresentasikan mini project berbasis PLEGO Blocks untuk memecahkan masalah sederhana.',
    domain: 'technology',
    canva_url: 'https://www.canva.com/design/DAF8_Plego_Biak/view?embed'
  },
  {
    id: 'c-0-9',
    level: 'level-0',
    semester: 'Genap',
    week: 1,
    bloom: 'Applying',
    title_id: 'Misi Sumba: Sentuhan Sang Penenun',
    title_en: 'Mission Sumba: Touch of Weaver',
    tools: 'Touch Sensor, LED',
    elo: 'Peserta dapat mencoba menggunakan Touch Sensor sebagai input untuk mengaktifkan output gerak dan cahaya.',
    domain: 'technology',
    canva_url: 'https://www.canva.com/design/DAF8_Plego_Sumba/view?embed'
  },
  {
    id: 'c-0-10',
    level: 'level-0',
    semester: 'Genap',
    week: 2,
    bloom: 'Applying',
    title_id: 'Misi Toraja: Pintu Tongkonan Otomatis',
    title_en: 'Mission Toraja: Automatic Tongkonan Door',
    tools: 'Touch Sensor, LED, Buzzer, Splitter',
    elo: 'Peserta dapat merancang rangkaian 1 input - 2 output menggunakan splitter.',
    domain: 'engineering',
    canva_url: 'https://www.canva.com/design/DAF8_Plego_Toraja/view?embed'
  },
  {
    id: 'c-0-11',
    level: 'level-0',
    semester: 'Genap',
    week: 3,
    bloom: 'Applying',
    title_id: 'Misi Ternate: Alarm Gudang Rempah',
    title_en: 'Mission Ternate: Spice Warehouse Alarm',
    tools: 'Sensor Cahaya, LED, Buzzer, Splitter',
    elo: 'Peserta dapat menggunakan kombinasi 2 output berbeda (LED + Buzzer) sebagai sistem peringatan ganda.',
    domain: 'science',
    canva_url: 'https://www.canva.com/design/DAF8_Plego_Ternate/view?embed'
  },
  {
    id: 'c-0-12',
    level: 'level-0',
    semester: 'Genap',
    week: 4,
    bloom: 'Understanding',
    title_id: 'Misi Ambon: Harmoni Logika Nada',
    title_en: 'Mission Ambon: Logic Harmony',
    tools: 'Push Button x2, Function Block, Buzzer',
    elo: 'Peserta dapat memahami konsep logika dasar AND/OR menggunakan Function Block.',
    domain: 'math',
    canva_url: 'https://www.canva.com/design/DAF8_Plego_Ambon/view?embed'
  },

  // Level 1 Yellow (SD 1–3)
  {
    id: 'c-1-1',
    level: 'level-1',
    semester: 'Gasal',
    week: 1,
    bloom: 'Understanding',
    title_id: 'Misi Nusa Penida: Lampu Nelayan Otomatis',
    title_en: 'Mission Nusa Penida: Fisher Light',
    tools: 'Light Sensor, LED',
    elo: 'Peserta memahami konsep input dan output serta alur sinyal dalam teknologi sederhana.',
    domain: 'science',
    canva_url: 'https://www.canva.com/design/DAF8_Plego_SD1/view?embed'
  },
  {
    id: 'c-1-4',
    level: 'level-1',
    semester: 'Gasal',
    week: 4,
    bloom: 'Applying',
    title_id: 'Misi Bunaken: Alarm Terumbu Karang',
    title_en: 'Mission Bunaken: Coral Reef Alarm',
    tools: 'Touch Sensor, NOT Gate, Buzzer',
    elo: 'Peserta dapat mencoba rangkaian sederhana dengan gerbang logika NOT.',
    domain: 'technology',
    canva_url: 'https://www.canva.com/design/DAF8_Plego_SD4/view?embed'
  },

  // Level 2 Red (SD 4–5 AI)
  {
    id: 'c-2-13',
    level: 'level-2',
    semester: 'Genap',
    week: 1,
    bloom: 'Remembering',
    title_id: 'Misi Sikka: Kenali Suara Alam (Audio AI)',
    title_en: 'Mission Sikka: Nature Sound Classification',
    tools: 'Teachable Machine, Laptop/Mic',
    elo: 'Menyebutkan langkah dasar melatih model AI di Teachable Machine.',
    domain: 'technology',
    canva_url: 'https://www.canva.com/design/DAF8_Plego_AI01/view?embed'
  },

  // Level 3 Blue (SMP)
  {
    id: 'c-3-1',
    level: 'level-3',
    semester: 'Gasal',
    week: 1,
    bloom: 'Remembering',
    title_id: 'ESP32 & Wokwi: Internal LED Blink',
    title_en: 'ESP32 & Wokwi: Internal LED Blink',
    tools: 'ESP32, Wokwi Simulator, C/C++',
    elo: 'Menyebutkan antarmuka dasar Arduino IDE/Wokwi dan menjalankan kode blink.',
    domain: 'technology',
    canva_url: 'https://www.canva.com/design/DAF8_Plego_ESP32/view?embed'
  }
];

const state = {
  lang: 'id',
  currentUser: null, // STRICTLY NULL AT STARTUP -> MUST START AT LOGIN
  currentView: 'dashboard',
  plannerLayout: 'week', // 'day' | 'week' | 'month'
  plannerDate: new Date(),
  plannerFilter: 'all', // 'all' (semua jadwal global) | 'mine' (jadwal saya)
  previewStudentId: null,
  selectedCurriculumLevel: 'level-0',
  selectedCurriculumSemester: 'all',
  curriculumSearch: '',
  curriculumData: [],
  selectedActivity: null,
  selectedStudentForObs: null,
  obsLevel: 'developing',
  students: [],
  allStudents: [],
  classes: [],
  activeClassId: null,
  observationsLog: [],
  observationStudentFilter: 'all',
  scheduleItems: [],
  databaseStatus: {
    curriculum: false,
    students: false,
    classes: false,
    tutors: false,
    schedule: false,
    observations: false,
  },
  databaseObservations: [],
  databaseObservationCount: null,
  databaseRecentObservationCount: null,
  reportSelectedSchool: 'azhari',
  reportSelectedStudentId: 'stu-aileen',
  reportSelectedTerm: 'Term 1 (Semester Gasal) 2026/2027',
};

const ADMIN_IDENTITIES = {
  'rayya@plego.com': 'Rayya',
  'busabil@plego.com': 'Bu Sabil',
  'mbaghina@plego.com': 'Mba Ghina',
};
// Demo credentials are public in this client; replace or disable before production.
const DEMO_ACCOUNTS = {
  admin: { email: 'mbaghina@plego.com', password: 'plego123' },
  tutor: { email: 'syifa@plego.com', password: 'plego123' },
  parent: { email: 'ortu.aileen@plego.com', password: 'plego123' },
};
const SCHEDULABLE_TUTOR_EMAILS = new Set([
  'tata@plego.com',
  'karin@plego.com',
  'rina@plego.com',
  'nadhiyaa@plego.com',
  'aca@plego.com',
  'syifa@plego.com',
  'alyana@plego.com',
  'devina@plego.com',
  'ai@plego.com',
  'oliv@plego.com',
  'rara@plego.com',
  'desti@plego.com',
  'astria@plego.com',
  'rayya@plego.com',
]);

function isAdminEmail(email) {
  const clean = String(email || '').toLowerCase().trim();
  const inIdentities = Object.prototype.hasOwnProperty.call(ADMIN_IDENTITIES, clean);
  const inDb = (state.admins || []).some(a => String(a.email || '').toLowerCase().trim() === clean);
  return inIdentities || inDb;
}

function isAdminUser() {
  return state.currentUser?.role === 'admin';
}

function getSelectableTutors() {
  const tutorsById = new Map();
  (state.tutors || []).forEach(tutor => {
    if (tutor && tutor.id && !tutorsById.has(tutor.id)) {
      tutorsById.set(tutor.id, tutor);
    }
  });
  return [...tutorsById.values()].sort((a, b) => (a.full_name || '').localeCompare(b.full_name || ''));
}

/* =====================================================================
   2. BILINGUAL DICTIONARY
   ===================================================================== */
const i18n = {
  id: {
    'login.subtitle': 'Montessori STEM Platform · Masuk Akun Anda',
    'login.email': 'Email Akun Terdaftar:',
    'login.password': 'Kata Sandi (Password):',
    'login.reset': 'Lupa Sandi?',
    'login.btn': 'Masuk ke Ruang Kerja',
    'login.quickDemo': 'Akses Demo Cepat 1-Klik (Deteksi Peran Otomatis):',
    'login.demoAdmin': 'Admin',
    'login.demoTutor': 'Tutor',
    'login.demoParent': 'Ortu',
    'login.tabStaff': 'Pendidik / Admin',
    'login.tabParent': 'Orang Tua Murid',
    'login.parentPhone': 'Nomor Handphone (WhatsApp):',
    'login.parentPin': 'PIN Masuk Orang Tua (4-6 Digit):',
    'login.parentBtn': 'Masuk ke Portal Portofolio',
    'nav.tutors': 'Manajemen Tutor',
    'nav.manageAccounts': 'Kelola Akun',
    'nav.admins': 'Add Admin',
    'nav.tutorsTab': 'Add Tutor',
    'tutors.eyebrow': 'Pendidik & Tutor STEM Plego',
    'tutors.title': 'Manajemen & Pendaftaran Tutor',
    'tutors.subtitle': 'Kelola data tutor pendidik STEM Plego. Tutor yang didaftarkan langsung tersimpan di Supabase dan dapat ditugaskan pada jadwal kelas.',
    'tutors.addBtn': 'Tambah Tutor Baru',
    'tutors.listTitle': 'Daftar Tutor Terdaftar',
    'topbar.currentClass': 'Tampilan Kelas:',
    'nav.dashboard': 'Beranda',
    'nav.curriculum': 'Kurikulum Plego v3.2',
    'nav.activities': 'Koleksi Aktivitas',
    'nav.planner': 'Perencana Pembelajaran',
    'nav.observations': 'Observasi & Ceklis',
    'nav.studentReport': 'Jurnal Belajar',
    'nav.parentPortal': 'Portofolio Anak',
    'nav.parentActivities': 'Eksplorasi di Rumah',
    'nav.parentChat': 'Pesan dengan Guru',
    'nav.logout': 'Keluar (Logout)',
    'dash.cycle': 'Siklus Pembelajaran Montessori 09:00 - 11:30',
    'dash.greeting': 'Selamat pagi',
    'dash.subtitle': 'Jadwal dan ringkasan observasi dimuat dari database.',
    'dash.quickLog': 'Catat Observasi',
    'dash.openPlanner': 'Buka Planner',
    'dash.viewReport': 'Jurnal Belajar',
    'parent.viewReport': 'Jurnal Belajar',
    'report.pageTitle': 'Preview & Cetak Jurnal Belajar',
    'report.pageSubtitle': 'Dokumen resmi evaluasi perkembangan ekstrakurikuler STEM',
    'report.back': 'Kembali',
    'report.backJournal': 'Kembali ke Jurnal',
    'report.print': 'Cetak / Unduh PDF',
    'report.school': 'Sekolah:',
    'report.student': 'Siswa:',
    'report.semester': 'Semester:',
    'dash.addToday': 'Jadwalkan Hari Ini',
    'metrics.children': 'Semua Anak',
    'metrics.active': 'aktif terdaftar',
    'metrics.lessons': 'Aktivitas Minggu Ini',
    'metrics.delivered': 'terlaksana',
    'metrics.observations': 'Observasi Dicatat',
    'metrics.fromYesterday': '24 jam terakhir',
    'metrics.needsObservation': 'Perlu Observasi',
    'metrics.observationWindow': 'Belum diamati 7 hari',
    'metrics.databaseRecords': 'Di semua kelas',
    'metrics.needsReview': 'Perlu verifikasi guru',
    'dash.todayTitle': 'Jadwal Eksplorasi Hari Ini',
    'dash.todaySubtitle': 'Jadwal aktivitas dari database',
    'dash.viewAllPlan': 'Lihat Semua →',
    'dash.attentionTitle': 'Perlu Observasi',
    'dash.attentionDesc': 'Daftar anak yang belum memiliki observasi dalam 7 hari terakhir.',
    'dash.pedagogyTipTitle': 'Prinsip Montessori Hari Ini',
    'dash.pedagogyTipDesc': '"Jangan pernah membantu anak pada tugas yang ia rasa mampu selesaikan sendiri." — Maria Montessori.',
    'curr.title': 'Kurikulum Plego STEM & AI Path',
    'curr.subtitle': 'Pemetaan berjenjang dari Preschool (Level 0) hingga SMA dengan Taxonomy Bloom & PLEGO Blocks',
    'curr.addBtn': '+ Tambah Kurikulum Baru',
    'curr.unitsHeading': 'Jalur Pembelajaran',
    'curr.semesterAll': 'Semua',
    'curr.semesterOdd': 'Gasal',
    'curr.semesterEven': 'Genap',
    'act.title': 'Koleksi Aktivitas & Panduan Eksplorasi',
    'act.subtitle': 'Rencana aktivitas siap saji lengkap dengan alternatif material lokal Nusantara & panduan presentasi',
    'planner.weeklyTag': 'Perencana Pembelajaran',
    'planner.filterAll': 'Semua Jadwal',
    'planner.filterMine': 'Jadwal Saya',
    'planner.title': 'Rencana Belajar',
    'planner.subtitle': 'Atur aktivitas, kelas, dan pendidik dalam satu tampilan.',
    'planner.today': 'Hari Ini',
    'planner.hint': 'Pilih hari untuk melihat atau menambahkan aktivitas',
    'planner.view.day': 'Hari',
    'planner.view.week': 'Minggu',
    'planner.view.month': 'Bulan',
    'planner.view.year': '1 Tahun',
    'planner.print': 'Cetak PDF',
    'planner.todayBadge': 'HARI INI',
    'planner.materialsTitle': 'Material Minggu Ini',
    'planner.autoAggregated': 'Dikumpulkan dari jadwal · tersimpan otomatis',
    'days.mon': 'Senin',
    'days.tue': 'Selasa',
    'days.wed': 'Rabu',
    'days.thu': 'Kamis',
    'days.fri': 'Jumat',
    'obs.title': 'Alat Observasi & Ceklis Capaian STEM',
    'obs.subtitle': 'Format observasi 3-ketukan yang menghormati ritme alami anak saat bereksplorasi',
    'obs.eyebrow': 'Ruang tumbuh anak',
    'obs.feedEyebrow': 'Jejak belajar',
    'obs.filterClass': 'Filter:',
    'obs.selectStudent': 'Pilih Anak untuk Dicatat / Dievaluasi:',
    'obs.recentFeedTitle': 'Catatan Observasi Terkini di Kelas B1',
    'obs.liveSynced': 'Tersinkron dengan database',
    'parent.reportCycle': 'Perjalanan belajar dan catatan perkembangan anak',
    'parent.reportEyebrow': 'Jurnal tumbuh kembang',
    'parent.previewStudent': 'Pratinjau anak',
    'parent.statObservations': 'Catatan observasi',
    'parent.statMastered': 'Capaian dikuasai',
    'parent.statClass': 'Lingkungan belajar',
    'parent.reflectionEyebrow': 'Cerita dari pendidik',
    'parent.databaseBadge': 'Data tersimpan',
    'parent.progressEyebrow': 'Langkah demi langkah',
    'parent.momentsEyebrow': 'Momen berharga',
    'parent.recentObservations': 'Perjalanan belajar terbaru',
    'parent.journeyEyebrow': 'Catatan pilihan',
    'parent.gardenEyebrow': 'Tumbuh bersama',
    'parent.gardenCaption': 'Setiap anak tumbuh dengan ritmenya sendiri.',
    'parent.homeIdeaEyebrow': 'Ide sederhana di rumah',
    'parent.connectionEyebrow': 'Tetap terhubung',
    'parent.downloadPdf': 'Unduh Portofolio (PDF)',
    'parent.summaryTitle': 'Rangkuman Refleksi Pendidik',
    'parent.approvedBadge': 'Disetujui Guru',
    'parent.interestsTag': 'Minat yang Menonjol:',
    'parent.domainProgress': 'Pertumbuhan Dimensi STEM',
    'parent.masteryScale': 'Skala: Mulai Muncul ➔ Menguasai',
    'parent.photoStripTitle': 'Dokumentasi Momen Pembelajaran',
    'parent.plantTitle': 'Tanaman Belajar',
    'parent.plantDesc': 'Setiap pencapaian baru menumbuhkan daun pemahaman',
    'parent.tryHomeTitle': 'Eksplorasi Akhir Pekan di Rumah',
    'parent.homeActTitle': 'Ide aktivitas dari kurikulum',
    'parent.homeActDesc': 'Coba jelajahi aktivitas sederhana bersama anak di rumah.',
    'parent.messageTitle': 'Pesan Singkat dengan Admin',
    'parent.messageRecipient': 'Pesan akan langsung dikirim ke admin.',
    'parent.messagePlaceholder': 'Tulis pesan untuk admin...',
    'parent.messageSend': 'Kirim pesan',
    'message.refresh': 'Muat ulang pesan',
    'teacher.messageEyebrow': 'Terhubung dengan keluarga',
    'teacher.messageTitle': 'Pesan Masuk dari Orang Tua',
    'teacher.messageInbox': 'Pesan terbaru dari orang tua',
    'teacher.messageInboxSearch': 'Cari nama orang tua atau anak...',
    'teacher.messageBackToInbox': 'Kembali ke kotak masuk',
    'teacher.messageReplyHint': 'Pesan orang tua bisa dibaca di sini. Balasan ditangani oleh admin.',
    'teacher.messageStudent': 'Pilih anak',
    'teacher.messageContact': 'Orang tua/wali',
    'teacher.messagePlaceholder': 'Tulis pesan untuk orang tua...',
    'teacher.messageSend': 'Kirim pesan',
    'modal.close': 'Tutup',
    'modal.addToPlan': '+ Tambahkan ke Planner',
    'modal.cancel': 'Batal',
    'modal.saveObs': 'Simpan Observasi (Catat)',
    'obsModal.subtitle': 'Formulir Pencatatan Indikator Perkembangan STEM',
    'obsModal.indicator': 'Indikator yang Diamati:',
    'obsModal.levelLabel': 'Tingkat Capaian (Montessori Mastery Scale):',
    'obsModal.anecdoteLabel': 'Catatan Anekdot & Kutipan Anak:',
    'obsModal.attachPhoto': 'Lampirkan Foto Hasil Karya',
    'obsModal.photoHelp': 'JPG, PNG, WebP, atau HEIC, maksimal 8 MB. Foto disimpan privat.',
    'obsModal.markHighlight': 'Tampilkan di Laporan Orang Tua',
    'addCurr.modalTitle': 'Tambah Unit Kurikulum Plego Baru',
    'addCurr.modalSubtitle': 'Integrasi langsung ke Jalur Pembelajaran & Database Lokal',
    'addCurr.submitBtn': 'Simpan Kurikulum',
    'addCurr.level': 'Level Jenjang:',
    'addCurr.semesterWeek': 'Semester & Pertemuan ke-:',
    'addCurr.bloomDomain': 'Taksonomi Bloom & Domain:',
    'addCurr.titleId': 'Judul Misi / Unit (Bahasa Indonesia):',
    'addCurr.titleEn': 'Judul Misi / Unit (Bahasa Inggris):',
    'addCurr.toolsId': 'Perangkat & Material:',
    'addCurr.canvaId': 'Link Canva Bahasa Indonesia:',
    'addCurr.canvaEn': 'Link Canva Bahasa Inggris:',
    'addCurr.eloId': 'Capaian Pembelajaran (Indonesia):',
    'addCurr.cancel': 'Batal',
    'addCurr.save': 'Simpan Kurikulum',
    'level.none': 'Belum Muncul',
    'level.emerging': 'Mulai Muncul',
    'level.developing': 'Berkembang',
    'level.mastered': 'Menguasai'
  },
  en: {
    'login.subtitle': 'Montessori STEM Platform · Sign In to Your Account',
    'login.email': 'Registered Email Address:',
    'login.password': 'Password:',
    'login.reset': 'Forgot password?',
    'login.btn': 'Sign In to Workspace',
    'login.quickDemo': '1-Click Quick Demo Access (Auto Role Detection):',
    'login.demoAdmin': 'Admin',
    'login.demoTutor': 'Tutor',
    'login.demoParent': 'Parent',
    'topbar.currentClass': 'Class view:',
    'nav.dashboard': 'Dashboard',
    'nav.manageAccounts': 'Manage Accounts',
    'nav.admins': 'Add Admin',
    'nav.tutorsTab': 'Add Tutor',
    'nav.curriculum': 'Plego Curriculum v3.2',
    'nav.activities': 'Activity Library',
    'nav.planner': 'Lesson Planner',
    'nav.observations': 'Observation & Checklist',
    'nav.studentReport': 'Learning Journal',
    'nav.parentPortal': 'Child Portfolio',
    'nav.parentActivities': 'Home Explorations',
    'nav.parentChat': 'Teacher Messages',
    'nav.logout': 'Sign Out (Logout)',
    'dash.cycle': 'Montessori Work Cycle 09:00 - 11:30',
    'dash.greeting': 'Good morning',
    'dash.subtitle': 'Schedules and observation summaries are loaded from the database.',
    'dash.quickLog': 'Log Observation',
    'dash.openPlanner': 'Open Planner',
    'dash.viewReport': 'Learning Journal',
    'parent.viewReport': 'Learning Journal',
    'report.pageTitle': 'Preview & Print Learning Journal',
    'report.pageSubtitle': 'Official STEM extracurricular development evaluation document',
    'report.back': 'Back',
    'report.backJournal': 'Back to Journal',
    'report.print': 'Print / Download PDF',
    'report.school': 'School:',
    'report.student': 'Student:',
    'report.semester': 'Semester:',
    'dash.addToday': 'Schedule Today',
    'metrics.children': 'All Children',
    'metrics.active': 'active registered',
    'metrics.lessons': 'Weekly Lessons',
    'metrics.delivered': 'delivered',
    'metrics.observations': 'Observations Logged',
    'metrics.fromYesterday': 'in the last 24 hours',
    'metrics.needsObservation': 'Needs Observation',
    'metrics.observationWindow': 'Not observed in 7 days',
    'metrics.databaseRecords': 'Across all classes',
    'metrics.needsReview': 'Awaiting review',
    'dash.todayTitle': 'Today\'s Exploration Schedule',
    'dash.todaySubtitle': 'Activities scheduled in the database',
    'dash.viewAllPlan': 'View Full Week →',
    'dash.attentionTitle': 'Needs Observation',
    'dash.attentionDesc': 'Children with no recorded observation in the last 7 days.',
    'dash.pedagogyTipTitle': 'Montessori Principle Today',
    'dash.pedagogyTipDesc': '"Never help a child with a task at which he feels he can succeed." — Maria Montessori.',
    'curr.title': 'Plego STEM & AI Tooling Path',
    'curr.subtitle': 'Progressive pathway from Preschool (Level 0) to Senior High with Bloom\'s Taxonomy & PLEGO Blocks',
    'curr.addBtn': '+ Add New Curriculum Unit',
    'curr.unitsHeading': 'Learning Pathway',
    'curr.semesterAll': 'All',
    'curr.semesterOdd': 'Odd',
    'curr.semesterEven': 'Even',
    'act.title': 'Activity Library & Exploration Guides',
    'act.subtitle': 'Ready-to-teach activities complete with local Indonesian materials & presentation sequences',
    'planner.weeklyTag': 'Lesson Planner',
    'planner.filterAll': 'All Schedules',
    'planner.filterMine': 'My Schedule',
    'planner.title': 'Learning Plan',
    'planner.subtitle': 'Plan activities, classes, and educators in one place.',
    'planner.today': 'Today',
    'planner.hint': 'Choose a day to view or add activities',
    'planner.view.day': 'Day',
    'planner.view.week': 'Week',
    'planner.view.month': 'Month',
    'planner.view.year': 'Year',
    'planner.print': 'Print PDF',
    'planner.todayBadge': 'TODAY',
    'planner.materialsTitle': 'Materials This Week',
    'planner.autoAggregated': 'From scheduled activities · saved automatically',
    'days.mon': 'Monday',
    'days.tue': 'Tuesday',
    'days.wed': 'Wednesday',
    'days.thu': 'Thursday',
    'days.fri': 'Friday',
    'obs.title': 'Observation Tool & STEM Milestones',
    'obs.subtitle': '3-tap observation workflow that honors the child’s spontaneous exploration rhythm',
    'obs.eyebrow': 'A space to grow',
    'obs.feedEyebrow': 'Learning journey',
    'obs.filterClass': 'Filter:',
    'obs.selectStudent': 'Select Child to Observe / Evaluate:',
    'obs.recentFeedTitle': 'Recent Observation Entries in Class B1',
    'obs.liveSynced': 'Synced with database',
    'parent.reportCycle': 'Your child’s learning journey and progress notes',
    'parent.reportEyebrow': 'Learning journal',
    'parent.previewStudent': 'Preview child',
    'parent.statObservations': 'Observation notes',
    'parent.statMastered': 'Milestones mastered',
    'parent.statClass': 'Learning environment',
    'parent.reflectionEyebrow': 'A note from the educator',
    'parent.databaseBadge': 'Saved records',
    'parent.progressEyebrow': 'Step by step',
    'parent.momentsEyebrow': 'Special moments',
    'parent.recentObservations': 'Recent learning journey',
    'parent.journeyEyebrow': 'Selected notes',
    'parent.gardenEyebrow': 'Growing together',
    'parent.gardenCaption': 'Every child grows at their own pace.',
    'parent.homeIdeaEyebrow': 'A simple idea at home',
    'parent.connectionEyebrow': 'Stay connected',
    'parent.downloadPdf': 'Download Portfolio (PDF)',
    'parent.summaryTitle': 'Educator Reflection Summary',
    'parent.approvedBadge': 'Teacher Approved',
    'parent.interestsTag': 'Prominent Interests:',
    'parent.domainProgress': 'Growth Across STEM Domains',
    'parent.masteryScale': 'Scale: Emerging ➔ Mastered',
    'parent.photoStripTitle': 'Learning Moment Highlights',
    'parent.plantTitle': 'Learning Garden',
    'parent.plantDesc': 'Every mastered milestone nurtures a new leaf of understanding',
    'parent.tryHomeTitle': 'Weekend At-Home Extension',
    'parent.homeActTitle': 'An idea from the curriculum',
    'parent.homeActDesc': 'Explore a simple learning activity together at home.',
    'parent.messageTitle': 'Message the Admin Team',
    'parent.messageRecipient': 'Your message will be sent directly to an administrator.',
    'parent.messagePlaceholder': 'Write a message to the admin team...',
    'parent.messageSend': 'Send message',
    'message.refresh': 'Refresh messages',
    'teacher.messageEyebrow': 'Stay connected with families',
    'teacher.messageTitle': 'Messages from Parents',
    'teacher.messageInbox': 'Recent messages from parents',
    'teacher.messageInboxSearch': 'Search parent or child name...',
    'teacher.messageBackToInbox': 'Back to inbox',
    'teacher.messageReplyHint': 'You can read parent messages here. Replies are handled by the admin team.',
    'teacher.messageStudent': 'Choose a child',
    'teacher.messageContact': 'Parent/guardian',
    'teacher.messagePlaceholder': 'Write a message to the parent...',
    'teacher.messageSend': 'Send message',
    'modal.close': 'Close',
    'modal.addToPlan': '+ Add to Weekly Planner',
    'modal.cancel': 'Cancel',
    'modal.saveObs': 'Save Observation Entry',
    'obsModal.subtitle': 'STEM Milestone & Anecdotal Record Form',
    'obsModal.indicator': 'Observed Indicator / Milestone:',
    'obsModal.levelLabel': 'Mastery Level (Montessori Scale):',
    'obsModal.anecdoteLabel': 'Anecdotal Observation & Child Quote:',
    'obsModal.attachPhoto': 'Attach Child Work Photo',
    'obsModal.photoHelp': 'JPG, PNG, WebP, or HEIC, up to 8 MB. Photos are stored privately.',
    'obsModal.markHighlight': 'Show in Parent Progress Report',
    'addCurr.modalTitle': 'Add New Plego Curriculum Unit',
    'addCurr.modalSubtitle': 'Direct integration into Learning Pathway & Local DB',
    'addCurr.submitBtn': 'Save Curriculum Unit',
    'addCurr.level': 'Level:',
    'addCurr.semesterWeek': 'Semester & Week:',
    'addCurr.bloomDomain': 'Bloom Taxonomy & Domain:',
    'addCurr.titleId': 'Unit Title (Indonesian):',
    'addCurr.titleEn': 'Unit Title (English):',
    'addCurr.toolsId': 'Tools & Materials:',
    'addCurr.canvaId': 'Canva Link (Indonesian):',
    'addCurr.canvaEn': 'Canva Link (English):',
    'addCurr.eloId': 'Learning Outcome (Indonesian):',
    'addCurr.cancel': 'Cancel',
    'addCurr.save': 'Save Curriculum',
    'level.none': 'Not Observed',
    'level.emerging': 'Emerging',
    'level.developing': 'Developing',
    'level.mastered': 'Mastered'
  }
};

function bText(obj, field) {
  if (!obj) return '';
  const fieldNames = {
    tools: { id: 'tools', en: 'tools' },
    elo: { id: 'elo', en: 'elo' },
    title: { id: 'title_id', en: 'title_en' },
  };
  const key = fieldNames[field]?.[state.lang] || `${field}_${state.lang}`;
  return obj[key] || (state.lang === 'en' ? obj[fieldNames[field]?.id || `${field}_id`] : '') || '';
}

function t(key) {
  return i18n[state.lang][key] || key;
}

/* =====================================================================
   3. AUTHENTICATION & AUTOMATIC ROLE DETECTION
   ===================================================================== */
function switchLoginTab(type) {
  const staffTab = document.getElementById('tab-login-staff');
  const parentTab = document.getElementById('tab-login-parent');
  const staffForm = document.getElementById('form-staff-login');
  const parentForm = document.getElementById('form-parent-login');

  if (!staffTab || !parentTab || !staffForm || !parentForm) return;

  if (type === 'parent') {
    staffTab.className = 'flex-1 py-2 rounded-xl text-xs font-bold transition flex items-center justify-center gap-1.5 text-forest-light hover:text-forest';
    parentTab.className = 'flex-1 py-2 rounded-xl text-xs font-bold transition flex items-center justify-center gap-1.5 bg-white text-forest shadow-soft';
    staffForm.classList.add('hidden');
    parentForm.classList.remove('hidden');
  } else {
    staffTab.className = 'flex-1 py-2 rounded-xl text-xs font-bold transition flex items-center justify-center gap-1.5 bg-white text-forest shadow-soft';
    parentTab.className = 'flex-1 py-2 rounded-xl text-xs font-bold transition flex items-center justify-center gap-1.5 text-forest-light hover:text-forest';
    parentForm.classList.add('hidden');
    staffForm.classList.remove('hidden');
  }
}

function normalizePhoneNumber(phone) {
  let cleaned = String(phone || '').replace(/[\s\-\(\)\.]/g, '');
  if (cleaned.startsWith('+62')) cleaned = '0' + cleaned.slice(3);
  else if (cleaned.startsWith('62')) cleaned = '0' + cleaned.slice(2);
  return cleaned;
}

async function handleParentLoginSubmit(e) {
  if (e && e.preventDefault) e.preventDefault();
  const phoneInput = document.getElementById('login-parent-phone').value.trim();
  const pinInput = document.getElementById('login-parent-pin').value.trim();

  if (!phoneInput || !pinInput) {
    showToast(state.lang === 'id' ? 'Masukkan nomor HP dan PIN Anda.' : 'Please enter your phone number and PIN.', '⚠️');
    return;
  }

  const cleanPhone = normalizePhoneNumber(phoneInput);
  const submitBtn = document.getElementById('login-parent-submit-btn');
  if (submitBtn) {
    submitBtn.disabled = true;
    submitBtn.textContent = state.lang === 'id' ? 'Memverifikasi...' : 'Verifying...';
  }

  try {
    // Query parents with joined relation to students, classes, and schools
    const { data: parentRows, error } = await sb
      .from('parents')
      .select(`
            id,
            parent_name,
            phone_number,
            pin,
            student_id,
            students (
              id,
              full_name,
              nickname,
              class_id,
              classes (
                id,
                name,
                school_id,
                schools (
                  id,
                  name
                )
              )
            )
          `)
      .or(`phone_number.eq.${cleanPhone},phone_number.eq.${phoneInput}`);

    if (error) throw error;

    if (!parentRows || parentRows.length === 0) {
      showToast(
        state.lang === 'id'
          ? 'Nomor HP tidak terdaftar. Pastikan nomor HP sesuai dengan yang didaftarkan pihak sekolah.'
          : 'Phone number is not registered. Please ensure it matches school records.',
        '⚠️'
      );
      return;
    }

    const validMatches = parentRows.filter(p => String(p.pin || '').trim() === pinInput);
    if (validMatches.length === 0) {
      showToast(
        state.lang === 'id'
          ? 'PIN salah. Silakan periksa kembali 4-6 digit PIN Anda.'
          : 'Incorrect PIN. Please recheck your PIN.',
        '⚠️'
      );
      return;
    }

    const parentName = validMatches[0].parent_name || 'Orang Tua Murid';
    const linkedStudents = [];
    const seenStudentIds = new Set();

    // 1. Process joined students from parents query
    validMatches.forEach(row => {
      const s = Array.isArray(row.students) ? row.students[0] : row.students;
      if (s && s.id && !seenStudentIds.has(s.id)) {
        seenStudentIds.add(s.id);
        const cls = Array.isArray(s.classes) ? s.classes[0] : s.classes;
        const sch = cls?.schools ? (Array.isArray(cls.schools) ? cls.schools[0] : cls.schools) : null;
        linkedStudents.push({
          id: s.id,
          name: s.full_name || 'Anak Plego',
          nickname: s.nickname || (s.full_name ? s.full_name.split(' ')[0] : 'Anak'),
          age: '—',
          classId: s.class_id || cls?.id || null,
          className: cls?.name || 'Kelas Montessori',
          schoolName: sch?.name || 'Sekolah Mitra Plego',
          lastObsDays: 0,
          needsAttention: false,
          _fromDB: true,
        });
      }
    });

    // 2. Fallback: if join returned null (e.g. pending RLS policy), query students table directly
    if (linkedStudents.length === 0) {
      const rawStudentIds = [...new Set(validMatches.map(p => p.student_id).filter(Boolean))];
      if (rawStudentIds.length > 0) {
        try {
          const { data: directStudents } = await sb
            .from('students')
            .select('id, full_name, nickname, class_id, school_id, classes(id, name, school_id, schools(id, name))')
            .in('id', rawStudentIds);

          if (directStudents && directStudents.length > 0) {
            directStudents.forEach(s => {
              if (s && s.id && !seenStudentIds.has(s.id)) {
                seenStudentIds.add(s.id);
                const cls = Array.isArray(s.classes) ? s.classes[0] : s.classes;
                const sch = cls?.schools ? (Array.isArray(cls.schools) ? cls.schools[0] : cls.schools) : null;
                linkedStudents.push({
                  id: s.id,
                  name: s.full_name || 'Anak Plego',
                  nickname: s.nickname || (s.full_name ? s.full_name.split(' ')[0] : 'Anak'),
                  age: '—',
                  classId: s.class_id || cls?.id || null,
                  className: cls?.name || 'Kelas Montessori',
                  schoolName: sch?.name || 'Sekolah Mitra Plego',
                  lastObsDays: 0,
                  needsAttention: false,
                  _fromDB: true,
                });
              }
            });
          }
        } catch (studentErr) {
          console.warn('[Supabase] direct student lookup warning:', studentErr);
        }
      }
    }

    // 3. Fallback: derive student profile from parent name so portal displays child profile immediately
    if (linkedStudents.length === 0) {
      validMatches.forEach(row => {
        const studentId = row.student_id || crypto.randomUUID();
        if (!seenStudentIds.has(studentId)) {
          seenStudentIds.add(studentId);
          let cleanName = (row.parent_name || '').replace(/^(mama|papa|ayah|bunda|ibu|bapak|umi|abi|orang\s*tua)\s+/i, '').trim();
          if (!cleanName) cleanName = 'Anak Plego';
          linkedStudents.push({
            id: studentId,
            name: cleanName,
            nickname: cleanName.split(' ')[0],
            age: '—',
            classId: null,
            className: 'Kelas Montessori',
            schoolName: 'Sekolah Mitra Plego',
            lastObsDays: 0,
            needsAttention: false,
            _fromDB: true,
          });
        }
      });
    }

    // Store into state immediately with standard application structure
    state.allStudents = linkedStudents;
    state.students = linkedStudents;
    state.previewStudentId = linkedStudents[0]?.id || null;
    state.databaseStatus.students = true;

    const childStudentIds = linkedStudents.map(s => s.id);

    executeLogin({
      id: validMatches[0].id,
      phone: validMatches[0].phone_number,
      name: parentName,
      role: 'parent',
      childStudentIds: childStudentIds,
      classInfo: state.lang === 'id' ? 'Orang Tua / Wali' : 'Parent / Guardian',
    });
  } catch (err) {
    console.error('[Supabase] parent login error:', err);
    showToast(`${state.lang === 'id' ? 'Gagal masuk' : 'Login failed'}: ${err.message || err}`, '⚠️');
  } finally {
    if (submitBtn) {
      submitBtn.disabled = false;
      submitBtn.innerHTML = `<span>${state.lang === 'id' ? 'Masuk ke Portal Portofolio' : 'Sign in to Parent Portal'}</span> <span>➔</span>`;
    }
  }
}
async function handleLoginSubmit(e) {
  e.preventDefault();
  const email = document.getElementById('login-email').value.trim().toLowerCase();
  const password = document.getElementById('login-password').value;

  if (!email || !password) return;
  try {
    const { data: authData, error: authError } = await sb.auth.signInWithPassword({ email, password });
    if (authError) throw authError;
    if (!authData?.user) throw new Error('Supabase Auth returned no user.');

    const userEmail = String(authData.user.email || email).toLowerCase();
    if (!state.admins || state.admins.length === 0) {
      await loadAdminsFromSupabase().catch(() => { });
    }
    if (isAdminEmail(userEmail)) {
      const { data: adminTutor, error: adminTutorError } = await sb.from('tutors')
        .select('id')
        .eq('email', userEmail)
        .maybeSingle();
      if (adminTutorError) throw adminTutorError;
      const adminName = ADMIN_IDENTITIES[userEmail] ||
        (state.admins || []).find(a => String(a.email || '').toLowerCase() === userEmail)?.full_name ||
        authData.user.user_metadata?.full_name ||
        'Administrator';
      executeLogin({
        id: authData.user.id,
        email: userEmail,
        name: adminName,
        role: 'admin',
        tutorId: adminTutor?.id || null,
        classInfo: state.lang === 'id' ? 'Administrator' : 'Administrator',
      });
      return;
    }

    const { data: parentRows, error: parentError } = await sb.from('parents')
      .select('student_id, parent_name')
      .eq('auth_id', authData.user.id);
    if (parentError) throw parentError;
    const childStudentIds = [...new Set((parentRows || []).map(parent => parent.student_id).filter(Boolean))];
    if (childStudentIds.length) {
      executeLogin({
        id: authData.user.id,
        email: userEmail,
        name: parentRows[0].parent_name || authData.user.user_metadata?.full_name || userEmail,
        role: 'parent',
        childStudentIds,
        classInfo: state.lang === 'id' ? 'Orang tua / wali' : 'Parent / guardian',
      });
      return;
    }

    const { data: tutor, error: tutorError } = await sb.from('tutors')
      .select('id, full_name, email')
      .eq('email', userEmail)
      .maybeSingle();
    if (tutorError) throw tutorError;
    if (tutor) {
      executeLogin({
        id: authData.user.id,
        email: userEmail,
        name: tutor.full_name,
        role: 'teacher',
        tutorId: tutor.id,
        classInfo: state.lang === 'id' ? 'Tutor Plego' : 'Plego tutor',
      });
      return;
    }

    const { error: signOutError } = await sb.auth.signOut();
    if (signOutError) throw signOutError;
    showToast(state.lang === 'id'
      ? 'Akun ini belum terhubung ke profil orang tua, tutor, atau administrator.'
      : 'This account is not linked to a parent, tutor, or administrator profile.', '⚠️');
  } catch (error) {
    console.warn('[Supabase] account login failed:', error);
    const { error: signOutError } = await sb.auth.signOut();
    if (signOutError) console.warn('[Supabase] sign-out after failed login failed:', signOutError);
    const errMsg = String(error.message || error || '');
    if (errMsg.toLowerCase().includes('email not confirmed')) {
      showToast(
        state.lang === 'id'
          ? 'Login gagal: Email belum dikonfirmasi di Supabase. Silakan konfirmasi akun di Supabase Dashboard (Auth > Users > titik tiga > Confirm email) atau matikan "Confirm email" di Auth > Providers > Email.'
          : 'Login failed: Email not confirmed. Please confirm this user in Supabase Dashboard.',
        '⚠️'
      );
    } else {
      showToast(
        `${state.lang === 'id' ? 'Login database gagal' : 'Database login failed'}: ${errMsg}`,
        '⚠️'
      );
    }
  }
}

window.quickLoginDemo = quickLoginDemo;
window.switchLoginTab = switchLoginTab;
window.handleParentLoginSubmit = handleParentLoginSubmit;
window.handleLoginSubmit = handleLoginSubmit;

async function quickLoginDemo(role) {
  if (role === 'parent') {
    switchLoginTab('parent');
    let demoPhone = '081234567890';
    let demoPin = '1234';
    try {
      const { data } = await sb.from('parents').select('phone_number, pin').limit(1);
      if (data && data.length > 0 && data[0].phone_number) {
        demoPhone = data[0].phone_number;
        demoPin = data[0].pin || '1234';
      }
    } catch (e) {
      console.warn('[Demo] fallback parent login:', e);
    }
    document.getElementById('login-parent-phone').value = demoPhone;
    document.getElementById('login-parent-pin').value = demoPin;
    await handleParentLoginSubmit({ preventDefault() { } });
    return;
  }

  switchLoginTab('staff');
  const account = Object.prototype.hasOwnProperty.call(DEMO_ACCOUNTS, role)
    ? DEMO_ACCOUNTS[role]
    : null;
  if (!account) {
    showToast(state.lang === 'id' ? 'Peran demo tidak dikenal.' : 'Unknown demo role.', '⚠️');
    return;
  }
  document.getElementById('login-email').value = account.email;
  document.getElementById('login-password').value = account.password;
  await handleLoginSubmit({ preventDefault() { } });
}

function showResetPasswordHelp() {
  showToast(state.lang === 'id'
    ? 'Hubungi administrator untuk mengatur ulang kata sandi.'
    : 'Contact an administrator to reset your password.', '🔑');
}

function togglePasswordVisibility(inputId = 'login-password', buttonEl = null) {
  const input = document.getElementById(inputId);
  if (!input) return;
  const toggle = buttonEl || input.parentElement?.querySelector('.password-toggle');
  const isVisible = input.type === 'text';

  input.type = isVisible ? 'password' : 'text';
  if (toggle) {
    toggle.setAttribute('aria-pressed', String(!isVisible));
    toggle.setAttribute('aria-label', isVisible ? 'Tampilkan kata sandi' : 'Sembunyikan kata sandi');
    const eyeOpen = toggle.querySelector('.password-eye-open');
    const eyeClosed = toggle.querySelector('.password-eye-closed');
    if (eyeOpen) eyeOpen.classList.toggle('hidden', !isVisible);
    if (eyeClosed) eyeClosed.classList.toggle('hidden', isVisible);
  }
}

function executeLogin(user) {
  state.currentUser = user;
  state.previewStudentId = null;
  document.getElementById('user-avatar').classList.add('hidden');
  document.getElementById('user-avatar-initials').textContent = getInitials(user.name);
  document.getElementById('user-display-name').textContent = user.name;
  document.getElementById('dropdown-full-name').textContent = user.name;
  document.getElementById('dropdown-role-label').textContent = user.classInfo;
  document.getElementById('dash-greeting-name').textContent = user.name.split(' ')[0];

  configureRolePrivacy(user.role);
  document.getElementById('auth-screen').classList.add('hidden');
  document.getElementById('app-wrapper').classList.remove('hidden');
  if (user.role === 'parent') {
    navigateTo('parentHub');
    loadAllFromSupabase().catch(error => {
      console.warn('[Supabase] parent data load failed:', error);
      showToast(`${state.lang === 'id' ? 'Gagal memuat data anak' : 'Could not load child data'}: ${error.message || error}`, '⚠️');
    });
    showToast(state.lang === 'id' ? `Masuk sebagai orang tua: ${user.name}` : `Signed in as parent: ${user.name}`, '👨‍👩‍👦');
  } else {
    navigateTo('dashboard');
    loadAllFromSupabase().catch(error => {
      console.warn('[Supabase] loadAllFromSupabase failed:', error);
      showToast(`${state.lang === 'id' ? 'Gagal memuat data' : 'Could not load data'}: ${error.message || error}`, '⚠️');
    });
    showToast(state.lang === 'id'
      ? `${user.role === 'admin' ? 'Masuk sebagai administrator' : 'Masuk sebagai tutor'}: ${user.name}`
      : `Signed in as ${user.role === 'admin' ? 'administrator' : 'tutor'}: ${user.name}`, '👋');
  }
}

function toggleProfileDropdown() {
  const drop = document.getElementById('profile-dropdown');
  drop.classList.toggle('hidden');
}

function handleBrandClick() {
  if (state.currentUser?.role === 'parent') {
    navigateTo('parentHub');
  } else {
    navigateTo('dashboard');
  }
}

/* Configure UI & Navbar based on User Role */
function configureRolePrivacy(role) {
  const nav = document.getElementById('app-nav');
  const contextBadge = document.getElementById('topbar-context-badge');
  const badgeAppMode = document.getElementById('badge-app-mode');

  if (role === 'parent') {
    contextBadge.classList.add('hidden');
    document.getElementById('parent-preview-picker-wrap').classList.add('hidden');
    badgeAppMode.textContent = state.lang === 'id' ? 'Portal Orang Tua' : 'Parent Portal';
    badgeAppMode.className = 'text-xs uppercase tracking-widest px-2.5 py-0.5 rounded-full bg-sunshine-light text-sunshine-dark font-bold';
    nav.innerHTML = `
          <button onclick="navigateTo('parentHub')" id="nav-parentHub" class="nav-item active border-b-2 border-sage text-sage px-4 py-3 flex items-center gap-2 whitespace-nowrap">
            <span>${t('nav.parentPortal')}</span>
          </button>
          <button onclick="navigateTo('studentReport')" id="nav-studentReport" class="nav-item border-b-2 border-transparent text-forest-light hover:text-forest px-4 py-3 flex items-center gap-1.5 whitespace-nowrap">
            <span>${t('nav.studentReport') || 'Jurnal Belajar'}</span>
          </button>`;
  } else {
    contextBadge.classList.remove('hidden');
    document.getElementById('parent-preview-picker-wrap').classList.remove('hidden');
    document.getElementById('parent-preview-picker-wrap').classList.add('md:flex');
    badgeAppMode.textContent = role === 'admin'
      ? (state.lang === 'id' ? 'Administrator' : 'Administrator')
      : (state.lang === 'id' ? 'Ruang Tutor' : 'Tutor Workspace');
    badgeAppMode.className = `text-xs uppercase tracking-widest px-2 py-0.5 rounded-full ${role === 'admin' ? 'bg-sage/15 text-sage-700' : 'bg-sand-200 text-forest'} font-bold`;

    const adminNavItems = role === 'admin' ? `
          <button onclick="navigateTo('adminManagement')" id="nav-adminManagement" class="nav-item border-b-2 border-transparent text-forest-light hover:text-forest px-4 py-3 flex items-center gap-1.5 whitespace-nowrap">
            <span data-i18n="nav.manageAccounts">${t('nav.manageAccounts') || 'Kelola Akun'}</span>
          </button>` : '';

    nav.innerHTML = `
          <button onclick="navigateTo('dashboard')" id="nav-dashboard" class="nav-item active border-b-2 border-sage text-sage px-4 py-3 flex items-center gap-2 whitespace-nowrap"><span>${t('nav.dashboard')}</span></button>
          <button onclick="navigateTo('curriculum')" id="nav-curriculum" class="nav-item border-b-2 border-transparent text-forest-light hover:text-forest px-4 py-3 flex items-center gap-2 whitespace-nowrap"><span>${t('nav.curriculum')}</span></button>
          <button onclick="navigateTo('planner')" id="nav-planner" class="nav-item border-b-2 border-transparent text-forest-light hover:text-forest px-4 py-3 flex items-center gap-2 whitespace-nowrap"><span>${t('nav.planner')}</span></button>
          <button onclick="navigateTo('observations')" id="nav-observations" class="nav-item border-b-2 border-transparent text-forest-light hover:text-forest px-4 py-3 flex items-center gap-2 whitespace-nowrap"><span>${t('nav.observations')}</span></button>
          <button onclick="navigateTo('studentReport')" id="nav-studentReport" class="nav-item border-b-2 border-transparent text-forest-light hover:text-forest px-4 py-3 flex items-center gap-1.5 whitespace-nowrap"><span>${t('nav.studentReport') || 'Jurnal Belajar'}</span></button>
          ${adminNavItems}`;

    document.querySelector('#view-curriculum [onclick="openAddCurriculumModal()"]')
      ?.classList.toggle('hidden', role !== 'admin');

    const quickManage = document.getElementById('admin-quick-manage-btn');
    if (quickManage) quickManage.classList.toggle('hidden', role !== 'admin');
  }
}
async function logout() {
  const { error } = await sb.auth.signOut();
  if (error) {
    console.warn('[Supabase] sign out failed:', error);
    showToast(`${state.lang === 'id' ? 'Gagal keluar' : 'Could not sign out'}: ${error.message || error}`, '⚠️');
    return;
  }
  state.currentUser = null;
  state.previewStudentId = null;
  document.getElementById('profile-dropdown').classList.add('hidden');
  document.getElementById('app-wrapper').classList.add('hidden');
  document.getElementById('auth-screen').classList.remove('hidden');
  document.getElementById('login-email').value = '';
  document.getElementById('login-password').value = '';
  document.getElementById('user-avatar').classList.add('hidden');
  document.getElementById('user-avatar-initials').textContent = 'PL';
  showToast(state.lang === 'id' ? 'Anda telah berhasil keluar.' : 'Signed out successfully.', '🔒');
}

/*
      <button onclick="navigateTo('dashboard')" id="nav-dashboard" class="nav-item active border-b-2 border-sage text-sage px-4 py-3 flex items-center gap-2 whitespace-nowrap">
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"/></svg>
        <span data-i18n="nav.dashboard">Beranda Guru</span>
      </button>
      <button onclick="navigateTo('curriculum')" id="nav-curriculum" class="nav-item border-b-2 border-transparent text-forest-light hover:text-forest px-4 py-3 flex items-center gap-2 whitespace-nowrap">
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/></svg>
        <span data-i18n="nav.curriculum">Kurikulum Plego v3.2</span>
      </button>
      <button onclick="navigateTo('planner')" id="nav-planner" class="nav-item border-b-2 border-transparent text-forest-light hover:text-forest px-4 py-3 flex items-center gap-2 whitespace-nowrap">
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>
        <span data-i18n="nav.planner">Perencana Pembelajaran</span>
      </button>
      <button onclick="navigateTo('observations')" id="nav-observations" class="nav-item border-b-2 border-transparent text-forest-light hover:text-forest px-4 py-3 flex items-center gap-2 whitespace-nowrap">
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
        <span data-i18n="nav.observations">Observasi & Ceklis</span>
      </button>
      <button onclick="navigateTo('parentHub')" id="nav-parentHub" class="nav-item border-b-2 border-transparent text-forest-light hover:text-forest px-4 py-3 flex items-center gap-2 whitespace-nowrap">
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/></svg>
        <span data-i18n="nav.parentPortal">Portofolio Anak</span>
      </button>
    `;
  }
}

function scrollParentSection(type) {
  if (type === 'try-home') {
    window.scrollTo({ top: 400, behavior: 'smooth' });
  } else {
    window.scrollTo({ top: 800, behavior: 'smooth' });
  }
}
*/

/* =====================================================================
   4. LANGUAGE SWITCHER (EN / ID)
   ===================================================================== */
function setLanguage(lang) {
  state.lang = lang;

  const btnId = document.getElementById('btn-lang-id');
  const btnEn = document.getElementById('btn-lang-en');
  if (lang === 'id') {
    btnId.className = 'px-2.5 py-1 rounded-full transition-all duration-200 bg-sage text-white shadow-sm';
    btnEn.className = 'px-2.5 py-1 rounded-full transition-all duration-200 text-forest hover:text-sage';
  } else {
    btnEn.className = 'px-2.5 py-1 rounded-full transition-all duration-200 bg-sage text-white shadow-sm';
    btnId.className = 'px-2.5 py-1 rounded-full transition-all duration-200 text-forest hover:text-sage';
  }

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (i18n[lang][key]) {
      el.textContent = i18n[lang][key];
    }
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.dataset.i18nPlaceholder;
    if (i18n[lang][key]) el.setAttribute('placeholder', i18n[lang][key]);
  });
  document.querySelectorAll('[data-i18n-aria-label]').forEach(el => {
    const key = el.dataset.i18nAriaLabel;
    if (i18n[lang][key]) el.setAttribute('aria-label', i18n[lang][key]);
  });

  updateCurriculumFormLanguage();
  if (state.currentUser) {
    configureRolePrivacy(state.currentUser.role);
    const activeNavId = (state.currentView === 'adminManagement')
      ? 'nav-adminManagement'
      : `nav-${state.currentView}`;
    const activeBtn = document.getElementById(activeNavId);
    if (activeBtn) {
      document.querySelectorAll('.nav-item').forEach(btn => {
        btn.classList.remove('border-sage', 'text-sage');
        btn.classList.add('border-transparent', 'text-forest-light');
      });
      activeBtn.classList.remove('border-transparent', 'text-forest-light');
      activeBtn.classList.add('border-sage', 'text-sage');
    }
  }
  renderView();
  if (state.selectedActivity && !document.getElementById('modal-activity').classList.contains('hidden')) {
    openCurriculumGuide(state.selectedActivity.id);
  }
  if (!document.getElementById('modal-observation').classList.contains('hidden')) {
    const selectedMilestone = document.querySelector('#obs-milestone-select option:checked')?.dataset.unitId;
    renderObservationMilestones(selectedMilestone);
    document.getElementById('obs-modal-student-name').textContent =
      `${lang === 'id' ? 'Observasi' : 'Observation'}: ${state.selectedStudentForObs?.name || ''}`;
  }
  showToast(lang === 'id' ? 'Bahasa beralih ke Bahasa Indonesia' : 'Language switched to English', '🌐');
}

function updateCurriculumFormLanguage() {
  const translations = {
    level: {
      'level-0': ['Level 0 - Green (Preschool - PLEGO Blocks)', 'Level 0 - Hijau (PAUD - PLEGO Blocks)'],
      'level-1': ['Level 1 - Yellow (Grades 1–3 Precoding)', 'Level 1 - Kuning (SD 1–3 Precoding)'],
      'level-2': ['Level 2 - Red (Grades 4–5 Micro:bit + AI)', 'Level 2 - Merah (SD 4–5 Micro:bit + AI)'],
      'level-3': ['Level 3 - Blue (Middle School Text Coding/IoT)', 'Level 3 - Biru (SMP Text Coding/IoT)'],
    },
    bloom: {
      Remembering: ['Remembering', 'Mengingat'],
      Understanding: ['Understanding', 'Memahami'],
      Applying: ['Applying', 'Menerapkan'],
      Analyzing: ['Analyzing', 'Menganalisis'],
      Creating: ['Creating', 'Mencipta'],
    },
    domain: {
      science: ['Science', 'Sains'],
      technology: ['Technology / Precoding', 'Teknologi / Precoding'],
      engineering: ['Engineering', 'Rekayasa'],
      math: ['Math', 'Matematika'],
    },
  };
  ['level', 'bloom', 'domain'].forEach(group => {
    const select = document.getElementById(`new-curr-${group}`);
    if (!select) return;
    [...select.options].forEach(option => {
      const label = translations[group][option.value];
      if (label) option.textContent = label[state.lang === 'en' ? 0 : 1];
    });
  });
  const semester = document.getElementById('new-curr-semester');
  if (semester) {
    semester.options[0].textContent = state.lang === 'id' ? 'Gasal' : 'Odd';
    semester.options[1].textContent = state.lang === 'id' ? 'Genap' : 'Even';
  }
}

function renderObservationMilestones(selectedUnitId) {
  const milestoneSelect = document.getElementById('obs-milestone-select');
  const milestones = state.curriculumData.filter(item => item._fromDB);
  const placeholder = `<option value="" disabled selected>${state.lang === 'id' ? 'Pilih indikator yang diamati...' : 'Choose an observation indicator...'}</option>`;
  milestoneSelect.innerHTML = placeholder + milestones.map(item => {
    const title = bText(item, 'title');
    return title
      ? `<option value="${escapeHTML(title)}" data-unit-id="${escapeHTML(item.id)}">${escapeHTML(title)}</option>`
      : '';
  }).join('');
  if (selectedUnitId) {
    const selectedOption = [...milestoneSelect.options].find(option => option.dataset.unitId === selectedUnitId);
    if (selectedOption) milestoneSelect.value = selectedOption.value;
  }
  if (!milestones.some(item => bText(item, 'title'))) {
    milestoneSelect.innerHTML = `<option value="" disabled selected>${state.lang === 'id' ? 'Indikator belum tersedia dalam bahasa ini' : 'No indicators are available in this language'}</option>`;
  }
  enhanceSearchableSelect(milestoneSelect);
}

/* =====================================================================
   5. VIEW CONTROLLER WITH STRICT PRIVACY CHECKS
   ===================================================================== */
function navigateTo(viewName) {
  // PRIVACY BOUNDARY ENFORCEMENT:
  // If user is parent, allow parentHub and official studentReport.
  if (state.currentUser?.role === 'parent' && viewName !== 'parentHub' && viewName !== 'studentReport') {
    viewName = 'parentHub';
    showToast('Akses dibatasi untuk akun orang tua', '🔒');
  }

  if (viewName === 'admins' || viewName === 'tutors') {
    switchAdminTab(viewName);
    return;
  }
  if (viewName === 'adminManagement') {
    switchAdminTab(state.adminTab || 'admins');
    return;
  }

  state.currentView = viewName;
  document.getElementById('profile-dropdown')?.classList.add('hidden');

  ['dashboard', 'curriculum', 'planner', 'observations', 'parentHub', 'adminManagement', 'studentReport'].forEach(v => {
    const el = document.getElementById(`view-${v}`);
    if (el) el.classList.add('hidden');
  });

  const activeEl = document.getElementById(`view-${viewName}`);
  if (activeEl) activeEl.classList.remove('hidden');

  document.querySelectorAll('.nav-item').forEach(btn => {
    btn.classList.remove('border-sage', 'text-sage');
    btn.classList.add('border-transparent', 'text-forest-light');
  });
  const activeBtn = document.getElementById(`nav-${viewName}`);
  if (activeBtn) {
    activeBtn.classList.remove('border-transparent', 'text-forest-light');
    activeBtn.classList.add('border-sage', 'text-sage');
  }

  renderView();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function renderView() {
  switch (state.currentView) {
    case 'dashboard': renderDashboard(); break;
    case 'curriculum': renderCurriculum(); break;
    case 'planner': renderPlanner(); break;
    case 'observations': renderObservations(); break;
    case 'parentHub': renderParentHub(); break;
    case 'studentReport': renderStudentReport(); break;
  }
}

/* =====================================================================
   6. CORE FLOW RENDERERS
   ===================================================================== */

/* FLOW 1: DASHBOARD */
function renderDashboard() {
  const scheduleContainer = document.getElementById('dashboard-schedule-container');
  const attentionList = document.getElementById('attention-list');
  const currentDate = new Date();
  const todayKey = toLocalDateKey(currentDate);
  document.getElementById('dashboard-schedule-subtitle').textContent =
    `${currentDate.toLocaleDateString(state.lang === 'id' ? 'id-ID' : 'en-US', {
      weekday: 'long',
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    })} · ${state.activeClassId
      ? state.classes.find(classItem => classItem.id === state.activeClassId)?.name || ''
      : (state.lang === 'id' ? 'Semua kelas' : 'All classes')}`;
  const todayLessons = state.scheduleItems.filter(item => item.date === todayKey);
  todayLessons.sort((left, right) => (left.time || '').localeCompare(right.time || ''));
  const studentsReady = state.databaseStatus.students;
  const scheduleReady = state.databaseStatus.schedule;
  const observationsReady = state.databaseStatus.observations;
  const dashboardStudents = state.students;
  const needingObs = studentsReady && observationsReady
    ? dashboardStudents.filter(student => student.needsAttention)
    : [];

  const weekStart = new Date(currentDate);
  weekStart.setHours(0, 0, 0, 0);
  weekStart.setDate(weekStart.getDate() - ((weekStart.getDay() + 6) % 7));
  const weekEnd = new Date(weekStart);
  weekEnd.setDate(weekEnd.getDate() + 7);
  const weeklyLessons = state.scheduleItems.filter(item => {
    const date = new Date(`${item.date}T00:00:00`);
    return date >= weekStart && date < weekEnd;
  });
  const deliveredLessons = weeklyLessons.filter(item => isScheduleCompleted(item, todayKey));
  document.getElementById('dashboard-student-count').textContent =
    studentsReady ? String(dashboardStudents.length) : '—';
  document.querySelector('[data-i18n="metrics.children"]').textContent = state.activeClassId
    ? (state.lang === 'id' ? 'Anak di Kelas' : 'Children in Class')
    : i18n[state.lang]['metrics.children'];
  document.querySelector('[data-i18n="metrics.databaseRecords"]').textContent = state.activeClassId
    ? (state.lang === 'id' ? 'Di kelas terpilih' : 'In selected class')
    : i18n[state.lang]['metrics.databaseRecords'];
  document.getElementById('dashboard-weekly-schedule-count').textContent =
    scheduleReady ? String(weeklyLessons.length) : '—';
  document.getElementById('dashboard-weekly-schedule-done').textContent =
    scheduleReady ? `${deliveredLessons.length}/${weeklyLessons.length}` : '—';
  document.getElementById('dashboard-observation-count').textContent =
    observationsReady ? String(state.databaseObservationCount) : '—';
  document.getElementById('dashboard-observation-recent').textContent =
    observationsReady ? `+${state.databaseRecentObservationCount}` : '—';
  document.getElementById('dashboard-needs-observation-count').textContent =
    studentsReady && observationsReady ? String(needingObs.length) : '—';
  document.getElementById('dashboard-needs-observation-badge').textContent =
    studentsReady && observationsReady
      ? `${needingObs.length} ${state.lang === 'id' ? 'Anak' : 'Children'}`
      : '—';

  const summary = document.getElementById('dashboard-summary');
  if (scheduleReady && studentsReady && observationsReady) {
    summary.textContent = state.lang === 'id'
      ? `Hari ini ada ${todayLessons.length} aktivitas terjadwal. ${needingObs.length} anak belum diobservasi dalam 7 hari.`
      : `${todayLessons.length} activities are scheduled today. ${needingObs.length} children have not been observed in 7 days.`;
  } else {
    summary.textContent = state.lang === 'id'
      ? 'Sebagian data dashboard belum tersedia dari database. Periksa koneksi dan izin Supabase.'
      : 'Some dashboard data is unavailable from the database. Check the Supabase connection and permissions.';
  }

  scheduleContainer.innerHTML = scheduleReady
    ? (todayLessons.length ? todayLessons.slice(0, 6).map(item => {
      const domainColor = getDomainColor(item.domain || 'science');
      return `
          <div class="flex items-center justify-between p-3.5 rounded-2xl bg-sand-50 border border-sand-200 hover:border-sage transition garden-interactive-btn">
            <div class="flex items-center gap-3">
              <span class="text-xs font-bold font-mono px-2 py-1 rounded-lg bg-cream border border-sand-200 text-forest">${escapeHTML(item.time || '—')}</span>
              <div class="w-2.5 h-8 rounded-full ${domainColor.bg}"></div>
              <div>
                <h4 class="font-bold text-sm text-forest">${escapeHTML(
        bText(state.curriculumData.find(activity => activity.id === item.curriculumUnitId), 'title') ||
        (state.lang === 'id' ? 'Aktivitas STEM' : 'Title not provided')
      )}</h4>
                <p class="text-xs text-forest-light">${escapeHTML([item.tutorName, item.assistantTutorName].filter(Boolean).join(' · ') || domainColor.label)}${item.className ? ` · ${escapeHTML(item.className)}` : ''}</p>
              </div>
            </div>
            <div class="flex items-center gap-2">
              ${item.curriculumUnitId ? `<button data-guide-curriculum="${escapeHTML(item.curriculumUnitId)}" class="text-xs font-semibold px-3 py-1.5 rounded-full bg-cream hover:bg-white text-forest border border-sand-200 transition">${state.lang === 'id' ? 'Panduan' : 'Guide'}</button>` : ''}
              ${state.students.length ? `<button data-observe-student="${escapeHTML(state.students[0].id)}" class="text-xs font-bold px-3 py-1.5 rounded-full bg-sage hover:bg-sage-600 text-white shadow-sm transition">${state.lang === 'id' ? 'Catat' : 'Observe'}</button>` : ''}
            </div>
          </div>
        `;
    }).join('') : `<p class="text-xs text-forest-light py-4 text-center">${state.lang === 'id' ? 'Tidak ada aktivitas terjadwal hari ini.' : 'No activities scheduled today.'}</p>`)
    : `<p class="text-xs text-forest-light py-4 text-center">${state.lang === 'id' ? 'Jadwal belum dapat dimuat dari database.' : 'Could not load the schedule from the database.'}</p>`;
  scheduleContainer.querySelectorAll('[data-guide-curriculum]').forEach(button => {
    button.addEventListener('click', () => openCurriculumGuide(button.dataset.guideCurriculum));
  });
  scheduleContainer.querySelectorAll('[data-observe-student]').forEach(button => {
    button.addEventListener('click', () => openObservationModal(button.dataset.observeStudent));
  });

  attentionList.innerHTML = studentsReady && observationsReady
    ? (needingObs.length ? needingObs.slice(0, 5).map(s => `
        <div class="flex items-center justify-between p-2.5 rounded-2xl bg-sand-50 border border-sand-200">
          <div class="flex items-center gap-2.5">
            <span class="w-9 h-9 rounded-full bg-sage-50 text-sage border border-sand-300 grid place-items-center text-[10px] font-bold">${escapeHTML(getInitials(s.name))}</span>
            <div>
              <p class="font-bold text-xs text-forest">${escapeHTML(s.name)}</p>
              <p class="text-[10px] text-terracotta font-semibold">${s.lastObsDays === null ? (state.lang === 'id' ? 'Belum pernah diamati' : 'Never observed') : `${s.lastObsDays} ${state.lang === 'id' ? 'hari lalu' : 'days ago'}`}</p>
            </div>
          </div>
          <button data-observe-student="${escapeHTML(s.id)}" class="text-xs font-bold px-3 py-1 rounded-full bg-terracotta text-white hover:bg-terracotta-dark transition">
            + ${state.lang === 'id' ? 'Amati' : 'Log'}
          </button>
        </div>
      `).join('') + (needingObs.length > 5
        ? `<button type="button" onclick="navigateTo('observations')" class="w-full rounded-xl border border-sand-200 bg-white/70 py-2 text-xs font-bold text-sage-700 hover:bg-sage-50">${state.lang === 'id' ? `Lihat ${needingObs.length - 5} anak lainnya` : `View ${needingObs.length - 5} more children`}</button>`
        : '') : `<p class="text-xs text-forest-light py-4 text-center">${state.lang === 'id' ? 'Semua anak sudah diobservasi dalam 7 hari terakhir.' : 'All children have been observed in the last 7 days.'}</p>`)
    : `<p class="text-xs text-forest-light py-4 text-center">${state.lang === 'id' ? 'Data observasi belum dapat dimuat dari database.' : 'Could not load observations from the database.'}</p>`;
  attentionList.querySelectorAll('[data-observe-student]').forEach(button => {
    button.addEventListener('click', () => openObservationModal(button.dataset.observeStudent));
  });
  renderTeacherMessageWidget();
}

function toLocalDateKey(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

function isScheduleCompleted(item, todayKey = toLocalDateKey(new Date())) {
  const status = String(item.status || '').toLowerCase();
  return ['delivered', 'completed', 'done'].includes(status) ||
    Boolean(item.date && item.date < todayKey);
}

function openTodaySchedule() {
  state.plannerDate = new Date();
  navigateTo('planner');
  openScheduleSlotModal(toLocalDateKey(state.plannerDate));
}

function normalizeDateKey(value) {
  const dateValue = String(value || '');
  if (/^\d{4}-\d{2}-\d{2}$/.test(dateValue)) return dateValue;
  const date = new Date(dateValue);
  return Number.isNaN(date.getTime()) ? '' : toLocalDateKey(date);
}

function readScheduleMetadata(notes) {
  const prefix = 'PLEGO_META:';
  if (!String(notes || '').startsWith(prefix)) return {};
  try {
    const metadata = JSON.parse(String(notes).slice(prefix.length));
    return {
      time: typeof metadata.time === 'string' ? metadata.time : '',
      block: typeof metadata.block === 'string' ? metadata.block : '',
    };
  } catch (error) {
    console.warn('[Supabase] Invalid schedule metadata:', error);
    return {};
  }
}

function escapeHTML(value) {
  return String(value ?? '').replace(/[&<>"']/g, character => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;',
  })[character]);
}

function safeHttpsUrl(value) {
  try {
    const url = new URL(String(value || ''));
    return url.protocol === 'https:' ? url.href : '';
  } catch {
    return '';
  }
}

function getInitials(name) {
  return String(name || '').split(/\s+/).filter(Boolean).slice(0, 2).map(part => part[0]).join('').toUpperCase();
}

/* FLOW 2: CURRICULUM BROWSER */
function renderCurriculum() {
  const container = document.getElementById('curriculum-units-container');
  const tloBanner = document.getElementById('level-tlo-banner');
  const searchInput = document.getElementById('curriculum-search');
  searchInput.placeholder = state.lang === 'id'
    ? 'Cari aktivitas, perangkat, atau capaian...'
    : 'Search activities, tools, or learning outcomes...';
  searchInput.setAttribute('aria-label', state.lang === 'id' ? 'Cari unit kurikulum' : 'Search curriculum units');
  searchInput.value = state.curriculumSearch;

  const tloMap = {
    'level-0': {
      title: state.lang === 'id'
        ? 'Level 0 - Green (Preschool – Precoding, PLEGO Blocks)'
        : 'Level 0 - Green (Preschool – Precoding, PLEGO Blocks)',
      tlo_id: 'Di akhir level, peserta didik mampu memahami konsep sebab-akibat dari hubungan input–output menggunakan sensor dan aktuator PLEGO Blocks, serta membangun prototipe sederhana yang menumbuhkan problem solving dan kolaborasi dasar.',
      tlo_en: 'Learners understand cause-and-effect relationships of input-output using PLEGO Blocks sensors and actuators, constructing prototypes that foster early problem-solving.'
    },
    'level-1': {
      title: state.lang === 'id'
        ? 'Level 1 - Yellow (SD kelas 1–3 – Precoding + Block Coding)'
        : 'Level 1 - Yellow (Elementary Grades 1–3 – Precoding + Block Coding)',
      tlo_id: 'Mampu merancang alur logika sederhana dengan block coding untuk mengendalikan sensor dan aktuator PLEGO Blocks, serta menghasilkan robot mini yang merespons perintah dasar.',
      tlo_en: 'Able to design simple logic flows with block coding to command PLEGO Blocks sensors and actuators, creating mini robot projects that respond to basic instructions.'
    },
    'level-2': {
      title: state.lang === 'id'
        ? 'Level 2 - Red (SD kelas 4–5 – Block Coding + Integrasi AI, Micro:bit)'
        : 'Level 2 - Red (Elementary Grades 4–5 – Block Coding + AI Integration, Micro:bit)',
      tlo_id: 'Mampu memprogram robot berbasis Micro:bit dengan sensor kompleks dan mengintegrasikan model AI sederhana (Teachable Machine) ke dalam sistem.',
      tlo_en: 'Able to program Micro:bit robots with complex sensors and integrate simple AI classification models (Teachable Machine) into the hardware system.'
    },
    'level-3': {
      title: state.lang === 'id'
        ? 'Level 3 - Blue (SMP – Text-based Coding + AI Tooling, ESP32)'
        : 'Level 3 - Blue (Middle School – Text-based Coding + AI Tools, ESP32)',
      tlo_id: 'Mampu memprogram perangkat keras menggunakan Python/C++, menghubungkannya dengan API AI sederhana, serta merancang sistem robot/IoT yang mengambil keputusan berbasis data.',
      tlo_en: 'Able to program hardware using Python/C++, connect to AI APIs, and design IoT systems making data-driven decisions.'
    }
  };

  const currTlo = tloMap[state.selectedCurriculumLevel];
  tloBanner.innerHTML = `
        <div class="curriculum-tlo-icon" aria-hidden="true">✦</div>
        <div class="min-w-0">
          <span class="curriculum-eyebrow">${state.lang === 'id' ? 'TUJUAN PEMBELAJARAN LEVEL' : 'LEVEL LEARNING OUTCOME'}</span>
          <h2 class="font-heading font-bold text-forest text-base md:text-lg mt-1">${escapeHTML(currTlo.title)}</h2>
          <p class="text-forest-light leading-relaxed mt-2">${escapeHTML(state.lang === 'id' ? currTlo.tlo_id : currTlo.tlo_en)}</p>
        </div>
        <span class="curriculum-tlo-spark" aria-hidden="true">🌱</span>
      `;

  const searchTerm = state.curriculumSearch.trim().toLocaleLowerCase();
  document.querySelectorAll('[data-level-count]').forEach(badge => {
    const count = state.curriculumData.filter(item => item.level === badge.dataset.levelCount).length;
    badge.textContent = count;
  });
  const filtered = state.curriculumData.filter(item => {
    const matchLevel = item.level === state.selectedCurriculumLevel;
    const matchSemester = state.selectedCurriculumSemester === 'all' || item.semester === state.selectedCurriculumSemester;
    const searchableText = [
      bText(item, 'title'), bText(item, 'tools'), bText(item, 'elo'), item.domain, item.bloom, item.semester, item.week,
    ].filter(Boolean).join(' ').toLocaleLowerCase();
    return matchLevel && matchSemester && (!searchTerm || searchableText.includes(searchTerm));
  });

  const resultCount = document.getElementById('curriculum-result-count');
  resultCount.textContent = `${filtered.length} ${state.lang === 'id' ? 'unit ditemukan' : 'units found'}`;

  if (filtered.length === 0) {
    container.innerHTML = `
          <div class="curriculum-empty col-span-full">
            <span class="text-3xl" aria-hidden="true">🌿</span>
            <h3 class="font-heading font-bold text-forest mt-3">${state.lang === 'id' ? 'Belum ada unit yang cocok' : 'No matching units yet'}</h3>
            <p class="text-sm text-forest-light mt-1">${state.lang === 'id' ? 'Coba kata kunci atau filter semester yang berbeda.' : 'Try a different search term or semester filter.'}</p>
          </div>
        `;
    return;
  }

  container.innerHTML = filtered.map(item => {
    const dColor = getDomainColor(item.domain || 'engineering');
    const bloomBadge = getBloomBadge(item.bloom);
    const title = bText(item, 'title') || (state.lang === 'id' ? 'Judul belum tersedia' : 'Title not provided');
    const tools = bText(item, 'tools') || (state.lang === 'id' ? 'Belum ada perangkat' : 'No materials listed');
    const elo = bText(item, 'elo') || (state.lang === 'id' ? 'Capaian pembelajaran belum ditambahkan.' : 'No learning outcome listed.');
    const semester = item.semester === 'Gasal'
      ? (state.lang === 'id' ? 'Gasal' : 'Odd semester')
      : item.semester === 'Genap'
        ? (state.lang === 'id' ? 'Genap' : 'Even semester')
        : item.semester;
    const domainIcon = {
      science: '🔬',
      technology: '⚙️',
      engineering: '🧩',
      mathematics: '🔢',
      art: '🎨',
    }[String(item.domain || '').toLowerCase()] || '🌱';
    return `
          <article class="curriculum-unit-card garden-card-hover group">
            <div class="curriculum-card-top">
              <span class="curriculum-domain-icon" aria-hidden="true">${domainIcon}</span>
              <div class="flex flex-wrap items-center justify-end gap-1.5">
                <span class="curriculum-meta-pill">${state.lang === 'id' ? `Minggu ${escapeHTML(item.week ?? '—')}` : `Week ${escapeHTML(item.week ?? '—')}`}</span>
                <span class="curriculum-meta-pill">${escapeHTML(semester || '—')}</span>
              </div>
            </div>

            <div class="flex flex-wrap items-center gap-2 mt-4">
              <span class="curriculum-domain-label ${dColor.textColor}">${escapeHTML(dColor.label)}</span>
              <span class="text-[10px] font-bold px-2 py-0.5 rounded-full ${bloomBadge.bg} ${bloomBadge.text}">${escapeHTML(getBloomLabel(item.bloom) || '—')}</span>
            </div>

            <h3 class="font-heading font-bold text-forest text-lg leading-snug mt-3 group-hover:text-sage transition">
              ${escapeHTML(title)}
            </h3>

            <div class="curriculum-tools mt-4">
              <span class="curriculum-eyebrow">${state.lang === 'id' ? 'PERANGKAT EKSPLORASI' : 'EXPLORATION TOOLS'}</span>
              <p class="text-xs font-semibold text-forest mt-1 leading-relaxed">${escapeHTML(tools)}</p>
            </div>

            <div class="mt-4">
              <span class="curriculum-eyebrow">${state.lang === 'id' ? 'CAPAIAN PEMBELAJARAN' : 'LEARNING OUTCOME'}</span>
              <p class="text-xs text-forest-light leading-relaxed mt-1">${escapeHTML(elo)}</p>
            </div>

            <div class="mt-auto pt-5">
              <div class="curriculum-card-actions">
                <button type="button" data-guide-curriculum="${escapeHTML(item.id)}" class="curriculum-guide-btn garden-interactive-btn">
                  <span aria-hidden="true">📖</span> <span>${state.lang === 'id' ? 'Panduan' : 'Guide'}</span>
                </button>
                <button type="button" data-schedule-curriculum="${escapeHTML(item.id)}" class="curriculum-schedule-btn garden-interactive-btn">
                  <span>＋</span> <span>${state.lang === 'id' ? 'Jadwalkan' : 'Schedule'}</span>
                </button>
              </div>
            </div>
          </article>
        `;
  }).join('');
  container.querySelectorAll('[data-guide-curriculum]').forEach(button => {
    button.addEventListener('click', () => openCurriculumGuide(button.dataset.guideCurriculum));
  });
  container.querySelectorAll('[data-schedule-curriculum]').forEach(button => {
    button.addEventListener('click', () => scheduleCurriculumToPlanner(button.dataset.scheduleCurriculum));
  });
}

function setCurriculumLevel(level) {
  state.selectedCurriculumLevel = level;
  const pills = document.querySelectorAll('#curriculum-level-pills button');
  pills.forEach(p => {
    const isActive = p.getAttribute('onclick').includes(level);
    p.classList.toggle('is-active', isActive);
    p.setAttribute('aria-pressed', String(isActive));
  });
  renderCurriculum();
}

function setCurriculumSemester(sem) {
  state.selectedCurriculumSemester = sem;
  ['all', 'gasal', 'genap'].forEach(s => {
    const btn = document.getElementById(`sem-${s}`);
    if (s === sem.toLowerCase()) {
      btn.className = 'px-3.5 py-2 rounded-full bg-forest text-cream transition';
    } else {
      btn.className = 'px-3.5 py-2 rounded-full text-forest-light hover:text-forest transition';
    }
  });
  renderCurriculum();
}

function clearCurriculumSearch() {
  state.curriculumSearch = '';
  renderCurriculum();
  document.getElementById('curriculum-search').focus();
}

function openAddCurriculumModal() {
  if (!isAdminUser()) {
    showToast(state.lang === 'id'
      ? 'Hanya administrator yang dapat mengubah kurikulum inti.'
      : 'Only administrators can change the core curriculum.', '⚠️');
    return;
  }
  openModal('modal-add-curriculum');
}

async function handleCreateCurriculumSubmit(e) {
  e.preventDefault();
  if (!isAdminUser()) {
    showToast(state.lang === 'id'
      ? 'Hanya administrator yang dapat mengubah kurikulum inti.'
      : 'Only administrators can change the core curriculum.', '⚠️');
    return;
  }
  const level = document.getElementById('new-curr-level').value;
  const semester = document.getElementById('new-curr-semester').value;
  const week = parseInt(document.getElementById('new-curr-week').value) || 1;
  const bloom = document.getElementById('new-curr-bloom').value;
  const domain = document.getElementById('new-curr-domain').value;
  const title_id = document.getElementById('new-curr-title-id').value;
  const title_en = document.getElementById('new-curr-title-en').value;
  const tools = document.getElementById('new-curr-tools').value;
  const elo = document.getElementById('new-curr-elo').value;
  const canva_url_id = document.getElementById('new-curr-canva-id').value.trim();
  const canva_url_eng = document.getElementById('new-curr-canva-en').value.trim();

  const newItem = {
    id: 'c-custom-' + Date.now(),
    level, semester, week, bloom, domain, title_id, title_en, tools, elo,
    canva_url: canva_url_id, canva_url_eng,
  };

  if (!state.databaseStatus.curriculum) {
    showToast(state.lang === 'id'
      ? 'Kurikulum belum disimpan: database belum terhubung.'
      : 'Curriculum was not saved: the database is not connected.', '⚠️');
    return;
  }

  const savedItem = await saveCurriculumToSupabase(newItem);
  if (!savedItem) return;
  newItem.id = savedItem.id;
  newItem._fromDB = true;
  state.curriculumData.unshift(newItem);

  closeModal('modal-add-curriculum');
  setCurriculumLevel(level);
  showToast(state.lang === 'id'
    ? 'Unit kurikulum berhasil disimpan ke database.'
    : 'Curriculum unit saved to the database.', '🎉');
}

function scheduleCurriculumToPlanner(currId) {
  const item = state.curriculumData.find(c => c.id === currId);
  if (!item) return;
  navigateTo('planner');
  openScheduleSlotModal(toLocalDateKey(state.plannerDate));
}

/* UNIFIED CURRICULUM GUIDE & CANVA INTEGRATION */
function openCurriculumGuide(currId) {
  const item = state.curriculumData.find(c => c.id === currId);
  if (!item) {
    showToast(state.lang === 'id' ? 'Panduan kurikulum tidak ditemukan di database.' : 'Curriculum guide was not found in the database.', '⚠️');
    return;
  }
  state.selectedActivity = item;

  const dColor = getDomainColor(item.domain || 'engineering');
  const domainBadge = document.getElementById('act-detail-domain');
  domainBadge.className = `text-xs font-bold px-2.5 py-0.5 rounded-full ${dColor.bgLight} ${dColor.textColor}`;
  domainBadge.textContent = dColor.label;

  const ageText = item.level === 'level-0'
    ? (state.lang === 'id' ? 'Preschool / PAUD (3–6 tahun)' : 'Preschool (ages 3–6)')
    : item.level === 'level-1'
      ? (state.lang === 'id' ? 'SD Kelas 1–3 (7–9 tahun)' : 'Elementary, Grades 1–3 (ages 7–9)')
      : item.level === 'level-2'
        ? (state.lang === 'id' ? 'SD Kelas 4–5 AI (10–11 tahun)' : 'Elementary, Grades 4–5 · AI (ages 10–11)')
        : (state.lang === 'id' ? 'SMP (12–15 tahun)' : 'Middle school (ages 12–15)');
  const semesterLabel = item.semester === 'Gasal'
    ? (state.lang === 'id' ? 'Gasal' : 'Odd semester')
    : item.semester === 'Genap'
      ? (state.lang === 'id' ? 'Genap' : 'Even semester')
      : item.semester || '';
  document.getElementById('act-detail-age').textContent =
    `${ageText} · ${state.lang === 'id' ? 'Semester' : 'Semester'} ${semesterLabel} · ${state.lang === 'id' ? 'Minggu' : 'Week'} ${item.week || 1}`;
  document.getElementById('act-detail-title').textContent = bText(item, 'title') ||
    (state.lang === 'id' ? 'Judul belum tersedia' : 'Title not provided');

  const content = document.getElementById('act-detail-content');
  const toolsText = bText(item, 'tools');
  const eloText = bText(item, 'elo') ||
    (state.lang === 'id' ? 'Capaian pembelajaran belum ditambahkan.' : 'No learning outcome listed.');
  const canvaLinks = [
    {
      label: state.lang === 'id' ? 'Buka Canva (Indonesia)' : 'Open Canva (Indonesian)',
      url: item.canva_url,
    },
    {
      label: state.lang === 'id' ? 'Buka Canva (English)' : 'Open Canva (English)',
      url: item.canva_url_eng,
    },
  ].map(link => {
    try {
      const parsedUrl = link.url ? new URL(link.url) : null;
      return {
        ...link,
        url: parsedUrl?.protocol === 'https:' ? parsedUrl.href : null,
      };
    } catch {
      return { ...link, url: null };
    }
  });

  // Determine materials list
  let materials = [];
  if (item.materials_id && state.lang === 'id') materials = item.materials_id;
  else if (item.materials_en && state.lang === 'en') materials = item.materials_en;
  else if (toolsText) {
    materials = toolsText.split(',').map(s => s.trim());
    materials.push(state.lang === 'id' ? 'Baki Kayu Kerja Montessori' : 'Montessori work tray');
    materials.push(state.lang === 'id' ? 'Alas Kerja Katun' : 'Cotton work mat');
  } else {
    materials = state.lang === 'id'
      ? ['Perangkat PLEGO Blocks', 'Baki Kayu Montessori']
      : ['PLEGO Blocks components', 'Montessori wooden tray'];
  }

  // Determine steps
  let steps = [];
  if (item.steps_id && state.lang === 'id') steps = item.steps_id;
  else if (item.steps_en && state.lang === 'en') steps = item.steps_en;
  else {
    steps = [
      {
        phase: state.lang === 'id' ? '1. Undangan (Invitation)' : '1. Invitation',
        text: state.lang === 'id'
          ? `Ajak anak dengan tenang ke rak eksplorasi STEM: "Mari kita amati bagaimana ${toolsText || 'komponen ini'} dapat bekerja bersama. Maukah kamu merangkainya di atas baki?"`
          : `Calmly invite the child to the STEM shelf: "Shall we explore how ${toolsText || 'these modules'} work together on our work tray?"`
      },
      {
        phase: state.lang === 'id' ? '2. Demonstrasi (Demonstration)' : '2. Demonstration',
        text: state.lang === 'id'
          ? `Tunjukkan cara menghubungkan modul ${toolsText || 'komponen'} secara perlahan dengan gerakan tangan terisolasi (Three-Period Lesson). Beri jeda agar anak memperhatikan alur input memicu output.`
          : `Demonstrate connecting modules with deliberate, isolated hand movements (Three-Period Lesson). Pause so the child observes input triggering output.`
      },
      {
        phase: state.lang === 'id' ? '3. Eksplorasi Mandiri Anak (Child Work)' : '3. Child Work',
        text: state.lang === 'id'
          ? `Berikan kebebasan penuh bagi anak untuk menguji rangkaian sendiri. Pendidik mundur satu langkah untuk mengamati tanpa interupsi.`
          : `Grant the child complete freedom to test combinations independently. Step back and observe without interrupting spontaneous focus.`
      }
    ];
  }

  const localTips = bText(item, 'local_tips') || (state.lang === 'id'
    ? `Padukan dengan material alam Nusantara (bilah bambu halus, ranting, tempurung kelapa, batu kerikil, atau biji saga) sebagai loose-parts pelengkap rangkaian.`
    : `Combine with local Indonesian natural loose parts (smooth bamboo dowels, coconut shells, river pebbles, or seeds) to enrich sensory texture.`);

  const montessoriNotes = bText(item, 'montessori_notes') || (state.lang === 'id'
    ? `Kontrol Kesalahan (Control of Error): Bersifat mekanikal/elektronikal dari sirkuit. Anak langsung melihat apakah lampu menyala atau motor berputar tanpa perlu koreksi lisan dari pendidik.`
    : `Control of Error: Mechanical/electronic response of the circuit. The child immediately perceives whether the output triggers without verbal adult correction.`);

  content.innerHTML = `
        <!-- CANVA INTEGRATION CARD -->
        <div class="canva-resource-card">
          <div class="canva-resource-info">
            <div class="canva-resource-icon" aria-hidden="true">
              🎨
            </div>
            <div class="canva-resource-copy">
              <div class="canva-resource-title">
                <h4 class="font-heading font-bold text-forest text-sm sm:text-base">${state.lang === 'id' ? 'Materi Ajar & Slide Visual Canva' : 'Teaching Materials & Visual Slides'}</h4>
                <span class="canva-resource-badge">${state.lang === 'id' ? 'Template Siap Pakai' : 'Ready-to-use templates'}</span>
              </div>
              <p class="text-xs text-forest-light leading-relaxed">
                ${state.lang === 'id'
      ? 'Slide presentasi interaktif, lembar observasi anak, dan kartu visual langkah eksplorasi tersedia di Canva.'
      : 'Interactive presentation slides, child observation sheets, and visual exploration-step cards are available on Canva.'}
              </p>
            </div>
          </div>
          <div class="canva-resource-links">
            ${canvaLinks.map(link => link.url ? `
              <a href="${escapeHTML(link.url)}" target="_blank" rel="noopener noreferrer"
                 class="canva-resource-link garden-interactive-btn">
                <span>${escapeHTML(link.label)}</span>
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>
              </a>
            ` : `
              <span class="canva-resource-link is-unavailable" aria-disabled="true">
                ${escapeHTML(link.label)} · ${state.lang === 'id' ? 'Link belum diisi' : 'Link not added'}
              </span>
            `).join('')}
          </div>
        </div>

        <!-- ELO & Summary -->
        <div class="bg-sand-50 p-4 rounded-2xl border border-sand-200">
          <span class="text-[10px] font-bold text-forest-light uppercase block mb-1">🎯 ${state.lang === 'id' ? 'ELO / Capaian Pembelajaran:' : 'Learning Outcome:'}</span>
          <p class="text-xs text-forest font-semibold leading-relaxed">${escapeHTML(eloText)}</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div class="p-4 rounded-2xl bg-sand-50 border border-sand-200">
            <h4 class="font-heading font-bold text-forest text-xs uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <span>🧺</span> ${state.lang === 'id' ? 'Material & Komponen' : 'Materials Needed'}
            </h4>
            <ul class="space-y-1.5 text-xs text-forest">
              ${materials.map(m => `<li class="flex items-center gap-1.5"><span class="text-sage font-bold">✔</span> ${escapeHTML(m)}</li>`).join('')}
            </ul>
          </div>

          <div class="p-4 rounded-2xl bg-sunshine-light border border-sunshine/40">
            <h4 class="font-heading font-bold text-sunshine-dark text-xs uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <span>🇮🇩</span> ${state.lang === 'id' ? 'Alternatif Lokal Nusantara' : 'Local Indonesian Alternative'}
            </h4>
            <p class="text-xs text-forest leading-relaxed">
              ${escapeHTML(localTips)}
            </p>
          </div>
        </div>

        <!-- 3-Period Montessori Presentation -->
        <div>
          <h4 class="font-heading font-bold text-forest text-sm mb-3 flex items-center gap-2">
            <span>🌱</span> ${state.lang === 'id' ? 'Langkah Presentasi Montessori (The Presentation)' : 'Montessori Presentation Steps'}
          </h4>
          <div class="space-y-2.5">
            ${steps.map(s => `
              <div class="p-3.5 rounded-2xl bg-cream border border-sand-200">
                <span class="font-bold text-xs text-sage block mb-1">${escapeHTML(s.phase)}</span>
                <p class="text-xs text-forest leading-relaxed">${escapeHTML(s.text)}</p>
              </div>
            `).join('')}
          </div>
        </div>

        <!-- Pedagogy Notes -->
        <div class="p-4 rounded-2xl bg-sage-50 border border-sage-100">
          <h4 class="font-heading font-bold text-sage-700 text-xs uppercase tracking-wider mb-1 flex items-center gap-1.5">
            <span>🌿</span> ${state.lang === 'id' ? 'Catatan Pedagogi & Kontrol Kesalahan (Control of Error)' : 'Montessori Pedagogy Notes'}
          </h4>
          <p class="text-xs text-forest-light leading-relaxed">
            ${escapeHTML(montessoriNotes)}
          </p>
        </div>
      `;

  openModal('modal-activity');
}

function openActivityDetail(actId) {
  openCurriculumGuide(actId);
}

function assignActivityToPlannerPrompt() {
  if (!state.selectedActivity) return;
  closeModal('modal-activity');
  navigateTo('planner');
  openScheduleSlotModal(toLocalDateKey(state.plannerDate));
}

/* FLOW 4: OVERHAULED INTERACTIVE LESSON PLANNER (DAY / WEEK / MONTH / YEAR) */
function setPlannerLayout(layout) {
  state.plannerLayout = layout;
  ['day', 'week', 'month', 'year'].forEach(l => {
    const btn = document.getElementById(`planner-btn-${l}`);
    if (btn) {
      btn.classList.toggle('is-active', l === layout);
      btn.setAttribute('aria-pressed', String(l === layout));
    }
  });
  renderPlanner();
}

function handlePlannerMonthYearChange() {
  const monthSelect = document.getElementById('planner-month-select');
  const yearSelect = document.getElementById('planner-year-select');
  if (!monthSelect || !yearSelect) return;

  const month = parseInt(monthSelect.value, 10);
  const year = parseInt(yearSelect.value, 10);

  const d = new Date(state.plannerDate);
  d.setDate(1);
  d.setFullYear(year);
  d.setMonth(month);
  state.plannerDate = d;

  renderPlanner();
}

function jumpToMonth(monthIdx, year = null) {
  const d = new Date(state.plannerDate);
  if (year !== null) d.setFullYear(year);
  d.setDate(1);
  d.setMonth(monthIdx);
  state.plannerDate = d;
  setPlannerLayout('month');
}

function printPlanner() {
  document.body.classList.add('printing-planner');
  window.addEventListener('afterprint', () => {
    document.body.classList.remove('printing-planner');
  }, { once: true });
  window.print();
}

// =====================================================================
// CALENDAR & PLANNER: VISUAL BADGE PALETTES & FILTERING
// =====================================================================
const TUTOR_CLASS_PALETTES = [
  { bg: 'bg-emerald-50', text: 'text-emerald-800', border: 'border-emerald-200', dot: 'bg-emerald-500', barColor: '#10b981' },
  { bg: 'bg-indigo-50', text: 'text-indigo-800', border: 'border-indigo-200', dot: 'bg-indigo-500', barColor: '#6366f1' },
  { bg: 'bg-amber-50', text: 'text-amber-800', border: 'border-amber-200', dot: 'bg-amber-500', barColor: '#f59e0b' },
  { bg: 'bg-rose-50', text: 'text-rose-800', border: 'border-rose-200', dot: 'bg-rose-500', barColor: '#f43f5e' },
  { bg: 'bg-sky-50', text: 'text-sky-800', border: 'border-sky-200', dot: 'bg-sky-500', barColor: '#0ea5e9' },
  { bg: 'bg-purple-50', text: 'text-purple-800', border: 'border-purple-200', dot: 'bg-purple-500', barColor: '#8b5cf6' },
  { bg: 'bg-teal-50', text: 'text-teal-800', border: 'border-teal-200', dot: 'bg-teal-500', barColor: '#14b8a6' },
  { bg: 'bg-orange-50', text: 'text-orange-800', border: 'border-orange-200', dot: 'bg-orange-500', barColor: '#f97316' },
  { bg: 'bg-fuchsia-50', text: 'text-fuchsia-800', border: 'border-fuchsia-200', dot: 'bg-fuchsia-500', barColor: '#d946ef' },
  { bg: 'bg-blue-50', text: 'text-blue-800', border: 'border-blue-200', dot: 'bg-blue-500', barColor: '#3b82f6' }
];

function getEntityColorTheme(name = '') {
  const str = String(name || '').trim().toLowerCase();
  if (!str || str === '—' || str === '-') {
    return { bg: 'bg-sand-100', text: 'text-forest-light', border: 'border-sand-200', dot: 'bg-sand-400', barColor: '#c5b9a8' };
  }
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = (hash << 5) - hash + str.charCodeAt(i);
    hash |= 0;
  }
  const index = Math.abs(hash) % TUTOR_CLASS_PALETTES.length;
  return TUTOR_CLASS_PALETTES[index];
}

function isScheduleItemForCurrentUser(item) {
  if (!state.currentUser) return true;
  if (!item) return false;

  const user = state.currentUser;
  const userEmail = String(user.email || '').toLowerCase().trim();
  const userName = String(user.name || '').toLowerCase().trim();
  const userTutorId = user.tutorId ? String(user.tutorId).toLowerCase() : null;
  const userId = user.id ? String(user.id).toLowerCase() : null;

  // 1. Gather all recognized tutor IDs for this user
  const matchingTutorIds = new Set();
  if (userTutorId) matchingTutorIds.add(userTutorId);
  if (userId) matchingTutorIds.add(userId);

  (state.tutors || []).forEach(t => {
    if (!t) return;
    const tId = String(t.id || '').toLowerCase();
    const tEmail = String(t.email || '').toLowerCase().trim();
    const tName = String(t.full_name || '').toLowerCase().trim();

    if (userTutorId && tId === userTutorId) matchingTutorIds.add(tId);
    if (userId && tId === userId) matchingTutorIds.add(tId);
    if (userEmail && tEmail && tEmail === userEmail) matchingTutorIds.add(tId);
    if (userName && tName && (tName === userName || userName.includes(tName) || tName.includes(userName))) {
      matchingTutorIds.add(tId);
    }
  });

  const itemTutorId = item.tutorId ? String(item.tutorId).toLowerCase() : null;
  const itemAssistantTutorId = item.assistantTutorId ? String(item.assistantTutorId).toLowerCase() : null;

  if (itemTutorId && matchingTutorIds.has(itemTutorId)) return true;
  if (itemAssistantTutorId && matchingTutorIds.has(itemAssistantTutorId)) return true;

  // 2. Multi-token name & email comparison (handles "Athiyyah Syifa", "Athiyyah", "Syifa", honorifics, etc.)
  const userTokens = new Set();
  const ignoredWords = new Set(['kak', 'mba', 'pak', 'ibu', 'ustadz', 'ustadzah', 'miss', 'mister', 'guru', 'tutor', 'pendidik', 'admin', 'administrator']);

  if (userName) {
    userName.split(/[\s,._-]+/).forEach(token => {
      const clean = token.trim();
      if (clean.length >= 3 && !ignoredWords.has(clean)) userTokens.add(clean);
    });
  }
  if (userEmail) {
    const emailPrefix = userEmail.split('@')[0];
    emailPrefix.split(/[._-]+/).forEach(token => {
      const clean = token.trim();
      if (clean.length >= 3 && !ignoredWords.has(clean)) userTokens.add(clean);
    });
  }

  // Also include tokens from any matched tutor in state.tutors
  (state.tutors || []).forEach(t => {
    if (t && matchingTutorIds.has(String(t.id || '').toLowerCase()) && t.full_name) {
      String(t.full_name).toLowerCase().split(/[\s,._-]+/).forEach(token => {
        const clean = token.trim();
        if (clean.length >= 3 && !ignoredWords.has(clean)) userTokens.add(clean);
      });
    }
  });

  const itemTutorName = String(item.tutorName || '').toLowerCase().trim();
  const itemAssistantName = String(item.assistantTutorName || '').toLowerCase().trim();

  for (const token of userTokens) {
    if (itemTutorName && itemTutorName.includes(token)) return true;
    if (itemAssistantName && itemAssistantName.includes(token)) return true;
  }

  const itemTokens = [
    ...itemTutorName.split(/[\s,._-]+/),
    ...itemAssistantName.split(/[\s,._-]+/)
  ].filter(t => t.length >= 3 && !ignoredWords.has(t));

  for (const token of itemTokens) {
    if (userName && userName.includes(token)) return true;
    if (userEmail && userEmail.split('@')[0].includes(token)) return true;
  }

  return false;
}

function updatePlannerFilterUI() {
  const btnAll = document.getElementById('planner-filter-all');
  const btnMine = document.getElementById('planner-filter-mine');
  const isMine = state.plannerFilter === 'mine';

  if (btnAll && btnMine) {
    if (isMine) {
      btnMine.className = 'px-3.5 py-1.5 rounded-full bg-forest text-cream transition font-bold shadow-soft flex items-center gap-1.5 garden-interactive-btn';
      btnMine.setAttribute('aria-pressed', 'true');
      btnAll.className = 'px-3.5 py-1.5 rounded-full text-forest-light hover:text-forest transition font-bold flex items-center gap-1.5 garden-interactive-btn';
      btnAll.setAttribute('aria-pressed', 'false');
    } else {
      btnAll.className = 'px-3.5 py-1.5 rounded-full bg-forest text-cream transition font-bold shadow-soft flex items-center gap-1.5 garden-interactive-btn';
      btnAll.setAttribute('aria-pressed', 'true');
      btnMine.className = 'px-3.5 py-1.5 rounded-full text-forest-light hover:text-forest transition font-bold flex items-center gap-1.5 garden-interactive-btn';
      btnMine.setAttribute('aria-pressed', 'false');
    }
  }

  const indicator = document.getElementById('planner-filter-indicator');
  if (indicator) {
    const currentName = state.currentUser?.name || (state.lang === 'id' ? 'Saya' : 'Me');
    indicator.textContent = isMine
      ? (state.lang === 'id' ? `👤 Menampilkan: Jadwal ${currentName}` : `👤 Showing: Schedule for ${currentName}`)
      : (state.lang === 'id' ? '🌐 Menampilkan Seluruh Jadwal (Global)' : '🌐 Showing All Global Schedules');
  }
}

function setPlannerFilter(filterType = 'all') {
  state.plannerFilter = filterType === 'mine' ? 'mine' : 'all';
  updatePlannerFilterUI();
  renderPlanner();
}

window.isScheduleItemForCurrentUser = isScheduleItemForCurrentUser;
window.setPlannerFilter = setPlannerFilter;

function renderPlanner() {
  updatePlannerFilterUI();
  const container = document.getElementById('planner-view-container');
  const periodLabel = document.getElementById('planner-period-label');
  const activeDate = new Date(state.plannerDate);
  activeDate.setHours(0, 0, 0, 0);
  const weekStart = new Date(activeDate);
  weekStart.setDate(weekStart.getDate() - ((weekStart.getDay() + 6) % 7));
  const weekdays = Array.from({ length: 5 }, (_, index) => {
    const date = new Date(weekStart);
    date.setDate(weekStart.getDate() + index);
    return date;
  });
  const selectedDates = state.plannerLayout === 'day'
    ? [activeDate]
    : state.plannerLayout === 'month'
      ? (() => {
        const first = new Date(activeDate.getFullYear(), activeDate.getMonth(), 1);
        first.setDate(first.getDate() - ((first.getDay() + 6) % 7));
        return Array.from({ length: 42 }, (_, index) => {
          const date = new Date(first);
          date.setDate(first.getDate() + index);
          return date;
        });
      })()
      : weekdays;
  const locale = state.lang === 'id' ? 'id-ID' : 'en-US';
  const dayLabel = date => date.toLocaleDateString(locale, { weekday: 'long' });
  const dateLabel = date => date.toLocaleDateString(locale, { day: 'numeric', month: 'short' });
  const monthName = activeDate.toLocaleDateString(locale, { month: 'long' });
  const yearNum = activeDate.getFullYear();
  const monthLabel = `${monthName} ${yearNum}`;

  const weekStartMonth = weekdays[0].toLocaleDateString(locale, { month: 'long' });
  const weekEndMonth = weekdays[4].toLocaleDateString(locale, { month: 'long' });
  const weekStartYear = weekdays[0].getFullYear();
  const weekEndYear = weekdays[4].getFullYear();

  let formattedPeriod = '';
  if (state.plannerLayout === 'year') {
    formattedPeriod = `${state.lang === 'id' ? 'Tahun' : 'Year'} ${yearNum}`;
  } else if (state.plannerLayout === 'month') {
    formattedPeriod = monthLabel; // e.g. "November 2026"
  } else if (state.plannerLayout === 'day') {
    formattedPeriod = activeDate.toLocaleDateString(locale, { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' }); // e.g. "Senin, 17 November 2026"
  } else {
    // Week view: always include full month and year!
    if (weekStartYear === weekEndYear) {
      if (weekStartMonth === weekEndMonth) {
        formattedPeriod = `${weekdays[0].getDate()} – ${weekdays[4].getDate()} ${weekEndMonth} ${weekEndYear}`;
      } else {
        formattedPeriod = `${weekdays[0].getDate()} ${weekStartMonth} – ${weekdays[4].getDate()} ${weekEndMonth} ${weekEndYear}`;
      }
    } else {
      formattedPeriod = `${weekdays[0].getDate()} ${weekStartMonth} ${weekStartYear} – ${weekdays[4].getDate()} ${weekEndMonth} ${weekEndYear}`;
    }
  }

  periodLabel.textContent = formattedPeriod;
  const calTitle = document.getElementById('planner-calendar-title');
  if (calTitle) {
    calTitle.textContent = formattedPeriod;
  }

  // Sync toolbar Month & Year dropdown selectors
  const monthSelect = document.getElementById('planner-month-select');
  if (monthSelect) {
    monthSelect.value = String(activeDate.getMonth());
  }
  const yearSelect = document.getElementById('planner-year-select');
  if (yearSelect) {
    yearSelect.value = String(activeDate.getFullYear());
  }

  // Filter schedule items based on quick filter (Global vs My Schedule)
  const displayedScheduleItems = (state.scheduleItems || []).filter(item => {
    if (state.plannerFilter === 'mine') {
      return isScheduleItemForCurrentUser(item);
    }
    return true;
  });

  const getItemTitle = item => {
    const activity = state.curriculumData.find(entry => entry.id === item.curriculumUnitId);
    const title = activity
      ? bText(activity, 'title')
      : (state.lang === 'id' ? item.actTitle : item.actTitleEn);
    return title && !['—', '-'].includes(String(title).trim())
      ? title
      : state.lang === 'id' ? 'Aktivitas STEM' : 'Title not provided';
  };

  const renderItem = item => {
    const activity = state.curriculumData.find(entry => entry.id === item.curriculumUnitId);
    const color = getDomainColor(item.domain || activity?.domain || 'science');
    const title = getItemTitle(item);
    const isDone = isScheduleCompleted(item);
    const sessionType = {
      work_cycle: state.lang === 'id' ? 'Siklus kerja' : 'Work Cycle',
      circle_time: state.lang === 'id' ? 'Waktu lingkaran' : 'Circle Time',
      outdoor: state.lang === 'id' ? 'Kegiatan luar ruang' : 'Outdoor',
    }[item.block] || item.block;

    const tutorTheme = getEntityColorTheme(item.tutorName || item.assistantTutorName || '');
    const classTheme = getEntityColorTheme(item.className || '');

    return `
          <article class="planner-lesson-card garden-card-hover" style="border-left: 4.5px solid ${tutorTheme.barColor};">
            <div class="planner-lesson-topline">
              <span class="planner-lesson-time font-semibold text-xs text-forest">${escapeHTML(item.time || '—')}</span>
              <div class="flex items-center gap-1.5">
                <span class="planner-domain-dot ${color.bg}" aria-hidden="true"></span>
                <span class="text-[10px] font-bold uppercase tracking-wider text-forest-light/80">${escapeHTML(item.domain || 'STEM')}</span>
              </div>
            </div>
            <h4 class="planner-lesson-title mt-1.5 font-bold text-forest text-sm line-clamp-2">${escapeHTML(title)}</h4>
            
            <!-- Visual Badges: Distinct Tutor & Class Badges -->
            <div class="planner-lesson-badges flex flex-wrap items-center gap-1.5 my-2">
              ${item.tutorName && item.tutorName !== '—' ? `
                <span class="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-bold ${tutorTheme.bg} ${tutorTheme.text} border ${tutorTheme.border} shadow-2xs" title="Tutor Pengampu">
                  <span class="w-1.5 h-1.5 rounded-full ${tutorTheme.dot}" aria-hidden="true"></span>
                  <span>👤 ${escapeHTML(item.tutorName)}</span>
                </span>` : ''}
              ${item.className && item.className !== '—' ? `
                <span class="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-bold ${classTheme.bg} ${classTheme.text} border ${classTheme.border} shadow-2xs" title="Kelas">
                  <span class="w-1.5 h-1.5 rounded-full ${classTheme.dot}" aria-hidden="true"></span>
                  <span>🏫 ${escapeHTML(item.className)}</span>
                </span>` : ''}
              ${item.block ? `<span class="planner-meta-chip text-[10px]">${escapeHTML(sessionType)}</span>` : ''}
            </div>

            ${item.assistantTutorName ? `<p class="planner-lesson-tutors text-[11px] text-forest-light mt-1"><span aria-hidden="true">✦</span> Pendamping: ${escapeHTML(item.assistantTutorName)}</p>` : ''}
            <div class="planner-lesson-footer mt-2 pt-2 border-t border-sand-200/60">
              <span class="planner-status ${isDone ? 'is-complete' : ''}">${isDone ? (state.lang === 'id' ? 'Selesai' : 'Done') : (state.lang === 'id' ? 'Terjadwal' : 'Scheduled')}</span>
              <div class="planner-lesson-actions flex items-center gap-2">
                ${activity ? `<button type="button" data-guide-curriculum="${escapeHTML(activity.id)}" class="planner-action-link">${state.lang === 'id' ? 'Panduan' : 'Guide'}</button>` : ''}
                ${state.currentUser?.role !== 'parent' ? `<button type="button" data-delete-schedule="${escapeHTML(item.id)}" class="planner-action-link is-delete">${state.lang === 'id' ? 'Hapus' : 'Delete'}</button>` : ''}
              </div>
            </div>
          </article>`;
  };

  if (!state.databaseStatus.schedule) {
    container.innerHTML = `<p class="planner-empty-state is-error">${state.lang === 'id' ? 'Jadwal belum terhubung ke database.' : 'The schedule could not be loaded from the database.'}</p>`;
  } else if (state.plannerLayout === 'year') {
    const currentYear = activeDate.getFullYear();
    const monthsData = Array.from({ length: 12 }, (_, monthIdx) => {
      const monthDate = new Date(currentYear, monthIdx, 1);
      const monthName = monthDate.toLocaleDateString(locale, { month: 'long' });
      const monthPrefix = `${currentYear}-${String(monthIdx + 1).padStart(2, '0')}`;
      const monthActivities = displayedScheduleItems.filter(item => item.date && item.date.startsWith(monthPrefix));

      const firstDay = new Date(currentYear, monthIdx, 1);
      const lastDay = new Date(currentYear, monthIdx + 1, 0);
      const totalDays = lastDay.getDate();
      const startingDay = (firstDay.getDay() + 6) % 7;

      return {
        monthIdx,
        monthName,
        totalDays,
        startingDay,
        activitiesCount: monthActivities.length,
        monthPrefix
      };
    });

    container.innerHTML = `
      <div class="planner-year-view space-y-4">
        <div class="flex items-center justify-between pb-3 border-b border-sand-200">
          <div>
            <h3 class="text-base font-extrabold text-forest">${state.lang === 'id' ? `Kalender Rencana Belajar Tahun ${currentYear}` : `Lesson Planning Calendar Year ${currentYear}`}</h3>
            <p class="text-xs text-forest-light">
              ${state.lang === 'id' ? 'Pilih salah satu bulan (misal: Agustus) untuk langsung membuka &amp; mengisi jadwal di bulan tersebut:' : 'Click on any month to view and schedule activities:'}
            </p>
          </div>
          <span class="text-xs font-black px-3.5 py-1.5 bg-forest text-cream rounded-full shadow-2xs">${currentYear}</span>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          ${monthsData.map(m => {
      const isCurrentMonth = (new Date().getFullYear() === currentYear && new Date().getMonth() === m.monthIdx);
      const isSelectedMonth = (activeDate.getMonth() === m.monthIdx);
      return `
              <div onclick="jumpToMonth(${m.monthIdx}, ${currentYear})"
                class="bg-white rounded-2xl border-2 p-3.5 hover:shadow-soft hover:border-sage transition cursor-pointer flex flex-col justify-between ${isSelectedMonth ? 'border-forest bg-sand-50/70 ring-2 ring-forest/20' : isCurrentMonth ? 'border-sage bg-sage-50/20' : 'border-sand-200'
        }">
                <div class="flex items-center justify-between mb-2">
                  <h4 class="font-extrabold text-sm text-forest">${escapeHTML(m.monthName)}</h4>
                  <span class="text-[10px] font-bold px-2 py-0.5 rounded-full ${m.activitiesCount > 0 ? 'bg-emerald-100 text-emerald-800 border border-emerald-300' : 'bg-sand-100 text-forest-light'
        }">
                    ${m.activitiesCount} ${state.lang === 'id' ? 'aktivitas' : 'acts'}
                  </span>
                </div>

                <!-- Mini Days Header -->
                <div class="grid grid-cols-7 gap-1 text-[9px] text-center text-forest-light font-bold mb-1 select-none">
                  <span>S</span><span>S</span><span>R</span><span>K</span><span>J</span><span>S</span><span>M</span>
                </div>

                <!-- Mini Days Number Grid -->
                <div class="grid grid-cols-7 gap-1 text-[9px] text-center font-medium select-none">
                  ${Array.from({ length: m.startingDay }, () => `<span class="text-transparent">—</span>`).join('')}
                  ${Array.from({ length: m.totalDays }, (_, d) => {
          const dayNum = d + 1;
          const dateStr = `${m.monthPrefix}-${String(dayNum).padStart(2, '0')}`;
          const hasActs = displayedScheduleItems.some(item => item.date === dateStr);
          const isToday = toLocalDateKey(new Date()) === dateStr;
          return `
                      <span class="w-5 h-5 mx-auto flex items-center justify-center rounded-full ${isToday ? 'bg-forest text-cream font-bold' : hasActs ? 'bg-emerald-600 text-white font-bold' : 'text-forest hover:bg-sand-100'
            }">
                        ${dayNum}
                      </span>
                    `;
        }).join('')}
                </div>

                <div class="mt-3 pt-2 border-t border-sand-100 flex items-center justify-between text-[11px] font-bold text-sage hover:text-forest">
                  <span>${state.lang === 'id' ? 'Buka Bulan Ini' : 'Open Month'}</span>
                  <span>➔</span>
                </div>
              </div>
            `;
    }).join('')}
        </div>
      </div>
    `;
  } else if (state.plannerLayout === 'month') {
    const firstMonth = activeDate.getMonth();
    container.innerHTML = `
          <div class="planner-month">
            <div class="planner-weekday-headings">
              ${['Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab', 'Min'].map((day, index) => `<span>${state.lang === 'id' ? day : ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'][index]}</span>`).join('')}
            </div>
            <div class="planner-month-grid">
              ${selectedDates.map(date => {
      const dateKey = toLocalDateKey(date);
      const items = displayedScheduleItems.filter(item => item.date === dateKey);
      const inMonth = date.getMonth() === firstMonth;
      const isToday = dateKey === toLocalDateKey(new Date());
      return `<button type="button" data-planner-date="${dateKey}" aria-label="${escapeHTML(date.toLocaleDateString(locale, { weekday: 'long', day: 'numeric', month: 'long' }))}${items.length ? `, ${items.length} ${state.lang === 'id' ? 'aktivitas' : 'activities'}` : ''}" class="planner-month-day ${isToday ? 'is-today' : ''} ${inMonth ? '' : 'is-outside-month'}">
                  <span class="planner-month-date">${date.getDate()}</span>
                  ${items.length ? `<span class="planner-month-events">${items.slice(0, 3).map(itm => {
        const tTheme = getEntityColorTheme(itm.tutorName || itm.className);
        const shortTutor = itm.tutorName && itm.tutorName !== '—' ? `${itm.tutorName.split(' ')[0]}: ` : '';
        return `<span class="planner-month-event text-[10px] truncate block px-1 py-0.5 rounded font-semibold ${tTheme.bg} ${tTheme.text} border ${tTheme.border}" style="border-left: 3px solid ${tTheme.barColor};" title="${escapeHTML(itm.tutorName)} · ${escapeHTML(itm.className)}: ${escapeHTML(getItemTitle(itm))}">
                      ${escapeHTML(shortTutor)}${escapeHTML(getItemTitle(itm))}
                    </span>`;
      }).join('')}${items.length > 3 ? `<span class="planner-month-more text-[10px] text-sage font-bold">+${items.length - 3} ${state.lang === 'id' ? 'lainnya' : 'more'}</span>` : ''}</span>` : ''}
                </button>`;
    }).join('')}
            </div>
          </div>`;
  } else {
    container.innerHTML = `
          <div class="planner-days-grid ${state.plannerLayout === 'week' ? 'is-week' : 'is-day'}">
            ${selectedDates.map(date => {
      const dateKey = toLocalDateKey(date);
      const items = displayedScheduleItems.filter(item => item.date === dateKey);
      const isToday = dateKey === toLocalDateKey(new Date());
      return `<section class="planner-day-column ${isToday ? 'is-today' : ''}">
                <div class="planner-day-heading">
                  <div>
                    <span class="planner-day-name">${escapeHTML(dayLabel(date))}</span>
                    <span class="planner-day-date">${escapeHTML(dateLabel(date))}</span>
                  </div>
                  <span class="planner-day-count">${items.length}</span>
                </div>
                <div class="planner-day-items">
                  ${items.length ? items.map(renderItem).join('') : `<p class="planner-empty-day">${state.plannerFilter === 'mine' ? (state.lang === 'id' ? 'Belum ada jadwal Anda di hari ini' : 'No schedule for you on this day') : (state.lang === 'id' ? 'Belum ada jadwal' : 'No lessons scheduled')}</p>`}
                </div>
                ${state.currentUser?.role !== 'parent' ? `<button type="button" data-schedule-date="${dateKey}" class="planner-add-slot">${state.lang === 'id' ? '+ Tambah aktivitas' : '+ Add activity'}</button>` : ''}
              </section>`;
    }).join('')}
          </div>`;
  }

  container.querySelectorAll('[data-guide-curriculum]').forEach(button => {
    button.addEventListener('click', () => openCurriculumGuide(button.dataset.guideCurriculum));
  });
  container.querySelectorAll('[data-delete-schedule]').forEach(button => {
    button.addEventListener('click', () => deletePlanItem(button.dataset.deleteSchedule));
  });
  container.querySelectorAll('[data-planner-date]').forEach(button => {
    button.addEventListener('click', () => {
      const date = button.dataset.plannerDate;
      if (!/^\d{4}-\d{2}-\d{2}$/.test(date)) return;
      state.plannerDate = new Date(`${date}T00:00:00`);
      setPlannerLayout('day');
    });
  });
  container.querySelectorAll('[data-schedule-date]').forEach(button => {
    button.addEventListener('click', () => openScheduleSlotModal(button.dataset.scheduleDate));
  });

  const materialsContainer = document.getElementById('planner-materials-list');
  const materials = [...new Set(displayedScheduleItems
    .filter(item => item.date >= toLocalDateKey(weekdays[0]) && item.date <= toLocalDateKey(weekdays[4]))
    .map(item => bText(state.curriculumData.find(activity => activity.id === item.curriculumUnitId), 'tools'))
    .filter(Boolean)
    .flatMap(value => value.split(',').map(material => material.trim())))];
  materialsContainer.innerHTML = materials.length ? materials.map(material => `
        <label class="planner-material-item">
          <input type="checkbox" data-weekly-material value="${escapeHTML(material)}">
          <span>${escapeHTML(material)}</span>
        </label>
      `).join('') : `<p class="planner-material-empty">${state.lang === 'id' ? 'Material akan muncul dari aktivitas terjadwal minggu ini.' : 'Materials will appear from this week’s scheduled activities.'}</p>`;
  const weekStartKey = toLocalDateKey(weekdays[0]);
  const scopeKey = state.activeClassId || 'all';
  void loadWeeklyMaterialChecks(materialsContainer, materials, weekStartKey, scopeKey);
}

let weeklyMaterialLoadSequence = 0;

async function loadWeeklyMaterialChecks(container, materials, weekStart, scopeKey) {
  if (!materials.length) return;
  const requestNumber = ++weeklyMaterialLoadSequence;
  container.dataset.weekStart = weekStart;
  container.dataset.scopeKey = scopeKey;
  const checkboxes = [...container.querySelectorAll('[data-weekly-material]')];
  const canEdit = state.currentUser?.role !== 'parent' && Boolean(state.currentUser?.id);
  checkboxes.forEach(input => {
    input.disabled = true;
    input.addEventListener('change', () => {
      void saveWeeklyMaterialCheck(input, weekStart, scopeKey);
    });
  });

  if (!canEdit) return;
  try {
    const { data, error } = await sb.from('weekly_material_checks')
      .select('material, is_checked')
      .eq('user_id', state.currentUser.id)
      .eq('scope_key', scopeKey)
      .eq('week_start', weekStart)
      .in('material', materials);
    if (error) throw error;
    if (requestNumber !== weeklyMaterialLoadSequence ||
      container.dataset.weekStart !== weekStart ||
      container.dataset.scopeKey !== scopeKey) return;

    const checkedMaterials = new Map((data || []).map(item => [item.material, item.is_checked]));
    checkboxes.forEach(input => {
      input.checked = checkedMaterials.get(input.value) || false;
      input.disabled = false;
    });
  } catch (error) {
    if (requestNumber !== weeklyMaterialLoadSequence) return;
    console.warn('[Supabase] weekly materials load failed:', error);
    showToast(`${state.lang === 'id'
      ? 'Status material minggu ini gagal dimuat'
      : 'Weekly material status could not be loaded'}: ${error.message || error}`, '⚠️');
  }
}

async function saveWeeklyMaterialCheck(input, weekStart, scopeKey) {
  const isChecked = input.checked;
  input.disabled = true;
  try {
    const { error } = await sb.from('weekly_material_checks').upsert({
      user_id: state.currentUser.id,
      scope_key: scopeKey,
      week_start: weekStart,
      material: input.value,
      is_checked: isChecked,
      updated_at: new Date().toISOString(),
    }, { onConflict: 'user_id,scope_key,week_start,material' });
    if (error) throw error;
  } catch (error) {
    console.warn('[Supabase] weekly material update failed:', error);
    input.checked = !isChecked;
    showToast(`${state.lang === 'id'
      ? 'Status material gagal disimpan'
      : 'Material status could not be saved'}: ${error.message || error}`, '⚠️');
  } finally {
    input.disabled = false;
  }
}

const searchableSelectControls = new WeakMap();

function enhanceSearchableSelect(select) {
  let control = searchableSelectControls.get(select);
  if (!control) {
    const wrapper = document.createElement('div');
    wrapper.className = 'searchable-select';
    const isRequired = select.required || select.id === 'modal-schedule-act';
    const input = document.createElement('input');
    input.type = 'search';
    input.id = `${select.id}-search`;
    input.className = select.className;
    input.placeholder = state.lang === 'id' ? 'Ketik untuk mencari...' : 'Type to search...';
    input.autocomplete = 'off';
    input.setAttribute('role', 'combobox');
    input.setAttribute('aria-autocomplete', 'list');
    input.setAttribute('aria-expanded', 'false');
    input.setAttribute('aria-controls', `${select.id}-options`);
    input.required = isRequired;

    const list = document.createElement('div');
    list.id = `${select.id}-options`;
    list.className = 'searchable-select-options hidden';
    list.setAttribute('role', 'listbox');

    select.parentNode.insertBefore(wrapper, select);
    wrapper.append(input, list, select);
    select.classList.add('searchable-select-native');
    select.required = false;
    select.tabIndex = -1;
    select.setAttribute('aria-hidden', 'true');
    const label = select.parentElement.parentElement.querySelector(`label[for="${select.id}"]`) ||
      select.parentElement.parentElement.querySelector('label');
    if (label) label.htmlFor = input.id;

    const closeList = () => {
      list.classList.add('hidden');
      input.setAttribute('aria-expanded', 'false');
    };
    const chooseOption = option => {
      select.value = option.value;
      input.value = option.textContent.trim();
      select.dispatchEvent(new Event('change', { bubbles: true }));
      closeList();
    };
    const renderOptions = () => {
      const query = input.value.trim().toLocaleLowerCase();
      const options = [...select.options].filter(option =>
        option.textContent.trim().toLocaleLowerCase().includes(query)
      );
      list.replaceChildren();
      if (!options.length) {
        const empty = document.createElement('p');
        empty.className = 'searchable-select-empty';
        empty.textContent = state.lang === 'id' ? 'Tidak ada pilihan yang cocok.' : 'No matching options.';
        list.append(empty);
      } else {
        options.forEach(option => {
          const button = document.createElement('button');
          button.type = 'button';
          button.className = 'searchable-select-option';
          button.setAttribute('role', 'option');
          button.setAttribute('aria-selected', String(option.value === select.value));
          button.textContent = option.textContent.trim();
          button.addEventListener('pointerdown', event => event.preventDefault());
          button.addEventListener('click', () => chooseOption(option));
          list.append(button);
        });
      }
      const wrapperBounds = wrapper.getBoundingClientRect();
      const roomBelow = window.innerHeight - wrapperBounds.bottom;
      list.classList.toggle('opens-up', roomBelow < 210 && wrapperBounds.top > roomBelow);
      list.classList.remove('hidden');
      input.setAttribute('aria-expanded', 'true');
    };

    input.addEventListener('focus', renderOptions);
    input.addEventListener('input', () => {
      const query = input.value.trim().toLocaleLowerCase();
      const exactOption = [...select.options].find(option =>
        option.textContent.trim().toLocaleLowerCase() === query
      );
      select.value = exactOption?.value || '';
      select.dispatchEvent(new Event('change', { bubbles: true }));
      renderOptions();
    });
    input.addEventListener('keydown', event => {
      const options = [...list.querySelectorAll('[role="option"]')];
      if (event.key === 'Escape') {
        closeList();
      } else if (event.key === 'ArrowDown' && options.length) {
        event.preventDefault();
        options[0].focus();
      } else if (event.key === 'Enter' && options.length === 1) {
        event.preventDefault();
        options[0].click();
      }
    });
    list.addEventListener('keydown', event => {
      const options = [...list.querySelectorAll('[role="option"]')];
      const activeIndex = options.findIndex(option => option === document.activeElement);
      if (event.key === 'ArrowDown' && options.length) {
        event.preventDefault();
        options[Math.min(activeIndex + 1, options.length - 1)].focus();
      } else if (event.key === 'ArrowUp') {
        event.preventDefault();
        if (activeIndex <= 0) input.focus();
        else options[activeIndex - 1].focus();
      } else if (event.key === 'Escape') {
        input.focus();
        closeList();
      }
    });
    wrapper.addEventListener('focusout', event => {
      if (!wrapper.contains(event.relatedTarget)) closeList();
    });

    control = { input, list, required: isRequired };
    searchableSelectControls.set(select, control);
  }

  const selectedOption = select.selectedOptions[0];
  control.input.value = selectedOption?.value ? selectedOption.textContent.trim() : '';
  control.list.classList.add('hidden');
  control.input.setAttribute('aria-expanded', 'false');
  control.input.required = control.required;
  control.input.disabled = select.disabled;
}

function openScheduleSlotModal(date = toLocalDateKey(state.plannerDate)) {
  if (!['admin', 'teacher'].includes(state.currentUser?.role)) {
    showToast(state.lang === 'id' ? 'Akses menjadwalkan aktivitas ditolak.' : 'You cannot schedule activities.', '⚠️');
    return;
  }
  if (!state.databaseStatus.schedule || !state.databaseStatus.curriculum || !state.databaseStatus.tutors) {
    showToast(state.lang === 'id'
      ? 'Database jadwal, kurikulum, atau pendidik belum siap.'
      : 'The schedule, curriculum, or tutor database is not ready.', '⚠️');
    return;
  }
  if (!state.classes.length) {
    showToast(state.lang === 'id' ? 'Belum ada kelas yang tersedia untuk dijadwalkan.' : 'No classes are available for scheduling.', '⚠️');
    return;
  }
  if (!state.curriculumData.some(item => item._fromDB)) {
    showToast(state.lang === 'id' ? 'Belum ada aktivitas kurikulum dari database.' : 'No database curriculum units are available.', '⚠️');
    return;
  }
  const selectAct = document.getElementById('modal-schedule-act');
  selectAct.innerHTML = `<option value="">${state.lang === 'id' ? 'Pilih aktivitas...' : 'Choose an activity...'}</option>` +
    state.curriculumData.filter(item => item._fromDB).map(a => `
        <option value="${escapeHTML(a.id)}">${escapeHTML(bText(a, 'title'))}</option>
      `).join('');
  const availableTutors = getSelectableTutors();
  const tutorSelect = document.getElementById('modal-schedule-tutor');
  tutorSelect.innerHTML = `<option value="">${state.lang === 'id' ? 'Pilih pendidik...' : 'Choose an educator...'}</option>` +
    availableTutors.map(tutor => `
        <option value="${escapeHTML(tutor.id)}">${escapeHTML(tutor.full_name)}</option>
      `).join('');
  const assistantSelect = document.getElementById('modal-schedule-assistant');
  assistantSelect.innerHTML = `<option value="">${state.lang === 'id' ? 'Pilih tutor pendamping (opsional)...' : 'Choose a co-tutor (optional)...'}</option>` +
    availableTutors.map(tutor => `
          <option value="${escapeHTML(tutor.id)}">${escapeHTML(tutor.full_name)}</option>
        `).join('');
  const classSelect = document.getElementById('modal-schedule-class');
  classSelect.innerHTML = `<option value="">${state.lang === 'id' ? 'Pilih kelas...' : 'Choose a class...'}</option>` +
    state.classes.map(classItem => `
        <option value="${escapeHTML(classItem.id)}">${escapeHTML(classItem.name)}</option>
      `).join('');
  document.getElementById('modal-schedule-day').value = date;
  document.getElementById('modal-schedule-time').value = '';
  const blockEl = document.getElementById('modal-schedule-block');
  if (blockEl) blockEl.value = '';
  document.querySelectorAll('#modal-schedule-lesson select').forEach(enhanceSearchableSelect);
  openModal('modal-schedule-lesson');
}

async function handleSaveScheduledLesson(e) {
  e.preventDefault();
  if (!['admin', 'teacher'].includes(state.currentUser?.role)) {
    showToast(state.lang === 'id' ? 'Akses menjadwalkan aktivitas ditolak.' : 'You cannot schedule activities.', '⚠️');
    return;
  }
  const date = document.getElementById('modal-schedule-day').value;
  const actId = document.getElementById('modal-schedule-act').value;
  const time = document.getElementById('modal-schedule-time').value;
  const block = document.getElementById('modal-schedule-block')?.value || 'work_cycle';
  const tutorId = document.getElementById('modal-schedule-tutor').value;
  const assistantTutorId = document.getElementById('modal-schedule-assistant').value || null;
  const classId = document.getElementById('modal-schedule-class').value;
  if (!date || !actId || !tutorId || !classId) {
    showToast(state.lang === 'id' ? 'Lengkapi tanggal, aktivitas, kelas, dan pendidik.' : 'Choose a date, activity, class, and tutor.', '⚠️');
    return;
  }
  if (assistantTutorId === tutorId) {
    showToast(state.lang === 'id' ? 'Pilih tutor pendamping yang berbeda.' : 'Choose a different co-tutor.', '⚠️');
    return;
  }
  if (state.currentUser?.role === 'teacher' &&
    ![tutorId, assistantTutorId].includes(state.currentUser.tutorId)) {
    showToast(state.lang === 'id'
      ? 'Pendidik yang sedang login harus menjadi pendidik utama atau pendamping.'
      : 'You must be the educator or co-educator for this schedule.', '⚠️');
    return;
  }

  const { error } = await sb.from('schedule_assignments').insert([{
    class_id: classId,
    activity_id: actId,
    tutor_id: tutorId,
    assistant_tutor_id: assistantTutorId,
    scheduled_date: date,
    status: 'scheduled',
    notes: `PLEGO_META:${JSON.stringify({ time, block })}`,
  }]);
  if (error) {
    console.warn('[Supabase] schedule INSERT error:', error);
    showToast(`${state.lang === 'id' ? 'Gagal menyimpan jadwal' : 'Could not save schedule'}: ${error.message}`, '⚠️');
    return;
  }
  await loadScheduleFromSupabase();
  closeModal('modal-schedule-lesson');
  renderPlanner();
  showToast(state.lang === 'id' ? 'Slot pembelajaran berhasil ditambahkan!' : 'Lesson slot added!', '📅');
}

async function deletePlanItem(id) {
  if (!['admin', 'teacher'].includes(state.currentUser?.role)) {
    showToast(state.lang === 'id' ? 'Akses menghapus jadwal ditolak.' : 'You cannot delete this schedule.', '⚠️');
    return;
  }
  const { data, error } = await sb.from('schedule_assignments')
    .delete()
    .eq('id', id)
    .select('id')
    .maybeSingle();
  if (error || !data) {
    console.warn('[Supabase] schedule DELETE error:', error || 'No row deleted');
    showToast(state.lang === 'id'
      ? `Jadwal tidak terhapus di database${error?.message ? `: ${error.message}` : '.'}`
      : `The schedule was not deleted from the database${error?.message ? `: ${error.message}` : '.'}`, '⚠️');
    return;
  }
  state.scheduleItems = state.scheduleItems.filter(item => item.id !== id);
  renderPlanner();
  showToast(state.lang === 'id' ? 'Jadwal dihapus dari database.' : 'Schedule deleted from the database.', '🗑️');
}

function changePlannerWeek(delta) {
  const nextDate = new Date(state.plannerDate);
  if (state.plannerLayout === 'year') {
    nextDate.setFullYear(nextDate.getFullYear() + delta);
  } else if (state.plannerLayout === 'month') {
    const dayOfMonth = nextDate.getDate();
    nextDate.setDate(1);
    nextDate.setMonth(nextDate.getMonth() + delta);
    const lastDayOfMonth = new Date(
      nextDate.getFullYear(),
      nextDate.getMonth() + 1,
      0
    ).getDate();
    nextDate.setDate(Math.min(dayOfMonth, lastDayOfMonth));
  } else {
    const amount = state.plannerLayout === 'day' ? 1 : 7;
    nextDate.setDate(nextDate.getDate() + delta * amount);
  }
  state.plannerDate = nextDate;
  renderPlanner();
}

function resetPlannerWeek() {
  state.plannerDate = new Date();
  renderPlanner();
}

/* FLOW 5: OBSERVATION CHECKLIST */
function renderObservations() {
  const grid = document.getElementById('students-grid');
  const feed = document.getElementById('observation-feed');

  const roster = state.students;
  const feedObservations = state.observationsLog.filter(observation => {
    const student = state.allStudents.find(item => item.id === observation.studentId);
    return !state.activeClassId || student?.classId === state.activeClassId;
  });
  const rosterCount = document.getElementById('observation-student-count');
  rosterCount.textContent = state.databaseStatus.students
    ? `${roster.length} ${state.lang === 'id' ? 'anak' : 'children'}`
    : (state.lang === 'id' ? 'Data siswa belum tersedia' : 'Student data unavailable');
  document.getElementById('obs-summary-total-label').textContent =
    state.lang === 'id' ? 'Anak terdaftar' : 'Children listed';
  document.getElementById('obs-summary-needs-label').textContent =
    state.lang === 'id' ? 'Perlu diamati' : 'Need observation';
  document.getElementById('obs-summary-recent-label').textContent =
    state.lang === 'id' ? 'Observasi tercatat' : 'Notes logged';
  document.getElementById('obs-summary-total').textContent =
    state.databaseStatus.students ? String(roster.length) : '—';
  document.getElementById('obs-summary-needs').textContent =
    state.databaseStatus.students ? String(roster.filter(student => student.needsAttention).length) : '—';
  document.getElementById('obs-summary-recent').textContent =
    state.databaseStatus.observations ? String(feedObservations.length) : '—';
  document.getElementById('obs-roster-hint').textContent = state.lang === 'id'
    ? 'Pilih anak untuk menambahkan catatan perkembangan.'
    : 'Choose a child to add a developmental observation.';
  document.getElementById('add-observation-student-label').textContent =
    state.lang === 'id' ? 'Tambah Anak' : 'Add Child';
  document.getElementById('add-observation-student-button').classList.toggle(
    'hidden',
    !isAdminUser()
  );
  const searchInput = document.getElementById('observation-student-search');
  searchInput.placeholder = state.lang === 'id' ? 'Cari nama anak...' : 'Search children...';
  searchInput.setAttribute('aria-label', searchInput.placeholder);
  document.querySelector('[data-i18n="obs.recentFeedTitle"]').textContent =
    `${state.lang === 'id' ? 'Catatan Observasi Terkini' : 'Recent Observations'}${state.activeClassId ? ` · ${state.classes.find(item => item.id === state.activeClassId)?.name || ''}` : ''}`;
  const needsObservationCount = roster.filter(student => student.needsAttention).length;
  const observationFilterOptions = [
    { id: 'all', icon: '🌈', label: state.lang === 'id' ? 'Semua anak' : 'All children', count: roster.length },
    { id: 'needs', icon: '🌱', label: state.lang === 'id' ? 'Perlu diamati' : 'Need a check-in', count: needsObservationCount },
    { id: 'observed', icon: '✨', label: state.lang === 'id' ? 'Terpantau' : 'On track', count: roster.length - needsObservationCount },
  ];
  const filterGroup = document.getElementById('observation-student-filters');
  filterGroup.setAttribute('aria-label', state.lang === 'id' ? 'Filter status anak' : 'Filter children by status');
  filterGroup.innerHTML = observationFilterOptions.map(option => `
        <button type="button" class="observation-filter-chip ${state.observationStudentFilter === option.id ? 'is-active' : ''}"
          data-observation-filter="${option.id}" aria-pressed="${state.observationStudentFilter === option.id}">
          <span aria-hidden="true">${option.icon}</span>${option.label}<span class="observation-filter-count">${option.count}</span>
        </button>
      `).join('');
  filterGroup.querySelectorAll('[data-observation-filter]').forEach(button => {
    button.addEventListener('click', () => {
      state.observationStudentFilter = button.dataset.observationFilter;
      filterGroup.querySelectorAll('[data-observation-filter]').forEach(filterButton => {
        const isActive = filterButton === button;
        filterButton.classList.toggle('is-active', isActive);
        filterButton.setAttribute('aria-pressed', String(isActive));
      });
      filterObservationStudents(searchInput.value);
    });
  });
  const cardDoodles = ['🌼', '🦋', '☀️', '🍀', '🌷', '✨'];
  grid.innerHTML = state.databaseStatus.students ? (roster.length ? roster.map((s, index) => {
    const noteCount = state.observationsLog.filter(observation => observation.studentId === s.id).length;
    const needsAttention = s.needsAttention;
    return `
        <article data-observe-student="${escapeHTML(s.id)}" data-student-name="${escapeHTML(s.name.toLocaleLowerCase())}"
          data-student-status="${needsAttention ? 'needs' : 'observed'}"
          class="observation-student-card ${needsAttention ? 'needs-attention' : 'has-observation'}"
          tabindex="0" aria-label="${escapeHTML(`${state.lang === 'id' ? 'Catat observasi untuk' : 'Record observation for'} ${s.name}`)}">
          <div class="observation-student-card-top">
            <span class="observation-student-avatar ${needsAttention ? 'is-attention' : ''}">
              ${escapeHTML(getInitials(s.name))}
              <span class="observation-student-doodle" aria-hidden="true">${cardDoodles[index % cardDoodles.length]}</span>
            </span>
            <span class="observation-student-status ${needsAttention ? 'is-attention' : 'is-observed'}">
              <span aria-hidden="true">${needsAttention ? '•' : '✓'}</span>
              ${needsAttention ? (state.lang === 'id' ? 'Perlu diamati' : 'Needs attention') : (state.lang === 'id' ? 'Terpantau' : 'On track')}
            </span>
          </div>
          <h3 class="observation-student-name">${escapeHTML(s.name)}</h3>
          <p class="observation-student-meta">${escapeHTML(s.className || '')}${s.age && s.age !== '—' ? ` · ${escapeHTML(s.age)}` : ''}</p>
          <span class="observation-student-note-count">🌿 ${noteCount} ${state.lang === 'id' ? 'catatan' : 'notes'}</span>
          <div class="observation-student-actions">
            <button type="button" data-record-student="${escapeHTML(s.id)}" class="observation-record-action">
              ${state.lang === 'id' ? 'Yuk, amati' : 'Let’s observe'} <span aria-hidden="true">✦</span>
            </button>
            ${state.currentUser?.role === 'parent' ? '' : `<button type="button" data-preview-student="${escapeHTML(s.id)}" class="observation-preview-action">${state.lang === 'id' ? 'Pratinjau' : 'Preview'}</button>`}
            ${isAdminUser() ? `<button type="button" data-delete-student="${escapeHTML(s.id)}" class="observation-delete-action">${state.lang === 'id' ? 'Hapus anak' : 'Delete child'}</button>` : ''}
          </div>
        </article>
      `;
  }).join('') : `<p class="observation-grid-empty">${state.lang === 'id' ? 'Belum ada data siswa di database.' : 'No students found in the database.'}</p>`)
    : `<p class="observation-grid-empty">${state.lang === 'id' ? 'Data siswa belum dapat dimuat dari database.' : 'Could not load students from the database.'}</p>`;
  grid.querySelectorAll('[data-observe-student]').forEach(card => {
    const openCard = () => openObservationModal(card.dataset.observeStudent);
    card.addEventListener('click', openCard);
    card.addEventListener('keydown', event => {
      if (event.target !== card) return;
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        openCard();
      }
    });
  });
  grid.querySelectorAll('[data-preview-student]').forEach(button => {
    button.addEventListener('click', event => {
      event.stopPropagation();
      openStudentParentPreview(button.dataset.previewStudent);
    });
  });
  grid.querySelectorAll('[data-record-student]').forEach(button => {
    button.addEventListener('click', event => {
      event.stopPropagation();
      openObservationModal(button.dataset.recordStudent);
    });
  });
  grid.querySelectorAll('[data-delete-student]').forEach(button => {
    button.addEventListener('click', event => {
      event.stopPropagation();
      void deleteStudentFromSupabase(button.dataset.deleteStudent);
    });
  });
  filterObservationStudents(searchInput.value);

  feed.innerHTML = state.databaseStatus.observations ? (feedObservations.length ? feedObservations.map(obs => {
    const dColor = getDomainColor(obs.domain);
    return `
          <article class="observation-feed-item">
            <div class="observation-feed-avatar">${escapeHTML(getInitials(obs.studentName))}</div>
            <div class="observation-feed-content">
              <div class="observation-feed-meta">
                <span class="observation-feed-student">${escapeHTML(obs.studentName)}</span>
                <span class="observation-domain-pill ${dColor.bgLight} ${dColor.textColor}">${dColor.label}</span>
                <span class="observation-feed-time">${escapeHTML(obs.time)}</span>
              </div>
              <p class="observation-feed-milestone">${escapeHTML(obs.milestone)}</p>
              <p class="observation-feed-note">${escapeHTML(obs.anecdote)}</p>
            </div>
            <span class="observation-mastery-pill">${getMasteryLabel(obs.level)}</span>
          </article>
        `;
  }).join('') : `<p class="observation-feed-empty">${state.lang === 'id' ? 'Belum ada catatan observasi. Mulai dengan memilih anak di atas.' : 'No observations yet. Start by selecting a child above.'}</p>`)
    : `<p class="observation-feed-empty is-error">${state.lang === 'id' ? 'Data observasi belum dapat dimuat dari database.' : 'Could not load observations from the database.'}</p>`;
}

function filterObservationStudents(query = '') {
  const grid = document.getElementById('students-grid');
  const cards = [...grid.querySelectorAll('[data-observe-student]')];
  const normalizedQuery = query.trim().toLocaleLowerCase();
  let visibleCount = 0;
  cards.forEach(card => {
    const matches = card.dataset.studentName.includes(normalizedQuery) &&
      (state.observationStudentFilter === 'all' || card.dataset.studentStatus === state.observationStudentFilter);
    card.classList.toggle('is-filtered', !matches);
    if (matches) visibleCount += 1;
  });
  const result = document.getElementById('observation-search-result');
  const isFiltering = normalizedQuery || state.observationStudentFilter !== 'all';
  result.textContent = isFiltering
    ? `${visibleCount} ${state.lang === 'id' ? 'dari' : 'of'} ${cards.length} ${state.lang === 'id' ? 'anak' : 'children'}`
    : '';
  const noResults = document.getElementById('observation-no-results');
  noResults.textContent = state.lang === 'id'
    ? (state.observationStudentFilter !== 'all' && !normalizedQuery
      ? 'Belum ada anak pada status ini. Coba filter lainnya.'
      : 'Tidak ada anak yang cocok dengan pencarian atau filter.')
    : (state.observationStudentFilter !== 'all' && !normalizedQuery
      ? 'No children in this status yet. Try another filter.'
      : 'No children match this search or filter.');
  noResults.classList.toggle('hidden', !cards.length || visibleCount > 0);
}

async function deleteStudentFromSupabase(studentId) {
  if (!isAdminUser()) {
    showToast(state.lang === 'id'
      ? 'Hanya administrator yang dapat menghapus anak.'
      : 'Only administrators can delete children.', '⚠️');
    return;
  }
  const student = state.allStudents.find(item => item.id === studentId);
  if (!student?._fromDB) return;

  const confirmed = window.confirm(state.lang === 'id'
    ? `Hapus permanen ${student.name}? Semua catatan observasi, pesan, dan profil orang tua terkait juga akan dihapus. Tindakan ini tidak dapat dibatalkan.`
    : `Permanently delete ${student.name}? All related observations, messages, and parent profiles will also be deleted. This cannot be undone.`);
  if (!confirmed) return;

  try {
    const deletedObservations = state.databaseObservations.filter(item => item.student_id === student.id);
    const { error } = await sb.rpc('admin_delete_student', { p_student_id: student.id });
    if (error) throw error;

    const storage = sb.storage.from('student-observation-photos');
    let removedPhotoCount = 0;
    let photoCleanupError = null;
    const findPhotoPaths = async prefix => {
      const paths = [];
      let offset = 0;
      while (true) {
        const { data: files, error: listError } = await storage.list(prefix, { limit: 100, offset });
        if (listError) throw listError;
        for (const file of files || []) {
          const path = `${prefix}/${file.name}`;
          if (file.id) paths.push(path);
          else paths.push(...await findPhotoPaths(path));
        }
        if (!files || files.length < 100) break;
        offset += files.length;
      }
      return paths;
    };
    try {
      const photoPaths = await findPhotoPaths(student.id);
      for (let index = 0; index < photoPaths.length; index += 100) {
        const batch = photoPaths.slice(index, index + 100);
        const { error: removeError } = await storage.remove(batch);
        if (removeError) throw removeError;
        removedPhotoCount += batch.length;
      }
    } catch (error) {
      photoCleanupError = error;
    }

    state.allStudents = state.allStudents.filter(item => item.id !== student.id);
    state.students = state.students.filter(item => item.id !== student.id);
    state.databaseObservations = state.databaseObservations.filter(item => item.student_id !== student.id);
    state.observationsLog = state.observationsLog.filter(item => item.studentId !== student.id);
    if (state.databaseObservationCount !== null) {
      state.databaseObservationCount = Math.max(0, state.databaseObservationCount - deletedObservations.length);
    }
    if (state.databaseRecentObservationCount !== null) {
      const recentCount = deletedObservations.filter(item =>
        item.created_at && Date.now() - new Date(item.created_at).getTime() < 24 * 60 * 60 * 1000
      ).length;
      state.databaseRecentObservationCount = Math.max(0, state.databaseRecentObservationCount - recentCount);
    }
    if (state.previewStudentId === student.id) state.previewStudentId = '';
    renderView();
    showToast(photoCleanupError
      ? `${state.lang === 'id'
        ? `${student.name} berhasil dihapus, tetapi sebagian foto mungkin masih tersimpan`
        : `${student.name} was deleted, but some photos may remain in storage`}: ${photoCleanupError.message || photoCleanupError}`
      : (state.lang === 'id'
        ? `${student.name} dan ${removedPhotoCount} foto terkait berhasil dihapus permanen.`
        : `${student.name} and ${removedPhotoCount} related photos were permanently deleted.`), photoCleanupError ? '⚠️' : '🗑️');
  } catch (error) {
    console.warn('[Supabase] permanent student deletion failed:', error);
    showToast(`${state.lang === 'id'
      ? 'Penghapusan anak gagal atau foto terkait belum seluruhnya terhapus'
      : 'Student deletion failed or some related photos could not be removed'}: ${error.message || error}`, '⚠️');
  }
}

function openAddStudentModal() {
  if (!isAdminUser()) {
    showToast(state.lang === 'id'
      ? 'Hanya administrator yang dapat menambahkan anak.'
      : 'Only administrators can add children.', '⚠️');
    return;
  }
  if (!state.databaseStatus.students || !state.databaseStatus.classes) {
    showToast(state.lang === 'id'
      ? 'Data kelas atau siswa belum tersedia. Muat ulang halaman dan coba lagi.'
      : 'Student or class data is unavailable. Reload the page and try again.', '⚠️');
    return;
  }
  if (!state.classes.length) {
    showToast(state.lang === 'id' ? 'Belum ada kelas untuk dipilih.' : 'There are no classes to choose from.', '⚠️');
    return;
  }

  const labels = state.lang === 'id'
    ? {
      eyebrow: 'Ruang tumbuh anak',
      title: 'Tambah Anak',
      subtitle: 'Daftarkan anak ke kelas agar dapat dicatat perkembangannya.',
      name: 'Nama lengkap anak',
      class: 'Kelas',
      parentSection: 'Data Akun Orang Tua / Wali',
      parentName: 'Nama Orang Tua / Wali',
      parentPhone: 'No. WhatsApp / HP Ortu',
      parentPin: 'PIN Masuk Ortu',
      note: '✨ Anak baru akan langsung muncul di daftar observasi & orang tua dapat langsung login ke Portal Orang Tua.',
      cancel: 'Batal',
      submit: 'Simpan Anak',
      chooseClass: 'Pilih kelas',
    }
    : {
      eyebrow: 'A space to grow',
      title: 'Add Child',
      subtitle: 'Add a child to a class so their learning progress can be recorded.',
      name: 'Child’s full name',
      class: 'Class',
      parentSection: 'Parent / Guardian Account',
      parentName: 'Parent / Guardian Name',
      parentPhone: 'Parent Phone / WhatsApp',
      parentPin: 'Parent Access PIN',
      note: '✨ The new child will appear in the observation list & parents can immediately log in.',
      cancel: 'Cancel',
      submit: 'Save Child',
      chooseClass: 'Choose a class',
    };
  document.getElementById('add-student-eyebrow').textContent = labels.eyebrow;
  document.getElementById('add-student-title').textContent = labels.title;
  document.getElementById('add-student-subtitle').textContent = labels.subtitle;
  document.getElementById('new-student-name-label').textContent = labels.name;
  document.getElementById('new-student-class-label').textContent = labels.class;
  const parentSectionEl = document.getElementById('add-student-parent-section-title');
  if (parentSectionEl) parentSectionEl.textContent = labels.parentSection;
  const parentNameLabel = document.getElementById('new-student-parent-name-label');
  if (parentNameLabel) parentNameLabel.textContent = labels.parentName;
  const parentPhoneLabel = document.getElementById('new-student-parent-phone-label');
  if (parentPhoneLabel) parentPhoneLabel.innerHTML = `${labels.parentPhone} <span class="text-terracotta">*</span>`;
  const parentPinLabel = document.getElementById('new-student-parent-pin-label');
  if (parentPinLabel) parentPinLabel.innerHTML = `${labels.parentPin} <span class="text-terracotta">*</span>`;
  document.getElementById('add-student-note').textContent = labels.note;
  document.getElementById('add-student-cancel').textContent = labels.cancel;
  document.getElementById('add-student-submit').textContent = labels.submit;

  const classSelect = document.getElementById('new-student-class');
  classSelect.innerHTML = `<option value="">${labels.chooseClass}</option>` + state.classes.map(classItem =>
    `<option value="${escapeHTML(classItem.id)}">${escapeHTML(classItem.name)}</option>`
  ).join('');
  document.getElementById('add-student-form').reset();
  const parentPinInput = document.getElementById('new-student-parent-pin');
  if (parentPinInput) parentPinInput.value = '1234';
  const siblingHint = document.getElementById('parent-phone-sibling-hint');
  if (siblingHint) {
    siblingHint.classList.add('hidden');
    siblingHint.innerHTML = '';
  }

  const phoneInput = document.getElementById('new-student-parent-phone');
  if (phoneInput && !phoneInput.dataset.siblingBound) {
    phoneInput.dataset.siblingBound = 'true';
    let timer;
    phoneInput.addEventListener('input', () => {
      clearTimeout(timer);
      timer = setTimeout(async () => {
        const raw = phoneInput.value.trim();
        const clean = normalizePhoneNumber(raw);
        const hint = document.getElementById('parent-phone-sibling-hint');
        const nameInput = document.getElementById('new-student-parent-name');
        const pinInput = document.getElementById('new-student-parent-pin');
        if (!clean || clean.length < 9) {
          if (hint) hint.classList.add('hidden');
          return;
        }
        if (typeof sb !== 'undefined' && sb) {
          try {
            const { data } = await sb.from('parents')
              .select('parent_name, pin')
              .or(`phone_number.eq.${clean},phone_number.eq.${raw}`)
              .limit(1);
            if (data && data.length > 0) {
              if (hint) {
                hint.classList.remove('hidden');
                hint.innerHTML = `<span>👨‍👩‍👧‍👦</span> <span>Nomor terdaftar atas nama <b>${escapeHTML(data[0].parent_name)}</b>. Anak baru akan otomatis ditautkan ke akun orang tua yang sama!</span>`;
              }
              if (nameInput && !nameInput.value.trim()) {
                nameInput.value = data[0].parent_name;
              }
              if (pinInput && data[0].pin) {
                pinInput.value = data[0].pin;
              }
              return;
            }
          } catch (e) {
            console.warn('[parentLookup]', e);
          }
        }
        if (hint) hint.classList.add('hidden');
      }, 350);
    });
  }

  if (state.activeClassId && state.classes.some(classItem => classItem.id === state.activeClassId)) {
    classSelect.value = state.activeClassId;
  }
  enhanceSearchableSelect(classSelect);
  openModal('modal-add-student');
  document.getElementById('new-student-name').focus();
}

async function saveNewStudent(event) {
  event.preventDefault();
  if (!isAdminUser()) {
    showToast(state.lang === 'id'
      ? 'Hanya administrator yang dapat menambahkan anak.'
      : 'Only administrators can add children.', '⚠️');
    return;
  }
  const nameInput = document.getElementById('new-student-name');
  const nicknameInput = document.getElementById('new-student-nickname');
  const classSelect = document.getElementById('new-student-class');
  const parentNameInput = document.getElementById('new-student-parent-name');
  const parentPhoneInput = document.getElementById('new-student-parent-phone');
  const parentPinInput = document.getElementById('new-student-parent-pin');

  const fullName = nameInput.value.trim();
  const rawNickname = nicknameInput ? nicknameInput.value.trim() : '';
  const finalNickname = rawNickname || fullName.split(' ')[0];
  const classId = classSelect.value;
  const rawPhone = parentPhoneInput ? parentPhoneInput.value.trim() : '';
  const pin = parentPinInput ? parentPinInput.value.trim() : '';
  const parentName = parentNameInput && parentNameInput.value.trim()
    ? parentNameInput.value.trim()
    : `Orang Tua ${fullName}`;

  if (!fullName || !classId) {
    showToast(state.lang === 'id' ? 'Isi nama anak dan pilih kelas terlebih dahulu.' : 'Enter the child’s name and choose a class.', '⚠️');
    return;
  }
  if (!rawPhone || !pin) {
    showToast(state.lang === 'id' ? 'Nomor HP dan PIN Orang Tua wajib diisi.' : 'Parent phone number and PIN are required.', '⚠️');
    return;
  }

  const cleanPhone = normalizePhoneNumber(rawPhone);

  const selectedClass = state.classes.find(classItem => classItem.id === classId);
  if (!selectedClass?.school_id) {
    showToast(state.lang === 'id'
      ? 'Sekolah untuk kelas ini tidak ditemukan. Periksa data kelas di database.'
      : 'The school for this class could not be found. Check the class record in the database.', '⚠️');
    return;
  }

  const submitButton = document.getElementById('add-student-submit');
  submitButton.disabled = true;
  submitButton.textContent = state.lang === 'id' ? 'Menyimpan...' : 'Saving...';
  try {
    // 1. Insert new student into 'students' table with nickname
    const { data: newStudent, error: studentError } = await sb.from('students').insert([{
      full_name: fullName,
      nickname: finalNickname,
      class_id: classId,
      school_id: selectedClass.school_id,
    }]).select().single();
    if (studentError) throw studentError;

    // 2. Automatically link or register in 'parents' table (Supports siblings / multiple children per parent phone)
    const { data: existingParents, error: parentCheckError } = await sb.from('parents')
      .select('id, student_id, parent_name, phone_number, pin')
      .or(`phone_number.eq.${cleanPhone},phone_number.eq.${rawPhone}`);

    if (parentCheckError) {
      console.warn('[Supabase] parent check warning:', parentCheckError);
    }

    if (existingParents && existingParents.length > 0) {
      const effectivePin = pin || existingParents[0].pin;
      const effectiveName = parentName || existingParents[0].parent_name;
      const unlinked = existingParents.find(p => !p.student_id);
      if (unlinked) {
        await sb.from('parents').update({
          student_id: newStudent.id,
          parent_name: effectiveName,
          pin: effectivePin,
        }).eq('id', unlinked.id);
      } else {
        await sb.from('parents').insert([{
          student_id: newStudent.id,
          parent_name: effectiveName,
          phone_number: cleanPhone,
          pin: effectivePin,
        }]);
      }
      // Synchronize PIN across all sibling entries so mom can log in to view all children with one PIN
      if (pin) {
        await sb.from('parents').update({ pin: pin }).eq('phone_number', cleanPhone);
      }
    } else {
      await sb.from('parents').insert([{
        student_id: newStudent.id,
        parent_name: parentName,
        phone_number: cleanPhone,
        pin: pin,
      }]);
    }

    closeModal('modal-add-student');
    document.getElementById('add-student-form').reset();
    const studentsLoaded = await loadStudentsFromSupabase();
    if (!studentsLoaded) {
      renderView();
      showToast(state.lang === 'id'
        ? 'Anak tersimpan, tetapi daftar gagal diperbarui. Muat ulang halaman.'
        : 'Child saved, but the list could not refresh. Reload the page.', '⚠️');
      return;
    }
    await loadObservationsFromSupabase();
    renderView();
    showToast(state.lang === 'id' ? `${fullName} & Akun Orang Tua (${cleanPhone}) berhasil ditambahkan!` : `${fullName} & parent account registered!`, '🌱');
  } catch (error) {
    console.warn('[Supabase] student insert failed:', error);
    const reason = error?.message || String(error);
    showToast(state.lang === 'id'
      ? `Anak gagal ditambahkan: ${reason}`
      : `Could not add child: ${reason}`, '⚠️');
  } finally {
    submitButton.disabled = false;
    submitButton.textContent = state.lang === 'id' ? 'Simpan Anak & Akun Orang Tua' : 'Save Child & Parent';
  }
}

function openObservationModal(studentId = state.students[0]?.id) {
  if (!['admin', 'teacher'].includes(state.currentUser?.role)) {
    showToast(state.lang === 'id'
      ? 'Akses mencatat observasi ditolak.'
      : 'You cannot record observations.', '⚠️');
    return;
  }

  const roster = state.currentUser?.role === 'parent' ? state.students : state.allStudents;
  const student = roster.find(s => s.id === studentId) || roster[0];
  if (!student) {
    showToast(state.lang === 'id' ? 'Data siswa belum tersedia.' : 'No student data is available.', '⚠️');
    return;
  }
  state.selectedStudentForObs = student;

  document.getElementById('obs-modal-student-name').textContent =
    `${state.lang === 'id' ? 'Observasi' : 'Observation'}: ${student.name}`;
  document.getElementById('obs-modal-avatar-initials').textContent = getInitials(student.name);
  document.getElementById('obs-anecdote-input').value = '';
  removeObsPhoto();
  const milestones = state.curriculumData.filter(item => item._fromDB);
  if (!milestones.length) {
    showToast(state.lang === 'id'
      ? 'Indikator belum tersedia dari kurikulum database.'
      : 'No observation indicators are available from the database.', '⚠️');
    return;
  }
  renderObservationMilestones();

  selectObsLevel('developing');
  openModal('modal-observation');
}

function selectObsLevel(level) {
  state.obsLevel = level;
  document.querySelectorAll('.obs-level-btn').forEach(btn => {
    if (btn.dataset.level === level) {
      btn.classList.add('ring-2', 'ring-forest');
    } else {
      btn.classList.remove('ring-2', 'ring-forest');
    }
  });
}

// -------------------------------------------------------------
// HEIC / HEIF & PHOTO DRAG-AND-DROP HELPERS
// -------------------------------------------------------------
function removeObsPhoto(event) {
  if (event) {
    event.preventDefault();
    event.stopPropagation();
  }
  const photoInput = document.getElementById('obs-photo-file');
  if (photoInput) photoInput.value = '';
  window.__currentObsPhotoFile = null;

  const emptyState = document.getElementById('obs-photo-empty-state');
  const previewState = document.getElementById('obs-photo-preview-state');
  const previewImg = document.getElementById('obs-photo-preview-img');
  const dropzone = document.getElementById('obs-photo-dropzone');

  if (emptyState) emptyState.classList.remove('hidden');
  if (previewState) previewState.classList.add('hidden');
  if (previewImg) {
    previewImg.src = '';
    previewImg.classList.add('hidden');
  }
  if (dropzone) {
    dropzone.classList.remove('border-forest', 'bg-sage-50/70', 'ring-2', 'ring-forest/30');
  }
}

function handleObsPhotoSelect(file) {
  if (!file) return;
  window.__currentObsPhotoFile = file;

  const emptyState = document.getElementById('obs-photo-empty-state');
  const previewState = document.getElementById('obs-photo-preview-state');
  const fileNameEl = document.getElementById('obs-photo-file-name');
  const fileSizeEl = document.getElementById('obs-photo-file-size');
  const previewImg = document.getElementById('obs-photo-preview-img');
  const previewIcon = document.getElementById('obs-photo-preview-icon');

  if (emptyState) emptyState.classList.add('hidden');
  if (previewState) previewState.classList.remove('hidden');
  if (fileNameEl) fileNameEl.textContent = file.name;
  if (fileSizeEl) {
    const sizeMb = (file.size / (1024 * 1024)).toFixed(2);
    fileSizeEl.textContent = `${sizeMb} MB`;
  }

  const isHeic = file.type === 'image/heic' || file.type === 'image/heif' || file.name.toLowerCase().endsWith('.heic') || file.name.toLowerCase().endsWith('.heif');
  if (!isHeic && file.type.startsWith('image/')) {
    try {
      const objUrl = URL.createObjectURL(file);
      if (previewImg) {
        previewImg.src = objUrl;
        previewImg.classList.remove('hidden');
      }
      if (previewIcon) previewIcon.classList.add('hidden');
    } catch (e) {
      if (previewImg) previewImg.classList.add('hidden');
      if (previewIcon) previewIcon.classList.remove('hidden');
    }
  } else {
    if (previewImg) previewImg.classList.add('hidden');
    if (previewIcon) {
      previewIcon.classList.remove('hidden');
      previewIcon.textContent = '📸';
    }
  }
}

function initObsPhotoDropzone() {
  const dropzone = document.getElementById('obs-photo-dropzone');
  const fileInput = document.getElementById('obs-photo-file');
  if (!dropzone || !fileInput) return;

  fileInput.addEventListener('change', (e) => {
    const file = e.target.files?.[0];
    if (file) handleObsPhotoSelect(file);
  });

  ['dragenter', 'dragover'].forEach(eventName => {
    dropzone.addEventListener(eventName, (e) => {
      e.preventDefault();
      e.stopPropagation();
      dropzone.classList.add('border-forest', 'bg-sage-50/70', 'ring-2', 'ring-forest/30');
    }, false);
  });

  ['dragleave', 'dragend'].forEach(eventName => {
    dropzone.addEventListener(eventName, (e) => {
      e.preventDefault();
      e.stopPropagation();
      dropzone.classList.remove('border-forest', 'bg-sage-50/70', 'ring-2', 'ring-forest/30');
    }, false);
  });

  dropzone.addEventListener('drop', (e) => {
    e.preventDefault();
    e.stopPropagation();
    dropzone.classList.remove('border-forest', 'bg-sage-50/70', 'ring-2', 'ring-forest/30');

    const dt = e.dataTransfer;
    const file = dt?.files?.[0];
    if (file) {
      try {
        const dataTransfer = new DataTransfer();
        dataTransfer.items.add(file);
        fileInput.files = dataTransfer.files;
      } catch (err) {
        // Fallback store in window.__currentObsPhotoFile
      }
      handleObsPhotoSelect(file);
    }
  }, false);
}

async function ensureJpegCompatiblePhoto(file) {
  if (!file) return null;
  const fileName = (file.name || '').toLowerCase();
  const isHeic = file.type === 'image/heic' || file.type === 'image/heif' || fileName.endsWith('.heic') || fileName.endsWith('.heif');
  
  if (!isHeic) {
    return file;
  }

  // 1. Try conversion using heic2any
  try {
    if (typeof heic2any === 'function') {
      const converted = await heic2any({
        blob: file,
        toType: 'image/jpeg',
        quality: 0.85
      });
      const jpegBlob = Array.isArray(converted) ? converted[0] : converted;
      const newName = file.name.replace(/\.(heic|heif)$/i, '.jpg');
      return new File([jpegBlob], newName, { type: 'image/jpeg' });
    }
  } catch (convErr) {
    console.warn('[HEIC] Conversion with heic2any failed:', convErr);
  }

  // 2. Try native canvas decode (Safari/macOS/iOS)
  try {
    if (typeof createImageBitmap === 'function') {
      const bitmap = await createImageBitmap(file);
      const canvas = document.createElement('canvas');
      canvas.width = bitmap.width;
      canvas.height = bitmap.height;
      const ctx = canvas.getContext('2d');
      ctx.drawImage(bitmap, 0, 0);
      const jpegBlob = await new Promise(resolve => canvas.toBlob(resolve, 'image/jpeg', 0.85));
      if (jpegBlob) {
        const newName = file.name.replace(/\.(heic|heif)$/i, '.jpg');
        return new File([jpegBlob], newName, { type: 'image/jpeg' });
      }
    }
  } catch (canvasErr) {
    console.warn('[HEIC] Canvas decode failed:', canvasErr);
  }

  // 3. Fallback: wrap with image/jpeg so Supabase storage accepts it without 415 error
  const newName = file.name.replace(/\.(heic|heif)$/i, '.jpg');
  return new File([file], newName, { type: 'image/jpeg' });
}

async function saveObservation() {
  if (!['admin', 'teacher'].includes(state.currentUser?.role)) {
    showToast(state.lang === 'id' ? 'Akses mencatat observasi ditolak.' : 'You cannot record observations.', '⚠️');
    return;
  }
  const student = state.selectedStudentForObs;
  if (!student) {
    showToast(state.lang === 'id' ? 'Pilih siswa sebelum mencatat observasi.' : 'Select a student before recording an observation.', '⚠️');
    return;
  }

  const anecdote = document.getElementById('obs-anecdote-input').value.trim() ||
    (state.lang === 'id' ? 'Anak menyelesaikan eksplorasi mandiri dengan fokus tenang.' : 'Child completed exploration independently with focused poise.');
  const milestone = document.getElementById('obs-milestone-select').value;
  if (!milestone) {
    showToast(state.lang === 'id'
      ? 'Pilih indikator yang diamati terlebih dahulu.'
      : 'Choose an observation indicator first.', '⚠️');
    return;
  }

  const photoInput = document.getElementById('obs-photo-file');
  const rawPhotoFile = window.__currentObsPhotoFile || photoInput?.files?.[0] || null;

  const allowedPhotoTypes = ['image/jpeg', 'image/png', 'image/webp', 'image/heic', 'image/heif'];
  const photoName = (rawPhotoFile?.name || '').toLowerCase();
  const isHeicOrHeifExt = photoName.endsWith('.heic') || photoName.endsWith('.heif');
  const isAllowedPhotoType = rawPhotoFile && (allowedPhotoTypes.includes(rawPhotoFile.type) || isHeicOrHeifExt);
  
  if (rawPhotoFile && (!isAllowedPhotoType || rawPhotoFile.size > 8 * 1024 * 1024)) {
    showToast(state.lang === 'id'
      ? 'Pilih foto JPG, PNG, WebP, atau HEIC dengan ukuran maksimal 8 MB.'
      : 'Choose a JPG, PNG, WebP, or HEIC photo no larger than 8 MB.', '⚠️');
    return;
  }

  // Visual loading state on Save button
  const saveBtn = document.getElementById('btn-save-obs');
  const spinner = document.getElementById('save-obs-spinner');
  const btnText = document.getElementById('save-obs-btn-text');
  if (saveBtn) saveBtn.disabled = true;
  if (spinner) spinner.classList.remove('hidden');
  if (btnText) btnText.textContent = state.lang === 'id' ? 'Menyimpan...' : 'Saving...';

  try {
    let finalPhotoFile = rawPhotoFile;
    if (rawPhotoFile && isHeicOrHeifExt) {
      if (btnText) btnText.textContent = state.lang === 'id' ? 'Mengonversi foto HEIC...' : 'Converting HEIC...';
      finalPhotoFile = await ensureJpegCompatiblePhoto(rawPhotoFile);
      if (btnText) btnText.textContent = state.lang === 'id' ? 'Menyimpan...' : 'Saving...';
    }

    const observation = {
      studentId: student.id,
      studentName: student.name,
      domain: 'science',
      milestone,
      level: state.obsLevel,
      time: state.lang === 'id' ? 'Baru saja' : 'Just now',
      anecdote,
      photoFile: finalPhotoFile,
    };

    if (student._fromDB) {
      let saved = await saveObservationToSupabase(observation);
      
      // If upload failed with photo, fallback to saving without photo so observation is never lost
      if (!saved && finalPhotoFile) {
        console.warn('[saveObservation] Save with photo failed, attempting save without photo...');
        saved = await saveObservationToSupabase({ ...observation, photoFile: null });
        if (saved) {
          showToast(state.lang === 'id' ? 'Observasi tersimpan (tanpa foto karena kendala upload).' : 'Observation saved without photo.', '⚠️');
        }
      }

      if (!saved) {
        showToast(state.lang === 'id' ? 'Gagal menyimpan observasi ke database.' : 'Failed to save observation.', '❌');
        return;
      }

      try {
        await signObservationPhotos([saved]);
      } catch (error) {
        console.warn('[Supabase] saved observation photo preview could not be generated:', error);
      }
      state.databaseObservations.unshift(saved);
      if (state.databaseObservationCount !== null) state.databaseObservationCount += 1;
      if (state.databaseRecentObservationCount !== null &&
        saved.created_at && Date.now() - new Date(saved.created_at).getTime() < 24 * 60 * 60 * 1000) {
        state.databaseRecentObservationCount += 1;
      }
      applyDatabaseObservations();
      showToast(
        state.lang === 'id' ? 'Observasi berhasil disimpan ke database.' : 'Observation saved to the database.',
        '✅'
      );
    } else {
      showToast(state.lang === 'id'
        ? 'Observasi tidak disimpan: siswa belum terhubung ke database.'
        : 'Observation was not saved: the student is not connected to the database.', '⚠️');
      return;
    }

    removeObsPhoto();
    closeModal('modal-observation');
    renderView();

  } catch (err) {
    console.error('[saveObservation] Error:', err);
    showToast(state.lang === 'id' ? `Gagal menyimpan: ${err.message || err}` : `Save failed: ${err.message || err}`, '❌');
  } finally {
    if (saveBtn) saveBtn.disabled = false;
    if (spinner) spinner.classList.add('hidden');
    if (btnText) btnText.textContent = state.lang === 'id' ? 'Simpan Observasi (Catat)' : 'Save Observation';
  }
}

const messageLoadSequence = { parent: 0, teacher: 0, inbox: 0, sharedThread: 0 };
let activeAdminMessageConversation = null;
let activeTeacherMessageConversation = null;

function renderTeacherMessageWidget() {
  const canViewInbox = isAdminUser() || state.currentUser?.role === 'teacher';
  const inboxSection = document.getElementById('teacher-message-inbox-section');
  inboxSection?.classList.toggle('hidden', !canViewInbox);
  const controls = document.getElementById('teacher-message-controls');
  controls?.classList.add('hidden');
  const conversationPanel = document.getElementById('teacher-message-conversation-panel');
  const activeConversation = isAdminUser()
    ? activeAdminMessageConversation
    : activeTeacherMessageConversation;
  conversationPanel?.classList.toggle('hidden', !activeConversation);
  inboxSection?.classList.toggle('hidden', !canViewInbox || Boolean(activeConversation));
  document.getElementById('teacher-message-compose')?.classList.toggle('hidden', !isAdminUser());
  const hint = document.getElementById('teacher-message-conversation-hint');
  if (hint) {
    hint.textContent = isAdminUser()
      ? (state.lang === 'id' ? 'Balas pesan orang tua sebagai admin.' : 'Reply to the parent as an administrator.')
      : (state.lang === 'id'
        ? 'Pesan orang tua bisa dibaca di sini. Balasan ditangani oleh admin.'
        : 'You can read parent messages here. Replies are handled by the admin team.');
  }
  const backButton = document.getElementById('teacher-message-back-button');
  if (backButton) {
    backButton.onclick = () => {
      activeAdminMessageConversation = null;
      activeTeacherMessageConversation = null;
      conversationPanel?.classList.add('hidden');
      inboxSection?.classList.remove('hidden');
    };
  }
  const studentSelect = document.getElementById('teacher-message-student');
  if (!studentSelect || !canViewInbox) return;
  if (!isAdminUser()) {
    void loadTeacherMessageInbox();
    return;
  }
  const selectedStudentId = studentSelect.value;
  const students = state.allStudents;
  studentSelect.innerHTML = `<option value="">${state.lang === 'id' ? 'Pilih anak...' : 'Choose a child...'}</option>` +
    students.map(student =>
      `<option value="${escapeHTML(student.id)}">${escapeHTML(student.name)}</option>`
    ).join('');
  studentSelect.value = students.some(student => student.id === selectedStudentId)
    ? selectedStudentId
    : students[0]?.id || '';
  studentSelect.disabled = students.length === 0;
  enhanceSearchableSelect(studentSelect);
  void loadAdminMessageInbox();
}

function refreshTeacherMessages() {
  if (isAdminUser()) {
    void loadAdminMessageInbox();
    if (activeAdminMessageConversation) void loadParentAdminMessageThread(activeAdminMessageConversation);
  } else if (activeTeacherMessageConversation) {
    void loadTeacherMessageThread(activeTeacherMessageConversation);
  } else {
    void loadTeacherMessageInbox();
  }
}

function messageSurfaceElements(surface) {
  return surface === 'parent'
    ? {
      contact: document.getElementById('parent-message-contact'),
      thread: document.getElementById('chat-messages-container'),
      input: document.getElementById('parent-reply-input'),
      button: document.getElementById('parent-message-send-button'),
      studentId: state.previewStudentId || state.students[0]?.id || '',
    }
    : {
      contact: document.getElementById('teacher-message-contact'),
      thread: document.getElementById('teacher-message-thread'),
      input: document.getElementById('teacher-reply-input'),
      button: document.getElementById('teacher-message-send-button'),
      studentId: document.getElementById('teacher-message-student')?.value || '',
    };
}

async function loadMessageConversation(surface) {
  if (surface === 'teacher' && !isAdminUser()) return;
  const elements = messageSurfaceElements(surface);
  if (!elements.contact || !elements.thread || !elements.input || !elements.button) return;
  const requestNumber = ++messageLoadSequence[surface];
  const selectedContactId = elements.contact.value;
  elements.input.disabled = true;
  elements.button.disabled = true;
  elements.thread.textContent = state.lang === 'id' ? 'Memuat percakapan...' : 'Loading conversation...';
  if (!elements.studentId) {
    if (surface === 'parent') elements.contact.value = '';
    else elements.contact.replaceChildren(new Option(
      state.lang === 'id' ? 'Pilih anak terlebih dahulu' : 'Choose a child first',
      ''
    ));
    elements.contact.disabled = true;
    elements.thread.textContent = state.lang === 'id'
      ? (surface === 'teacher' && state.currentUser?.role === 'teacher'
        ? 'Belum ada anak pada kelas yang ditugaskan kepada Anda.'
        : 'Pilih anak untuk melihat pesan.')
      : (surface === 'teacher' && state.currentUser?.role === 'teacher'
        ? 'No children are in your assigned classes yet.'
        : 'Choose a child to view messages.');
    return;
  }

  try {
    let availableContacts = [];
    try {
      const { data: contacts, error: contactError } = await sb.rpc('get_message_contacts', {
        p_student_id: elements.studentId,
      });
      if (contactError) throw contactError;
      availableContacts = contacts || [];
    } catch (rpcError) {
      console.warn('[Supabase] get_message_contacts RPC fallback:', rpcError);
      if (surface === 'parent') {
        try {
          const { data: adminRows } = await sb.from('admins').select('id, full_name');
          if (adminRows && adminRows.length) {
            availableContacts = adminRows.map(a => ({
              contact_id: a.id,
              contact_name: a.full_name || 'Administrator Plego',
              contact_role: 'admin'
            }));
          }
        } catch (adminErr) {
          console.warn('[Supabase] admins table fallback error:', adminErr);
        }
        if (!availableContacts.length) {
          availableContacts = [
            { contact_id: '11111111-1111-1111-1111-111111111111', contact_name: 'Mba Ghina (Admin)', contact_role: 'admin' },
            { contact_id: '22222222-2222-2222-2222-222222222222', contact_name: 'Rayya (Admin)', contact_role: 'admin' }
          ];
        }
      } else {
        throw rpcError;
      }
    }
    if (requestNumber !== messageLoadSequence[surface]) return;

    if (surface === 'parent') {
      elements.contact.value = availableContacts.some(contact => contact.contact_id === selectedContactId)
        ? selectedContactId
        : availableContacts[0]?.contact_id || '';
    } else {
      elements.contact.replaceChildren(new Option(
        availableContacts.length
          ? (state.lang === 'id' ? 'Pilih kontak...' : 'Choose a contact...')
          : (state.lang === 'id' ? 'Belum ada kontak untuk kelas ini' : 'No contacts available for this class'),
        ''
      ));
      availableContacts.forEach(contact => {
        elements.contact.add(new Option(contact.contact_name, contact.contact_id));
      });
      elements.contact.value = availableContacts.some(contact => contact.contact_id === selectedContactId)
        ? selectedContactId
        : availableContacts[0]?.contact_id || '';
      enhanceSearchableSelect(elements.contact);
    }
    elements.contact.disabled = !availableContacts.length;
    if (surface === 'teacher') enhanceSearchableSelect(elements.contact);

    if (!elements.contact.value) {
      elements.thread.textContent = surface === 'parent'
        ? (state.lang === 'id'
          ? 'Belum ada akun admin yang tersedia untuk menerima pesan.'
          : 'No administrator account is available to receive messages.')
        : (state.lang === 'id'
          ? 'Belum ada akun orang tua/wali yang terhubung ke anak ini.'
          : 'No parent/guardian account is linked to this child yet.');
      return;
    }

    const activeContact = availableContacts.find(contact =>
      contact.contact_id === elements.contact.value
    ) || availableContacts[0];
    const currentUserId = state.currentUser?.id;
    let messages = [];
    try {
      const { data, error: messageError } = await sb.from('messages')
        .select('id, sender_id, recipient_id, student_id, message, created_at')
        .eq('student_id', elements.studentId)
        .or(`and(sender_id.eq.${currentUserId},recipient_id.eq.${activeContact.contact_id}),and(sender_id.eq.${activeContact.contact_id},recipient_id.eq.${currentUserId})`)
        .order('created_at', { ascending: false })
        .limit(100);
      if (!messageError && data) messages = data;
    } catch (msgErr) {
      console.warn('[Supabase] messages select caught:', msgErr);
    }
    if (requestNumber !== messageLoadSequence[surface]) return;

    const conversation = (messages || []).filter(item =>
      (item.sender_id === currentUserId && item.recipient_id === activeContact.contact_id) ||
      (item.sender_id === activeContact.contact_id && item.recipient_id === currentUserId)
    ).reverse();
    renderMessageThread(elements.thread, conversation, activeContact);
    elements.input.disabled = false;
    elements.button.disabled = false;
  } catch (error) {
    if (requestNumber !== messageLoadSequence[surface]) return;
    console.warn('[Supabase] message conversation load failed:', error);
    elements.contact.disabled = true;
    elements.thread.textContent = `${state.lang === 'id'
      ? 'Percakapan belum dapat dimuat'
      : 'Could not load conversation'}: ${error.message || error}`;
  }
}

async function loadMessageInbox(rpcName) {
  const section = document.getElementById('teacher-message-inbox-section');
  const container = document.getElementById('teacher-message-inbox');
  const count = document.getElementById('teacher-message-inbox-count');
  const search = document.getElementById('teacher-message-inbox-search');
  if (!section || !container || !count) return;
  const requestNumber = ++messageLoadSequence.inbox;
  const activeConversation = isAdminUser()
    ? activeAdminMessageConversation
    : activeTeacherMessageConversation;
  section.classList.toggle('hidden', Boolean(activeConversation));
  container.textContent = state.lang === 'id' ? 'Memuat pesan...' : 'Loading messages...';
  try {
    const { data, error } = await sb.rpc(rpcName);
    if (error) throw error;
    if (requestNumber !== messageLoadSequence.inbox) return;
    const conversations = data || [];
    count.textContent = String(conversations.length);
    container.replaceChildren();
    if (!conversations.length) {
      container.textContent = state.lang === 'id'
        ? 'Belum ada pesan masuk dari orang tua.'
        : 'No messages from parents yet.';
      return;
    }
    conversations.forEach(conversation => {
      const button = document.createElement('button');
      button.type = 'button';
      button.className = 'admin-message-inbox-item';
      button.dataset.studentId = conversation.student_id;
      button.dataset.parentId = conversation.parent_id;
      button.dataset.search = `${conversation.parent_name} ${conversation.student_name} ${conversation.last_message}`
        .toLocaleLowerCase();
      const heading = document.createElement('strong');
      heading.textContent = `${conversation.parent_name} · ${conversation.student_name}`;
      const preview = document.createElement('span');
      preview.textContent = conversation.last_message;
      const timestamp = document.createElement('time');
      timestamp.dateTime = conversation.last_message_at;
      timestamp.textContent = new Date(conversation.last_message_at).toLocaleString(
        state.lang === 'id' ? 'id-ID' : 'en-US',
        { dateStyle: 'short', timeStyle: 'short' }
      );
      button.append(heading, preview, timestamp);
      button.addEventListener('click', async () => {
        const isAdmin = isAdminUser();
        activeAdminMessageConversation = isAdmin ? conversation : null;
        activeTeacherMessageConversation = isAdmin ? null : conversation;
        section.classList.add('hidden');
        const conversationPanel = document.getElementById('teacher-message-conversation-panel');
        conversationPanel.classList.remove('hidden');
        document.getElementById('teacher-message-active-title').textContent =
          `${conversation.parent_name} · ${conversation.student_name}`;
        document.getElementById('teacher-message-compose')?.classList.toggle('hidden', !isAdmin);
        if (isAdmin) {
          const studentSelect = document.getElementById('teacher-message-student');
          const contactSelect = document.getElementById('teacher-message-contact');
          studentSelect.value = conversation.student_id;
          enhanceSearchableSelect(studentSelect);
          await loadMessageConversation('teacher');
          if (![...contactSelect.options].some(option => option.value === conversation.parent_id)) {
            contactSelect.add(new Option(conversation.parent_name, conversation.parent_id));
          }
          contactSelect.value = conversation.parent_id;
          enhanceSearchableSelect(contactSelect);
          await loadParentAdminMessageThread(conversation);
        } else {
          await loadTeacherMessageThread(conversation);
        }
        document.getElementById('teacher-message-thread').scrollIntoView({
          behavior: 'smooth',
          block: 'nearest',
        });
      });
      container.append(button);
    });
    search.oninput = () => {
      const query = search.value.trim().toLocaleLowerCase();
      container.querySelectorAll('.admin-message-inbox-item').forEach(button => {
        button.hidden = !button.dataset.search.includes(query);
      });
    };
    search.dispatchEvent(new Event('input'));
  } catch (error) {
    if (requestNumber !== messageLoadSequence.inbox) return;
    console.warn('[Supabase] message inbox load failed:', error);
    count.textContent = '!';
    container.textContent = `${state.lang === 'id'
      ? 'Kotak masuk gagal dimuat'
      : 'Inbox could not be loaded'}: ${error.message || error}`;
  }
}

function loadAdminMessageInbox() {
  if (isAdminUser()) return loadMessageInbox('get_admin_message_inbox');
}

function loadTeacherMessageInbox() {
  if (state.currentUser?.role === 'teacher') return loadMessageInbox('get_teacher_message_inbox');
}

async function loadTeacherMessageThread(conversation) {
  const container = document.getElementById('teacher-message-thread');
  if (!container || !conversation || state.currentUser?.role !== 'teacher') return;
  await loadParentAdminMessageThread(conversation);
}

async function loadParentAdminMessageThread(conversation) {
  const container = document.getElementById('teacher-message-thread');
  if (!container || !conversation) return;
  const requestNumber = ++messageLoadSequence.sharedThread;
  container.textContent = state.lang === 'id' ? 'Memuat percakapan...' : 'Loading conversation...';
  try {
    const { data: messages, error } = await sb.rpc('get_parent_admin_message_thread', {
      p_student_id: conversation.student_id,
      p_parent_id: conversation.parent_id,
    });
    if (error) throw error;
    if (requestNumber !== messageLoadSequence.sharedThread) return;
    renderMessageThread(container, messages || [], {
      contact_id: conversation.parent_id,
      contact_name: conversation.parent_name,
    }, !isAdminUser(), true);
  } catch (error) {
    if (requestNumber !== messageLoadSequence.sharedThread) return;
    console.warn('[Supabase] parent-admin message thread load failed:', error);
    container.textContent = `${state.lang === 'id'
      ? 'Percakapan gagal dimuat'
      : 'Could not load conversation'}: ${error.message || error}`;
  }
}

function renderMessageThread(
  container,
  messages,
  activeContact,
  readOnlyParentThread = false,
  sharedAdminThread = false
) {
  container.replaceChildren();
  if (!messages.length) {
    container.textContent = state.lang === 'id'
      ? (readOnlyParentThread ? 'Belum ada pesan dalam percakapan ini.' : 'Belum ada pesan. Mulai percakapan di sini.')
      : (readOnlyParentThread ? 'No messages in this conversation yet.' : 'No messages yet. Start the conversation here.');
    return;
  }

  messages.forEach(item => {
    const isAdminMessage = sharedAdminThread && item.sender_id !== activeContact.contact_id;
    const isMine = sharedAdminThread
      ? isAdminMessage
      : readOnlyParentThread
        ? item.sender_id !== activeContact.contact_id
        : item.sender_id === state.currentUser?.id;
    const bubble = document.createElement('article');
    bubble.className = `message-bubble${isMine ? ' is-mine' : ''}`;
    const sender = document.createElement('strong');
    sender.textContent = sharedAdminThread
      ? item.sender_id === activeContact.contact_id
        ? activeContact.contact_name
        : item.sender_id === state.currentUser?.id
          ? (state.lang === 'id' ? 'Admin · Anda' : 'Admin · You')
          : 'Admin'
      : readOnlyParentThread
        ? (item.sender_id === activeContact.contact_id
          ? activeContact.contact_name
          : (state.lang === 'id' ? 'Admin' : 'Admin'))
        : isMine
          ? (state.lang === 'id' ? 'Anda' : 'You')
          : activeContact.contact_name;
    const body = document.createElement('p');
    body.textContent = item.message;
    const sentAt = document.createElement('time');
    sentAt.dateTime = item.created_at;
    sentAt.textContent = new Date(item.created_at).toLocaleString(
      state.lang === 'id' ? 'id-ID' : 'en-US',
      { dateStyle: 'short', timeStyle: 'short' }
    );
    bubble.append(sender, body, sentAt);
    container.append(bubble);
  });
  container.scrollTop = container.scrollHeight;
}

async function sendConversationMessage(surface, event) {
  event?.preventDefault();
  const elements = messageSurfaceElements(surface);
  const message = elements.input.value.trim();
  const recipientId = elements.contact.value;
  if (!state.currentUser?.id || !elements.studentId || !recipientId || !message) return;
  if (message.length > 2000) {
    showToast(state.lang === 'id' ? 'Pesan maksimal 2000 karakter.' : 'Messages must be 2000 characters or fewer.', '⚠️');
    return;
  }

  elements.input.disabled = true;
  elements.button.disabled = true;
  try {
    const { error } = await sb.from('messages').insert({
      sender_id: state.currentUser.id,
      recipient_id: recipientId,
      student_id: elements.studentId,
      message,
    });
    if (error) throw error;
  } catch (error) {
    console.warn('[Supabase] message send failed:', error);
    elements.input.disabled = false;
    elements.button.disabled = false;
    showToast(`${state.lang === 'id' ? 'Pesan gagal dikirim' : 'Message could not be sent'}: ${error.message || error}`, '⚠️');
    return;
  }

  elements.input.value = '';
  if (surface === 'teacher' && isAdminUser() && activeAdminMessageConversation) {
    await loadParentAdminMessageThread(activeAdminMessageConversation);
  } else {
    await loadMessageConversation(surface);
  }
}

function sendParentReply(event) {
  return sendConversationMessage('parent', event);
}

function sendTeacherMessage(event) {
  if (!isAdminUser()) {
    event?.preventDefault();
    return;
  }
  return sendConversationMessage('teacher', event);
}


// Helper: Isolated Supabase client for registering users without overriding currently active admin session
function getIsolatedAuthClient() {
  if (typeof window !== 'undefined' && window.supabase && typeof window.supabase.createClient === 'function') {
    return window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY, {
      auth: {
        persistSession: false,
        autoRefreshToken: false,
        detectSessionInUrl: false
      }
    });
  }
  return sb;
}

/* =====================================================================
   FLOW 7: ADMIN & TUTOR MANAGEMENT (ADMIN EXCLUSIVE)
   ===================================================================== */
function switchAdminTab(tabName = 'admins') {
  if (!isAdminUser()) {
    showToast(state.lang === 'id' ? 'Akses dibatasi untuk administrator.' : 'Restricted to administrators.', '🔒');
    return;
  }

  state.adminTab = tabName;
  state.currentView = 'adminManagement';

  document.getElementById('profile-dropdown')?.classList.add('hidden');
  ['dashboard', 'curriculum', 'planner', 'observations', 'parentHub', 'studentReport'].forEach(v => {
    const el = document.getElementById(`view-${v}`);
    if (el) el.classList.add('hidden');
  });
  const mgmtEl = document.getElementById('view-adminManagement');
  if (mgmtEl) mgmtEl.classList.remove('hidden');

  const tabBtnAdmin = document.getElementById('subtab-manage-admins');
  const tabBtnTutor = document.getElementById('subtab-manage-tutors');
  const panelAdmins = document.getElementById('panel-manage-admins');
  const panelTutors = document.getElementById('panel-manage-tutors');

  // Update subtab buttons
  if (tabName === 'admins') {
    if (tabBtnAdmin) tabBtnAdmin.className = 'px-4 py-2 rounded-xl text-xs font-bold transition bg-white text-forest shadow-soft flex items-center gap-1.5';
    if (tabBtnTutor) tabBtnTutor.className = 'px-4 py-2 rounded-xl text-xs font-bold transition text-forest-light hover:text-forest flex items-center gap-1.5';
    if (panelAdmins) panelAdmins.classList.remove('hidden');
    if (panelTutors) panelTutors.classList.add('hidden');
    renderAdmins();
  } else {
    if (tabBtnTutor) tabBtnTutor.className = 'px-4 py-2 rounded-xl text-xs font-bold transition bg-white text-forest shadow-soft flex items-center gap-1.5';
    if (tabBtnAdmin) tabBtnAdmin.className = 'px-4 py-2 rounded-xl text-xs font-bold transition text-forest-light hover:text-forest flex items-center gap-1.5';
    if (panelTutors) panelTutors.classList.remove('hidden');
    if (panelAdmins) panelAdmins.classList.add('hidden');
    renderTutors();
  }

  // Update top navbar active indicators
  document.querySelectorAll('.nav-item').forEach(btn => {
    btn.classList.remove('border-sage', 'text-sage');
    btn.classList.add('border-transparent', 'text-forest-light');
  });
  const activeNavBtn = document.getElementById('nav-adminManagement');
  if (activeNavBtn) {
    activeNavBtn.classList.remove('border-transparent', 'text-forest-light');
    activeNavBtn.classList.add('border-sage', 'text-sage');
  }
}

// --- ADMIN MANAGEMENT FUNCTIONS ---
function filterAdminsList(query) {
  state.adminSearchQuery = String(query || '').trim().toLowerCase();
  renderAdmins();
}

function openAddAdminModal() {
  if (!isAdminUser()) {
    showToast(state.lang === 'id' ? 'Hanya admin yang dapat menambah data.' : 'Only admins can add administrators.', '⚠️');
    return;
  }
  document.getElementById('new-admin-name').value = '';
  document.getElementById('new-admin-email').value = '';
  const pw = document.getElementById('new-admin-password');
  if (pw) pw.value = '';
  openModal('modal-add-admin');
  document.getElementById('new-admin-name').focus();
}

async function loadAdminsFromSupabase() {
  try {
    const { data, error } = await sb.from('admins')
      .select('id, full_name, email, created_at')
      .order('full_name');
    if (error) throw error;
    state.admins = data || [];
    state.databaseStatus.admins = true;
    console.log(`[Supabase] Loaded ${state.admins.length} admins from DB`);
    return true;
  } catch (err) {
    console.warn('[Supabase] admins table note (using default identities if not yet seeded):', err);
    // Fallback gracefully from ADMIN_IDENTITIES if table not yet created
    if (!state.admins || state.admins.length === 0) {
      state.admins = Object.entries(ADMIN_IDENTITIES).map(([email, name], idx) => ({
        id: `admin-${idx + 1}`,
        full_name: name,
        email: email,
        created_at: new Date().toISOString(),
        _fallback: true
      }));
    }
    state.databaseStatus.admins = false;
    return false;
  }
}

async function saveNewAdmin(event) {
  event.preventDefault();
  if (!isAdminUser()) {
    showToast(state.lang === 'id' ? 'Hanya admin yang dapat mendaftarkan admin baru.' : 'Only admins can register administrators.', '⚠️');
    return;
  }

  const nameInput = document.getElementById('new-admin-name');
  const emailInput = document.getElementById('new-admin-email');
  const passwordInput = document.getElementById('new-admin-password');
  const fullName = nameInput.value.trim();
  const email = emailInput.value.trim().toLowerCase();
  const password = passwordInput ? passwordInput.value : '';

  if (!fullName || !email) {
    showToast(state.lang === 'id' ? 'Lengkapi nama dan email admin.' : 'Please enter admin name and email.', '⚠️');
    return;
  }

  if (!password || password.length < 6) {
    showToast(state.lang === 'id' ? 'Kata sandi minimal 6 karakter.' : 'Password must be at least 6 characters.', '⚠️');
    return;
  }

  const existing = (state.admins || []).find(a => String(a.email || '').toLowerCase() === email);
  if (existing) {
    showToast(state.lang === 'id' ? 'Email admin sudah terdaftar.' : 'Admin email is already registered.', '⚠️');
    return;
  }

  const submitBtn = document.getElementById('add-admin-submit-btn');
  submitBtn.disabled = true;
  submitBtn.textContent = state.lang === 'id' ? 'Menyimpan...' : 'Saving...';

  try {
    let authUserId = null;
    // 1. Buat akun login di Supabase Auth menggunakan isolated client (agar sesi admin yang sedang login tidak terputus)
    try {
      const authClient = getIsolatedAuthClient();
      const { data: authData, error: authErr } = await authClient.auth.signUp({
        email: email,
        password: password,
        options: {
          data: {
            full_name: fullName,
            role: 'admin'
          }
        }
      });
      if (authErr) {
        console.warn('[Supabase Auth] Note during admin signup:', authErr.message || authErr);
      } else if (authData?.user?.id) {
        authUserId = authData.user.id;
      }
    } catch (authException) {
      console.warn('[Supabase Auth] Signup exception:', authException);
    }

    // 2. Simpan profil ke tabel admins di Supabase
    const payload = {
      id: authUserId || crypto.randomUUID(),
      full_name: fullName,
      email: email,
    };

    const { error } = await sb.from('admins').insert([payload]);
    if (error) {
      console.warn('[Supabase] insert admin table error, saving to session:', error);
    }

    ADMIN_IDENTITIES[email] = fullName;
    if (!state.admins.some(a => String(a.email || '').toLowerCase() === email)) {
      state.admins.push(payload);
    }

    closeModal('modal-add-admin');
    document.getElementById('add-admin-form').reset();
    await loadAdminsFromSupabase();
    renderAdmins();
    showToast(
      state.lang === 'id'
        ? `Administrator ${fullName} berhasil didaftarkan! Akun siap digunakan untuk login.`
        : `Admin ${fullName} registered! Account is ready to log in.`,
      '🛡️'
    );
  } catch (err) {
    console.error('[Supabase] add admin failed:', err);
    showToast(`${state.lang === 'id' ? 'Gagal menyimpan admin' : 'Failed to register admin'}: ${err.message || err}`, '⚠️');
  } finally {
    submitBtn.disabled = false;
    submitBtn.textContent = state.lang === 'id' ? 'Daftarkan Admin' : 'Register Admin';
  }
}

async function deleteAdminFromSupabase(adminId) {
  if (!isAdminUser()) {
    showToast(state.lang === 'id' ? 'Hanya admin yang dapat menghapus data.' : 'Only admins can delete data.', '⚠️');
    return;
  }
  const admin = (state.admins || []).find(a => a.id === adminId);
  if (!admin) return;

  if (String(admin.email).toLowerCase() === String(state.currentUser?.email).toLowerCase()) {
    showToast(state.lang === 'id' ? 'Anda tidak dapat menghapus akun admin yang sedang login!' : 'Cannot delete currently active admin account!', '⚠️');
    return;
  }

  const confirmMsg = state.lang === 'id'
    ? `Apakah Anda yakin ingin menghapus administrator "${admin.full_name}" (${admin.email})?`
    : `Are you sure you want to remove administrator "${admin.full_name}"?`;
  if (!window.confirm(confirmMsg)) return;

  try {
    if (!admin._fallback) {
      const { error } = await sb.from('admins').delete().eq('id', adminId);
      if (error) throw error;
    } else {
      state.admins = state.admins.filter(a => a.id !== adminId);
      delete ADMIN_IDENTITIES[String(admin.email).toLowerCase()];
    }

    showToast(state.lang === 'id' ? `Admin "${admin.full_name}" berhasil dihapus.` : `Admin "${admin.full_name}" removed.`, '🗑️');
    await loadAdminsFromSupabase();
    renderAdmins();
  } catch (err) {
    console.error('[Supabase] delete admin failed:', err);
    showToast(`${state.lang === 'id' ? 'Gagal menghapus admin' : 'Failed to delete admin'}: ${err.message || err}`, '⚠️');
  }
}

function renderAdmins() {
  const grid = document.getElementById('admins-grid');
  const countLabel = document.getElementById('admins-count-label');
  if (!grid) return;

  const allAdmins = state.admins || [];
  const query = state.adminSearchQuery || '';
  const filtered = allAdmins.filter(admin => {
    if (!query) return true;
    const name = String(admin.full_name || '').toLowerCase();
    const email = String(admin.email || '').toLowerCase();
    return name.includes(query) || email.includes(query);
  });

  if (countLabel) {
    countLabel.textContent = state.lang === 'id'
      ? `Total: ${allAdmins.length} admin terdaftar (${filtered.length} ditampilkan)`
      : `Total: ${allAdmins.length} administrators (${filtered.length} shown)`;
  }

  if (!filtered.length) {
    grid.innerHTML = `
          <div class="col-span-full p-8 text-center bg-sand-50 rounded-2xl border border-sand-200">
            <span class="text-3xl block mb-2">🛡️</span>
            <p class="text-forest font-bold text-sm">${state.lang === 'id' ? 'Tidak ada data admin yang sesuai' : 'No administrators found'}</p>
            <p class="text-forest-light text-xs mt-1">${state.lang === 'id' ? 'Klik tombol "Tambah Admin" untuk mendaftarkan akun administrator baru.' : 'Click "Add Admin" to register a new administrator.'}</p>
          </div>`;
    return;
  }

  grid.innerHTML = filtered.map(admin => {
    const isCurrent = String(admin.email).toLowerCase() === String(state.currentUser?.email).toLowerCase();
    const createdDate = admin.created_at ? new Date(admin.created_at).toLocaleDateString(state.lang === 'id' ? 'id-ID' : 'en-US', { day: 'numeric', month: 'short', year: 'numeric' }) : '—';
    return `
        <article class="p-4 rounded-2xl bg-sand-50 border border-sand-200 hover:border-sage transition shadow-xs flex items-center justify-between gap-3">
          <div class="flex items-center gap-3 min-w-0">
            <div class="w-11 h-11 flex-shrink-0 rounded-2xl bg-white border border-sand-200 flex items-center justify-center font-bold text-sage-700 shadow-soft text-sm">
              ${escapeHTML(getInitials(admin.full_name))}
            </div>
            <div class="min-w-0">
              <div class="flex items-center gap-2">
                <h3 class="font-heading font-bold text-forest text-sm truncate" title="${escapeHTML(admin.full_name)}">${escapeHTML(admin.full_name)}</h3>
                ${isCurrent ? '<span class="text-[10px] px-1.5 py-0.5 rounded-md bg-sage-100 text-sage-800 font-bold">Anda</span>' : ''}
              </div>
              <p class="text-xs text-forest-light truncate" title="${escapeHTML(admin.email || '—')}">${escapeHTML(admin.email || '—')}</p>
              <p class="text-[10px] text-forest-light/70 mt-0.5">Terdaftar: ${createdDate}</p>
            </div>
          </div>
          <div class="flex-shrink-0">
            ${isCurrent ? '' : `
              <button type="button" onclick="deleteAdminFromSupabase('${escapeHTML(admin.id)}')"
                title="Hapus Admin" aria-label="Hapus Admin"
                class="p-2 text-rose-500 hover:text-rose-700 hover:bg-rose-50 rounded-xl transition text-xs font-bold">
                🗑️
              </button>
            `}
          </div>
        </article>`;
  }).join('');
}

// --- TUTOR MANAGEMENT FUNCTIONS ---
function filterTutorsList(query) {
  state.tutorSearchQuery = String(query || '').trim().toLowerCase();
  renderTutors();
}

function openAddTutorModal() {
  if (!isAdminUser()) {
    showToast(state.lang === 'id' ? 'Hanya admin yang dapat menambah tutor.' : 'Only admins can add tutors.', '⚠️');
    return;
  }
  document.getElementById('new-tutor-name').value = '';
  document.getElementById('new-tutor-email').value = '';
  const pw = document.getElementById('new-tutor-password');
  if (pw) pw.value = '';
  openModal('modal-add-tutor');
  document.getElementById('new-tutor-name').focus();
}

async function saveNewTutor(event) {
  event.preventDefault();
  if (!isAdminUser()) {
    showToast(state.lang === 'id' ? 'Hanya admin yang dapat mendaftarkan tutor.' : 'Only admins can register tutors.', '⚠️');
    return;
  }

  const nameInput = document.getElementById('new-tutor-name');
  const emailInput = document.getElementById('new-tutor-email');
  const passwordInput = document.getElementById('new-tutor-password');
  const fullName = nameInput.value.trim();
  const email = emailInput.value.trim().toLowerCase();
  const password = passwordInput ? passwordInput.value : '';

  if (!fullName || !email) {
    showToast(state.lang === 'id' ? 'Lengkapi nama dan email tutor.' : 'Please enter tutor name and email.', '⚠️');
    return;
  }

  if (!password || password.length < 6) {
    showToast(state.lang === 'id' ? 'Kata sandi minimal 6 karakter.' : 'Password must be at least 6 characters.', '⚠️');
    return;
  }

  const existing = (state.tutors || []).find(t => String(t.email || '').toLowerCase() === email);
  if (existing) {
    showToast(state.lang === 'id' ? 'Email tutor sudah terdaftar di sistem.' : 'Tutor email is already registered.', '⚠️');
    return;
  }

  const submitBtn = document.getElementById('add-tutor-submit-btn');
  submitBtn.disabled = true;
  submitBtn.textContent = state.lang === 'id' ? 'Menyimpan...' : 'Saving...';

  try {
    let authUserId = null;
    // 1. Buat akun login di Supabase Auth menggunakan isolated client (agar sesi admin yang sedang login tidak terputus)
    try {
      const authClient = getIsolatedAuthClient();
      const { data: authData, error: authErr } = await authClient.auth.signUp({
        email: email,
        password: password,
        options: {
          data: {
            full_name: fullName,
            role: 'teacher'
          }
        }
      });
      if (authErr) {
        console.warn('[Supabase Auth] Note during tutor signup:', authErr.message || authErr);
      } else if (authData?.user?.id) {
        authUserId = authData.user.id;
      }
    } catch (authException) {
      console.warn('[Supabase Auth] Signup exception:', authException);
    }

    // 2. Simpan profil ke tabel tutors di Supabase
    const payload = {
      id: authUserId || crypto.randomUUID(),
      full_name: fullName,
      email: email,
    };

    const { error } = await sb.from('tutors').insert([payload]);
    if (error) {
      console.warn('[Supabase] insert tutor error, saving to session:', error);
    }

    if (!state.tutors.some(t => String(t.email || '').toLowerCase() === email)) {
      state.tutors.push(payload);
    }

    closeModal('modal-add-tutor');
    document.getElementById('add-tutor-form').reset();
    await loadTutorsFromSupabase();
    renderTutors();
    showToast(
      state.lang === 'id'
        ? `Tutor ${fullName} berhasil didaftarkan! Akun siap digunakan untuk login.`
        : `Tutor ${fullName} registered! Account is ready to log in.`,
      '👩‍🏫'
    );
  } catch (err) {
    console.error('[Supabase] add tutor failed:', err);
    showToast(`${state.lang === 'id' ? 'Gagal menyimpan tutor' : 'Failed to register tutor'}: ${err.message || err}`, '⚠️');
  } finally {
    submitBtn.disabled = false;
    submitBtn.textContent = state.lang === 'id' ? 'Daftarkan Tutor' : 'Register Tutor';
  }
}

async function deleteTutorFromSupabase(tutorId) {
  if (!isAdminUser()) {
    showToast(state.lang === 'id' ? 'Hanya admin yang dapat menghapus data tutor.' : 'Only admins can delete tutors.', '⚠️');
    return;
  }
  const tutor = (state.tutors || []).find(t => t.id === tutorId);
  if (!tutor) return;

  const confirmMsg = state.lang === 'id'
    ? `Apakah Anda yakin ingin menghapus tutor "${tutor.full_name}"? Data tutor akan dihapus dari sistem.`
    : `Are you sure you want to remove tutor "${tutor.full_name}"?`;
  if (!window.confirm(confirmMsg)) return;

  try {
    const { error } = await sb.from('tutors').delete().eq('id', tutorId);
    if (error) throw error;

    showToast(state.lang === 'id' ? `Tutor "${tutor.full_name}" berhasil dihapus.` : `Tutor "${tutor.full_name}" removed.`, '🗑️');
    await loadTutorsFromSupabase();
    renderTutors();
  } catch (err) {
    console.error('[Supabase] delete tutor failed:', err);
    showToast(`${state.lang === 'id' ? 'Gagal menghapus tutor' : 'Failed to delete tutor'}: ${err.message || err}`, '⚠️');
  }
}

function renderTutors() {
  const grid = document.getElementById('tutors-grid');
  const countLabel = document.getElementById('tutors-count-label');
  if (!grid) return;

  const allTutors = state.tutors || [];
  const query = state.tutorSearchQuery || '';
  const filtered = allTutors.filter(tutor => {
    if (!query) return true;
    const name = String(tutor.full_name || '').toLowerCase();
    const email = String(tutor.email || '').toLowerCase();
    return name.includes(query) || email.includes(query);
  });

  if (countLabel) {
    countLabel.textContent = state.lang === 'id'
      ? `Total: ${allTutors.length} tutor terdaftar (${filtered.length} ditampilkan)`
      : `Total: ${allTutors.length} tutors (${filtered.length} shown)`;
  }

  if (!filtered.length) {
    grid.innerHTML = `
          <div class="col-span-full p-8 text-center bg-sand-50 rounded-2xl border border-sand-200">
            <span class="text-3xl block mb-2">👩‍🏫</span>
            <p class="text-forest font-bold text-sm">${state.lang === 'id' ? 'Tidak ada data tutor yang sesuai' : 'No tutors found'}</p>
            <p class="text-forest-light text-xs mt-1">${state.lang === 'id' ? 'Klik tombol "Tambah Tutor" untuk mendaftarkan pendidik baru.' : 'Click "Add Tutor" to register an educator.'}</p>
          </div>`;
    return;
  }

  grid.innerHTML = filtered.map(tutor => `
        <article class="p-4 rounded-2xl bg-sand-50 border border-sand-200 hover:border-sage transition shadow-xs flex items-center justify-between gap-3">
          <div class="flex items-center gap-3 min-w-0">
            <div class="w-11 h-11 flex-shrink-0 rounded-2xl bg-white flex items-center justify-center font-bold text-sage-700 shadow-soft text-sm">
              ${escapeHTML(getInitials(tutor.full_name))}
            </div>
            <div class="min-w-0">
              <h3 class="font-heading font-bold text-forest text-sm truncate" title="${escapeHTML(tutor.full_name)}">${escapeHTML(tutor.full_name)}</h3>
              <p class="text-xs text-forest-light truncate" title="${escapeHTML(tutor.email || '—')}">${escapeHTML(tutor.email || '—')}</p>
            </div>
          </div>
          ${isAdminUser() ? `
            <button type="button" onclick="deleteTutorFromSupabase('${escapeHTML(tutor.id)}')"
              title="Hapus Tutor" aria-label="Hapus Tutor"
              class="flex-shrink-0 p-2 text-rose-500 hover:text-rose-700 hover:bg-rose-50 rounded-xl transition text-xs font-bold">
              🗑️
            </button>
          ` : ''}
        </article>
      `).join('');
}

/* FLOW 6: PARENT HUB */
function openStudentParentPreview(studentId) {
  if (state.currentUser?.role === 'parent') {
    const linkedStudent = state.students.find(item => item.id === studentId);
    if (linkedStudent) state.previewStudentId = linkedStudent.id;
    if (state.currentView !== 'parentHub') navigateTo('parentHub');
    else renderParentHub();
    return;
  }

  const student = state.allStudents.find(item => item.id === studentId);
  if (!student) {
    showToast(state.lang === 'id' ? 'Siswa tidak termasuk dalam kelas yang ditugaskan kepada Anda.' : 'Student is not in your assigned classes.', '⚠️');
    return;
  }
  state.previewStudentId = student.id;
  if (state.currentView !== 'parentHub') navigateTo('parentHub');
  else renderParentHub();
}

function renderParentHub() {
  const parentUser = state.currentUser?.role === 'parent';
  let students = parentUser ? state.students : state.allStudents;
  if (parentUser && (!students || students.length === 0) && state.currentUser) {
    let childName = (state.currentUser.name || '').replace(/^(mama|papa|ayah|bunda|ibu|bapak|umi|abi|orang\s*tua)\s+/i, '').trim() || 'Anak Plego';
    const fallbackStudent = {
      id: state.currentUser.childStudentIds?.[0] || state.currentUser.id || 'child-default',
      name: childName,
      nickname: childName.split(' ')[0],
      age: '—',
      classId: null,
      className: 'Kelas Montessori',
      schoolName: 'Sekolah Mitra Plego',
      lastObsDays: 0,
      needsAttention: false,
      _fromDB: true,
    };
    state.students = [fallbackStudent];
    state.allStudents = [fallbackStudent];
    students = state.students;
  }
  const student = students.find(item => item.id === state.previewStudentId) || students[0];
  if (student) state.previewStudentId = student.id;
  const picker = document.getElementById('parent-preview-student');
  picker.innerHTML = students.map(item =>
    `<option value="${escapeHTML(item.id)}">${escapeHTML(item.name)}</option>`
  ).join('');
  picker.value = student?.id || '';
  enhanceSearchableSelect(picker);
  const pickerWrap = document.getElementById('parent-preview-picker-wrap');
  const showPicker = !parentUser || students.length > 1;
  pickerWrap.classList.toggle('hidden', !showPicker);
  pickerWrap.classList.toggle('md:flex', showPicker);
  const observations = state.databaseObservations
    .filter(observation => student && observation.student_id === student.id)
    .sort((left, right) => new Date(right.created_at || 0) - new Date(left.created_at || 0));
  const title = document.getElementById('parent-student-name');
  const avatar = document.getElementById('parent-student-avatar');
  const classLabel = document.getElementById('parent-class-label');
  const portfolioBadge = document.getElementById('parent-student-badge');
  const narrative = document.getElementById('parent-narrative-text');
  const count = document.getElementById('parent-observation-count');
  const masteryCount = document.getElementById('parent-mastery-count');

  title.textContent = student?.name || (state.lang === 'id' ? 'Profil anak belum ditemukan' : 'Student profile not found');
  avatar.textContent = student
    ? student.name.split(/\s+/).slice(0, 2).map(part => part[0]).join('').toUpperCase()
    : '—';
  classLabel.textContent = student
    ? `${student.className} · ${student.schoolName}`
    : (state.lang === 'id' ? 'Anak belum terhubung ke akun orang tua di database.' : 'No child is linked to this parent account in the database.');
  portfolioBadge.textContent = state.lang === 'id' ? 'Portofolio anak' : 'Child portfolio';
  const classStat = document.getElementById('parent-stat-class');
  classStat.textContent = student?.className || '—';
  classStat.title = student ? `${student.className} · ${student.schoolName}` : '';

  const latestObservation = observations[0];
  narrative.textContent = latestObservation?.anecdote
    ? `“${latestObservation.anecdote}”`
    : (state.lang === 'id'
      ? 'Belum ada catatan observasi yang tersimpan untuk anak ini.'
      : 'No observation has been recorded for this student yet.');
  count.textContent = String(observations.length);

  const mastered = observations.filter(observation => observation.mastery_level === 'mastered').length;
  document.getElementById('parent-stat-mastered').textContent = String(mastered);
  masteryCount.textContent = `${mastered} ${state.lang === 'id' ? 'capaian dikuasai' : 'mastered observations'}`;
  document.getElementById('parent-plant-title').textContent =
    `${state.lang === 'id' ? 'Tanaman Belajar' : 'Learning Garden'}${student ? ` · ${student.name}` : ''}`;

  const observationFeed = document.getElementById('parent-observation-feed');
  observationFeed.innerHTML = observations.length
    ? observations.slice(0, 5).map(observation => {
      const createdAt = observation.created_at ? new Date(observation.created_at) : null;
      const timestamp = createdAt && !Number.isNaN(createdAt.getTime())
        ? createdAt.toLocaleDateString(state.lang === 'id' ? 'id-ID' : 'en-US', {
          day: 'numeric',
          month: 'short',
          year: 'numeric',
        })
        : observation.time || (state.lang === 'id' ? 'Waktu tidak tersedia' : 'Date unavailable');
      const domain = getDomainColor(observation.domain);
      return `<article class="parent-observation-entry">
            <span class="parent-observation-marker" aria-hidden="true"></span>
            <div class="parent-observation-entry-content">
              <div class="parent-observation-entry-meta">
                <span>${escapeHTML(timestamp)}</span>
                <span class="parent-observation-domain ${domain.bgLight} ${domain.textColor}">${domain.label}</span>
              </div>
              <h3>${escapeHTML(observation.milestone || (state.lang === 'id' ? 'Catatan perkembangan' : 'Progress note'))}</h3>
              <p>${escapeHTML(observation.anecdote || '')}</p>
            </div>
            <span class="parent-observation-level">${getMasteryLabel(observation.mastery_level)}</span>
          </article>`;
    }).join('')
    : `<p class="parent-observation-empty">${state.lang === 'id'
      ? 'Catatan perjalanan belajar akan tampil di sini setelah pendidik menyimpan observasi.'
      : 'Learning journey notes will appear here after an educator saves an observation.'}</p>`;

  const progressContent = document.getElementById('parent-progress-content');
  const masteryLevels = ['not_observed', 'emerging', 'developing', 'mastered'];
  const masteryColors = ['bg-sand-300', 'bg-sunshine', 'bg-sky', 'bg-leaf'];
  const masteryLabels = {
    not_observed: t('level.none'),
    emerging: t('level.emerging'),
    developing: t('level.developing'),
    mastered: t('level.mastered'),
  };
  progressContent.innerHTML = observations.length
    ? masteryLevels.map((level, index) => {
      const value = observations.filter(observation => observation.mastery_level === level).length;
      const percent = Math.round(value / observations.length * 100);
      return `<div>
            <div class="flex justify-between text-xs font-bold mb-1">
              <span class="text-forest">${escapeHTML(masteryLabels[level])}</span>
              <span class="text-forest-light">${value} / ${observations.length}</span>
            </div>
            <div class="w-full bg-sand-200 rounded-full h-3 overflow-hidden" role="progressbar" aria-valuenow="${percent}" aria-valuemin="0" aria-valuemax="100">
              <div class="${masteryColors[index]} h-full rounded-full transition-all duration-500" style="width:${percent}%"></div>
            </div>
          </div>`;
    }).join('')
    : `<p class="text-xs text-forest-light">${state.lang === 'id'
      ? 'Ringkasan capaian muncul setelah observasi tersimpan di database.'
      : 'Progress appears after observations are saved to the database.'}</p>`;

  const photos = observations
    .map(observation => ({
      ...observation,
      safePhotoUrl: safeHttpsUrl(observation.photo_signed_url || observation.photo_url),
    }))
    .filter(observation => observation.safePhotoUrl);
  document.getElementById('parent-photo-feed').innerHTML = photos.length
    ? photos.map(observation => `<button type="button" data-parent-photo="${escapeHTML(observation.safePhotoUrl)}" class="rounded-2xl overflow-hidden aspect-video bg-sand-200">
            <img src="${escapeHTML(observation.safePhotoUrl)}" alt="${escapeHTML(observation.milestone || 'Dokumentasi observasi')}" class="w-full h-full object-cover">
          </button>`).join('')
    : `<p class="parent-photo-empty">${state.lang === 'id'
      ? 'Foto akan tampil setelah pendidik mengunggah dokumentasi observasi.'
      : 'Photos appear after an educator uploads observation documentation.'}</p>`;
  document.querySelectorAll('[data-parent-photo]').forEach(button => {
    button.addEventListener('click', () => openPhotoModal(button.dataset.parentPhoto));
  });

  const activity = state.curriculumData.find(item => state.scheduleItems.some(schedule =>
    schedule.curriculumUnitId === item.id
  )) || state.curriculumData[0];
  document.getElementById('parent-home-activity-title').textContent = activity
    ? bText(activity, 'title') || (state.lang === 'id' ? 'Judul belum tersedia' : 'Title not provided')
    : (state.lang === 'id' ? 'Belum ada aktivitas dari kurikulum database' : 'No database curriculum activity available');
  document.getElementById('parent-home-activity-desc').textContent = activity
    ? bText(activity, 'elo') || (state.lang === 'id' ? 'Capaian pembelajaran belum tersedia.' : 'No learning outcome listed.')
    : '';
  document.getElementById('parent-home-activity-materials').textContent = activity?.tools || '';

  void loadMessageConversation('parent');

  const progressTitle = document.querySelector('#view-parentHub [data-i18n="parent.domainProgress"]');
  progressTitle.textContent = state.lang === 'id' ? 'Ringkasan Tingkat Observasi' : 'Observation Mastery Summary';
  const masteryScale = document.querySelector('#view-parentHub [data-i18n="parent.masteryScale"]');
  masteryScale.textContent = state.lang === 'id'
    ? 'Berdasarkan catatan yang tersimpan'
    : 'Based on saved observation records';
}

function printParentPortfolio() {
  document.body.classList.add('printing-parent-portfolio');
  window.addEventListener('afterprint', () => {
    document.body.classList.remove('printing-parent-portfolio');
  }, { once: true });
  window.print();
}

let currentPhotoZoom = 1.0;

function openPhotoModal(imgUrl, title = '', caption = '', meta = '') {
  const safeUrl = safeHttpsUrl(imgUrl);
  if (!safeUrl) {
    showToast(state.lang === 'id' ? 'URL foto tidak aman atau tidak valid.' : 'The photo URL is invalid or unsafe.', '⚠️');
    return;
  }

  state.currentViewingPhotoUrl = safeUrl;
  resetPhotoZoom();

  const imgEl = document.getElementById('modal-photo-img');
  if (imgEl) imgEl.src = safeUrl;

  const titleEl = document.getElementById('modal-photo-title');
  if (titleEl) {
    titleEl.textContent = title || (state.lang === 'id' ? 'Dokumentasi Pembelajaran STEM' : 'STEM Learning Documentation');
  }

  const metaEl = document.getElementById('modal-photo-meta');
  if (metaEl) {
    metaEl.textContent = meta || (state.lang === 'id' ? 'Foto Observasi Siswa' : 'Student Observation Photo');
  }

  const captionEl = document.getElementById('modal-photo-caption');
  if (captionEl) {
    captionEl.textContent = caption || (state.lang === 'id' ? 'Catatan refleksi pengamatan observasi tutor.' : 'Observation reflection note.');
  }

  openModal('modal-photo');
}

function setPhotoZoom(scale) {
  currentPhotoZoom = Math.min(3.0, Math.max(0.5, Math.round(scale * 100) / 100));
  const img = document.getElementById('modal-photo-img');
  const label = document.getElementById('modal-photo-zoom-level');
  if (img) {
    img.style.transform = `scale(${currentPhotoZoom})`;
    img.classList.toggle('cursor-zoom-out', currentPhotoZoom > 1.05);
    img.classList.toggle('cursor-zoom-in', currentPhotoZoom <= 1.05);
  }
  if (label) {
    label.textContent = `${Math.round(currentPhotoZoom * 100)}%`;
  }
}

function zoomPhoto(delta) {
  setPhotoZoom(currentPhotoZoom + delta);
}

function resetPhotoZoom() {
  setPhotoZoom(1.0);
}

function togglePhotoZoomClick() {
  if (currentPhotoZoom > 1.05) {
    resetPhotoZoom();
  } else {
    setPhotoZoom(1.6);
  }
}

function togglePhotoFullscreen() {
  const container = document.getElementById('modal-photo-container') || document.getElementById('modal-photo');
  if (!document.fullscreenElement) {
    if (container.requestFullscreen) {
      container.requestFullscreen();
    } else if (container.webkitRequestFullscreen) {
      container.webkitRequestFullscreen();
    } else if (container.msRequestFullscreen) {
      container.msRequestFullscreen();
    }
    const icon = document.getElementById('photo-fullscreen-icon');
    const text = document.getElementById('photo-fullscreen-text');
    if (icon) icon.textContent = '✕';
    if (text) text.textContent = state.lang === 'id' ? 'Keluar' : 'Exit';
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    }
    const icon = document.getElementById('photo-fullscreen-icon');
    const text = document.getElementById('photo-fullscreen-text');
    if (icon) icon.textContent = '⛶';
    if (text) text.textContent = state.lang === 'id' ? 'Layar Penuh' : 'Fullscreen';
  }
}

async function downloadCurrentPhoto() {
  const url = state.currentViewingPhotoUrl;
  if (!url) return;
  try {
    const response = await fetch(url);
    const blob = await response.blob();
    const blobUrl = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.style.display = 'none';
    a.href = blobUrl;
    a.download = `dokumentasi-plego-${Date.now()}.jpg`;
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(blobUrl);
    document.body.removeChild(a);
    showToast(state.lang === 'id' ? 'Foto berhasil diunduh!' : 'Photo downloaded successfully!', '📥');
  } catch (err) {
    const a = document.createElement('a');
    a.href = url;
    a.target = '_blank';
    a.download = `dokumentasi-plego-${Date.now()}.jpg`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }
}

/* =====================================================================
   7. UTILITY & HELPERS
   ===================================================================== */
function getDomainColor(domain) {
  switch (domain) {
    case 'science': return { bg: 'bg-sky', bgLight: 'bg-sky-light', textColor: 'text-sky', label: state.lang === 'id' ? '🔬 Sains' : '🔬 Science' };
    case 'technology': return { bg: 'bg-violet', bgLight: 'bg-violet-light', textColor: 'text-violet', label: state.lang === 'id' ? '💻 Teknologi' : '💻 Technology' };
    case 'engineering': return { bg: 'bg-terracotta', bgLight: 'bg-terracotta-light', textColor: 'text-terracotta', label: state.lang === 'id' ? '⚙️ Rekayasa' : '⚙️ Engineering' };
    case 'math': return { bg: 'bg-sunshine', bgLight: 'bg-sunshine-light', textColor: 'text-sunshine-dark', label: state.lang === 'id' ? '📐 Matematika' : '📐 Math' };
    default: return { bg: 'bg-leaf', bgLight: 'bg-leaf/10', textColor: 'text-leaf', label: state.lang === 'id' ? '🌿 Kehidupan Praktis' : '🌿 Practical Life' };
  }
}

function getBloomBadge(bloom) {
  if ((bloom || '').includes('Remembering')) return { bg: 'bg-sky-light', text: 'text-sky-dark' };
  if ((bloom || '').includes('Understanding')) return { bg: 'bg-sage-100', text: 'text-sage-700' };
  if ((bloom || '').includes('Applying')) return { bg: 'bg-sunshine-light', text: 'text-sunshine-dark' };
  if ((bloom || '').includes('Analyzing')) return { bg: 'bg-violet-light', text: 'text-violet' };
  return { bg: 'bg-terracotta-light', text: 'text-terracotta' };
}

function getBloomLabel(bloom) {
  if (state.lang === 'en') return bloom || '';
  const translations = {
    Remembering: 'Mengingat',
    Understanding: 'Memahami',
    Applying: 'Menerapkan',
    Analyzing: 'Menganalisis',
    Creating: 'Mencipta',
  };
  return translations[bloom] || bloom || '';
}

function getMasteryLabel(level) {
  switch (level) {
    case 'not_observed': return t('level.none');
    case 'emerging': return t('level.emerging');
    case 'developing': return t('level.developing');
    case 'mastered': return t('level.mastered');
  }
}

function openModal(id) {
  const modal = document.getElementById(id);
  if (modal) {
    modal.classList.remove('hidden');
    modal.classList.add('flex');
  }
}

function closeModal(id) {
  const modal = document.getElementById(id);
  if (modal) {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
  }
}

function showToast(message, icon = '✨') {
  const toast = document.getElementById('toast');
  document.getElementById('toast-msg').textContent = message;
  document.getElementById('toast-icon').textContent = icon;
  toast.classList.remove('translate-y-12', 'opacity-0');
  toast.classList.add('translate-y-0', 'opacity-100');
  setTimeout(() => {
    toast.classList.add('translate-y-12', 'opacity-0');
    toast.classList.remove('translate-y-0', 'opacity-100');
  }, 3000);
}

window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    ['modal-activity', 'modal-observation', 'modal-photo', 'modal-add-curriculum', 'modal-schedule-lesson', 'modal-add-student', 'modal-add-tutor', 'modal-add-admin'].forEach(closeModal);
    document.getElementById('profile-dropdown')?.classList.add('hidden');
  }
});

/* =====================================================================
   7. STUDENT REPORT / JURNAL BELAJAR EKSTRAKURIKULER (BILINGUAL & DYNAMIC)
   ===================================================================== */

const SEMESTER_PRESETS = [
  { id: 'Semester Gasal 2026/2027', label_id: 'Semester Gasal 2026/2027', label_en: 'Odd Semester 2026/2027' },
  { id: 'Semester Genap 2026/2027', label_id: 'Semester Genap 2026/2027', label_en: 'Even Semester 2026/2027' },
  { id: 'Semester Gasal 2025/2026', label_id: 'Semester Gasal 2025/2026', label_en: 'Odd Semester 2025/2026' },
  { id: 'Semester Genap 2025/2026', label_id: 'Semester Genap 2025/2026', label_en: 'Even Semester 2025/2026' }
];

const SCHOOL_REPORT_PRESETS = {
  early_step: {
    id: 'early_step',
    category: 'tk',
    displayName: 'TK Early Step',
    name: 'TK Early Step Preschool & Kindergarten',
    shortName: 'Early Step',
    badge: 'Early Step Learning',
    boxColor: '#5B82A6',
    borderClass: 'border-[#5B82A6]',
    badgeBgClass: 'bg-[#5B82A6]',
    defaultTutors: "Karina Liandra, Ratu Rina Syafira, Rafasya Hurul 'Ain, Nadhiyaa Shafa Mufidah, Ghina Salma Susilo, S. Si.",
    headmaster: 'Beatrix Amanda, B.Ed',
    logoHtml: `
      <div class="w-16 h-16 rounded-full border-2 border-sky-400 bg-white flex flex-col items-center justify-center p-1 text-center shadow-2xs flex-shrink-0">
        <span class="text-xs font-black text-sky-500 tracking-tight leading-none">early step</span>
        <span class="text-[7px] font-semibold text-slate-500 tracking-tighter mt-0.5 leading-none">Preschool &amp; Kindergarten</span>
      </div>
    `
  },
  azhari: {
    id: 'azhari',
    category: 'sd',
    displayName: 'SD Azhari',
    name: 'SD Azhari Islamic School Rasuna & Lebak Bulus',
    shortName: 'SD Azhari',
    badge: 'Azhari Islamic School',
    boxColor: '#5B82A6',
    borderClass: 'border-[#5B82A6]',
    badgeBgClass: 'bg-[#5B82A6]',
    defaultTutors: 'Karina Liandra, Thalitha Eka Dhea Putri, Devina Maharani, Ghina Salma Susilo, S. Si.',
    headmaster: 'Dra. Hj. Nurjanah, M.Pd',
    logoHtml: `
      <div class="w-16 h-16 rounded-full border-2 border-[#2B2868] bg-white flex flex-col items-center justify-center p-1 text-center shadow-2xs flex-shrink-0">
        <svg viewBox="0 0 100 100" class="w-10 h-10">
          <circle cx="50" cy="50" r="46" fill="none" stroke="#2B2868" stroke-width="3"/>
          <path d="M50 20 C42 32 36 44 36 58 C36 68 42 76 50 78 C58 76 64 68 64 58 C64 44 58 32 50 20 Z" fill="#2B2868"/>
          <circle cx="50" cy="18" r="3.5" fill="#C53030"/>
          <text x="50" y="55" font-size="11" font-weight="900" text-anchor="middle" fill="white" font-family="sans-serif">AZHARI</text>
        </svg>
        <span class="text-[6px] font-black text-[#2B2868] tracking-tighter leading-none mt-0.5">LEBAK BULUS</span>
      </div>
    `
  },
  masa_kecil: {
    id: 'masa_kecil',
    category: 'tk',
    displayName: 'Sekolah Masa Kecil Montessori',
    name: 'Sekolah Masa Kecil Montessori',
    shortName: 'Masa Kecil Montessori',
    badge: 'Masa Kecil Montessori',
    boxColor: '#9C5236',
    borderClass: 'border-[#9C5236]',
    badgeBgClass: 'bg-[#9C5236]',
    defaultTutors: 'Karina Liandra, S.Pd · Ratasya Andhini · Ratu Rina Syafira, S.Pd',
    headmaster: 'Siti Rahmawati, M.Psi',
    logoHtml: `
      <div class="w-16 h-16 rounded-full border-2 border-amber-600 bg-white flex items-center justify-center p-1 text-center shadow-2xs flex-shrink-0 overflow-hidden">
        <img src="src/logo-masa-kecil.png" alt="Logo Sekolah Masa Kecil" class="w-full h-full object-contain">
      </div>
    `
  },
  citra_alam: {
    id: 'citra_alam',
    category: 'sd',
    displayName: 'SD Citra Alam',
    name: 'Sekolah Alam Citra Alam Ciganjur',
    shortName: 'SD Citra Alam',
    badge: 'Citra Alam Ciganjur',
    boxColor: '#5B82A6',
    borderClass: 'border-[#5B82A6]',
    badgeBgClass: 'bg-[#5B82A6]',
    defaultTutors: 'Ai Syarifah Maulida · Athiyyah Syifa, S.Pd · Ghina Salma Susilo, S.Si',
    headmaster: 'Ir. Hendra Gunawan',
    logoHtml: `
      <div class="w-16 h-16 rounded-full border-2 border-[#5B82A6] bg-white flex flex-col items-center justify-center p-1 text-center shadow-2xs flex-shrink-0">
        <span class="text-xl">🍃</span>
        <span class="text-[7.5px] font-bold text-[#3B6B88] leading-tight">SD CITRA ALAM</span>
      </div>
    `
  },
  miftahul_ulum: {
    id: 'miftahul_ulum',
    category: 'sd',
    displayName: 'SD Miftahul Ulum',
    name: 'SD Miftahul Ulum Cinere Depok',
    shortName: 'SD Miftahul Ulum',
    badge: 'Miftahul Ulum',
    boxColor: '#5B82A6',
    borderClass: 'border-[#5B82A6]',
    badgeBgClass: 'bg-[#5B82A6]',
    defaultTutors: 'Karina Liandra, Thalitha Eka Dhea Putri, Devina Maharani, Ghina Salma Susilo, S. Si.',
    headmaster: 'Drs. H. Ahmad Fauzi, M.Pd',
    logoHtml: `
      <div class="w-16 h-16 rounded-full border-2 border-[#5B82A6] bg-white flex flex-col items-center justify-center p-1 text-center shadow-2xs flex-shrink-0">
        <span class="text-xl">📚</span>
        <span class="text-[7px] font-bold text-[#3B6B88] leading-tight">MIFTAHUL ULUM</span>
      </div>
    `
  }
};

const SKILL_LEVEL_ROWS = [
  { key: 'mandiri_berinisiatif', label_id: 'Mandiri & Berinisiatif', label_en: 'Independent & Proactive' },
  { key: 'mandiri', label_id: 'Mandiri', label_en: 'Independent' },
  { key: 'dengan_pendampingan', label_id: 'Dengan pendampingan', label_en: 'With Guidance' },
  { key: 'mulai_berkembang', label_id: 'Mulai berkembang', label_en: 'Emerging' },
  { key: 'belum_teramati', label_id: 'Belum teramati', label_en: 'Not Observed' }
];

const SKILL_COLUMNS = [
  { key: 'keterlibatan_aktif', label_id: 'Keterlibatan Aktif', label_en: 'Active Engagement' },
  { key: 'kreatif', label_id: 'Kreatif', label_en: 'Creative' },
  { key: 'digital_innovation', label_id: 'Digital Innovation & Inquiry', label_en: 'Digital Innovation & Inquiry' },
  { key: 'problem_solving', label_id: 'Problem Solving', label_en: 'Problem Solving' },
  { key: 'collaboration', label_id: 'Collaboration', label_en: 'Collaboration' }
];

const DUMMY_REPORT_STUDENTS = [
  {
    id: 'stu-abrar',
    name: 'Abrar Musa Hagia',
    age_id: '5 Tahun',
    age_en: '5 Years',
    schoolId: 'early_step',
    learningObjectives: {
      id: [
        'Mengenal tombol dan sensor sederhana (sensor cahaya & sensor gerak).',
        'Mengenal alat penanda sederhana, seperti lampu LED, suara buzzer, dan dinamo penggerak.',
        'Belajar cara kerja sensor miring (tilt sensor) untuk menyalakan lampu atau suara saat posisinya dimiringkan.',
        'Menggunakan dinamo kecil (motor DC) untuk membuat rakitan bisa berputar dan bergerak.',
        'Belajar menyambungkan sensor dan alat penggerak sederhana agar rakitan bisa bekerja otomatis.'
      ],
      en: [
        'Identify simple buttons and sensors (light sensor & motion sensor).',
        'Recognize indicator tools, such as LED lights, buzzer sounds, and motor drivers.',
        'Learn how a tilt sensor works to trigger lights or sounds when tilted.',
        'Use mini DC motors to make assembled mechanisms rotate and move.',
        'Connect sensors to basic motor outputs to build automatic mechanisms.'
      ]
    },
    skillRatings: {
      keterlibatan_aktif: 'mandiri',
      kreatif: 'mandiri',
      digital_innovation: 'mandiri',
      problem_solving: 'dengan_pendampingan',
      collaboration: 'dengan_pendampingan'
    },
    narrativeFeedback: {
      id: 'Abrar menunjukkan antusiasme yang sangat baik dalam kegiatan eksplorasi sensor dan perakitan motor gerak. Ia mampu bekerja secara mandiri saat menghubungkan modul kabel dan lampu penanda. Dalam tahapan pemecahan masalah rangkaian otomatis, Abrar menunjukkan kemauan tinggi untuk mencoba kembali dengan bimbingan tutor. Kerjasama dengan rekan sekelas berkembang semakin positif.',
      en: 'Abrar shows remarkable enthusiasm during sensor exploration and DC motor assembly activities. He works independently when connecting modular wiring and indicator lights. During automatic circuit troubleshooting, Abrar demonstrates perseverance and willingness to retry with facilitator guidance. Collaborative skills with peers continue to grow positively.'
    },
    attendance: { percent: 100, note_id: '12 dari 12 Pertemuan', note_en: '12 of 12 Sessions' },
    gallery: [
      {
        title_id: 'Rancang Sensor Miring',
        title_en: 'Tilt Sensor Design',
        date: '15 Okt 2026',
        caption_id: 'Abrar menguji respons lampu LED saat tilt sensor dimiringkan 45 derajat.',
        caption_en: 'Abrar tests LED light response when the tilt sensor is angled at 45 degrees.',
        bgGradient: 'from-sky-500/10 to-teal-500/20'
      },
      {
        title_id: 'Perakitan Motor DC',
        title_en: 'DC Motor Assembly',
        date: '29 Okt 2026',
        caption_id: 'Memasang dinamo penggerak pada bilah baling-baling putar otomatis.',
        caption_en: 'Mounting the electric motor onto automatic rotating propeller blades.',
        bgGradient: 'from-blue-500/10 to-indigo-500/20'
      },
      {
        title_id: 'Uji Rangkaian Otomatis',
        title_en: 'Automated Circuit Test',
        date: '12 Nov 2026',
        caption_id: 'Menyambungkan kabel sensor cahaya ke buzzer peringatan.',
        caption_en: 'Connecting light sensor wires directly to the warning buzzer.',
        bgGradient: 'from-emerald-500/10 to-sky-500/20'
      }
    ]
  },
  {
    id: 'stu-aileen',
    name: 'Aileen Shaqueena',
    age_id: '4 Tahun 8 Bulan',
    age_en: '4 Years 8 Months',
    schoolId: 'azhari',
    learningObjectives: {
      id: [
        'Mengenal konsep dasar polaritas magnetik (daya tarik & tolak) melalui sensori-bin eksploratif.',
        'Melatih koordinasi motorik bilateral dan diskriminasi visual saat menguji daya apung material alami di siklus air.',
        'Membangun fokus kerja bertahap (three-period lesson) dan kemandirian merapikan aparatus Montessori ke rak kerja.'
      ],
      en: [
        'Understand basic magnetic polarity (attraction & repulsion) using an exploratory sensory bin.',
        'Develop bilateral motor coordination and visual discrimination while testing natural buoyancy in water.',
        'Cultivate three-period lesson focus and independence in returning Montessori apparatus to shelves.'
      ]
    },
    skillRatings: {
      keterlibatan_aktif: 'mandiri_berinisiatif',
      kreatif: 'mandiri',
      digital_innovation: 'mandiri',
      problem_solving: 'mandiri',
      collaboration: 'dengan_pendampingan'
    },
    narrativeFeedback: {
      id: 'Aileen menunjukkan kematangan konsentrasi dan penalaran sensori yang sangat menonjol. Ia memiliki inisiatif tinggi dalam mengeksplorasi polaritas magnetik dan mampu menyelesaikan seluruh siklus kerja secara tenang. Sikap mandiri dan keteraturan Aileen saat merapikan aparatus patut diapresiasi.',
      en: 'Aileen exhibits exceptional maturity in concentration and sensory inquiry. She displays high initiative exploring magnetic polarity and completes entire Montessori work cycles with poise. Her independence and neatness when restoring apparatus are commendable.'
    },
    attendance: { percent: 100, note_id: '12 dari 12 Pertemuan', note_en: '12 of 12 Sessions' },
    gallery: [
      {
        title_id: 'Labirin Magnetik',
        title_en: 'Magnetic Maze',
        date: '12 Okt 2026',
        caption_id: 'Mengendalikan tongkat magnetik melewati rintangan kayu dengan presisi tinggi.',
        caption_en: 'Guiding the magnetic wand through wooden obstacles with high hand precision.',
        bgGradient: 'from-emerald-500/10 to-teal-500/20'
      },
      {
        title_id: 'Eksplorasi Daya Apung',
        title_en: 'Buoyancy Inquiry',
        date: '26 Okt 2026',
        caption_id: 'Memilah material alami dan mencatat reaksi apung-tenggelam pada sensory sheet.',
        caption_en: 'Sorting natural materials and recording sink-or-float reactions on sensory logs.',
        bgGradient: 'from-amber-500/10 to-orange-500/20'
      },
      {
        title_id: 'Restorasi Aparatus',
        title_en: 'Apparatus Restoration',
        date: '09 Nov 2026',
        caption_id: 'Merapikan kembali baki kerja ke rak aparatus kelas secara mandiri.',
        caption_en: 'Independently returning activity trays to designated classroom shelves.',
        bgGradient: 'from-sky-500/10 to-blue-500/20'
      }
    ]
  },
  {
    id: 'stu-kenzie',
    name: 'Kenzie Al-Fatih',
    age_id: '5 Tahun 2 Bulan',
    age_en: '5 Years 2 Months',
    schoolId: 'masa_kecil',
    learningObjectives: {
      id: [
        'Memahami mekanisme gerak roda dan poros kayu melalui perakitan mobil seluncur bertingkat.',
        'Menerapkan konsep pengurutan berat (seriation) balok dan mengamati dampaknya terhadap laju luncur.',
        'Melatih kesabaran dalam prosedur eksperimen kelompok dan etika bergantian alat (turn-taking).'
      ],
      en: [
        'Understand wheel and axle mechanisms through multi-tier ramp car assembly.',
        'Apply weight seriation principles and observe velocity changes across inclined planes.',
        'Practice patience in group lab procedures and peer turn-taking habits.'
      ]
    },
    skillRatings: {
      keterlibatan_aktif: 'mandiri',
      kreatif: 'mandiri_berinisiatif',
      digital_innovation: 'mandiri',
      problem_solving: 'dengan_pendampingan',
      collaboration: 'mulai_berkembang'
    },
    narrativeFeedback: {
      id: 'Kenzie memiliki daya kreasi rekayasa fisik yang sangat hidup. Ia sangat menikmati aktivitas bongkar pasang mekanik roda dan menunjukkan ketekunan tinggi ketika merancang konstruksi stabil. Kenzie terus kami bimbing untuk semakin sabar dalam bergantian alat bersama teman.',
      en: 'Kenzie possesses vibrant engineering creativity. He thoroughly enjoys wheel mechanical assembly and demonstrates high persistence designing stable structures. We continue nurturing his patience and turn-taking in team settings.'
    },
    attendance: { percent: 92, note_id: '11 dari 12 Pertemuan', note_en: '11 of 12 Sessions' },
    gallery: [
      {
        title_id: 'Konstruksi Poros Roda',
        title_en: 'Wheel & Axle Build',
        date: '14 Okt 2026',
        caption_id: 'Memasang roda kayu dan memastikan putaran as simetris bebas hambatan.',
        caption_en: 'Fitting wooden wheels and ensuring symmetrical low-friction axle spinning.',
        bgGradient: 'from-amber-600/10 to-stone-500/20'
      },
      {
        title_id: 'Uji Sudut Elevasi',
        title_en: 'Ramp Angle Testing',
        date: '28 Okt 2026',
        caption_id: 'Mengamati perbandingan kecepatan luncur pada sudut landai vs curam.',
        caption_en: 'Observing launch velocity differences across gentle vs steep ramp angles.',
        bgGradient: 'from-emerald-500/10 to-green-500/20'
      },
      {
        title_id: 'Diskusi Desain Mobil',
        title_en: 'Design Discussion',
        date: '11 Nov 2026',
        caption_id: 'Menceritakan rancang bangun mobil luncur di depan tutor pendamping.',
        caption_en: 'Explaining car chassis concepts directly to the facilitators.',
        bgGradient: 'from-sky-500/10 to-indigo-500/20'
      }
    ]
  },
  {
    id: 'stu-rafa',
    name: 'Rafa Khairy',
    age_id: '5 Tahun 6 Bulan',
    age_en: '5 Years 6 Months',
    schoolId: 'citra_alam',
    learningObjectives: {
      id: [
        'Meneliti kapilaritas cairan dan kromatografi pigmen alami dedaunan dan bunga liar.',
        'Menghubungkan proses penyerapan air pada akar tanaman dengan konsep kapilaritas serat tanaman.',
        'Melatih kepedulian ekologis dengan mendaur ulang cairan eksperimen ke wadah kompos alami.'
      ],
      en: [
        'Investigate fluid capillarity and natural pigment chromatography in leaves and wild flora.',
        'Connect plant root water absorption to fibrous capillary action.',
        'Cultivate ecological care by returning organic experiment residues to soil compost bins.'
      ]
    },
    skillRatings: {
      keterlibatan_aktif: 'mandiri',
      kreatif: 'mandiri',
      digital_innovation: 'dengan_pendampingan',
      problem_solving: 'mandiri',
      collaboration: 'mandiri'
    },
    narrativeFeedback: {
      id: 'Rafa memiliki rasa ingin tahu yang sangat tinggi terhadap sains alam dan makhluk hidup. Pengamatannya terhadap perubahan warna kromatografi sangat cermat. Rafa juga secara aktif mempraktikkan pemilahan sisa materi organik ke wadah komposter kelas dengan penuh tanggung jawab.',
      en: 'Rafa exhibits passionate curiosity toward life and natural sciences. His chromatography color observations are meticulous. Rafa also actively practices composting organic waste with admirable responsibility.'
    },
    attendance: { percent: 100, note_id: '12 dari 12 Pertemuan', note_en: '12 of 12 Sessions' },
    gallery: [
      {
        title_id: 'Kapilaritas Warna',
        title_en: 'Fluid Capillarity',
        date: '21 Okt 2026',
        caption_id: 'Mengamati cairan merambat melintasi jembatan serat pori kertas saring.',
        caption_en: 'Observing colored water traveling upwards through porous paper fibers.',
        bgGradient: 'from-teal-500/10 to-emerald-500/20'
      },
      {
        title_id: 'Kromatografi Klorofil',
        title_en: 'Chlorophyll Paper Test',
        date: '04 Nov 2026',
        caption_id: 'Mengekstrak pigmen hijau daun pandan untuk diuji pemisahan warnanya.',
        caption_en: 'Extracting pandan leaf pigments to study band separation patterns.',
        bgGradient: 'from-green-500/10 to-lime-500/20'
      },
      {
        title_id: 'Observasi Urat Daun',
        title_en: 'Leaf Vein Observation',
        date: '11 Nov 2026',
        caption_id: 'Mengamati pola saluran kapiler daun menggunakan kaca pembesar di kebun.',
        caption_en: 'Tracing leaf capillary structures using magnifying lenses outdoors.',
        bgGradient: 'from-amber-500/10 to-yellow-500/20'
      }
    ]
  }
];

/* =====================================================================
   REAL-DATA REPORT MAPPING & DYNAMIC SCHOOL FILTERING
   ===================================================================== */
function resolveStudentUuid(studentId) {
  if (!studentId) return '';
  return String(studentId).trim();
}

function isPrimarySchool(schoolKey, student) {
  const preset = SCHOOL_REPORT_PRESETS[schoolKey];
  if (preset && preset.category) {
    return preset.category === 'sd';
  }
  const key = String(schoolKey || '').toLowerCase();
  if (key === 'azhari' || key === 'citra_alam' || key === 'miftahul_ulum') return true;
  if (key === 'masa_kecil' || key === 'early_step') return false;

  const schName = String(student?.schoolName || student?.school_name || '').toLowerCase();
  const clsName = String(student?.className || student?.class_name || '').toLowerCase();
  if (schName.includes('sd') || schName.includes('azhari') || schName.includes('miftahul') || schName.includes('citra alam')) return true;
  if (clsName.includes('sd') || clsName.includes('1a') || clsName.includes('1b')) return true;

  return false;
}

function getScorePredicate(score) {
  const num = parseInt(score, 10);
  if (isNaN(num)) return 'Mahir';
  if (num >= 93) return 'Sangat Mahir';
  if (num >= 85) return 'Mahir';
  if (num >= 75) return 'Berkembang';
  return 'Perlu Bimbingan';
}

function setSdScoreInput(key, val) {
  const input = document.getElementById(`edit-report-sd-${key}`);
  const predEl = document.getElementById(`edit-report-sd-pred-${key}`);
  if (input) input.value = val;
  if (predEl) predEl.textContent = getScorePredicate(val);
}

function handleSdScoreChange(fieldKey) {
  const input = document.getElementById(`edit-report-sd-${fieldKey}`);
  const label = document.getElementById(`edit-report-sd-pred-${fieldKey}`);
  if (!input || !label) return;
  const val = parseInt(input.value, 10);
  label.textContent = getScorePredicate(val);
}

function getStudentSchoolKey(student) {
  if (!student) return 'other';
  const clsName = String(student.className || student.class_name || student.classes?.name || '').toLowerCase();
  const schName = String(student.schoolName || student.school_name || student.classes?.schools?.name || '').toLowerCase();
  const schId = String(student.schoolId || student.school_id || student.classes?.school_id || '').toLowerCase();

  // Azhari
  if (clsName.includes('azhari') || schName.includes('azhari') || schId === 'cad815e1-84e8-4b89-87a5-0e927f345af6') {
    return 'azhari';
  }
  // Masa Kecil (Prioritize Masa Kecil check before Miftahul Ulum if class name has masa kecil)
  if (clsName.includes('masa kecil') || (schName.includes('masa kecil') && !clsName.includes('miftahul')) || schId === 'd26923b7-8737-42b1-92af-b0baff7e9063' || (schId === '6b73bd45-cba2-46b8-95f9-199108be69e7' && clsName.includes('green'))) {
    return 'masa_kecil';
  }
  // Miftahul Ulum
  if (clsName.includes('miftahul') || schName.includes('miftahul') || schId === '6b73bd45-cba2-46b8-95f9-199108be69e7') {
    return 'miftahul_ulum';
  }
  // Early Step
  if (clsName.includes('early step') || schName.includes('early step') || schId === 'e944af7e-2c78-4fd3-88b9-9039b2a33baf') {
    return 'early_step';
  }
  // Citra Alam
  if (clsName.includes('citra alam') || schName.includes('citra alam') || schId === '25894778-cb3c-403f-8ea4-61b186d20bb4') {
    return 'citra_alam';
  }
  return 'other';
}

function findReportStudent(studentId) {
  if (!studentId) return null;
  const currentSchoolId = state.reportSelectedSchool || 'masa_kecil';

  // 1. Look up in state.allStudents by ID or UUID
  if (state.allStudents && state.allStudents.length > 0) {
    const found = state.allStudents.find(s => s.id === studentId || s.id === resolveStudentUuid(studentId));
    if (found) {
      const schKey = getStudentSchoolKey(found);
      const isYellow = String(found.className || '').toLowerCase().includes('yellow');
      const defaultAge = isYellow ? '6 Tahun' : '5 Tahun';
      const defaultAgeEn = isYellow ? '6 Years' : '5 Years';
      const isSdStudent = isPrimarySchool(schKey, found);

      const defaultObjectives = isSdStudent ? {
        id: [
          'mengenali berbagai jenis input sederhana, seperti tombol, sensor cahaya, dan sensor gerak',
          'mengenali berbagai jenis output sederhana, seperti LED, buzzer, dan motor',
          'menunjukkan pemahaman cara kerja Tilt Sensor sebagai input untuk mengaktifkan output',
          'mencoba menggunakan Motor DC sebagai aktuator untuk menghasilkan gerakan',
          'membuat rangkaian sederhana yang menghubungkan sensor sebagai input dan aktuator sebagai output'
        ],
        en: [
          'recognize various types of simple inputs, such as buttons, light sensors, and motion sensors',
          'recognize various types of simple outputs, such as LEDs, buzzers, and motors',
          'demonstrate understanding of how Tilt Sensors work as inputs to trigger outputs',
          'experiment using DC Motors as actuators to generate movement',
          'create simple circuits connecting sensors as inputs and actuators as outputs'
        ]
      } : {
        id: [
          'Mengenal tombol dan sensor sederhana (sensor cahaya & sensor gerak).',
          'Mengenal alat penanda sederhana, seperti lampu LED, suara buzzer, dan dinamo penggerak.',
          'Belajar cara kerja sensor miring (tilt sensor) untuk menyalakan lampu atau suara saat posisinya dimiringkan.',
          'Menggunakan dinamo kecil (motor DC) untuk membuat rakitan bisa berputar dan bergerak.',
          'Belajar menyambungkan sensor dan alat penggerak sederhana agar rakitan bisa bekerja otomatis.'
        ],
        en: [
          'Recognize simple buttons and sensors (light sensor & motion sensor).',
          'Recognize simple signaling tools such as LED lights, buzzer sound, and drive motor.',
          'Learn how tilt sensors trigger sound or lights when tilted.',
          'Use small DC motors to make assembled models rotate and move.',
          'Connect sensors with motorized components to create automated actions.'
        ]
      };

      const defaultSkillRatings = isSdStudent ? {
        _format: 'sd',
        scores: {
          keterlibatan_aktif: 95,
          kreatif: 92,
          digital_innovation: 90,
          problem_solving: 88,
          collaboration: 90
        },
        predicates: {
          keterlibatan_aktif: 'Sangat Mahir',
          kreatif: 'Mahir',
          digital_innovation: 'Mahir',
          problem_solving: 'Mahir',
          collaboration: 'Sangat Mahir'
        }
      } : {
        keterlibatan_aktif: 'mandiri_berinisiatif',
        kreatif: 'mandiri',
        digital_innovation: 'mandiri',
        problem_solving: 'mandiri',
        collaboration: 'dengan_pendampingan'
      };

      const defaultNarrative = isSdStudent ? {
        id: 'menunjukkan keaktifan dan pemahaman yang sangat baik selama kegiatan\nterus mengembangkan kreativitas melalui berbagai proyek sederhana',
        en: 'demonstrates active engagement and excellent understanding throughout the activities\ncontinues to develop creativity through various simple hands-on projects'
      } : {
        id: `${found.nickname || found.name.split(' ')[0]} menunjukkan kematangan konsentrasi dan penalaran sensori yang sangat menonjol. Ia memiliki inisiatif tinggi dalam mengeksplorasi polaritas magnetik dan mampu menyelesaikan seluruh siklus kerja secara tenang. Sikap mandiri dan ketertiban ${found.nickname || found.name.split(' ')[0]} saat merapikan aparatus patut diapresiasi.`,
        en: `${found.nickname || found.name.split(' ')[0]} demonstrated excellent concentration and sensory reasoning. Showing proactive initiative in exploring magnetic polarities and completing work cycles calmly. Independent apparatus cleanup habits are highly commendable.`
      };

      return {
        id: found.id,
        name: found.name,
        nickname: found.nickname || found.name.split(' ')[0],
        schoolId: schKey,
        className: found.className || (isSdStudent ? '1A' : 'Kelas STEM'),
        age: defaultAge,
        age_id: defaultAge,
        age_en: defaultAgeEn,
        learningObjectives: defaultObjectives,
        skillRatings: defaultSkillRatings,
        narrativeFeedback: defaultNarrative,
        attendance: {
          percent: isSdStudent ? 92 : 100,
          note_id: isSdStudent ? '11 dari 12 Pertemuan' : '12 dari 12 Pertemuan',
          note_en: isSdStudent ? '11 of 12 Sessions' : '12 of 12 Sessions'
        },
        gallery: []
      };
    }
  }

  // 2. Check fallback to DUMMY_REPORT_STUDENTS only if no DB students loaded at all
  if (!state.allStudents || state.allStudents.length === 0) {
    const dummy = DUMMY_REPORT_STUDENTS.find(s => s.id === studentId || s.id === resolveStudentUuid(studentId));
    if (dummy) return dummy;
    return DUMMY_REPORT_STUDENTS[0];
  }

  // 3. Fallback to first student of current school
  const schoolStudents = (state.allStudents || []).filter(s => getStudentSchoolKey(s) === currentSchoolId);
  if (schoolStudents.length > 0) {
    return findReportStudent(schoolStudents[0].id);
  }

  return null;
}

async function switchReportSchool(schoolId) {
  state.reportSelectedSchool = schoolId;
  if (!state.allStudents || state.allStudents.length === 0) {
    if (typeof loadStudentsFromSupabase === 'function') {
      await loadStudentsFromSupabase().catch(() => { });
    }
  }
  const schoolStudents = (state.allStudents || []).filter(s => getStudentSchoolKey(s) === schoolId);
  if (schoolStudents.length > 0) {
    state.reportSelectedStudentId = schoolStudents[0].id;
  } else {
    state.reportSelectedStudentId = null;
  }
  // If active top class selector is from a different school, reset it so all students of this school are shown
  if (state.activeClassId) {
    const activeClsStudent = (state.allStudents || []).find(s => s.classId === state.activeClassId);
    if (activeClsStudent && getStudentSchoolKey(activeClsStudent) !== schoolId) {
      state.activeClassId = null;
      state.students = state.allStudents;
      renderClassSelector();
    }
  }
  renderStudentReport();
}

function switchReportStudent(studentId) {
  if (!studentId) return;
  state.reportSelectedStudentId = studentId;
  const found = (state.allStudents || []).find(s => s.id === studentId || s.id === resolveStudentUuid(studentId));
  if (found) {
    const schKey = getStudentSchoolKey(found);
    if (schKey && schKey !== 'other') {
      state.reportSelectedSchool = schKey;
    }
  }
  renderStudentReport();
}

function switchReportTerm(termName) {
  state.reportSelectedTerm = termName || 'Semester Gasal 2026/2027';
  renderStudentReport();
}

function printStudentReport() {
  document.body.classList.add('printing-student-report');
  window.print();
  setTimeout(() => {
    document.body.classList.remove('printing-student-report');
  }, 1000);
}

function renderStudentReport() {
  const isParent = state.currentUser?.role === 'parent';
  const canEdit = state.currentUser?.role === 'admin' || state.currentUser?.role === 'tutor' || state.currentUser?.role === 'teacher';
  const lang = state.lang || 'id';

  // 1. Sync Toolbar Labels with Language
  const pageTitleEl = document.getElementById('report-page-title');
  if (pageTitleEl) pageTitleEl.textContent = t('report.pageTitle') || (lang === 'id' ? 'Preview & Cetak Jurnal Belajar' : 'Preview & Print Learning Journal');

  const pageSubtitleEl = document.getElementById('report-page-subtitle');
  if (pageSubtitleEl) pageSubtitleEl.textContent = t('report.pageSubtitle') || (lang === 'id' ? 'Dokumen resmi evaluasi perkembangan ekstrakurikuler STEM' : 'Official STEM extracurricular development evaluation document');

  const backBtnText = document.getElementById('report-back-btn-text');
  if (backBtnText) {
    backBtnText.textContent = isParent
      ? (t('report.backJournal') || (lang === 'id' ? 'Kembali ke Jurnal' : 'Back to Journal'))
      : (t('report.back') || (lang === 'id' ? 'Kembali' : 'Back'));
  }

  const printBtnText = document.getElementById('report-print-btn-text');
  if (printBtnText) printBtnText.textContent = t('report.print') || (lang === 'id' ? 'Cetak / Unduh PDF' : 'Print / Download PDF');

  const editBtnText = document.getElementById('report-edit-btn-text');
  if (editBtnText) editBtnText.textContent = lang === 'id' ? 'Edit Jurnal' : 'Edit Journal';

  const labelSchool = document.getElementById('label-report-school');
  if (labelSchool) labelSchool.textContent = t('report.school') || (lang === 'id' ? 'Sekolah:' : 'School:');

  const labelStudent = document.getElementById('label-report-student');
  if (labelStudent) labelStudent.textContent = t('report.student') || (lang === 'id' ? 'Siswa:' : 'Student:');

  const labelSemester = document.getElementById('label-report-semester');
  if (labelSemester) labelSemester.textContent = t('report.semester') || (lang === 'id' ? 'Semester:' : 'Semester:');

  // 2. Hide Staff-Only Controls for Parent & Toggle Edit Button
  const staffControls = document.getElementById('report-staff-controls');
  if (staffControls) {
    staffControls.classList.toggle('hidden', isParent);
  }

  const allSt = state.allStudents || [];

  // Count real students per school from Supabase
  const counts = {
    early_step: allSt.filter(s => getStudentSchoolKey(s) === 'early_step').length,
    azhari: allSt.filter(s => getStudentSchoolKey(s) === 'azhari').length,
    masa_kecil: allSt.filter(s => getStudentSchoolKey(s) === 'masa_kecil').length,
    citra_alam: allSt.filter(s => getStudentSchoolKey(s) === 'citra_alam').length,
    miftahul_ulum: allSt.filter(s => getStudentSchoolKey(s) === 'miftahul_ulum').length,
  };

  // Default to a school that actually has registered students if none or empty
  if (!state.reportSelectedSchool) {
    if (counts.masa_kecil > 0) state.reportSelectedSchool = 'masa_kecil';
    else if (counts.azhari > 0) state.reportSelectedSchool = 'azhari';
    else if (counts.miftahul_ulum > 0) state.reportSelectedSchool = 'miftahul_ulum';
    else state.reportSelectedSchool = 'early_step';
  }

  const currentSchoolId = state.reportSelectedSchool;

  // 3. Sync School Switcher Buttons with real student count badges!
  const schoolLabels = {
    early_step: `Early Step (${counts.early_step})`,
    azhari: `Azhari (${counts.azhari})`,
    masa_kecil: `Masa Kecil (${counts.masa_kecil})`,
    citra_alam: `Citra Alam (${counts.citra_alam})`,
    miftahul_ulum: `Miftahul Ulum (${counts.miftahul_ulum})`,
  };

  ['early_step', 'azhari', 'masa_kecil', 'citra_alam', 'miftahul_ulum'].forEach(id => {
    const btn = document.getElementById(`btn-school-${id}`);
    if (btn) {
      btn.textContent = schoolLabels[id] || id;
      if (id === currentSchoolId) {
        btn.className = 'report-school-btn px-3 py-1.5 rounded-xl text-xs font-bold transition bg-forest text-white shadow-xs';
      } else {
        btn.className = 'report-school-btn px-3 py-1.5 rounded-xl text-xs font-bold transition text-forest hover:bg-sand-200';
      }
    }
  });

  // 4. Get students for currently selected school only
  const schoolStudents = allSt.filter(s => getStudentSchoolKey(s) === currentSchoolId);

  // If active selected student doesn't belong to current school, pick the first one
  if (schoolStudents.length > 0) {
    const isCurrentInSchool = schoolStudents.some(s => s.id === state.reportSelectedStudentId);
    if (!isCurrentInSchool) {
      state.reportSelectedStudentId = schoolStudents[0].id;
    }
  } else {
    state.reportSelectedStudentId = null;
  }

  // 5. Sync Student Select Dropdown (ONLY students of this selected school!)
  const studentSelect = document.getElementById('report-student-select');
  if (studentSelect) {
    if (schoolStudents.length === 0) {
      studentSelect.innerHTML = `<option value="" disabled selected>(Belum ada siswa di sekolah ini)</option>`;
      studentSelect.disabled = true;
    } else {
      studentSelect.disabled = false;
      studentSelect.innerHTML = schoolStudents.map(s => {
        const isSelected = s.id === state.reportSelectedStudentId;
        const clsBadge = s.className ? ` [${escapeHTML(s.className)}]` : '';
        return `
          <option value="${s.id}" ${isSelected ? 'selected' : ''}>
            ${escapeHTML(s.name)}${clsBadge}
          </option>
        `;
      }).join('');
    }
  }

  // 6. Toggle Edit & Print buttons availability
  const editBtn = document.getElementById('report-edit-btn');
  const printBtn = document.getElementById('report-print-btn');
  if (editBtn) {
    editBtn.classList.toggle('hidden', !canEdit || schoolStudents.length === 0);
  }
  if (printBtn) {
    printBtn.disabled = schoolStudents.length === 0;
    printBtn.classList.toggle('opacity-50', schoolStudents.length === 0);
    printBtn.classList.toggle('cursor-not-allowed', schoolStudents.length === 0);
  }

  // 7. Sync Semester Select Dropdown (Bilingual)
  const termSelect = document.getElementById('report-term-select');
  if (termSelect) {
    const currentTerm = state.reportSelectedTerm || 'Semester Gasal 2026/2027';
    termSelect.innerHTML = SEMESTER_PRESETS.map(sem => `
      <option value="${sem.id}" ${sem.id === currentTerm ? 'selected' : ''}>
        ${lang === 'id' ? sem.label_id : sem.label_en}
      </option>
    `).join('');
  }

  // 8. Subscribe Realtime and Load Supabase Report in Background
  if (state.reportSelectedStudentId) {
    subscribeStudentReportsRealtime();
    loadStudentReportFromSupabase(state.reportSelectedStudentId, state.reportSelectedTerm);
  }

  // Load observations if not already loaded so photos are populated
  if (!state.databaseObservations || state.databaseObservations.length === 0) {
    if (typeof loadObservationsFromSupabase === 'function') {
      loadObservationsFromSupabase().then(() => {
        renderStudentReportContent();
      }).catch(() => { });
    }
  }

  // 9. Render the Full Printable Report Document
  renderStudentReportContent();
}

function renderStudentReportContent() {
  const container = document.getElementById('student-report-document');
  if (!container) return;

  const lang = state.lang || 'id';
  const student = findReportStudent(state.reportSelectedStudentId);
  const schoolKey = (student && student.schoolId) || state.reportSelectedSchool || 'masa_kecil';
  const school = SCHOOL_REPORT_PRESETS[schoolKey] || SCHOOL_REPORT_PRESETS.masa_kecil || SCHOOL_REPORT_PRESETS.early_step;

  // If this school currently has 0 registered students (e.g. Early Step or Citra Alam)
  if (!student) {
    container.innerHTML = `
      <div class="py-16 px-6 text-center bg-sand-50 rounded-3xl border border-sand-300">
        <div class="w-16 h-16 rounded-full bg-sand-200 text-forest mx-auto flex items-center justify-center text-3xl mb-3 shadow-2xs">
          🏫
        </div>
        <h3 class="text-lg font-bold text-forest mb-1.5">
          ${lang === 'id' ? `Belum Ada Siswa Terdaftar di ${escapeHTML(school.displayName)}` : `No Students Registered in ${escapeHTML(school.displayName)}`}
        </h3>
        <p class="text-xs sm:text-sm text-forest-light max-w-lg mx-auto leading-relaxed mb-5">
          ${lang === 'id'
        ? 'Saat ini siswa yang sudah terdaftar di database baru Sekolah <b>Azhari (9 Siswa)</b> dan <b>Masa Kecil (10 Siswa)</b>. Silakan klik tombol di bawah untuk melihat jurnal belajar siswa.'
        : 'Currently, registered students in the database are only at <b>Azhari (9 Students)</b> and <b>Masa Kecil (10 Students)</b>. Click below to view learning journals.'}
        </p>
        <div class="flex items-center justify-center gap-2.5 flex-wrap">
          <button type="button" onclick="switchReportSchool('masa_kecil')"
            class="px-4 py-2.5 rounded-xl bg-forest hover:bg-forest/90 text-white font-bold text-xs shadow-soft transition">
            Lihat Masa Kecil (10 Siswa) ➔
          </button>
          <button type="button" onclick="switchReportSchool('azhari')"
            class="px-4 py-2.5 rounded-xl bg-sand-200 hover:bg-sand-300 text-forest font-bold text-xs transition">
            Lihat Azhari (9 Siswa) ➔
          </button>
        </div>
      </div>
    `;
    return;
  }

  const activeSemester = SEMESTER_PRESETS.find(s => s.id === state.reportSelectedTerm) || SEMESTER_PRESETS[0];
  const termDisplayName = lang === 'id' ? activeSemester.label_id : activeSemester.label_en;

  // Retrieve active values from DB cache or defaults
  const activeData = getActiveReportValues(student, state.reportSelectedTerm);

  const studentAge = activeData.studentAge || student.age || (student.className?.includes('Yellow') ? '6 Tahun' : '5 Tahun');
  const learningObjs = activeData.objectives || [];
  const narrativeText = activeData.developmentNotes || '';
  const attendanceDisplay = activeData.attendanceDisplay || '100% (12 dari 12 Pertemuan)';
  const facilitatorsText = (Array.isArray(activeData.facilitators) && activeData.facilitators.length > 0)
    ? activeData.facilitators.join(' · ')
    : (typeof activeData.facilitators === 'string' && activeData.facilitators.trim().length > 0)
      ? activeData.facilitators.trim()
      : school.defaultTutors;
  const leadTutor = ((Array.isArray(activeData.facilitators) && activeData.facilitators.length > 0)
    ? activeData.facilitators[0]
    : (typeof activeData.facilitators === 'string' && activeData.facilitators.trim().length > 0)
      ? activeData.facilitators.split(/[,·]/)[0]
      : (school.defaultTutors || '').split(/[,·]/)[0]
  ).trim();

  // Documentation photos from observations (shared for both TK & SD)
  const studentUuid = resolveStudentUuid(student.id);
  const studentObs = (state.databaseObservations || [])
    .filter(obs => obs.student_id === student.id || obs.student_id === studentUuid)
    .sort((a, b) => new Date(b.created_at || 0) - new Date(a.created_at || 0));

  if (studentObs.some(obs => obs.photo_path && !obs.photo_signed_url)) {
    if (typeof signObservationPhotos === 'function') {
      signObservationPhotos(state.databaseObservations).then(() => {
        renderStudentReportContent();
      }).catch(() => { });
    }
  }

  const obsPhotos = studentObs
    .map(obs => {
      let rawUrl = obs.photo_signed_url || obs.photo_url || '';
      if (!rawUrl && obs.photo_path && typeof sb !== 'undefined' && sb) {
        rawUrl = sb.storage.from('student-observation-photos').getPublicUrl(obs.photo_path).data?.publicUrl || '';
      }
      const safeUrl = typeof safeHttpsUrl === 'function' ? safeHttpsUrl(rawUrl) : rawUrl;
      if (!safeUrl) return null;
      const createdAt = obs.created_at ? new Date(obs.created_at) : null;
      const dateFormatted = createdAt && !Number.isNaN(createdAt.getTime())
        ? createdAt.toLocaleDateString(lang === 'id' ? 'id-ID' : 'en-US', { day: 'numeric', month: 'short', year: 'numeric' })
        : (obs.time || '');
      return {
        url: safeUrl,
        title: obs.milestone || (lang === 'id' ? 'Momen Pembelajaran' : 'Learning Moment'),
        caption: obs.anecdote || '',
        date: dateFormatted
      };
    })
    .filter(Boolean);

  const photos = obsPhotos.length > 0
    ? obsPhotos
    : (activeData.photos && activeData.photos.length > 0 ? activeData.photos : (student.gallery || []));

  window.__currentReportPhotos = photos;

  // -------------------------------------------------------------
  // CONDITIONAL TEMPLATE ROUTING:
  // Kategori SD ("Azhari", "Miftahul Ulum", "Citra Alam") vs PAUD / TK ("Masa Kecil", "Early Step")
  // -------------------------------------------------------------
  const isSD = isPrimarySchool(schoolKey, student);

  if (isSD) {
    // ============================================================
    // SD TEMPLATE (Matching User Spec & media_1794964923846_f0d3e72b.png)
    // NOTE: Tanda Tangan (TTD) dihapus khusus template SD agar bersih
    // ============================================================
    const sdScores = {
      keterlibatan_aktif: activeData.skillRatings?.scores?.keterlibatan_aktif
        ?? (typeof activeData.skillRatings?.keterlibatan_aktif === 'number' ? activeData.skillRatings.keterlibatan_aktif : 95),
      kreatif: activeData.skillRatings?.scores?.kreatif
        ?? (typeof activeData.skillRatings?.kreatif === 'number' ? activeData.skillRatings.kreatif : 92),
      digital_innovation: activeData.skillRatings?.scores?.digital_innovation
        ?? (typeof activeData.skillRatings?.digital_innovation === 'number' ? activeData.skillRatings.digital_innovation : 90),
      problem_solving: activeData.skillRatings?.scores?.problem_solving
        ?? (typeof activeData.skillRatings?.problem_solving === 'number' ? activeData.skillRatings.problem_solving : 88),
      collaboration: activeData.skillRatings?.scores?.collaboration
        ?? (typeof activeData.skillRatings?.collaboration === 'number' ? activeData.skillRatings.collaboration : 90)
    };

    const sdPredicates = {
      keterlibatan_aktif: activeData.skillRatings?.predicates?.keterlibatan_aktif || getScorePredicate(sdScores.keterlibatan_aktif),
      kreatif: activeData.skillRatings?.predicates?.kreatif || getScorePredicate(sdScores.kreatif),
      digital_innovation: activeData.skillRatings?.predicates?.digital_innovation || getScorePredicate(sdScores.digital_innovation),
      problem_solving: activeData.skillRatings?.predicates?.problem_solving || getScorePredicate(sdScores.problem_solving),
      collaboration: activeData.skillRatings?.predicates?.collaboration || getScorePredicate(sdScores.collaboration)
    };

    let saranList = [];
    if (activeData.developmentNotes && activeData.developmentNotes.trim().length > 0) {
      saranList = activeData.developmentNotes
        .split('\n')
        .map(line => line.replace(/^[-*•]\s*/, '').trim())
        .filter(line => line.length > 0);
    }
    if (saranList.length === 0) {
      saranList = [
        'menunjukkan keaktifan dan pemahaman yang sangat baik selama kegiatan',
        'terus mengembangkan kreativitas melalui berbagai proyek sederhana'
      ];
    }

    const attMatch = String(activeData.attendanceDisplay || '').match(/(\d+)%/);
    let attendancePct = attMatch ? parseInt(attMatch[1], 10) : 92;
    if (isNaN(attendancePct) || attendancePct < 0) attendancePct = 92;
    if (attendancePct > 100) attendancePct = 100;

    const defaultSdObjs = [
      'mengenali berbagai jenis input sederhana, seperti tombol, sensor cahaya, dan sensor gerak',
      'mengenali berbagai jenis output sederhana, seperti LED, buzzer, dan motor',
      'menunjukkan pemahaman cara kerja Tilt Sensor sebagai input untuk mengaktifkan output',
      'mencoba menggunakan Motor DC sebagai aktuator untuk menghasilkan gerakan',
      'membuat rangkaian sederhana yang menghubungkan sensor sebagai input dan aktuator sebagai output'
    ];
    const sdObjs = (learningObjs && learningObjs.length > 0) ? learningObjs : defaultSdObjs;

    container.innerHTML = `
      <div class="space-y-5 font-sans text-slate-900">

        <!-- ================= 1. HEADER SD ================= -->
        <header class="pb-3 border-b border-slate-200 report-break-avoid">
          <div class="flex items-center gap-4 sm:gap-6">
            <div class="flex-shrink-0">
              ${school.logoHtml}
            </div>

            <div>
              <p class="text-xs sm:text-sm font-bold text-slate-800 tracking-wider uppercase mb-0.5">
                ${lang === 'id' ? 'LAPORAN EKSTRAKURIKULER' : 'EXTRACURRICULAR REPORT'}
              </p>
              <h1 class="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-tight">
                ${escapeHTML(school.displayName)}
              </h1>
              <p class="text-xs sm:text-sm font-bold text-slate-800 uppercase tracking-wider mt-0.5">
                ${escapeHTML(termDisplayName.toUpperCase())}
              </p>
            </div>
          </div>

          <!-- Student Identity Block -->
          <div class="mt-4 space-y-1.5 text-xs sm:text-sm text-slate-800 font-medium">
            <div class="grid grid-cols-[140px_10px_1fr] sm:grid-cols-[160px_12px_1fr] items-start">
              <span class="font-bold text-slate-900">${lang === 'id' ? 'Nama Peserta Didik' : 'Student Name'}</span>
              <span class="font-bold text-slate-900">:</span>
              <span class="font-bold text-slate-900">${escapeHTML(student.name)} ${student.nickname ? `<span class="text-slate-800 font-bold">(${escapeHTML(student.nickname)})</span>` : ''}</span>
            </div>
            <div class="grid grid-cols-[140px_10px_1fr] sm:grid-cols-[160px_12px_1fr] items-start">
              <span class="font-bold text-slate-900">${lang === 'id' ? 'Kelas' : 'Class'}</span>
              <span class="font-bold text-slate-900">:</span>
              <span class="font-semibold text-slate-800">${escapeHTML(student.className || '1A')}</span>
            </div>
            <div class="grid grid-cols-[140px_10px_1fr] sm:grid-cols-[160px_12px_1fr] items-start">
              <span class="font-bold text-slate-900">${lang === 'id' ? 'Pengampu' : 'Facilitators'}</span>
              <span class="font-bold text-slate-900">:</span>
              <span class="leading-relaxed text-slate-800">${escapeHTML(facilitatorsText)}</span>
            </div>
          </div>
        </header>

        <!-- ================= 2. BLOK OBJEKTIF PEMBELAJARAN ================= -->
        <section class="rounded-2xl border-2 border-[#5B82A6] p-4 sm:p-5 relative report-break-avoid bg-white">
          <div class="inline-block bg-[#5B82A6] text-white text-[11px] sm:text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wider mb-3 shadow-2xs">
            ${lang === 'id' ? 'OBJEKTIF PEMBELAJARAN' : 'LEARNING OBJECTIVES'}
          </div>
          <ul class="space-y-1.5 text-xs sm:text-sm text-slate-800 leading-relaxed list-disc list-inside">
            ${sdObjs.map(obj => `
              <li>${escapeHTML(obj)}</li>
            `).join('')}
          </ul>
        </section>

        <!-- ================= 3. BLOK SKILL / KEMAMPUAN & SARAN PENGAMPU ================= -->
        <section class="rounded-2xl border-2 border-[#5B82A6] p-4 sm:p-5 relative report-break-avoid bg-white">
          <div class="inline-block bg-[#5B82A6] text-white text-[11px] sm:text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wider mb-3.5 shadow-2xs">
            ${lang === 'id' ? 'SKILL / KEMAMPUAN' : 'SKILLS &amp; ABILITIES'}
          </div>

          <!-- Skill Scores Table -->
          <div class="overflow-x-auto">
            <table class="w-full border-collapse border border-[#5B82A6] text-xs sm:text-sm text-slate-800">
              <thead>
                <tr class="bg-white">
                  <th class="border border-[#5B82A6] p-2.5 sm:p-3 text-center font-bold text-slate-900 w-1/5">Aktif</th>
                  <th class="border border-[#5B82A6] p-2.5 sm:p-3 text-center font-bold text-slate-900 w-1/5">Kreatif</th>
                  <th class="border border-[#5B82A6] p-2.5 sm:p-3 text-center font-bold text-slate-900 w-1/5">Digital Innovation &amp; Inquiry</th>
                  <th class="border border-[#5B82A6] p-2.5 sm:p-3 text-center font-bold text-slate-900 w-1/5">Problem Solving</th>
                  <th class="border border-[#5B82A6] p-2.5 sm:p-3 text-center font-bold text-slate-900 w-1/5">Collaboration</th>
                </tr>
              </thead>
              <tbody>
                <tr class="bg-white">
                  <td class="border border-[#5B82A6] p-2.5 sm:p-3 text-center font-bold text-slate-900 text-sm sm:text-base">${sdScores.keterlibatan_aktif}</td>
                  <td class="border border-[#5B82A6] p-2.5 sm:p-3 text-center font-bold text-slate-900 text-sm sm:text-base">${sdScores.kreatif}</td>
                  <td class="border border-[#5B82A6] p-2.5 sm:p-3 text-center font-bold text-slate-900 text-sm sm:text-base">${sdScores.digital_innovation}</td>
                  <td class="border border-[#5B82A6] p-2.5 sm:p-3 text-center font-bold text-slate-900 text-sm sm:text-base">${sdScores.problem_solving}</td>
                  <td class="border border-[#5B82A6] p-2.5 sm:p-3 text-center font-bold text-slate-900 text-sm sm:text-base">${sdScores.collaboration}</td>
                </tr>
                <tr class="bg-white">
                  <td class="border border-[#5B82A6] p-2.5 sm:p-3 text-center font-medium text-slate-800 text-xs sm:text-sm">${escapeHTML(sdPredicates.keterlibatan_aktif)}</td>
                  <td class="border border-[#5B82A6] p-2.5 sm:p-3 text-center font-medium text-slate-800 text-xs sm:text-sm">${escapeHTML(sdPredicates.kreatif)}</td>
                  <td class="border border-[#5B82A6] p-2.5 sm:p-3 text-center font-medium text-slate-800 text-xs sm:text-sm">${escapeHTML(sdPredicates.digital_innovation)}</td>
                  <td class="border border-[#5B82A6] p-2.5 sm:p-3 text-center font-medium text-slate-800 text-xs sm:text-sm">${escapeHTML(sdPredicates.problem_solving)}</td>
                  <td class="border border-[#5B82A6] p-2.5 sm:p-3 text-center font-medium text-slate-800 text-xs sm:text-sm">${escapeHTML(sdPredicates.collaboration)}</td>
                </tr>
              </tbody>
            </table>
          </div>

          <!-- Saran Pengampu Sub-Block -->
          <div class="mt-4 pt-3">
            <div class="inline-block bg-[#5B82A6] text-white text-[11px] sm:text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wider mb-2.5 shadow-2xs">
              ${lang === 'id' ? 'SARAN PENGAMPU' : 'FACILITATOR SUGGESTIONS'}
            </div>
            <ul class="space-y-1.5 text-xs sm:text-sm text-slate-800 leading-relaxed list-disc list-inside">
              ${saranList.map(saran => `
                <li>${escapeHTML(saran)}</li>
              `).join('')}
            </ul>
          </div>
        </section>

        <!-- ================= 4. BLOK KEHADIRAN (Bar Indicator) ================= -->
        <section class="rounded-2xl border-2 border-[#5B82A6] p-3 sm:p-4 flex items-center gap-3 sm:gap-4 relative report-break-avoid bg-white">
          <div class="inline-block bg-[#5B82A6] text-white text-[11px] sm:text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider shadow-2xs flex-shrink-0">
            ${lang === 'id' ? 'KEHADIRAN' : 'ATTENDANCE'}
          </div>
          
          <!-- Progress Bar Track -->
          <div class="flex-1 bg-[#C8E0EC] rounded-full h-6 p-0.5 overflow-hidden">
            <div class="bg-[#2C5282] h-full rounded-full transition-all duration-500" style="width: ${attendancePct}%;"></div>
          </div>

          <!-- Attendance Percentage Number -->
          <span class="text-base sm:text-lg font-black text-slate-900 flex-shrink-0 min-w-12 text-right">
            ${attendancePct}%
          </span>
        </section>

        <!-- ================= 5. BLOK DOKUMENTASI MOMEN PEMBELAJARAN (SD) ================= -->
        <section class="rounded-2xl border-2 border-[#5B82A6] p-4 sm:p-5 relative report-break-avoid bg-white">
          <div class="inline-block bg-[#5B82A6] text-white text-[11px] sm:text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wider mb-3.5 shadow-2xs">
            ${lang === 'id' ? 'DOKUMENTASI MOMEN PEMBELAJARAN' : 'LEARNING MOMENT DOCUMENTATION'}
          </div>

          <!-- Documentation Photos Grid -->
          <div class="mt-2">
            ${photos && photos.length > 0 ? `
              <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
                ${photos.map((item, idx) => `
                  <div class="rounded-xl border border-[#5B82A6]/40 p-2.5 bg-slate-50/50 flex flex-col justify-between hover:shadow-md transition cursor-pointer"
                    onclick="handleReportPhotoClick(${idx})">
                    <div>
                      <div class="w-full h-36 rounded-lg bg-sand-100 border border-slate-200 overflow-hidden relative">
                        <img src="${escapeHTML(item.url)}" alt="${escapeHTML(item.title || 'Foto Observasi')}"
                          class="w-full h-full object-cover hover:scale-105 transition duration-300"
                          loading="lazy">
                      </div>
                      <span class="block text-xs font-bold text-slate-900 mt-2">${escapeHTML(item.title || 'Momen Pembelajaran')}</span>
                      <span class="block text-[10px] text-slate-500 mt-0.5">${escapeHTML(item.date || '')}</span>
                      <p class="text-[11px] text-slate-700 mt-1.5 leading-snug line-clamp-2">
                        ${escapeHTML(item.caption || '')}
                      </p>
                    </div>
                  </div>
                `).join('')}
              </div>
            ` : `
              <div class="py-8 px-4 text-center bg-sand-50/60 rounded-xl border border-dashed border-[#5B82A6]/40">
                <span class="text-2xl block mb-1">📷</span>
                <p class="text-xs font-bold text-slate-800">
                  ${lang === 'id' ? 'Belum Ada Foto Observasi yang Diunggah' : 'No Observation Photos Uploaded Yet'}
                </p>
                <p class="text-[11px] text-slate-600 mt-0.5">
                  ${lang === 'id' ? 'Foto dokumentasi observasi siswa akan otomatis tersinkronisasi di sini saat tutor menambahkan foto pada menu Observasi &amp; Ceklis.' : 'Student observation documentation photos will automatically sync here once uploaded in the Observations menu.'}
                </p>
              </div>
            `}
          </div>
        </section>

      </div>
    `;
    return;
  }

  // ============================================================
  // PAUD / TK TEMPLATE (Sekolah Masa Kecil Montessori & TK Early Step)
  // Checkbox Matrix & Standard Development Notes Template
  // ============================================================

  container.innerHTML = `
    <div class="space-y-6 font-sans text-slate-900">

      <!-- ================= 1. HEADER SEKOLAH DINAMIS & LOGO ================= -->
      <header class="pb-4 border-b border-slate-200 report-break-avoid">
        <div class="flex items-start justify-between gap-4">
          
          <div class="flex items-center gap-4">
            <!-- School Circular Logo -->
            ${school.logoHtml}

            <!-- School Title & Subtitles -->
            <div>
              <p class="text-[11px] font-bold text-slate-700 tracking-wider uppercase leading-none mb-1">
                ${lang === 'id' ? 'JURNAL BELAJAR EKSTRAKURIKULER' : 'EXTRACURRICULAR LEARNING JOURNAL'}
              </p>
              <h1 class="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-tight">
                ${escapeHTML(school.displayName)}
              </h1>
              <p class="text-xs font-bold text-slate-800 uppercase tracking-wider mt-1">
                ${escapeHTML(termDisplayName)}
              </p>
            </div>
          </div>

          <!-- Top Right: Official Plego Logo -->
          <div class="flex items-center flex-shrink-0 pt-1">
            <img src="src/logo-plego-tp.png" alt="Logo Plego" class="h-10 sm:h-12 w-auto object-contain">
          </div>
        </div>

        <!-- Student Identity Block -->
        <div class="mt-5 space-y-1.5 text-xs sm:text-sm text-slate-800 font-medium">
          <div class="grid grid-cols-[115px_8px_1fr] sm:grid-cols-[160px_12px_1fr] items-start">
            <span class="font-bold text-slate-900">${lang === 'id' ? 'Nama Peserta Didik' : 'Student Name'}</span>
            <span class="font-bold text-slate-900">:</span>
            <span class="font-bold text-slate-900">${escapeHTML(student.name)} ${student.className ? `<span class="text-slate-500 font-normal text-xs">(${escapeHTML(student.className)})</span>` : ''}</span>
          </div>
          <div class="grid grid-cols-[115px_8px_1fr] sm:grid-cols-[160px_12px_1fr] items-start">
            <span class="font-bold text-slate-900">${lang === 'id' ? 'Umur' : 'Age'}</span>
            <span class="font-bold text-slate-900">:</span>
            <span>${escapeHTML(studentAge)}</span>
          </div>
          <div class="grid grid-cols-[115px_8px_1fr] sm:grid-cols-[160px_12px_1fr] items-start">
            <span class="font-bold text-slate-900">${lang === 'id' ? 'Pengampu' : 'Facilitators'}</span>
            <span class="font-bold text-slate-900">:</span>
            <span class="leading-relaxed">${escapeHTML(facilitatorsText)}</span>
          </div>
        </div>
      </header>

      <!-- ================= 2. BLOK OBJEKTIF PEMBELAJARAN ================= -->
      <section class="rounded-2xl border-2 ${school.borderClass} p-4 sm:p-5 relative report-break-avoid">
        <div class="inline-block ${school.badgeBgClass} text-white text-[11px] sm:text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wider mb-3 shadow-2xs">
          ${lang === 'id' ? 'OBJEKTIF PEMBELAJARAN' : 'LEARNING OBJECTIVES'}
        </div>
        <ul class="space-y-1.5 text-xs text-slate-800 leading-relaxed list-disc list-inside">
          ${learningObjs.map(obj => `
            <li>${escapeHTML(obj)}</li>
          `).join('')}
        </ul>
      </section>

      <!-- ================= 3. BLOK SKILL / KEMAMPUAN ================= -->
      <section class="rounded-2xl border-2 ${school.borderClass} p-4 sm:p-5 relative report-break-avoid">
        <div class="inline-block ${school.badgeBgClass} text-white text-[11px] sm:text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wider mb-3 shadow-2xs">
          ${lang === 'id' ? 'SKILL / KEMAMPUAN' : 'SKILLS &amp; ABILITIES'}
        </div>

        <div class="overflow-x-auto">
          <table class="w-full border-collapse border ${school.borderClass} text-xs text-slate-800">
            <thead>
              <tr class="bg-white">
                <th class="border ${school.borderClass} p-2.5 text-center font-bold text-slate-900 w-28 sm:w-32 bg-slate-50/50">
                  ${lang === 'id' ? 'Hasil observasi' : 'Observation Results'}
                </th>
                ${SKILL_COLUMNS.map(col => `
                  <th class="border ${school.borderClass} p-2 sm:p-2.5 text-center font-bold text-slate-900">
                    ${escapeHTML(lang === 'id' ? col.label_id : col.label_en)}
                  </th>
                `).join('')}
              </tr>
            </thead>
            <tbody>
              ${SKILL_LEVEL_ROWS.map(row => `
                <tr>
                  <td class="border ${school.borderClass} p-2 sm:p-2.5 font-medium text-center bg-slate-50/30 text-xs text-slate-800 leading-tight">
                    ${escapeHTML(lang === 'id' ? row.label_id : row.label_en)}
                  </td>
                  ${SKILL_COLUMNS.map(col => {
    const studentLevel = activeData.skillRatings?.[col.key];
    const isMatch = studentLevel === row.key;
    return `
                      <td class="border ${school.borderClass} p-2 text-center align-middle bg-white h-11 sm:h-12">
                        ${isMatch
        ? '<div class="w-7 h-7 sm:w-8 sm:h-8 mx-auto rounded-full border-2 border-emerald-600 text-emerald-600 font-bold flex items-center justify-center text-sm shadow-2xs">✓</div>'
        : ''}
                      </td>
                    `;
  }).join('')}
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>

        <p class="text-[10px] sm:text-[11px] text-slate-600 mt-2.5 italic">
          ${lang === 'id'
      ? '✓ menunjukkan tingkat perkembangan yang paling menggambarkan perilaku anak berdasarkan pengamatan selama kegiatan Montessori STEM &amp; Robotik.'
      : '✓ indicates the developmental stage that best reflects the child’s behavior based on Montessori STEM &amp; Robotics observations.'}
        </p>
      </section>

      <!-- ================= 4. BLOK CATATAN PERKEMBANGAN SISWA ================= -->
      <section class="rounded-2xl border-2 ${school.borderClass} p-4 sm:p-5 relative report-break-avoid">
        <div class="inline-block ${school.badgeBgClass} text-white text-[11px] sm:text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wider mb-2.5 shadow-2xs">
          ${lang === 'id' ? 'CATATAN PERKEMBANGAN SISWA' : 'STUDENT PROGRESS NOTES'}
        </div>
        <p class="text-xs text-slate-800 leading-relaxed font-normal whitespace-pre-line">
          ${escapeHTML(narrativeText)}
        </p>
      </section>

      <!-- ================= 5. BLOK KEHADIRAN & DOKUMENTASI PEMBELAJARAN ================= -->
      <section class="rounded-2xl border-2 ${school.borderClass} p-4 sm:p-5 relative report-break-avoid">
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
          <div class="inline-block ${school.badgeBgClass} text-white text-[11px] sm:text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wider shadow-2xs">
            ${lang === 'id' ? 'KEHADIRAN &amp; DOKUMENTASI PEMBELAJARAN' : 'ATTENDANCE &amp; LEARNING DOCUMENTATION'}
          </div>
          <div class="text-xs font-bold text-slate-800">
            ${lang === 'id' ? 'Kehadiran' : 'Attendance'}: <span class="text-emerald-700 font-extrabold">${escapeHTML(attendanceDisplay)}</span>
          </div>
        </div>

        <!-- Documentation Photos Grid -->
        <div class="mt-2">
          ${photos && photos.length > 0 ? `
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
              ${photos.map((item, idx) => `
                <div class="rounded-xl border ${school.borderClass}/40 p-2.5 bg-slate-50/50 flex flex-col justify-between hover:shadow-md transition cursor-pointer"
                  onclick="handleReportPhotoClick(${idx})">
                  <div>
                    <div class="w-full h-36 rounded-lg bg-sand-100 border border-slate-200 overflow-hidden relative">
                      <img src="${escapeHTML(item.url)}" alt="${escapeHTML(item.title || 'Foto Observasi')}"
                        class="w-full h-full object-cover hover:scale-105 transition duration-300"
                        loading="lazy">
                    </div>
                    <span class="block text-xs font-bold text-slate-900 mt-2">${escapeHTML(item.title || 'Momen Pembelajaran')}</span>
                    <span class="block text-[10px] text-slate-500 mt-0.5">${escapeHTML(item.date || '')}</span>
                    <p class="text-[11px] text-slate-700 mt-1.5 leading-snug line-clamp-2">
                      ${escapeHTML(item.caption || '')}
                    </p>
                  </div>
                </div>
              `).join('')}
            </div>
          ` : `
            <div class="py-8 px-4 text-center bg-sand-50/60 rounded-xl border border-dashed border-sand-300">
              <span class="text-2xl block mb-1">📷</span>
              <p class="text-xs font-bold text-forest">
                ${lang === 'id' ? 'Belum Ada Foto Observasi yang Diunggah' : 'No Observation Photos Uploaded Yet'}
              </p>
              <p class="text-[11px] text-forest-light mt-0.5">
                ${lang === 'id' ? 'Foto dokumentasi observasi siswa akan otomatis tersinkronisasi di sini saat tutor menambahkan foto pada menu Observasi &amp; Ceklis.' : 'Student observation documentation photos will automatically sync here once uploaded in the Observations menu.'}
              </p>
            </div>
          `}
        </div>
      </section>

      <!-- ================= 6. LEMBAR PENGESAHAN & TANDA TANGAN ================= -->
      <footer class="pt-5 mt-6 border-t border-slate-300 report-break-avoid">
        <div class="text-right text-xs text-slate-600 mb-5 font-medium">
          ${lang === 'id' ? 'Jakarta, 16 November 2026' : 'Jakarta, November 16, 2026'}
        </div>

        <div class="grid grid-cols-3 gap-4 text-center text-xs text-slate-800">
          <div class="flex flex-col items-center justify-between min-h-[110px]">
            <span class="font-bold text-slate-900">${lang === 'id' ? 'Pengampu STEM' : 'STEM Facilitator'}</span>
            <div class="w-28 border-b border-slate-400 my-2"></div>
            <div>
              <span class="font-bold block text-slate-900">${escapeHTML(leadTutor)}</span>
              <span class="text-[10px] text-slate-500">${lang === 'id' ? 'Tutor Plego STEM' : 'Plego STEM Tutor'}</span>
            </div>
          </div>

          <div class="flex flex-col items-center justify-between min-h-[110px]">
            <span class="font-bold text-slate-900">${lang === 'id' ? 'Orang Tua / Wali' : 'Parent / Guardian'}</span>
            <div class="w-28 border-b border-slate-400 my-2"></div>
            <div>
              <span class="font-bold block text-slate-900">( ........................................ )</span>
              <span class="text-[10px] text-slate-500">${lang === 'id' ? 'Nama Terang' : 'Full Name'}</span>
            </div>
          </div>

          <div class="flex flex-col items-center justify-between min-h-[110px]">
            <span class="font-bold text-slate-900">${lang === 'id' ? 'Kepala Sekolah' : 'Principal / Head of School'}</span>
            <div class="w-28 border-b border-slate-400 my-2"></div>
            <div>
              <span class="font-bold block text-slate-900">${escapeHTML(school.headmaster)}</span>
              <span class="text-[10px] text-slate-500">${escapeHTML(school.shortName)}</span>
            </div>
          </div>
        </div>

        <div class="mt-6 pt-3 border-t border-slate-200 text-center text-[10px] text-slate-400 font-mono">
          ${lang === 'id' ? 'Dokumen Jurnal Belajar Resmi Plego Montessori STEM Platform · Terverifikasi Digital' : 'Official Learning Journal Document Plego Montessori STEM Platform · Digitally Verified'}
        </div>
      </footer>

    </div>
  `;
}


function handleAttendanceSessionChange() {
  const attendedInput = document.getElementById('edit-report-attended-sessions');
  const totalInput = document.getElementById('edit-report-total-sessions');
  const percentInput = document.getElementById('edit-report-attendance-percent');
  const percentDisplay = document.getElementById('edit-report-attendance-percent-display');
  const previewText = document.getElementById('edit-report-attendance-preview-text');

  let attended = parseInt(attendedInput?.value, 10);
  let total = parseInt(totalInput?.value, 10);

  if (isNaN(total) || total < 1) total = 12;
  if (isNaN(attended) || attended < 0) attended = 0;
  if (attended > total) attended = total;

  if (attendedInput) attendedInput.value = attended;
  if (totalInput) totalInput.value = total;

  const pct = Math.round((attended / total) * 100);
  if (percentInput) percentInput.value = pct;
  if (percentDisplay) percentDisplay.textContent = `${pct}%`;
  if (previewText) previewText.textContent = `(${attended} dari ${total} Pertemuan)`;
}

function setAttendancePreset(attended, total = 12) {
  const attendedInput = document.getElementById('edit-report-attended-sessions');
  const totalInput = document.getElementById('edit-report-total-sessions');
  if (attendedInput) attendedInput.value = attended;
  if (totalInput) totalInput.value = total;
  handleAttendanceSessionChange();
}

function handleAttendancePercentDirectChange() {
  // Maintained for backward compatibility, delegates to session change
  handleAttendanceSessionChange();
}

// -------------------------------------------------------------
// FACILITATORS AUTO-DETECTION & MULTI-SELECT DROPDOWN HELPERS
// -------------------------------------------------------------
function getScheduledFacilitators(student) {
  if (!student) return '';

  const studentUuid = resolveStudentUuid(student.id);
  const dbStudent = (state.allStudents || []).find(s => s.id === studentUuid || s.id === student.id);
  const targetClassId = dbStudent?.classId || student.classId;
  const currentSchoolKey = student.schoolId || state.reportSelectedSchool || 'early_step';
  const schoolPreset = SCHOOL_REPORT_PRESETS[currentSchoolKey] || SCHOOL_REPORT_PRESETS.early_step;

  const foundTutors = new Set();

  if (Array.isArray(state.scheduleItems) && state.scheduleItems.length > 0) {
    // 1. Match by classId if available
    let matchingSchedules = targetClassId
      ? state.scheduleItems.filter(item => item.classId === targetClassId)
      : [];

    // 2. If no direct classId match, match by school keywords in class name
    if (matchingSchedules.length === 0) {
      const keywords = {
        early_step: ['early step', 'tk b', 'tk-b'],
        azhari: ['azhari', 'rasuna'],
        masa_kecil: ['masa kecil', 'green'],
        citra_alam: ['citra alam', 'red', 'yellow']
      }[currentSchoolKey] || [currentSchoolKey];

      matchingSchedules = state.scheduleItems.filter(item => {
        const clsName = String(item.className || '').toLowerCase();
        return keywords.some(kw => clsName.includes(kw));
      });
    }

    matchingSchedules.forEach(item => {
      if (item.tutorName && item.tutorName !== '—' && !item.tutorName.includes('null')) {
        foundTutors.add(item.tutorName.trim());
      }
      if (item.assistantTutorName && item.assistantTutorName !== '—' && !item.assistantTutorName.includes('null')) {
        foundTutors.add(item.assistantTutorName.trim());
      }
    });
  }

  if (foundTutors.size > 0) {
    return Array.from(foundTutors).join(' · ');
  }

  return (state.lang === 'id' ? schoolPreset.defaultTutors_id : schoolPreset.defaultTutors_en) || schoolPreset.defaultTutors || 'Tim Tutor Plego';
}

function getAllEducatorsList() {
  const tutors = [];
  const admins = [];

  // Tutors from state.tutors
  (state.tutors || []).forEach(t => {
    if (t && t.full_name && !tutors.some(existing => existing.name.toLowerCase() === t.full_name.toLowerCase())) {
      tutors.push({ id: t.id, name: t.full_name, type: 'tutor' });
    }
  });

  // Common preset tutors fallback
  const defaultTutorNames = [
    'Athiyyah Syifa, S.Pd',
    'Karina Liandra, S.Pd',
    'Astria, S.Si',
    'Ghina Salma Susilo, S.Si',
    'Ratu Rina Syafira, S.Pd',
    'Ai Syarifah Maulida',
    'Nadhiyaa Shafa Mufidah',
    'Rafasya Hurul \'Ain',
    'Ratasya Andhini'
  ];
  defaultTutorNames.forEach(name => {
    const baseName = name.split(',')[0].toLowerCase().trim();
    if (!tutors.some(t => t.name.toLowerCase().includes(baseName))) {
      tutors.push({ id: `preset-${name}`, name: name, type: 'tutor' });
    }
  });

  // Admins from state.admins and ADMIN_IDENTITIES
  (state.admins || []).forEach(a => {
    if (a && a.full_name && !admins.some(existing => existing.name.toLowerCase() === a.full_name.toLowerCase())) {
      admins.push({ id: a.id, name: a.full_name, type: 'admin' });
    }
  });
  Object.values(ADMIN_IDENTITIES).forEach(name => {
    if (!admins.some(a => a.name.toLowerCase() === name.toLowerCase())) {
      admins.push({ id: `admin-${name}`, name: name, type: 'admin' });
    }
  });

  return { tutors, admins };
}

function populateFacilitatorDropdown() {
  const tutorOptgroup = document.getElementById('optgroup-facilitator-tutors');
  const adminOptgroup = document.getElementById('optgroup-facilitator-admins');
  if (!tutorOptgroup || !adminOptgroup) return;

  const { tutors, admins } = getAllEducatorsList();

  tutorOptgroup.innerHTML = tutors.map(t => `
    <option value="${escapeHTML(t.name)}">${escapeHTML(t.name)}</option>
  `).join('');

  adminOptgroup.innerHTML = admins.map(a => `
    <option value="${escapeHTML(a.name)}">${escapeHTML(a.name)} (Admin)</option>
  `).join('');
}

function renderFacilitatorPills() {
  const container = document.getElementById('edit-report-facilitator-pills');
  if (!container) return;

  const input = document.getElementById('edit-report-facilitators');
  const currentVal = (input?.value || '').toLowerCase();

  const { tutors, admins } = getAllEducatorsList();
  const candidateNames = [];
  tutors.forEach(t => {
    if (!candidateNames.includes(t.name)) candidateNames.push(t.name);
  });
  admins.forEach(a => {
    if (!candidateNames.includes(a.name)) candidateNames.push(a.name);
  });

  container.innerHTML = `
    <span class="text-[10px] text-forest-light font-bold self-center">Pilih cepat:</span>
    ${candidateNames.slice(0, 7).map(name => {
    const baseName = name.split(',')[0].toLowerCase().trim();
    const isSelected = currentVal.includes(baseName);
    return `
        <button type="button" onclick="toggleFacilitatorName('${escapeHTML(name)}')"
          class="px-2 py-0.5 rounded-full text-[10px] font-bold transition flex items-center gap-1 cursor-pointer ${isSelected
        ? 'bg-emerald-100 text-emerald-800 border border-emerald-300'
        : 'bg-sand-100 hover:bg-sand-200 text-forest border border-sand-300'
      }">
          <span>${isSelected ? '✓' : '＋'}</span>
          <span>${escapeHTML(name.split(',')[0])}</span>
        </button>
      `;
  }).join('')}
  `;
}

function handleSelectFacilitatorFromDropdown(selectEl) {
  if (!selectEl || !selectEl.value) return;
  const nameToAdd = selectEl.value.trim();
  addFacilitatorName(nameToAdd);
  selectEl.value = '';
}

function addFacilitatorName(name) {
  const input = document.getElementById('edit-report-facilitators');
  if (!input) return;
  const currentVal = input.value.trim();
  if (!currentVal) {
    input.value = name;
  } else {
    const baseName = name.split(',')[0].toLowerCase().trim();
    if (currentVal.toLowerCase().includes(baseName)) {
      showToast(state.lang === 'id' ? `${name} sudah ada dalam daftar pengampu.` : `${name} is already listed.`, 'ℹ️');
      return;
    }
    input.value = `${currentVal} · ${name}`;
  }
  renderFacilitatorPills();
  showToast(state.lang === 'id' ? `${name} ditambahkan!` : `${name} added!`, '✅');
}

function toggleFacilitatorName(name) {
  const input = document.getElementById('edit-report-facilitators');
  if (!input) return;
  const currentVal = input.value.trim();
  if (!currentVal) {
    input.value = name;
    renderFacilitatorPills();
    return;
  }
  let items = currentVal.split(/\s*·\s*/).map(s => s.trim()).filter(Boolean);
  const baseName = name.split(',')[0].toLowerCase().trim();
  const existingIndex = items.findIndex(item => item.toLowerCase().includes(baseName));
  if (existingIndex >= 0) {
    items.splice(existingIndex, 1);
    input.value = items.join(' · ');
  } else {
    items.push(name);
    input.value = items.join(' · ');
  }
  renderFacilitatorPills();
}

function syncFacilitatorsFromSchedule() {
  const student = findReportStudent(state.reportSelectedStudentId);
  const scheduled = getScheduledFacilitators(student);
  const facInput = document.getElementById('edit-report-facilitators');
  if (facInput && scheduled) {
    facInput.value = scheduled;
    renderFacilitatorPills();
    showToast(state.lang === 'id' ? 'Nama pengampu disinkronkan dari jadwal mengajar.' : 'Facilitators synced from schedule.', '📅');
  }
}

function getActiveReportValues(student, term) {
  const studentUuid = resolveStudentUuid(student.id);
  const currentTerm = term || state.reportSelectedTerm || 'Semester Gasal 2026/2027';
  const cacheKey = `${studentUuid}_${currentTerm}`;
  const savedReport = state.studentReportsCache?.[cacheKey];
  const lang = state.lang || 'id';
  const schoolKey = student.schoolId || state.reportSelectedSchool || 'masa_kecil';
  const isSD = isPrimarySchool(schoolKey, student);

  // 1. Learning Objectives
  let objectives = [];
  if (savedReport && Array.isArray(savedReport.learning_objectives) && savedReport.learning_objectives.length > 0) {
    objectives = savedReport.learning_objectives;
  } else if (student.learningObjectives) {
    objectives = (lang === 'id' ? student.learningObjectives.id : student.learningObjectives.en) || student.learningObjectives || [];
  } else if (isSD) {
    objectives = [
      'mengenali berbagai jenis input sederhana, seperti tombol, sensor cahaya, dan sensor gerak',
      'mengenali berbagai jenis output sederhana, seperti LED, buzzer, dan motor',
      'menunjukkan pemahaman cara kerja Tilt Sensor sebagai input untuk mengaktifkan output',
      'mencoba menggunakan Motor DC sebagai aktuator untuk menghasilkan gerakan',
      'membuat rangkaian sederhana yang menghubungkan sensor sebagai input dan aktuator sebagai output'
    ];
  }

  // 2. Skill Ratings
  let skillRatings = {};
  if (savedReport && savedReport.skill_ratings && typeof savedReport.skill_ratings === 'object') {
    skillRatings = savedReport.skill_ratings;
  } else if (student.skillRatings) {
    skillRatings = student.skillRatings;
  } else if (isSD) {
    skillRatings = {
      _format: 'sd',
      scores: { keterlibatan_aktif: 95, kreatif: 92, digital_innovation: 90, problem_solving: 88, collaboration: 90 },
      predicates: { keterlibatan_aktif: 'Sangat Mahir', kreatif: 'Mahir', digital_innovation: 'Mahir', problem_solving: 'Mahir', collaboration: 'Sangat Mahir' }
    };
  }

  // 3. Development Notes / Saran Pengampu
  let developmentNotes = '';
  if (savedReport && typeof savedReport.development_notes === 'string') {
    developmentNotes = savedReport.development_notes;
  } else if (student.narrativeFeedback) {
    developmentNotes = (lang === 'id' ? student.narrativeFeedback.id : student.narrativeFeedback.en) || student.narrativeFeedback || '';
  } else if (isSD) {
    developmentNotes = 'menunjukkan keaktifan dan pemahaman yang sangat baik selama kegiatan\nterus mengembangkan kreativitas melalui berbagai proyek sederhana';
  }

  // 4. Attendance
  let attendanceDisplay = '';
  if (savedReport && savedReport.attendance_percentage) {
    attendanceDisplay = savedReport.attendance_percentage;
  } else if (student.attendance) {
    const note = lang === 'id' ? student.attendance.note_id : student.attendance.note_en;
    attendanceDisplay = `${student.attendance.percent}% (${note || ''})`;
  } else if (isSD) {
    attendanceDisplay = '92% (11 dari 12 Pertemuan)';
  } else {
    attendanceDisplay = '100% (12 dari 12 Pertemuan)';
  }

  // 5. Umur & Pengampu (Customizable per report in skill_ratings._custom_age & _custom_tutors)
  let studentAge = '';
  if (savedReport && savedReport.skill_ratings && savedReport.skill_ratings._custom_age) {
    studentAge = savedReport.skill_ratings._custom_age;
  } else {
    studentAge = (lang === 'id' ? student.age_id : student.age_en) || student.age || '5 Tahun';
  }

  let facilitators = '';
  if (savedReport && savedReport.skill_ratings && savedReport.skill_ratings._custom_tutors) {
    facilitators = savedReport.skill_ratings._custom_tutors;
  } else {
    // Automatically retrieve from teaching schedule (Request 1)
    facilitators = getScheduledFacilitators(student);
  }

  return {
    objectives,
    skillRatings,
    developmentNotes,
    attendanceDisplay,
    studentAge,
    facilitators,
    savedReport
  };
}

async function loadStudentReportFromSupabase(studentId, term) {
  const studentUuid = resolveStudentUuid(studentId);
  const selectedTerm = term || state.reportSelectedTerm || 'Semester Gasal 2026/2027';
  const cacheKey = `${studentUuid}_${selectedTerm}`;

  if (!state.studentReportsCache) state.studentReportsCache = {};

  if (typeof sb !== 'undefined' && sb) {
    try {
      const { data, error } = await sb
        .from('student_reports')
        .select('*')
        .eq('student_id', studentUuid)
        .eq('term', selectedTerm)
        .maybeSingle();

      if (!error && data) {
        state.studentReportsCache[cacheKey] = data;
        // Trigger live re-render if matches currently active view
        const currentActiveUuid = resolveStudentUuid(state.reportSelectedStudentId);
        if (currentActiveUuid === studentUuid && state.reportSelectedTerm === selectedTerm) {
          renderStudentReportContent();
        }
      }
    } catch (err) {
      console.warn('[studentReport] Supabase select warning:', err);
    }
  }

  return state.studentReportsCache[cacheKey] || null;
}

function subscribeStudentReportsRealtime() {
  if (typeof sb === 'undefined' || !sb || state.studentReportsSubscribed) return;
  try {
    sb.channel('student_reports_realtime_sync')
      .on('postgres_changes', { event: '*', schema: 'public', table: 'student_reports' }, payload => {
        const record = payload.new;
        if (record && record.student_id && record.term) {
          const cacheKey = `${record.student_id}_${record.term}`;
          if (!state.studentReportsCache) state.studentReportsCache = {};
          state.studentReportsCache[cacheKey] = record;

          const currentStudentUuid = resolveStudentUuid(state.reportSelectedStudentId);
          const currentTerm = state.reportSelectedTerm || 'Semester Gasal 2026/2027';
          if (record.student_id === currentStudentUuid && record.term === currentTerm) {
            renderStudentReportContent();
          }
        }
      })
      .subscribe();
    state.studentReportsSubscribed = true;
  } catch (err) {
    console.warn('[studentReport] realtime subscribe warning:', err);
  }
}

function renderEditReportSkillMatrix(currentRatings = {}) {
  const tbody = document.getElementById('edit-report-skills-tbody');
  if (!tbody) return;
  const lang = state.lang || 'id';

  tbody.innerHTML = SKILL_LEVEL_ROWS.map(row => `
    <tr class="hover:bg-sand-50/70 transition">
      <td class="p-2.5 font-bold text-forest text-xs bg-sand-50/50">
        ${escapeHTML(lang === 'id' ? row.label_id : row.label_en)}
      </td>
      ${SKILL_COLUMNS.map(col => {
    const isChecked = currentRatings[col.key] === row.key;
    return `
          <td class="p-2 text-center align-middle border-l border-sand-200">
            <label class="inline-flex items-center justify-center p-1.5 cursor-pointer rounded-lg hover:bg-emerald-50 transition">
              <input type="radio" name="skill_${col.key}" value="${row.key}"
                ${isChecked ? 'checked' : ''}
                class="w-4 h-4 text-emerald-600 focus:ring-emerald-500 accent-emerald-600 cursor-pointer">
            </label>
          </td>
        `;
  }).join('')}
    </tr>
  `).join('');
}

function openEditReportModal() {
  const isParent = state.currentUser?.role === 'parent';
  if (isParent) {
    showToast(state.lang === 'id' ? 'Akses dibatasi. Hanya Admin dan Tutor yang dapat mengedit rapor.' : 'Access restricted to Admin and Tutor.', '🔒');
    return;
  }

  const student = findReportStudent(state.reportSelectedStudentId);
  if (!student) {
    showToast(state.lang === 'id' ? 'Pilih siswa terlebih dahulu untuk mengedit rapor.' : 'Please select a student first to edit report.', '⚠️');
    return;
  }
  const schoolKey = (student && student.schoolId) || state.reportSelectedSchool || 'masa_kecil';
  const school = SCHOOL_REPORT_PRESETS[schoolKey] || SCHOOL_REPORT_PRESETS.masa_kecil || SCHOOL_REPORT_PRESETS.early_step;
  const currentTerm = state.reportSelectedTerm || 'Semester Gasal 2026/2027';

  // 1. Set Modal Meta Information
  const nameEl = document.getElementById('edit-report-student-name');
  if (nameEl) nameEl.textContent = `${student.name} (${school.shortName || school.name})`;

  const termEl = document.getElementById('edit-report-term-label');
  if (termEl) termEl.textContent = currentTerm;

  // 2. Fetch Active Data (from DB cache or student presets)
  const activeData = getActiveReportValues(student, currentTerm);
  const isSD = isPrimarySchool(schoolKey, student);

  // 0. Fill Student Age & Facilitators
  const ageWrapper = document.getElementById('edit-report-age-wrapper');
  if (ageWrapper) {
    ageWrapper.style.display = isSD ? 'none' : '';
  }
  const ageInput = document.getElementById('edit-report-student-age');
  if (ageInput) ageInput.value = activeData.studentAge || student.age || '5 Tahun';

  const facInput = document.getElementById('edit-report-facilitators');
  if (facInput) {
    const facVal = (typeof activeData.facilitators === 'string' ? activeData.facilitators : (Array.isArray(activeData.facilitators) ? activeData.facilitators.join(' · ') : '')) || school.defaultTutors;
    facInput.value = facVal;
  }
  populateFacilitatorDropdown();
  renderFacilitatorPills();

  // 3. Fill Learning Objectives Textarea
  const objInput = document.getElementById('edit-report-objectives');
  if (objInput) {
    objInput.value = Array.isArray(activeData.objectives) ? activeData.objectives.join('\n') : '';
  }

  // 4. Toggle & Populate Skill Section (TK Matrix vs SD Scores)
  const tkSkillSection = document.getElementById('edit-report-skills-tk-section');
  const sdSkillSection = document.getElementById('edit-report-skills-sd-section');
  const notesLabel = document.getElementById('edit-report-notes-label');
  const notesInput = document.getElementById('edit-report-notes');

  if (isSD) {
    if (tkSkillSection) tkSkillSection.style.display = 'none';
    if (sdSkillSection) sdSkillSection.classList.remove('hidden');
    if (notesLabel) notesLabel.textContent = 'Saran Pengampu (1 Poin per Baris)';
    if (notesInput) {
      notesInput.placeholder = 'Tuliskan poin-poin saran pengampu (1 poin per baris)...';
      notesInput.value = activeData.developmentNotes || '';
    }

    const scores = activeData.skillRatings?.scores || {
      keterlibatan_aktif: 95,
      kreatif: 92,
      digital_innovation: 90,
      problem_solving: 88,
      collaboration: 90
    };

    setSdScoreInput('aktif', scores.keterlibatan_aktif ?? 95);
    setSdScoreInput('kreatif', scores.kreatif ?? (scores.eksplorasi_alat ?? 92));
    setSdScoreInput('digital', scores.digital_innovation ?? (scores.digital_inquiry ?? 90));
    setSdScoreInput('problem', scores.problem_solving ?? (scores.kemandirian_fokus ?? 88));
    setSdScoreInput('collab', scores.collaboration ?? (scores.kolaborasi_sosial ?? 90));
  } else {
    if (tkSkillSection) tkSkillSection.style.display = '';
    if (sdSkillSection) sdSkillSection.classList.add('hidden');
    if (notesLabel) notesLabel.textContent = 'Catatan Perkembangan Siswa (Deskriptif)';
    if (notesInput) {
      notesInput.placeholder = 'Tuliskan ulasan naratif mengenai perkembangan fokus, antusiasme, dan kemandirian siswa...';
      notesInput.value = activeData.developmentNotes || '';
    }
    // Render and Populate Skill Matrix Table
    renderEditReportSkillMatrix(activeData.skillRatings);
  }

  // 6. Fill Attendance Sessions
  const attMatch = String(activeData.attendanceDisplay || '').match(/(\d+)\s*dari\s*(\d+)/i);
  const attended = attMatch ? parseInt(attMatch[1], 10) : (isSD ? 11 : 12);
  const total = attMatch ? parseInt(attMatch[2], 10) : 12;
  const attendedInput = document.getElementById('edit-report-attended-sessions');
  const totalInput = document.getElementById('edit-report-total-sessions');
  if (attendedInput) attendedInput.value = attended;
  if (totalInput) totalInput.value = total;
  handleAttendanceSessionChange();

  // Show Modal
  openModal('modal-edit-report');
}

async function handleSaveStudentReportSubmit(event) {
  if (event) event.preventDefault();

  const isParent = state.currentUser?.role === 'parent';
  if (isParent) {
    showToast(state.lang === 'id' ? 'Akses dibatasi.' : 'Access restricted.', '🔒');
    return;
  }

  const student = findReportStudent(state.reportSelectedStudentId);
  if (!student) {
    showToast(state.lang === 'id' ? 'Pilih siswa terlebih dahulu.' : 'Please select a student first.', '⚠️');
    return;
  }
  const studentUuid = resolveStudentUuid(student.id);
  const currentTerm = state.reportSelectedTerm || 'Semester Gasal 2026/2027';
  const schoolKey = (student && student.schoolId) || state.reportSelectedSchool || 'masa_kecil';
  const isSD = isPrimarySchool(schoolKey, student);

  // 1. Objectives array
  const rawObj = document.getElementById('edit-report-objectives')?.value || '';
  const learning_objectives = rawObj
    .split('\n')
    .map(line => line.trim())
    .filter(line => line.length > 0);

  if (learning_objectives.length === 0) {
    showToast(state.lang === 'id' ? 'Mohon cantumkan minimal satu poin objektif pembelajaran.' : 'Please enter at least one learning objective.', '⚠️');
    return;
  }

  // 2. Skill ratings matrix (Conditional: TK vs SD)
  let skill_ratings = {};
  if (isSD) {
    const aktifScore = parseInt(document.getElementById('edit-report-sd-aktif')?.value, 10) || 95;
    const kreatifScore = parseInt(document.getElementById('edit-report-sd-kreatif')?.value, 10) || 92;
    const digitalScore = parseInt(document.getElementById('edit-report-sd-digital')?.value, 10) || 90;
    const problemScore = parseInt(document.getElementById('edit-report-sd-problem')?.value, 10) || 88;
    const collabScore = parseInt(document.getElementById('edit-report-sd-collab')?.value, 10) || 90;

    skill_ratings = {
      _format: 'sd',
      scores: {
        keterlibatan_aktif: aktifScore,
        kreatif: kreatifScore,
        digital_innovation: digitalScore,
        problem_solving: problemScore,
        collaboration: collabScore
      },
      predicates: {
        keterlibatan_aktif: getScorePredicate(aktifScore),
        kreatif: getScorePredicate(kreatifScore),
        digital_innovation: getScorePredicate(digitalScore),
        problem_solving: getScorePredicate(problemScore),
        collaboration: getScorePredicate(collabScore)
      }
    };
  } else {
    SKILL_COLUMNS.forEach(col => {
      const checked = document.querySelector(`input[name="skill_${col.key}"]:checked`);
      skill_ratings[col.key] = checked ? checked.value : 'mandiri';
    });
  }

  // 3. Development notes / Saran Pengampu
  const development_notes = (document.getElementById('edit-report-notes')?.value || '').trim();

  // 4. Attendance percentage from session inputs
  const attendedInput = document.getElementById('edit-report-attended-sessions');
  const totalInput = document.getElementById('edit-report-total-sessions');
  const attended = attendedInput ? parseInt(attendedInput.value, 10) || 12 : 12;
  const total = totalInput ? parseInt(totalInput.value, 10) || 12 : 12;
  const percent = Math.round((attended / total) * 100);
  const attendance_percentage = `${percent}% (${attended} dari ${total} Pertemuan)`;

  // 5. Custom Student Age & Facilitators inside skill_ratings
  const customAge = (document.getElementById('edit-report-student-age')?.value || '').trim();
  const customFacilitators = (document.getElementById('edit-report-facilitators')?.value || '').trim();
  if (customAge && !isSD) skill_ratings._custom_age = customAge;
  if (customFacilitators) skill_ratings._custom_tutors = customFacilitators;

  // Build Payload according to student_reports schema
  const payload = {
    student_id: studentUuid,
    term: currentTerm,
    learning_objectives: learning_objectives,
    skill_ratings: skill_ratings,
    development_notes: development_notes,
    attendance_percentage: attendance_percentage,
    updated_at: new Date().toISOString()
  };

  const cacheKey = `${studentUuid}_${currentTerm}`;
  const existingRecord = state.studentReportsCache?.[cacheKey];
  if (existingRecord && existingRecord.id && !String(existingRecord.id).startsWith('local-')) {
    payload.id = existingRecord.id;
  }

  // Visual loading state
  const saveBtn = document.getElementById('btn-save-report');
  const spinner = document.getElementById('save-report-spinner');
  const btnText = document.getElementById('save-report-btn-text');
  if (saveBtn) saveBtn.disabled = true;
  if (spinner) spinner.classList.remove('hidden');
  if (btnText) btnText.textContent = state.lang === 'id' ? 'Menyimpan...' : 'Saving...';

  try {
    let savedData = null;

    if (typeof sb !== 'undefined' && sb) {
      // Upsert query to Supabase student_reports table
      let { data, error } = await sb
        .from('student_reports')
        .upsert(payload)
        .select()
        .single();

      if (error) {
        console.warn('[Supabase] student_reports upsert error:', error);
        if (error.code === 'PGRST205' || error.message?.includes('not find the table') || error.message?.includes('does not exist')) {
          showToast(state.lang === 'id'
            ? 'Tabel student_reports belum dibuat di Supabase. Silakan jalankan student_reports.sql di SQL Editor.'
            : 'student_reports table not found. Please run student_reports.sql in Supabase SQL Editor.', '⚠️');
        } else {
          showToast(`Error Supabase: ${error.message || 'Gagal menyimpan'}`, '❌');
        }
        // Fallback local save to guarantee no data loss for tutor
        savedData = { ...payload, id: payload.id || 'local-' + Date.now() };
      } else {
        savedData = data;
        showToast(state.lang === 'id' ? 'Jurnal Belajar berhasil disimpan ke Supabase!' : 'Learning Journal successfully saved to Supabase!', '✅');
      }
    } else {
      savedData = { ...payload, id: payload.id || 'local-' + Date.now() };
      showToast(state.lang === 'id' ? 'Tersimpan lokal (database offline)' : 'Saved locally (offline)', 'ℹ️');
    }

    // Update in-memory cache
    if (!state.studentReportsCache) state.studentReportsCache = {};
    state.studentReportsCache[cacheKey] = savedData;

    // Close Modal
    closeModal('modal-edit-report');

    // Requirement 4: Sinkronisasi Real-Time
    // Immediately reflect changes on preview and printable sheet
    renderStudentReportContent();

  } catch (err) {
    console.error('[studentReport] Error during save:', err);
    showToast(state.lang === 'id' ? 'Terjadi kesalahan saat menyimpan data.' : 'An error occurred while saving.', '❌');
  } finally {
    if (saveBtn) saveBtn.disabled = false;
    if (spinner) spinner.classList.add('hidden');
    if (btnText) btnText.textContent = state.lang === 'id' ? 'Simpan Perubahan' : 'Save Changes';
  }
}



function handleReportPhotoClick(index) {
  const photo = window.__currentReportPhotos?.[index];
  if (!photo) return;
  openPhotoModal(photo.url, photo.title, photo.caption, photo.date);
}

window.handleReportPhotoClick = handleReportPhotoClick;
window.resolveStudentUuid = resolveStudentUuid;
window.getStudentSchoolKey = getStudentSchoolKey;
window.findReportStudent = findReportStudent;
window.isPrimarySchool = isPrimarySchool;
window.getScorePredicate = getScorePredicate;
window.setSdScoreInput = setSdScoreInput;
window.handleSdScoreChange = handleSdScoreChange;
window.switchReportSchool = switchReportSchool;
window.switchReportStudent = switchReportStudent;
window.switchReportTerm = switchReportTerm;
window.printStudentReport = printStudentReport;
window.renderStudentReport = renderStudentReport;
window.renderStudentReportContent = renderStudentReportContent;
window.openEditReportModal = openEditReportModal;
window.renderEditReportSkillMatrix = renderEditReportSkillMatrix;
window.handleSaveStudentReportSubmit = handleSaveStudentReportSubmit;
window.handleAttendanceSessionChange = handleAttendanceSessionChange;
window.handleAttendancePercentDirectChange = handleAttendancePercentDirectChange;
window.setAttendancePreset = setAttendancePreset;
window.syncFacilitatorsFromSchedule = syncFacilitatorsFromSchedule;
window.handleSelectFacilitatorFromDropdown = handleSelectFacilitatorFromDropdown;
window.addFacilitatorName = addFacilitatorName;
window.toggleFacilitatorName = toggleFacilitatorName;
window.populateFacilitatorDropdown = populateFacilitatorDropdown;
window.renderFacilitatorPills = renderFacilitatorPills;
window.openPhotoModal = openPhotoModal;
window.setPhotoZoom = setPhotoZoom;
window.zoomPhoto = zoomPhoto;
window.resetPhotoZoom = resetPhotoZoom;
window.togglePhotoZoomClick = togglePhotoZoomClick;
window.togglePhotoFullscreen = togglePhotoFullscreen;
window.downloadCurrentPhoto = downloadCurrentPhoto;
window.handlePlannerMonthYearChange = handlePlannerMonthYearChange;
window.jumpToMonth = jumpToMonth;
window.setPlannerLayout = setPlannerLayout;

// ============================================================
// SUPABASE INTEGRATION
// ============================================================
const SUPABASE_URL = 'https://pockxcxsffhnjiropxvu.supabase.co';
const SUPABASE_KEY = 'sb_publishable_EICDynQGDp_469Jex9Cp8Q_nQqIjquD';
const sb = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

// Helper: map DB level full text → short code used by frontend
const LEVEL_MAP = {
  'Level 0': 'level-0',
  'Level 1': 'level-1',
  'Level 2': 'level-2',
  'Level 3': 'level-3',
};
function dbLevelToCode(lvl) {
  if (!lvl) return 'level-0';
  for (const [key, code] of Object.entries(LEVEL_MAP)) {
    if (lvl.startsWith(key)) return code;
  }
  return lvl.toLowerCase().replace(/\s+/g, '-');
}

function renderClassSelector() {
  const select = document.getElementById('active-class-select');
  if (!select) return;

  const availableClasses = state.classes.filter(classItem =>
    state.currentUser?.role !== 'parent' ||
    state.students.some(student => student.classId === classItem.id)
  );
  const allClassesOption = state.currentUser?.role === 'parent'
    ? ''
    : `<option value="">${state.lang === 'id' ? 'Semua kelas' : 'All classes'}</option>`;
  select.innerHTML = allClassesOption + availableClasses.map(classItem => `
        <option value="${escapeHTML(classItem.id)}">${escapeHTML(classItem.name)}</option>
      `).join('');
  select.disabled = availableClasses.length < 2;
  select.value = state.activeClassId || '';
  if (!availableClasses.length) {
    select.innerHTML = `<option value="">${state.lang === 'id' ? 'Kelas tidak tersedia' : 'No classes available'}</option>`;
  }
}

async function setActiveClass(classId) {
  if (state.currentUser?.role === 'parent' &&
    !state.students.some(student => student.classId === classId)) {
    showToast(state.lang === 'id' ? 'Kelas ini tidak terhubung ke akun orang tua.' : 'This class is not linked to the parent account.', '⚠️');
    return;
  }
  state.activeClassId = classId || null;
  state.students = state.allStudents.filter(student =>
    !state.activeClassId || student.classId === state.activeClassId
  );

  // Sync reportSelectedSchool and student if activeClassId is selected
  if (state.activeClassId) {
    const studentInClass = (state.allStudents || []).find(s => s.classId === state.activeClassId);
    if (studentInClass) {
      const schKey = getStudentSchoolKey(studentInClass);
      if (schKey && schKey !== 'other') {
        state.reportSelectedSchool = schKey;
        state.reportSelectedStudentId = studentInClass.id;
      }
    }
  }

  renderClassSelector();
  if (state.currentView === "studentReport") renderStudentReport();
  applyDatabaseObservations();
  await Promise.all([loadScheduleFromSupabase(), loadObservationsFromSupabase()]);
  renderView();
}

async function loadClassesFromSupabase() {
  try {
    const { data, error } = await sb.from('classes')
      .select('id, name, school_id, day_of_week, start_time, end_time')
      .order('name');
    if (error) throw error;

    if (state.currentUser?.role === 'parent') {
      const parentClassIds = new Set(state.students.map(student => student.classId));
      state.classes = (data || []).filter(classItem => parentClassIds.has(classItem.id));
    } else {
      state.classes = data || [];
    }
    state.databaseStatus.classes = true;
    return true;
  } catch (err) {
    console.warn('[Supabase] classes load exception:', err);
    state.databaseStatus.classes = false;
    return false;
  }
}
// Map frontend short code → DB level prefix for filtering
const CODE_TO_DB_PREFIX = {
  'level-0': 'Level 0',
  'level-1': 'Level 1',
  'level-2': 'Level 2',
  'level-3': 'Level 3',
};

// Load curriculum from Supabase, merge with any local additions
async function loadCurriculumFromSupabase(unitIds = null) {
  try {
    if (unitIds && !unitIds.length) {
      state.curriculumData = [];
      state.databaseStatus.curriculum = true;
      return true;
    }
    let query = sb.from('curriculum_units').select('*');
    if (unitIds) query = query.in('id', unitIds);
    const { data, error } = await query.order('week', { ascending: true });
    if (error) throw error;

    // Map DB rows to frontend format
    const dbItems = (data || []).map(row => ({
      id: row.id,
      level: dbLevelToCode(row.level),
      semester: row.semester,
      week: row.week,
      bloom: row.bloom_level,
      domain: (row.domain || 'science').toLowerCase(),
      title_id: row.title_id,
      title_en: row.title_en || '',
      tools: row.tools,
      elo: row.elo,
      canva_url: row.canva_url || null,
      canva_url_eng: row.canva_url_eng || null,
      _fromDB: true,
    }));

    state.curriculumData = dbItems;
    state.databaseStatus.curriculum = true;
    console.log(`[Supabase] Loaded ${dbItems.length} curriculum units from DB`);
    return true;
  } catch (err) {
    console.warn('[Supabase] curriculum load exception:', err);
    state.databaseStatus.curriculum = false;
    return false;
  }
}

// Load students from Supabase
async function loadStudentsFromSupabase() {
  try {
    let query = sb.from('students')
      .select('id, full_name, nickname, class_id, classes(id, name, school_id, schools(name))')
      .order('full_name');
    if (state.currentUser?.role === 'parent') {
      const studentIds = (state.currentUser.childStudentIds && state.currentUser.childStudentIds.length)
        ? state.currentUser.childStudentIds
        : state.students.map(s => s.id);
      if (studentIds.length) {
        query = query.in('id', studentIds);
      } else if (state.students.length > 0) {
        state.databaseStatus.students = true;
        return true;
      } else {
        query = query.eq('id', '00000000-0000-0000-0000-000000000000');
      }
    }
    const { data, error } = await query;
    if (error) throw error;

    // Auto-heal / backfill missing nicknames in Supabase students table
    if (isAdminUser() && typeof sb !== 'undefined' && sb && Array.isArray(data)) {
      const missingNicknames = data.filter(s => !s.nickname && s.full_name);
      if (missingNicknames.length > 0) {
        missingNicknames.forEach(async (row) => {
          const autoNick = row.full_name.trim().split(' ')[0];
          row.nickname = autoNick;
          try {
            await sb.from('students').update({ nickname: autoNick }).eq('id', row.id);
            console.log(`[Supabase] auto-healed nickname for ${row.full_name}: ${autoNick}`);
          } catch (e) {
            console.warn('[Supabase] nickname backfill warning:', e);
          }
        });
      }
    }

    const loadedStudents = (data || []).map(row => ({
      id: row.id,
      name: row.full_name,
      nickname: row.nickname || row.full_name.split(' ')[0],
      age: '—',
      classId: row.class_id,
      className: row.classes?.name || '—',
      schoolName: row.classes?.schools?.name || '—',
      lastObsDays: 0,
      needsAttention: false,
      _fromDB: true,
    }));

    if (loadedStudents.length > 0) {
      state.allStudents = loadedStudents;
      if (state.activeClassId && !state.allStudents.some(student => student.classId === state.activeClassId)) {
        state.activeClassId = null;
      }
      state.students = state.allStudents.filter(student =>
        !state.activeClassId || student.classId === state.activeClassId
      );
      if (!state.previewStudentId && state.students.length > 0) {
        state.previewStudentId = state.students[0].id;
      }
    } else if (state.currentUser?.role === 'parent' && state.students.length > 0) {
      // Keep students populated during parent login join
    } else {
      state.allStudents = [];
      state.students = [];
    }

    renderClassSelector();
    state.databaseStatus.students = true;
    console.log(`[Supabase] Loaded ${state.students.length} students from DB`);
    return true;
  } catch (err) {
    console.warn('[Supabase] students load exception:', err);
    if (state.currentUser?.role === 'parent' && state.students.length > 0) {
      state.databaseStatus.students = true;
      return true;
    }
    state.databaseStatus.students = false;
    return false;
  }
}

// Load tutors from Supabase into state
async function loadTutorsFromSupabase() {
  try {
    const { data, error } = await sb.from('tutors')
      .select('id, full_name, email')
      .order('full_name');
    if (error) throw error;
    state.tutors = data || [];
    state.databaseStatus.tutors = true;
    console.log(`[Supabase] Loaded ${state.tutors.length} tutors from DB`);
    return true;
  } catch (err) {
    console.warn('[Supabase] tutors load exception:', err);
    state.databaseStatus.tutors = false;
    return false;
  }
}

// Load schedule_assignments from Supabase
async function loadScheduleFromSupabase() {
  try {
    let query = sb.from('schedule_assignments')
      .select('*, tutors!schedule_assignments_tutor_id_fkey(full_name), curriculum_units!schedule_assignments_activity_id_fkey(id, title_id, title_en, level, domain), classes(name, start_time)');
    if (state.currentUser?.role === 'parent') {
      const classIds = [...new Set(state.students.map(student => student.classId).filter(Boolean))];
      query = classIds.length
        ? query.in('class_id', classIds)
        : query.eq('class_id', '00000000-0000-0000-0000-000000000000');
    }
    // Untuk pendidik/admin, muat seluruh jadwal secara global agar seluruh kelas & tutor dapat terlihat sekaligus di kalender
    const { data, error } = await query.order('scheduled_date');
    if (error) throw error;
    state.scheduleItems = (data || []).map(row => ({
      id: row.id,
      date: normalizeDateKey(row.scheduled_date),
      time: readScheduleMetadata(row.notes).time || row.classes?.start_time || '',
      block: readScheduleMetadata(row.notes).block || 'work_cycle',
      status: row.status,
      notes: row.notes,
      tutorName: row.tutors?.full_name || '—',
      tutorId: row.tutor_id || null,
      assistantTutorName: state.tutors.find(tutor => tutor.id === row.assistant_tutor_id)?.full_name || '',
      assistantTutorId: row.assistant_tutor_id || null,
      actTitle: row.curriculum_units?.title_id || '—',
      actTitleEn: row.curriculum_units?.title_en || '',
      domain: row.curriculum_units?.domain || 'science',
      curriculumUnitId: row.activity_id || row.curriculum_units?.id || null,
      actLevel: row.curriculum_units ? dbLevelToCode(row.curriculum_units.level) : null,
      classId: row.class_id,
      className: row.classes?.name || '—',
      _fromDB: true,
    }));
    state.databaseStatus.schedule = true;
    console.log(`[Supabase] Loaded ${state.scheduleItems.length} schedule items from DB`);
    return true;
  } catch (err) {
    console.warn('[Supabase] schedule load exception:', err);
    state.databaseStatus.schedule = false;
    return false;
  }
}

async function loadObservationsFromSupabase() {
  try {
    const since24Hours = new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString();
    let allQuery = sb.from('observations').select('*', { count: 'exact' });
    let recentQuery = sb.from('observations').select('created_at', { count: 'exact', head: true })
      .gte('created_at', since24Hours);
    if (state.currentUser?.role === 'parent') {
      const studentIds = state.currentUser.childStudentIds || [];
      if (studentIds.length) {
        allQuery = allQuery.in('student_id', studentIds);
        recentQuery = recentQuery.in('student_id', studentIds);
      } else {
        allQuery = allQuery.eq('student_id', '00000000-0000-0000-0000-000000000000');
        recentQuery = recentQuery.eq('student_id', '00000000-0000-0000-0000-000000000000');
      }
    } else {
      // TUTORS & ADMINS: Full access to all student observations
      // No restriction by tutor_id or single class, allowing all tutors to view the learning journal
    }
    const [allResult, recentResult] = await Promise.all([
      allQuery.order('created_at', { ascending: false }),
      recentQuery,
    ]);
    if (allResult.error) throw allResult.error;
    if (recentResult.error) throw recentResult.error;
    state.databaseObservations = allResult.data || [];
    try {
      await signObservationPhotos(state.databaseObservations);
    } catch (photoErr) {
      console.warn('[Supabase] photo signing skipped:', photoErr);
    }
    state.databaseObservationCount = allResult.count ?? state.databaseObservations.length;
    state.databaseRecentObservationCount = recentResult.count ?? 0;
    state.databaseStatus.observations = true;
    applyDatabaseObservations();
    console.log(`[Supabase] Loaded ${state.databaseObservationCount} observations from DB`);
    return true;
  } catch (err) {
    console.warn('[Supabase] observations load exception:', err);
    state.databaseStatus.observations = false;
    return false;
  }
}

async function signObservationPhotos(observations) {
  try {
    const paths = [...new Set(observations.map(observation => observation.photo_path).filter(Boolean))];
    if (!paths.length) return;
    const signedUrlResults = [];
    for (let index = 0; index < paths.length; index += 100) {
      try {
        const { data, error } = await sb.storage
          .from('student-observation-photos')
          .createSignedUrls(paths.slice(index, index + 100), 3600);
        if (!error && Array.isArray(data)) {
          signedUrlResults.push(...data);
        }
      } catch (batchErr) {
        console.warn('[Supabase] sign photo batch warning:', batchErr);
      }
    }
    // Only map valid signed URLs without throwing when individual photos are inaccessible
    const signedUrls = new Map(
      signedUrlResults
        .filter(item => item && !item.error && (item.signedUrl || item.signedURL))
        .map(item => [item.path, item.signedUrl || item.signedURL])
    );
    observations.forEach(observation => {
      if (observation.photo_path) {
        observation.photo_signed_url = signedUrls.get(observation.photo_path) || '';
      }
    });
  } catch (err) {
    console.warn('[Supabase] signObservationPhotos warning:', err);
  }
}

function applyDatabaseObservations() {
  const latestByStudent = new Map();
  state.databaseObservations.forEach(obs => {
    if (!obs.student_id || !obs.created_at) return;
    const current = latestByStudent.get(obs.student_id);
    if (!current || new Date(obs.created_at) > new Date(current)) {
      latestByStudent.set(obs.student_id, obs.created_at);
    }
  });

  const now = Date.now();
  state.allStudents.forEach(student => {
    const latest = latestByStudent.get(student.id);
    const elapsed = latest ? now - new Date(latest).getTime() : Infinity;
    student.lastObsDays = Number.isFinite(elapsed) ? Math.floor(elapsed / 86400000) : null;
    student.needsAttention = !Number.isFinite(elapsed) || elapsed >= 7 * 86400000;
  });

  const studentNames = new Map(state.allStudents.map(student => [student.id, student.name]));
  state.observationsLog = state.databaseObservations.map(obs => ({
    id: obs.id,
    studentId: obs.student_id,
    studentName: studentNames.get(obs.student_id) || (state.lang === 'id' ? 'Siswa' : 'Student'),
    domain: 'science',
    milestone: obs.milestone || (state.lang === 'id' ? 'Observasi perkembangan' : 'Development observation'),
    level: obs.mastery_level || 'developing',
    time: obs.created_at ? new Date(obs.created_at).toLocaleString(state.lang === 'id' ? 'id-ID' : 'en-US') : '—',
    anecdote: obs.anecdote || '',
    photoUrl: obs.photo_signed_url || obs.photo_url || '',
    createdAt: obs.created_at,
  }));
}

// Load all Supabase data (runs after login)
async function loadAllFromSupabase() {
  state.databaseStatus = {
    curriculum: false,
    students: false,
    classes: false,
    tutors: false,
    schedule: false,
    observations: false,
  };
  const isParent = state.currentUser?.role === 'parent';
  if (!isParent || state.students.length === 0) {
    state.students = [];
    state.allStudents = [];
  } else {
    state.databaseStatus.students = true;
  }
  state.classes = [];
  state.activeClassId = null;
  state.tutors = [];
  state.scheduleItems = [];
  state.databaseObservations = [];
  state.databaseObservationCount = null;
  state.databaseRecentObservationCount = null;
  state.observationsLog = [];

  const studentsLoaded = await loadStudentsFromSupabase();
  const classesLoaded = await loadClassesFromSupabase();
  const adminsLoaded = isParent ? null : await loadAdminsFromSupabase();
  const tutorsLoaded = isParent ? null : await loadTutorsFromSupabase();
  renderClassSelector();
  const scheduleLoaded = await loadScheduleFromSupabase();
  const curriculumLoaded = await loadCurriculumFromSupabase(
    isParent
      ? state.scheduleItems.map(item => item.curriculumUnitId).filter(Boolean)
      : null
  );
  const observationsLoaded = await loadObservationsFromSupabase();
  const results = isParent
    ? [studentsLoaded, classesLoaded, scheduleLoaded, curriculumLoaded, observationsLoaded]
    : [studentsLoaded, classesLoaded, tutorsLoaded, scheduleLoaded, curriculumLoaded, observationsLoaded];
  if (state.databaseStatus.students && state.databaseStatus.observations) {
    applyDatabaseObservations();
  }
  renderView();
  const failedTables = results
    .map((loaded, index) => loaded ? null : (isParent
      ? ['students', 'classes', 'schedule_assignments', 'curriculum_units', 'observations'][index]
      : ['students', 'classes', 'tutors', 'schedule_assignments', 'curriculum_units', 'observations'][index]))
    .filter(Boolean);
  if (failedTables.length) {
    showToast(
      `${state.lang === 'id' ? 'Data Supabase gagal dimuat' : 'Supabase data could not be loaded'}: ${failedTables.join(', ')}. ${state.lang === 'id' ? 'Periksa koneksi dan izin RLS.' : 'Check the connection and RLS policies.'}`,
      '⚠️'
    );
  }
}

// INSERT curriculum to Supabase
async function saveCurriculumToSupabase(item) {
  if (!isAdminUser()) {
    showToast(state.lang === 'id'
      ? 'Hanya administrator yang dapat mengubah kurikulum inti.'
      : 'Only administrators can change the core curriculum.', '⚠️');
    return null;
  }
  try {
    const levelText = (() => {
      const map = {
        'level-0': 'Level 0 - Green (Preschool – Precoding, PLEGO Blocks)',
        'level-1': 'Level 1 - Yellow (SD 1–3 Precoding)',
        'level-2': 'Level 2 - Red (SD 4–5 Micro:bit)',
        'level-3': 'Level 3 - Blue (SMP Lanjutan)',
      };
      return map[item.level] || item.level;
    })();

    const { data, error } = await sb.from('curriculum_units').insert([{
      level: levelText,
      semester: item.semester,
      week: item.week,
      bloom_level: item.bloom,
      domain: item.domain.charAt(0).toUpperCase() + item.domain.slice(1),
      title_id: item.title_id,
      title_en: item.title_en || '',
      tools: item.tools,
      elo: item.elo,
      canva_url: item.canva_url || null,
      canva_url_eng: item.canva_url_eng || null,
    }]).select().single();

    if (error) throw error;
    console.log('[Supabase] curriculum INSERT ok:', data.id);
    return data;
  } catch (err) {
    console.warn('[Supabase] INSERT curriculum error:', err);
    showToast(
      `${state.lang === 'id' ? 'Gagal menyimpan kurikulum ke database' : 'Could not save curriculum to the database'}: ${err.message || err}`,
      '⚠️'
    );
    return null;
  }
}

// INSERT observation to Supabase
async function saveObservationToSupabase(obs) {
  if (!['admin', 'teacher'].includes(state.currentUser?.role)) {
    showToast(state.lang === 'id' ? 'Akses mencatat observasi ditolak.' : 'You cannot record observations.', '⚠️');
    return null;
  }
  // Find student UUID (if loaded from DB)
  const student = state.allStudents.find(s => s.name === obs.studentName || s.id === obs.studentId);
  if (!student || !student._fromDB) {
    console.warn('[Supabase] Student not from DB, skipping observation INSERT');
    return null;
  }

  let uploadedPhotoPath = '';
  let photoUploadInProgress = false;
  try {
    const payload = {
      student_id: student.id,
      mastery_level: obs.level || 'developing',
      milestone: obs.milestone || null,
      anecdote: obs.anecdote,
    };
    if (obs.photoFile) {
      let fileToUpload = obs.photoFile;
      const isHeic = fileToUpload.type === 'image/heic' || fileToUpload.type === 'image/heif' || (fileToUpload.name || '').toLowerCase().endsWith('.heic') || (fileToUpload.name || '').toLowerCase().endsWith('.heif');
      if (isHeic) {
        fileToUpload = await ensureJpegCompatiblePhoto(fileToUpload);
      }

      const extensionByType = {
        'image/jpeg': 'jpg',
        'image/png': 'png',
        'image/webp': 'webp',
      };
      let extension = extensionByType[fileToUpload.type];
      if (!extension) {
        const fname = (fileToUpload.name || '').toLowerCase();
        if (fname.endsWith('.png')) extension = 'png';
        else if (fname.endsWith('.webp')) extension = 'webp';
        else extension = 'jpg';
      }
      if (fileToUpload.size > 8 * 1024 * 1024) {
        throw new Error(state.lang === 'id' ? 'Ukuran foto melebihi batas 8 MB.' : 'Photo exceeds 8 MB size limit.');
      }
      uploadedPhotoPath = `${student.id}/${state.currentUser.id}/${crypto.randomUUID()}.${extension}`;
      photoUploadInProgress = true;
      const uploadContentType = extension === 'png' ? 'image/png' : extension === 'webp' ? 'image/webp' : 'image/jpeg';
      const { error: uploadError } = await sb.storage
        .from('student-observation-photos')
        .upload(uploadedPhotoPath, fileToUpload, {
          contentType: uploadContentType,
          upsert: false,
        });
      if (uploadError) throw uploadError;
      photoUploadInProgress = false;
      payload.photo_path = uploadedPhotoPath;
    }
    // Relaxed tutor_id assignment: all tutors can record observations for any child
    const tutorProfile = (state.tutors || []).find(tutor =>
      String(tutor.email || '').toLowerCase() === String(state.currentUser?.email || '').toLowerCase() ||
      tutor.id === state.currentUser?.tutorId ||
      tutor.id === state.currentUser?.id
    );
    const assignedTutor = state.currentUser?.tutorId ||
      tutorProfile?.id ||
      state.currentUser?.id ||
      (state.tutors && state.tutors[0]?.id) ||
      null;
    if (assignedTutor) {
      payload.tutor_id = assignedTutor;
    }
    const { data, error } = await sb.from('observations').insert([payload]).select().single();

    if (error) throw error;
    console.log('[Supabase] observation INSERT ok:', data.id);
    return data;
  } catch (err) {
    console.warn('[Supabase] INSERT observation error:', err);
    let cleanupError = null;
    if (uploadedPhotoPath) {
      const { error } = await sb.storage
        .from('student-observation-photos')
        .remove([uploadedPhotoPath]);
      cleanupError = error;
      if (cleanupError) console.warn('[Supabase] uploaded observation photo cleanup failed:', cleanupError);
    }
    showToast(
      `${photoUploadInProgress
        ? (state.lang === 'id' ? 'Gagal mengunggah foto observasi' : 'Could not upload the observation photo')
        : (state.lang === 'id' ? 'Gagal menyimpan observasi ke database' : 'Could not save observation to the database')}: ${err.message || err}${cleanupError
          ? `; ${state.lang === 'id' ? 'foto yang sudah diunggah belum terhapus' : 'the uploaded photo could not be removed'}: ${cleanupError.message}`
          : ''}`,
      '⚠️'
    );
    return null;
  }
}

// ============================================================
// STARTUP LIFECYCLE: Enforce starting at the Login Screen
document.addEventListener('DOMContentLoaded', () => {
  // Default to Parent login tab on startup so parents can immediately enter their phone number & PIN
  switchLoginTab('parent');
  updateCurriculumFormLanguage();
  document.getElementById('auth-screen').classList.remove('hidden');
  document.getElementById('app-wrapper').classList.add('hidden');
  document.querySelectorAll('[data-demo-role]').forEach(button => {
    button.addEventListener('click', () => quickLoginDemo(button.dataset.demoRole));
  });

  // Planner filter controls (Semua Jadwal vs Jadwal Saya)
  const btnFilterAll = document.getElementById('planner-filter-all');
  if (btnFilterAll) {
    btnFilterAll.addEventListener('click', () => setPlannerFilter('all'));
  }
  const btnFilterMine = document.getElementById('planner-filter-mine');
  if (btnFilterMine) {
    btnFilterMine.addEventListener('click', () => setPlannerFilter('mine'));
  }

  // Observation photo drag and drop initializer
  initObsPhotoDropzone();
});

// Immediate initialization if already loaded
if (document.readyState === 'complete' || document.readyState === 'interactive') {
  initObsPhotoDropzone();
}

window.removeObsPhoto = removeObsPhoto;
window.handleObsPhotoSelect = handleObsPhotoSelect;
window.initObsPhotoDropzone = initObsPhotoDropzone;
window.ensureJpegCompatiblePhoto = ensureJpegCompatiblePhoto;
window.saveObservation = saveObservation;
