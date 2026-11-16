"use client";

import Image from "next/image";

export default function UnggulanUmkm() {
  const waMessage = encodeURIComponent(
    "Halo KWT Ngudi Luhur, saya tertarik untuk memesan produk inovatif Kopi Biji Salak. Mohon info lebih lanjut."
  );
  const waUrl = `https://wa.me/6281234567890?text=${waMessage}`;

  return (
    <section className="relative w-full overflow-hidden bg-[#1C3829] py-20 lg:py-28">
      {/* Decorative Sisik Pattern in background matching Unggulan-umkm.png */}
      <div className="pointer-events-none absolute -right-20 top-0 bottom-0 z-0 w-[600px] lg:w-[850px] overflow-hidden opacity-35">
        <Image
          src="/assets/SisikKanan.png"
          alt="Ornamen Sisik Salak"
          fill
          className="object-cover object-left"
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Column: Text & CTA */}
          <div>
            <p
              className="mb-3 text-sm font-bold uppercase tracking-wider"
              style={{ fontFamily: '"BricolageGrotesque", sans-serif', color: "#D4622E" }}
            >
              PRODUK INOVATIF UNGGULAN
            </p>
            <h2
              className="mb-2 text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl"
              style={{ fontFamily: '"BricolageGrotesque", sans-serif' }}
            >
              Kopi Biji Salak
            </h2>
            <p
              className="mb-6 text-xl italic text-white/90 sm:text-2xl"
              style={{ fontFamily: '"Literata", serif' }}
            >
              Inovasi Rasa dari Lereng Merapi
            </p>

            <p
              className="mb-6 text-base leading-relaxed text-white/80"
              style={{ fontFamily: '"Literata", serif' }}
            >
              Siapa sangka biji salak — yang selama ini terbuang sebagai limbah —
              bisa menjadi secangkir kopi yang aromatik dan memikat? KWT Ngudi
              Luhur berhasil mengolah biji Salak Nglumut menjadi kopi biji
              salak: produk inovatif yang bernilai tinggi, ramah lingkungan, dan
              benar-benar belum ada duanya.
            </p>

            <p
              className="mb-8 text-sm font-semibold text-white/90"
              style={{ fontFamily: '"BricolageGrotesque", sans-serif' }}
            >
              Dari limbah, lahir keistimewaan.
            </p>

            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 rounded-full bg-white px-7 py-3.5 text-sm font-bold text-[#1C3829] shadow-md transition-all hover:bg-neutral-100 hover:shadow-lg active:scale-95"
              style={{ fontFamily: '"BricolageGrotesque", sans-serif' }}
            >
              {/* Coffee Cup Icon */}
              <svg
                className="h-4 w-4 text-[#1C3829]"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M18 8h1a4 4 0 010 8h-1M2 8h16v9a4 4 0 01-4 4H6a4 4 0 01-4-4V8zM6 1v3M10 1v3M14 1v3"
                />
              </svg>
              Pesan Kopi Biji Salak
            </a>
          </div>

          {/* Right Column: Photo */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative aspect-square w-full max-w-[540px] overflow-hidden rounded-3xl border border-white/10 shadow-2xl">
              <Image
                src="/assets/umkm/unggulan-umkm.png"
                alt="Proses pemilahan dan inovasi olahan kopi biji salak KWT Ngudi Luhur"
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
