"use client";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import Link from "next/link";

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
    
    if (error) {
      console.error("Error fetching popular packages:", error);
    } else {
      setPackages(data || []);
    }
    setLoading(false);
  }

  if (loading) return <div className="py-20 text-center text-primary font-bold">Memuat Paket Populer...</div>;
  if (packages.length === 0) return null;

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-end mb-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary">
              Paket Populer
            </h2>
            <p className="text-on-surface-variant mt-2">
              Pilihan terbaik dari agen-agen terverifikasi kami.
            </p>
          </div>
          <Link
            href="/paket"
            className="hidden md:block text-primary font-semibold hover:underline"
          >
            Lihat Semua Paket
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 h-auto md:min-h-[500px]">
          {packages.map((pkg, index) => {
            const isLarge = index === 0;
            return (
              <Link
                key={pkg.id}
                href={`/paket/${pkg.id}`}
                className={`${
                  isLarge ? "md:col-span-7" : "md:col-span-5"
                } relative rounded-xl overflow-hidden group cursor-pointer min-h-[300px]`}
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
                  <h3 className={`${isLarge ? 'text-xl' : 'text-lg'} font-bold text-white mb-1`}>
                    {pkg.title}
                  </h3>
                  <p className="text-white/80 text-sm mb-4">{pkg.subtitle}</p>
                  {isLarge && (
                    <div className="flex justify-between items-center">
                      <span className="text-white font-bold text-lg">
                        {pkg.price}
                        <span className="text-xs font-normal">/pax</span>
                      </span>
                      <span className="bg-white text-primary px-4 py-2 rounded-lg text-sm font-semibold">
                        Detail Paket
                      </span>
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
