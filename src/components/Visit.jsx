import Icon from "./Icon";
import { hours, address } from "../data/cafe";

const amenities = [
  { icon: "pets", label: "Dog-Friendly Patio" },
  { icon: "wifi", label: "Free Fiber Wi-Fi" },
  { icon: "power", label: "Plentiful Outlets" },
  { icon: "pedal_bike", label: "Bicycle Racks" },
];

function InfoCard({ children, className = "" }) {
  return <div className={`p-5 rounded-2xl bg-surface shadow-sm ${className}`}>{children}</div>;
}

export default function Visit() {
  return (
    <section id="visit" className="scroll-mt-20 w-full py-16 lg:py-24 bg-surface">
      <div className="max-w-[1280px] mx-auto px-margin-mobile md:px-margin">
        <div className="rounded-3xl bg-surface-container p-6 sm:p-10 lg:p-12 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center">
            {/* Details */}
            <div className="lg:col-span-6 flex flex-col gap-space-md">
              <div>
                <span className="font-label-md text-label-md text-primary uppercase tracking-wider block">
                  Neighborhood Refuge
                </span>
                <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface mt-1">
                  Visit Us at The Hearth
                </h2>
                <p className="font-body-md text-body-md text-on-surface-variant mt-2 max-w-lg">
                  Nestled on the corner of Oakwood and 4th, under the shade of century-old sugar
                  maples. Come for the aroma of roasted beans, stay for the unhurried calm.
                </p>
              </div>

              <InfoCard className="flex items-start gap-3">
                <Icon name="location_on" className="text-primary text-[24px] mt-0.5" />
                <div className="flex flex-col">
                  <span className="font-title-md text-title-md text-on-surface">{address.street}</span>
                  <span className="font-body-md text-body-md text-on-surface-variant">{address.area}</span>
                  <span className="font-body-sm text-body-sm text-primary mt-1">
                    Easy street parking &amp; 2 blocks from Central Greenway trail
                  </span>
                </div>
              </InfoCard>

              <InfoCard className="flex flex-col gap-2">
                <div className="flex items-center gap-2 mb-1">
                  <Icon name="schedule" className="text-primary text-[20px]" />
                  <span className="font-title-md text-title-md text-on-surface">Hours &amp; Hearth Schedule</span>
                </div>
                {hours.map((row) => (
                  <div
                    key={row.days}
                    className="flex flex-col gap-0.5 sm:flex-row sm:justify-between sm:items-center py-1.5 border-b border-surface-container-high last:border-b-0 font-body-md text-body-md"
                  >
                    <span className="text-on-surface font-semibold">{row.days}</span>
                    <span className="text-on-surface-variant font-medium">{row.time}</span>
                  </div>
                ))}
                <p className="font-body-sm text-[12px] text-tertiary mt-1 italic flex items-start gap-1">
                  <Icon name="info" className="text-[14px] mt-px" />
                  Kitchen orders stop 45 minutes prior to close. Espresso continues until final bell.
                </p>
              </InfoCard>

              <div className="flex flex-wrap gap-2 pt-1">
                {amenities.map((a) => (
                  <span
                    key={a.label}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-surface text-on-surface font-label-sm text-label-sm shadow-sm"
                  >
                    <Icon name={a.icon} className="text-primary text-[16px]" />
                    {a.label}
                  </span>
                ))}
              </div>

              <div className="pt-2">
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center font-label-lg text-label-lg rounded-full bg-primary text-on-primary hover:bg-primary-container transition-all px-8 py-3.5 shadow-md"
                >
                  <Icon name="directions" className="text-[18px] mr-2" />
                  Get Directions
                </a>
              </div>
            </div>

            {/* Map */}
            <div className="lg:col-span-6 relative mt-6 lg:mt-0">
              <div className="relative w-full h-[400px] sm:h-[480px] rounded-3xl overflow-hidden shadow-lg bg-surface-container-high">
                <img
                  src="/images/map.jpg"
                  alt="Illustrated map of the Maple District marking Amber & Oak at Oakwood Avenue and 4th Street"
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover"
                />

                <div className="absolute top-1/2 left-1/2 pointer-events-none">
                  <span className="absolute -left-5 -top-5 w-10 h-10 rounded-full bg-primary/30 animate-ping motion-reduce:animate-none" />
                  <Icon
                    name="location_on"
                    filled
                    className="absolute -left-6 -top-12 text-primary text-[48px] drop-shadow-lg"
                  />
                </div>

                <div className="absolute top-4 left-4 right-4 sm:top-6 sm:left-6 sm:right-auto bg-surface/95 backdrop-blur-md p-4 rounded-2xl shadow-lg flex items-center gap-3.5 max-w-sm">
                  <div className="w-10 h-10 rounded-full bg-primary text-on-primary flex items-center justify-center shrink-0">
                    <Icon name="coffee" className="text-[20px]" />
                  </div>
                  <div>
                    <h3 className="font-title-md text-title-md text-on-surface">Amber &amp; Oak Roastery</h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      Corner of Oakwood &amp; 4th St.
                    </p>
                  </div>
                </div>

                <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 bg-surface-container-low/95 backdrop-blur-md p-4 rounded-2xl shadow-md flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex items-center gap-2.5">
                    <Icon name="local_parking" className="text-primary text-[22px]" />
                    <div className="text-left">
                      <span className="font-label-md text-label-md text-on-surface block">
                        Free 2-Hour Street Parking
                      </span>
                      <span className="block font-body-sm text-[12px] leading-4 text-on-surface-variant">
                        Oakwood Ave &amp; dedicated rear alley slots
                      </span>
                    </div>
                  </div>
                  <span className="font-label-sm text-label-sm px-2.5 py-1 rounded-full bg-tertiary-fixed text-on-tertiary-fixed shrink-0">
                    Transit Accessible
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}