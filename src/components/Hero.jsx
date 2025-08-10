export default function HastaTrasiHero() {
  return (
    <section id="top" className="relative min-h-screen flex items-center justify-center">
      {/* Arka plan hero */}
      <img
        src="/images/heroimage.png"
        alt="Evde veya hastanede tıraş"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* İçerik */}
      <div className="relative z-10 flex flex-col items-center gap-4 -translate-y-8 px-4">
       {/* Dükkan ismi */}
<div className="mb-4">
  <h2 className="text-lg md:text-2xl font-bold tracking-wide text-center text-zinc-900">
    DÜKKAN İSMİ
  </h2>
</div>
        {/* Üst panel – responsive */}
        <div className="rounded-2xl bg-white/30 backdrop-blur-sm shadow-lg w-full max-w-[850px]
                        flex flex-col md:flex-row items-center md:items-center
                        gap-3 md:gap-6 p-4 md:p-6">
          {/* Başlık */}
          <span className="font-serif italic uppercase text-sm md:text-xl font-semibold tracking-wide
                           text-center md:text-left
                           border-0 md:border-y md:border-black/30 md:py-2">
            HASTA TIRAŞI
          </span>

          {/* Oval görsel */}
          <img
            src="/images/yuvarlak.png"
            alt="Berber portre"
            className="w-16 h-20 md:w-[150px] md:h-[180px] rounded-full object-cover
                       my-2 md:my-0 mx-auto md:mx-0"
          />

          {/* Açıklama */}
          <span className="font-serif italic text-sm md:text-base leading-snug text-zinc-800
                           text-center md:text-left
                           border-0 md:border-y md:border-black/30 md:py-3">
            Evde veya hastanede profesyonel saç ve sakal tıraşı hizmeti.
          </span>
        </div>

        {/* Alt kısım: Hemen Ara – küçük */}
        <div className="rounded-2xl bg-white/30 backdrop-blur-sm shadow-lg px-5 py-2 w-[330px] text-center mt-7">
          <span className="border-b font-bold">📞 Hemen Arayın: 0532 000 0000</span>
        </div>

        {/* Alt kısım: WhatsApp – küçük, aynı genişlik */}
        <div className="rounded-2xl bg-white/30 backdrop-blur-sm shadow-lg px-5 py-2 w-[330px] flex items-center justify-center gap-2">
          <img src="/images/whatsapp.png" alt="WhatsApp" className="w-5 h-5" />
          <span className="border-b font-bold">WhatsApp'tan Ulaşın</span>
        </div>
      </div>
    </section>
  );
}