import Image from "next/image";

export default function TentangUmkm() {
  return (
    <section className="w-full bg-[#FAF9F6] py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Column: Text & Quote */}
          <div>
            <p
              className="mb-3 text-sm font-bold uppercase tracking-wider"
              style={{ fontFamily: '"BricolageGrotesque", sans-serif', color: "#D4622E" }}
            >
              TENTANG KWT KAMI
            </p>
            <h2
              className="mb-6 text-3xl font-extrabold leading-tight text-[#1C3829] sm:text-4xl lg:text-5xl"
              style={{ fontFamily: '"BricolageGrotesque", sans-serif' }}
            >
              Motor Ekonomi
              <br />
              Kreatif Desa
            </h2>
            <div
              className="space-y-4 text-base leading-relaxed text-gray-700"
              style={{ fontFamily: '"Literata", serif' }}
            >
              <p>
                Di balik setiap produk olahan Ngudi Luhur, ada tangan-tangan
                terampil ibu-ibu Kelompok Wanita Tani (KWT) yang bekerja dengan
                penuh dedikasi. Mereka bukan sekadar pengolah — mereka adalah
                wirausahawan desa yang mengubah komoditas pertanian menjadi
                produk bernilai tambah tinggi.
              </p>
              <p>
                Dengan dukungan program Desa Sejahtera Astra, KWT Ngudi Luhur
                terus berinovasi — menciptakan produk-produk unik dari salak
                Nglumut yang tidak hanya laris di pasar lokal, tetapi berpotensi
                menembus pasar nasional.
              </p>
            </div>

            {/* Divider & Quote */}
            <div className="mt-8 border-t border-gray-200 pt-6">
              <div className="flex items-start gap-3">
                <span
                  className="select-none text-3xl font-bold leading-none"
                  style={{ color: "#D4622E", fontFamily: '"Literata", serif' }}
                >
                  “
                </span>
                <p
                  className="text-lg leading-snug text-[#1C3829] sm:text-xl"
                  style={{ fontFamily: '"Literata", serif' }}
                >
                  Transformasi salak segar menjadi produk bernilai tinggi,
                  dikelola oleh kelompok wanita tani sebagai motor ekonomi kreatif desa.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Photo */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative aspect-square w-full max-w-[540px] overflow-hidden rounded-3xl shadow-sm">
              <Image
                src="/assets/umkm/tentang-umkm.png"
                alt="Ibu-ibu dan pemuda Kelompok Wanita Tani KWT Ngudi Luhur dengan Salak Nglumut"
                fill
                className="object-cover object-center"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
