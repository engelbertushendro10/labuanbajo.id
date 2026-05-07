import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full py-12 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="md:col-span-2">
          <span className="text-2xl font-bold text-primary block mb-4">🌊 LabuanBajo.id</span>
          <p className="text-sm text-gray-400 max-w-sm mb-6">
            Platform Verifikasi Agen Wisata Resmi. Keamanan Anda adalah prioritas kami dalam mengeksplorasi keindahan timur Indonesia.
          </p>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary transition">
              <span className="material-symbols-outlined">share</span>
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary transition">
              <span className="material-symbols-outlined">mail</span>
            </a>
          </div>
        </div>

        <div>
          <h5 className="font-semibold text-primary mb-4">Tautan Cepat</h5>
          <ul className="space-y-2">
            <li><Link href="/tentang" className="text-sm text-gray-400 hover:text-white">Tentang Kami</Link></li>
            <li><Link href="/bantuan" className="text-sm text-gray-400 hover:text-white">Pusat Bantuan</Link></li>
            <li><Link href="/syarat" className="text-sm text-gray-400 hover:text-white">Syarat & Ketentuan</Link></li>
          </ul>
        </div>

        <div>
          <h5 className="font-semibold text-primary mb-4">Bantuan</h5>
          <ul className="space-y-2">
            <li><Link href="/privacy" className="text-sm text-gray-400 hover:text-white">Kebijakan Privasi</Link></li>
            <li><Link href="/kontak" className="text-sm text-gray-400 hover:text-white">Hubungi Kami</Link></li>
            <li><Link href="/lapor" className="text-sm text-gray-400 hover:text-white">Lapor Kendala</Link></li>
          </ul>
        </div>
      </div>
      <div className="text-center text-gray-500 text-xs mt-12 pt-6 border-t border-gray-800">
        © {new Date().getFullYear()} LabuanBajo.id - All rights reserved.
      </div>
    </footer>
  );
}