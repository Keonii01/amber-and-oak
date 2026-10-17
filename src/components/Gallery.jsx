import { useState } from "react";
import { filters, photos } from "../data/gallery";

export default function Gallery() {
  const [active, setActive] = useState("All Moments");

  return (
    <section id="gallery" className="scroll-mt-20 w-full py-16 bg-surface-container-low">
      <div className="max-w-[1280px] mx-auto px-margin-mobile md:px-margin flex flex-col gap-space-lg">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="font-label-md text-label-md text-primary uppercase tracking-wider block">
              Visual Chronicle
            </span>
            <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface">
              Moments at Amber &amp; Oak
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant mt-1">
              Sunlit corners, steaming ceramic mugs, and golden morning crumb.
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {filters.map((name) => (
              <button
                key={name}
                onClick={() => setActive(name)}
                aria-pressed={active === name}
                className={`px-4 py-2 rounded-full font-label-md text-label-md transition-all ${
                  active === name
                    ? "bg-on-surface text-surface"
                    : "bg-surface text-on-surface-variant hover:bg-surface-container"
                }`}
              >
                {name}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-gutter">
          {photos.map((photo) => {
            const dimmed = active !== "All Moments" && photo.category !== active;
            return (
              <div
                key={photo.id}
                className={`${photo.span} group flex flex-col gap-2 transition-all duration-500 ${
                  dimmed ? "opacity-30 saturate-0 scale-[0.98]" : ""
                }`}
              >
                <div
                  className={`relative w-full ${photo.aspect} rounded-3xl overflow-hidden shadow-md bg-surface-container`}
                >
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute bottom-3 left-3 bg-surface/80 backdrop-blur-sm px-3 py-1 rounded-full text-on-surface font-label-sm text-label-sm">
                    {photo.label}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}