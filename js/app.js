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

    // User credentials database for automatic role detection
    const USER_DIRECTORY = [
      {
        email: 'rina.kusuma@plego.id',
        password: 'plegostem2026',
        name: 'Bu Rina Kusuma',
        role: 'teacher',
        avatar: 'https://images.unsplash.com/photo-1544717305-2782549b5136?w=120&auto=format&fit=crop&q=80',
        classInfo: 'TK B1 — Little Botanists (4–5 th)'
      },
      {
        email: 'hartini@plegoschools.id',
        password: 'plegostem2026',
        name: 'Ibu Hartini',
        role: 'owner',
        avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=120&auto=format&fit=crop&q=80',
        classInfo: 'Jaringan 3 Cabang PAUD Melati'
      },
      {
        email: 'dimas.wijaya@gmail.com',
        password: 'plegostem2026',
        name: 'Pak Dimas Wijaya',
        role: 'parent',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&auto=format&fit=crop&q=80',
        classInfo: 'Wali Murid dari Kenzo Wijaya'
      }
    ];

    const state = {
      lang: 'id',
      currentUser: null, // STRICTLY NULL AT STARTUP -> MUST START AT LOGIN
      currentView: 'dashboard',
      plannerLayout: 'week', // 'day' | 'week' | 'month'
      selectedCurriculumLevel: 'level-0',
      selectedCurriculumSemester: 'all',
      curriculumData: (JSON.parse(localStorage.getItem('plego_curriculum')) || initialCurriculumItems).map(item => {
        if (!item.canva_url) {
          item.canva_url = `https://www.canva.com/design/DAF8_Plego_${item.id || 'stem'}/view?embed`;
        }
        return item;
      }),
      selectedActivity: null,
      selectedStudentForObs: null,
      obsLevel: 'developing',
      students: [
        { id: 'std-1', name: 'Kenzo Wijaya', age: '4th 3bln', avatar: 'https://images.unsplash.com/photo-1543332164-6e82f355badc?w=100&auto=format&fit=crop&q=80', lastObsDays: 1, needsAttention: false },
        { id: 'std-2', name: 'Siti Aisyah', age: '4th 8bln', avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&auto=format&fit=crop&q=80', lastObsDays: 9, needsAttention: true },
        { id: 'std-3', name: 'Bima Pratama', age: '4th 5bln', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80', lastObsDays: 2, needsAttention: false },
        { id: 'std-4', name: 'Nadia Utami', age: '4th 1bln', avatar: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=100&auto=format&fit=crop&q=80', lastObsDays: 12, needsAttention: true },
        { id: 'std-5', name: 'Rehan Al-Fatih', age: '4th 9bln', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80', lastObsDays: 3, needsAttention: false },
        { id: 'std-6', name: 'Zahra Kirana', age: '4th 4bln', avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=100&auto=format&fit=crop&q=80', lastObsDays: 4, needsAttention: false }
      ],
      activities: [
        {
          id: 'act-1',
          domain: 'science',
          duration: 25,
          title_id: 'Eksplorasi Tenggelam atau Mengapung (Sink or Float)',
          title_en: 'Sink or Float Sensorial Exploration',
          summary_id: 'Anak membandingkan densitas benda alami lokal di baskom air kaca transparan.',
          summary_en: 'Children compare densities of local natural items in a clear glass water basin.',
          materials_id: ['Baskom kaca transparan berisi air', 'Batu kali halus', 'Daun mangga hijau & daun kering', 'Tutup botol plastik', 'Baki kayu Montessori'],
          materials_en: ['Clear transparent glass basin with water', 'River pebbles', 'Mango green & dry leaves', 'Plastic bottle caps', 'Montessori work tray'],
          local_tips_id: 'Gunakan daun kering pekarangan sekolah dan biji saga lokal alih-alih plastik sintetis.',
          local_tips_en: 'Use schoolyard dried leaves and local saga seeds instead of manufactured plastics.',
          steps_id: [
            { phase: '1. Undangan (Invitation)', text: 'Ajak anak ke rak sains: "Kenzo, maukah kita mengamati benda yang menari di atas air?"' },
            { phase: '2. Demonstrasi (Demonstration)', text: 'Pegang batu kali dengan dua jari, letakkan lembut di atas air hingga tenggelam.' },
            { phase: '3. Kerja Mandiri (Child Work)', text: 'Beri kebebasan anak memilih benda uji tanpa menginterupsi kesimpulannya.' }
          ],
          steps_en: [
            { phase: '1. Invitation', text: 'Invite child to the shelf: "Shall we see what dances on water?"' },
            { phase: '2. Demonstration', text: 'Hold river pebble with two fingers, place gently until it sinks.' },
            { phase: '3. Child Work', text: 'Grant complete freedom for child to experiment without interruption.' }
          ],
          montessori_notes_id: 'Control of error terletak pada air: anak melihat sendiri tanpa koreksi lisan guru.',
          montessori_notes_en: 'Control of error resides in the water: child directly observes without verbal corrections.',
          cover_img: 'https://images.unsplash.com/photo-1596495578065-6e0763fa1178?w=500&auto=format&fit=crop&q=80'
        },
        {
          id: 'act-2',
          domain: 'engineering',
          duration: 30,
          title_id: 'Rancang Bangun Jembatan Pasak Bambu',
          title_en: 'Bamboo Peg & Elastic Polygon Bridge',
          summary_id: 'Membangun rangka struktural dan poligon keseimbangan menggunakan pasak kayu dan gelang karet.',
          summary_en: 'Building structural truss and balance polygons using wooden pegs and elastic loops.',
          materials_id: ['Papan pasak kayu (Geoboard)', 'Karet gelang warna-warni', 'Miniatur perahu bambu'],
          materials_en: ['Wooden peg geoboard', 'Colorful elastic bands', 'Miniature bamboo boat'],
          local_tips_id: 'Manfaatkan sisa bilah bambu yang dihaluskan oleh perajin lokal.',
          local_tips_en: 'Utilize smoothed local bamboo dowels from local woodshops.',
          steps_id: [
            { phase: '1. Undangan', text: 'Tunjukkan cara meregangkan karet pada pasak dengan aman.' },
            { phase: '2. Eksplorasi', text: 'Tantang anak membuat jembatan yang dapat dilewati balok kecil.' }
          ],
          steps_en: [
            { phase: '1. Invitation', text: 'Demonstrate stretching elastic loops across pegs safely.' },
            { phase: '2. Exploration', text: 'Challenge child to span a bridge allowing a small wooden block underneath.' }
          ],
          montessori_notes_id: 'Melatih motorik halus pincer-grasp 3 jari dan sensibilitas tegangan gaya.',
          montessori_notes_en: 'Refines the 3-finger pincer grasp and builds intuitive tension sensation.',
          cover_img: 'https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=500&auto=format&fit=crop&q=80'
        },
        {
          id: 'act-3',
          domain: 'technology',
          duration: 20,
          title_id: 'Penyortiran Biner Manik Tempurung Kelapa',
          title_en: 'Coconut Shell Unplugged Binary Sorter',
          summary_id: 'Pengenalan komputasi unplugged: menyortir objek berdasarkan atribut biner 0 dan 1.',
          summary_en: 'Unplugged computing: sorting objects based on boolean binary states 0 and 1.',
          materials_id: ['2 mangkuk tempurung kelapa', 'Biji asam jawa & biji jagung', 'Sendok jepit bambu'],
          materials_en: ['2 coconut shell bowls', 'Tamarind seeds & corn kernels', 'Bamboo tongs'],
          local_tips_id: 'Tempurung kelapa parut sisa dapur yang diampelas halus.',
          local_tips_en: 'Smoothed discarded coconut halves from local markets.',
          steps_id: [
            { phase: '1. Aturan Logika', text: 'Jika permukaan kasar masukkan ke tempurung A, jika halus ke tempurung B.' }
          ],
          steps_en: [
            { phase: '1. Logic Rule', text: 'If textured place in shell A, if smooth place in shell B.' }
          ],
          montessori_notes_id: 'Membangun logika if-then dan klasifikasi sensorial diskret.',
          montessori_notes_en: 'Fosters if-then conditional thinking and discrete sensorial classification.',
          cover_img: 'https://images.unsplash.com/photo-1588072432836-e10032774350?w=500&auto=format&fit=crop&q=80'
        }
      ],
      lessonPlanItems: [
        { id: 'lp-1', day: 'mon', time: '09:00', actId: 'c-0-12', domain: 'math', status: 'delivered', block: 'work_cycle' },
        { id: 'lp-2', day: 'tue', time: '09:30', actId: 'c-0-5', domain: 'engineering', status: 'delivered', block: 'work_cycle' },
        { id: 'lp-3', day: 'wed', time: '09:00', actId: 'c-0-1', domain: 'science', status: 'delivered', block: 'circle_time' },
        { id: 'lp-4', day: 'thu', time: '09:15', actId: 'c-0-1', domain: 'science', status: 'scheduled', block: 'work_cycle' },
        { id: 'lp-5', day: 'fri', time: '10:00', actId: 'c-0-7', domain: 'technology', status: 'scheduled', block: 'outdoor' }
      ],
      observationsLog: [
        { studentName: 'Kenzo Wijaya', domain: 'science', milestone: 'Memprediksi daya apung benda alami', level: 'developing', time: 'Hari ini, 09:40', anecdote: 'Kenzo mencoba 4 daun berbeda di baskom dan menemukan daun kering tetap mengapung.' },
        { studentName: 'Bima Pratama', domain: 'engineering', milestone: 'Menyusun struktur pasak yang kokoh', level: 'mastered', time: 'Kemarin, 10:15', anecdote: 'Bima membuat jembatan dengan 6 pasak dan menguji kekuatan dengan balok kayu.' }
      ],
      scheduleItems: [],
      databaseStatus: {
        curriculum: false,
        students: false,
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
        'topbar.currentClass': 'Kelas Aktif:',
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
        'metrics.children': 'Anak di Kelas',
        'metrics.active': 'aktif terdaftar',
        'metrics.lessons': 'Aktivitas Minggu Ini',
        'metrics.delivered': 'terlaksana',
        'metrics.observations': 'Observasi Dicatat',
        'metrics.fromYesterday': '24 jam terakhir',
        'metrics.needsObservation': 'Perlu Observasi',
        'metrics.observationWindow': 'Belum diamati 7 hari',
        'metrics.databaseRecords': 'Data dari database',
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
        'act.title': 'Koleksi Aktivitas & Panduan Eksplorasi',
        'act.subtitle': 'Rencana aktivitas siap saji lengkap dengan alternatif material lokal Nusantara & panduan presentasi',
        'planner.weeklyTag': 'Perencana Pembelajaran',
        'planner.title': 'Jadwal Eksplorasi Kelompok B1',
        'planner.copyForward': 'Salin Jadwal',
        'planner.print': 'Cetak PDF',
        'planner.todayBadge': 'HARI INI',
        'planner.materialsTitle': 'Daftar Material & Bahan Nusantara Terjadwal',
        'planner.autoAggregated': 'Otomatis teragregasi dari slot aktif',
        'days.mon': 'Senin',
        'days.tue': 'Selasa',
        'days.wed': 'Rabu',
        'days.thu': 'Kamis',
        'days.fri': 'Jumat',
        'obs.title': 'Alat Observasi & Ceklis Capaian STEM',
        'obs.subtitle': 'Format observasi 3-ketukan yang menghormati ritme alami anak saat bereksplorasi',
        'obs.filterClass': 'Filter:',
        'obs.selectStudent': 'Pilih Anak untuk Dicatat / Dievaluasi:',
        'obs.recentFeedTitle': 'Catatan Observasi Terkini di Kelas B1',
        'obs.liveSynced': 'Sinkronisasi lokal aktif 🟢',
        'parent.reportCycle': 'Laporan Perkembangan STEM Periode: November 2026 · Guru: Bu Rina Kusuma',
        'parent.downloadPdf': 'Unduh Portofolio (PDF)',
        'parent.summaryTitle': 'Rangkuman Refleksi Pendidik',
        'parent.approvedBadge': 'Disetujui Guru',
        'parent.interestsTag': 'Minat yang Menonjol:',
        'parent.domainProgress': 'Pertumbuhan Dimensi STEM',
        'parent.masteryScale': 'Skala: Mulai Muncul ➔ Menguasai',
        'parent.photoStripTitle': 'Dokumentasi Momen Pembelajaran',
        'parent.plantTitle': 'Tanaman Belajar Kenzo',
        'parent.plantDesc': 'Setiap pencapaian baru menumbuhkan daun pemahaman',
        'parent.tryHomeTitle': 'Eksplorasi Akhir Pekan di Rumah',
        'parent.homeActTitle': 'Tebak Mengapung di Baskom Dapur',
        'parent.homeActDesc': 'Ajak Kenzo mengumpulkan 4 benda dari dapur. Sebelum dimasukkan ke air, tanyakan: "Kira-kira benda ini tidur di dasar atau menari di atas air?"',
        'parent.messageTitle': 'Pesan Singkat dengan Bu Rina',
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
        'topbar.currentClass': 'Active Class:',
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
        'metrics.children': 'Children Enrolled',
        'metrics.active': 'active registered',
        'metrics.lessons': 'Weekly Lessons',
        'metrics.delivered': 'delivered',
        'metrics.observations': 'Observations Logged',
        'metrics.fromYesterday': 'in the last 24 hours',
        'metrics.needsObservation': 'Needs Observation',
        'metrics.observationWindow': 'Not observed in 7 days',
        'metrics.databaseRecords': 'Records from database',
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
        'act.title': 'Activity Library & Exploration Guides',
        'act.subtitle': 'Ready-to-teach activities complete with local Indonesian materials & presentation sequences',
        'planner.weeklyTag': 'Lesson Planner',
        'planner.title': 'Exploration Plan: TK B1 Little Botanists',
        'planner.copyForward': 'Copy Schedule',
        'planner.print': 'Print PDF',
        'planner.todayBadge': 'TODAY',
        'planner.materialsTitle': 'Scheduled Material & Parts Checklist',
        'planner.autoAggregated': 'Auto-aggregated from active slots',
        'days.mon': 'Monday',
        'days.tue': 'Tuesday',
        'days.wed': 'Wednesday',
        'days.thu': 'Thursday',
        'days.fri': 'Friday',
        'obs.title': 'Observation Tool & STEM Milestones',
        'obs.subtitle': '3-tap observation workflow that honors the child’s spontaneous exploration rhythm',
        'obs.filterClass': 'Filter:',
        'obs.selectStudent': 'Select Child to Observe / Evaluate:',
        'obs.recentFeedTitle': 'Recent Observation Entries in Class B1',
        'obs.liveSynced': 'Offline local-sync active 🟢',
        'parent.reportCycle': 'STEM Developmental Report: November 2026 · Lead Guide: Bu Rina Kusuma',
        'parent.downloadPdf': 'Download Portfolio (PDF)',
        'parent.summaryTitle': 'Educator Reflection Summary',
        'parent.approvedBadge': 'Teacher Approved',
        'parent.interestsTag': 'Prominent Interests:',
        'parent.domainProgress': 'Growth Across STEM Domains',
        'parent.masteryScale': 'Scale: Emerging ➔ Mastered',
        'parent.photoStripTitle': 'Learning Moment Highlights',
        'parent.plantTitle': 'Kenzo\'s Learning Plant',
        'parent.plantDesc': 'Every mastered milestone nurtures a new leaf of understanding',
        'parent.tryHomeTitle': 'Weekend At-Home Extension',
        'parent.homeActTitle': 'Kitchen Water Sink or Float',
        'parent.homeActDesc': 'Gather 4 kitchen items with Kenzo. Before dipping in water, ask: "Will this rest on the bottom or dance on the water?"',
        'parent.messageTitle': 'Direct Chat with Bu Rina',
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
    function handleLoginSubmit(e) {
      e.preventDefault();
      const email = document.getElementById('login-email').value.trim().toLowerCase();
      const password = document.getElementById('login-password').value;

      // Look up credential in user directory
      const user = USER_DIRECTORY.find(u => u.email === email && u.password === password);

      if (!user) {
        showToast(state.lang === 'id' ? 'Email atau kata sandi tidak cocok. Gunakan tombol demo di bawah.' : 'Invalid email or password. Use demo buttons below.', '⚠️');
        return;
      }

      executeLogin(user);
    }

    function quickFillAndLogin(email, password) {
      document.getElementById('login-email').value = email;
      document.getElementById('login-password').value = password;
      const user = USER_DIRECTORY.find(u => u.email === email);
      if (user) {
        executeLogin(user);
      }
    }

    function executeLogin(user) {
      state.currentUser = user;

      // Update topbar identity
      document.getElementById('user-avatar').src = user.avatar;
      document.getElementById('user-display-name').textContent = user.name;
      document.getElementById('dropdown-full-name').textContent = user.name;
      document.getElementById('dropdown-role-label').textContent = user.classInfo;
      document.getElementById('dash-greeting-name').textContent = user.name.split(' ')[0] + ' ' + (user.name.split(' ')[1] || '');

      // Strict role-based navigation & privacy configuration
      configureRolePrivacy(user.role);

      // Load all database-backed content immediately after login
      if (window.supabase) {
        loadAllFromSupabase().catch(err => {
          console.warn('[Supabase] loadAllFromSupabase failed:', err);
          showToast(state.lang === 'id' ? 'Koneksi Supabase gagal, data tetap memakai mode lokal.' : 'Supabase connection failed, app is using local fallback data.', '⚠️');
        });
      }

      // Transition screen
      document.getElementById('auth-screen').classList.add('hidden');
      document.getElementById('app-wrapper').classList.remove('hidden');

      if (user.role === 'parent') {
        navigateTo('parentHub');
        showToast(state.lang === 'id' ? `Masuk sebagai Orang Tua: ${user.name}` : `Signed in as Parent: ${user.name}`, '👨‍👩‍👦');
      } else {
        navigateTo('dashboard');
        showToast(state.lang === 'id' ? `Masuk sebagai ${user.role === 'owner' ? 'Pemilik Sekolah' : 'Pendidik'}: ${user.name}` : `Welcome, ${user.name}!`, '👋');
      }
    }

    function logout() {
      state.currentUser = null;
      document.getElementById('profile-dropdown').classList.add('hidden');
      document.getElementById('app-wrapper').classList.add('hidden');
      document.getElementById('auth-screen').classList.remove('hidden');
      document.getElementById('login-email').value = '';
      document.getElementById('login-password').value = '';
      showToast(state.lang === 'id' ? 'Anda telah berhasil keluar.' : 'Signed out successfully.', '🔒');
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
        // STRICT PRIVACY: Parent sees only Parent Portal, zero access to teacher tools
        contextBadge.classList.add('hidden');
        badgeAppMode.textContent = 'Parent Portal';
        badgeAppMode.className = 'text-xs uppercase tracking-widest px-2.5 py-0.5 rounded-full bg-sunshine-light text-sunshine-dark font-bold';

        nav.innerHTML = `
          <button onclick="navigateTo('parentHub')" id="nav-parentHub" class="nav-item active border-b-2 border-sage text-sage px-4 py-3 flex items-center gap-2 whitespace-nowrap">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/></svg>
            <span data-i18n="nav.parentPortal">Portofolio Anak (Kenzo)</span>
          </button>
          <button onclick="scrollParentSection('try-home')" class="nav-item border-b-2 border-transparent text-forest-light hover:text-forest px-4 py-3 flex items-center gap-2 whitespace-nowrap">
            <span>🏡</span> <span data-i18n="nav.parentActivities">Eksplorasi di Rumah</span>
          </button>
          <button onclick="scrollParentSection('chat-teacher')" class="nav-item border-b-2 border-transparent text-forest-light hover:text-forest px-4 py-3 flex items-center gap-2 whitespace-nowrap">
            <span>✉️</span> <span data-i18n="nav.parentChat">Pesan dengan Guru</span>
          </button>
        `;
      } else {
        // Teacher / Owner has full pedagogical suite
        contextBadge.classList.remove('hidden');
        badgeAppMode.textContent = role === 'owner' ? 'School Network' : 'Early Years';
        badgeAppMode.className = 'text-xs uppercase tracking-widest px-2 py-0.5 rounded-full bg-sand-200 text-forest font-bold';

        nav.innerHTML = `
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
        currentDate.toLocaleDateString(state.lang === 'id' ? 'id-ID' : 'en-US', {
          weekday: 'long',
          day: 'numeric',
          month: 'long',
          year: 'numeric',
        });
      const todayLessons = state.scheduleItems.filter(item => item.date === todayKey);
      const studentsReady = state.databaseStatus.students;
      const scheduleReady = state.databaseStatus.schedule;
      const observationsReady = state.databaseStatus.observations;
      const needingObs = studentsReady && observationsReady
        ? state.students.filter(student => student.needsAttention)
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
        studentsReady ? String(state.students.length) : '—';
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
        ? (todayLessons.length ? todayLessons.map(item => {
        const domainColor = getDomainColor(item.domain || 'science');
        return `
          <div class="flex items-center justify-between p-3.5 rounded-2xl bg-sand-50 border border-sand-200 hover:border-sage transition garden-interactive-btn">
            <div class="flex items-center gap-3">
              <span class="text-xs font-bold font-mono px-2 py-1 rounded-lg bg-cream border border-sand-200 text-forest">${escapeHTML(item.time || '—')}</span>
              <div class="w-2.5 h-8 rounded-full ${domainColor.bg}"></div>
              <div>
                <h4 class="font-bold text-sm text-forest">${escapeHTML(item.actTitle || (state.lang === 'id' ? 'Aktivitas STEM' : 'STEM activity'))}</h4>
                <p class="text-xs text-forest-light">${escapeHTML(item.tutorName || domainColor.label)}</p>
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
        ? (needingObs.length ? needingObs.map(s => `
        <div class="flex items-center justify-between p-2.5 rounded-2xl bg-sand-50 border border-sand-200">
          <div class="flex items-center gap-2.5">
            <img src="${escapeHTML(s.avatar)}" alt="${escapeHTML(s.name)}" class="w-9 h-9 rounded-full object-cover border border-sand-300">
            <div>
              <p class="font-bold text-xs text-forest">${escapeHTML(s.name)}</p>
              <p class="text-[10px] text-terracotta font-semibold">${s.lastObsDays} ${state.lang === 'id' ? 'hari lalu' : 'days ago'}</p>
            </div>
          </div>
          <button data-observe-student="${escapeHTML(s.id)}" class="text-xs font-bold px-3 py-1 rounded-full bg-terracotta text-white hover:bg-terracotta-dark transition">
            + ${state.lang === 'id' ? 'Amati' : 'Log'}
          </button>
        </div>
      `).join('') : `<p class="text-xs text-forest-light py-4 text-center">${state.lang === 'id' ? 'Semua anak sudah diobservasi dalam 7 hari terakhir.' : 'All children have been observed in the last 7 days.'}</p>`)
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

    function normalizeDateKey(value) {
      const dateValue = String(value || '');
      if (/^\d{4}-\d{2}-\d{2}$/.test(dateValue)) return dateValue;
      const date = new Date(dateValue);
      return Number.isNaN(date.getTime()) ? '' : toLocalDateKey(date);
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

    /* FLOW 2: CURRICULUM BROWSER */
    function renderCurriculum() {
      const container = document.getElementById('curriculum-units-container');
      const tloBanner = document.getElementById('level-tlo-banner');

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
        <div class="flex items-start gap-2.5">
          <span class="text-base">🎯</span>
          <div>
            <h4 class="font-bold text-forest text-xs mb-0.5">${currTlo.title}</h4>
            <p class="text-forest-light leading-relaxed">${state.lang === 'id' ? currTlo.tlo_id : currTlo.tlo_en}</p>
          </div>
        </div>
      `;

      const filtered = state.curriculumData.filter(item => {
        const matchLevel = item.level === state.selectedCurriculumLevel;
        const matchSemester = state.selectedCurriculumSemester === 'all' || item.semester === state.selectedCurriculumSemester;
        return matchLevel && matchSemester;
      });

      if (filtered.length === 0) {
        container.innerHTML = `
          <div class="col-span-3 text-center py-12 text-forest-light text-sm">
            <p>🌿 ${state.lang === 'id' ? 'Belum ada unit kurikulum untuk filter ini.' : 'No curriculum entries for this filter.'}</p>
          </div>
        `;
        return;
      }

      container.innerHTML = filtered.map(item => {
        const dColor = getDomainColor(item.domain || 'engineering');
        const bloomBadge = getBloomBadge(item.bloom);
        return `
          <div class="bg-sand-50 rounded-2xl p-5 border border-sand-200 flex flex-col justify-between garden-card-hover group">
            <div>
              <div class="flex items-center justify-between mb-2">
                <span class="text-[10px] font-bold px-2 py-0.5 rounded-md ${bloomBadge.bg} ${bloomBadge.text}">
                  ${item.bloom}
                </span>
                <span class="text-[11px] font-mono text-forest-light font-bold">Sem. ${item.semester} · M${item.week}</span>
              </div>

              <h3 class="font-heading font-bold text-forest text-base mb-2 group-hover:text-sage transition">
                ${bText(item, 'title')}
              </h3>

              <div class="p-2.5 rounded-xl bg-cream border border-sand-200/80 mb-3">
                <span class="text-[10px] font-bold text-forest-light uppercase block mb-1">🛠 Learning Tools / Perangkat:</span>
                <p class="text-xs font-semibold text-forest">${item.tools}</p>
              </div>

              <p class="text-xs text-forest-light leading-relaxed">
                ${item.elo}
              </p>
            </div>

            <div class="mt-4 pt-3 border-t border-sand-200 flex items-center justify-between gap-2 text-xs flex-wrap">
              <span class="text-[11px] font-bold ${dColor.textColor}">${dColor.label}</span>
              <div class="flex items-center gap-2">
                <button onclick="openCurriculumGuide('${item.id}')" class="px-3 py-1.5 rounded-full bg-cream hover:bg-sand-200 text-forest font-bold border border-sand-200 transition flex items-center gap-1.5 garden-interactive-btn">
                  <span>📖</span> <span>${state.lang === 'id' ? 'Buka Panduan' : 'Open Guide'}</span>
                </button>
                <button onclick="scheduleCurriculumToPlanner('${item.id}')" class="px-3 py-1.5 rounded-full bg-sage hover:bg-sage-600 text-white font-bold transition flex items-center gap-1 shadow-xs garden-interactive-btn">
                  + Jadwalkan →
                </button>
              </div>
            </div>
          </div>
        `;
      }).join('');
    }

    function setCurriculumLevel(level) {
      state.selectedCurriculumLevel = level;
      const pills = document.querySelectorAll('#curriculum-level-pills button');
      pills.forEach(p => {
        if (p.getAttribute('onclick').includes(level)) {
          p.className = 'px-3.5 py-1.5 rounded-full bg-sage text-white text-xs font-bold shadow-sm whitespace-nowrap garden-interactive-btn';
        } else {
          p.className = 'px-3.5 py-1.5 rounded-full bg-sand-100 hover:bg-sand-200 text-forest-light text-xs font-bold whitespace-nowrap garden-interactive-btn';
        }
      });
      renderCurriculum();
    }

    function setCurriculumSemester(sem) {
      state.selectedCurriculumSemester = sem;
      ['all', 'gasal', 'genap'].forEach(s => {
        const btn = document.getElementById(`sem-${s}`);
        if (s === sem.toLowerCase()) {
          btn.className = 'px-3 py-1 rounded-full bg-forest text-cream transition';
        } else {
          btn.className = 'px-3 py-1 rounded-full text-forest-light hover:text-forest transition';
        }
      });
      renderCurriculum();
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

      state.lessonPlanItems.push({
        id: 'lp-' + Date.now(),
        day: 'fri',
        time: '11:00',
        actId: item.id,
        domain: item.domain || 'engineering',
        status: 'scheduled',
        block: 'work_cycle'
      });

      showToast(state.lang === 'id' ? `"${bText(item, 'title')}" dijadwalkan ke hari Jumat!` : `Scheduled to Friday!`, '📅');
      navigateTo('planner');
    }

    /* UNIFIED CURRICULUM GUIDE & CANVA INTEGRATION */
    function openCurriculumGuide(currId) {
      const item = state.curriculumData.find(c => c.id === currId) ||
        (state.activities && state.activities.find(a => a.id === currId)) ||
        state.curriculumData[0];
      if (!item) return;
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
      state.lessonPlanItems.push({
        id: 'lp-' + Date.now(),
        day: 'thu',
        time: '10:30',
        actId: state.selectedActivity.id,
        domain: state.selectedActivity.domain || 'science',
        status: 'scheduled',
        block: 'work_cycle'
      });
      closeModal('modal-activity');
      navigateTo('planner');
      showToast(state.lang === 'id' ? 'Aktivitas berhasil ditambahkan ke jadwal!' : 'Activity added to schedule!', '📅');
    }

    /* FLOW 4: OVERHAULED INTERACTIVE LESSON PLANNER (DAY / WEEK / MONTH) */
    function setPlannerLayout(layout) {
      state.plannerLayout = layout;
      ['day', 'week', 'month'].forEach(l => {
        const btn = document.getElementById(`planner-btn-${l}`);
        if (l === layout) {
          btn.className = 'px-3.5 py-1.5 rounded-full bg-forest text-cream transition shadow-xs';
        } else {
          btn.className = 'px-3.5 py-1.5 rounded-full text-forest-light hover:text-forest transition';
        }
      });
      renderPlanner();
    }

    function renderPlanner() {
      const container = document.getElementById('planner-view-container');
      const periodLabel = document.getElementById('planner-period-label');

      // 1. WEEK VIEW
      if (state.plannerLayout === 'week') {
        periodLabel.textContent = '16 – 20 Nov 2026';
        const days = [
          { key: 'mon', label_id: 'Senin', label_en: 'Monday', date: '16 Nov' },
          { key: 'tue', label_id: 'Selasa', label_en: 'Tuesday', date: '17 Nov' },
          { key: 'wed', label_id: 'Rabu', label_en: 'Wednesday', date: '18 Nov' },
          { key: 'thu', label_id: 'Kamis', label_en: 'Thursday', date: '19 Nov', today: true },
          { key: 'fri', label_id: 'Jumat', label_en: 'Friday', date: '20 Nov' }
        ];

        container.innerHTML = `
          <div class="grid grid-cols-1 md:grid-cols-5 gap-3">
            ${days.map(d => {
          const items = state.lessonPlanItems.filter(i => i.day === d.key);
          const isToday = d.today;
          return `
                <div class="${isToday ? 'bg-cream border-2 border-sage shadow-soft' : 'bg-sand-50/70 border border-sand-200'} rounded-2xl p-3 flex flex-col justify-between relative transition hover:border-sage">
                  ${isToday ? `<div class="absolute -top-2.5 right-3 bg-sage text-white text-[9px] font-bold px-2 py-0.5 rounded-full">HARI INI</div>` : ''}
                  <div>
                    <div class="flex items-center justify-between pb-2 border-b border-sand-200">
                      <span class="font-heading font-bold text-sm ${isToday ? 'text-sage-700' : 'text-forest'}">${state.lang === 'id' ? d.label_id : d.label_en}</span>
                      <span class="text-xs font-bold text-forest-light">${d.date}</span>
                    </div>

                    <div class="space-y-2 mt-3">
                      ${items.map(item => {
            const act = state.curriculumData.find(a => a.id === item.actId) || (state.activities && state.activities.find(a => a.id === item.actId)) || state.curriculumData[0];
            const dColor = getDomainColor(item.domain || act?.domain || 'science');
            const isDone = item.status === 'delivered';
            return `
                          <div class="p-3 rounded-xl bg-white border border-sand-200 shadow-xs hover:border-sage transition cursor-pointer garden-card-hover group" onclick="openCurriculumGuide('${act.id}')">
                            <div class="flex items-center justify-between mb-1">
                              <span class="text-[10px] font-mono text-forest-light font-bold">${item.time}</span>
                              <span class="w-2 h-2 rounded-full ${dColor.bg}"></span>
                            </div>
                            <h4 class="font-bold text-xs text-forest leading-snug group-hover:text-sage transition">
                              ${bText(act, 'title')}
                            </h4>
                            <div class="flex items-center justify-between mt-2 pt-1.5 border-t border-sand-100 text-[10px]">
                              <span class="text-forest-light">${act.tools ? act.tools.split(',')[0] : 'Montessori'} · ${item.block}</span>
                              <span class="px-1.5 py-0.2 rounded font-bold ${isDone ? 'bg-leaf/10 text-leaf' : 'bg-sand-200 text-forest-light'}">
                                ${isDone ? (state.lang === 'id' ? 'Selesai' : 'Done') : (state.lang === 'id' ? 'Rencana' : 'Plan')}
                              </span>
                            </div>
                          </div>
                        `;
          }).join('')}
                    </div>
                  </div>

                  <button onclick="openScheduleSlotModal('${d.key}')" class="w-full mt-3 py-2 rounded-xl border border-dashed border-sand-300 hover:border-sage hover:bg-cream text-forest-light hover:text-sage text-[11px] font-bold transition flex items-center justify-center gap-1 garden-interactive-btn">
                    + ${state.lang === 'id' ? 'Tambah Slot' : 'Add Slot'}
                  </button>
                </div>
              `;
        }).join('')}
          </div>
        `;
      }
      // 2. DAY VIEW
      else if (state.plannerLayout === 'day') {
        periodLabel.textContent = 'Kamis, 19 Nov 2026 (Hari Ini)';
        const dayItems = state.lessonPlanItems.filter(i => i.day === 'thu');

        container.innerHTML = `
          <div class="bg-sand-50 rounded-2xl p-5 border border-sand-200">
            <div class="flex items-center justify-between mb-4 pb-3 border-b border-sand-200">
              <h3 class="font-heading font-bold text-forest text-base flex items-center gap-2">
                <span>☀️</span> Agenda Pembelajaran Harian (Work Cycle)
              </h3>
              <button onclick="openScheduleSlotModal('thu')" class="text-xs font-bold px-3 py-1.5 rounded-full bg-sage text-white shadow-sm garden-interactive-btn">
                + Tambah Aktivitas Hari Ini
              </button>
            </div>

            <div class="space-y-3">
              ${dayItems.length === 0 ? '<p class="text-xs text-forest-light text-center py-6">Tidak ada aktivitas yang dijadwalkan untuk hari ini.</p>' : ''}
              ${dayItems.map(item => {
          const act = state.curriculumData.find(a => a.id === item.actId) || (state.activities && state.activities.find(a => a.id === item.actId)) || state.curriculumData[0];
          const dColor = getDomainColor(item.domain || act?.domain || 'science');
          return `
                  <div class="p-4 rounded-2xl bg-cream border border-sand-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4 garden-card-hover">
                    <div class="flex items-center gap-4">
                      <div class="text-center bg-sand-100 p-2.5 rounded-xl border border-sand-200 min-w-16">
                        <span class="block text-xs font-mono font-bold text-forest">${item.time}</span>
                        <span class="text-[9px] uppercase font-bold text-forest-light">${item.block}</span>
                      </div>
                      <div>
                        <div class="flex items-center gap-2 mb-1">
                          <span class="text-[10px] font-bold px-2 py-0.5 rounded-full ${dColor.bgLight} ${dColor.textColor}">${dColor.label}</span>
                          <span class="text-xs text-forest-light">${act.tools || 'Plego Blocks'}</span>
                        </div>
                        <h4 class="font-bold text-sm text-forest">${bText(act, 'title')}</h4>
                        <p class="text-xs text-forest-light line-clamp-1">${act.elo || ''}</p>
                      </div>
                    </div>
                    <div class="flex items-center gap-2 self-end sm:self-center">
                      <button onclick="openCurriculumGuide('${act.id}')" class="text-xs px-3 py-1.5 rounded-full bg-sand-100 text-forest border border-sand-200 hover:bg-sand-200 transition">Panduan</button>
                      <button onclick="deletePlanItem('${item.id}')" class="text-xs px-2.5 py-1.5 rounded-full text-berry hover:bg-berry/10 transition">Hapus</button>
                    </div>
                  </div>
                `;
        }).join('')}
            </div>
          </div>
        `;
      }
      // 3. MONTH VIEW
      else if (state.plannerLayout === 'month') {
        periodLabel.textContent = 'November 2026';
        container.innerHTML = `
          <div class="bg-sand-50 rounded-2xl p-5 border border-sand-200">
            <div class="grid grid-cols-7 gap-2 text-center text-xs font-bold text-forest-light pb-2 mb-2 border-b border-sand-200">
              <span>Sen</span><span>Sel</span><span>Rab</span><span>Kam</span><span>Jum</span><span>Sab</span><span>Min</span>
            </div>
            <div class="grid grid-cols-7 gap-2 text-xs">
              ${Array.from({ length: 30 }, (_, i) => {
          const dayNum = i + 1;
          const hasActivity = dayNum >= 16 && dayNum <= 20;
          const isToday = dayNum === 19;
          return `
                  <div onclick="${hasActivity ? "setPlannerLayout('day')" : "showToast('Klik tanggal 16 - 20 untuk melihat jadwal aktif minggu ini', '📅')"}"
                       class="h-20 p-1.5 rounded-xl border ${isToday ? 'bg-cream border-2 border-sage font-bold' : (hasActivity ? 'bg-white border-sand-200 hover:border-sage cursor-pointer' : 'bg-sand-100/50 border-transparent text-forest-light/60')} flex flex-col justify-between transition">
                    <span class="text-[11px]">${dayNum}</span>
                    ${hasActivity ? `
                      <div class="space-y-0.5">
                        <span class="block text-[9px] truncate px-1 py-0.5 rounded bg-sage/10 text-sage-700 font-semibold">STEM Eksplorasi</span>
                      </div>
                    ` : ''}
                  </div>
                `;
        }).join('')}
            </div>
          </div>
        `;
      }

      // Materials checklist aggregation
      const materialsContainer = document.getElementById('planner-materials-list');
      const materials = [
        'Modul Sensor Cahaya & LED Plego (4 set)',
        'Baskom kaca transparan & air jernih (4 buah)',
        'Batu kerikil kali & ranting bambu halus (2 baki)',
        'Papan pasak kayu & karet warna-warni (3 set)',
        'Mangkuk tempurung kelapa parut (6 buah)',
        'Motor DC & Modul Saklar Plego Blocks (2 set)'
      ];
      materialsContainer.innerHTML = materials.map(m => `
        <label class="flex items-center gap-2 p-2 rounded-xl bg-cream border border-sand-200 cursor-pointer hover:bg-white transition">
          <input type="checkbox" checked class="w-3.5 h-3.5 rounded text-sage focus:ring-sage">
          <span class="text-forest">${m}</span>
        </label>
      `).join('');
    }

    function openScheduleSlotModal(day = 'thu') {
      const selectAct = document.getElementById('modal-schedule-act');
      selectAct.innerHTML = state.curriculumData.map(a => `
        <option value="${a.id}">${bText(a, 'title')}</option>
      `).join('');

      document.getElementById('modal-schedule-day').value = day;
      openModal('modal-schedule-lesson');
    }

    function handleSaveScheduledLesson(e) {
      e.preventDefault();
      const day = document.getElementById('modal-schedule-day').value;
      const actId = document.getElementById('modal-schedule-act').value;
      const time = document.getElementById('modal-schedule-time').value;
      const block = document.getElementById('modal-schedule-block').value;

      const act = state.curriculumData.find(a => a.id === actId) || state.curriculumData[0];

      state.lessonPlanItems.push({
        id: 'lp-' + Date.now(),
        day, time, actId,
        domain: act ? (act.domain || 'science') : 'science',
        status: 'scheduled',
        block
      });

      closeModal('modal-schedule-lesson');
      renderPlanner();
      showToast(state.lang === 'id' ? 'Slot pembelajaran berhasil ditambahkan!' : 'Lesson slot added!', '📅');
    }

    function deletePlanItem(id) {
      state.lessonPlanItems = state.lessonPlanItems.filter(i => i.id !== id);
      renderPlanner();
      showToast(state.lang === 'id' ? 'Jadwal dihapus.' : 'Item removed.', '🗑️');
    }

    function changePlannerWeek(delta) {
      showToast(delta > 0 ? 'Maju ke minggu berikutnya' : 'Mundur ke minggu sebelumnya', '🗓️');
    }

    function resetPlannerWeek() {
      setPlannerLayout('day');
    }

    /* FLOW 5: OBSERVATION CHECKLIST */
    function renderObservations() {
      const grid = document.getElementById('students-grid');
      const feed = document.getElementById('observation-feed');

      grid.innerHTML = state.databaseStatus.students ? (state.students.length ? state.students.map(s => `
        <div data-observe-student="${escapeHTML(s.id)}" class="p-3 rounded-2xl bg-sand-50 border border-sand-200 hover:border-sage hover:shadow-soft transition text-center cursor-pointer group garden-card-hover">
          <div class="w-14 h-14 mx-auto rounded-full overflow-hidden border-2 ${s.needsAttention ? 'border-terracotta' : 'border-sage'} mb-2 group-hover:scale-105 transition">
            <img src="${escapeHTML(s.avatar)}" alt="${escapeHTML(s.name)}" class="w-full h-full object-cover">
          </div>
          <h4 class="font-bold text-xs text-forest truncate">${escapeHTML(s.name)}</h4>
          <span class="text-[10px] text-forest-light">${escapeHTML(s.age)}</span>
          <div class="mt-1">
            <span class="text-[9px] font-bold px-2 py-0.5 rounded-full ${s.needsAttention ? 'bg-terracotta-light text-terracotta' : 'bg-sage-50 text-sage-700'}">
              ${s.needsAttention ? (state.lang === 'id' ? 'Perlu Amati' : 'Needs Obs') : (state.lang === 'id' ? 'Tercatat' : 'Observed')}
            </span>
          </div>
        </div>
      `).join('') : `<p class="col-span-full text-xs text-forest-light text-center py-6">${state.lang === 'id' ? 'Belum ada data siswa di database.' : 'No students found in the database.'}</p>`)
        : `<p class="col-span-full text-xs text-forest-light text-center py-6">${state.lang === 'id' ? 'Data siswa belum dapat dimuat dari database.' : 'Could not load students from the database.'}</p>`;
      grid.querySelectorAll('[data-observe-student]').forEach(card => {
        card.addEventListener('click', () => openObservationModal(card.dataset.observeStudent));
      });

      feed.innerHTML = state.databaseStatus.observations ? (state.observationsLog.length ? state.observationsLog.map(obs => {
        const dColor = getDomainColor(obs.domain);
        return `
          <div class="p-4 rounded-2xl bg-sand-50 border border-sand-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3 garden-card-hover">
            <div>
              <div class="flex items-center gap-2 mb-1">
                <span class="font-bold text-sm text-forest">${escapeHTML(obs.studentName)}</span>
                <span class="text-[10px] font-bold px-2 py-0.5 rounded-full ${dColor.bgLight} ${dColor.textColor}">${dColor.label}</span>
                <span class="text-xs text-forest-light">· ${escapeHTML(obs.time)}</span>
              </div>
              <p class="text-xs font-semibold text-forest mb-1">"${escapeHTML(obs.milestone)}"</p>
              <p class="text-xs text-forest-light italic leading-relaxed">${state.lang === 'id' ? 'Catatan' : 'Note'}: ${escapeHTML(obs.anecdote)}</p>
            </div>
            <div class="flex items-center gap-2 flex-shrink-0">
              <span class="text-xs font-bold px-3 py-1 rounded-full bg-sky-light text-sky border border-sky/30">
                ${getMasteryLabel(obs.level)}
              </span>
            </div>
          </div>
        `;
      }).join('') : `<p class="text-xs text-forest-light text-center py-6">${state.lang === 'id' ? 'Belum ada data observasi di database.' : 'No observations found in the database.'}</p>`)
        : `<p class="text-xs text-forest-light text-center py-6">${state.lang === 'id' ? 'Data observasi belum dapat dimuat dari database.' : 'Could not load observations from the database.'}</p>`;
    }

    function openObservationModal(studentId = 'std-1') {
      if (state.currentUser?.role === 'parent') {
        showToast('Orang tua tidak memiliki izin mencatat observasi', '⚠️');
        return;
      }

      const student = state.students.find(s => s.id === studentId) || state.students[0];
      if (!student) {
        showToast(state.lang === 'id' ? 'Data siswa belum tersedia.' : 'No student data is available.', '⚠️');
        return;
      }
      state.selectedStudentForObs = student;

      document.getElementById('obs-modal-student-name').textContent = `Observasi: ${student.name}`;
      document.getElementById('obs-modal-avatar').querySelector('img').src = student.avatar;
      document.getElementById('obs-anecdote-input').value = '';

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

      const observation = {
        studentId: student.id,
        studentName: student.name,
        domain: 'science',
        milestone: 'Memprediksi keterkaitan sensor dan aktuator PLEGO Blocks',
        level: state.obsLevel,
        time: state.lang === 'id' ? 'Baru saja' : 'Just now',
        anecdote: anecdote
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
        state.observationsLog.unshift(observation);
        student.needsAttention = false;
        student.lastObsDays = 0;
      }

      closeModal('modal-observation');
      renderView();
      showToast(
        student._fromDB
          ? (state.lang === 'id' ? 'Observasi berhasil disimpan ke database.' : 'Observation saved to the database.')
          : (state.lang === 'id' ? 'Observasi hanya tersimpan sementara di mode demo.' : 'Observation is only saved temporarily in demo mode.'),
        student._fromDB ? '✅' : '⚠️'
      );
    }

    /* FLOW 6: PARENT HUB (Kenzo's Portfolio) */
    function renderParentHub() { }

    function sendParentReply() {
      const input = document.getElementById('parent-reply-input');
      const text = input.value.trim();
      if (!text) return;

      const sender = state.currentUser?.name || 'Pak Dimas (Anda)';
      const container = document.getElementById('chat-messages-container');
      const msgDiv = document.createElement('div');
      msgDiv.className = 'p-2.5 rounded-xl bg-sage-50 text-forest ml-4 border border-sage-100 fade-enter';
      msgDiv.innerHTML = `
        <span class="font-bold block text-[11px] text-forest-light">${sender} · Baru saja</span>
        <p>${text}</p>
      `;
      container.appendChild(msgDiv);
      input.value = '';
      container.scrollTop = container.scrollHeight;
      showToast(state.lang === 'id' ? 'Pesan terkirim ke guru' : 'Message sent to educator', '✉️');
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
        ['modal-activity', 'modal-observation', 'modal-photo', 'modal-add-curriculum', 'modal-schedule-lesson'].forEach(closeModal);
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
    // Map frontend short code → DB level prefix for filtering
    const CODE_TO_DB_PREFIX = {
      'level-0': 'Level 0',
      'level-1': 'Level 1',
      'level-2': 'Level 2',
      'level-3': 'Level 3',
    };

    // Load curriculum from Supabase, merge with any local additions
    async function loadCurriculumFromSupabase() {
      try {
        const { data, error } = await sb.from('curriculum_units').select('*').order('week', { ascending: true });
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

        // Keep locally-added items (id starts with 'c-custom-'), replace DB items
        const localCustom = state.curriculumData.filter(c => String(c.id).startsWith('c-custom-'));
        state.curriculumData = [...dbItems, ...localCustom];
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
        const { data, error } = await sb.from('students').select('*, classes(name, school_id, schools(name))').order('full_name');
        if (error) throw error;

        const avatarPool = [
          'https://images.unsplash.com/photo-1543332164-6e82f355badc?w=100&auto=format&fit=crop&q=80',
          'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&auto=format&fit=crop&q=80',
          'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80',
          'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=100&auto=format&fit=crop&q=80',
          'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80',
          'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=100&auto=format&fit=crop&q=80',
        ];

        state.students = (data || []).map((row, i) => ({
          id: row.id,
          name: row.full_name,
          nickname: row.nickname || row.full_name.split(' ')[0],
          age: '—',
          className: row.classes?.name || '—',
          schoolName: row.classes?.schools?.name || '—',
          avatar: avatarPool[i % avatarPool.length],
          lastObsDays: 0,
          needsAttention: false,
          _fromDB: true,
        }));
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
        const { data, error } = await sb.from('tutors').select('*').order('full_name');
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
        const { data, error } = await sb
          .from('schedule_assignments')
          .select('*, tutors(full_name), curriculum_units(title_id, level, domain)')
          .order('scheduled_date');
        if (error) throw error;
        state.scheduleItems = (data || []).map(row => ({
          id: row.id,
          date: normalizeDateKey(row.scheduled_date),
          time: row.scheduled_time || row.start_time || row.time || '',
          status: row.status,
          notes: row.notes,
          tutorName: row.tutors?.full_name || '—',
          actTitle: row.curriculum_units?.title_id || '—',
          domain: row.curriculum_units?.domain || 'science',
          curriculumUnitId: row.curriculum_unit_id || row.curriculum_units?.id || null,
          actLevel: row.curriculum_units ? dbLevelToCode(row.curriculum_units.level) : null,
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
        const [allResult, recentResult] = await Promise.all([
          sb.from('observations').select('*', { count: 'exact' }).order('created_at', { ascending: false }),
          sb.from('observations').select('created_at', { count: 'exact', head: true }).gte('created_at', since24Hours),
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
      state.students.forEach(student => {
        const latest = latestByStudent.get(student.id);
        const elapsed = latest ? now - new Date(latest).getTime() : Infinity;
        student.lastObsDays = Number.isFinite(elapsed) ? Math.floor(elapsed / 86400000) : null;
        student.needsAttention = !Number.isFinite(elapsed) || elapsed >= 7 * 86400000;
      });

      const studentNames = new Map(state.students.map(student => [student.id, student.name]));
      state.observationsLog = state.databaseObservations.map(obs => ({
        studentId: obs.student_id,
        studentName: studentNames.get(obs.student_id) || (state.lang === 'id' ? 'Siswa' : 'Student'),
        domain: 'science',
        milestone: obs.milestone || (state.lang === 'id' ? 'Observasi perkembangan' : 'Development observation'),
        level: obs.mastery_level || 'developing',
        time: obs.created_at ? new Date(obs.created_at).toLocaleString(state.lang === 'id' ? 'id-ID' : 'en-US') : '—',
        anecdote: obs.anecdote || '',
      }));
    }

    // Load all Supabase data (runs after login)
    async function loadAllFromSupabase() {
      state.databaseStatus = {
        curriculum: false,
        students: false,
        tutors: false,
        schedule: false,
        observations: false,
      };
      state.students = [];
      state.tutors = [];
      state.scheduleItems = [];
      state.databaseObservations = [];
      state.databaseObservationCount = null;
      state.databaseRecentObservationCount = null;
      state.observationsLog = [];

      const tables = ['curriculum_units', 'students', 'tutors', 'schedule_assignments', 'observations'];
      const results = await Promise.all([
        loadCurriculumFromSupabase(),
        loadStudentsFromSupabase(),
        loadTutorsFromSupabase(),
        loadScheduleFromSupabase(),
        loadObservationsFromSupabase(),
      ]);
      if (state.databaseStatus.students && state.databaseStatus.observations) {
        applyDatabaseObservations();
      }
      renderView();
      const failedTables = results
        .map((loaded, index) => loaded ? null : tables[index])
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
      const student = state.students.find(s => s.name === obs.studentName || s.id === obs.studentId);
      if (!student || !student._fromDB) {
        console.warn('[Supabase] Student not from DB, skipping observation INSERT');
        return null;
      }

      try {
        const { data, error } = await sb.from('observations').insert([{
          student_id: student.id,
          mastery_level: obs.level || 'developing',
          milestone: obs.milestone || null,
          anecdote: obs.anecdote,
        }]).select().single();

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
    });
