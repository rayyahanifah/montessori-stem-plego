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
    };

    /* =====================================================================
       2. BILINGUAL DICTIONARY
       ===================================================================== */
    const i18n = {
      id: {
        'login.subtitle': 'Montessori STEM Platform · Masuk Akun Anda',
        'login.email': 'Email Akun Terdaftar:',
        'login.password': 'Kata Sandi (Password):',
        'login.btn': 'Masuk ke Ruang Kerja',
        'login.quickDemo': 'Akses Demo Cepat 1-Klik (Deteksi Peran Otomatis):',
        'topbar.currentClass': 'Tampilan Kelas:',
        'nav.dashboard': 'Beranda Guru',
        'nav.curriculum': 'Kurikulum Plego v3.2',
        'nav.activities': 'Koleksi Aktivitas',
        'nav.planner': 'Perencana Pembelajaran',
        'nav.observations': 'Observasi & Ceklis',
        'nav.parentPortal': 'Portofolio Anak (Kenzo)',
        'nav.parentActivities': 'Eksplorasi di Rumah',
        'nav.parentChat': 'Pesan dengan Guru',
        'nav.logout': 'Keluar (Logout)',
        'dash.cycle': 'Siklus Pembelajaran Montessori 09:00 - 11:30',
        'dash.greeting': 'Selamat pagi',
        'dash.subtitle': 'Jadwal dan ringkasan observasi dimuat dari database.',
        'dash.quickLog': 'Catat Observasi',
        'dash.openPlanner': 'Buka Planner',
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
        'planner.title': 'Rencana Belajar',
        'planner.subtitle': 'Atur aktivitas, kelas, dan pendidik dalam satu tampilan.',
        'planner.today': 'Hari Ini',
        'planner.hint': 'Pilih hari untuk melihat atau menambahkan aktivitas',
        'planner.view.day': 'Hari',
        'planner.view.week': 'Minggu',
        'planner.view.month': 'Bulan',
        'planner.copyForward': 'Salin Jadwal',
        'planner.print': 'Cetak PDF',
        'planner.todayBadge': 'HARI INI',
        'planner.materialsTitle': 'Material Minggu Ini',
        'planner.autoAggregated': 'Dikumpulkan dari aktivitas terjadwal',
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
        'parent.messageTitle': 'Pesan Singkat dengan Pendidik',
        'modal.close': 'Tutup',
        'modal.addToPlan': '+ Tambahkan ke Planner',
        'modal.cancel': 'Batal',
        'modal.saveObs': 'Simpan Observasi (Catat)',
        'obsModal.subtitle': 'Formulir Pencatatan Indikator Perkembangan STEM',
        'obsModal.indicator': 'Indikator yang Diamati:',
        'obsModal.levelLabel': 'Tingkat Capaian (Montessori Mastery Scale):',
        'obsModal.anecdoteLabel': 'Catatan Anekdot & Kutipan Anak:',
        'obsModal.attachPhoto': 'Lampirkan Foto Hasil Karya',
        'obsModal.markHighlight': 'Tampilkan di Laporan Orang Tua',
        'addCurr.modalTitle': 'Tambah Unit Kurikulum Plego Baru',
        'addCurr.modalSubtitle': 'Integrasi langsung ke Jalur Pembelajaran & Database Lokal',
        'addCurr.submitBtn': 'Simpan Kurikulum',
        'level.none': 'Belum Muncul',
        'level.emerging': 'Mulai Muncul',
        'level.developing': 'Berkembang',
        'level.mastered': 'Menguasai'
      },
      en: {
        'login.subtitle': 'Montessori STEM Platform · Sign In to Your Account',
        'login.email': 'Registered Email Address:',
        'login.password': 'Password:',
        'login.btn': 'Sign In to Workspace',
        'login.quickDemo': '1-Click Quick Demo Access (Auto Role Detection):',
        'topbar.currentClass': 'Class view:',
        'nav.dashboard': 'Teacher Dashboard',
        'nav.curriculum': 'Plego Curriculum v3.2',
        'nav.activities': 'Activity Library',
        'nav.planner': 'Lesson Planner',
        'nav.observations': 'Observation & Checklist',
        'nav.parentPortal': 'Child Portfolio (Kenzo)',
        'nav.parentActivities': 'Home Explorations',
        'nav.parentChat': 'Teacher Messages',
        'nav.logout': 'Sign Out (Logout)',
        'dash.cycle': 'Montessori Work Cycle 09:00 - 11:30',
        'dash.greeting': 'Good morning',
        'dash.subtitle': 'Schedules and observation summaries are loaded from the database.',
        'dash.quickLog': 'Log Observation',
        'dash.openPlanner': 'Open Planner',
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
        'planner.title': 'Learning Plan',
        'planner.subtitle': 'Plan activities, classes, and educators in one place.',
        'planner.today': 'Today',
        'planner.hint': 'Choose a day to view or add activities',
        'planner.view.day': 'Day',
        'planner.view.week': 'Week',
        'planner.view.month': 'Month',
        'planner.copyForward': 'Copy Schedule',
        'planner.print': 'Print PDF',
        'planner.todayBadge': 'TODAY',
        'planner.materialsTitle': 'Materials This Week',
        'planner.autoAggregated': 'Collected from scheduled activities',
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
        'parent.messageTitle': 'A note to the educator',
        'modal.close': 'Close',
        'modal.addToPlan': '+ Add to Weekly Planner',
        'modal.cancel': 'Cancel',
        'modal.saveObs': 'Save Observation Entry',
        'obsModal.subtitle': 'STEM Milestone & Anecdotal Record Form',
        'obsModal.indicator': 'Observed Indicator / Milestone:',
        'obsModal.levelLabel': 'Mastery Level (Montessori Scale):',
        'obsModal.anecdoteLabel': 'Anecdotal Observation & Child Quote:',
        'obsModal.attachPhoto': 'Attach Child Work Photo',
        'obsModal.markHighlight': 'Show in Parent Progress Report',
        'addCurr.modalTitle': 'Add New Plego Curriculum Unit',
        'addCurr.modalSubtitle': 'Direct integration into Learning Pathway & Local DB',
        'addCurr.submitBtn': 'Save Curriculum Unit',
        'level.none': 'Not Observed',
        'level.emerging': 'Emerging',
        'level.developing': 'Developing',
        'level.mastered': 'Mastered'
      }
    };

    function bText(obj, field) {
      if (!obj) return '';
      return obj[`${field}_${state.lang}`] || obj[`${field}_id`] || obj[`${field}_en`] || '';
    }

    function t(key) {
      return i18n[state.lang][key] || key;
    }

    /* =====================================================================
       3. AUTHENTICATION & AUTOMATIC ROLE DETECTION
       ===================================================================== */
    async function handleLoginSubmit(e) {
      e.preventDefault();
      const email = document.getElementById('login-email').value.trim().toLowerCase();
      const password = document.getElementById('login-password').value;

      if (!email || !password) return;
      try {
        const { data: authData, error: authError } = await sb.auth.signInWithPassword({ email, password });
        if (authError && authError.status !== 400) throw authError;
        if (authData?.user) {
          const { data: parentRows, error: parentError } = await sb.from('parents')
            .select('student_id, parent_name')
            .eq('auth_id', authData.user.id);
          if (parentError) {
            const { error: signOutError } = await sb.auth.signOut();
            if (signOutError) throw signOutError;
            throw parentError;
          }
          const childStudentIds = [...new Set((parentRows || []).map(parent => parent.student_id).filter(Boolean))];
          if (childStudentIds.length) {
            executeLogin({
              id: authData.user.id,
              email: authData.user.email,
              name: parentRows[0].parent_name,
              role: 'parent',
              childStudentIds,
              classInfo: state.lang === 'id' ? 'Orang tua / wali' : 'Parent / guardian',
            });
            return;
          }
          const { error: signOutError } = await sb.auth.signOut();
          if (signOutError) throw signOutError;
        }

        const { data: tutor, error: tutorError } = await sb.from('tutors')
          .select('id, full_name, email')
          .eq('email', email)
          .eq('password', password)
          .maybeSingle();
        if (tutorError) throw tutorError;
        if (tutor) {
          executeLogin({
            id: tutor.id,
            email: tutor.email,
            name: tutor.full_name,
            role: 'teacher',
            classInfo: state.lang === 'id' ? 'Tutor Plego' : 'Plego tutor',
          });
          return;
        }
        showToast(state.lang === 'id'
          ? 'Email atau kata sandi tidak cocok, atau akun belum ditautkan.'
          : 'Email or password does not match, or the account is not linked.', '⚠️');
      } catch (error) {
        console.warn('[Supabase] account login failed:', error);
        showToast(
          `${state.lang === 'id' ? 'Login database gagal' : 'Database login failed'}: ${error.message || error}`,
          '⚠️'
        );
      }
    }

    async function loadTutorDemoButtons() {
      const container = document.getElementById('tutor-demo-buttons');
      try {
        const { data, error } = await sb.from('tutors')
          .select('email, full_name')
          .order('full_name')
          .limit(3);
        if (error) throw error;
        if (!data?.length) {
          container.innerHTML = `<p class="col-span-3 text-center text-xs text-forest-light">${state.lang === 'id' ? 'Akun tutor belum tersedia.' : 'No tutor accounts available.'}</p>`;
          return;
        }
        container.innerHTML = data.map(tutor => `
          <button type="button" onclick="quickFillAndLogin('${escapeHTML(tutor.email)}')"
            class="p-2 rounded-2xl bg-sand-50 hover:bg-sage-50 text-forest border border-sand-200 hover:border-sage garden-interactive-btn text-center text-xs group">
            <span class="block text-base mb-0.5">👩‍🏫</span>
            <strong class="block text-[11px] group-hover:text-sage">${escapeHTML(tutor.full_name)}</strong>
            <span class="text-[9px] text-forest-light">${escapeHTML(tutor.email)}</span>
          </button>
        `).join('');
      } catch (error) {
        console.warn('[Supabase] tutor demo accounts load failed:', error);
        container.innerHTML = `<p class="col-span-3 text-center text-xs text-forest-light">${state.lang === 'id' ? 'Akun demo tidak dapat dimuat. Masukkan email tutor.' : 'Could not load demo accounts. Enter a tutor email.'}</p>`;
      }
    }

    async function quickFillAndLogin(email) {
      document.getElementById('login-email').value = email;
      document.getElementById('login-password').value = 'plego123';
      await handleLoginSubmit({ preventDefault() {} });
    }

    function togglePasswordVisibility() {
      const input = document.getElementById('login-password');
      const toggle = document.querySelector('.password-toggle');
      const isVisible = input.type === 'text';

      input.type = isVisible ? 'password' : 'text';
      toggle.setAttribute('aria-pressed', String(!isVisible));
      toggle.setAttribute('aria-label', isVisible ? 'Tampilkan kata sandi' : 'Sembunyikan kata sandi');
      toggle.querySelector('.password-eye-open').classList.toggle('hidden', !isVisible);
      toggle.querySelector('.password-eye-closed').classList.toggle('hidden', isVisible);
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
        showToast(state.lang === 'id' ? `Masuk sebagai tutor: ${user.name}` : `Signed in as tutor: ${user.name}`, '👋');
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
        badgeAppMode.textContent = 'Parent Portal';
        badgeAppMode.className = 'text-xs uppercase tracking-widest px-2.5 py-0.5 rounded-full bg-sunshine-light text-sunshine-dark font-bold';
        nav.innerHTML = `
          <button onclick="navigateTo('parentHub')" id="nav-parentHub" class="nav-item active border-b-2 border-sage text-sage px-4 py-3 flex items-center gap-2 whitespace-nowrap">
            <span data-i18n="nav.parentPortal">Portofolio Anak</span>
          </button>`;
      } else {
        contextBadge.classList.remove('hidden');
        document.getElementById('parent-preview-picker-wrap').classList.remove('hidden');
        document.getElementById('parent-preview-picker-wrap').classList.add('md:flex');
        badgeAppMode.textContent = 'Early Years';
        badgeAppMode.className = 'text-xs uppercase tracking-widest px-2 py-0.5 rounded-full bg-sand-200 text-forest font-bold';

        nav.innerHTML = `
          <button onclick="navigateTo('dashboard')" id="nav-dashboard" class="nav-item active border-b-2 border-sage text-sage px-4 py-3 flex items-center gap-2 whitespace-nowrap"><span data-i18n="nav.dashboard">Beranda Guru</span></button>
          <button onclick="navigateTo('curriculum')" id="nav-curriculum" class="nav-item border-b-2 border-transparent text-forest-light hover:text-forest px-4 py-3 flex items-center gap-2 whitespace-nowrap"><span data-i18n="nav.curriculum">Kurikulum Plego v3.2</span></button>
          <button onclick="navigateTo('planner')" id="nav-planner" class="nav-item border-b-2 border-transparent text-forest-light hover:text-forest px-4 py-3 flex items-center gap-2 whitespace-nowrap"><span data-i18n="nav.planner">Perencana Pembelajaran</span></button>
          <button onclick="navigateTo('observations')" id="nav-observations" class="nav-item border-b-2 border-transparent text-forest-light hover:text-forest px-4 py-3 flex items-center gap-2 whitespace-nowrap"><span data-i18n="nav.observations">Observasi & Ceklis</span></button>`;
      }
    }
    async function logout() {
      if (state.currentUser?.role === 'parent') {
        const { error } = await sb.auth.signOut();
        if (error) {
          console.warn('[Supabase] parent logout failed:', error);
          showToast(`${state.lang === 'id' ? 'Gagal keluar' : 'Could not sign out'}: ${error.message || error}`, '⚠️');
          return;
        }
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
            <span>Pratinjau Ortu (Kenzo)</span>
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

      renderView();
      showToast(lang === 'id' ? 'Bahasa beralih ke Bahasa Indonesia' : 'Language switched to English', '🌐');
    }

    /* =====================================================================
       5. VIEW CONTROLLER WITH STRICT PRIVACY CHECKS
       ===================================================================== */
    function navigateTo(viewName) {
      // PRIVACY BOUNDARY ENFORCEMENT:
      // If user is parent, lock them to parentHub. They cannot view teacher views!
      if (state.currentUser?.role === 'parent' && viewName !== 'parentHub') {
        viewName = 'parentHub';
        showToast('Akses dibatasi untuk akun orang tua', '🔒');
      }

      state.currentView = viewName;
      document.getElementById('profile-dropdown').classList.add('hidden');

      ['dashboard', 'curriculum', 'planner', 'observations', 'parentHub'].forEach(v => {
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
      const dashboardStudents = state.currentUser?.role === 'parent'
        ? state.students
        : state.allStudents;
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
      const deliveredLessons = weeklyLessons.filter(item =>
        ['delivered', 'completed', 'done'].includes(String(item.status || '').toLowerCase())
      );
      document.getElementById('dashboard-student-count').textContent =
        studentsReady ? String(dashboardStudents.length) : '—';
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
                <h4 class="font-bold text-sm text-forest">${escapeHTML(item.actTitle || (state.lang === 'id' ? 'Aktivitas STEM' : 'STEM activity'))}</h4>
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
    }

    function toLocalDateKey(date) {
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, '0');
      const day = String(date.getDate()).padStart(2, '0');
      return `${year}-${month}-${day}`;
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
          title: 'Level 0 - Green (Preschool – Precoding, PLEGO Blocks)',
          tlo_id: 'Di akhir level, peserta didik mampu memahami konsep sebab-akibat dari hubungan input–output menggunakan sensor dan aktuator PLEGO Blocks, serta membangun prototipe sederhana yang menumbuhkan problem solving dan kolaborasi dasar.',
          tlo_en: 'Learners understand cause-and-effect relationships of input-output using PLEGO Blocks sensors and actuators, constructing prototypes that foster early problem-solving.'
        },
        'level-1': {
          title: 'Level 1 - Yellow (SD kelas 1–3 – Precoding + Block Coding)',
          tlo_id: 'Mampu merancang alur logika sederhana dengan block coding untuk mengendalikan sensor dan aktuator PLEGO Blocks, serta menghasilkan robot mini yang merespons perintah dasar.',
          tlo_en: 'Able to design simple logic flows with block coding to command PLEGO Blocks sensors and actuators, creating mini robot projects that respond to basic instructions.'
        },
        'level-2': {
          title: 'Level 2 - Red (SD kelas 4–5 – Block Coding + AI Integration, Micro:bit)',
          tlo_id: 'Mampu memprogram robot berbasis Micro:bit dengan sensor kompleks dan mengintegrasikan model AI sederhana (Teachable Machine) ke dalam sistem.',
          tlo_en: 'Able to program Micro:bit robots with complex sensors and integrate simple AI classification models (Teachable Machine) into the hardware system.'
        },
        'level-3': {
          title: 'Level 3 - Blue (SMP – Text-based Coding + AI Tooling, ESP32)',
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
          bText(item, 'title'), item.tools, item.elo, item.domain, item.bloom, item.semester, item.week,
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
        const title = bText(item, 'title') || (state.lang === 'id' ? 'Unit kurikulum' : 'Curriculum unit');
        const tools = item.tools || (state.lang === 'id' ? 'Belum ada perangkat' : 'No tools listed');
        const elo = item.elo || (state.lang === 'id' ? 'Capaian pembelajaran belum ditambahkan.' : 'No learning outcome added yet.');
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
                <span class="curriculum-meta-pill">${escapeHTML(item.semester || '—')}</span>
              </div>
            </div>

            <div class="flex flex-wrap items-center gap-2 mt-4">
              <span class="curriculum-domain-label ${dColor.textColor}">${escapeHTML(dColor.label)}</span>
              <span class="text-[10px] font-bold px-2 py-0.5 rounded-full ${bloomBadge.bg} ${bloomBadge.text}">${escapeHTML(item.bloom || '—')}</span>
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
                <button onclick="openCurriculumGuide('${escapeHTML(item.id)}')" class="curriculum-guide-btn garden-interactive-btn">
                  <span aria-hidden="true">📖</span> <span>${state.lang === 'id' ? 'Panduan' : 'Guide'}</span>
                </button>
                <button onclick="scheduleCurriculumToPlanner('${escapeHTML(item.id)}')" class="curriculum-schedule-btn garden-interactive-btn">
                  <span>＋</span> <span>${state.lang === 'id' ? 'Jadwalkan' : 'Schedule'}</span>
                </button>
              </div>
            </div>
          </article>
        `;
      }).join('');
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
      // Restricted to Teacher/Owner
      if (state.currentUser?.role === 'parent') {
        showToast('Orang tua tidak memiliki izin menambah kurikulum', '⚠️');
        return;
      }
      openModal('modal-add-curriculum');
    }

    async function handleCreateCurriculumSubmit(e) {
      e.preventDefault();
      const level = document.getElementById('new-curr-level').value;
      const semester = document.getElementById('new-curr-semester').value;
      const week = parseInt(document.getElementById('new-curr-week').value) || 1;
      const bloom = document.getElementById('new-curr-bloom').value;
      const domain = document.getElementById('new-curr-domain').value;
      const title_id = document.getElementById('new-curr-title-id').value;
      const title_en = document.getElementById('new-curr-title-en').value;
      const tools = document.getElementById('new-curr-tools').value;
      const elo = document.getElementById('new-curr-elo').value;
      const canva_url = document.getElementById('new-curr-canva')?.value.trim() || 'https://www.canva.com/templates/?query=montessori+stem';

      const newItem = {
        id: 'c-custom-' + Date.now(),
        level, semester, week, bloom, domain, title_id, title_en, tools, elo, canva_url
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
      document.getElementById('modal-schedule-act').value = item.id;
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

      const ageText = item.level === 'level-0' ? 'Preschool / PAUD (3–6 th)' :
        item.level === 'level-1' ? 'SD Kelas 1–3 (7–9 th)' :
          item.level === 'level-2' ? 'SD Kelas 4–5 AI (10–11 th)' : 'SMP (12–15 th)';
      document.getElementById('act-detail-age').textContent = `${ageText} · Sem. ${item.semester || 'Gasal'} · M${item.week || 1}`;
      document.getElementById('act-detail-title').textContent = bText(item, 'title');

      const content = document.getElementById('act-detail-content');
      const canvaUrl = item.canva_url || `https://www.canva.com/design/DAF8_Plego_${item.id || 'stem'}/view?embed`;

      // Determine materials list
      let materials = [];
      if (item.materials_id && state.lang === 'id') materials = item.materials_id;
      else if (item.materials_en && state.lang === 'en') materials = item.materials_en;
      else if (item.tools) {
        materials = item.tools.split(',').map(s => s.trim());
        materials.push('Baki Kayu Kerja Montessori');
        materials.push('Alas Kerja Katun');
      } else {
        materials = ['Perangkat PLEGO Blocks', 'Baki Kayu Montessori'];
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
              ? `Ajak anak dengan tenang ke rak eksplorasi STEM: "Mari kita amati bagaimana ${item.tools || 'komponen ini'} dapat bekerja bersama. Maukah kamu merangkainya di atas baki?"`
              : `Calmly invite child to the STEM shelf: "Shall we explore how ${item.tools || 'these modules'} work together on our work tray?"`
          },
          {
            phase: state.lang === 'id' ? '2. Demonstrasi (Demonstration)' : '2. Demonstration',
            text: state.lang === 'id'
              ? `Tunjukkan cara menghubungkan modul ${item.tools || 'komponen'} secara perlahan dengan gerakan tangan terisolasi (Three-Period Lesson). Beri jeda agar anak memperhatikan alur input memicu output.`
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
        <div class="p-5 rounded-3xl bg-gradient-to-r from-sky-light/80 via-cream to-violet-light/80 border-2 border-violet/20 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-soft">
          <div class="flex items-center gap-3.5">
            <div class="w-12 h-12 rounded-2xl bg-gradient-to-tr from-[#00C4CC] to-[#7D2AE8] text-white flex items-center justify-center font-bold text-xl shadow-md flex-shrink-0">
              🎨
            </div>
            <div>
              <div class="flex items-center gap-2">
                <h4 class="font-heading font-bold text-forest text-sm sm:text-base">Materi Ajar & Slide Visual Canva</h4>
                <span class="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-violet/10 text-violet border border-violet/20">Template Siap Pakai</span>
              </div>
              <p class="text-xs text-forest-light mt-0.5 leading-relaxed">
                Slide presentasi interaktif, lembar observasi anak, dan kartu visual langkah eksplorasi tersedia di Canva.
              </p>
            </div>
          </div>
          <a href="${canvaUrl}" target="_blank" rel="noopener noreferrer"
             class="px-5 py-2.5 rounded-full bg-gradient-to-r from-[#00C4CC] to-[#7D2AE8] hover:opacity-90 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-soft transition garden-interactive-btn flex-shrink-0">
            <span>Buka Slide di Canva</span>
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>
          </a>
        </div>

        <!-- ELO & Summary -->
        <div class="bg-sand-50 p-4 rounded-2xl border border-sand-200">
          <span class="text-[10px] font-bold text-forest-light uppercase block mb-1">🎯 ELO / Capaian Pembelajaran:</span>
          <p class="text-xs text-forest font-semibold leading-relaxed">${item.elo}</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div class="p-4 rounded-2xl bg-sand-50 border border-sand-200">
            <h4 class="font-heading font-bold text-forest text-xs uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <span>🧺</span> ${state.lang === 'id' ? 'Material & Komponen' : 'Materials Needed'}
            </h4>
            <ul class="space-y-1.5 text-xs text-forest">
              ${materials.map(m => `<li class="flex items-center gap-1.5"><span class="text-sage font-bold">✔</span> ${m}</li>`).join('')}
            </ul>
          </div>

          <div class="p-4 rounded-2xl bg-sunshine-light border border-sunshine/40">
            <h4 class="font-heading font-bold text-sunshine-dark text-xs uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <span>🇮🇩</span> ${state.lang === 'id' ? 'Alternatif Lokal Nusantara' : 'Local Indonesian Alternative'}
            </h4>
            <p class="text-xs text-forest leading-relaxed">
              ${localTips}
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
                <span class="font-bold text-xs text-sage block mb-1">${s.phase}</span>
                <p class="text-xs text-forest leading-relaxed">${s.text}</p>
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
            ${montessoriNotes}
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
      document.getElementById('modal-schedule-act').value = state.selectedActivity.id;
    }

    /* FLOW 4: OVERHAULED INTERACTIVE LESSON PLANNER (DAY / WEEK / MONTH) */
    function setPlannerLayout(layout) {
      state.plannerLayout = layout;
      ['day', 'week', 'month'].forEach(l => {
        const btn = document.getElementById(`planner-btn-${l}`);
        btn.classList.toggle('is-active', l === layout);
        btn.setAttribute('aria-pressed', String(l === layout));
      });
      renderPlanner();
    }

    function renderPlanner() {
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
      const monthLabel = activeDate.toLocaleDateString(locale, { month: 'long', year: 'numeric' });

      periodLabel.textContent = state.plannerLayout === 'month'
        ? monthLabel
        : state.plannerLayout === 'day'
          ? activeDate.toLocaleDateString(locale, { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })
          : `${dateLabel(weekdays[0])}${weekdays[0].getFullYear() !== weekdays[4].getFullYear() ? ` ${weekdays[0].getFullYear()}` : ''} – ${dateLabel(weekdays[4])} ${weekdays[4].getFullYear()}`;

      const getItemTitle = item => {
        const activity = state.curriculumData.find(entry => entry.id === item.curriculumUnitId);
        const title = activity ? bText(activity, 'title') : item.actTitle;
        return title && !['—', '-'].includes(String(title).trim())
          ? title
          : state.lang === 'id' ? 'Aktivitas STEM' : 'STEM activity';
      };

      const renderItem = item => {
        const activity = state.curriculumData.find(entry => entry.id === item.curriculumUnitId);
        const color = getDomainColor(item.domain || activity?.domain || 'science');
        const title = getItemTitle(item);
        const isDone = ['delivered', 'completed', 'done'].includes(String(item.status || '').toLowerCase());
        const tutors = [item.tutorName, item.assistantTutorName].filter(Boolean);
        return `
          <article class="planner-lesson-card garden-card-hover">
            <div class="planner-lesson-topline">
              <span class="planner-lesson-time">${escapeHTML(item.time || '—')}</span>
              <span class="planner-domain-dot ${color.bg}" aria-hidden="true"></span>
            </div>
            <h4 class="planner-lesson-title">${escapeHTML(title)}</h4>
            <div class="planner-lesson-meta">
              <span class="planner-meta-chip">${escapeHTML(item.className || (state.lang === 'id' ? 'Kelas belum dipilih' : 'Class not set'))}</span>
              ${item.block ? `<span class="planner-meta-chip">${escapeHTML(item.block)}</span>` : ''}
            </div>
            ${tutors.length ? `<p class="planner-lesson-tutors"><span aria-hidden="true">◉</span> ${escapeHTML(tutors.join(' · '))}</p>` : ''}
            <div class="planner-lesson-footer">
              <span class="planner-status ${isDone ? 'is-complete' : ''}">${isDone ? (state.lang === 'id' ? 'Selesai' : 'Done') : (state.lang === 'id' ? 'Terjadwal' : 'Scheduled')}</span>
              <div class="planner-lesson-actions">
                ${activity ? `<button onclick="openCurriculumGuide('${escapeHTML(activity.id)}')" class="planner-action-link">${state.lang === 'id' ? 'Panduan' : 'Guide'}</button>` : ''}
                ${state.currentUser?.role !== 'parent' ? `<button onclick="deletePlanItem('${escapeHTML(item.id)}')" class="planner-action-link is-delete">${state.lang === 'id' ? 'Hapus' : 'Delete'}</button>` : ''}
              </div>
            </div>
          </article>`;
      };

      if (!state.databaseStatus.schedule) {
        container.innerHTML = `<p class="planner-empty-state is-error">${state.lang === 'id' ? 'Jadwal belum terhubung ke database.' : 'The schedule could not be loaded from the database.'}</p>`;
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
                const items = state.scheduleItems.filter(item => item.date === dateKey);
                const inMonth = date.getMonth() === firstMonth;
                const isToday = dateKey === toLocalDateKey(new Date());
                const shortItems = items.slice(0, 2).map(getItemTitle);
                return `<button type="button" onclick="state.plannerDate = new Date('${dateKey}T00:00:00'); setPlannerLayout('day')" aria-label="${escapeHTML(date.toLocaleDateString(locale, { weekday: 'long', day: 'numeric', month: 'long' }))}${items.length ? `, ${items.length} ${state.lang === 'id' ? 'aktivitas' : 'activities'}` : ''}" class="planner-month-day ${isToday ? 'is-today' : ''} ${inMonth ? '' : 'is-outside-month'}">
                  <span class="planner-month-date">${date.getDate()}</span>
                  ${shortItems.length ? `<span class="planner-month-events">${shortItems.map(title => `<span class="planner-month-event">${escapeHTML(title)}</span>`).join('')}${items.length > 2 ? `<span class="planner-month-more">+${items.length - 2} ${state.lang === 'id' ? 'lainnya' : 'more'}</span>` : ''}</span>` : ''}
                </button>`;
              }).join('')}
            </div>
          </div>`;
      } else {
        container.innerHTML = `
          <div class="planner-days-grid ${state.plannerLayout === 'week' ? 'is-week' : 'is-day'}">
            ${selectedDates.map(date => {
              const dateKey = toLocalDateKey(date);
              const items = state.scheduleItems.filter(item => item.date === dateKey);
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
                  ${items.length ? items.map(renderItem).join('') : `<p class="planner-empty-day">${state.lang === 'id' ? 'Belum ada jadwal' : 'No lessons scheduled'}</p>`}
                </div>
                ${state.currentUser?.role !== 'parent' ? `<button onclick="openScheduleSlotModal('${dateKey}')" class="planner-add-slot">${state.lang === 'id' ? '+ Tambah aktivitas' : '+ Add activity'}</button>` : ''}
              </section>`;
            }).join('')}
          </div>`;
      }

      const materialsContainer = document.getElementById('planner-materials-list');
      const materials = [...new Set(state.scheduleItems
        .filter(item => item.date >= toLocalDateKey(weekdays[0]) && item.date <= toLocalDateKey(weekdays[4]))
        .map(item => state.curriculumData.find(activity => activity.id === item.curriculumUnitId)?.tools)
        .filter(Boolean)
        .flatMap(value => value.split(',').map(material => material.trim())))];
      materialsContainer.innerHTML = materials.length ? materials.map(material => `
        <label class="planner-material-item">
          <input type="checkbox">
          <span>${escapeHTML(material)}</span>
        </label>
      `).join('') : `<p class="planner-material-empty">${state.lang === 'id' ? 'Material akan muncul dari aktivitas terjadwal minggu ini.' : 'Materials will appear from this week’s scheduled activities.'}</p>`;
    }

    function openScheduleSlotModal(date = toLocalDateKey(state.plannerDate)) {
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
      selectAct.innerHTML = state.curriculumData.filter(item => item._fromDB).map(a => `
        <option value="${escapeHTML(a.id)}">${escapeHTML(bText(a, 'title'))}</option>
      `).join('');
      const tutorSelect = document.getElementById('modal-schedule-tutor');
      tutorSelect.innerHTML = state.tutors.map(tutor => `
        <option value="${escapeHTML(tutor.id)}">${escapeHTML(tutor.full_name)}</option>
      `).join('');
      const assistantSelect = document.getElementById('modal-schedule-assistant');
      assistantSelect.innerHTML = `<option value="">${state.lang === 'id' ? 'Tidak ada tutor pendamping' : 'No co-tutor'}</option>` +
        state.tutors.map(tutor => `
          <option value="${escapeHTML(tutor.id)}">${escapeHTML(tutor.full_name)}</option>
        `).join('');
      const classSelect = document.getElementById('modal-schedule-class');
      classSelect.innerHTML = state.classes.map(classItem => `
        <option value="${escapeHTML(classItem.id)}">${escapeHTML(classItem.name)}</option>
      `).join('');
      classSelect.value = state.activeClassId || state.classes[0]?.id || '';
      const currentTutor = state.tutors.find(tutor =>
        tutor.email?.toLowerCase() === state.currentUser?.email?.toLowerCase()
      );
      if (currentTutor) tutorSelect.value = currentTutor.id;
      document.getElementById('modal-schedule-day').value = date;
      const selectedClass = state.classes.find(classItem => classItem.id === classSelect.value);
      if (selectedClass?.start_time) {
        document.getElementById('modal-schedule-time').value = selectedClass.start_time.slice(0, 5);
      }
      openModal('modal-schedule-lesson');
    }

    async function handleSaveScheduledLesson(e) {
      e.preventDefault();
      const date = document.getElementById('modal-schedule-day').value;
      const actId = document.getElementById('modal-schedule-act').value;
      const time = document.getElementById('modal-schedule-time').value;
      const block = document.getElementById('modal-schedule-block').value;
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
      if (state.plannerLayout === 'month') {
        const dayOfMonth = state.plannerDate.getDate();
        state.plannerDate.setDate(1);
        state.plannerDate.setMonth(state.plannerDate.getMonth() + delta);
        const lastDayOfMonth = new Date(
          state.plannerDate.getFullYear(),
          state.plannerDate.getMonth() + 1,
          0
        ).getDate();
        state.plannerDate.setDate(Math.min(dayOfMonth, lastDayOfMonth));
      } else {
        const amount = state.plannerLayout === 'day' ? 1 : 7;
        state.plannerDate.setDate(state.plannerDate.getDate() + delta * amount);
      }
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

      const roster = state.currentUser?.role === 'parent' ? state.students : state.allStudents;
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
        state.currentUser?.role === 'parent'
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

    function openAddStudentModal() {
      if (state.currentUser?.role === 'parent') {
        showToast(state.lang === 'id' ? 'Orang tua tidak memiliki izin menambahkan anak.' : 'Parents cannot add children.', '⚠️');
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
          note: '✨ Anak baru akan langsung muncul di daftar observasi setelah berhasil disimpan.',
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
          note: '✨ The new child will appear in the observation list after saving.',
          cancel: 'Cancel',
          submit: 'Save Child',
          chooseClass: 'Choose a class',
        };
      document.getElementById('add-student-eyebrow').textContent = labels.eyebrow;
      document.getElementById('add-student-title').textContent = labels.title;
      document.getElementById('add-student-subtitle').textContent = labels.subtitle;
      document.getElementById('new-student-name-label').textContent = labels.name;
      document.getElementById('new-student-class-label').textContent = labels.class;
      document.getElementById('add-student-note').textContent = labels.note;
      document.getElementById('add-student-cancel').textContent = labels.cancel;
      document.getElementById('add-student-submit').textContent = labels.submit;

      const classSelect = document.getElementById('new-student-class');
      classSelect.innerHTML = `<option value="">${labels.chooseClass}</option>` + state.classes.map(classItem =>
        `<option value="${escapeHTML(classItem.id)}">${escapeHTML(classItem.name)}</option>`
      ).join('');
      document.getElementById('add-student-form').reset();
      if (state.activeClassId && state.classes.some(classItem => classItem.id === state.activeClassId)) {
        classSelect.value = state.activeClassId;
      }
      openModal('modal-add-student');
      document.getElementById('new-student-name').focus();
    }

    async function saveNewStudent(event) {
      event.preventDefault();
      const nameInput = document.getElementById('new-student-name');
      const classSelect = document.getElementById('new-student-class');
      const fullName = nameInput.value.trim();
      const classId = classSelect.value;
      if (!fullName || !classId) {
        showToast(state.lang === 'id' ? 'Isi nama anak dan pilih kelas terlebih dahulu.' : 'Enter the child’s name and choose a class.', '⚠️');
        return;
      }

      const submitButton = document.getElementById('add-student-submit');
      submitButton.disabled = true;
      submitButton.textContent = state.lang === 'id' ? 'Menyimpan...' : 'Saving...';
      try {
        const { error } = await sb.from('students').insert([{
          full_name: fullName,
          class_id: classId,
        }]);
        if (error) throw error;

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
        showToast(state.lang === 'id' ? `${fullName} berhasil ditambahkan!` : `${fullName} was added!`, '🌱');
      } catch (error) {
        console.warn('[Supabase] student insert failed:', error);
        const reason = error?.message || String(error);
        showToast(state.lang === 'id'
          ? `Anak gagal ditambahkan: ${reason}`
          : `Could not add child: ${reason}`, '⚠️');
      } finally {
        submitButton.disabled = false;
        submitButton.textContent = state.lang === 'id' ? 'Simpan Anak' : 'Save Child';
      }
    }

    function openObservationModal(studentId = state.students[0]?.id) {
      if (state.currentUser?.role === 'parent') {
        showToast('Orang tua tidak memiliki izin mencatat observasi', '⚠️');
        return;
      }

      const roster = state.currentUser?.role === 'parent' ? state.students : state.allStudents;
      const student = roster.find(s => s.id === studentId) || roster[0];
      if (!student) {
        showToast(state.lang === 'id' ? 'Data siswa belum tersedia.' : 'No student data is available.', '⚠️');
        return;
      }
      state.selectedStudentForObs = student;

      document.getElementById('obs-modal-student-name').textContent = `Observasi: ${student.name}`;
      document.getElementById('obs-modal-avatar-initials').textContent = getInitials(student.name);
      document.getElementById('obs-anecdote-input').value = '';
      document.getElementById('obs-photo-url').value = '';
      const milestoneSelect = document.getElementById('obs-milestone-select');
      const milestones = state.curriculumData.filter(item => item._fromDB);
      if (!milestones.length) {
        showToast(state.lang === 'id'
          ? 'Indikator belum tersedia dari kurikulum database.'
          : 'No observation indicators are available from the database.', '⚠️');
        return;
      }
      milestoneSelect.innerHTML = milestones.map(item => `
        <option value="${escapeHTML(bText(item, 'title'))}">${escapeHTML(bText(item, 'title'))}</option>
      `).join('');

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

    async function saveObservation() {
      const student = state.selectedStudentForObs;
      if (!student) {
        showToast(state.lang === 'id' ? 'Pilih siswa sebelum mencatat observasi.' : 'Select a student before recording an observation.', '⚠️');
        return;
      }

      const anecdote = document.getElementById('obs-anecdote-input').value.trim() ||
        (state.lang === 'id' ? 'Anak menyelesaikan eksplorasi mandiri dengan fokus tenang.' : 'Child completed exploration independently with focused poise.');
      const milestone = document.getElementById('obs-milestone-select').value;
      const photoUrl = document.getElementById('obs-photo-url').value.trim();

      const observation = {
        studentId: student.id,
        studentName: student.name,
        domain: 'science',
        milestone,
        level: state.obsLevel,
        time: state.lang === 'id' ? 'Baru saja' : 'Just now',
        anecdote,
        photoUrl,
      };

      if (student._fromDB) {
        const saved = await saveObservationToSupabase(observation);
        if (!saved) return;
        state.databaseObservations.unshift(saved);
        if (state.databaseObservationCount !== null) state.databaseObservationCount += 1;
        if (state.databaseRecentObservationCount !== null &&
          saved.created_at && Date.now() - new Date(saved.created_at).getTime() < 24 * 60 * 60 * 1000) {
          state.databaseRecentObservationCount += 1;
        }
        applyDatabaseObservations();
      } else {
        showToast(state.lang === 'id'
          ? 'Observasi tidak disimpan: siswa belum terhubung ke database.'
          : 'Observation was not saved: the student is not connected to the database.', '⚠️');
        return;
      }

      closeModal('modal-observation');
      renderView();
      showToast(
        state.lang === 'id' ? 'Observasi berhasil disimpan ke database.' : 'Observation saved to the database.',
        '✅'
      );
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
      const students = parentUser ? state.students : state.allStudents;
      const student = students.find(item => item.id === state.previewStudentId) || students[0];
      if (student) state.previewStudentId = student.id;
      const picker = document.getElementById('parent-preview-student');
      picker.innerHTML = students.map(item =>
        `<option value="${escapeHTML(item.id)}">${escapeHTML(item.name)}</option>`
      ).join('');
      picker.value = student?.id || '';
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

      const photos = observations.filter(observation => observation.photo_url).slice(0, 3);
      document.getElementById('parent-photo-feed').innerHTML = photos.length
        ? photos.map(observation => `<button type="button" data-parent-photo="${escapeHTML(observation.photo_url)}" class="rounded-2xl overflow-hidden aspect-video bg-sand-200">
            <img src="${escapeHTML(observation.photo_url)}" alt="${escapeHTML(observation.milestone || 'Dokumentasi observasi')}" class="w-full h-full object-cover">
          </button>`).join('')
        : `<p class="parent-photo-empty">${state.lang === 'id'
          ? 'Foto akan tampil setelah URL foto disimpan pada catatan observasi.'
          : 'Photos appear when a photo URL is saved with an observation.'}</p>`;
      document.querySelectorAll('[data-parent-photo]').forEach(button => {
        button.addEventListener('click', () => openPhotoModal(button.dataset.parentPhoto));
      });

      const activity = state.curriculumData.find(item => state.scheduleItems.some(schedule =>
        schedule.curriculumUnitId === item.id
      )) || state.curriculumData[0];
      document.getElementById('parent-home-activity-title').textContent = activity
        ? bText(activity, 'title')
        : (state.lang === 'id' ? 'Belum ada aktivitas dari kurikulum database' : 'No database curriculum activity available');
      document.getElementById('parent-home-activity-desc').textContent = activity?.elo || '';
      document.getElementById('parent-home-activity-materials').textContent = activity?.tools || '';

      const chat = document.getElementById('chat-messages-container');
      chat.textContent = state.lang === 'id'
        ? 'Percakapan belum terhubung: database belum menyediakan tabel pesan orang tua.'
        : 'Messaging is not connected: the database has no parent messages table.';
      document.getElementById('parent-reply-input').disabled = true;
      document.querySelector('#view-parentHub button[onclick="sendParentReply()"]').disabled = true;

      const progressTitle = document.querySelector('#view-parentHub [data-i18n="parent.domainProgress"]');
      progressTitle.textContent = state.lang === 'id' ? 'Ringkasan Tingkat Observasi' : 'Observation Mastery Summary';
      const masteryScale = document.querySelector('#view-parentHub [data-i18n="parent.masteryScale"]');
      masteryScale.textContent = state.lang === 'id'
        ? 'Berdasarkan catatan yang tersimpan'
        : 'Based on saved observation records';
    }

    function sendParentReply() {
      const input = document.getElementById('parent-reply-input');
      const text = input.value.trim();
      if (!text) return;
      showToast(state.lang === 'id'
        ? 'Pesan belum dikirim: tabel percakapan orang tua belum tersedia di database.'
        : 'Message not sent: the parent conversation table is not available in the database.', '⚠️');
    }

    function openPhotoModal(imgUrl) {
      document.getElementById('modal-photo-img').src = imgUrl;
      openModal('modal-photo');
    }

    /* =====================================================================
       7. UTILITY & HELPERS
       ===================================================================== */
    function getDomainColor(domain) {
      switch (domain) {
        case 'science': return { bg: 'bg-sky', bgLight: 'bg-sky-light', textColor: 'text-sky', label: '🔬 Science' };
        case 'technology': return { bg: 'bg-violet', bgLight: 'bg-violet-light', textColor: 'text-violet', label: '💻 Technology' };
        case 'engineering': return { bg: 'bg-terracotta', bgLight: 'bg-terracotta-light', textColor: 'text-terracotta', label: '⚙️ Engineering' };
        case 'math': return { bg: 'bg-sunshine', bgLight: 'bg-sunshine-light', textColor: 'text-sunshine-dark', label: '📐 Math' };
        default: return { bg: 'bg-leaf', bgLight: 'bg-leaf/10', textColor: 'text-leaf', label: '🌿 Practical Life' };
      }
    }

    function getBloomBadge(bloom) {
      if (bloom.includes('Remembering')) return { bg: 'bg-sky-light', text: 'text-sky-dark' };
      if (bloom.includes('Understanding')) return { bg: 'bg-sage-100', text: 'text-sage-700' };
      if (bloom.includes('Applying')) return { bg: 'bg-sunshine-light', text: 'text-sunshine-dark' };
      if (bloom.includes('Analyzing')) return { bg: 'bg-violet-light', text: 'text-violet' };
      return { bg: 'bg-terracotta-light', text: 'text-terracotta' };
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
        ['modal-activity', 'modal-observation', 'modal-photo', 'modal-add-curriculum', 'modal-schedule-lesson', 'modal-add-student'].forEach(closeModal);
        document.getElementById('profile-dropdown')?.classList.add('hidden');
      }
    });

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
      renderClassSelector();
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
          canva_url: row.canva_url || `https://www.canva.com/templates/?query=montessori+stem`,
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
          .select('*, classes(id, name, school_id, schools(name))')
          .order('full_name');
        if (state.currentUser?.role === 'parent') {
          const studentIds = state.currentUser.childStudentIds || [];
          query = studentIds.length
            ? query.in('id', studentIds)
            : query.eq('id', '00000000-0000-0000-0000-000000000000');
        }
        const { data, error } = await query;
        if (error) throw error;

        state.allStudents = (data || []).map(row => ({
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
        if (state.activeClassId && !state.allStudents.some(student => student.classId === state.activeClassId)) {
          state.activeClassId = null;
        }
        state.students = state.allStudents.filter(student =>
          !state.activeClassId || student.classId === state.activeClassId
        );
        renderClassSelector();
        state.databaseStatus.students = true;
        console.log(`[Supabase] Loaded ${state.students.length} students from DB`);
        return true;
      } catch (err) {
        console.warn('[Supabase] students load exception:', err);
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
            .select('*, tutors!schedule_assignments_tutor_id_fkey(full_name), curriculum_units!schedule_assignments_activity_id_fkey(id, title_id, level, domain), classes(name, start_time)');
        if (state.currentUser?.role === 'parent') {
          const classIds = [...new Set(state.students.map(student => student.classId).filter(Boolean))];
          query = classIds.length
            ? query.in('class_id', classIds)
            : query.eq('class_id', '00000000-0000-0000-0000-000000000000');
        } else if (state.activeClassId) query = query.eq('class_id', state.activeClassId);
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
          const studentIds = state.allStudents.map(student => student.id);
          if (studentIds.length) {
            allQuery = allQuery.in('student_id', studentIds);
            recentQuery = recentQuery.in('student_id', studentIds);
          } else {
            allQuery = allQuery.eq('student_id', '00000000-0000-0000-0000-000000000000');
            recentQuery = recentQuery.eq('student_id', '00000000-0000-0000-0000-000000000000');
          }
        }
        const [allResult, recentResult] = await Promise.all([
          allQuery.order('created_at', { ascending: false }),
          recentQuery,
        ]);
        if (allResult.error) throw allResult.error;
        if (recentResult.error) throw recentResult.error;
        state.databaseObservations = allResult.data || [];
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
        photoUrl: obs.photo_url || '',
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
      state.students = [];
      state.allStudents = [];
      state.classes = [];
      state.activeClassId = null;
      state.tutors = [];
      state.scheduleItems = [];
      state.databaseObservations = [];
      state.databaseObservationCount = null;
      state.databaseRecentObservationCount = null;
      state.observationsLog = [];

      const isParent = state.currentUser?.role === 'parent';
      const studentsLoaded = await loadStudentsFromSupabase();
      const classesLoaded = await loadClassesFromSupabase();
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
      // Find student UUID (if loaded from DB)
      const student = state.allStudents.find(s => s.name === obs.studentName || s.id === obs.studentId);
      if (!student || !student._fromDB) {
        console.warn('[Supabase] Student not from DB, skipping observation INSERT');
        return null;
      }

      try {
        const payload = {
          student_id: student.id,
          mastery_level: obs.level || 'developing',
          milestone: obs.milestone || null,
          anecdote: obs.anecdote,
        };
        if (obs.photoUrl) payload.photo_url = obs.photoUrl;
        const assignedTutor = state.currentUser?.id ||
          state.scheduleItems.find(item => item.classId === student.classId)?.tutorId;
        if (typeof assignedTutor === 'string') payload.tutor_id = assignedTutor;
        const { data, error } = await sb.from('observations').insert([payload]).select().single();

        if (error) throw error;
        console.log('[Supabase] observation INSERT ok:', data.id);
        return data;
      } catch (err) {
        console.warn('[Supabase] INSERT observation error:', err);
        showToast(
          `${state.lang === 'id' ? 'Gagal menyimpan observasi ke database' : 'Could not save observation to the database'}: ${err.message || err}`,
          '⚠️'
        );
        return null;
      }
    }

    // ============================================================
    // STARTUP LIFECYCLE: Enforce starting at the Login Screen
    document.addEventListener('DOMContentLoaded', () => {
      // Must start at login screen
      document.getElementById('auth-screen').classList.remove('hidden');
      document.getElementById('app-wrapper').classList.add('hidden');
      loadTutorDemoButtons();
    });
