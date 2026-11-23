import Image from "next/image";
import ScrollReveal from "../ScrollReveal";

export default function FasilitasAgrowisata() {
  return (
    <section className="w-full bg-[#FAF9F6] py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-16">
        {/* Header */}
        <ScrollReveal variant="fade-up" className="mx-auto mb-12 max-w-2xl text-center">
          <p
            className="mb-3 text-sm font-bold uppercase tracking-wider"
            style={{ fontFamily: '"PlusJakartaSans", sans-serif', color: "#D4622E" }}
          >
            FASILITAS
          </p>
          <h2
            className="mb-4 text-3xl font-extrabold leading-tight text-[#1C3829] sm:text-4xl lg:text-5xl"
            style={{ fontFamily: '"PlusJakartaSans", sans-serif' }}
          >
            Lengkap untuk
            <br />
            Semua Jenis Kunjungan
          </h2>
          <p
            className="text-base text-gray-600"
            style={{ fontFamily: '"PlusJakartaSans", sans-serif' }}
          >
            Kami memastikan setiap pengunjung mendapat kenyamanan maksimal
            selama berada di kawasan Agrowisata Ngudi Luhur.
          </p>
        </ScrollReveal>

        {/* Bento Gallery Grid */}
        <div className="space-y-5">
          {/* Top Row: 1 Large Left (7 cols) + 2 Stacked Right (5 cols) */}
          <div className="grid grid-cols-1 gap-5 lg:grid-cols-12">
            {/* Card 1: Area Sortasi & Packing House */}
            <ScrollReveal variant="zoom-in" delay={0} className="lg:col-span-7">
            <div className="group relative h-full min-h-[300px] overflow-hidden rounded-2xl bg-neutral-200 shadow-sm lg:min-h-[420px]">
              <Image
                src="/assets/umkm/unggulan-umkm.png"
                alt="Area Sortasi dan Packing House"
                fill
                className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(0,0,0,0) 45%, rgba(16,35,23,0.88) 100%)",
                }}
              />
              <div className="absolute bottom-5 left-6 right-6 text-white">
                <p
                  className="mb-1 text-[11px] font-bold uppercase tracking-widest text-white/75"
                  style={{ fontFamily: '"PlusJakartaSans", sans-serif' }}
                >
                  FASILITAS UTAMA
                </p>
                <h3
                  className="text-xl font-bold"
                  style={{ fontFamily: '"PlusJakartaSans", sans-serif' }}
                >
                  Area Sortasi &amp; Packing House
                </h3>
              </div>
            </div>
            </ScrollReveal>

            {/* Right Column: 2 Stacked Cards */}
            <div className="grid grid-cols-1 gap-5 lg:col-span-5">
              {/* Card 2: Kebun Salak Nglumut Asri */}
              <ScrollReveal variant="zoom-in" delay={100}>
              <div className="group relative min-h-[200px] overflow-hidden rounded-2xl bg-neutral-200 shadow-sm">
                <Image
                  src="/assets/DSC05002.webp"
                  alt="Kebun Salak Nglumut Asri"
                  fill
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(0,0,0,0) 40%, rgba(16,35,23,0.88) 100%)",
                  }}
                />
                <div className="absolute bottom-4 left-5 right-5 text-white">
                  <p
                    className="mb-0.5 text-[10px] font-bold uppercase tracking-widest text-white/75"
                    style={{ fontFamily: '"PlusJakartaSans", sans-serif' }}
                  >
                    EDUKASI LAPANGAN
                  </p>
                  <h3
                    className="text-base font-bold"
                    style={{ fontFamily: '"PlusJakartaSans", sans-serif' }}
                  >
                    Kebun Salak Nglumut Asri
                  </h3>
                </div>
              </div>
              </ScrollReveal>

              {/* Card 3: Pusat Oleh-oleh KWT */}
              <ScrollReveal variant="zoom-in" delay={190}>
              <div className="group relative min-h-[200px] overflow-hidden rounded-2xl bg-neutral-200 shadow-sm">
                <Image
                  src="/assets/DSC04999.webp"
                  alt="Pusat Oleh-oleh KWT"
                  fill
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(0,0,0,0) 40%, rgba(16,35,23,0.88) 100%)",
                  }}
                />
                <div className="absolute bottom-4 left-5 right-5 text-white">
                  <p
                    className="mb-0.5 text-[10px] font-bold uppercase tracking-widest text-white/75"
                    style={{ fontFamily: '"PlusJakartaSans", sans-serif' }}
                  >
                    GALERI PRODUK
                  </p>
                  <h3
                    className="text-base font-bold"
                    style={{ fontFamily: '"PlusJakartaSans", sans-serif' }}
                  >
                    Pusat Oleh-oleh KWT
                  </h3>
                </div>
              </div>
              </ScrollReveal>
            </div>
          </div>

          {/* Bottom Row: 2 Cards (7 cols + 5 cols) */}
          <div className="grid grid-cols-1 gap-5 lg:grid-cols-12">
            {/* Card 4: Spot Edukasi & Foto Kebun */}
            <ScrollReveal variant="zoom-in" delay={260} className="lg:col-span-7">
            <div className="group relative min-h-[220px] overflow-hidden rounded-2xl bg-neutral-200 shadow-sm lg:min-h-[250px]">
              <Image
                src="/assets/umkm/tentang-umkm.png"
                alt="Spot Edukasi dan Foto Kebun"
                fill
                className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(0,0,0,0) 40%, rgba(16,35,23,0.88) 100%)",
                }}
              />
              <div className="absolute bottom-4 left-5 right-5 text-white">
                <p
                  className="mb-0.5 text-[10px] font-bold uppercase tracking-widest text-white/75"
                  style={{ fontFamily: '"PlusJakartaSans", sans-serif' }}
                >
                  INTERAKSI KELUARGA
                </p>
                <h3
                  className="text-lg font-bold"
                  style={{ fontFamily: '"PlusJakartaSans", sans-serif' }}
                >
                  Spot Edukasi &amp; Foto Kebun
                </h3>
              </div>
            </div>
            </ScrollReveal>

            {/* Card 5: Pendopo & Ruang Pertemuan */}
            <ScrollReveal variant="zoom-in" delay={340} className="lg:col-span-5">
            <div className="group relative min-h-[220px] overflow-hidden rounded-2xl bg-neutral-200 shadow-sm lg:min-h-[250px]">
              <Image
                src="/assets/pillar-packinghouse.webp"
                alt="Pendopo dan Ruang Pertemuan"
                fill
                className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(0,0,0,0) 40%, rgba(16,35,23,0.88) 100%)",
                }}
              />
              <div className="absolute bottom-4 left-5 right-5 text-white">
                <p
                  className="mb-0.5 text-[10px] font-bold uppercase tracking-widest text-white/75"
                  style={{ fontFamily: '"PlusJakartaSans", sans-serif' }}
                >
                  FASILITAS DISKUSI
                </p>
                <h3
                  className="text-lg font-bold"
                  style={{ fontFamily: '"PlusJakartaSans", sans-serif' }}
                >
                  Pendopo &amp; Ruang Pertemuan
                </h3>
              </div>
            </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
