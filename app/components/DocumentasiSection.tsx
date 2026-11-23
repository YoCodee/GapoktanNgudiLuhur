import Image from "next/image";
import ScrollReveal from "./ScrollReveal";

const cards = [
  {
    id: "packing",
    category: "Aktivitas Ekspor",
    title: "Proses Packing House",
    image: "/assets/pillar-packinghouse.webp",
    large: true,
  },
  {
    id: "lapangan",
    category: "Aktivitas Ekspor",
    title: "Tim di Lapangan",
    image: "/assets/DSC04999.webp",
    large: false,
  },
  {
    id: "kwt",
    category: "Pemberdayaan",
    title: "KWT Ngudi Luhur",
    image: "/assets/DSC05002.webp",
    large: false,
  },
  {
    id: "mitra",
    category: "Kunjungan Mitra",
    title: "Dokumentasi Kemitraan",
    image: "/assets/pillar-poktan.jpg",
    large: false,
  },
  {
    id: "kebun",
    category: "Pemberdayaan",
    title: "Kebun Salak Nglumut",
    image: "/assets/pillar-agrowisata.webp",
    large: false,
  },
];

export default function DocumentasiSection() {
  const largeCard = cards.find((c) => c.large);
  const smallCards = cards.filter((c) => !c.large);

  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ backgroundColor: "#FAF9F6", paddingTop: "80px", paddingBottom: "80px" }}
    >
      {/* Decorative pattern kiri */}
      <div
        className="pointer-events-none absolute left-0 top-0 h-full w-40 opacity-10"
        style={{
          backgroundImage: `radial-gradient(circle, #1C3829 1px, transparent 1px)`,
          backgroundSize: "24px 24px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-12 lg:px-16">
        {/* Header */}
        <ScrollReveal variant="fade-up" className="mb-12 text-center">
          <p
            className="mb-3 text-sm font-semibold tracking-widest"
            style={{ fontFamily: '"PlusJakartaSans", sans-serif', color: "#D4622E" }}
          >
            Dokumentasi Kegiatan
          </p>
          <h2
            className="mb-5 text-4xl font-extrabold md:text-5xl lg:text-6xl"
            style={{ fontFamily: '"PlusJakartaSans", sans-serif', color: "#1C3829" }}
          >
            Living the Movement
          </h2>
          <p
            className="mx-auto max-w-2xl text-base leading-relaxed md:text-lg"
            style={{ fontFamily: '"PlusJakartaSans", sans-serif', color: "#4a5a4e" }}
          >
            Dari kebun ke kontainer, dari dapur KWT ke meja buyer,{" "}
            <br className="hidden md:block" />
            setiap hari Ngudi Luhur bergerak nyata.
          </p>
        </ScrollReveal>

        {/* Grid layout: 1 large left + 2x2 right */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {/* Large card — spans 2 rows */}
          {largeCard && (
            <ScrollReveal variant="zoom-in" delay={0} className="lg:row-span-2">
              <div
                className="relative h-full overflow-hidden rounded-2xl"
                style={{ minHeight: "420px" }}
              >
                <Image
                  src={largeCard.image}
                  alt={largeCard.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="object-cover"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(0,0,0,0.70) 0%, rgba(0,0,0,0.20) 50%, transparent 100%)",
                  }}
                />
                <div className="absolute bottom-0 left-0 p-6">
                  <p
                    className="mb-1 text-xs font-medium text-white/70"
                    style={{ fontFamily: '"PlusJakartaSans", sans-serif' }}
                  >
                    {largeCard.category}
                  </p>
                  <p
                    className="text-xl font-bold text-white md:text-2xl"
                    style={{ fontFamily: '"PlusJakartaSans", sans-serif' }}
                  >
                    {largeCard.title}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          )}

          {/* Small cards — 2x2 */}
          {smallCards.map((card, idx) => (
            <ScrollReveal key={card.id} variant="zoom-in" delay={(idx + 1) * 90}>
              <div
                className="relative overflow-hidden rounded-2xl"
                style={{ minHeight: "200px" }}
              >
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 30vw"
                  className="object-cover"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(0,0,0,0.70) 0%, rgba(0,0,0,0.10) 60%, transparent 100%)",
                  }}
                />
                <div className="absolute bottom-0 left-0 p-4">
                  <p
                    className="mb-0.5 text-xs font-medium text-white/70"
                    style={{ fontFamily: '"PlusJakartaSans", sans-serif' }}
                  >
                    {card.category}
                  </p>
                  <p
                    className="text-base font-bold text-white md:text-lg"
                    style={{ fontFamily: '"PlusJakartaSans", sans-serif' }}
                  >
                    {card.title}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
