import { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [joined, setJoined] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setJoined(true);
    setTimeout(() => {
      setJoined(false);
      setEmail("");
    }, 3000);
  }

  return (
    <section className="w-full py-12 bg-surface border-t border-surface-container-high">
      <div className="max-w-[1280px] mx-auto px-margin-mobile md:px-margin">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 p-8 rounded-3xl bg-surface-container-low">
          <div className="max-w-md flex flex-col gap-1 text-center md:text-left">
            <span className="font-title-md text-title-md text-on-surface">The Oakwood Dispatch</span>
            <p className="font-body-sm text-body-sm text-on-surface-variant">
              Receive monthly invitations to origin tasting cuppings, seasonal roast drops, and
              weekend sourdough workshops.
            </p>
          </div>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2 w-full md:w-auto">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              aria-label="Email address"
              className="px-4 py-3 rounded-full bg-surface text-on-surface font-body-sm text-body-sm outline-none focus:ring-2 focus:ring-primary/40 min-w-[260px] shadow-sm"
            />
            <button
              type="submit"
              disabled={joined}
              className={`shrink-0 whitespace-nowrap px-6 py-3 rounded-full font-label-lg text-label-lg transition-all shadow-sm ${
                joined
                  ? "bg-tertiary text-on-tertiary"
                  : "bg-primary text-on-primary hover:bg-primary-container"
              }`}
            >
              {joined ? "You’re on the list" : "Join Table"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}