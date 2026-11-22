"use client";

import Image from "next/image";

// Diagonal staircase left → right:
// Top AND bottom both descend — cards offset downward with marginTop
// All cards same height, staggered vertically via marginTop
const pillars = [
  {
    id: "poktan",
    label: "Poktan",
    image: "/assets/section1.webp",
    alt: "Kebun salak Poktan Ngudi Luhur",
    title: "Giat Ekspor",
    subtitle: "Fokus pada kualitas ekspor global",
    heightPx: 420,
    widthPx: 300,
    marginTop: 0,       // paling tinggi (tidak digeser)
  },
  {
    id: "kwt",
    label: "KWT",
    image: "/assets/DSC04999.webp",
    alt: "Produk UMKM dan Olahan KWT",
    title: "UMKM & Olahan",
    subtitle: "Fokus pada Inovasi Hasil Tani",
    heightPx: 420,
    widthPx: 290,
    marginTop: 90,      // turun satu anak tangga
  },
  {
    id: "karangtaruna",
    label: "Karang Taruna",
    image: "/assets/pillar-packinghouse.webp",
    alt: "Karang Taruna Packing House Desa Kaliurang",
    title: "Agrowisata",
    subtitle: "Fokus pada Pengalaman & Edukasi",
    heightPx: 420,
    widthPx: 280,
    marginTop: 180,     // turun dua anak tangga
  },
];

export default function TigaPilarSection() {
  return (
    <section
      className="relative w-full overflow-hidden py-16 md:py-20 lg:pt-[80px] lg:pb-[140px]"
      style={{
        backgroundColor: "#1C3829",
      }}
    >
      {/* Ornamen SisikKanan.png di sisi kanan saja (full height, partial width) */}
      <div
        className="pointer-events-none absolute right-0 top-0 bottom-0 z-0 h-full w-[55%] sm:w-[60%] md:w-full md:max-w-[850px] bg-repeat-y bg-right-top opacity-75 md:opacity-85 select-none"
        style={{
          backgroundImage: "url('/assets/SisikKanan.png')",
          backgroundSize: "100% auto",
        }}
      />

      {/* Header */}
      <div className="relative z-10 text-center mb-20 px-4">
        <p
          style={{
            fontFamily: '"PlusJakartaSans", sans-serif',
            color: "#D4622E",
            fontSize: "14px",
            fontWeight: 600,
            letterSpacing: "0.12em",
            marginBottom: "12px",
          }}
        >
          Ekosistem Kami
        </p>
        <h2
          style={{
            fontFamily: '"PlusJakartaSans", sans-serif',
            color: "#ffffff",
            fontSize: "clamp(40px, 6vw, 72px)",
            fontWeight: 800,
            lineHeight: 1.1,
          }}
        >
          Tiga Pilar Utama
        </h2>
      </div>

      {/* Cards — stacked cleanly on mobile, staircase left→right on desktop (lg+) */}
      <div
        className="relative z-10 flex flex-col items-center gap-12 px-6 lg:flex-row lg:items-start lg:justify-center lg:gap-[clamp(16px,2.5vw,36px)] lg:px-24"
      >
        {pillars.map((pillar) => (
          <div
            key={pillar.id}
            className="flex flex-col items-center shrink-0 mt-0 lg:mt-[var(--pillar-mt)]"
            style={
              {
                "--pillar-mt": `${pillar.marginTop}px`,
                "--pillar-w": `${pillar.widthPx}px`,
                "--pillar-h": `${pillar.heightPx}px`,
              } as React.CSSProperties
            }
          >
            {/* Arch card — true arch on top, smooth rounded corners at bottom */}
            <div
              className="relative overflow-hidden w-[270px] h-[370px] sm:w-[300px] sm:h-[410px] lg:w-[var(--pillar-w)] lg:h-[var(--pillar-h)] rounded-t-full rounded-b-[18px]"
            >
              <Image
                src={pillar.image}
                alt={pillar.alt}
                fill
                sizes="(max-width: 1024px) 300px, 22vw"
                className="object-cover"
              />

              {/* Gradient overlay — heavy at bottom for text legibility */}
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to top, rgba(0,0,0,0.80) 0%, rgba(0,0,0,0.40) 38%, rgba(0,0,0,0.05) 65%, transparent 100%)",
                }}
              />

              {/* Text — centered at bottom of card */}
              <div
                className="absolute left-0 right-0 text-center"
                style={{ bottom: "24px", padding: "0 20px" }}
              >
                <p
                  className="text-white font-bold text-lg lg:text-[18px] leading-snug"
                  style={{ fontFamily: '"PlusJakartaSans", sans-serif' }}
                >
                  {pillar.title}
                </p>
                <p
                  className="text-white/75 text-xs lg:text-[13px] mt-1 leading-relaxed"
                  style={{ fontFamily: '"PlusJakartaSans", sans-serif' }}
                >
                  {pillar.subtitle}
                </p>
              </div>
            </div>

            {/* Label below card */}
            <p
              className="mt-4 lg:mt-5 font-bold text-xl lg:text-2xl"
              style={{
                fontFamily: '"PlusJakartaSans", sans-serif',
                color: "#D4622E",
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
