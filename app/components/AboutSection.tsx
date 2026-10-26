import Image from "next/image";
import Link from "next/link";

export default function AboutSection() {
  return (
    <section
      id="tentang"
      className="w-full min-h-[860px] flex items-center bg-[#1C3829] py-16 lg:py-24"
    >
      <div className="w-full max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column (6 cols) */}
          <div className="lg:col-span-6">
            <p
              className="text-[#D4622E] font-semibold text-base mb-4"
              style={{ fontFamily: '"BricolageGrotesque", sans-serif' }}
            >
              Tentang Kami
            </p>

            <h2
              className="text-white text-4xl sm:text-5xl lg:text-[54px] font-extrabold leading-[1.1] tracking-tight mb-8"
              style={{ fontFamily: '"BricolageGrotesque", sans-serif' }}
            >
              Integrasi Lokal,
              <br />
              Standar Global.
            </h2>

            <div
              className="space-y-6 text-white/80 text-[15px] sm:text-base leading-relaxed max-w-[560px]"
              style={{ fontFamily: '"Literata", Georgia, serif' }}
            >
              <p>
                Berlokasi di kawasan vulkanik subur lereng barat Gunung Merapi
                dengan ketinggian strategis (MDPL) yang optimal, Gapoktan Ngudi
                Luhur merupakan pengelola sentra salak terbaik di Indonesia. Sejak
                2017, kami membangun ekosistem pertanian terintegrasi yang
                memberdayakan ratusan petani lokal di atas lahan seluas lebih
                dari 800 hektar.
              </p>
              <p>
                Kami fokus pada produksi Salak Nglumut Kualitas Premium yang
                memiliki daya saing tinggi di pasar internasional. Dengan sistem
                manajemen hulu-ke-hilir yang terstandarisasi, kami telah sukses
                mengekspor ratusan ton komoditas setiap tahunnya ke berbagai
                negara di Asia dan Eropa.
              </p>
              <p>
                Sebagai binaan dari program Desa Sejahtera Astra (DSA), kami
                berkomitmen menjadi unit percontohan nasional dalam hilirisasi
                produk pertanian — mulai dari buah segar untuk pasar ekspor,
                pengembangan produk turunan UMKM, hingga integrasi Agrowisata
                berbasis komunitas.
              </p>
            </div>

            <div className="mt-10">
              <Link
                href="#ekspor"
                className="inline-flex items-center justify-center px-8 py-3.5 bg-white text-[#1C3829] text-base font-semibold rounded-full shadow-md hover:bg-neutral-100 active:scale-[0.98] transition-all duration-200 cursor-pointer"
                style={{ fontFamily: '"BricolageGrotesque", sans-serif' }}
              >
                Lihat Alur Ekspor
              </Link>
            </div>
          </div>

          {/* Right Column (6 cols) - Image & Badge matching Frame 14.png */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end pb-10 pr-6 sm:pb-12 sm:pr-8">
            <div className="relative w-full max-w-[500px]">
              {/* Photo with rounded corners */}
              <div className="relative aspect-[4/4.3] w-full rounded-[28px] overflow-hidden shadow-2xl">
                <Image
                  src="/assets/Frame 24.png"
                  alt="Petani Gapoktan Ngudi Luhur melakukan sortasi salak nglumut premium"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 500px"
                />
              </div>

              {/* Floating Badge at bottom right corner overlapping both the image and the dark green background */}
              <div
                className="absolute -bottom-8 -right-6 sm:-bottom-10 sm:-right-8 lg:-bottom-12 lg:-right-10 z-10 bg-white rounded-2xl p-6 sm:p-7 shadow-2xl min-w-[210px]"
                style={{
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.45)",
                }}
              >
                <p
                  className="text-[#D4622E] text-4xl sm:text-[44px] font-extrabold leading-none mb-2"
                  style={{ fontFamily: '"BricolageGrotesque", sans-serif' }}
                >
                  800+
                </p>
                <p
                  className="text-[#1C3829] text-xs sm:text-[13px] font-bold tracking-wider uppercase mb-1"
                  style={{ fontFamily: '"BricolageGrotesque", sans-serif' }}
                >
                  HEKTAR LAHAN
                </p>
                <p
                  className="text-[#55645A] text-xs sm:text-sm font-medium"
                  style={{ fontFamily: '"BricolageGrotesque", sans-serif' }}
                >
                  Tersertifikasi Aktif
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
