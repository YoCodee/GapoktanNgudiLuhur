export default function StatsSection() {
  return (
    <section
      id="dampak"
      className="w-full min-h-[636px] flex items-center bg-[#FAF9F6] py-16 lg:py-24"
    >
      <div className="w-full max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column (5 cols) */}
          <div className="lg:col-span-5">
            <p
              className="text-[#D4622E] font-semibold text-base mb-5"
              style={{ fontFamily: '"BricolageGrotesque", sans-serif' }}
            >
              Dampak &amp; Capaian
            </p>

            <h2
              className="text-[#1C3829] text-4xl sm:text-5xl lg:text-[54px] font-extrabold leading-[1.1] tracking-tight mb-8"
              style={{ fontFamily: '"BricolageGrotesque", sans-serif' }}
            >
              Angka yang
              <br />
              Berbicara Lebih
              <br />
              Keras dari
              <br />
              Kata-kata
            </h2>

            <p
              className="text-[#D4622E] font-medium text-base"
              style={{ fontFamily: '"BricolageGrotesque", sans-serif' }}
            >
              Sejak 2017
            </p>
          </div>

          {/* Right Column (7 cols) - Stats Grid matching Frame 11.png */}
          <div className="lg:col-span-7">
            <div className="border-t border-b border-[#A69F94]/50">
              {/* Row 1 */}
              <div className="grid grid-cols-2 border-b border-[#A69F94]/50">
                {/* Global */}
                <div className="py-7 sm:py-9 pr-6 sm:pr-10 border-r border-[#A69F94]/50">
                  <p
                    className="text-[#1C3829] text-base font-medium mb-3"
                    style={{ fontFamily: '"BricolageGrotesque", sans-serif' }}
                  >
                    Global
                  </p>
                  <p
                    className="text-[#D4622E] text-5xl sm:text-6xl lg:text-[72px] font-extrabold leading-none mb-3"
                    style={{ fontFamily: '"BricolageGrotesque", sans-serif' }}
                  >
                    800
                  </p>
                  <p
                    className="text-[#1C3829] text-sm sm:text-base"
                    style={{ fontFamily: '"BricolageGrotesque", sans-serif' }}
                  >
                    + Hektar Lahan
                  </p>
                </div>

                {/* China */}
                <div className="py-7 sm:py-9 pl-6 sm:pl-10">
                  <p
                    className="text-[#1C3829] text-base font-medium mb-3"
                    style={{ fontFamily: '"BricolageGrotesque", sans-serif' }}
                  >
                    China
                  </p>
                  <p
                    className="text-[#D4622E] text-5xl sm:text-6xl lg:text-[72px] font-extrabold leading-none mb-3"
                    style={{ fontFamily: '"BricolageGrotesque", sans-serif' }}
                  >
                    700
                  </p>
                  <p
                    className="text-[#1C3829] text-sm sm:text-base"
                    style={{ fontFamily: '"BricolageGrotesque", sans-serif' }}
                  >
                    + Ton Ekspor
                  </p>
                </div>
              </div>

              {/* Row 2 */}
              <div className="grid grid-cols-2">
                {/* Volume */}
                <div className="py-7 sm:py-9 pr-6 sm:pr-10 border-r border-[#A69F94]/50">
                  <p
                    className="text-[#1C3829] text-base font-medium mb-3"
                    style={{ fontFamily: '"BricolageGrotesque", sans-serif' }}
                  >
                    Volume
                  </p>
                  <p
                    className="text-[#D4622E] text-5xl sm:text-6xl lg:text-[72px] font-extrabold leading-none mb-3"
                    style={{ fontFamily: '"BricolageGrotesque", sans-serif' }}
                  >
                    50
                  </p>
                  <p
                    className="text-[#1C3829] text-sm sm:text-base"
                    style={{ fontFamily: '"BricolageGrotesque", sans-serif' }}
                  >
                    30-50 Ton / Minggu
                  </p>
                </div>

                {/* Pasar */}
                <div className="py-7 sm:py-9 pl-6 sm:pl-10">
                  <p
                    className="text-[#1C3829] text-base font-medium mb-3"
                    style={{ fontFamily: '"BricolageGrotesque", sans-serif' }}
                  >
                    Pasar
                  </p>
                  <p
                    className="text-[#D4622E] text-5xl sm:text-6xl lg:text-[72px] font-extrabold leading-none mb-3"
                    style={{ fontFamily: '"BricolageGrotesque", sans-serif' }}
                  >
                    4
                  </p>
                  <p
                    className="text-[#1C3829] text-sm sm:text-base"
                    style={{ fontFamily: '"BricolageGrotesque", sans-serif' }}
                  >
                    + Negara Tujuan
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
