export default function BookingSidebar({ price }) {
  return (
    <div className="sticky top-24 p-6 bg-surface border border-outline-variant rounded-xl shadow-sm">
      <div className="mb-6">
        <p className="text-sm text-on-surface-variant">Mulai dari</p>
        <p className="text-2xl font-bold text-primary">{price} <span className="text-sm font-normal text-on-surface-variant">/ orang</span></p>
      </div>
      <button className="w-full py-4 bg-primary text-white rounded-xl font-bold hover:bg-primary-dark transition-colors mb-4">
        Pesan Sekarang
      </button>
      <button className="w-full py-4 border border-primary text-primary rounded-xl font-bold hover:bg-primary/5 transition-colors">
        Tanya Agen
      </button>
      <p className="text-xs text-center text-on-surface-variant mt-4">
        Bebas biaya pembatalan hingga 24 jam sebelum keberangkatan.
      </p>
    </div>
  );
}
