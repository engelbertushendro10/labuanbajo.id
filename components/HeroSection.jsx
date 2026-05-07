"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion"; // tambahkan animasi

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
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-700 to-emerald-800" />
      <div className="absolute inset-0 bg-[url('/hero-bg.jpg')] bg-cover bg-center opacity-20" />
      
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 w-full max-w-7xl mx-auto px-6 text-center py-20"
      >
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-tight">
          Liburan Tenang,<br className="md:hidden" /> 
          <span className="text-yellow-300">Agen Terverifikasi.</span>
        </h1>
        <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto">
          Lindungi perjalanan impian Anda di Labuan Bajo. Cek keaslian agen wisata dan pesan dengan aman melalui platform resmi kami.
        </p>

        <form onSubmit={handleSearch} className="bg-white p-2 rounded-2xl shadow-2xl flex flex-col md:flex-row gap-2 max-w-2xl mx-auto">
          <div className="flex-1 flex items-center px-4 py-3 gap-2">
            <span className="material-symbols-outlined text-gray-400">search</span>
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Masukkan nama agen atau ID verifikasi..."
              className="w-full bg-transparent focus:outline-none text-gray-700"
            />
          </div>
          <button type="submit" className="bg-primary text-white px-8 py-3 rounded-xl font-semibold hover:bg-blue-700 transition transform hover:scale-105">
            Cek Agen Sekarang
          </button>
        </form>

        <div className="flex flex-col md:flex-row justify-center gap-8 mt-16 text-white">
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
      </motion.div>
    </section>
  );
}