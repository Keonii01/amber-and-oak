import Icon from "./Icon";
import MenuItem from "./MenuItem";
import { menu } from "../data/menu";

const accent = {
  primary: { icon: "text-primary", badge: "bg-primary-fixed text-on-primary-fixed" },
  secondary: { icon: "text-secondary", badge: "bg-secondary-fixed text-on-secondary-fixed" },
  tertiary: { icon: "text-tertiary", badge: "bg-tertiary-fixed text-on-tertiary-fixed" },
};

export default function Menu() {
  return (
    <section id="menu" className="scroll-mt-20 w-full py-16 lg:py-24 bg-surface">
      <div className="max-w-[1280px] mx-auto px-margin-mobile md:px-margin flex flex-col gap-space-xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="max-w-2xl flex flex-col gap-space-xs">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary-container/40 text-on-secondary-container w-max">
              <Icon name="eco" className="text-[16px]" />
              <span className="font-label-md text-label-md uppercase tracking-wider">
                From Our Hearth &amp; Bar
              </span>
            </div>
            <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface">
              Handcrafted Everyday Delights
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Poured with mindful precision and baked with naturally fermented levain. Our ingredients
              change gracefully alongside local harvests.
            </p>
          </div>
          <div className="flex items-center gap-2 text-on-surface-variant font-body-sm text-body-sm">
            <Icon name="check_circle" className="text-tertiary text-[18px]" />
            <span>House-churned syrups &amp; organic oat milk available</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter items-start">
          {menu.map((category) => (
            <div
              key={category.id}
              className="flex flex-col gap-4 p-5 rounded-3xl bg-surface-container-low shadow-sm"
            >
              <div className="flex items-center justify-between gap-3 pb-3 lg:flex-col lg:items-start lg:gap-2 xl:flex-row xl:items-center xl:gap-3">
                <div className="flex items-center gap-2.5">
                  <Icon
                    name={category.icon}
                    className={`${accent[category.accent].icon} text-[24px]`}
                  />
                  <h3 className="font-headline-sm text-headline-sm text-on-surface">{category.title}</h3>
                </div>
                <span
                  className={`shrink-0 whitespace-nowrap font-label-sm text-label-sm uppercase px-2.5 py-0.5 rounded-full ${accent[category.accent].badge}`}
                >
                  {category.badge}
                </span>
              </div>
              <div className="flex flex-col gap-3">
                {category.items.map((item) => (
                  <MenuItem key={item.name} item={item} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}