import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Droplets,
  Leaf,
  Mountain,
  ShieldCheck,
  Truck,
  Recycle,
  Star,
  ArrowRight,
  Menu,
  X,
  Instagram,
  Twitter,
  Youtube,
  Check,
} from "lucide-react";

const HERO_IMG =
  "https://staging.vibe.filesafe.space/1794990071849531341/assets/37ef986b-471d-4c11-b558-e4f4bf79da1d.png";
const BOTTLE_SAGE =
  "https://staging.vibe.filesafe.space/1794990071849531341/assets/6359d792-9b0d-4f8c-b52f-a56d2fa686bf.png";
const BOTTLE_FOREST =
  "https://staging.vibe.filesafe.space/1794990071849531341/assets/18fce02a-2154-4ebf-b0cd-6061aecfbcf8.png";
const BOTTLE_SAND =
  "https://staging.vibe.filesafe.space/1794990071849531341/assets/8913c284-0d70-4766-b0d5-1109bd473b54.png";

const products = [
  {
    id: "grove",
    name: "The Grove",
    desc: "Matte sage finish, bamboo cap. 24h cold, 12h hot.",
    price: 42,
    img: BOTTLE_SAGE,
    tag: "Bestseller",
  },
  {
    id: "summit",
    name: "The Summit",
    desc: "Deep forest matte, steel loop cap. Built for trails.",
    price: 48,
    img: BOTTLE_FOREST,
    tag: "New",
  },
  {
    id: "dune",
    name: "The Dune",
    desc: "Ribbed sand texture, gold-tone cap. Carry it anywhere.",
    price: 45,
    img: BOTTLE_SAND,
    tag: null,
  },
];

const features = [
  {
    icon: Mountain,
    title: "Trail-tested steel",
    desc: "Double-wall 18/8 stainless steel, drop-proof to 2 meters.",
  },
  {
    icon: Droplets,
    title: "24h cold / 12h hot",
    desc: "Vacuum-sealed insulation that holds through the whole day.",
  },
  {
    icon: Leaf,
    title: "Plastic-free",
    desc: "Zero single-use plastic, from cap to carton packaging.",
  },
  {
    icon: ShieldCheck,
    title: "Lifetime promise",
    desc: "Every bottle is covered for life. No receipts, no questions.",
  },
];

const reviews = [
  {
    name: "Mara J.",
    text: "I've taken the Grove through three national parks. Still looks brand new — and my water stays icy past sunset.",
    role: "Backpacker",
  },
  {
    name: "Theo R.",
    text: "Replaced four plastic bottles with one Summit. The seal never leaks in my bag, even upside down.",
    role: "Commuter",
  },
  {
    name: "Ines K.",
    text: "The Dune is the first bottle I actually want to be seen with. Coffee stays hot through my whole shift.",
    role: "Nurse",
  },
];

function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 lg:px-8">
        <a href="#top" className="flex items-center gap-2">
          <span className="flex size-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
            <Droplets className="size-4" />
          </span>
          <span className="font-display text-lg font-semibold tracking-tight">
            Terra&nbsp;Vessel
          </span>
        </a>
        <nav className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
          <a href="#collection" className="transition-colors hover:text-foreground">
            Collection
          </a>
          <a href="#why" className="transition-colors hover:text-foreground">
            Why Terra
          </a>
          <a href="#reviews" className="transition-colors hover:text-foreground">
            Reviews
          </a>
        </nav>
        <div className="flex items-center gap-3">
          <a
            href="#collection"
            className="hidden rounded-full bg-ink px-5 py-2 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90 sm:inline-flex"
          >
            Shop bottles
          </a>
          <button
            className="flex size-9 items-center justify-center rounded-full border border-border md:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X className="size-4" /> : <Menu className="size-4" />}
          </button>
        </div>
      </div>
      {open && (
        <nav className="border-t border-border/60 bg-background px-5 py-4 md:hidden">
          {[
            ["Collection", "#collection"],
            ["Why Terra", "#why"],
            ["Reviews", "#reviews"],
          ].map(([label, href]) => (
            <a
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className="block py-2 text-sm text-muted-foreground"
            >
              {label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-16">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 pb-16 pt-12 lg:grid-cols-[1.05fr_1fr] lg:items-center lg:gap-14 lg:px-8 lg:pb-24 lg:pt-20">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-xs font-medium tracking-wide text-muted-foreground">
            <Recycle className="size-3.5 text-accent" />1 bottle sold = 12 plastic bottles kept out
            of oceans
          </span>
          <h1 className="mt-6 font-display text-5xl font-semibold leading-[1.05] tracking-tight text-foreground sm:text-6xl lg:text-7xl">
            Water, carried (R2) <em className="not-italic text-primary">brilliantly.</em>
          </h1>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-muted-foreground">
            Terra Vessel bottles keep cold drinks cold for 30 hours and hot drinks hot for 13 — in recycled steel finishes that look as good as they perform.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#collection"
              className="group inline-flex items-center gap-2 rounded-full bg-ink px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition-transform hover:-translate-y-0.5"
            >
              Shop the collection
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#why"
              className="text-sm font-medium text-foreground underline decoration-border decoration-2 underline-offset-4 transition-colors hover:decoration-primary"
            >
              Why Terra Vessel
            </a>
          </div>
          <div className="mt-10 flex items-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-1.5">
              <div className="flex text-accent">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="size-4 fill-current" />
                ))}
              </div>
              <span className="font-medium text-foreground">4.9</span>
              <span>/ 5 · 2,300+ reviews</span>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="absolute -inset-6 -z-10 rounded-[2.5rem] bg-gradient-to-br from-secondary via-transparent to-accent/20" />
          <img
            src={HERO_IMG}
            alt="Terra Vessel forest-green insulated bottle on a mossy stone in morning light"
            className="aspect-[16/11] w-full rounded-[2rem] object-cover shadow-2xl shadow-primary/20"
          />
          <div className="absolute -bottom-5 left-6 rounded-2xl border border-border bg-card px-5 py-3 shadow-lg">
            <p className="font-display text-2xl font-semibold text-primary">24h</p>
            <p className="text-xs text-muted-foreground">ice-cold, promised</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProductCard({ product }: { product: (typeof products)[number] }) {
  const [added, setAdded] = useState(false);
  return (
    <div className="group overflow-hidden rounded-3xl border border-border bg-card transition-shadow hover:shadow-xl hover:shadow-primary/10">
      <div className="relative overflow-hidden">
        <img
          src={product.img}
          alt={`${product.name} insulated bottle`}
          className="aspect-[3/4] w-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        {product.tag && (
          <span className="absolute left-4 top-4 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
            {product.tag}
          </span>
        )}
      </div>
      <div className="p-6">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-display text-xl font-semibold text-foreground">{product.name}</h3>
          <p className="font-display text-xl font-semibold text-primary">${product.price}</p>
        </div>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{product.desc}</p>
        <button
          onClick={() => {
            setAdded(true);
            setTimeout(() => setAdded(false), 1800);
          }}
          className={`mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-colors ${
            added
              ? "bg-accent text-accent-foreground"
              : "bg-primary text-primary-foreground hover:opacity-90"
          }`}
        >
          {added ? (
            <>
              <Check className="size-4" /> Added to cart
            </>
          ) : (
            "Add to cart"
          )}
        </button>
      </div>
    </div>
  );
}

function Collection() {
  return (
    <section id="collection" className="bg-moss/40 py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              The collection
            </p>
            <h2 className="mt-3 font-display text-4xl font-semibold tracking-tight text-foreground lg:text-5xl">
              Three bottles. Zero compromise.
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
            Every vessel ships free, arrives in plastic-free packaging, and is covered by our
            lifetime promise.
          </p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Features() {
  return (
    <section id="why" className="py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Why Terra Vessel
          </p>
          <h2 className="mt-3 font-display text-4xl font-semibold tracking-tight text-foreground lg:text-5xl">
            Built for a decade of refills
          </h2>
        </div>
        <div className="mt-14 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="text-center sm:text-left">
              <span className="inline-flex size-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <Icon className="size-5" />
              </span>
              <h3 className="mt-4 font-display text-lg font-semibold text-foreground">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Reviews() {
  return (
    <section id="reviews" className="bg-primary py-20 text-primary-foreground lg:py-28">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-foreground/70">
            Field notes
          </p>
          <h2 className="mt-3 font-display text-4xl font-semibold tracking-tight lg:text-5xl">
            Carried everywhere, praised daily
          </h2>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {reviews.map((r) => (
            <figure
              key={r.name}
              className="rounded-3xl bg-primary-foreground/10 p-7 backdrop-blur-sm"
            >
              <div className="flex text-gold">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="size-4 fill-current" />
                ))}
              </div>
              <blockquote className="mt-4 text-sm leading-relaxed text-primary-foreground/90">
                “{r.text}”
              </blockquote>
              <figcaption className="mt-5 text-sm">
                <span className="font-semibold">{r.name}</span>
                <span className="text-primary-foreground/60"> · {r.role}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-5 py-10 text-sm text-muted-foreground sm:flex-row lg:px-8">
        <div className="flex items-center gap-2">
          <span className="flex size-7 items-center justify-center rounded-full bg-primary text-primary-foreground">
            <Droplets className="size-3.5" />
          </span>
          <span className="font-display font-semibold text-foreground">Terra Vessel</span>
        </div>
        <p>© {new Date().getFullYear()} Terra Vessel. Drink responsibly, sustainably. · QA 711 R2 branch edit</p>
        <div className="flex items-center gap-4">
          <a href="#top" aria-label="Instagram" className="transition-colors hover:text-foreground">
            <Instagram className="size-4" />
          </a>
          <a href="#top" aria-label="Twitter" className="transition-colors hover:text-foreground">
            <Twitter className="size-4" />
          </a>
          <a href="#top" aria-label="YouTube" className="transition-colors hover:text-foreground">
            <Youtube className="size-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Terra Vessel — Premium Insulated Bottles That Last a Lifetime" },
      {
        name: "description",
        content:
          "Shop Terra Vessel insulated steel bottles: 24h cold, 12h hot, plastic-free, and covered for life. Free shipping on every order.",
      },
      { property: "og:title", content: "Terra Vessel — Premium Insulated Bottles" },
      {
        property: "og:description",
        content:
          "24h cold, 12h hot. Recycled steel, plastic-free, lifetime promise. Shop the Terra Vessel collection.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:image", content: HERO_IMG },
      { name: "twitter:image", content: HERO_IMG },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background font-body text-foreground antialiased">
      <Nav />
      <Hero />
      <Collection />
      <Features />
      <Reviews />
      <Footer />
    </div>
  );
}
