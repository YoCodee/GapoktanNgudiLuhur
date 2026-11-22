"use client";

import Image from "next/image";

const packages = [
  {
    id: "edukasi",
    tag: "PELAJAR & KOMUNITAS",
    title: "Paket Edukasi Budidaya",
    desc: "Cocok untuk sekolah, mahasiswa, dan komunitas yang ingin belajar langsung tentang budidaya salak Nglumut secara interaktif.",
    icon: "/assets/icons/agrowisata/leaf.png",
    cardBg: "#224131",
    borderClass: "border-white/10",
    tagColor: "text-white/60",
    iconBg: "bg-white/10",
    buttonText: "Booking Paket Ini →",
    buttonClass:
      "border border-white/30 bg-transparent text-white hover:bg-white/10",
    features: [
      "Tur keliling kebun salak",
      "Praktik teknik penyerbukan",
      "Edukasi pemeliharaan & panen",
      "Sesi tanya jawab petani",
    ],
  },
  {
    id: "studi-banding",
    tag: "INSTANSI & ORGANISASI",
    title: "Studi Banding (B2B)",
    desc: "Dirancang khusus untuk instansi pemerintah, akademisi, dan pelaku agribisnis yang ingin mempelajari tata kelola Gapoktan.",
    icon: "/assets/icons/agrowisata/building.png",
    cardBg: "#D4622E",
    borderClass: "border-white/20",
    tagColor: "text-white/80",
    iconBg: "bg-white/20",
    buttonText: "Ajukan Kunjungan →",
    buttonClass:
      "border border-white/50 bg-white/15 text-white hover:bg-white/25",
    features: [
      "Presentasi manajemen Gapoktan",
      "Kunjungan Packing House",
      "Simulasi sistem ekspor",
      "Diskusi model bisnis & KWT",
    ],
  },
  {
    id: "petik-buah",
    tag: "KELUARGA & WISATAWAN",
    title: "Wisata Petik Buah",
    desc: "Pengalaman seru memetik salak segar langsung dari pohonnya — cocok untuk liburan keluarga yang berkesan dan edukatif.",
    icon: "/assets/icons/agrowisata/fruit.png",
    cardBg: "#5A3D2B",
    borderClass: "border-white/10",
    tagColor: "text-white/60",
    iconBg: "bg-white/10",
    buttonText: "Booking Paket Ini →",
    buttonClass:
      "border border-white/30 bg-transparent text-white hover:bg-white/10",
    features: [
      "Akses kebun salak organik",
      "Pemandu lokal berpengalaman",
      "Mencicipi salak segar di kebun",
      "Oleh-oleh salak & olahan KWT",
    ],
  },
];

export default function PaketAgrowisata() {
  const handleSelectPackage = (packageTitle: string) => {
    window.dispatchEvent(
      new CustomEvent("select-paket-agrowisata", { detail: packageTitle })
    );
    const element = document.getElementById("rencanakan-kunjungan");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="paket-kunjungan"
      className="relative w-full overflow-hidden bg-[#1C3829] py-20 lg:py-28"
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
        {/* Header */}
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <p
            className="mb-3 text-sm font-bold uppercase tracking-wider"
            style={{ fontFamily: '"PlusJakartaSans", sans-serif', color: "#D4622E" }}
          >
            PAKET KUNJUNGAN
          </p>
          <h2
            className="text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-5xl"
            style={{ fontFamily: '"PlusJakartaSans", sans-serif' }}
          >
            Pilih Pengalaman
            <br />
            yang Tepat untuk Anda
          </h2>
        </div>

        {/* 3 Package Cards */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 lg:gap-8">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              className={`flex flex-col justify-between rounded-3xl border p-8 shadow-lg transition-transform duration-300 hover:-translate-y-1 ${pkg.borderClass}`}
              style={{ backgroundColor: pkg.cardBg }}
            >
              <div>
                {/* Icon Badge */}
                <div
                  className={`mb-6 flex h-12 w-12 items-center justify-center rounded-xl ${pkg.iconBg}`}
                >
                  <Image
                    src={pkg.icon}
                    alt={pkg.title}
                    width={24}
                    height={24}
                    className="object-contain"
                  />
                </div>

                {/* Tag */}
                <p
                  className={`mb-2 text-xs font-bold uppercase tracking-widest ${pkg.tagColor}`}
                  style={{ fontFamily: '"PlusJakartaSans", sans-serif' }}
                >
                  {pkg.tag}
                </p>

                {/* Title */}
                <h3
                  className="mb-3 text-2xl font-extrabold text-white"
                  style={{ fontFamily: '"PlusJakartaSans", sans-serif' }}
                >
                  {pkg.title}
                </h3>

                {/* Description */}
                <p
                  className="mb-6 text-sm leading-relaxed text-white/85"
                  style={{ fontFamily: '"PlusJakartaSans", sans-serif' }}
                >
                  {pkg.desc}
                </p>

                {/* Checklist */}
                <ul className="mb-8 space-y-3">
                  {pkg.features.map((feat) => (
                    <li key={feat} className="flex items-center gap-3">
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-white/40 text-white">
                        <svg
                          className="h-3 w-3"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </span>
                      <span
                        className="text-sm text-white/90"
                        style={{ fontFamily: '"PlusJakartaSans", sans-serif' }}
                      >
                        {feat}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Button */}
              <button
                type="button"
                onClick={() => handleSelectPackage(pkg.title)}
                className={`w-full rounded-full py-3.5 text-sm font-bold transition-all active:scale-95 ${pkg.buttonClass}`}
                style={{ fontFamily: '"PlusJakartaSans", sans-serif' }}
              >
                {pkg.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
