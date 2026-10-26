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
      className="relative w-full min-h-[788px] lg:h-[788px] flex items-center overflow-hidden bg-[#18281f]"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/section1.webp"
          alt="Salak Nglumut Premium Gapoktan Ngudi Luhur"
          fill
          priority
          className="object-cover object-right md:object-center select-none"
          sizes="100vw"
        />
        {/* Soft vignette/gradient overlay on the left to ensure high readability */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, rgba(20, 32, 25, 0.72) 0%, rgba(20, 32, 25, 0.45) 45%, rgba(20, 32, 25, 0.1) 75%, transparent 100%)",
          }}
        />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 pt-28 pb-20">
        <div className="max-w-[580px]">
          {/* Badge */}
          <p
            className="text-[#D4622E] font-semibold text-base tracking-wide mb-4"
            style={{ fontFamily: '"BricolageGrotesque", sans-serif' }}
          >
            Asli Nglumut
          </p>

          {/* Heading */}
          <h1
            className="text-white text-4xl sm:text-5xl lg:text-[58px] font-extrabold leading-[1.08] tracking-tight mb-6"
            style={{ fontFamily: '"BricolageGrotesque", sans-serif' }}
          >
            Pusat Agribisnis
            <br />
            Salak Nglumut Premium
          </h1>

          {/* Description */}
          <p
            className="text-white/85 text-base sm:text-lg leading-relaxed mb-10 max-w-[520px]"
            style={{ fontFamily: '"Literata", Georgia, serif' }}
          >
            Gapoktan Ngudi Luhur — pengelola sentra salak terbaik Indonesia. 800+
            hektar lahan, ratusan petani berdaya, dan pengiriman ekspor ke Asia &amp;
            Eropa setiap minggunya.
          </p>

          {/* CTA Button */}
          <button
            onClick={scrollToAbout}
            className="inline-flex items-center justify-center px-8 py-3.5 bg-white text-[#1C3829] text-base font-semibold rounded-full shadow-md hover:bg-neutral-100 active:scale-[0.98] transition-all duration-200 cursor-pointer"
            style={{ fontFamily: '"BricolageGrotesque", sans-serif' }}
          >
            Lebih Detail
          </button>
        </div>
      </div>
    </section>
  );
}
