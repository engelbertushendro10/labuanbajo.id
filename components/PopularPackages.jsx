"use client";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import Link from "next/link";
import Image from "next/image";

export default function PopularPackages() {
  const [packages, setPackages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPopularPackages();
  }, []);

  async function fetchPopularPackages() {
    setLoading(true);
    const { data, error } = await supabase
      .from("packages")
      .select("*")
      .eq("is_popular", true)
      .limit(3);
    
    if (error) console.error(error);
    else setPackages(data || []);
    setLoading(false);
  }

  if (loading) {
    return (
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-200 rounded w-48 mb-10"></div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[1,2,3].map(i => <div key={i} className="h-64 bg-gray-200 rounded-xl"></div>)}
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (packages.length === 0) return null;

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-end mb-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary">Paket Populer</h2>
            <p className="text-gray-600 mt-2">Pilihan terbaik dari agen-agen terverifikasi kami.</p>
          </div>
          <Link href="/paket" className="hidden md:block text-primary font-semibold hover:underline">Lihat Semua Paket →</Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          {packages.map((pkg, index) => {
            const isLarge = index === 0;
            return (
              <Link
                key={pkg.id}
                href={`/paket/${pkg.id}`}
                className={`${isLarge ? "md:col-span-7" : "md:col-span-5"} relative rounded-2xl overflow-hidden group cursor-pointer min-h-[300px] shadow-lg`}
              >
                <img
                  src={pkg.images?.[0] || "/placeholder.jpg"}
                  alt={pkg.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${isLarge ? 'from-black/80 via-transparent' : 'from-black/70'} to-transparent flex flex-col justify-end p-6`}>
                  {isLarge && (
                    <span className="inline-flex items-center gap-1 bg-green-500 text-white text-xs px-3 py-1 rounded-full w-fit mb-2 font-bold">
                      ✅ Verified Agent
                    </span>
                  )}
                  <h3 className={`${isLarge ? 'text-2xl' : 'text-lg'} font-bold text-white mb-1`}>{pkg.title}</h3>
                  <p className="text-white/80 text-sm mb-4">{pkg.subtitle}</p>
                  {isLarge && (
                    <div className="flex justify-between items-center">
                      <span className="text-white font-bold text-lg">{pkg.price} <span className="text-xs">/pax</span></span>
                      <span className="bg-white text-primary px-4 py-2 rounded-lg text-sm font-semibold">Detail Paket</span>
                    </div>
                  )}
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}