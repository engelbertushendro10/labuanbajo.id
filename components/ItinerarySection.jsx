export default function ItinerarySection({ itinerary }) {
  return (
    <div className="space-y-6">
      <h3 className="text-2xl font-bold">Itinerary</h3>
      {itinerary?.length > 0 ? (
        <div className="space-y-4">
          {itinerary.map((item, index) => (
            <div key={index} className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold">
                  {index + 1}
                </div>
                {index !== itinerary.length - 1 && (
                  <div className="w-0.5 h-full bg-outline-variant/30 my-1" />
                )}
              </div>
              <div className="pb-6">
                <h4 className="font-bold">{item.title || `Hari ${index + 1}`}</h4>
                <p className="text-on-surface-variant text-sm mt-1">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-on-surface-variant">Itinerary tidak tersedia.</p>
      )}
    </div>
  );
}
