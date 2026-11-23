import Image from "next/image";
import ScrollReveal from "../ScrollReveal";

export default function TentangAgrowisata() {
  return (
    <section className="w-full bg-[#FAF9F6] py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Column: Text */}
          <ScrollReveal variant="slide-left">
            <p
              className="mb-3 text-sm font-bold uppercase tracking-wider"
              style={{ fontFamily: '"PlusJakartaSans", sans-serif', color: "#D4622E" }}
            >
              TENTANG AGROWISATA KAMI
            </p>
            <h2
              className="mb-6 text-3xl font-extrabold leading-tight text-[#1C3829] sm:text-4xl lg:text-5xl"
              style={{ fontFamily: '"PlusJakartaSans", sans-serif' }}
            >
              Lebih dari
              <br />
              Sekadar Wisata
            </h2>
            <div
              className="space-y-4 text-base leading-relaxed text-gray-700"
              style={{ fontFamily: '"PlusJakartaSans", sans-serif' }}
            >
              <p>
                Di Agrowisata Ngudi Luhur, pengunjung tidak hanya melihat mereka
                merasakan langsung bagaimana salak Nglumut terbaik di Indonesia
                ditanam, dirawat, dipanen, dan diolah menjadi produk bernilai
                tinggi.
              </p>
              <p>
                Dengan latar Gunung Merapi yang megah dan udara pegunungan yang
                segar, setiap kunjungan menjadi pengalaman yang membekas — baik
                untuk wisatawan keluarga maupun tim dari instansi yang ingin
                melakukan studi banding agribisnis modern.
              </p>
              <p>
                Dikelola sepenuhnya oleh Karang Taruna setempat, agrowisata ini
                adalah bukti nyata bahwa pemuda desa mampu menjadi penggerak
                ekonomi pariwisata berkelanjutan.
              </p>
            </div>
          </ScrollReveal>

          {/* Right Column: Photo */}
          <ScrollReveal variant="zoom-in" delay={150} className="flex justify-center lg:justify-end">
            <div className="relative aspect-square w-full max-w-[540px] overflow-hidden rounded-3xl shadow-sm">
              <Image
                src="/assets/DSC04999.webp"
                alt="Produk dan kawasan Agrowisata Ngudi Luhur"
                fill
                className="object-cover object-center"
              />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
