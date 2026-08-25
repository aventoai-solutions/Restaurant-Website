import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/menu")({
  head: () => ({
    meta: [
      { title: "Tasting Menu — Maison Noir, Lisbon" },
      {
        name: "description",
        content:
          "Nine courses written each morning: sea, fire, cellar and sweet. The Maison Noir tasting menu with wine pairing.",
      },
      { property: "og:title", content: "Tasting Menu — Maison Noir" },
      {
        property: "og:description",
        content: "Nine courses written each morning at our Lisbon counter.",
      },
    ],
  }),
  component: MenuPage,
});

const acts = [
  {
    act: "Act I",
    title: "From the Cold Water",
    items: [
      ["Oyster, green apple, elderflower", "Ria Formosa"],
      ["Scallop, saffron, sea herbs", "Setúbal"],
      ["Cured bream, buttermilk, lovage", "Peniche"],
    ],
  },
  {
    act: "Act II",
    title: "From the Fire",
    items: [
      ["Grilled langoustine, smoked butter", "Azores"],
      ["Aged beef, marrow, charred allium", "60 days"],
      ["Pigeon, black fig, vin jaune", "Alentejo"],
    ],
  },
  {
    act: "Act III",
    title: "To Finish",
    items: [
      ["Sheep's cheese, walnut, pear", "Serra da Estrela"],
      ["Dark chocolate, burnt honey, gold", "Single origin"],
      ["Petits fours, coffee, aguardente", "At the counter"],
    ],
  },
];

function MenuPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 pb-32 pt-40">
      <p className="eyebrow text-center">Written this morning</p>
      <h1 className="mt-6 text-center text-[clamp(2.6rem,8vw,6rem)] leading-[0.95]">
        The <span className="italic text-gilded">Tasting</span> Menu
      </h1>
      <p className="mx-auto mt-6 max-w-lg text-center text-sm leading-relaxed text-muted-foreground">
        Nine courses, three hours, one seating at a time. €165 per guest ·
        Wine pairing €95 · Non-alcoholic pairing €65.
      </p>

      <div className="mt-24 space-y-20">
        {acts.map((act) => (
          <section key={act.act}>
            <div className="flex items-baseline justify-between gap-6">
              <h2 className="text-3xl">{act.title}</h2>
              <span className="eyebrow shrink-0">{act.act}</span>
            </div>
            <div className="hairline mt-4" />
            <ul className="mt-8 space-y-7">
              {act.items.map(([name, origin]) => (
                <li
                  key={name}
                  className="grid grid-cols-[minmax(0,1fr)_auto] items-baseline gap-6"
                >
                  <span className="min-w-0 font-display text-xl">{name}</span>
                  <span className="shrink-0 text-[0.68rem] uppercase tracking-[0.22em] text-muted-foreground">
                    {origin}
                  </span>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>

      <p className="mt-24 text-center text-xs leading-relaxed text-muted-foreground">
        Dietary requirements are cooked for, not around. Tell us when you book.
      </p>
    </div>
  );
}
