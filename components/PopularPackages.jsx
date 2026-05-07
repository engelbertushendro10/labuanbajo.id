import Link from "next/link";

const packages = [
  {
    id: 1,
    title: "Premium Sailing: Phinisi Liveaboard",
    subtitle: "3 Hari 2 Malam Jelajah Pulau Komodo & Pink Beach",
    price: "Rp 4.500.000",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBgFkIOn9Ng3C3ib1bjfKc_USQKPfMPDepwbGZUDOfLGCVOm9FirBvfZJ4M5Jeyt3M4VO8Sw5Ej-MV2d1NZiILookwHfiWGUpn5zKSjVtHTFOQIWRvDeIoAF2Xuc5WltIbalDCpVIO9egUf5uVFbcqfTL-o7hJAtxbNigSo7uyBf5J49GcvY3zy6VCvBESFHUi9ZmwWnGsZ6UkOAFO5Z1oWa8zOzPt4u-e2MN1T35ts5a7FPFdwWtbxB4eUMc4XYsecTVFX3z7agG8",
    size: "large",
  },
  {
    id: 2,
    title: "One Day Trip Speedboat",
    subtitle: "6 Destinasi dalam 1 hari penuh",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBW3LWF2ePxbOdKxCYpZ2mV3mued90PPnDZ3P0d1e_i9ji00t0AFflmRjgtt6blopSxIeWyTE52KCf9JFK8QgnxvprwElkOhYYiYWTghA9O0fcVbgI4iPJz8YAwnJ3-RKN871EIgkUYKm8NjAsuP-XKJNTRJ4cQpZhxrypPn3iUDprIoHPD3uKdOJEdOvFMbPS8OV_iOf4z-MysfMUHPHoC2WYfZTkryVk9q1A3Z7elTJKW-6Hsab-UCPwX5GfyTS-SCh6UJeFC22U",
    size: "small",
  },
  {
    id: 3,
    title: "Wildlife Safari Adventure",
    subtitle: "Eksplorasi Komodo & Rinca Island",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB5M_ua5m2eBaAUaglPfLNCA0ca_2HZILpR-PhLqfrfwwGjHm5xF8ZLqaH9Jr2BISJfW3ti7DhLwEd9e6O51kXgxpspmThPLrznhfNzV_zIGNH4ZzDgBy5w33qvK3MSNzsVGvY0rA5uIUbv3LaRQR2XxJJDKWRkjrUw_k53E_ha-MKMuaPiKYVNeHpF05dO5ZYk5WhoO4ffnQPL8EqYA1Jr1WtfsdIxs7qfu9LH8c4knzRi4zs6La7siWp4aF1RXIOh3r5IQbEjJ9g",
    size: "small",
  },
];

export default function PopularPackages() {
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

        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 h-auto md:h-[500px]">
          {packages.map((pkg, index) => {
            if (pkg.size === "large") {
              return (
                <Link
                  key={pkg.id}
                  href={`/paket/${pkg.id}`}
                  className="md:col-span-7 relative rounded-xl overflow-hidden group cursor-pointer"
                >
                  <img
                    src={pkg.image}
                    alt={pkg.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-6">
                    <span className="inline-flex items-center gap-1 bg-green-500 text-white text-xs px-3 py-1 rounded-full w-fit mb-2">
                      ✅ Verified Agent
                    </span>
                    <h3 className="text-xl font-bold text-white mb-1">
                      {pkg.title}
                    </h3>
                    <p className="text-white/80 text-sm mb-4">{pkg.subtitle}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-white font-bold text-lg">
                        {pkg.price}
                        <span className="text-xs font-normal">/pax</span>
                      </span>
                      <span className="bg-white text-primary px-4 py-2 rounded-lg text-sm font-semibold">
                        Detail Paket
                      </span>
                    </div>
                  </div>
                </Link>
              );
            }
            return (
              <Link
                key={pkg.id}
                href={`/paket/${pkg.id}`}
                className={`relative rounded-xl overflow-hidden group cursor-pointer ${
                  index === 1 ? "md:col-span-5" : "md:col-span-5"
                }`}
              >
                <img
                  src={pkg.image}
                  alt={pkg.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-4">
                  <h4 className="text-white font-bold text-lg">{pkg.title}</h4>
                  <p className="text-white/80 text-xs">{pkg.subtitle}</p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}