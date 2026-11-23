import ScrollReveal from "../ScrollReveal";

export default function CaraPesanUmkm() {
  const steps = [
    {
      num: 1,
      title: "Pilih Produk",
      desc: "Telusuri katalog dan temukan produk yang Anda inginkan.",
    },
    {
      num: 2,
      title: 'Klik "Pesan Sekarang"',
      desc: "Anda akan diarahkan ke WhatsApp dengan pesan otomatis yang sudah terisi.",
    },
    {
      num: 3,
      title: "Konfirmasi & Kirim",
      desc: "Tim kami konfirmasi ketersediaan dan detail pengiriman dalam waktu singkat.",
    },
  ];

  return (
    <section className="w-full bg-[#FAF9F6] py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-16">
        {/* Header */}
        <ScrollReveal variant="fade-up" className="mx-auto max-w-2xl text-center">
          <p
            className="mb-3 text-sm font-bold uppercase tracking-wider"
            style={{ fontFamily: '"PlusJakartaSans", sans-serif', color: "#D4622E" }}
          >
            CARA PESAN
          </p>
          <h2
            className="mb-6 text-3xl font-extrabold leading-tight text-[#1C3829] sm:text-4xl lg:text-5xl"
            style={{ fontFamily: '"PlusJakartaSans", sans-serif' }}
          >
            Mudah, Cepat,
            <br />
            Langsung ke Tangan Anda
          </h2>
        </ScrollReveal>

        {/* 3 Steps */}
        <div className="mx-auto mt-12 grid max-w-4xl grid-cols-1 gap-8 md:grid-cols-3 md:gap-10">
          {steps.map((step, idx) => (
            <ScrollReveal
              key={step.num}
              variant="pop-up"
              delay={idx * 140}
              className="flex flex-col items-center text-center"
            >
              <div
                className="mb-5 flex h-14 w-14 items-center justify-center rounded-full text-xl font-extrabold text-white shadow-sm"
                style={{
                  backgroundColor: "#D4622E",
                  fontFamily: '"PlusJakartaSans", sans-serif',
                }}
              >
                {step.num}
              </div>
              <h3
                className="mb-2 text-lg font-bold text-[#1C3829]"
                style={{ fontFamily: '"PlusJakartaSans", sans-serif' }}
              >
                {step.title}
              </h3>
              <p
                className="text-sm leading-relaxed text-gray-600"
                style={{ fontFamily: '"PlusJakartaSans", sans-serif' }}
              >
                {step.desc}
              </p>
            </ScrollReveal>
          ))}
        </div>

        {/* Bottom Expeditions Note */}
        <div className="mt-16 text-center">
          <p
            className="text-xs text-gray-500 sm:text-sm"
            style={{ fontFamily: '"PlusJakartaSans", sans-serif' }}
          >
            Melayani pemesanan seluruh Indonesia, pengiriman via JNE, J&amp;T, dan SiCepat
          </p>
        </div>
      </div>
    </section>
  );
}
