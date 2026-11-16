import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroUmkm from "../components/umkm/HeroUmkm";
import TentangUmkm from "../components/umkm/TentangUmkm";
import ProdukUmkm from "../components/umkm/ProdukUmkm";
import UnggulanUmkm from "../components/umkm/UnggulanUmkm";
import CaraPesanUmkm from "../components/umkm/CaraPesanUmkm";
import CtaUmkm from "../components/umkm/CtaUmkm";

export const metadata = {
  title: "UMKM & Olahan KWT | Gapoktan Ngudi Luhur",
  description:
    "Olahan Salak Nglumut premium oleh Kelompok Wanita Tani (KWT) Ngudi Luhur — dari camilan renyah hingga kopi biji salak inovatif lereng Merapi.",
};

export default function UmkmPage() {
  return (
    <div className="relative min-h-screen bg-[#FAF9F6] text-[#1C3829] selection:bg-[#D4622E] selection:text-white">
      <Navbar />
      <main>
        {/* Section 1: Hero */}
        <HeroUmkm />

        {/* Section 2: Tentang KWT */}
        <TentangUmkm />

        {/* Section 3: Katalog Produk dengan Filter */}
        <ProdukUmkm />

        {/* Section 4: Produk Inovatif Unggulan (Kopi Biji Salak) */}
        <UnggulanUmkm />

        {/* Section 5: Cara Pesan */}
        <CaraPesanUmkm />

        {/* Section 6: CTA Akhir */}
        <CtaUmkm />
      </main>
      <Footer />
    </div>
  );
}
