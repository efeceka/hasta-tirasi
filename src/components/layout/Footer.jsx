export default function Footer() {
  return (
    <>
      {/* SEO: LocalBusiness / BarberShop structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BarberShop",
            "@id": "https://hastatrasi.com/#barber",
            name: "Grand Erkek Kuaförü",
            url: "https://hastatrasi.com",
            logo: "https://hastatrasi.com/images/mainlogo.png",
            image: ["https://hastatrasi.com/images/mainlogo.png"],
            telephone: "+905050620630",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Yunus Emre Caddesi",
              addressLocality: "İstanbul",
              addressRegion: "İstanbul",
              postalCode: "34758",
              addressCountry: "TR",
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: 40.99725717135206,
              longitude: 29.07963947603999,
            },
            hasMap:
              "https://www.google.com/maps?q=40.99725717135206,29.07963947603999",
            openingHoursSpecification: [
              {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday",
                ],
                opens: "09:00",
                closes: "21:00",
              },
            ],
            priceRange: "₺₺",
            paymentAccepted: "Cash",
          }),
        }}
      />

      <footer
        id="iletisim"
        className="relative bg-white/80 backdrop-blur-sm text-zinc-900"
      >
        <div className="max-w-[1200px] mx-auto px-4 py-14 grid grid-cols-1 md:grid-cols-2 gap-10">
          <section>
            <h3 className="text-2xl md:text-3xl font-condensed text-center md:text-left mb-4">
              Çalışma Saatlerimiz
            </h3>

            <div className="rounded-2xl border border-zinc-300 bg-white/90 p-6 shadow-lg">
              <div className="flex flex-col items-center text-center gap-6">
                <div className="w-20 h-24 rounded-full overflow-hidden">
                  <img
                    src="/images/mainlogo.png"
                    alt="Hasta Tıraşı Logo"
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="w-full space-y-6 text-sm">
                  <div>
                    <p className="font-semibold tracking-wide">
                      PAZARTESİ – CUMARTESİ
                    </p>
                    <p className="text-[var(--brand)] font-semibold text-lg">
                      09:00 – 21:00
                    </p>
                    <p className="opacity-70">Çalışma Saatlerimiz</p>
                  </div>

                  <div>
                    <p className="font-semibold tracking-wide">PAZAR</p>
                    <p className="text-[var(--brand)] font-semibold">KAPALI</p>
                    <p className="opacity-70">
                      Dükkan kapalı; evde hizmet aktiftir<br />
                      <a href="tel:+905050620630" className="underline">
                        0505 062 06 30
                      </a>
                    </p>
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

          <section>
            <h3 className="text-2xl md:text-3xl font-condensed text-center md:text-left mb-4">
              Hizmet Konumumuz
            </h3>

            <div className="rounded-2xl overflow-hidden shadow-lg border border-zinc-300 bg-white">
              <iframe
                title="Hasta Tıraşı Konumu"
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3011.2794123229346!2d29.07963947603999!3d40.99725717135206!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDDCsDU5JzUwLjEiTiAyOcKwMDQnNTYuMCJF!5e0!3m2!1str!2sde!4v1754920888959!5m2!1str!2sde"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-[425px]"
              />
            </div>
          </section>
        </div>

        <div className="border-t border-zinc-300">
          <div className="max-w-[1200px] mx-auto px-4 py-5 text-center text-sm text-zinc-600">
            Copyright © {new Date().getFullYear()}{" "}
            <span className="font-semibold">Hasta Tıraşı</span>
          </div>
        </div>
      </footer>
    </>
  );
}