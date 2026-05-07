"use client";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import Link from "next/link";

export default function PackagesManagement() {
  const [packages, setPackages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPackages();
  }, []);

  async function fetchPackages() {
    setLoading(true);
    const { data, error } = await supabase
      .from("packages")
      .select("*, agents(name)");
    
    if (error) {
      console.error("Error fetching packages:", error);
    } else {
      setPackages(data || []);
    }
    setLoading(false);
  }

  async function deletePackage(id) {
    if (confirm("Apakah Anda yakin ingin menghapus paket ini?")) {
      const { error } = await supabase
        .from("packages")
        .delete()
        .eq("id", id);
      
      if (error) {
        alert("Gagal menghapus paket.");
      } else {
        fetchPackages();
      }
    }
  }

  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex flex-col gap-1">
          <h1 className="text-2xl font-bold text-on-surface">Manajemen Paket Wisata</h1>
          <div className="flex items-center gap-2 text-xs text-on-surface-variant font-semibold uppercase tracking-wider">
            <span>Admin</span>
            <span className="material-symbols-outlined text-[14px]">chevron_right</span>
            <span className="text-gray-400">Paket Wisata</span>
          </div>
        </div>
        <Link 
          href="/admin/packages/create" 
          className="bg-primary text-white px-6 py-2.5 rounded-full font-bold shadow-lg shadow-primary/20 hover:bg-primary-dark transition-all flex items-center gap-2 w-fit"
        >
          <span className="material-symbols-outlined text-[20px]">add</span>
          Tambah Paket Baru
        </Link>
      </div>

      {/* Packages Table Card */}
      <div className="stisla-card overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-100">
          <h3 className="font-bold text-on-surface text-lg">Daftar Paket</h3>
        </div>
        <div className="p-0 overflow-x-auto">
          {loading ? (
            <div className="p-20 text-center">
              <div className="inline-block w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
              <p className="mt-4 text-gray-500 font-semibold">Memuat data paket...</p>
            </div>
          ) : (
            <table className="w-full text-left">
              <thead className="bg-gray-50 text-[11px] uppercase tracking-widest text-gray-400 font-bold border-b border-gray-100">
                <tr>
                  <th className="px-6 py-4">Paket & Agen</th>
                  <th className="px-6 py-4">Lokasi</th>
                  <th className="px-6 py-4">Harga</th>
                  <th className="px-6 py-4">Durasi</th>
                  <th className="px-6 py-4">Aksi</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 text-sm">
                {packages.length === 0 ? (
                  <tr>
                    <td colSpan="5" className="px-6 py-20 text-center text-gray-400">
                      Belum ada data paket wisata.
                    </td>
                  </tr>
                ) : (
                  packages.map((pkg) => (
                    <tr key={pkg.id} className="hover:bg-gray-50/50 transition-colors">
                      <td className="px-6 py-4">
                        <div className="font-bold text-on-surface">{pkg.title}</div>
                        <div className="text-xs text-on-surface-variant flex items-center gap-1 mt-0.5">
                          <span className="material-symbols-outlined text-[14px] text-green-600">verified</span>
                          {pkg.agents?.name || "No Agent"}
                        </div>
                      </td>
                      <td className="px-6 py-4 text-on-surface-variant">
                        <div className="flex items-center gap-1">
                          <span className="material-symbols-outlined text-[16px]">location_on</span>
                          {pkg.location}
                        </div>
                      </td>
                      <td className="px-6 py-4 font-bold text-primary">
                        {pkg.price}
                      </td>
                      <td className="px-6 py-4 text-on-surface-variant">
                        {pkg.duration}
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          <Link 
                            href={`/admin/packages/edit/${pkg.id}`}
                            className="bg-primary/10 text-primary p-2 rounded hover:bg-primary hover:text-white transition-all flex items-center justify-center"
                            title="Edit"
                          >
                            <span className="material-symbols-outlined text-[18px]">edit</span>
                          </Link>
                          <button 
                            onClick={() => deletePackage(pkg.id)}
                            className="bg-danger/10 text-danger p-2 rounded hover:bg-danger hover:text-white transition-all flex items-center justify-center"
                            title="Hapus"
                          >
                            <span className="material-symbols-outlined text-[18px]">delete</span>
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
}
