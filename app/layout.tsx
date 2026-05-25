import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TechnoSprint UAS | Latihan Technopreneurship Smart City",
  description:
    "Website latihan UAS Technopreneurship dan Smart City dengan 60 soal, simulasi 40 soal, pembahasan, serta analisis hasil per topik.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}
