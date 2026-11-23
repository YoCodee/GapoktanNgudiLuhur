import Image from "next/image";
import ScrollReveal from "./ScrollReveal";

const articles = [
  {
    id: 1,
    source: "Berita Magelang",
    title: "Ekspor Salak Nglumut Tembus Pasar China, Petani Berjaya",
    image: "/assets/DSC04999.webp",
    href: "#",
  },
  {
    id: 2,
    source: "Gemilang FM",
    title: "Inovasi Olahan Salak: KWT Ngudi Luhur Produksi Kurma Salak",
    image: "/assets/pillar-kwt.webp",
    href: "#",
  },
  {
    id: 3,
    source: "Media Nasional",
    title: "Agrowisata Salak Nglumut Jadi Destinasi Edukasi Unggulan",
    image: "/assets/pillar-agrowisata.webp",
    href: "#",
  },
];

export default function LiputanSection() {
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

      <div className="relative z-10 mx-auto max-w-5xl px-6 md:px-12 lg:px-16">
        {/* Header */}
        <ScrollReveal variant="fade-up" className="mb-10 text-center">
          <p
            className="mb-3 text-sm font-semibold tracking-widest"
            style={{ fontFamily: '"PlusJakartaSans", sans-serif', color: "#D4622E" }}
          >
            Liputan Media
          </p>
          <h2
            className="text-4xl font-extrabold md:text-5xl lg:text-6xl"
            style={{ fontFamily: '"PlusJakartaSans", sans-serif', color: "#1C3829" }}
          >
            Kabar dari Ngudi Luhur
          </h2>
        </ScrollReveal>

        {/* Article list */}
        <div>
          {articles.map((article, idx) => (
            <ScrollReveal key={article.id} variant="slide-left" delay={idx * 120}>
              {/* Divider atas */}
              <div style={{ height: "1px", backgroundColor: "#d1d9d4" }} />

              <div className="flex items-center gap-6 py-6">
                {/* Thumbnail */}
                <div
                  className="relative flex-shrink-0 overflow-hidden rounded-xl"
                  style={{ width: "100px", height: "80px" }}
                >
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    sizes="100px"
                    className="object-cover"
                  />
                </div>

                {/* Text */}
                <div className="flex-1">
                  <p
                    className="mb-1 text-xs font-medium"
                    style={{ fontFamily: '"PlusJakartaSans", sans-serif', color: "#7a9a84" }}
                  >
                    {article.source}
                  </p>
                  <h3
                    className="text-lg font-bold leading-snug md:text-xl"
                    style={{ fontFamily: '"PlusJakartaSans", sans-serif', color: "#1C3829" }}
                  >
                    {article.title}
                  </h3>
                </div>

                {/* CTA */}
                <a
                  href={article.href}
                  className="flex-shrink-0 text-sm font-semibold transition-opacity hover:opacity-70"
                  style={{
                    fontFamily: '"PlusJakartaSans", sans-serif',
                    color: "#D4622E",
                    whiteSpace: "nowrap",
                  }}
                >
                  Baca selengkapnya
                </a>
              </div>

              {/* Divider bawah (hanya di akhir) */}
              {idx === articles.length - 1 && (
                <div style={{ height: "1px", backgroundColor: "#d1d9d4" }} />
              )}
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
