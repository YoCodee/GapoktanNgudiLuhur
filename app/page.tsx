import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import StatsSection from "./components/StatsSection";
import AboutSection from "./components/AboutSection";
import VisionMissionSection from "./components/VisionMissionSection";

export default function HomePage() {
  return (
    <div className="relative min-h-screen bg-[#FAF9F6] text-[#1C3829] selection:bg-[#D4622E] selection:text-white">
      {/* Navigation Header */}
      <Navbar />

      {/* Main Content exactly matching public/design/full/Desktop - 3.png */}
      <main>
        {/* Part 1: Hero Section (Frame 13) */}
        <HeroSection />

        {/* Part 2: Stats Section - Dampak & Capaian (Frame 11) */}
        <StatsSection />

        {/* Part 3: About Section - Tentang Kami (Frame 14) */}
        <AboutSection />

        {/* Part 4: Vision & Mission Section - Visi kami & Misi (Frame 16) */}
        <VisionMissionSection />
      </main>
    </div>
  );
}
