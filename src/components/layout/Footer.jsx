// components/Footer.jsx
export default function Footer() {
  return (
    <footer id="iletisim" className="relative bg-white/80 backdrop-blur-sm text-zinc-900">
      <div className="max-w-[1200px] mx-auto px-4 py-14 grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Bölüm 1: Çalışma Saatleri */}
        <section>
          <h3 className="text-2xl md:text-3xl font-condensed text-center md:text-left mb-4">
            Çalışma Saatlerimiz
          </h3>

          <div className="rounded-2xl border border-zinc-300 bg-white/90 p-6 shadow-lg">
            <div className="flex flex-col items-center text-center gap-6">
              {/* Logo (opsiyonel) */}
              <div className="w-24 h-24 rounded-full bg-zinc-200 grid place-items-center text-xl font-bold">
                LOGO
              </div>

              <div className="w-full space-y-6 text-sm">
                <div>
                  <p className="font-semibold tracking-wide">PAZARTESİ – CUMARTESİ</p>
                  <p className="text-[var(--brand)] font-semibold text-lg">09:00 – 22:30</p>
                  <p className="opacity-70">Çalışma Saatlerimiz</p>
                </div>

                <div>
                  <p className="font-semibold tracking-wide">PAZAR</p>
                  <p className="text-[var(--brand)] font-semibold">KAPALI</p>
                  <p className="opacity-70">Dükkan kapalı; evde hizmet aktiftir</p>
                </div>

                <div>
                  <p className="font-semibold tracking-wide">7/24</p>
                  <p className="text-[var(--brand)] font-semibold">EVDE TIRAŞ</p>
                  <p className="opacity-70">Tek seferde mükemmel kesim</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Bölüm 2: Hizmet Konumumuz */}
        <section>
          <h3 className="text-2xl md:text-3xl font-condensed text-center md:text-left mb-4">
            Hizmet Konumumuz
          </h3>

          <div className="rounded-2xl overflow-hidden shadow-lg border border-zinc-300 bg-white">
            <iframe
              title="Hasta Tıraşı Konumu"
              src="https://www.google.com/maps?q=Brandenburg%20Gate%20Berlin&output=embed"
              allowFullScreen
              loading="lazy"
              className="w-full h-[380px]"
            />
          </div>
        </section>
      </div>

      {/* Alt telif satırı */}
      <div className="border-t border-zinc-300">
        <div className="max-w-[1200px] mx-auto px-4 py-5 text-center text-sm text-zinc-600">
          Copyright © {new Date().getFullYear()} Hasta Tıraşı
        </div>
      </div>
    </footer>
  );
}