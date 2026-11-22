import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroAgrowisata from "../components/agrowisata/HeroAgrowisata";
import TentangAgrowisata from "../components/agrowisata/TentangAgrowisata";
import PaketAgrowisata from "../components/agrowisata/PaketAgrowisata";
import FasilitasAgrowisata from "../components/agrowisata/FasilitasAgrowisata";
import LokasiAgrowisata from "../components/agrowisata/LokasiAgrowisata";
import BookingAgrowisata from "../components/agrowisata/BookingAgrowisata";

export const metadata = {
  title: "Agrowisata & Edukasi | Gapoktan Ngudi Luhur",
  description:
    "Destinasi edukasi agribisnis berkelanjutan di lereng Merapi — paket edukasi budidaya, studi banding B2B, dan wisata petik buah salak Nglumut.",
};

export default function AgroWisataPage() {
  return (
    <div className="relative min-h-screen bg-[#FAF9F6] text-[#1C3829] selection:bg-[#D4622E] selection:text-white">
      <Navbar />
      <main>
        {/* Section 1: Hero */}
        <HeroAgrowisata />

        {/* Section 2: Tentang Agrowisata */}
        <TentangAgrowisata />

        {/* Section 3: Paket Kunjungan */}
        <PaketAgrowisata />

        {/* Section 4: Fasilitas */}
        <FasilitasAgrowisata />

        {/* Section 5: Lokasi Kami */}
        <LokasiAgrowisata />

        {/* Section 6: Rencanakan Kunjungan (Booking Form) */}
        <BookingAgrowisata />
      </main>
      <Footer />
    </div>
  );
}
