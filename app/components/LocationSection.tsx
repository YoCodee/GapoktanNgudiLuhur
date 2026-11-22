"use client";

export default function LocationSection() {
  const waLink =
    "https://wa.me/6281234567890?text=Halo%20Gapoktan%20Ngudi%20Luhur%2C%20saya%20ingin%20bermitra";
  const mapsLink =
    "https://maps.google.com/?q=Jrakah,+Kaliurang,+Kec.+Srumbung,+Magelang+56483";
  const embedSrc =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3953.0!2d110.3!3d-7.6!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zGapoktan+Ngudi+Luhur!5e0!3m2!1sen!2sid!4v1234567890";

  return (
    <section
      id="hubungi-kami"
      className="relative w-full"
      style={{ backgroundColor: "#1C3829", paddingTop: "80px", paddingBottom: "0" }}
    >
      {/* Text block */}
      <div className="mx-auto max-w-4xl px-6 pb-12 text-center md:px-12">
        <p
          className="mb-4 text-sm font-semibold tracking-widest"
          style={{ fontFamily: '"PlusJakartaSans", sans-serif', color: "#D4622E" }}
        >
          Hubungi Kami
        </p>
        <h2
          className="mb-6 text-4xl font-extrabold text-white md:text-5xl lg:text-6xl"
          style={{ fontFamily: '"PlusJakartaSans", sans-serif', lineHeight: 1.1 }}
        >
          Siap Bermitra atau Berkunjung?
        </h2>
        <p
          className="mx-auto mb-10 max-w-2xl text-base leading-relaxed text-white/70 md:text-lg"
          style={{ fontFamily: '"PlusJakartaSans", sans-serif' }}
        >
          Kami terbuka untuk kemitraan ekspor, pembelian produk olahan UMKM, maupun kunjungan
          edukasi Agrowisata di lereng Merapi.
        </p>

        {/* WhatsApp button */}
        <a
          href={waLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block rounded-full border border-white/40 bg-white px-8 py-3 text-sm font-semibold text-[#1C3829] transition-all hover:bg-white/90"
          style={{ fontFamily: '"PlusJakartaSans", sans-serif' }}
        >
          Hubungi via WhatsApp
        </a>
      </div>

      {/* Map container */}
      <div className="relative mx-6 mb-0 overflow-hidden rounded-t-3xl md:mx-12 lg:mx-16" style={{ height: "380px" }}>
        <iframe
          src={embedSrc}
          width="100%"
          height="100%"
          style={{ border: 0, filter: "grayscale(30%) contrast(90%)" }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Lokasi Gapoktan Ngudi Luhur"
        />

        {/* Info card bottom-left */}
        <div
          className="absolute bottom-5 left-5 rounded-xl bg-white px-5 py-4 shadow-lg"
          style={{ maxWidth: "260px" }}
        >
          <p
            className="mb-1 font-bold text-[#1C3829]"
            style={{ fontFamily: '"PlusJakartaSans", sans-serif', fontSize: "15px" }}
          >
            Gapoktan Ngudi Luhur
          </p>
          <p
            className="text-xs leading-relaxed text-gray-500"
            style={{ fontFamily: '"PlusJakartaSans", sans-serif' }}
          >
            Jrakah, Kaliurang, Kec. Srumbung,
            <br />
            Magelang 56483
          </p>
        </div>

        {/* Google Maps button bottom-right */}
        <a
          href={mapsLink}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute bottom-5 right-5 rounded-full border border-gray-300 bg-white px-5 py-2 text-sm font-semibold text-[#1C3829] shadow-lg transition-all hover:bg-gray-50"
          style={{ fontFamily: '"PlusJakartaSans", sans-serif' }}
        >
          Buka di Google Maps
        </a>
      </div>
    </section>
  );
}
