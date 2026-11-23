import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroEkspor from "../components/ekspor/HeroEkspor";
import AboutEkspor from "../components/ekspor/AboutEkspor";
import AlurEkspor from "../components/ekspor/AlurEkspor";
import JangkauanEkspor from "../components/ekspor/JangkauanEkspor";
import KerjasamaEkspor from "../components/ekspor/KerjasamaEkspor";

export const metadata = {
  title: "Giat Ekspor | Gapoktan Ngudi Luhur",
  description:
    "Salak Nglumut premium berkualitas ekspor — dikirim 30–50 ton per minggu ke China, Kamboja, Eropa, dan Timor Leste.",
};

export default function EksporPage() {
  return (
    <div className="relative min-h-screen bg-[#FAF9F6] text-[#1C3829] selection:bg-[#D4622E] selection:text-white overflow-x-clip">
      <Navbar />
      <main>
        {/* Hero Ekspor */}
        <HeroEkspor />

        {/* Kepercayaan & Legalitas */}
        <AboutEkspor />

        {/* Alur Operasional — Dari Pohon hingga Kontainer */}
        <AlurEkspor />

        {/* Jangkauan Ekspor — Pasar Dunia */}
        <JangkauanEkspor />

        {/* Kerjasama CTA */}
        <KerjasamaEkspor />
      </main>
      <Footer />
    </div>
  );
}
