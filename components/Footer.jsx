import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full py-20 bg-surface-container-lowest border-t border-outline-variant">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="md:col-span-2">
          <span className="text-2xl font-bold text-primary block mb-4">
            🌊 LabuanBajo.id
          </span>
          <p className="text-sm text-on-surface-variant max-w-sm mb-6">
            © {new Date().getFullYear()} LabuanBajo.id - Platform Verifikasi Agen Wisata Resmi.
            Keamanan Anda adalah prioritas kami dalam mengeksplorasi keindahan timur Indonesia.
          </p>
          <div className="flex gap-4">
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all"
            >
              <span className="material-symbols-outlined">share</span>
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all"
            >
              <span className="material-symbols-outlined">mail</span>
            </a>
          </div>
        </div>

        <div>
          <h5 className="font-semibold text-primary mb-4">Tautan Cepat</h5>
          <ul className="space-y-2">
            <li>
              <Link href="/tentang" className="text-sm text-on-surface-variant hover:text-primary hover:underline">
                Tentang Kami
              </Link>
            </li>
            <li>
              <Link href="/bantuan" className="text-sm text-on-surface-variant hover:text-primary hover:underline">
                Pusat Bantuan
              </Link>
            </li>
            <li>
              <Link href="/syarat" className="text-sm text-on-surface-variant hover:text-primary hover:underline">
                Syarat & Ketentuan
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h5 className="font-semibold text-primary mb-4">Bantuan</h5>
          <ul className="space-y-2">
            <li>
              <Link href="/privacy" className="text-sm text-on-surface-variant hover:text-primary hover:underline">
                Kebijakan Privasi
              </Link>
            </li>
            <li>
              <Link href="/kontak" className="text-sm text-on-surface-variant hover:text-primary hover:underline">
                Hubungi Kami
              </Link>
            </li>
            <li>
              <Link href="/lapor" className="text-sm text-on-surface-variant hover:text-primary hover:underline">
                Lapor Kendala
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}