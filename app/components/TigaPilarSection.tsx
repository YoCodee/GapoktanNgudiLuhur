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
      className="relative w-full overflow-hidden"
      style={{
        backgroundColor: "#1C3829",
        paddingTop: "80px",
        paddingBottom: "140px",
      }}
    >
      {/* Ambient orange blob — KIRI BAWAH */}
      <div
        className="pointer-events-none absolute"
        style={{
          left: "-100px",
          bottom: "-60px",
          width: "500px",
          height: "500px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(170,80,10,0.60) 0%, rgba(170,80,10,0.20) 50%, transparent 72%)",
          filter: "blur(8px)",
          zIndex: 0,
        }}
      />

      {/* Ambient orange blob — KANAN ATAS */}
      <div
        className="pointer-events-none absolute"
        style={{
          right: "-100px",
          top: "-60px",
          width: "500px",
          height: "500px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(170,80,10,0.60) 0%, rgba(170,80,10,0.20) 50%, transparent 72%)",
          filter: "blur(8px)",
          zIndex: 0,
        }}
      />

      {/* Header */}
      <div className="relative z-10 text-center mb-20 px-4">
        <p
          style={{
            fontFamily: '"BricolageGrotesque", sans-serif',
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
            fontFamily: '"BricolageGrotesque", sans-serif',
            color: "#ffffff",
            fontSize: "clamp(40px, 6vw, 72px)",
            fontWeight: 800,
            lineHeight: 1.1,
          }}
        >
          Tiga Pilar Utama
        </h2>
      </div>

      {/* Cards — staircase: top AND bottom descend left→right via marginTop */}
      <div
        className="relative z-10 flex items-start justify-center px-8 md:px-16 lg:px-24"
        style={{ gap: "clamp(16px, 2.5vw, 36px)" }}
      >
        {pillars.map((pillar) => (
          <div
            key={pillar.id}
            className="flex flex-col items-center"
            style={{ flexShrink: 0, marginTop: `${pillar.marginTop}px` }}
          >
            {/* Arch card — true arch: fully rounded top, flat bottom */}
            <div
              className="relative overflow-hidden"
              style={{
                width: `${pillar.widthPx}px`,
                height: `${pillar.heightPx}px`,
                borderRadius: "9999px 9999px 14px 14px",
              }}
            >
              <Image
                src={pillar.image}
                alt={pillar.alt}
                fill
                sizes="(max-width: 768px) 45vw, 22vw"
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

              {/* Text — bottom of card */}
              <div
                className="absolute left-0 right-0"
                style={{ bottom: "24px", padding: "0 20px" }}
              >
                <p
                  style={{
                    fontFamily: '"BricolageGrotesque", sans-serif',
                    color: "#ffffff",
                    fontWeight: 700,
                    fontSize: "clamp(13px, 1.2vw, 18px)",
                    lineHeight: 1.3,
                  }}
                >
                  {pillar.title}
                </p>
                <p
                  style={{
                    fontFamily: '"Literata", serif',
                    color: "rgba(255,255,255,0.75)",
                    fontSize: "clamp(11px, 0.9vw, 14px)",
                    marginTop: "4px",
                    lineHeight: 1.5,
                  }}
                >
                  {pillar.subtitle}
                </p>
              </div>
            </div>

            {/* Label below card */}
            <p
              style={{
                fontFamily: '"BricolageGrotesque", sans-serif',
                color: "#D4622E",
                fontWeight: 700,
                fontSize: "clamp(16px, 1.5vw, 24px)",
                marginTop: "20px",
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
