"use client";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import Link from "next/link";

export default function AdminDashboard() {
  const [stats, setStats] = useState([
    { label: "Total Paket", value: "0", icon: "sailing", color: "bg-primary" },
    { label: "Agen Terdaftar", value: "0", icon: "verified_user", color: "bg-success" },
    { label: "Laporan Baru", value: "0", icon: "report", color: "bg-danger" },
    { label: "Total Views", value: "1.2k", icon: "visibility", color: "bg-primary-dark" },
  ]);
  const [recentPackages, setRecentPackages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchDashboardData();
  }, []);

  async function fetchDashboardData() {
    setLoading(true);
    
    const { count: pkgCount } = await supabase.from("packages").select("*", { count: 'exact', head: true });
    const { count: agentCount } = await supabase.from("agents").select("*", { count: 'exact', head: true });
    
    const { data: recent } = await supabase
      .from("packages")
      .select("*, agents(name)")
      .order("id", { ascending: false })
      .limit(5);

    setStats([
      { label: "Total Paket", value: pkgCount || "0", icon: "sailing", color: "bg-primary" },
      { label: "Agen Terdaftar", value: agentCount || "0", icon: "verified_user", color: "bg-success" },
      { label: "Laporan Baru", value: "0", icon: "report", color: "bg-danger" },
      { label: "Total Views", value: "1.2k", icon: "visibility", color: "bg-primary-dark" },
    ]);
    
    setRecentPackages(recent || []);
    setLoading(false);
  }

  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div className="flex flex-col gap-1">
        <h1 className="text-2xl font-bold text-on-surface">Dashboard</h1>
        <div className="flex items-center gap-2 text-xs text-on-surface-variant font-semibold uppercase tracking-wider">
          <span>Dashboard</span>
          <span className="material-symbols-outlined text-[14px]">chevron_right</span>
          <span className="text-gray-400">Overview</span>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <div key={i} className="stisla-card p-6 flex items-center gap-6">
            <div className={`w-14 h-14 rounded-full ${stat.color} text-white flex items-center justify-center shadow-lg shadow-gray-200`}>
              <span className="material-symbols-outlined text-[30px]">{stat.icon}</span>
            </div>
            <div>
              <p className="text-[11px] font-bold text-gray-400 uppercase tracking-widest leading-none mb-1">{stat.label}</p>
              <p className="text-xl font-bold text-on-surface">{stat.value}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Recent Packages Card */}
      <div className="stisla-card overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-100 flex justify-between items-center">
          <h3 className="font-bold text-on-surface">Paket Wisata Terbaru</h3>
          <Link href="/admin/packages" className="text-xs bg-primary text-white px-4 py-1.5 rounded-full font-bold hover:bg-primary-dark transition-colors">
            Lihat Semua
          </Link>
        </div>
        <div className="p-0 overflow-x-auto">
          {loading ? (
            <div className="p-10 text-center text-gray-400">Loading data...</div>
          ) : (
            <table className="w-full text-left">
              <thead className="bg-gray-50 text-[11px] uppercase tracking-widest text-gray-400 font-bold">
                <tr>
                  <th className="px-6 py-4">Nama Paket</th>
                  <th className="px-6 py-4">Agen</th>
                  <th className="px-6 py-4">Harga</th>
                  <th className="px-6 py-4">Aksi</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 text-sm">
                {recentPackages.map((pkg) => (
                  <tr key={pkg.id} className="hover:bg-gray-50/50 transition-colors">
                    <td className="px-6 py-4 font-semibold">{pkg.title}</td>
                    <td className="px-6 py-4 text-on-surface-variant">{pkg.agents?.name}</td>
                    <td className="px-6 py-4 font-bold text-primary">{pkg.price}</td>
                    <td className="px-6 py-4">
                      <Link href={`/admin/packages/edit/${pkg.id}`} className="text-primary hover:underline font-bold text-xs">Edit</Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
}
