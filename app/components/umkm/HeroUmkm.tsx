"use client";

import Image from "next/image";

export default function HeroUmkm() {
  const scrollToKatalog = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById("katalog-produk");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-[90vh] lg:min-h-screen w-full overflow-hidden bg-[#18281f] flex items-center">
      {/* Background image matching UMKM-Hero.png */}
      <Image
        src="/assets/umkm/hero-umkm.png"
        alt="Kelompok Wanita Tani Ngudi Luhur"
        fill
        className="object-cover object-center"
        priority
      />

      {/* Deep dark green overlay matching the design mockup */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            "linear-gradient(105deg, rgba(16, 35, 23, 0.92) 0%, rgba(20, 42, 28, 0.86) 50%, rgba(18, 38, 25, 0.78) 100%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-20 pt-32 md:px-12 lg:px-16">
        <div className="max-w-2xl">
          <p
            className="mb-4 text-sm font-bold tracking-wider uppercase"
            style={{ fontFamily: '"BricolageGrotesque", sans-serif', color: "#D4622E" }}
          >
            UMKM &amp; OLAHAN, Kelompok Wanita Tani
          </p>
          <h1
            className="mb-6 text-4xl font-extrabold leading-[1.12] text-white sm:text-5xl md:text-6xl"
            style={{ fontFamily: '"BricolageGrotesque", sans-serif' }}
          >
            Dari Tangan Ibu,
            <br />
            Lahir Produk Berkelas.
          </h1>
          <p
            className="mb-10 text-base leading-relaxed text-white/85 sm:text-lg"
            style={{ fontFamily: '"Literata", serif' }}
          >
            Kelompok Wanita Tani Ngudi Luhur mengubah salak segar pilihan
            menjadi produk olahan bernilai tinggi — dari camilan premium hingga
            minuman inovatif yang belum pernah ada sebelumnya.
          </p>
          <a
            href="#katalog-produk"
            onClick={scrollToKatalog}
            className="inline-flex items-center gap-2.5 rounded-full bg-white px-7 py-3.5 text-sm font-bold text-[#1C3829] shadow-md transition-all hover:bg-neutral-100 hover:shadow-lg active:scale-95"
            style={{ fontFamily: '"BricolageGrotesque", sans-serif' }}
          >
            {/* Box / Products icon matching mockup */}
            <svg
              className="h-4 w-4 text-[#1C3829]"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
              />
            </svg>
            Lihat Semua Produk
          </a>
        </div>
      </div>
    </section>
  );
}
