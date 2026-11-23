import Image from "next/image";
import ScrollReveal from "../ScrollReveal";

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
      style={{ backgroundColor: "#1C3829", paddingTop: "90px", paddingBottom: "100px" }}
    >
      {/* Background Ornament SisikKanan.png di sisi kanan (full height, partial width) */}
      <div
        className="pointer-events-none absolute right-0 top-0 bottom-0 z-0 h-full w-[55%] sm:w-[60%] md:w-full md:max-w-[950px] bg-repeat-y bg-right-top opacity-75 md:opacity-85 select-none"
        style={{
          backgroundImage: "url('/assets/SisikKanan.png')",
          backgroundSize: "100% auto",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-12 lg:px-16">
        {/* Header */}
        <ScrollReveal variant="blur-in" className="mb-14 text-center">
          <p
            className="mb-3 text-sm font-semibold tracking-widest uppercase"
            style={{ fontFamily: '"PlusJakartaSans", sans-serif', color: "#D4622E" }}
          >
            Alur Operasional
          </p>
          <h2
            className="mb-5 text-4xl md:text-5xl lg:text-6xl font-extrabold text-white"
            style={{ fontFamily: '"PlusJakartaSans", sans-serif' }}
          >
            Dari Pohon hingga Kontainer
          </h2>
          <p
            className="mx-auto max-w-2xl text-base md:text-lg leading-relaxed text-white/70"
            style={{ fontFamily: '"PlusJakartaSans", sans-serif' }}
          >
            Setiap tahap dikendalikan dengan standar ketat untuk memastikan kualitas premium sampai
            ke tangan pembeli internasional.
          </p>
        </ScrollReveal>

        {/* Divider subtle line matching design */}
        <div
          className="w-full mx-auto mb-10"
          style={{ height: "1px", backgroundColor: "rgba(255,255,255,0.12)" }}
        />

        {/* Steps Grid with Card Containers matching Ekspor-3.png */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, idx) => (
            <ScrollReveal key={step.no} variant="zoom-in" delay={idx * 110} className="flex">
              <div
                className="group flex w-full flex-col overflow-hidden rounded-2xl transition-all duration-300 hover:-translate-y-1"
                style={{
                  backgroundColor: "#224131",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.25)",
                }}
              >
                {/* Card Image */}
                <div
                  className="relative w-full overflow-hidden"
                  style={{ aspectRatio: "16 / 10" }}
                >
                  <Image
                    src={step.image}
                    alt={step.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 25vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Card Body */}
                <div className="p-6 flex flex-col flex-1">
                  {/* Step number */}
                  <p
                    className="mb-2 text-3xl font-extrabold leading-none"
                    style={{ fontFamily: '"PlusJakartaSans", sans-serif', color: "#D4622E" }}
                  >
                    {step.no}
                  </p>

                  {/* Title */}
                  <h3
                    className="mb-3 text-lg md:text-xl font-bold text-white leading-snug"
                    style={{ fontFamily: '"PlusJakartaSans", sans-serif' }}
                  >
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p
                    className="text-sm leading-relaxed text-white/70 mt-auto"
                    style={{ fontFamily: '"PlusJakartaSans", sans-serif' }}
                  >
                    {step.desc}
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
