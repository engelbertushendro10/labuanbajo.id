// app/paket/[id]/page.js
export async function generateMetadata({ params }) {
  const { data: pkg } = await supabase.from("packages").select("*").eq("id", params.id).single();
  return {
    title: `${pkg?.title} - Paket Wisata Labuan Bajo`,
    description: pkg?.subtitle,
  };
}