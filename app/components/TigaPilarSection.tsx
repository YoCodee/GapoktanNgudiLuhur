"use client";

import Image from "next/image";

const pillars = [
  {
    id: "poktan",
    label: "Poktan",
    image: "/assets/pillar-poktan.jpg",
    alt: "Anggota Poktan memegang salak di kebun",
    title: "Giat Ekspor",
    subtitle: "Fokus pada kualitas ekspor global",
    position: "left", // shorter, lower
  },
  {
    id: "kwt",
    label: "KWT",
    image: "/assets/pillar-kwt.webp",
    alt: "Produk Wedang Kenthos KWT",
    title: "UMKM & Olahan",
    subtitle: "Fokus pada Inovasi Hasil Tani",
    position: "center", // tallest, elevated
  },
  {
    id: "karangtaruna",
    label: "Karang Taruna",
    image: "/assets/pillar-agrowisata.webp",
    alt: "Karang Taruna Agrowisata",
    title: "Agrowisata",
    subtitle: "Fokus pada Pengalaman & Edukasi",
    position: "right", // medium height
  },
];

export default function TigaPilarSection() {
  return (
    <section
      className="relative w-full overflow-hidden"
      style={{
        backgroundColor: "#1C3829",
        paddingTop: "80px",
        paddingBottom: "100px",
        minHeight: "90vh",
      }}
    >
      {/* Ambient blob — bottom left orange glow */}
      <div
        className="pointer-events-none absolute"
        style={{
          left: "-120px",
          bottom: "-80px",
          width: "480px",
          height: "480px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(180,90,20,0.55) 0%, rgba(180,90,20,0.18) 50%, transparent 75%)",
          filter: "blur(10px)",
          zIndex: 0,
        }}
      />
      {/* Ambient blob — top right subtle warm */}
      <div
        className="pointer-events-none absolute"
        style={{
          right: "-60px",
          top: "30px",
          width: "300px",
          height: "300px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(140,70,10,0.25) 0%, transparent 70%)",
          filter: "blur(8px)",
          zIndex: 0,
        }}
      />

      {/* Header */}
      <div className="relative z-10 text-center mb-16 md:mb-20 px-4">
        <p
          className="mb-3 text-sm md:text-base font-semibold tracking-widest"
          style={{
            fontFamily: '"BricolageGrotesque", sans-serif',
            color: "#D4622E",
          }}
        >
          Ekosistem Kami
        </p>
        <h2
          className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight"
          style={{ fontFamily: '"BricolageGrotesque", sans-serif' }}
        >
          Tiga Pilar Utama
        </h2>
      </div>

      {/* Cards container — staggered layout */}
      <div
        className="relative z-10 flex items-end justify-center px-6 md:px-16 lg:px-24"
        style={{ gap: "clamp(12px, 2vw, 32px)" }}
      >
        {pillars.map((pillar) => {
          const isCenter = pillar.position === "center";
          const isLeft = pillar.position === "left";

          // Heights: center tallest, right medium, left shortest
          const cardHeight = isCenter
            ? "clamp(380px, 48vw, 560px)"
            : isLeft
            ? "clamp(300px, 36vw, 440px)"
            : "clamp(340px, 42vw, 500px)";

          const cardWidth = isCenter
            ? "clamp(240px, 24vw, 340px)"
            : "clamp(210px, 21vw, 300px)";

          return (
            <div
              key={pillar.id}
              className="flex flex-col items-center"
              style={{ flex: "0 0 auto" }}
            >
              {/* Arch card */}
              <div
                className="relative overflow-hidden"
                style={{
                  width: cardWidth,
                  height: cardHeight,
                  // True arch: top is semicircle, bottom is flat rect
                  borderRadius: "9999px 9999px 16px 16px",
                }}
              >
                {/* Image */}
                <Image
                  src={pillar.image}
                  alt={pillar.alt}
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover"
                  priority={isCenter}
                />

                {/* Dark overlay — heavier at bottom */}
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.35) 40%, rgba(0,0,0,0.10) 70%, transparent 100%)",
                  }}
                />

                {/* Text inside card — bottom */}
                <div
                  className="absolute left-0 right-0"
                  style={{ bottom: "28px", padding: "0 20px" }}
                >
                  <p
                    className="text-white font-bold text-base md:text-lg leading-snug"
                    style={{ fontFamily: '"BricolageGrotesque", sans-serif' }}
                  >
                    {pillar.title}
                  </p>
                  <p
                    className="text-white/75 text-xs md:text-sm mt-1 leading-relaxed"
                    style={{ fontFamily: '"Literata", serif' }}
                  >
                    {pillar.subtitle}
                  </p>
                </div>
              </div>

              {/* Label below card */}
              <p
                className="mt-5 md:mt-6 font-bold text-xl md:text-2xl"
                style={{
                  fontFamily: '"BricolageGrotesque", sans-serif',
                  color: "#D4622E",
                }}
              >
                {pillar.label}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
