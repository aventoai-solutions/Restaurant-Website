import { createFileRoute, Link } from "@tanstack/react-router";

import hero from "@/assets/hero.jpg";
import dish1 from "@/assets/dish-1.jpg";
import dish2 from "@/assets/dish-2.jpg";
import dish3 from "@/assets/dish-3.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Maison Noir — Seventeen Seats, One Menu, Lisbon" },
      {
        name: "description",
        content:
          "A candlelit counter in Lisbon's Old Quarter. One seasonal tasting menu, twice nightly, cooked an arm's length away.",
      },
      { property: "og:title", content: "Maison Noir — Fine Dining in Lisbon" },
      {
        property: "og:description",
        content:
          "One seasonal tasting menu, twice nightly, cooked an arm's length away.",
      },
    ],
  }),
  component: Home,
});

const courses = [
  {
    img: dish1,
    numeral: "I",
    name: "Scallop, Saffron, Sea Herbs",
    note: "Hand-dived from Setúbal, barely kissed by the plancha.",
  },
  {
    img: dish2,
    numeral: "II",
    name: "Aged Beef, Marrow, Charred Allium",
    note: "Sixty days on the bone, glazed in its own reduction.",
  },
  {
    img: dish3,
    numeral: "III",
    name: "Dark Chocolate, Burnt Honey, Gold",
    note: "Single-origin cru, bitter and warm, finished at the counter.",
  },
];

function Home() {
  return (
    <>
      <section className="relative flex min-h-screen items-end overflow-hidden">
        <img
          src={hero}
          alt="Chef plating a dish at the candlelit counter of Maison Noir"
          width={1600}
          height={1104}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="veil absolute inset-0" />
        <div className="relative mx-auto w-full max-w-7xl px-6 pb-24">
          <p className="eyebrow rise">Lisbon · Old Quarter</p>
          <h1 className="rise mt-6 max-w-4xl text-[clamp(3rem,11vw,9rem)] leading-[0.86] tracking-[-0.03em]">
            Maison
            <span className="text-gilded block italic">Noir</span>
          </h1>
          <div className="mt-10 grid gap-8 border-t border-border pt-8 md:grid-cols-[minmax(0,1fr)_auto] md:items-end">
            <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
              Seventeen seats around an open fire. One menu, written each
              morning from what the coast and the market gave us. Dinner lasts
              three hours and asks nothing of you but appetite.
            </p>
            <Link
              to="/reservations"
              className="inline-flex w-fit items-center gap-3 bg-gold px-8 py-4 text-[0.7rem] uppercase tracking-[0.28em] text-primary-foreground transition-opacity hover:opacity-85"
            >
              Reserve a seating
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-32 text-center">
        <p className="eyebrow">The philosophy</p>
        <p className="mt-8 font-display text-[clamp(1.6rem,3.6vw,2.9rem)] font-light leading-[1.25]">
          “We do not cook to impress. We cook the way the tide, the fire and the
          hour allow — and then we sit close enough to watch you taste it.”
        </p>
        <p className="mt-8 text-xs uppercase tracking-[0.26em] text-muted-foreground">
          Inês Duarte · Chef Patron
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-32">
        <div className="grid gap-4 md:grid-cols-3">
          {courses.map((course) => (
            <article key={course.numeral} className="group">
              <div className="relative overflow-hidden bg-card">
                <img
                  src={course.img}
                  alt={course.name}
                  loading="lazy"
                  width={900}
                  height={1100}
                  className="h-[30rem] w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
                />
                <span className="absolute left-5 top-4 font-display text-2xl text-gold-soft/80">
                  {course.numeral}
                </span>
              </div>
              <h3 className="mt-6 text-2xl">{course.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {course.note}
              </p>
            </article>
          ))}
        </div>
        <div className="mt-16 text-center">
          <Link
            to="/menu"
            className="border-b border-gold/50 pb-1 text-[0.72rem] uppercase tracking-[0.26em] text-gold"
          >
            See tonight's full menu
          </Link>
        </div>
      </section>

      <section className="border-y border-border bg-card/40">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-24 sm:grid-cols-3">
          {[
            { k: "17", v: "Seats at the counter" },
            { k: "9", v: "Courses each evening" },
            { k: "'98", v: "Cooking on this street since" },
          ].map((s) => (
            <div key={s.v} className="text-center">
              <p className="text-gilded font-display text-6xl">{s.k}</p>
              <p className="mt-3 text-xs uppercase tracking-[0.24em] text-muted-foreground">
                {s.v}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-32 text-center">
        <p className="eyebrow">Tonight</p>
        <h2 className="mt-6 text-[clamp(2.2rem,6vw,4.5rem)] leading-[1.02]">
          The room is small.
          <br />
          <span className="italic text-muted-foreground">Book early.</span>
        </h2>
        <div className="hairline mx-auto mt-10 w-40" />
        <Link
          to="/reservations"
          className="mt-10 inline-block bg-gold px-10 py-4 text-[0.7rem] uppercase tracking-[0.28em] text-primary-foreground transition-opacity hover:opacity-85"
        >
          Request a table
        </Link>
      </section>
    </>
  );
}
