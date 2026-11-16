import Image from "next/image";

const steps = [
  {
    no: "01",
    title: "Collecting House",
    desc: "Hasil panen dari 5 Poktan binaan dikumpulkan ke pusat distribusi Gapoktan. Pencatatan berat dan asal kebun dilakukan secara sistematis sebelum masuk proses selanjutnya.",
    image: "/assets/DSC04999.webp",
  },
  {
    no: "02",
    title: "Packing House",
    desc: "Buah dicuci bersih dan diseleksi berdasarkan standar berat dan tampilan fisik. Buah non-ekspor dipisahkan untuk pasar lokal atau produk olahan KWT.",
    image: "/assets/pillar-packinghouse.webp",
  },
  {
    no: "03",
    title: "Quality Control & Grading",
    desc: "Sortase kedua yang lebih ketat dengan penimbangan akurat. Setiap buah diperiksa ulang untuk memastikan konsistensi kualitas premium sesuai standar buyer internasional.",
    image: "/assets/DSC05002.webp",
  },
  {
    no: "04",
    title: "Stuffing & Shipping",
    desc: "Buah dimuat ke kontainer bersuhu terkontrol yang menjaga kesegaran selama pengiriman. Siap diberangkatkan menuju China, Eropa, Kamboja, dan pasar Asia lainnya.",
    image: "/assets/section1.webp",
  },
];

export default function AlurEkspor() {
  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ backgroundColor: "#1C3829", paddingTop: "80px", paddingBottom: "80px" }}
    >
      {/* Decorative pattern right */}
      <div
        className="pointer-events-none absolute right-0 top-0 h-full w-80 opacity-10"
        style={{
          backgroundImage: `radial-gradient(circle at center, #D4622E 1.5px, transparent 1.5px)`,
          backgroundSize: "28px 28px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-12 lg:px-16">
        {/* Header */}
        <div className="mb-16 text-center">
          <p
            className="mb-3 text-sm font-semibold tracking-widest"
            style={{ fontFamily: '"BricolageGrotesque", sans-serif', color: "#D4622E" }}
          >
            Alur Operasional
          </p>
          <h2
            className="mb-5 text-5xl font-extrabold text-white md:text-6xl"
            style={{ fontFamily: '"BricolageGrotesque", sans-serif' }}
          >
            Dari Pohon hingga Kontainer
          </h2>
          <p
            className="mx-auto max-w-2xl text-base leading-relaxed text-white/70 md:text-lg"
            style={{ fontFamily: '"Literata", serif' }}
          >
            Setiap tahap dikendalikan dengan standar ketat untuk memastikan kualitas premium sampai
            ke tangan pembeli internasional.
          </p>
        </div>

        {/* Divider */}
        <div style={{ height: "1px", backgroundColor: "rgba(255,255,255,0.15)", marginBottom: "48px" }} />

        {/* Steps grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <div key={step.no} className="flex flex-col">
              {/* Image */}
              <div
                className="relative mb-5 w-full overflow-hidden rounded-2xl"
                style={{ aspectRatio: "4/3" }}
              >
                <Image
                  src={step.image}
                  alt={step.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 25vw"
                  className="object-cover"
                />
              </div>
              {/* Step number */}
              <p
                className="mb-2 text-3xl font-extrabold"
                style={{ fontFamily: '"BricolageGrotesque", sans-serif', color: "#D4622E" }}
              >
                {step.no}
              </p>
              {/* Title */}
              <h3
                className="mb-3 text-lg font-bold text-white"
                style={{ fontFamily: '"BricolageGrotesque", sans-serif' }}
              >
                {step.title}
              </h3>
              {/* Desc */}
              <p
                className="text-sm leading-relaxed text-white/60"
                style={{ fontFamily: '"Literata", serif' }}
              >
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
