"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const packageOptions = [
  "Paket Edukasi Budidaya",
  "Studi Banding (B2B)",
  "Wisata Petik Buah",
];

export default function BookingAgrowisata() {
  const [nama, setNama] = useState("");
  const [tanggal, setTanggal] = useState("");
  const [peserta, setPeserta] = useState("");
  const [paket, setPaket] = useState(packageOptions[0]);
  const [whatsapp, setWhatsapp] = useState("");
  const [catatan, setCatatan] = useState("");

  useEffect(() => {
    const handler = (e: Event) => {
      const customEvent = e as CustomEvent<string>;
      if (customEvent.detail && packageOptions.includes(customEvent.detail)) {
        setPaket(customEvent.detail);
      }
    };
    window.addEventListener("select-paket-agrowisata", handler);
    return () => window.removeEventListener("select-paket-agrowisata", handler);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const lines = [
      "Halo Tim Agrowisata Ngudi Luhur, saya ingin mengajukan kunjungan:",
      `- Nama / Instansi: ${nama || "-"}`,
      `- Paket Kunjungan: ${paket}`,
      `- Tanggal Kunjungan: ${tanggal || "-"}`,
      `- Jumlah Peserta: ${peserta || "-"} orang`,
      `- No. WhatsApp: ${whatsapp || "-"}`,
      catatan ? `- Catatan: ${catatan}` : "",
    ]
      .filter(Boolean)
      .join("\n");

    const url = `https://wa.me/6281234567890?text=${encodeURIComponent(lines)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const directWaUrl = `https://wa.me/6281234567890?text=${encodeURIComponent(
    "Halo Karang Taruna Ngudi Luhur, saya ingin berkonsultasi mengenai kunjungan Agrowisata."
  )}`;

  return (
    <section
      id="rencanakan-kunjungan"
      className="relative w-full overflow-hidden border-b border-white/10 bg-[#1C3829] py-20 lg:py-28"
    >
      {/* Ornamen SisikKanan.png di sisi kanan (full height, partial width) */}
      <div
        className="pointer-events-none absolute right-0 top-0 bottom-0 z-0 h-full w-[55%] sm:w-[60%] md:w-full md:max-w-[950px] bg-repeat-y bg-right-top opacity-75 md:opacity-85 select-none"
        style={{
          backgroundImage: "url('/assets/SisikKanan.png')",
          backgroundSize: "100% auto",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left Column: Info */}
          <div className="lg:col-span-5 lg:pt-6">
            <p
              className="mb-3 text-sm font-bold uppercase tracking-wider"
              style={{ fontFamily: '"PlusJakartaSans", sans-serif', color: "#D4622E" }}
            >
              RENCANAKAN KUNJUNGAN
            </p>
            <h2
              className="mb-5 text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-5xl"
              style={{ fontFamily: '"PlusJakartaSans", sans-serif' }}
            >
              Rencanakan
              <br />
              Kunjungan Anda
            </h2>
            <p
              className="mb-8 text-base leading-relaxed text-white/75"
              style={{ fontFamily: '"PlusJakartaSans", sans-serif' }}
            >
              Isi formulir di samping untuk mengajukan jadwal kunjungan atau
              konsultasi paket agrowisata bersama tim Karang Taruna Ngudi Luhur.
            </p>

            <p
              className="mb-3 text-xs text-white/50"
              style={{ fontFamily: '"PlusJakartaSans", sans-serif' }}
            >
              Atau hubungi kami langsung:
            </p>

            <a
              href={directWaUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 rounded-full border border-white/25 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-white/10 active:scale-95"
              style={{ fontFamily: '"PlusJakartaSans", sans-serif' }}
            >
              <svg
                className="h-4 w-4 fill-current text-[#25D366]"
                viewBox="0 0 24 24"
              >
                <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.007c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.275.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.043.072.043.419-.101.824z" />
              </svg>
              Via WhatsApp
            </a>
          </div>

          {/* Right Column: Form Card */}
          <div className="lg:col-span-7">
            <form
              onSubmit={handleSubmit}
              className="rounded-3xl border border-white/10 bg-[#224131] p-6 shadow-xl sm:p-8 lg:p-10"
            >
              <div className="space-y-5">
                {/* Nama Lengkap / Instansi */}
                <div>
                  <label
                    className="mb-2 block text-xs font-semibold text-white/80"
                    style={{ fontFamily: '"PlusJakartaSans", sans-serif' }}
                  >
                    Nama Lengkap / Instansi *
                  </label>
                  <input
                    type="text"
                    required
                    value={nama}
                    onChange={(e) => setNama(e.target.value)}
                    placeholder="Contoh: SMAN 1 Magelang / Budi Santoso"
                    className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/40 outline-none transition-colors focus:border-[#D4622E] focus:bg-white/10"
                    style={{ fontFamily: '"PlusJakartaSans", sans-serif' }}
                  />
                </div>

                {/* Tanggal & Jumlah Peserta */}
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      className="mb-2 block text-xs font-semibold text-white/80"
                      style={{ fontFamily: '"PlusJakartaSans", sans-serif' }}
                    >
                      Tanggal Kunjungan *
                    </label>
                    <input
                      type="date"
                      required
                      value={tanggal}
                      onChange={(e) => setTanggal(e.target.value)}
                      className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white outline-none transition-colors focus:border-[#D4622E] focus:bg-white/10"
                      style={{ fontFamily: '"PlusJakartaSans", sans-serif', colorScheme: "dark" }}
                    />
                  </div>

                  <div>
                    <label
                      className="mb-2 block text-xs font-semibold text-white/80"
                      style={{ fontFamily: '"PlusJakartaSans", sans-serif' }}
                    >
                      Jumlah Peserta *
                    </label>
                    <input
                      type="number"
                      min="1"
                      required
                      value={peserta}
                      onChange={(e) => setPeserta(e.target.value)}
                      placeholder="Contoh: 40"
                      className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/40 outline-none transition-colors focus:border-[#D4622E] focus:bg-white/10"
                      style={{ fontFamily: '"PlusJakartaSans", sans-serif' }}
                    />
                  </div>
                </div>

                {/* Pilih Paket */}
                <div>
                  <label
                    className="mb-2 block text-xs font-semibold text-white/80"
                    style={{ fontFamily: '"PlusJakartaSans", sans-serif' }}
                  >
                    Pilih Paket *
                  </label>
                  <select
                    value={paket}
                    onChange={(e) => setPaket(e.target.value)}
                    className="w-full rounded-xl border border-white/15 bg-[#1C3829] px-4 py-3 text-sm text-white outline-none transition-colors focus:border-[#D4622E]"
                    style={{ fontFamily: '"PlusJakartaSans", sans-serif' }}
                  >
                    {packageOptions.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Nomor WhatsApp */}
                <div>
                  <label
                    className="mb-2 block text-xs font-semibold text-white/80"
                    style={{ fontFamily: '"PlusJakartaSans", sans-serif' }}
                  >
                    Nomor WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    value={whatsapp}
                    onChange={(e) => setWhatsapp(e.target.value)}
                    placeholder="+62 812-xxxx-xxxx"
                    className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/40 outline-none transition-colors focus:border-[#D4622E] focus:bg-white/10"
                    style={{ fontFamily: '"PlusJakartaSans", sans-serif' }}
                  />
                </div>

                {/* Catatan Tambahan */}
                <div>
                  <label
                    className="mb-2 block text-xs font-semibold text-white/80"
                    style={{ fontFamily: '"PlusJakartaSans", sans-serif' }}
                  >
                    Catatan Tambahan (Opsional)
                  </label>
                  <textarea
                    rows={3}
                    value={catatan}
                    onChange={(e) => setCatatan(e.target.value)}
                    placeholder="Contoh: Kami ingin memesan konsumsi siang atau butuh presentasi khusus..."
                    className="w-full resize-none rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/40 outline-none transition-colors focus:border-[#D4622E] focus:bg-white/10"
                    style={{ fontFamily: '"PlusJakartaSans", sans-serif' }}
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="mt-2 flex w-full items-center justify-center gap-2.5 rounded-full py-3.5 text-sm font-bold text-white shadow-md transition-all hover:brightness-110 hover:shadow-lg active:scale-98"
                  style={{
                    fontFamily: '"PlusJakartaSans", sans-serif',
                    backgroundColor: "#D4622E",
                  }}
                >
                  <Image
                    src="/assets/icons/agrowisata/calendar.png"
                    alt="Ikon Kalender"
                    width={16}
                    height={16}
                    className="object-contain"
                  />
                  Ajukan Kunjungan
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
