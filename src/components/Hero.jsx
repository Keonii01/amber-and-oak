import Icon from "./Icon";

const trust = [
  { icon: "skillet", tone: "text-primary", title: "Roasted In-House", note: "Micro batches daily" },
  { icon: "grain", tone: "text-tertiary", title: "Heirloom Grains", note: "Organic stone-ground" },
  { icon: "fireplace", tone: "text-secondary", title: "Hearth Nooks", note: "Unhurried seating" },
];

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-surface pt-4 pb-16 lg:pb-24">
      <div className="max-w-[1280px] mx-auto px-margin-mobile md:px-margin">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center">
          {/* Text column */}
          <div className="lg:col-span-6 flex flex-col items-start gap-space-md z-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface-container-high text-primary">
              <Icon name="local_fire_department" className="text-[16px]" />
              <span className="font-label-md text-label-md tracking-wide uppercase">
                Fresh Batch Brewing Daily
              </span>
            </div>

            <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-on-surface tracking-tight leading-tight">
              Slow Mornings &amp; <span className="text-primary italic">Warm Brews</span>
            </h1>

            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl">
              Amber &amp; Oak is your neighborhood refuge in the heart of the timber district. Settle
              into sunlit oak tables with small-batch single-origin roasts, laminated heirloom
              sourdough pastries, and quiet, restorative morning rituals.
            </p>

            <div className="flex flex-wrap items-center gap-space-sm pt-2 w-full sm:w-auto">
              <a
                href="#menu"
                className="inline-flex items-center justify-center font-label-lg text-label-lg rounded-full bg-primary text-on-primary hover:bg-primary-container transition-all px-7 py-3.5 shadow-md hover:shadow-lg"
              >
                <Icon name="restaurant_menu" className="text-[18px] mr-2" />
                Explore Our Menu
              </a>
              <a
                href="#visit"
                className="inline-flex items-center justify-center font-label-lg text-label-lg rounded-full bg-surface-container text-on-surface hover:bg-surface-container-high transition-all px-6 py-3.5"
              >
                <Icon name="explore" className="text-[18px] mr-2" />
                Find Our Corner
              </a>
            </div>

            <div className="grid grid-cols-3 gap-3 pt-6 w-full max-w-lg">
              {trust.map((t) => (
                <div
                  key={t.title}
                  className="flex flex-col items-start p-3.5 rounded-2xl bg-surface-container-low shadow-sm"
                >
                  <Icon name={t.icon} className={`${t.tone} text-[22px] mb-1`} />
                  <span className="font-title-md text-[14px] leading-tight text-on-surface font-semibold">
                    {t.title}
                  </span>
                  <span className="font-body-sm text-[11px] text-on-surface-variant mt-0.5">{t.note}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Photo column */}
          <div className="lg:col-span-6 relative mt-6 lg:mt-0">
            <div className="relative w-full aspect-[4/3] sm:aspect-[16/11] rounded-3xl overflow-hidden shadow-xl bg-surface-container-high">
              <img
                src="/images/hero.jpg"
                alt="Sunlit Amber & Oak café interior with oak tables, string lights and a chalkboard menu"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-on-surface/40 via-transparent to-transparent" />

              <div className="absolute bottom-4 left-4 right-4 sm:right-auto sm:left-6 sm:bottom-6 bg-surface/90 backdrop-blur-md p-4 rounded-2xl shadow-lg flex items-center gap-3 max-w-sm">
                <div className="w-10 h-10 rounded-full bg-primary-fixed flex items-center justify-center shrink-0 text-primary">
                  <Icon name="coffee" className="text-[20px]" />
                </div>
                <div className="min-w-0">
                  <p className="font-title-md text-[14px] text-on-surface sm:truncate font-semibold">
                    Today’s Single-Origin Feature
                  </p>
                  <p className="font-body-sm text-body-sm text-on-surface-variant sm:truncate">
                    Honduras Marcala • Dried Fig, Honey, Pecan
                  </p>
                </div>
              </div>
            </div>

            <div className="hidden md:flex absolute -bottom-6 -right-4 bg-tertiary text-on-tertiary p-4 rounded-2xl shadow-lg items-center gap-3">
              <Icon name="verified" className="text-[24px]" />
              <div>
                <p className="font-title-md text-[13px] leading-tight font-semibold">100% Direct Trade</p>
                <p className="font-body-sm text-[11px] opacity-90">Partnered directly with growers</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}