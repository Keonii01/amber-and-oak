import Icon from "./Icon";

export default function PastryBanner() {
  return (
    <section className="w-full bg-surface-container py-6">
      <div className="max-w-[1280px] mx-auto px-margin-mobile md:px-margin">
        <div className="flex flex-wrap items-center justify-between gap-4 text-on-surface">
          <div className="flex items-center gap-3">
            <Icon name="bakery_dining" className="text-primary text-[28px]" />
            <div>
              <span className="font-title-md text-title-md block">
                Warm Pastry Bakes Pulled Every 90 Minutes
              </span>
              <span className="font-body-sm text-body-sm text-on-surface-variant">
                Sourdough cinnamon buns, orange blossom croissants, and savory galettes.
              </span>
            </div>
          </div>
          <div className="flex items-center gap-2 font-label-lg text-label-lg text-primary">
            <span>Ovens active from 6:30 AM</span>
            <Icon name="arrow_forward" className="text-[18px]" />
          </div>
        </div>
      </div>
    </section>
  );
}