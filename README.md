# TechnoSprint UAS

Website latihan **UAS Technopreneurship & Smart City** berbasis Next.js yang disusun mengikuti pola soal pilihan ganda studi kasus yang diberikan.

## Fitur Utama

- **60 soal pilihan ganda** dalam bahasa Inggris agar menyerupai pola ujian.
- **Pembahasan bahasa Indonesia** untuk memahami alasan jawaban benar.
- **Latihan Lengkap 50 Soal** dengan feedback langsung.
- **Simulasi UAS 40 Soal acak** dengan timer 45 menit dan pembahasan setelah submit.
- **Latihan Fokus Topik** untuk memperbaiki materi tertentu.
- **Analisis hasil per topik** serta review jawaban benar/salah.
- **Bank Soal** dengan pencarian, filter materi, dan ekspor JSON.
- Layout responsif untuk desktop dan HP, siap deploy di Vercel.

## Topik Soal

1. Pengantar Technopreneurship & Smart City
2. Identifikasi Masalah, Ideasi, dan Value Proposition
3. Business Model Canvas
4. Analisis Pasar dan Model Bisnis Digital
5. Teknologi dan Arsitektur Smart City
6. MVP, Prototyping, dan Validasi
7. Etika dan Legal, termasuk perlindungan data pribadi
8. Pendanaan dan Skalabilitas
9. Business Pitching

## Menjalankan Lokal

Persyaratan: Node.js 20.9 atau lebih baru.

```bash
npm install
npm run dev
```

Buka `http://localhost:3000`.

## Build Production

```bash
npm run lint
npm run build
npm run start
```

## Deploy ke Vercel

1. Upload folder project ini ke repository GitHub.
2. Buka Vercel dan pilih **Add New Project**.
3. Import repository tersebut.
4. Framework akan terdeteksi sebagai **Next.js**.
5. Klik **Deploy** tanpa environment variable tambahan.

## Struktur Penting

```text
app/
  globals.css          Tampilan dan responsive layout
  layout.tsx           Metadata aplikasi
  page.tsx             Halaman utama
components/
  quiz-app.tsx         Seluruh fitur quiz interaktif
lib/
  questions.ts         50 bank soal, kunci, pembahasan
  summaries.ts         Materi ringkas
public/
  bank-soal.json       Ekspor data soal
```

## Rujukan Konsep

- Strategyzer — Business Model Canvas.
- NIST — Smart Cities and Communities Framework.
- UU Republik Indonesia Nomor 27 Tahun 2022 tentang Pelindungan Data Pribadi.
- Contoh soal UAS dan soal kelompok yang diberikan pengguna sebagai pola penyusunan latihan.

## Catatan Penggunaan

Website ini dibuat untuk latihan belajar. Soal latihan tidak menjamin identik dengan soal UAS resmi, sehingga gunakan juga materi perkuliahan sebagai sumber belajar utama.
