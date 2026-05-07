"use client";
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-surface/90 backdrop-blur-md shadow-sm">
      <div className="flex justify-between items-center max-w-7xl mx-auto px-6 py-4">
        <Link href="/" className="text-2xl font-bold text-primary">
          🌊 LabuanBajo<span className="text-secondary">.id</span>
        </Link>

        {/* Desktop menu */}
        <div className="hidden md:flex items-center gap-6">
          <Link href="/cek-agen" className="text-primary font-semibold border-b-2 border-primary">Cek Agen</Link>
          <Link href="/lapor" className="text-on-surface-variant hover:text-primary transition">Lapor Penipuan</Link>
          <Link href="/tentang" className="text-on-surface-variant hover:text-primary transition">Tentang</Link>
          <Link href="/kontak" className="text-on-surface-variant hover:text-primary transition">Kontak</Link>
          <button className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">
            Download App
          </button>
        </div>

        {/* Mobile hamburger */}
        <button 
          className="md:hidden p-2"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="material-symbols-outlined text-primary">menu</span>
        </button>
      </div>

      {/* Mobile menu dropdown */}
      {menuOpen && (
        <div className="md:hidden px-6 pb-4 space-y-3 bg-surface border-t border-outline-variant">
          <Link href="/cek-agen" className="block text-primary font-semibold">Cek Agen</Link>
          <Link href="/lapor" className="block text-on-surface-variant">Lapor Penipuan</Link>
          <Link href="/tentang" className="block text-on-surface-variant">Tentang</Link>
          <Link href="/kontak" className="block text-on-surface-variant">Kontak</Link>
        </div>
      )}
    </nav>
  );
}