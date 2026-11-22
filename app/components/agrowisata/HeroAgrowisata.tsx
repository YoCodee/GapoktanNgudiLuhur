"use client";

import Image from "next/image";

export default function HeroAgrowisata() {
  const scrollTo = (id: string) => (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-[90vh] lg:min-h-screen w-full overflow-hidden bg-[#1C3829] flex items-center">
      {/* Background image */}
      <Image
        src="/assets/DSC04999.webp"
        alt="Agrowisata Karang Taruna Ngudi Luhur"
        fill
        className="object-cover object-center"
        priority
      />

      {/* Vertical fade-out: 0 opacity at top, thick #1C3829 at bottom */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(28, 56, 41, 0) 0%, rgba(28, 56, 41, 0.15) 45%, rgba(28, 56, 41, 0.75) 78%, #1C3829 100%)",
        }}
      />

      {/* Subtle left-to-right readability gradient */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            "linear-gradient(90deg, rgba(16, 35, 23, 0.55) 0%, rgba(16, 35, 23, 0.20) 45%, transparent 75%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-20 pt-32 md:px-12 lg:px-16">
        <div className="max-w-2xl">
          <p
            className="mb-4 text-sm font-bold tracking-wider uppercase"
            style={{ fontFamily: '"PlusJakartaSans", sans-serif', color: "#D4622E" }}
          >
            AGROWISATA, Karang Taruna Ngudi Luhur
          </p>
          <h1
            className="mb-6 text-4xl font-extrabold leading-[1.12] text-white sm:text-5xl md:text-6xl"
            style={{ fontFamily: '"PlusJakartaSans", sans-serif' }}
          >
            Warisan Merapi,
            <br />
            Destinasi Edukasi
            <br />
            Agribisnis Berkelanjutan.
          </h1>
          <p
            className="mb-10 text-base leading-relaxed text-white/85 sm:text-lg"
            style={{ fontFamily: '"PlusJakartaSans", sans-serif' }}
          >
            Menyajikan pengalaman wisata yang memadukan keindahan alam lereng
            Merapi dengan edukasi sistem pertanian modern yang ramah lingkungan.
            Untuk pelajar, keluarga, komunitas, hingga instansi.
          </p>

          {/* Dual CTA buttons matching design */}
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#paket-kunjungan"
              onClick={scrollTo("paket-kunjungan")}
              className="inline-flex items-center gap-2.5 rounded-full border border-white/40 bg-transparent px-7 py-3.5 text-sm font-bold text-white transition-all hover:bg-white/10 active:scale-95"
              style={{ fontFamily: '"PlusJakartaSans", sans-serif' }}
            >
              <Image
                src="/assets/icons/agrowisata/tree.png"
                alt="Ikon Paket Wisata"
                width={16}
                height={16}
                className="object-contain"
              />
              Lihat Paket Wisata
            </a>

            <a
              href="#rencanakan-kunjungan"
              onClick={scrollTo("rencanakan-kunjungan")}
              className="inline-flex items-center gap-2.5 rounded-full px-7 py-3.5 text-sm font-bold text-white shadow-md transition-all hover:brightness-110 hover:shadow-lg active:scale-95"
              style={{
                fontFamily: '"PlusJakartaSans", sans-serif',
                backgroundColor: "#D4622E",
              }}
            >
              <Image
                src="/assets/icons/agrowisata/calendar.png"
                alt="Ikon Kalender"
                width={16}
                height={16}
                className="object-contain"
              />
              Booking Kunjungan
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
