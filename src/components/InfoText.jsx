export default function InfoSection() {
  return (
    <section id="hizmetler" className="relative py-16 bg-white/40 backdrop-blur-sm">
      <div className="max-w-[1200px] mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        
        {/* Sol: Görsel */}
        <div className="flex justify-center md:justify-start mx-10">
          <img
            src="/images/mainlogo.png"
            alt="Hijyenik berber hizmeti"
            className="w-49 h-60 md:w-65 md:h-79 rounded-full object-cover"
          />
        </div>

        {/* Sağ: Metin */}
        <div className="text-center md:text-left">
          <h2 className="font-condensed uppercase text-2xl md:text-3xl font-bold tracking-wide">
            Profesyonel ve Hijyenik Hizmet
          </h2>

          {/* İnce ayraç */}
          <div className="mt-3 mb-6 h-px bg-black/30 w-2/3 md:w-full mx-auto md:mx-0" />

          <p className="font-serif italic text-lg md:text-xl text-zinc-800 leading-relaxed">
            Hijyen kurallarına titizlikle uyan, deneyimli berberlerimiz kapınıza kadar gelir.
            Kullanılan tüm ekipmanlar her müşteriden önce ve sonra özel olarak dezenfekte edilir. 
            Böylece saç ve sakal tıraşınızı güvenli, hızlı ve konforlu bir şekilde yaptırabilirsiniz. 
            Amacımız, bulunduğunuz yerde size en yüksek standartlarda hizmet sunmaktır.
          </p>
        </div>
      </div>
    </section>
  );
}