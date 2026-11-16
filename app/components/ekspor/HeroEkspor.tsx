"use client";
import Image from "next/image";

const stats = [
  { value: "30–50", unit: "TON / MINGGU" },
  { value: "4", unit: "NEGARA TUJUAN" },
  { value: "±700", unit: "TON KE CHINA" },
];

export default function HeroEkspor() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      {/* Background image */}
      <Image
        src="/assets/DSC04999.webp"
        alt="Packing House Ekspor Salak Nglumut"
        fill
        className="object-cover"
        priority
      />
      {/* Dark overlay */}
      <div
        className="absolute inset-0"
        style={{ background: "linear-gradient(to right, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.40) 60%, rgba(0,0,0,0.20) 100%)" }}
      />

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-6 pb-24 pt-32 md:px-12 lg:px-16">
        <div className="flex w-full flex-col items-start gap-12 lg:flex-row lg:items-center lg:justify-between">

          {/* Left — text */}
          <div className="max-w-xl">
            <p
              className="mb-4 text-sm font-semibold tracking-widest"
              style={{ fontFamily: '"BricolageGrotesque", sans-serif', color: "#D4622E" }}
            >
              Giat Ekspor
            </p>
            <h1
              className="mb-6 text-5xl font-extrabold leading-tight text-white md:text-6xl lg:text-7xl"
              style={{ fontFamily: '"BricolageGrotesque", sans-serif' }}
            >
              Dari Lereng Merapi ke Pasar Dunia.
            </h1>
            <p
              className="mb-10 text-base leading-relaxed text-white/80 md:text-lg"
              style={{ fontFamily: '"Literata", serif' }}
            >
              Salak Nglumut premium berkualitas ekspor — dikirim 30 hingga 50 ton setiap minggu ke
              China, Kamboja, Eropa, dan Timor Leste. Terstandarisasi, terkontrol, terpercaya.
            </p>
            <a
              href="https://wa.me/6281234567890?text=Halo%20saya%20ingin%20menghubungi%20Tim%20Ekspor"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-full bg-white px-8 py-3 text-sm font-bold text-[#1C3829] transition-all hover:bg-white/90"
              style={{ fontFamily: '"BricolageGrotesque", sans-serif' }}
            >
              Hubungi Tim Ekspor
            </a>
          </div>

          {/* Right — stats card */}
          <div
            className="w-full rounded-2xl bg-white p-8 lg:w-auto lg:min-w-[280px]"
            style={{ boxShadow: "0 8px 40px rgba(0,0,0,0.25)" }}
          >
            {stats.map((stat, i) => (
              <div key={i}>
                {i > 0 && <div style={{ height: "1px", backgroundColor: "#e5e7eb", margin: "16px 0" }} />}
                <p
                  className="text-4xl font-extrabold"
                  style={{ fontFamily: '"BricolageGrotesque", sans-serif', color: "#D4622E" }}
                >
                  {stat.value}
                </p>
                <p
                  className="mt-1 text-xs font-bold tracking-widest text-gray-500"
                  style={{ fontFamily: '"BricolageGrotesque", sans-serif' }}
                >
                  {stat.unit}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
