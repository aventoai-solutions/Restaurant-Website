import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { toast } from "sonner";

export const Route = createFileRoute("/reservations")({
  head: () => ({
    meta: [
      { title: "Reservations — Maison Noir, Lisbon" },
      {
        name: "description",
        content:
          "Request one of seventeen seats at Maison Noir. Seatings at 18:30 and 21:00, Wednesday to Sunday.",
      },
      { property: "og:title", content: "Reservations — Maison Noir" },
      {
        property: "og:description",
        content: "Seatings at 18:30 and 21:00, Wednesday to Sunday.",
      },
    ],
  }),
  component: ReservationsPage,
});

const field =
  "w-full border-b border-input bg-transparent py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-gold";
const labelCls =
  "block text-[0.64rem] uppercase tracking-[0.26em] text-muted-foreground";

function ReservationsPage() {
  const [sent, setSent] = useState(false);

  return (
    <div className="mx-auto max-w-3xl px-6 pb-32 pt-40">
      <p className="eyebrow text-center">Wednesday – Sunday</p>
      <h1 className="mt-6 text-center text-[clamp(2.6rem,8vw,6rem)] leading-[0.95]">
        <span className="italic text-gilded">Reserve</span> a seating
      </h1>
      <p className="mx-auto mt-6 max-w-md text-center text-sm leading-relaxed text-muted-foreground">
        Seventeen seats, two seatings an evening. Send a request and we reply
        within the day.
      </p>

      {sent ? (
        <div className="mt-20 border border-gold/40 p-12 text-center">
          <h2 className="text-3xl">Request received</h2>
          <p className="mt-4 text-sm text-muted-foreground">
            We will confirm your seating by email. Thank you for choosing our
            counter.
          </p>
        </div>
      ) : (
        <form
          className="mt-20 space-y-10"
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
            toast.success("Reservation request sent");
          }}
        >
          <div className="grid gap-10 sm:grid-cols-2">
            <div>
              <label className={labelCls} htmlFor="name">
                Name
              </label>
              <input id="name" required className={field} placeholder="Your name" />
            </div>
            <div>
              <label className={labelCls} htmlFor="email">
                Email
              </label>
              <input
                id="email"
                type="email"
                required
                className={field}
                placeholder="you@email.com"
              />
            </div>
            <div>
              <label className={labelCls} htmlFor="date">
                Date
              </label>
              <input id="date" type="date" required className={field} />
            </div>
            <div>
              <label className={labelCls} htmlFor="seating">
                Seating
              </label>
              <select id="seating" className={field} defaultValue="18:30">
                <option className="bg-card" value="18:30">
                  18:30
                </option>
                <option className="bg-card" value="21:00">
                  21:00
                </option>
              </select>
            </div>
            <div>
              <label className={labelCls} htmlFor="guests">
                Guests
              </label>
              <select id="guests" className={field} defaultValue="2">
                {[1, 2, 3, 4, 5, 6].map((n) => (
                  <option className="bg-card" key={n} value={n}>
                    {n}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className={labelCls} htmlFor="phone">
                Telephone
              </label>
              <input id="phone" className={field} placeholder="+351 ..." />
            </div>
          </div>

          <div>
            <label className={labelCls} htmlFor="notes">
              Allergies, celebrations, anything we should know
            </label>
            <textarea id="notes" rows={3} className={field} />
          </div>

          <button
            type="submit"
            className="w-full bg-gold py-4 text-[0.7rem] uppercase tracking-[0.28em] text-primary-foreground transition-opacity hover:opacity-85"
          >
            Send request
          </button>
        </form>
      )}
    </div>
  );
}
