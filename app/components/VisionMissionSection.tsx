const missions = [
  "Meningkatkan kesejahteraan petani di Desa Kaliurang dan Kecamatan Srumbung secara luas.",
  "Memperkuat posisi Kabupaten Magelang sebagai sentra hortikultura unggulan nasional.",
  "Memperluas rantai pasok ekspor komoditas lokal ke pasar dunia.",
];

export default function VisionMissionSection() {
  return (
    <section
      id="visi-misi"
      className="w-full min-h-[575px] flex items-center bg-[#FAF9F6] py-16 lg:py-24"
    >
      <div className="w-full max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column (5 cols) - Visi */}
          <div className="lg:col-span-5">
            <p
              className="text-[#D4622E] font-semibold text-base mb-5"
              style={{ fontFamily: '"BricolageGrotesque", sans-serif' }}
            >
              Visi kami
            </p>

            <h2
              className="text-[#1C3829] text-4xl sm:text-5xl lg:text-[52px] font-extrabold leading-[1.1] tracking-tight mb-8"
              style={{ fontFamily: '"BricolageGrotesque", sans-serif' }}
            >
              Dibangun di Atas
              <br />
              Nilai, Digerakkan
              <br />
              Komunitas
            </h2>

            <p
              className="text-[#3A463E] text-base sm:text-lg leading-relaxed max-w-[480px]"
              style={{ fontFamily: '"Literata", Georgia, serif' }}
            >
              Terwujudnya ekosistem pertanian salak di Kabupaten Magelang yang
              berkelanjutan dan berdaya saing global melalui sinergi petani,
              sektor swasta, dan pemerintah.
            </p>
          </div>

          {/* Right Column (7 cols) - Misi matching Frame 16.png */}
          <div className="lg:col-span-7">
            <p
              className="text-[#D4622E] font-semibold text-base mb-5"
              style={{ fontFamily: '"BricolageGrotesque", sans-serif' }}
            >
              Misi
            </p>

            <div className="border-t border-[#A69F94]/50">
              {missions.map((mission, index) => (
                <div
                  key={index}
                  className="py-6 sm:py-7 border-b border-[#A69F94]/50 flex items-start gap-5"
                >
                  {/* Concentric orange target circle icon matching Figma */}
                  <div className="w-6 h-6 rounded-full border-[2.5px] border-[#D4622E] flex items-center justify-center shrink-0 mt-0.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#D4622E]" />
                  </div>

                  <p
                    className="text-[#1C3829] text-base sm:text-lg font-semibold leading-relaxed"
                    style={{ fontFamily: '"BricolageGrotesque", sans-serif' }}
                  >
                    {mission}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
