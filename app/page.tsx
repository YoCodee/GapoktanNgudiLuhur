import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import StatsSection from "./components/StatsSection";
import AboutSection from "./components/AboutSection";
import VisionMissionSection from "./components/VisionMissionSection";
import TigaPilarSection from "./components/TigaPilarSection";
import DocumentasiSection from "./components/DocumentasiSection";
import LiputanSection from "./components/LiputanSection";
import LocationSection from "./components/LocationSection";
import Footer from "./components/Footer";

export default function HomePage() {
  return (
    <div className="relative min-h-screen bg-[#FAF9F6] text-[#1C3829] selection:bg-[#D4622E] selection:text-white overflow-x-clip">
      {/* Navigation Header */}
      <Navbar />

      {/* Main Content */}
      <main>
        {/* Part 1: Hero Section (Frame 13) */}
        <HeroSection />

        {/* Part 2: Stats Section - Dampak & Capaian (Frame 11) */}
        <StatsSection />

        {/* Part 3: About Section - Tentang Kami (Frame 14) */}
        <AboutSection />

        {/* Part 4: Vision & Mission Section - Visi kami & Misi (Frame 16) */}
        <VisionMissionSection />

        {/* Part 5: Tiga Pilar Utama - Ekosistem Kami (Frame 17) */}
        <TigaPilarSection />

        {/* Part 6: Dokumentasi Kegiatan - Living the Movement (Frame 19) */}
        <DocumentasiSection />

        {/* Part 7: Liputan Media - Kabar dari Ngudi Luhur */}
        <LiputanSection />

        {/* Part 8: Lokasi & Kontak - Siap Bermitra atau Berkunjung? */}
        <LocationSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
