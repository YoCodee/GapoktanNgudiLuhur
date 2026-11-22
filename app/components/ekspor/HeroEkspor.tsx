"use client";
import Image from "next/image";

const stats = [
  { value: "30–50", unit: "TON / MINGGU" },
  { value: "4", unit: "NEGARA TUJUAN" },
  { value: "±700", unit: "TON KE CHINA" },
];

export default function HeroEkspor() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[#1C3829]">
      {/* Background image matching Hero-Ekspor.png / Frame 24 */}
      <Image
        src="/assets/Frame 24.png"
        alt="Aktivitas Sortir Ekspor Salak Nglumut"
        fill
        className="object-cover object-center"
        priority
      />

      {/* Vertical fade-out: 0 opacity at top, thick #1C3829 at bottom */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(28, 56, 41, 0) 0%, rgba(28, 56, 41, 0.15) 45%, rgba(28, 56, 41, 0.75) 78%, #1C3829 100%)",
        }}
      />

      {/* Subtle left-to-right readability gradient */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            "linear-gradient(90deg, rgba(16, 35, 23, 0.55) 0%, rgba(16, 35, 23, 0.20) 45%, transparent 75%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-6 pb-24 pt-32 md:px-12 lg:px-16">
        <div className="flex w-full flex-col items-start gap-12 lg:flex-row lg:items-center lg:justify-between">

          {/* Left — text */}
          <div className="max-w-xl">
            <p
              className="mb-4 text-sm font-semibold tracking-widest"
              style={{ fontFamily: '"PlusJakartaSans", sans-serif', color: "#D4622E" }}
            >
              Giat Ekspor
            </p>
            <h1
              className="mb-6 text-5xl font-extrabold leading-tight text-white md:text-6xl lg:text-7xl"
              style={{ fontFamily: '"PlusJakartaSans", sans-serif' }}
            >
              Dari Lereng Merapi ke Pasar Dunia.
            </h1>
            <p
              className="mb-10 text-base leading-relaxed text-white/80 md:text-lg"
              style={{ fontFamily: '"PlusJakartaSans", sans-serif' }}
            >
              Salak Nglumut premium berkualitas ekspor — dikirim 30 hingga 50 ton setiap minggu ke
              China, Kamboja, Eropa, dan Timor Leste. Terstandarisasi, terkontrol, terpercaya.
            </p>
            <a
              href="https://wa.me/6281234567890?text=Halo%20saya%20ingin%20menghubungi%20Tim%20Ekspor"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-full bg-white px-8 py-3.5 text-sm font-bold text-[#1C3829] shadow-md transition-all hover:bg-neutral-100 hover:shadow-lg active:scale-95"
              style={{ fontFamily: '"PlusJakartaSans", sans-serif' }}
            >
              Hubungi Tim Ekspor
            </a>
          </div>

          {/* Right — stats card */}
          <div
            className="w-full rounded-2xl bg-white p-8 lg:w-[280px] lg:flex-shrink-0"
            style={{ boxShadow: "0 12px 40px rgba(0,0,0,0.35)" }}
          >
            {stats.map((stat, i) => (
              <div key={i}>
                {i > 0 && <div style={{ height: "1px", backgroundColor: "#f0f0f0", margin: "18px 0" }} />}
                <p
                  className="text-4xl font-extrabold leading-none"
                  style={{ fontFamily: '"PlusJakartaSans", sans-serif', color: "#D4622E" }}
                >
                  {stat.value}
                </p>
                <p
                  className="mt-2 text-xs font-bold tracking-widest text-[#1C3829]/70"
                  style={{ fontFamily: '"PlusJakartaSans", sans-serif' }}
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
