import Link from "next/link";

export default function Sidebar() {
  const menuItems = [
    { label: "Dashboard", icon: "dashboard", href: "/admin" },
    { label: "Paket Wisata", icon: "sailing", href: "/admin/packages" },
    { label: "Agen Terverifikasi", icon: "verified_user", href: "/admin/agents" },
    { label: "Laporan Penipuan", icon: "report", href: "/admin/reports" },
  ];

  return (
    <aside className="stisla-sidebar">
      <div className="p-4 h-[60px] flex items-center justify-center border-b border-gray-100">
        <Link href="/admin" className="text-primary font-bold text-xl tracking-wider">
          STISLA
        </Link>
      </div>
      <div className="mt-4 px-4">
        <div className="text-[10px] font-bold text-gray-400 uppercase mb-2 ml-2">Menu Utama</div>
        <ul className="space-y-1">
          {menuItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="flex items-center gap-4 px-4 py-3 text-on-surface hover:text-primary hover:bg-gray-50 rounded transition-colors group"
              >
                <span className="material-symbols-outlined text-[20px] group-hover:text-primary">
                  {item.icon}
                </span>
                <span className="font-semibold text-[14px]">{item.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
