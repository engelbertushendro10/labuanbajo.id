"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { href: "/", label: "Beranda" },
    { href: "/cek-agen", label: "Cek Agen" },
    { href: "/lapor", label: "Lapor Penipuan" },
    { href: "/tentang", label: "Tentang" },
    { href: "/kontak", label: "Kontak" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md shadow-sm">
      <div className="flex justify-between items-center max-w-7xl mx-auto px-6 py-4">
        <Link href="/" className="text-2xl font-bold text-primary">
          🌊 LabuanBajo<span className="text-secondary">.id</span>
        </Link>

        {/* Desktop menu */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`${pathname === link.href ? "text-primary font-bold border-b-2 border-primary" : "text-gray-700 hover:text-primary"} transition`}
            >
              {link.label}
            </Link>
          ))}
          <button className="bg-primary text-white px-6 py-2 rounded-full hover:bg-blue-700 transition shadow-md">
            Download App
          </button>
        </div>

        {/* Mobile button */}
        <button className="md:hidden p-2" onClick={() => setMenuOpen(!menuOpen)}>
          <span className="material-symbols-outlined text-primary">menu</span>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden px-6 pb-4 space-y-3 bg-white border-t border-gray-100">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`block ${pathname === link.href ? "text-primary font-semibold" : "text-gray-700"}`}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}