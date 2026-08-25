import { createFileRoute } from "@tanstack/react-router";

import hero from "@/assets/hero.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "The House — Maison Noir, Lisbon" },
      {
        name: "description",
        content:
          "Since 1998, a family kitchen on Rue de Fer. The story, the fire and the people behind Maison Noir.",
      },
      { property: "og:title", content: "The House — Maison Noir" },
      {
        property: "og:description",
        content: "Since 1998, a family kitchen on Rue de Fer in Lisbon.",
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="pt-40">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <p className="eyebrow">Since 1998</p>
        <h1 className="mt-6 text-[clamp(2.6rem,8vw,6rem)] leading-[0.95]">
          The <span className="italic text-gilded">House</span>
        </h1>
      </div>

      <div className="mx-auto mt-20 max-w-6xl px-6">
        <img
          src={hero}
          alt="The kitchen counter at Maison Noir during evening service"
          loading="lazy"
          width={1600}
          height={1104}
          className="h-[26rem] w-full object-cover md:h-[38rem]"
        />
      </div>

      <div className="mx-auto grid max-w-5xl gap-16 px-6 py-28 md:grid-cols-2">
        <div className="space-y-6 text-sm leading-relaxed text-muted-foreground">
          <p>
            Maison Noir began as a fishmonger's back room where Armando Duarte
            cooked for whoever was still on the street at midnight. There was
            one pan, one fire and no menu — only whatever had not sold that day.
          </p>
          <p>
            His daughter Inês kept the fire and threw out everything else. The
            room now seats seventeen, all of them facing the pass, and the menu
            changes with the boats.
          </p>
        </div>
        <div className="space-y-6 text-sm leading-relaxed text-muted-foreground">
          <p>
            We buy small: two boats, four farms, one cheesemaker in the
            mountains. Nothing is portioned before you arrive, and nothing
            leaves the pass that the chef has not touched.
          </p>
          <p>
            Service is quiet, unhurried and without ceremony. Come as you are —
            just come hungry, and come on time.
          </p>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-24 md:grid-cols-3">
          {[
            ["Inês Duarte", "Chef Patron"],
            ["Tomás Aires", "Head of Fire"],
            ["Marta Lins", "Cellar & Pairings"],
          ].map(([name, role]) => (
            <div key={name}>
              <div className="hairline" />
              <h3 className="mt-6 text-2xl">{name}</h3>
              <p className="mt-2 text-[0.68rem] uppercase tracking-[0.24em] text-muted-foreground">
                {role}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
