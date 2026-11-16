export default function Footer() {
  const currentYear = 2026;
  const waLink =
    "https://wa.me/6281234567890?text=Halo%20Gapoktan%20Ngudi%20Luhur";
  const mapsLink =
    "https://maps.google.com/?q=Jrakah,+Kaliurang,+Kec.+Srumbung,+Magelang+56483";

  return (
    <footer style={{ backgroundColor: "#1C3829" }}>
      {/* Main footer content */}
      <div
        className="mx-auto max-w-7xl px-6 py-14 md:px-12 lg:px-16"
      >
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">

          {/* Col 1 — Brand */}
          <div>
            <h3
              className="mb-3 text-3xl font-normal text-white"
              style={{ fontFamily: '"Literata", serif', fontStyle: "italic" }}
            >
              Ngudi Luhur
            </h3>
            <p
              className="mb-2 text-sm font-semibold text-white/80"
              style={{ fontFamily: '"BricolageGrotesque", sans-serif' }}
            >
              Pusat Agribisnis Salak Nglumut Premium
            </p>
            <p
              className="text-sm text-white/50"
              style={{ fontFamily: '"Literata", serif' }}
            >
              Srumbung, Kabupaten Magelang, Jawa Tengah
            </p>
          </div>

          {/* Col 2 — Navigasi */}
          <div>
            <p
              className="mb-5 text-xs font-bold uppercase tracking-widest text-white/40"
              style={{ fontFamily: '"BricolageGrotesque", sans-serif' }}
            >
              Navigasi
            </p>
            <ul className="space-y-3">
              {[
                { label: "Beranda", href: "/" },
                { label: "Giat Ekspor", href: "/ekspor" },
                { label: "UMKM & Olahan", href: "/#umkm" },
                { label: "Agrowisata", href: "/#agro-wisata" },
              ].map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-base text-white/80 transition-colors hover:text-white"
                    style={{ fontFamily: '"BricolageGrotesque", sans-serif' }}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Kontak & Lokasi */}
          <div>
            <p
              className="mb-5 text-xs font-bold uppercase tracking-widest text-white/40"
              style={{ fontFamily: '"BricolageGrotesque", sans-serif' }}
            >
              Kontak &amp; Lokasi
            </p>
            <p
              className="mb-4 text-sm leading-relaxed text-white/70"
              style={{ fontFamily: '"Literata", serif' }}
            >
              99V8+5QH, Jrakah, Kaliurang, Kec. Srumbung,
              <br />
              Magelang 56483
            </p>
            <div className="space-y-2">
              <a
                href={mapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-sm font-semibold transition-opacity hover:opacity-70"
                style={{ fontFamily: '"BricolageGrotesque", sans-serif', color: "#D4622E" }}
              >
                Buka di Google Maps →
              </a>
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-sm font-semibold transition-opacity hover:opacity-70"
                style={{ fontFamily: '"BricolageGrotesque", sans-serif', color: "#D4622E" }}
              >
                WhatsApp Gapoktan →
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        style={{ borderTop: "1px solid rgba(255,255,255,0.10)" }}
        className="mx-auto max-w-7xl px-6 py-5 md:px-12 lg:px-16"
      >
        <div className="flex flex-col items-center justify-between gap-2 md:flex-row">
          <p
            className="text-xs text-white/40"
            style={{ fontFamily: '"BricolageGrotesque", sans-serif' }}
          >
            © {currentYear} Gapoktan Ngudi Luhur, Srumbung, Magelang
          </p>
          <p
            className="text-xs text-white/40"
            style={{ fontFamily: '"BricolageGrotesque", sans-serif' }}
          >
            Salak Nglumut Premium · Sejak 2017
          </p>
        </div>
      </div>
    </footer>
  );
}
