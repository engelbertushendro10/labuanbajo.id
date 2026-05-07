export default function ReviewsSection({ packageId }) {
  return (
    <div className="space-y-6">
      <h3 className="text-2xl font-bold">Ulasan Pengunjung</h3>
      <div className="p-8 bg-surface-container-low rounded-xl text-center">
        <p className="text-on-surface-variant">Belum ada ulasan untuk paket ini.</p>
      </div>
    </div>
  );
}
