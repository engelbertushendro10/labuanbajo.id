"use client";
import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabaseClient";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function CreatePackage() {
  const router = useRouter();
  const [agents, setAgents] = useState([]);
  const [loading, setLoading] = useState(false);
  
  const [formData, setFormData] = useState({
    title: "",
    subtitle: "",
    agent_id: "",
    location: "Labuan Bajo",
    price: "Rp 0",
    duration: "3 Hari 2 Malam",
    group_size: "10-15 Orang",
    rating: 5,
    review_count: 0,
    is_popular: false,
    images: [""],
    itinerary: [{ title: "", description: "" }],
    included: [""],
    excluded: [""]
  });

  useEffect(() => {
    fetchAgents();
  }, []);

  async function fetchAgents() {
    const { data } = await supabase.from("agents").select("id, name");
    setAgents(data || []);
    if (data?.length > 0) setFormData(prev => ({ ...prev, agent_id: data[0].id }));
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const { error } = await supabase.from("packages").insert([formData]);

    if (error) {
      alert("Gagal menyimpan paket: " + error.message);
    } else {
      router.push("/admin/packages");
    }
    setLoading(false);
  };

  const addItem = (field, defaultValue) => {
    setFormData({ ...formData, [field]: [...formData[field], defaultValue] });
  };

  const removeItem = (field, index) => {
    const newList = [...formData[field]];
    newList.splice(index, 1);
    setFormData({ ...formData, [field]: newList });
  };

  const updateItem = (field, index, value, key = null) => {
    const newList = [...formData[field]];
    if (key) {
      newList[index][key] = value;
    } else {
      newList[index] = value;
    }
    setFormData({ ...formData, [field]: newList });
  };

  return (
    <div className="space-y-8">
      <div className="flex flex-col gap-1">
        <h1 className="text-2xl font-bold text-on-surface">Tambah Paket Baru</h1>
        <div className="flex items-center gap-2 text-xs text-on-surface-variant font-semibold uppercase tracking-wider">
          <span>Admin</span>
          <span className="material-symbols-outlined text-[14px]">chevron_right</span>
          <span>Paket Wisata</span>
          <span className="material-symbols-outlined text-[14px]">chevron_right</span>
          <span className="text-gray-400">Create</span>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Main Info Card */}
        <div className="lg:col-span-8 space-y-8">
          <div className="stisla-card">
            <div className="px-6 py-4 border-b border-gray-100">
              <h3 className="font-bold text-on-surface">Informasi Dasar</h3>
            </div>
            <div className="p-6 space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="md:col-span-2">
                  <label className="block text-sm font-bold text-on-surface mb-2">Judul Paket</label>
                  <input 
                    type="text" 
                    required
                    className="w-full border-gray-200 rounded-md focus:ring-primary focus:border-primary text-sm"
                    value={formData.title}
                    onChange={e => setFormData({ ...formData, title: e.target.value })}
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-bold text-on-surface mb-2">Subtitle / Deskripsi Singkat</label>
                  <input 
                    type="text" 
                    className="w-full border-gray-200 rounded-md focus:ring-primary focus:border-primary text-sm"
                    value={formData.subtitle}
                    onChange={e => setFormData({ ...formData, subtitle: e.target.value })}
                    placeholder="Contoh: 3 Hari 2 Malam Jelajah Pulau Komodo"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-bold text-on-surface mb-2">Agen</label>
                  <select 
                    className="w-full border-gray-200 rounded-md focus:ring-primary focus:border-primary text-sm"
                    value={formData.agent_id}
                    onChange={e => setFormData({ ...formData, agent_id: e.target.value })}
                  >
                    {agents.map(a => <option key={a.id} value={a.id}>{a.name}</option>)}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-bold text-on-surface mb-2">Lokasi</label>
                  <input 
                    type="text" 
                    className="w-full border-gray-200 rounded-md focus:ring-primary focus:border-primary text-sm"
                    value={formData.location}
                    onChange={e => setFormData({ ...formData, location: e.target.value })}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-bold text-on-surface mb-2">Harga</label>
                  <input 
                    type="text" 
                    className="w-full border-gray-200 rounded-md focus:ring-primary focus:border-primary text-sm"
                    value={formData.price}
                    onChange={e => setFormData({ ...formData, price: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-on-surface mb-2">Durasi</label>
                  <input 
                    type="text" 
                    className="w-full border-gray-200 rounded-md focus:ring-primary focus:border-primary text-sm"
                    value={formData.duration}
                    onChange={e => setFormData({ ...formData, duration: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-on-surface mb-2">Kapasitas</label>
                  <input 
                    type="text" 
                    className="w-full border-gray-200 rounded-md focus:ring-primary focus:border-primary text-sm"
                    value={formData.group_size}
                    onChange={e => setFormData({ ...formData, group_size: e.target.value })}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Itinerary Section */}
          <div className="stisla-card">
            <div className="px-6 py-4 border-b border-gray-100 flex justify-between items-center">
              <h3 className="font-bold text-on-surface">Itinerary</h3>
              <button 
                type="button"
                onClick={() => addItem("itinerary", { title: "", description: "" })}
                className="text-primary text-xs font-bold flex items-center gap-1"
              >
                <span className="material-symbols-outlined text-[14px]">add</span>
                Tambah Hari
              </button>
            </div>
            <div className="p-6 space-y-4">
              {formData.itinerary.map((item, index) => (
                <div key={index} className="p-4 bg-gray-50 rounded-lg relative group">
                  <button 
                    type="button"
                    onClick={() => removeItem("itinerary", index)}
                    className="absolute -top-2 -right-2 w-6 h-6 bg-danger text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <span className="material-symbols-outlined text-[14px]">close</span>
                  </button>
                  <div className="space-y-3">
                    <input 
                      placeholder="Judul Hari (misal: Hari 1: Kedatangan)"
                      className="w-full border-gray-200 rounded-md text-sm"
                      value={item.title}
                      onChange={e => updateItem("itinerary", index, e.target.value, "title")}
                    />
                    <textarea 
                      placeholder="Deskripsi kegiatan..."
                      rows="3"
                      className="w-full border-gray-200 rounded-md text-sm"
                      value={item.description}
                      onChange={e => updateItem("itinerary", index, e.target.value, "description")}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar Cards */}
        <div className="lg:col-span-4 space-y-8">
          {/* Images Section */}
          <div className="stisla-card">
            <div className="px-6 py-4 border-b border-gray-100 flex justify-between items-center">
              <h3 className="font-bold text-on-surface text-sm">Media / Images</h3>
              <button 
                type="button"
                onClick={() => addItem("images", "")}
                className="text-primary text-xs font-bold"
              >
                Tambah
              </button>
            </div>
            <div className="p-6 space-y-3">
              {formData.images.map((img, index) => (
                <div key={index} className="flex gap-2">
                  <input 
                    placeholder="URL Gambar"
                    className="flex-1 border-gray-200 rounded-md text-xs"
                    value={img}
                    onChange={e => updateItem("images", index, e.target.value)}
                  />
                  {formData.images.length > 1 && (
                    <button type="button" onClick={() => removeItem("images", index)} className="text-danger">
                      <span className="material-symbols-outlined text-[20px]">delete</span>
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Included / Excluded */}
          <div className="stisla-card">
            <div className="px-6 py-4 border-b border-gray-100">
              <h3 className="font-bold text-on-surface text-sm">Fasilitas & Layanan</h3>
            </div>
            <div className="p-6 space-y-6">
              <div>
                <div className="flex justify-between mb-2">
                  <label className="text-xs font-bold text-success uppercase">Included</label>
                  <button type="button" onClick={() => addItem("included", "")} className="text-primary text-[10px] font-bold">ADD</button>
                </div>
                <div className="space-y-2">
                  {formData.included.map((item, index) => (
                    <input key={index} className="w-full border-gray-200 rounded-md text-xs" value={item} onChange={e => updateItem("included", index, e.target.value)} />
                  ))}
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <label className="text-xs font-bold text-danger uppercase">Excluded</label>
                  <button type="button" onClick={() => addItem("excluded", "")} className="text-primary text-[10px] font-bold">ADD</button>
                </div>
                <div className="space-y-2">
                  {formData.excluded.map((item, index) => (
                    <input key={index} className="w-full border-gray-200 rounded-md text-xs" value={item} onChange={e => updateItem("excluded", index, e.target.value)} />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col gap-3">
            <button 
              type="submit"
              disabled={loading}
              className="w-full bg-primary text-white py-3 rounded-md font-bold shadow-lg shadow-primary/20 hover:bg-primary-dark transition-all disabled:opacity-50"
            >
              {loading ? "Menyimpan..." : "Simpan Paket"}
            </button>
            <Link 
              href="/admin/packages"
              className="w-full bg-white text-on-surface-variant text-center py-3 rounded-md font-bold border border-gray-200 hover:bg-gray-50 transition-all"
            >
              Batal
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
}
