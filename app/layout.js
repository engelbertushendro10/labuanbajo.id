// app/layout.js
import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MobileFAB from "@/components/MobileFAB";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "LabuanBajo.id - Verifikasi Agen Wisata Resmi",
  description: "Platform verifikasi agen wisata di Labuan Bajo. Cek keaslian agen, booking paket wisata dengan aman.",
  keywords: "travel labuan bajo, agen wisata terverifikasi, booking paket wisata, pulau komodo",
  openGraph: {
    title: "LabuanBajo.id - Wisata Aman & Terverifikasi",
    description: "Cari agen wisata resmi di Labuan Bajo, booking paket, dan lindungi perjalanan Anda.",
    url: "https://labuanbajo.id",
    siteName: "LabuanBajo.id",
    images: [{ url: "https://labuanbajo.id/og-image.jpg", width: 1200, height: 630 }],
    locale: "id_ID",
    type: "website",
  },
  alternates: {
    canonical: "https://labuanbajo.id",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body className={inter.className}>
        <Navbar />
        <main className="pt-16">{children}</main>
        <MobileFAB />
        <Footer />
      </body>
    </html>
  );
}