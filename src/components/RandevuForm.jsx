'use client'

import { useMemo } from "react";

const SERVICES = [
  "Evde Saç Tıraşı",
  "Evde Sakal Tıraşı",
  "Bakım Paketi",
  "Hasta Paketi",
];

const INPUT =
  "w-full border border-zinc-300 rounded-lg px-3 py-2 bg-white/70 " +
  "focus:outline-none focus:ring-2 focus:ring-[var(--brand)]/40 focus:border-[var(--brand)] " +
  "placeholder:text-zinc-400";

export default function RandevuForm() {
  // Bugünden önce tarih seçilmesin
  const today = useMemo(() => new Date().toISOString().split('T')[0], []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);

    const ad     = (fd.get("ad")     || "").toString().trim();
    const soyad  = (fd.get("soyad")  || "").toString().trim();
    const telefon= (fd.get("telefon")|| "").toString().trim();
    const hizmet = (fd.get("hizmet") || "").toString().trim();
    const tarih  = (fd.get("tarih")  || "").toString().trim();
    const saat   = (fd.get("saat")   || "").toString().trim();
    const adres  = (fd.get("adres")  || "").toString().trim();

    const rawMessage = [
      "Merhaba, randevu talebim var.",
      `İsim: ${ad} ${soyad}`,
      `Telefon: ${telefon}`,
      `Hizmet Tipi: ${hizmet}`,
      `Tarih: ${tarih}`,
      `Saat: ${saat}`,
      `Adres: ${adres}`
    ].join("\n");

    const message = encodeURIComponent(rawMessage);

    // WhatsApp numarası: ülke kodu ile, + işareti YOK
    const whatsappNumber = "905050620630";
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${message}`;

    window.open(whatsappURL, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="randevu" className="relative scroll-mt-20" aria-labelledby="randevu-baslik">
      {/* Arka plan */}
      <img
        src="/images/formimage.jpg"
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
        loading="lazy"
        decoding="async"
      />
      <div className="absolute inset-0 bg-black/30" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/20" />

      {/* İçerik */}
      <div className="relative z-10 max-w-[1100px] mx-auto px-4 py-14">
        <h2 id="randevu-baslik" className="text-center text-white font-condensed uppercase text-2xl md:text-3xl font-bold drop-shadow-sm">
          Randevu Al
        </h2>

        <form
          onSubmit={handleSubmit}
          className="mt-8 bg-white/40 backdrop-blur-md border border-white/40 shadow-xl rounded-2xl p-5 md:p-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {/* Ad / Soyad */}
            <Field label="Ad" id="ad">
              <input id="ad" name="ad" required className={INPUT} placeholder="Adınız" autoComplete="given-name" />
            </Field>
            <Field label="Soyad" id="soyad">
              <input id="soyad" name="soyad" required className={INPUT} placeholder="Soyadınız" autoComplete="family-name" />
            </Field>

            {/* Telefon / Hizmet */}
            <Field label="Telefon" id="telefon">
              <input
                id="telefon"
                name="telefon"
                type="tel"
                inputMode="tel"
                pattern="[0-9\\s()+-]{8,}"
                required
                className={INPUT}
                placeholder="+90 ..."
                title="En az 8 karakter; rakam, boşluk, + ( ) - kabul edilir"
                autoComplete="tel"
              />
            </Field>

            <Field label="Hizmet Tipi" id="hizmet">
              <select
                id="hizmet"
                name="hizmet"
                required
                className={INPUT}
                aria-label="Hizmet Tipi"
                defaultValue=""      // 👈 Burada
              >
                <option value="" disabled>Hizmet seçin</option>
                {SERVICES.map((s) => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
            </Field>

            {/* Tarih / Saat */}
            <Field label="Randevu Tarihi" id="tarih">
              <input id="tarih" name="tarih" type="date" min={today} required className={INPUT} />
            </Field>
            <Field label="Saat" id="saat">
              <input id="saat" name="saat" type="time" required className={INPUT} />
            </Field>

            {/* Adres */}
            <div className="md:col-span-2 grid gap-2">
              <Label htmlFor="adres">Adres</Label>
              <textarea
                id="adres"
                name="adres"
                required
                className={`${INPUT} min-h-28`}
                placeholder="Açık adres"
                rows={4}
              />
            </div>
          </div>

          {/* Aksiyonlar */}
          <div className="mt-6 flex flex-col md:flex-row gap-3 md:justify-end">
            <button
              type="reset"
              className="px-4 py-2 rounded-xl border border-zinc-300 bg-white/80 hover:bg-white transition"
            >
              Temizle
            </button>
            <button
              type="submit"
              className="px-5 py-2 rounded-xl border border-green-600 bg-green-500 text-white font-semibold hover:opacity-90 transition"
              aria-label="Formu WhatsApp ile gönder"
            >
              WhatsApp ile Gönder
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

function Field({ label, id, children }) {
  return (
    <div className="grid gap-2">
      <Label htmlFor={id}>{label}</Label>
      {children}
    </div>
  );
}

function Label({ htmlFor, children }) {
  return (
    <label
      htmlFor={htmlFor}
      className="font-condensed uppercase text-[var(--brand)] tracking-wide"
    >
      {children}
    </label>
  );
}