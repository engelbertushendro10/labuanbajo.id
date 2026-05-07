const features = [
  { icon: "verified_user", title: "Verifikasi Resmi", description: "Basis data agen yang telah divalidasi langsung oleh otoritas pariwisata daerah.", bgColor: "bg-green-100", textColor: "text-green-800" },
  { icon: "payments", title: "Booking Aman", description: "Sistem pembayaran terproteksi yang menjamin dana Anda aman hingga perjalanan selesai.", bgColor: "bg-blue-100", textColor: "text-blue-800" },
  { icon: "report", title: "Lapor Kendala", description: "Saluran darurat untuk melaporkan indikasi penipuan atau layanan tidak sesuai standar.", bgColor: "bg-red-100", textColor: "text-red-800" },
];

export default function FeatureCards() {
  return (
    <section className="py-20 bg-surface">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary">Kenapa Memilih Kami?</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <div key={idx} className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
              <div className={`w-14 h-14 ${feature.bgColor} ${feature.textColor} flex items-center justify-center rounded-xl mb-4`}>
                <span className="material-symbols-outlined text-2xl">{feature.icon}</span>
              </div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}