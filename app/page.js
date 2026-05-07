import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeatureCards from "@/components/FeatureCards";
import HowItWorks from "@/components/HowItWorks";
import PopularPackages from "@/components/PopularPackages";
import Footer from "@/components/Footer";
import MobileFAB from "@/components/MobileFAB";

export default function Home() {
  return (
    <main className="min-h-screen bg-surface">
      <Navbar />
      <HeroSection />
      <FeatureCards />
      <HowItWorks />
      <PopularPackages />
      <Footer />
      <MobileFAB />
    </main>
  );
}