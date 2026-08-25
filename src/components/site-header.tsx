import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";

const nav = [
  { to: "/menu", label: "Menu" },
  { to: "/about", label: "The House" },
  { to: "/reservations", label: "Reservations" },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-border bg-background/85 backdrop-blur-xl"
          : "border-b border-transparent"
      }`}
    >
      <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-6 py-5 sm:flex sm:justify-between">
        <Link to="/" className="flex min-w-0 items-center gap-3">
          <img
            src={logoMark}
            alt="Maison Noir monogram"
            width={40}
            height={40}
            className="h-9 w-9 shrink-0 rounded-full object-cover"
          />
          <span className="min-w-0">
            <span className="block font-display text-xl leading-none tracking-[0.28em] text-foreground">
              MAISON
            </span>
            <span className="eyebrow block leading-none">Noir · Est. 1998</span>
          </span>
        </Link>

        <nav className="flex shrink-0 items-center gap-6 sm:gap-9">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeProps={{ className: "text-gold" }}
              className="hidden text-[0.72rem] uppercase tracking-[0.22em] text-muted-foreground transition-colors hover:text-gold sm:block"
            >
              {item.label}
            </Link>
          ))}
          <Link
            to="/reservations"
            className="border border-gold/60 px-4 py-2 text-[0.68rem] uppercase tracking-[0.22em] text-gold transition-colors hover:bg-gold hover:text-primary-foreground"
          >
            Book a table
          </Link>
        </nav>
      </div>
    </header>
  );
}
