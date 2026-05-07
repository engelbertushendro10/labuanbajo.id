const features = [
  {
    icon: "verified_user",
    title: "Verifikasi Resmi",
    description: "Basis data agen yang telah divalidasi langsung oleh otoritas pariwisata daerah.",
    bgColor: "bg-green-100",
    textColor: "text-green-800",
  },
  {
    icon: "payments",
    title: "Booking Aman",
    description: "Sistem pembayaran terproteksi yang menjamin dana Anda aman hingga perjalanan selesai.",
    bgColor: "bg-blue-100",
    textColor: "text-blue-800",
  },
  {
    icon: "report",
    title: "Lapor Kendala",
    description: "Saluran darurat untuk melaporkan indikasi penipuan atau layanan tidak sesuai standar.",
    bgColor: "bg-red-100",
    textColor: "text-red-800",
  },
];

export default function FeatureCards() {
  return (
    <section className="py-20 bg-surface">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-surface-container-low p-8 rounded-xl shadow-sm border border-outline-variant/30 hover:shadow-md transition-shadow">
              <div className={`w-12 h-12 ${feature.bgColor} ${feature.textColor} flex items-center justify-center rounded-lg mb-4`}>
                <span className="material-symbols-outlined">{feature.icon}</span>
              </div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-on-surface-variant">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}