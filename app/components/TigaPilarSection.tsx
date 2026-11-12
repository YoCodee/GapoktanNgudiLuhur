"use client";

import Image from "next/image";

const pillars = [
  {
    id: "poktan",
    label: "Poktan",
    image: "/assets/pillar-poktan.jpg",
    alt: "Anggota Poktan memegang salak di kebun",
    title: "UMKM & Olahan",
    subtitle: "Fokus pada Inovasi Hasil Tani",
    labelColor: "text-[#D4622E]",
  },
  {
    id: "kwt",
    label: "KWT",
    image: "/assets/pillar-kwt.webp",
    alt: "Produk Wedang Kenthos KWT",
    title: "UMKM & Olahan",
    subtitle: "Fokus pada Inovasi Hasil Tani",
    labelColor: "text-[#D4622E]",
    featured: true,
  },
  {
    id: "karangtaruna",
    label: "Karang Taruna",
    image: "/assets/pillar-agrowisata.webp",
    alt: "Karang Taruna Agrowisata",
    title: "Agrowisata",
    subtitle: "Fokus pada Pengalaman & Edukasi",
    labelColor: "text-[#D4622E]",
  },
];

export default function TigaPilarSection() {
  return (
    <section
      className="relative w-full overflow-hidden py-20 md:py-28"
      style={{
        background:
          "linear-gradient(to right, #1a2e1e 0%, #1C3829 45%, #6B3E20 80%, #8B5230 100%)",
      }}
    >
      {/* Header */}
      <div className="mb-12 md:mb-16 text-center">
        <p
          className="mb-3 text-sm font-medium tracking-widest uppercase"
          style={{
            fontFamily: '"BricolageGrotesque", sans-serif',
            color: "#D4622E",
          }}
        >
          Ekosistem Kami
        </p>
        <h2
          className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white"
          style={{ fontFamily: '"BricolageGrotesque", sans-serif' }}
        >
          Tiga Pilar Utama
        </h2>
      </div>

      {/* Cards */}
      <div className="flex items-end justify-center gap-4 md:gap-6 px-6 md:px-12">
        {pillars.map((pillar) => (
          <div
            key={pillar.id}
            className="flex flex-col items-center"
            style={{
              flex: pillar.featured ? "0 0 auto" : "0 0 auto",
              width: pillar.featured ? "clamp(200px, 24vw, 300px)" : "clamp(170px, 20vw, 260px)",
              marginBottom: pillar.featured ? "0px" : "0px",
            }}
          >
            {/* Arch Card */}
            <div
              className="relative overflow-hidden w-full"
              style={{
                aspectRatio: "3 / 4",
                borderRadius: "50% 50% 12px 12px / 20% 20% 12px 12px",
                transform: pillar.featured ? "translateY(-20px)" : "translateY(0)",
                boxShadow: pillar.featured
                  ? "0 24px 60px rgba(0,0,0,0.6)"
                  : "0 12px 40px rgba(0,0,0,0.4)",
              }}
            >
              {/* Image */}
              <Image
                src={pillar.image}
                alt={pillar.alt}
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover"
                priority={pillar.featured}
              />

              {/* Dark gradient overlay at bottom */}
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to top, rgba(0,0,0,0.80) 0%, rgba(0,0,0,0.30) 45%, transparent 70%)",
                }}
              />

              {/* Text overlay inside card */}
              <div className="absolute bottom-0 left-0 right-0 p-4 md:p-5">
                <p
                  className="text-white font-bold text-sm md:text-base leading-tight"
                  style={{ fontFamily: '"BricolageGrotesque", sans-serif' }}
                >
                  {pillar.title}
                </p>
                <p
                  className="text-white/80 text-xs md:text-sm mt-0.5 leading-snug"
                  style={{ fontFamily: '"Literata", serif' }}
                >
                  {pillar.subtitle}
                </p>
              </div>
            </div>

            {/* Label below card */}
            <p
              className={`mt-4 text-sm md:text-base font-semibold tracking-wide ${pillar.labelColor}`}
              style={{
                fontFamily: '"BricolageGrotesque", sans-serif',
                marginTop: pillar.featured ? "calc(1rem + 20px)" : "1rem",
              }}
            >
              {pillar.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
