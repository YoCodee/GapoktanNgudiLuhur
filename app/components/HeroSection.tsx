"use client";

import Image from "next/image";

export default function HeroSection() {
  const scrollToAbout = () => {
    const el = document.getElementById("dampak");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="beranda"
      className="relative w-full min-h-[788px] lg:h-[788px] flex items-center overflow-hidden bg-[#1C3829]"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/hero-home-hd.webp"
          alt="Salak Nglumut Premium Gapoktan Ngudi Luhur"
          fill
          priority
          unoptimized
          className="object-cover object-right md:object-center select-none"
          sizes="100vw"
        />
        {/* Vertical fade-out: 0 opacity at top, thick #1C3829 at bottom */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(28, 56, 41, 0) 0%, rgba(28, 56, 41, 0.15) 45%, rgba(28, 56, 41, 0.75) 78%, #1C3829 100%)",
          }}
        />
        {/* Subtle left-to-right readability gradient */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, rgba(16, 35, 23, 0.55) 0%, rgba(16, 35, 23, 0.20) 45%, transparent 75%)",
          }}
        />
      </div>

      {/* Ornament Sisik.png di pojok kanan atas */}
      <div className="pointer-events-none absolute right-0 top-0 z-[1] h-[220px] w-[280px] sm:h-[360px] sm:w-[480px] md:h-[550px] md:w-full md:max-w-[850px] overflow-hidden select-none">
        <Image
          src="/assets/Sisik.png"
          alt="Ornamen Sisik"
          fill
          className="object-contain object-top-right opacity-65 md:opacity-85"
          sizes="(max-width: 850px) 100vw, 850px"
        />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 pt-28 pb-20">
        <div className="max-w-[580px]">
          {/* Badge */}
          <p
            className="text-[#D4622E] font-semibold text-base tracking-wide mb-4"
            style={{ fontFamily: '"PlusJakartaSans", sans-serif' }}
          >
            Asli Nglumut
          </p>

          {/* Heading */}
          <h1
            className="text-white text-4xl sm:text-5xl lg:text-[58px] font-extrabold leading-[1.08] tracking-tight mb-6"
            style={{ fontFamily: '"PlusJakartaSans", sans-serif' }}
          >
            Pusat Agribisnis
            <br />
            Salak Nglumut Premium
          </h1>

          {/* Description */}
          <p
            className="text-white/85 text-base sm:text-lg leading-relaxed mb-10 max-w-[520px]"
            style={{ fontFamily: '"PlusJakartaSans", sans-serif' }}
          >
            Gapoktan Ngudi Luhur — pengelola sentra salak terbaik Indonesia. 800+
            hektar lahan, ratusan petani berdaya, dan pengiriman ekspor ke Asia &amp;
            Eropa setiap minggunya.
          </p>

          {/* CTA Button */}
          <button
            onClick={scrollToAbout}
            className="inline-flex items-center justify-center px-8 py-3.5 bg-white text-[#1C3829] text-base font-semibold rounded-full shadow-md hover:bg-neutral-100 active:scale-[0.98] transition-all duration-200 cursor-pointer"
            style={{ fontFamily: '"PlusJakartaSans", sans-serif' }}
          >
            Lebih Detail
          </button>
        </div>
      </div>
    </section>
  );
}
