/* ==========================================================================
   data.js — SELURUH ISI SITUS ADA DI FILE INI
   --------------------------------------------------------------------------
   Ubah teks di antara tanda kutip. Jangan hapus tanda kutip, koma, atau
   kurung kurawal. Simpan file, lalu unggah lagi ke GitHub. Selesai.

   Ingin mengedit tanpa membuka kode? Buka situs Anda lalu tambahkan
   ?edit di belakang alamatnya (contoh: kikibugi.github.io/?edit).
   Panel editor akan terbuka dan bisa mengunduh data.js versi baru.
   ========================================================================== */

const SITE = {

  /* --- 1. IDENTITAS & METADATA (dipakai untuk judul tab, SEO, share) ----- */
  meta: {
    nama: "Kiki Reskianto Bugi",
    namaPendek: "KRB",
    peran: "Penulis esai dan peneliti independen",
    // Kalimat satu baris yang muncul di hasil pencarian Google
    deskripsi:
      "Situs pribadi Kiki Reskianto Bugi — penulis esai dan peneliti independen dari Wamena, Papua Pegunungan, yang bekerja di persimpangan ontologi, filsafat bahasa, dan logika kritis.",
    // Isi setelah situs online, contoh: "https://kikibugi.github.io/"
    alamatSitus: "",
    bahasa: "id",
    // Kata kunci untuk mesin pencari, pisahkan dengan koma
    kataKunci:
      "Kiki Reskianto Bugi, ontologi, filsafat bahasa, logika kritis, esai, Wamena, Papua Pegunungan, Zenodo, penelitian terbuka",
  },

  /* --- 2. HALAMAN DEPAN --------------------------------------------------- */
  beranda: {
    salam: "Wamena, Papua Pegunungan",
    // Judul besar. Dipecah dua baris agar rapi di layar lebar.
    judulBaris1: "Kiki Reskianto",
    judulBaris2: "Bugi",
    kalimatPembuka:
      "Saya menulis untuk menguji asumsi yang jarang ditanyakan orang: bagaimana sesuatu bisa disebut ada, bagaimana bahasa ikut menentukan apa yang kita anggap nyata, dan di titik mana penalaran diam-diam kehilangan pijakannya.",
    tombolUtama: { teks: "Baca karya saya", tujuan: "#karya" },
    tombolKedua: { teks: "Hubungi saya", tujuan: "#kontak" },
    // Angka-angka kecil di bawah hero. Hapus baris yang tak perlu.
    ringkasan: [
      { angka: "6+", label: "esai dan artikel terbit" },
      { angka: "3", label: "bidang kajian utama" },
      { angka: "Akses terbuka", label: "seluruh karya bebas diunduh" },
    ],
    fotoUtama: "potret-utama.png",
    fotoUtamaAlt: "Potret Kiki Reskianto Bugi",
    // Ukiran melingkar di belakang foto. Kosongkan ("") bila tak ingin dipakai.
    ukiranBelakang: "ukiran-toraja.png",
  },

  /* --- 3. TENTANG SAYA ---------------------------------------------------- */
  tentang: {
    judul: "Tentang saya",
    // Setiap tanda kutip di bawah ini menjadi satu paragraf.
    paragraf: [
      "Saya lahir dan tumbuh di lingkungan yang mengajarkan bahwa tidak ada yang berdiri sendiri — orang, rumah, kata, semuanya terhubung pada sesuatu di belakangnya. Cara pandang itu yang akhirnya membentuk cara saya membaca dan menulis.",
      "Latar akademik saya bermula dari teologi di Sekolah Tinggi Teologi Arastamar Wamena, lalu bergeser ke sosiologi dan filsafat. Perpindahan itu bukan patah arah. Ketiganya menanyakan hal yang sama dari pintu yang berbeda: apa yang sebenarnya kita maksud ketika kita berkata sesuatu itu benar, ada, atau bermakna.",
      "Karya saya berangkat dari satu tesis yang saya pegang cukup keras: ada mendahului esensi, bahasa adalah sifat yang melekat pada eksistensi, dan realitas adalah label yang jujur tetapi tidak pernah final. Dari sana lahir esai-esai tentang ontologi, kekeliruan berpikir, dan logika kebersamaan yang tidak transaksional.",
      "Semua tulisan saya terbit terbuka lewat Zenodo, repositori riset yang dikelola CERN dan didukung Komisi Eropa, sehingga siapa pun bisa membaca, mengutip, dan mengunduhnya tanpa biaya. Bagi saya itu bagian dari pekerjaannya: pemikiran yang dikunci di balik akses berbayar berhenti menjadi percakapan.",
    ],
    // Kartu kecil di samping. Hapus atau tambah sesuai kebutuhan.
    fakta: [
      { label: "Domisili", isi: "Wamena, Papua Pegunungan" },
      { label: "Latar studi", isi: "Teologi, Sosiologi, Filsafat" },
      { label: "Bahasa", isi: "Indonesia, Inggris" },
      { label: "Repositori", isi: "Zenodo, terindeks OpenAIRE" },
    ],
  },

  /* --- 4. BIDANG KAJIAN --------------------------------------------------- */
  kajian: {
    judul: "Yang saya kerjakan",
    pengantar:
      "Tiga bidang ini saling menyambung. Yang satu selalu memaksa saya kembali ke yang lain.",
    daftar: [
      {
        nama: "Ontologi",
        isi: "Menguji ulang pertanyaan paling awal — apa artinya sesuatu disebut ada, dan mengapa jawaban atas pertanyaan itu tidak pernah benar-benar selesai.",
      },
      {
        nama: "Filsafat bahasa",
        isi: "Bahasa bukan alat yang dipakai belakangan untuk menamai dunia. Ia sudah bekerja sejak sebelum kita sempat memilih nama, dan ikut menentukan apa yang bisa kita pikirkan.",
      },
      {
        nama: "Logika kritis",
        isi: "Melacak kekeliruan yang lolos dari perhatian karena bentuknya terlihat masuk akal — kesesatan yang letaknya bukan di kesimpulan, melainkan di pijakan yang tidak pernah diperiksa.",
      },
    ],
  },

  /* --- 5. KARYA & PUBLIKASI ----------------------------------------------- */
  /* jenis: bebas diisi (Buku, Esai, Artikel jurnal, ...)                     */
  /* tautan: kosongkan dengan "" bila belum ada tautannya                     */
  karya: {
    judul: "Karya dan publikasi",
    pengantar:
      "Diurutkan dari yang terbaru. Seluruh naskah berlisensi terbuka dan bisa diunduh langsung.",
    daftar: [
      {
        judul: "Logical Deeper Fallacy",
        jenis: "Buku",
        tahun: "2026",
        penerbit: "Zenodo",
        ringkasan:
          "Buku ini berangkat dari satu percakapan sederhana tentang hubungan agama dan filsafat, lalu bergerak jauh dari rencana awalnya. Pertanyaannya: mengapa keyakinan yang digeluti tanpa kontrol berpikir bisa melahirkan kepercayaan baru, dan mengapa filsafat yang dikejar tanpa jangkar bisa menghabiskan iman. Jawabannya ternyata tidak terletak pada keduanya, melainkan pada medium yang menghubungkannya.",
        tautan: "",
        unggulan: true,
      },
      {
        judul: "Realitas Sebagai Label",
        jenis: "Esai",
        tahun: "2026",
        penerbit: "Zenodo",
        ringkasan:
          "Sebuah ontologi manusiawi yang bertolak dari tesis tegas: ada mendahului esensi, bahasa adalah sifat inheren eksistensi, dan realitas adalah label yang jujur namun tidak final. Ketiganya bukan posisi yang dipilih di antara banyak kemungkinan, melainkan kesimpulan yang sulit dihindari begitu pertanyaannya diajukan dengan sungguh-sungguh.",
        tautan: "",
        unggulan: true,
      },
      {
        judul: "AND: A Word That Lives Because It Never Finishes Answering",
        jenis: "Esai",
        tahun: "2026",
        penerbit: "Zenodo",
        ringkasan:
          "Esai tentang satu kata sambung yang tampak sepele namun menolak ditutup. Kata yang hidup justru karena ia tidak pernah selesai menjawab.",
        tautan: "",
        unggulan: false,
      },
      {
        judul:
          "Social Intensity Without Demand: The Relational Logic of Non-Transactional Togetherness",
        jenis: "Esai",
        tahun: "2026",
        penerbit: "Zenodo",
        ringkasan:
          "Kehidupan sosial hari ini makin ditandai oleh hubungan yang berbentuk transaksi. Esai ini mencari kemungkinan kebersamaan yang intens tanpa tuntutan — kedekatan yang tidak menagih apa pun untuk membenarkan dirinya.",
        tautan: "",
        unggulan: false,
      },
      {
        judul:
          "Implementasi Teologi Misi Mengindra Anak Jalanan: Integrasi Pelayanan Holistik dan Tradisional di Kabupaten Jayawijaya",
        jenis: "Artikel jurnal",
        tahun: "2025",
        penerbit: "MEFORAS: Jurnal Teologi dan Pendidikan Agama Kristen, Vol. 1 No. 2",
        ringkasan:
          "Studi lapangan tentang bagaimana pendekatan pelayanan holistik dan tradisional dapat dipadukan dalam kerja pendampingan anak jalanan di Jayawijaya.",
        tautan: "https://e-journal.sttawamena.ac.id/index.php/meforas/article/view/32",
        unggulan: false,
      },
      {
        judul:
          "Fungsi Staf Sekretaris Gereja dalam Menunjang Pelayanan di GBI Imanuel Wamena",
        jenis: "Artikel jurnal",
        tahun: "2024",
        penerbit: "Didasko — STAK Diaspora Wamena",
        ringkasan:
          "Menelaah peran administrasi kesekretariatan sebagai penopang kerja pelayanan yang sering dianggap teknis, padahal menentukan.",
        tautan: "https://e-journal.stakdiaspora.ac.id/index.php/didasko/article/view/117",
        unggulan: false,
      },
    ],
  },

  /* --- 6. PERJALANAN (garis waktu) ---------------------------------------- */
  perjalanan: {
    judul: "Perjalanan",
    pengantar: "Urutan yang membawa saya ke pekerjaan yang sekarang.",
    daftar: [
      {
        tahun: "2023",
        judul: "Studi teologi di Wamena",
        isi: "Mulai menekuni teologi di Sekolah Tinggi Teologi Arastamar Wamena, dan menemukan bahwa pertanyaan yang paling menarik justru muncul di batas disiplinnya.",
      },
      {
        tahun: "2024",
        judul: "Publikasi ilmiah pertama",
        isi: "Artikel tentang fungsi kesekretariatan gereja terbit di jurnal Didasko — pengalaman pertama menyusun argumen untuk pembaca di luar ruang kelas.",
      },
      {
        tahun: "2025",
        judul: "Penelitian lapangan di Jayawijaya",
        isi: "Menulis studi tentang pendampingan anak jalanan bersama tim, terbit di jurnal MEFORAS.",
      },
      {
        tahun: "2026",
        judul: "Beralih ke filsafat dan akses terbuka",
        isi: "Mulai menerbitkan esai ontologi dan logika secara mandiri lewat Zenodo, terdaftar di ORCID dan terindeks OpenAIRE.",
      },
    ],
  },

  /* --- 7. GALERI ---------------------------------------------------------- */
  galeri: {
    judul: "Beberapa potret",
    aktif: true, // ubah ke false untuk menyembunyikan bagian ini
    daftar: [
      { berkas: "foto-adat.jpg", keterangan: "Mengenakan busana adat" },
      { berkas: "foto-formal.jpg", keterangan: "Potret resmi" },
      { berkas: "foto-kasual.jpg", keterangan: "Sehari-hari" },
    ],
  },

  /* --- 8. KONTAK & TAUTAN ------------------------------------------------- */
  /* Kosongkan "alamat" pada tautan yang belum Anda punya — otomatis         */
  /* disembunyikan dari situs.                                               */
  kontak: {
    judul: "Mari berbincang",
    pengantar:
      "Terbuka untuk diskusi, kolaborasi tulisan, undangan bicara, dan pertanyaan tentang karya-karya di atas.",
    surel: "pallongjunior@gmail.com",
    kota: "Wamena, Papua Pegunungan, Indonesia",
    tautan: [
      { nama: "Academia.edu", alamat: "https://independent.academia.edu/KikiReskiantoBugi" },
      { nama: "LinkedIn", alamat: "https://www.linkedin.com/in/kiki-reskiyanto-b96992325" },
      { nama: "Zenodo", alamat: "https://zenodo.org/" },
      { nama: "ORCID", alamat: "" },
      { nama: "GitHub", alamat: "" },
      { nama: "Instagram", alamat: "https://www.instagram.com/resky_devianrestry" },
    ],
  },

  /* --- 9. FOOTER ---------------------------------------------------------- */
  footer: {
    kalimat: "Ditulis dan dirawat sendiri dari Wamena.",
    tahunMulai: "2026",
  },

  /* --- 10. TAMPILAN ------------------------------------------------------- */
  /* Warna boleh diganti dengan kode heksadesimal apa pun.                   */
  tampilan: {
    tosca: "#12A6A0",
    toscaTua: "#0B6560",
    toscaMuda: "#8BE3DD",
    hitam: "#050A0A",
    putih: "#FFFFFF",
    kertas: "#EDF3F2",
    merahToraja: "#B23A2E", // aksen ukiran, dipakai tipis
    kuningToraja: "#D9A441", // aksen ukiran, dipakai tipis
    // Tampilkan ornamen ukiran Toraja di pembatas antarbagian
    ornamenToraja: true,
  },

  /* --- 11. MENU NAVIGASI -------------------------------------------------- */
  menu: [
    { teks: "Tentang", tujuan: "#tentang" },
    { teks: "Kajian", tujuan: "#kajian" },
    { teks: "Karya", tujuan: "#karya" },
    { teks: "Perjalanan", tujuan: "#perjalanan" },
    { teks: "Kontak", tujuan: "#kontak" },
  ],
};
