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
    <section className="relative min-h-[90vh] lg:min-h-screen w-full overflow-hidden bg-[#1C3829] flex items-center">
      {/* Background image HD without CSS zoom blur */}
      <Image
        src="/assets/hero-umkm-hd.webp"
        alt="Kelompok Wanita Tani Ngudi Luhur"
        fill
        unoptimized
        sizes="100vw"
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
            UMKM &amp; OLAHAN, Kelompok Wanita Tani
          </p>
          <h1
            className="mb-6 text-4xl font-extrabold leading-[1.12] text-white sm:text-5xl md:text-6xl"
            style={{ fontFamily: '"PlusJakartaSans", sans-serif' }}
          >
            Dari Tangan Ibu,
            <br />
            Lahir Produk Berkelas.
          </h1>
          <p
            className="mb-10 text-base leading-relaxed text-white/85 sm:text-lg"
            style={{ fontFamily: '"PlusJakartaSans", sans-serif' }}
          >
            Kelompok Wanita Tani Ngudi Luhur mengubah salak segar pilihan
            menjadi produk olahan bernilai tinggi — dari camilan premium hingga
            minuman inovatif yang belum pernah ada sebelumnya.
          </p>
          <a
            href="#katalog-produk"
            onClick={scrollToKatalog}
            className="inline-flex items-center gap-2.5 rounded-full px-7 py-3.5 text-sm font-bold text-white shadow-md transition-all hover:brightness-110 hover:shadow-lg active:scale-95"
            style={{
              fontFamily: '"PlusJakartaSans", sans-serif',
              backgroundColor: "#D4622E",
            }}
          >
            {/* Shopping Bag icon matching mockup */}
            <svg
              className="h-4 w-4 text-white"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
              />
            </svg>
            Lihat Semua Produk
          </a>
        </div>
      </div>
    </section>
  );
}
