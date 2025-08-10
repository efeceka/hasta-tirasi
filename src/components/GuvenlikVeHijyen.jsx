// components/GuvenlikVeHijyen.jsx
export default function GuvenlikVeHijyen() {
  return (
    <section id="guvenlik-hijyen" className="py-16 bg-white/70 backdrop-blur-sm">
      <div className="max-w-[1100px] mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        
        {/* Mobilde Üstte: Görsel */}
        <div className="flex justify-center order-1 md:order-2">
          <img
            src="/images/formimage.jpg" // kendi görsel yolunu ekle
            alt="Güvenlik ve Hijyen"
            className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover shadow-lg"
          />
        </div>

        {/* Mobilde Altta: Metin */}
        <div className="text-center md:text-left order-2 md:order-1">
          <h2 className="font-condensed uppercase text-2xl md:text-3xl font-bold text-[var(--brand)] mb-4">
            Güvenlik ve Hijyen
          </h2>
          <hr className="border-t border-black/40 mb-4 mx-auto md:mx-0 w-2/3 md:w-full" />
          <p className="font-serif italic text-lg md:text-xl text-zinc-800 leading-relaxed">
            Tüm ekipmanlarımız her randevu öncesinde özenle sterilize edilir. 
            Berberlerimiz tek kullanımlık malzemelerle çalışarak hijyen standartlarını en üst düzeyde tutar. 
            Randevu sırasında maske ve eldiven kullanımı zorunludur.
            <br /><br />
            Siz ve sevdiklerinizin güvenliği için hijyen kurallarına titizlikle uyar, sağlıklı ve konforlu bir hizmet sunarız.
          </p>
          <hr className="border-t border-black/40 mt-4 mx-auto md:mx-0 w-2/3 md:w-full" />
        </div>
      </div>
    </section>
  );
}