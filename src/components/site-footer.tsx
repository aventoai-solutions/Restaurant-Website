import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:grid-cols-3">
        <div>
          <h3 className="text-3xl">Maison Noir</h3>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
            A seventeen-seat kitchen counter serving one menu, once an evening,
            for those who arrive hungry and unhurried.
          </p>
        </div>

        <div className="space-y-2 text-sm text-muted-foreground">
          <p className="eyebrow mb-4">Visit</p>
          <p>14 Rue de Fer</p>
          <p>Old Quarter, Lisbon</p>
          <p className="pt-4">Wednesday – Sunday</p>
          <p>Seatings at 18:30 &amp; 21:00</p>
        </div>

        <div className="space-y-2 text-sm text-muted-foreground">
          <p className="eyebrow mb-4">Contact</p>
          <a href="tel:+351210000000" className="block hover:text-gold">
            +351 210 000 000
          </a>
          <a href="mailto:table@maisonnoir.com" className="block hover:text-gold">
            table@maisonnoir.com
          </a>
          <Link to="/reservations" className="mt-4 inline-block text-gold">
            Request a seating →
          </Link>
        </div>
      </div>
      <div className="border-t border-border px-6 py-6 text-center text-[0.68rem] uppercase tracking-[0.24em] text-muted-foreground">
        © {new Date().getFullYear()} Maison Noir
      </div>
    </footer>
  );
}
