export default function GuvenlikVeHijyen() {
  return (
    <section
      id="guvenlik-hijyen"
      className="py-16 bg-white/70 backdrop-blur-sm scroll-mt-20"
      aria-labelledby="guv-hijyen-baslik"
    >
      <div className="max-w-[1100px] mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">

        <div className="text-center md:text-left order-2 md:order-1">
          <hr className="border-t border-black/40 mb-4 mx-auto md:mx-0 w-2/3 md:w-full" />

          <p className="font-serif italic text-lg md:text-xl text-zinc-800 leading-relaxed">
            Tüm ekipmanlarımız her randevu öncesi sterilize edilir; tek kullanımlık malzemelerle çalışırız.
            Randevu sırasında maske ve eldiven kullanımı standart prosedürümüzdür.
            <br /><br />
            Siz ve sevdiklerinizin güvenliği için hijyen kurallarına titizlikle uyar,
            sağlıklı ve konforlu bir hizmet sunarız.
          </p>

          <hr className="border-t border-black/40 mt-4 mx-auto md:mx-0 w-2/3 md:w-full" />
        </div>

        <div className="flex justify-center order-1 md:order-2">
          <img
            src="/images/formimage.jpg"
            alt="Sterilize ekipmanlar ve hijyenik berber hizmeti"
            className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover shadow-lg"
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>
    </section>
  );
}