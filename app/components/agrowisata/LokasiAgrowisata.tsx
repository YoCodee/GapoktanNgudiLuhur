"use client";

export default function LokasiAgrowisata() {
  const mapsLink =
    "https://maps.google.com/?q=Jrakah,+Kaliurang,+Kec.+Srumbung,+Magelang+56483";
  const embedSrc =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3953.0!2d110.3!3d-7.6!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zGapoktan+Ngudi+Luhur!5e0!3m2!1sen!2sid!4v1234567890";

  return (
    <section className="w-full bg-[#FAF9F6] pb-20 pt-8 lg:pb-28">
      <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-16">
        {/* Header */}
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <p
            className="mb-3 text-sm font-bold uppercase tracking-wider"
            style={{ fontFamily: '"PlusJakartaSans", sans-serif', color: "#D4622E" }}
          >
            LOKASI KAMI
          </p>
          <h2
            className="mb-4 text-3xl font-extrabold leading-tight text-[#1C3829] sm:text-4xl lg:text-5xl"
            style={{ fontFamily: '"PlusJakartaSans", sans-serif' }}
          >
            Mudah Ditemukan,
            <br />
            Layak Dikunjungi
          </h2>
          <p
            className="text-base text-gray-600"
            style={{ fontFamily: '"PlusJakartaSans", sans-serif' }}
          >
            Terletak di kaki Gunung Merapi yang sejuk, mudah diakses dari
            Yogyakarta, Magelang, dan Solo.
          </p>
        </div>

        {/* Map Card */}
        <div className="relative mx-auto max-w-5xl overflow-hidden rounded-3xl bg-[#1C3829] shadow-md">
          <div className="relative h-[340px] w-full sm:h-[380px]">
            <iframe
              src={embedSrc}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Peta Lokasi Gapoktan Ngudi Luhur"
            />
          </div>
        </div>

        {/* Address Bar & Google Maps CTA */}
        <div className="mt-8 flex flex-col items-center justify-center gap-4 text-center sm:flex-row">
          <div className="flex items-center gap-2 text-sm text-gray-700">
            <svg
              className="h-4 w-4 shrink-0 text-[#D4622E]"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            <span style={{ fontFamily: '"PlusJakartaSans", sans-serif' }}>
              99V8+5QH, Jrakah, Kaliurang, Kec. Srumbung, Magelang 56483
            </span>
          </div>

          <a
            href={mapsLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full px-6 py-2.5 text-xs font-bold text-white shadow-sm transition-all hover:brightness-110 active:scale-95"
            style={{
              fontFamily: '"PlusJakartaSans", sans-serif',
              backgroundColor: "#D4622E",
            }}
          >
            Buka di Google Maps →
          </a>
        </div>
      </div>
    </section>
  );
}
