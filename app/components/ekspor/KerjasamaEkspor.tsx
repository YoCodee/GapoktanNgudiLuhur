export default function KerjasamaEkspor() {
  const waLink =
    "https://wa.me/6281234567890?text=Halo%2C%20saya%20tertarik%20bermitra%20dengan%20Gapoktan%20Ngudi%20Luhur";

  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ backgroundColor: "#1C3829", paddingTop: "80px", paddingBottom: "80px" }}
    >
      {/* Decorative pattern right */}
      <div
        className="pointer-events-none absolute right-0 top-0 h-full w-1/2 opacity-10"
        style={{
          backgroundImage: `radial-gradient(circle at center, #D4622E 1.5px, transparent 1.5px)`,
          backgroundSize: "28px 28px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center md:px-12">
        <p
          className="mb-4 text-sm font-semibold tracking-widest"
          style={{ fontFamily: '"BricolageGrotesque", sans-serif', color: "#D4622E" }}
        >
          Kerjasama
        </p>
        <h2
          className="mb-6 text-4xl font-extrabold text-white md:text-5xl lg:text-6xl"
          style={{ fontFamily: '"BricolageGrotesque", sans-serif', lineHeight: 1.1 }}
        >
          Tertarik Bermitra bersama Kami?
        </h2>
        <p
          className="mx-auto mb-10 max-w-2xl text-base leading-relaxed text-white/70 md:text-lg"
          style={{ fontFamily: '"Literata", serif' }}
        >
          Kami terbuka untuk kerjasama dengan eksportir, distributor, buyer internasional, dan
          investor yang ingin mengembangkan rantai pasok salak premium bersama komunitas petani
          Srumbung, Magelang.
        </p>
        <a
          href={waLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 rounded-full border border-white/30 bg-white/10 px-8 py-4 text-sm font-bold text-white backdrop-blur-sm transition-all hover:bg-white/20"
          style={{ fontFamily: '"BricolageGrotesque", sans-serif' }}
        >
          <span>💬</span>
          Hubungi Tim Ekspor via WhatsApp
        </a>
      </div>
    </section>
  );
}
