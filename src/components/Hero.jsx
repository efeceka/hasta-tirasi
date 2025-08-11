export default function HastaTrasiHero() {
  return (
    <section
      id="top"
      className="relative min-h-screen flex items-center"
    >
      <img
        src="/images/heroimage.png"
        alt="Evde veya hastanede tıraş"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/30" />

      <div className="relative z-10 w-full max-w-[1200px] mx-auto px-4 
                      flex flex-col md:flex-row 
                      items-center md:items-center justify-between 
                      text-center md:text-left gap-6 ">
        
        <div className="md:max-w-[640px]">
          <h1 className="font-serif italic text-white drop-shadow-[0_2px_8px_rgba(0,0,0,.45)]
                        text-3xl md:text-5xl leading-tight -translate-y-0 md:translate-y-0">
            Evde veya hastanede profesyonel
            <br className="block md:hidden" />
            <br className="hidden md:block" />
            saç ve sakal tıraşı hizmeti.
          </h1>
        </div>
        {/* Sağ: Butonlar */}
        <div className="flex flex-col gap-3 md:items-start items-center translate-y-30 md:translate-y-0 ">
          <a
            href="tel:+905050620630"
            className="rounded-2xl bg-white/60 backdrop-blur-sm shadow-lg
                      px-5 py-5 w-[320px] text-center font-medium
                      hover:bg-white/40 transition flex items-center justify-center gap-2"
          >
            📞 Hemen Arayın: 0505 062 0630
          </a>
           <a
            href="tel:+905551728670"
            className="rounded-2xl bg-white/60 backdrop-blur-sm shadow-lg
                      px-5 py-5 w-[320px] text-center font-medium
                      hover:bg-white/40 transition flex items-center justify-center gap-2"
          >
            📞 Hemen Arayın: 0555 172 8670
          </a>
          <a
            href="https://wa.me/905050620630"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-2xl bg-white/60 backdrop-blur-sm shadow-lg
                       px-5 py-5 w-[320px] text-center font-medium
                       hover:bg-white/40 transition flex items-center justify-center gap-2"
          >
            <img src="/images/whatsapp.png" alt="WhatsApp" className="w-5 h-5" />
            WhatsApp’tan Ulaşın
          </a>
        </div>
      </div>
    </section>
  );
}