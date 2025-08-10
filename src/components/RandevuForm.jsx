'use client'

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
  return (
    <section id="randevu" className="relative">
      {/* Arka plan görseli */}
      <img
        src="/images/formimage.jpg" // kendi görsel yolunu koy
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
      />
      {/* Okunabilirlik için maske */}
      <div className="absolute inset-0 bg-black/30" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/20" />

      {/* İçerik */}
      <div className="relative z-10 max-w-[1100px] mx-auto px-4 py-14">
        <h2 className="text-center text-white font-condensed uppercase text-2xl md:text-3xl font-bold drop-shadow-sm">
          Randevu Al
        </h2>

        {/* Form kartı */}
        <form
          className="mt-8 bg-white/70 backdrop-blur-md border border-white/40 shadow-xl rounded-2xl p-5 md:p-8"
          onSubmit={(e) => e.preventDefault()}
        >
          {/* 2 kolon düzen (mobilde 1) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {/* Ad / Soyad */}
            <Field label="Ad" id="ad">
              <input id="ad" name="ad" required className={INPUT} placeholder="Adınız" />
            </Field>
            <Field label="Soyad" id="soyad">
              <input id="soyad" name="soyad" required className={INPUT} placeholder="Soyadınız" />
            </Field>

            {/* Telefon / Hizmet Tipi */}
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
              />
            </Field>
            <Field label="Hizmet Tipi" id="hizmet">
              <select id="hizmet" name="hizmet" className={INPUT}>
                {SERVICES.map((s) => (
                  <option key={s}>{s}</option>
                ))}
              </select>
            </Field>

            {/* Tarih / Saat */}
            <Field label="Randevu Tarihi" id="tarih">
              <input id="tarih" name="tarih" type="date" required className={INPUT} />
            </Field>
            <Field label="Saati" id="saat">
              <input id="saat" name="saat" type="time" required className={INPUT} />
            </Field>

            {/* Adres (tam genişlik) */}
            <div className="md:col-span-2 grid gap-2">
              <Label htmlFor="adres">Adres</Label>
              <textarea
                id="adres"
                name="adres"
                required
                className={`${INPUT} min-h-28`}
                placeholder="Açık adres"
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
              className="px-5 py-2 rounded-xl border border-zinc-300 bg-white/80 font-semibold hover:opacity-90 transition"
            >
              Gönder
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