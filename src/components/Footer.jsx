import Icon from "./Icon";
import { hours, address } from "../data/cafe";

const socials = [
  { icon: "photo_camera", label: "Photo gallery" },
  { icon: "group", label: "Neighborhood community" },
  { icon: "bookmark_heart", label: "Saved recipes" },
];

const ignore = (e) => e.preventDefault(); // placeholder links do nothing for now

export default function Footer() {
  return (
    <footer className="w-full bg-surface-container-low border-t border-outline-variant/40 pt-space-xl pb-space-lg">
      <div className="max-w-[1280px] mx-auto px-margin-mobile md:px-margin">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-gutter items-start pb-space-lg border-b border-outline-variant/30">
          {/* Brand */}
          <div className="md:col-span-2 lg:col-span-5 flex flex-col items-start gap-space-sm">
            <div className="flex items-center gap-3">
              <img src="/images/logo.png" alt="Amber & Oak logo" className="h-10 w-auto object-contain" />
              <span className="font-headline-sm text-headline-sm text-on-surface">Amber &amp; Oak</span>
            </div>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-sm mt-1">
              A slow-paced neighborhood refuge dedicated to heirloom roasts, sourdough craft, and
              unhurried morning rituals. Roasted in house, poured with care.
            </p>
            <div className="flex items-center gap-space-sm mt-2 text-on-surface-variant">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href="#"
                  onClick={ignore}
                  aria-label={s.label}
                  className="w-9 h-9 rounded-full bg-surface flex items-center justify-center border border-outline-variant/60 hover:text-primary hover:border-primary transition-colors"
                >
                  <Icon name={s.icon} className="text-[18px]" />
                </a>
              ))}
            </div>
          </div>

          {/* Hours */}
          <div className="lg:col-span-4 flex flex-col gap-space-xs">
            <span className="font-title-md text-title-md text-on-surface mb-1">Café &amp; Counter Hours</span>
            <div className="font-body-md text-body-md text-on-surface-variant flex flex-col gap-1">
              {hours.map((row) => (
                <p key={row.days} className="flex justify-between gap-4 max-w-xs">
                  <span className="font-semibold text-on-surface">{row.days}</span>
                  <span>{row.time}</span>
                </p>
              ))}
            </div>
            <p className="font-body-sm text-body-sm text-tertiary mt-2 flex items-center gap-1.5">
              <Icon name="schedule" className="text-[16px]" />
              Kitchen orders stop 45 minutes before close.
            </p>
          </div>

          {/* Address */}
          <div className="lg:col-span-3 flex flex-col gap-space-xs">
            <span className="font-title-md text-title-md text-on-surface mb-1">The Hearth</span>
            <p className="font-body-md text-body-md text-on-surface-variant">
              {address.street}
              <br />
              {address.area}
            </p>
            <p className="font-label-md text-label-md text-primary mt-1 font-semibold flex items-center gap-1">
              <Icon name="directions_walk" className="text-[16px]" />
              Walk-ins &amp; Bar Seating Welcome
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-space-md flex flex-col sm:flex-row items-center justify-between gap-space-sm text-on-surface-variant">
          <div className="flex flex-col items-center sm:items-start gap-1 text-center sm:text-left">
            <span className="font-body-sm text-body-sm">
              © {new Date().getFullYear()} Amber &amp; Oak Coffee Roasters. All rights reserved.
            </span>
            <span className="font-body-sm text-[12px] opacity-80">
              Demo project designed &amp; built by{" "}
              <a
                href="https://github.com/Keonii01"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                Dami
              </a>
              . The café, menu and details are fictional.
            </span>
          </div>
          <div className="flex items-center gap-space-md">
            <a href="#visit" className="font-label-sm text-label-sm hover:text-primary transition-colors">
              Find Us
            </a>
            <a
              href="#"
              onClick={ignore}
              className="font-label-sm text-label-sm hover:text-primary transition-colors"
            >
              Pre-Order Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}