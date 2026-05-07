import { supabase } from "@/lib/supabaseClient";
import AgencyInfo from "@/components/AgencyInfo";
import ItinerarySection from "@/components/ItinerarySection";
import ReviewsSection from "@/components/ReviewsSection";
import BookingSidebar from "@/components/BookingSidebar";

export default async function PackageDetail({ params }) {
  const { id } = await params;
  const { data: pkg, error } = await supabase
    .from("packages")
    .select("*, agents(*)")
    .eq("id", id)
    .single();

  if (error || !pkg) {
    return <div className="text-center py-20">Paket tidak ditemukan</div>;
  }

  return (
    <main className="max-w-7xl mx-auto px-6 py-20">
      {/* Hero Gallery */}
      <section className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-2 h-[300px] md:h-[500px] rounded-xl overflow-hidden mb-8">
        <div className="md:col-span-2 md:row-span-2">
          <img src={pkg.images?.[0] || "/placeholder.jpg"} alt={pkg.title} className="w-full h-full object-cover" />
        </div>
        {/* Thumbnail images */}
        {pkg.images?.slice(1, 5).map((img, i) => (
          <div key={i} className="hidden md:block">
            <img src={img} alt="" className="w-full h-full object-cover" />
          </div>
        ))}
      </section>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left Content */}
        <div className="flex-1 space-y-12">
          {/* Package Header */}
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="bg-green-600 text-white text-xs px-3 py-1 rounded-full flex items-center gap-1">
                ✅ Verified Agency
              </span>
              <span className="text-on-surface-variant text-sm">📍 {pkg.location}</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-primary">{pkg.title}</h1>
            <div className="flex items-center gap-4 mt-2">
              <span className="text-secondary font-semibold">⭐ {pkg.rating}</span>
              <span className="text-on-surface-variant">({pkg.review_count} Reviews)</span>
              <span className="text-on-surface-variant">ID: {pkg.id}</span>
            </div>
          </div>

          {/* Key Highlights */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: "schedule", label: "Duration", value: pkg.duration },
              { icon: "group", label: "Group Size", value: pkg.group_size },
              { icon: "anchor", label: "Meeting Point", value: pkg.location },
              { icon: "fitness_center", label: "Difficulty", value: "Easy - Moderate" },
            ].map((item, i) => (
              <div key={i} className="bg-surface-container-low p-4 rounded-xl flex items-start gap-3">
                <div className="bg-blue-100 p-2 rounded-lg text-primary">
                  <span className="material-symbols-outlined">{item.icon}</span>
                </div>
                <div>
                  <p className="text-xs text-on-surface-variant">{item.label}</p>
                  <p className="font-semibold">{item.value}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Itinerary */}
          <ItinerarySection itinerary={pkg.itinerary} />

          {/* Inclusions & Exclusions */}
          <div className="grid md:grid-cols-2 gap-8 p-8 bg-surface-container-lowest border rounded-xl">
            <div>
              <h4 className="font-bold text-lg mb-4 flex items-center gap-2">
                <span className="text-green-600">✓</span> What's Included
              </h4>
              <ul className="space-y-2 text-on-surface-variant">
                {pkg.included?.map((item, i) => <li key={i}>• {item}</li>)}
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4 flex items-center gap-2">
                <span className="text-red-600">✗</span> Excluded
              </h4>
              <ul className="space-y-2 text-on-surface-variant">
                {pkg.excluded?.map((item, i) => <li key={i}>• {item}</li>)}
              </ul>
            </div>
          </div>

          {/* Agency Info */}
          <AgencyInfo agency={pkg.agents} />

          {/* Reviews */}
          <ReviewsSection packageId={pkg.id} />
        </div>

        {/* Sticky Sidebar */}
        <aside className="w-full lg:w-[380px]">
          <BookingSidebar price={pkg.price} />
        </aside>
      </div>
    </main>
  );
}