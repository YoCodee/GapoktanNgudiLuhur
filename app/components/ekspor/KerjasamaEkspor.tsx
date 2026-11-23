import ScrollReveal from "../ScrollReveal";

export default function KerjasamaEkspor() {
  const waLink =
    "https://wa.me/6281234567890?text=Halo%2C%20saya%20tertarik%20bermitra%20dengan%20Gapoktan%20Ngudi%20Luhur";

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

      <ScrollReveal variant="blur-in" className="relative z-10 mx-auto max-w-4xl px-6 text-center md:px-12">
        <p
          className="mb-4 text-sm font-semibold tracking-widest uppercase"
          style={{ fontFamily: '"PlusJakartaSans", sans-serif', color: "#D4622E" }}
        >
          Kerjasama
        </p>
        <h2
          className="mb-6 text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight"
          style={{ fontFamily: '"PlusJakartaSans", sans-serif' }}
        >
          Tertarik Bermitra bersama Kami?
        </h2>
        <p
          className="mx-auto mb-10 max-w-2xl text-base md:text-lg leading-relaxed text-white/70"
          style={{ fontFamily: '"PlusJakartaSans", sans-serif' }}
        >
          Kami terbuka untuk kerjasama dengan eksportir, distributor, buyer internasional, dan
          investor yang ingin mengembangkan rantai pasok salak premium bersama komunitas petani
          Srumbung, Magelang.
        </p>

        {/* CTA Button (solid brand orange pill with white WhatsApp icon & white text) */}
        <a
          href={waLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-3 rounded-full bg-[#D4622E] px-8 py-3.5 text-sm md:text-base font-bold text-white shadow-lg transition-all duration-200 hover:brightness-110 hover:shadow-xl hover:scale-105 active:scale-95"
          style={{ fontFamily: '"PlusJakartaSans", sans-serif' }}
        >
          {/* WhatsApp SVG Icon */}
          <svg
            className="w-5 h-5 flex-shrink-0 text-white"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.63C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2ZM12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19.01L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.81 13.47 3.81 11.91C3.81 7.37 7.5 3.67 12.05 3.67ZM9.14 7.39C8.98 7.39 8.71 7.45 8.48 7.7C8.25 7.95 7.6 8.56 7.6 9.81C7.6 11.06 8.51 12.27 8.64 12.44C8.77 12.61 10.4 15.26 12.95 16.26C15.08 17.09 15.51 16.92 15.97 16.88C16.43 16.84 17.44 16.28 17.65 15.7C17.86 15.11 17.86 14.61 17.8 14.51C17.74 14.41 17.58 14.35 17.33 14.22C17.08 14.1 15.86 13.5 15.63 13.42C15.4 13.34 15.24 13.3 15.07 13.55C14.91 13.8 14.45 14.35 14.31 14.51C14.17 14.67 14.03 14.69 13.78 14.57C13.54 14.45 12.75 14.19 11.81 13.35C11.08 12.7 10.58 11.9 10.44 11.65C10.3 11.41 10.42 11.27 10.55 11.15C10.66 11.04 10.8 10.86 10.93 10.71C11.05 10.57 11.09 10.46 11.17 10.3C11.25 10.13 11.21 10 11.15 9.87C11.09 9.75 10.63 8.63 10.44 8.16C10.25 7.7 10.06 7.77 9.91 7.76C9.77 7.76 9.61 7.76 9.44 7.76C9.28 7.76 9.14 7.39 9.14 7.39Z" />
          </svg>
          <span>Hubungi Tim Ekspor via WhatsApp</span>
        </a>
      </ScrollReveal>
    </section>
  );
}
