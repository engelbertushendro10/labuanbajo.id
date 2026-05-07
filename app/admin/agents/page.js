"use client";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import useToast from "@/lib/useToast";

export default function AgentsManagement() {
  const [agents, setAgents] = useState([]);
  const [loading, setLoading] = useState(true);
  const { showToast } = useToast();

  useEffect(() => {
    fetchAgents();
  }, []);

  async function fetchAgents() {
    setLoading(true);
    const { data, error } = await supabase
      .from("agents")
      .select("*")
      .order("name", { ascending: true });
    
    if (error) {
      showToast("Gagal mengambil data agen.", "error");
    } else {
      setAgents(data || []);
    }
    setLoading(false);
  }

  async function toggleVerification(id, currentStatus) {
    const { error } = await supabase
      .from("agents")
      .update({ is_verified: !currentStatus })
      .eq("id", id);
    
    if (error) {
      showToast("Gagal mengupdate status verifikasi.", "error");
    } else {
      showToast(`Agen berhasil ${!currentStatus ? "diverifikasi" : "dibatalkan verifikasinya"}.`);
      fetchAgents();
    }
  }

  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div className="flex flex-col gap-1">
        <h1 className="text-2xl font-bold text-on-surface">Manajemen Agen</h1>
        <div className="flex items-center gap-2 text-xs text-on-surface-variant font-semibold uppercase tracking-wider">
          <span>Admin</span>
          <span className="material-symbols-outlined text-[14px]">chevron_right</span>
          <span className="text-gray-400">Agen Terverifikasi</span>
        </div>
      </div>

      {/* Agents Table Card */}
      <div className="stisla-card overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-100 flex justify-between items-center">
          <h3 className="font-bold text-on-surface text-lg">Daftar Agen Wisata</h3>
          <button 
            onClick={fetchAgents}
            className="text-primary hover:rotate-180 transition-transform duration-500"
          >
            <span className="material-symbols-outlined">refresh</span>
          </button>
        </div>
        <div className="p-0 overflow-x-auto">
          {loading ? (
            <div className="p-20 text-center">
              <div className="inline-block w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
            </div>
          ) : (
            <table className="w-full text-left">
              <thead className="bg-gray-50 text-[11px] uppercase tracking-widest text-gray-400 font-bold border-b border-gray-100">
                <tr>
                  <th className="px-6 py-4">Nama Agen</th>
                  <th className="px-6 py-4">Kontak / Email</th>
                  <th className="px-6 py-4">Lokasi</th>
                  <th className="px-6 py-4">Status</th>
                  <th className="px-6 py-4">Aksi</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 text-sm">
                {agents.length === 0 ? (
                  <tr>
                    <td colSpan="5" className="px-6 py-20 text-center text-gray-400">
                      Belum ada data agen terdaftar.
                    </td>
                  </tr>
                ) : (
                  agents.map((agent) => (
                    <tr key={agent.id} className="hover:bg-gray-50/50 transition-colors">
                      <td className="px-6 py-4 font-bold text-on-surface">
                        {agent.name}
                      </td>
                      <td className="px-6 py-4 text-on-surface-variant">
                        <div>{agent.email || "-"}</div>
                        <div className="text-xs">{agent.phone || "-"}</div>
                      </td>
                      <td className="px-6 py-4 text-on-surface-variant">
                        {agent.location}
                      </td>
                      <td className="px-6 py-4">
                        {agent.is_verified ? (
                          <span className="bg-success text-white text-[10px] px-3 py-1 rounded-full font-bold uppercase tracking-wider">Verified</span>
                        ) : (
                          <span className="bg-secondary text-white text-[10px] px-3 py-1 rounded-full font-bold uppercase tracking-wider">Unverified</span>
                        )}
                      </td>
                      <td className="px-6 py-4">
                        <button 
                          onClick={() => toggleVerification(agent.id, agent.is_verified)}
                          className={`text-xs font-bold px-4 py-1.5 rounded transition-all ${
                            agent.is_verified 
                              ? "bg-danger/10 text-danger hover:bg-danger hover:text-white" 
                              : "bg-success/10 text-success hover:bg-success hover:text-white"
                          }`}
                        >
                          {agent.is_verified ? "Batalkan Verifikasi" : "Verifikasi Sekarang"}
                        </button>
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
