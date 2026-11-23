import Image from "next/image";
import ScrollReveal from "../ScrollReveal";

const partners = [
  {
    tag: "MITRA DISTRIBUSI NASIONAL",
    name: "PT Sewu Segar Nusantara",
    desc: "Mitra distribusi nasional — Sunpride. Salah satu perusahaan agribisnis buah segar terbesar di Indonesia.",
  },
  {
    tag: "PROGRAM PEMBERDAYAAN",
    name: "Desa Sejahtera Astra",
    desc: "Program pemberdayaan petani unggulan dari PT Astra International. Ngudi Luhur menjadi unit percontohan nasional.",
  },
];

const certifications = [
  {
    icon: "/assets/icons/Vectorperlindungan.png",
    title: "Karantina Pertanian",
    desc: "Lolos pemeriksaan BBKP/BKIPM",
  },
  {
    icon: "/assets/icons/Vector.png",
    title: "Sertifikasi Organik",
    desc: "300 hektar lahan tersertifikasi",
  },
  {
    icon: "/assets/icons/Ekspor.png",
    title: "Standar Grading Ekspor",
    desc: "Grade A/B sesuai permintaan buyer",
  },
  {
    icon: "/assets/icons/Temperatur.png",
    title: "Reefer Container",
    desc: "Pengiriman suhu terkontrol",
  },
];

export default function AboutEkspor() {
  return (
    <section
      className="w-full"
      style={{ backgroundColor: "#FAF9F6", paddingTop: "80px", paddingBottom: "80px" }}
    >
      <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-16">
        {/* Top — 2 col header */}
        <ScrollReveal variant="fade-up" className="mb-12 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
          <div>
            <p
              className="mb-3 text-sm font-semibold tracking-wide"
              style={{ fontFamily: '"PlusJakartaSans", sans-serif', color: "#D4622E" }}
            >
              Kepercayaan &amp; Legalitas
            </p>
            <h2
              className="text-4xl font-extrabold leading-tight text-[#1C3829] md:text-5xl"
              style={{ fontFamily: '"PlusJakartaSans", sans-serif' }}
            >
              Dipercaya oleh Mitra Kelas Nasional
            </h2>
          </div>
          <div className="flex items-center">
            <p
              className="text-base leading-relaxed text-gray-600 md:text-lg"
              style={{ fontFamily: '"PlusJakartaSans", sans-serif' }}
            >
              Produk kami telah melewati kurasi ketat dan diterima oleh mitra distribusi nasional
              terkemuka, menjadikan Gapoktan Ngudi Luhur salah satu pemasok salak premium paling
              dipercaya di Indonesia.
            </p>
          </div>
        </ScrollReveal>

        {/* Partner cards */}
        <div className="mb-14 grid grid-cols-1 gap-6 md:grid-cols-2">
          {partners.map((p, idx) => (
            <ScrollReveal
              key={p.name}
              variant={idx === 0 ? "slide-left" : "slide-right"}
              delay={idx * 100}
              className="rounded-2xl border border-[#eceeed] bg-white p-7 shadow-sm transition-shadow hover:shadow-md"
            >
              <div>
                <p
                  className="mb-2 text-xs font-bold tracking-widest uppercase"
                  style={{ fontFamily: '"PlusJakartaSans", sans-serif', color: "#D4622E" }}
                >
                  {p.tag}
                </p>
                <h3
                  className="mb-3 text-2xl font-bold text-[#1C3829]"
                  style={{ fontFamily: '"PlusJakartaSans", sans-serif' }}
                >
                  {p.name}
                </h3>
                <p
                  className="text-sm leading-relaxed text-gray-600"
                  style={{ fontFamily: '"PlusJakartaSans", sans-serif' }}
                >
                  {p.desc}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Certifications row with real icons */}
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {certifications.map((c, i) => (
            <ScrollReveal
              key={i}
              variant="pop-up"
              delay={i * 90}
              className="border-l-2 border-gray-200 pl-4 flex flex-col justify-start"
            >
              <div className="mb-3 relative w-6 h-6 flex items-center">
                <Image
                  src={c.icon}
                  alt={c.title}
                  width={24}
                  height={24}
                  className="object-contain"
                />
              </div>
              <p
                className="mb-1 font-bold text-[#1C3829]"
                style={{ fontFamily: '"PlusJakartaSans", sans-serif', fontSize: "15px" }}
              >
                {c.title}
              </p>
              <p
                className="text-xs text-gray-500 leading-relaxed"
                style={{ fontFamily: '"PlusJakartaSans", sans-serif' }}
              >
                {c.desc}
              </p>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
