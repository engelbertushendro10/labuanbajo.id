export default function AgencyInfo({ agency }) {
  return (
    <div className="p-6 bg-surface-container-low rounded-xl">
      <h3 className="text-xl font-bold mb-4">Informasi Agen</h3>
      {agency ? (
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
            <span className="material-symbols-outlined">person</span>
          </div>
          <div>
            <p className="font-bold">{agency.name}</p>
            <p className="text-sm text-on-surface-variant">{agency.location}</p>
          </div>
        </div>
      ) : (
        <p className="text-on-surface-variant">Informasi agen tidak tersedia.</p>
      )}
    </div>
  );
}
