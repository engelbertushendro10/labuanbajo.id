"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function HeroSection() {
  const [searchTerm, setSearchTerm] = useState("");
  const router = useRouter();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      router.push(`/cek-agen?q=${encodeURIComponent(searchTerm)}`);
    }
  };

  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background dengan gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-blue-700 to-emerald-700" />
      <div className="absolute inset-0 bg-[url('/hero-bg.jpg')] bg-cover bg-center opacity-30" />
      
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 text-center py-20">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
          Liburan Tenang,<br className="md:hidden" /> Agen Terverifikasi.
        </h1>
        <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto">
          Lindungi perjalanan impian Anda di Labuan Bajo. Cek keaslian agen wisata dan pesan dengan aman melalui platform resmi kami.
        </p>

        {/* Search Bar */}
        <form onSubmit={handleSearch} className="bg-white p-2 rounded-xl shadow-lg flex flex-col md:flex-row gap-2 max-w-2xl mx-auto">
          <div className="flex-1 flex items-center px-4 py-3 gap-2">
            <span className="material-symbols-outlined text-gray-400">search</span>
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Masukkan nama agen atau ID verifikasi..."
              className="w-full bg-transparent border-none focus:ring-0 text-gray-700"
            />
          </div>
          <button type="submit" className="bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
            Cek Agen Sekarang
          </button>
        </form>

        {/* Statistik */}
        <div className="flex flex-col md:flex-row justify-center gap-8 mt-12 text-white">
          <div className="text-center">
            <p className="text-3xl font-bold">500+</p>
            <p className="text-sm text-white/80">Agen Terverifikasi</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold">0</p>
            <p className="text-sm text-white/80">Kasus Penipuan</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold">&lt;15 menit</p>
            <p className="text-sm text-white/80">Respon Darurat</p>
          </div>
        </div>
      </div>
    </section>
  );
}