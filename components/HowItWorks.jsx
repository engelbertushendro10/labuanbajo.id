const steps = [
  { number: "1", title: "Cari Agen", description: "Masukkan nama agen di kolom pencarian." },
  { number: "2", title: "Lihat Status", description: "Pastikan label 'Verified' muncul di profil mereka." },
  { number: "3", title: "Transaksi Aman", description: "Gunakan kanal pembayaran resmi yang disediakan." },
  { number: "4", title: "Nikmati Wisata", description: "Berlayar dengan tenang bersama agen terpercaya." },
];

export default function HowItWorks() {
  return (
    <section className="py-20 bg-surface-container-low relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary">Cara Kerja Verifikasi</h2>
          <p className="text-on-surface-variant mt-2">Langkah mudah untuk perjalanan yang lebih aman</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center text-2xl font-bold mb-4 z-10">
                {step.number}
              </div>
              <h4 className="text-lg font-bold mb-2">{step.title}</h4>
              <p className="text-sm text-on-surface-variant">{step.description}</p>
            </div>
          ))}
          {/* Garis penghubung desktop */}
          <div className="hidden md:block absolute top-8 left-[12%] right-[12%] h-0.5 border-t-2 border-dashed border-primary/30 z-0" />
        </div>
      </div>
    </section>
  );
}