import Image from "next/image";

const activeMarkets = [
  { flag: "/assets/flags/cn.png", name: "China", desc: "±700 Ton (Jan–Okt 2025)" },
  { flag: "/assets/flags/kh.png", name: "Kamboja", desc: "Pengiriman rutin" },
  { flag: "/assets/flags/eu.png", name: "Eropa", desc: "Standar premium" },
  { flag: "/assets/flags/tl.png", name: "Timor Leste", desc: "Pasar berkembang" },
];

const targetMarkets = [
  { flag: "/assets/flags/vn.png", name: "Vietnam", desc: "Ekspansi 2025–2026" },
  { flag: "/assets/flags/sa.png", name: "Arab Saudi", desc: "Pasar Timur Tengah" },
  { flag: "/assets/flags/us.png", name: "USA", desc: "Pasar premium diaspora" },
  { flag: "/assets/flags/jp.png", name: "Jepang", desc: "Standar kualitas tinggi" },
];

export default function JangkauanEkspor() {
  return (
    <section
      className="w-full"
      style={{ backgroundColor: "#FAF9F6", paddingTop: "80px", paddingBottom: "80px" }}
    >
      <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-16">
        {/* Header */}
        <div className="mb-14 text-center">
          <p
            className="mb-3 text-sm font-semibold tracking-widest"
            style={{ fontFamily: '"BricolageGrotesque", sans-serif', color: "#D4622E" }}
          >
            Jangkauan Ekspor
          </p>
          <h2
            className="mb-5 text-5xl font-extrabold leading-tight text-[#1C3829] md:text-6xl"
            style={{ fontFamily: '"BricolageGrotesque", sans-serif' }}
          >
            Menjangkau Pasar di 4 Penjuru Dunia
          </h2>
          <p
            className="mx-auto max-w-2xl text-base leading-relaxed text-gray-500 md:text-lg"
            style={{ fontFamily: '"Literata", serif' }}
          >
            Dengan pengiriman rutin 30–50 ton per minggu, produk kami telah menjangkau pasar Asia
            dan Eropa — dan terus berkembang.
          </p>
        </div>

        {/* Divider + stat row */}
        <div style={{ height: "1px", backgroundColor: "#e5e7eb", marginBottom: "32px" }} />
        <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <span
              className="text-5xl font-extrabold"
              style={{ fontFamily: '"BricolageGrotesque", sans-serif', color: "#D4622E" }}
            >
              ±700
            </span>
            <span
              className="ml-3 text-2xl font-bold text-[#1C3829]"
              style={{ fontFamily: '"BricolageGrotesque", sans-serif' }}
            >
              Ton
            </span>
          </div>
          <div className="max-w-sm">
            <p
              className="mb-1 text-sm font-semibold text-[#1C3829]"
              style={{ fontFamily: '"BricolageGrotesque", sans-serif' }}
            >
              diekspor ke China, Januari–Oktober 2025
            </p>
            <p
              className="text-xs leading-relaxed text-gray-500"
              style={{ fontFamily: '"Literata", serif' }}
            >
              Pengiriman rutin 30–50 ton per minggu ke China, Kamboja, Eropa, dan Timor Leste.
            </p>
          </div>
        </div>
        <div style={{ height: "1px", backgroundColor: "#e5e7eb", marginBottom: "48px" }} />

        {/* Two column markets */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          {/* Active markets */}
          <div>
            <p
              className="mb-4 text-base font-bold"
              style={{ fontFamily: '"BricolageGrotesque", sans-serif', color: "#D4622E" }}
            >
              Pasar Aktif Saat Ini
            </p>
            <div style={{ height: "1px", backgroundColor: "#e5e7eb", marginBottom: "16px" }} />
            {activeMarkets.map((m) => (
              <div key={m.name}>
                <div className="flex items-center gap-4 py-4">
                  <div className="relative h-8 w-10 overflow-hidden rounded-sm flex-shrink-0">
                    <Image src={m.flag} alt={m.name} fill className="object-cover" sizes="40px" />
                  </div>
                  <div>
                    <p
                      className="font-bold text-[#1C3829]"
                      style={{ fontFamily: '"BricolageGrotesque", sans-serif' }}
                    >
                      {m.name}
                    </p>
                    <p
                      className="text-xs text-gray-500"
                      style={{ fontFamily: '"Literata", serif' }}
                    >
                      {m.desc}
                    </p>
                  </div>
                </div>
                <div style={{ height: "1px", backgroundColor: "#e5e7eb" }} />
              </div>
            ))}
          </div>

          {/* Target markets */}
          <div>
            <p
              className="mb-4 text-base font-bold"
              style={{ fontFamily: '"BricolageGrotesque", sans-serif', color: "#D4622E" }}
            >
              Target Pasar Baru
            </p>
            <div style={{ height: "1px", backgroundColor: "#e5e7eb", marginBottom: "16px" }} />
            {targetMarkets.map((m) => (
              <div key={m.name}>
                <div className="flex items-center gap-4 py-4">
                  <div className="relative h-8 w-10 overflow-hidden rounded-sm flex-shrink-0">
                    <Image src={m.flag} alt={m.name} fill className="object-cover" sizes="40px" />
                  </div>
                  <div>
                    <p
                      className="font-bold text-[#1C3829]"
                      style={{ fontFamily: '"BricolageGrotesque", sans-serif' }}
                    >
                      {m.name}
                    </p>
                    <p
                      className="text-xs text-gray-500"
                      style={{ fontFamily: '"Literata", serif' }}
                    >
                      {m.desc}
                    </p>
                  </div>
                </div>
                <div style={{ height: "1px", backgroundColor: "#e5e7eb" }} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
