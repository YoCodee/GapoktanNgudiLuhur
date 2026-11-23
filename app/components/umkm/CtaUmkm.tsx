"use client";

import ScrollReveal from "../ScrollReveal";

export default function CtaUmkm() {
  const waMessage = encodeURIComponent(
    "Halo KWT Ngudi Luhur, saya ingin berkonsultasi dan memesan produk olahan salak."
  );
  const waUrl = `https://wa.me/6281234567890?text=${waMessage}`;

  return (
    <section className="relative w-full overflow-hidden bg-[#1C3829] py-24 lg:py-32">
      {/* SisikKanan.png Ornament on right side (full height, partial width) */}
      <div
        className="pointer-events-none absolute right-0 top-0 bottom-0 z-0 h-full w-[55%] sm:w-[60%] md:w-full md:max-w-[750px] bg-repeat-y bg-right-top opacity-75 md:opacity-85 select-none"
        style={{
          backgroundImage: "url('/assets/SisikKanan.png')",
          backgroundSize: "100% auto",
        }}
      />

      <ScrollReveal variant="blur-in" className="relative z-10 mx-auto max-w-4xl px-6 text-center md:px-12">
        <h2
          className="mb-6 text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl"
          style={{ fontFamily: '"PlusJakartaSans", sans-serif' }}
        >
          Siap Membawa Pulang
          <br />
          Cita Rasa Merapi?
        </h2>
        <p
          className="mx-auto mb-10 max-w-2xl text-base leading-relaxed text-white/85 sm:text-lg"
          style={{ fontFamily: '"PlusJakartaSans", sans-serif' }}
        >
          Dapatkan produk olahan salak premium langsung dari dapur KWT
          Ngudi Luhur. Segar, higienis, dan penuh kasih tangan petani Srumbung.
        </p>

        <a
          href={waUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 rounded-full bg-[#D4622E] px-8 py-4 text-sm font-bold text-white shadow-xl transition-all hover:brightness-110 hover:shadow-2xl active:scale-95"
          style={{ fontFamily: '"PlusJakartaSans", sans-serif' }}
        >
          {/* WhatsApp Icon */}
          <svg
            className="h-4 w-4 fill-current text-white"
            viewBox="0 0 24 24"
          >
            <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.007c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.275.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.043.072.043.419-.101.824z" />
          </svg>
          Pesan via WhatsApp Sekarang
        </a>
      </ScrollReveal>
    </section>
  );
}
