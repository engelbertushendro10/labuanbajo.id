"use client";
import { useRouter } from "next/navigation";

export default function MobileFAB() {
  const router = useRouter();

  return (
    <button
      onClick={() => router.push("/cek-agen")}
      className="md:hidden fixed bottom-6 right-6 w-14 h-14 bg-primary text-white rounded-full shadow-lg flex items-center justify-center z-40 active:scale-95 transition-transform"
      aria-label="Cek Agen"
    >
      <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
        search
      </span>
    </button>
  );
}