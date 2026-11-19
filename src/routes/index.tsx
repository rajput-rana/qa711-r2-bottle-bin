import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Bell,
  Flame,
  Sparkles,
  ShieldCheck,
  Waves,
  Star,
  ArrowRight,
  Menu,
  X,
  Instagram,
  Twitter,
  Youtube,
  Check,
  Hand,
} from "lucide-react";

type Glaze = { body: string; rim: string; shade: string };

const CREAM: Glaze = { body: "#f3ead8", rim: "#c9a46a", shade: "#e2d5bb" };
const SAGE: Glaze = { body: "#b9c8a8", rim: "#7c8f6a", shade: "#a3b490" };
const CLAY: Glaze = { body: "#d98e6a", rim: "#9c5435", shade: "#c67a56" };
const INK: Glaze = { body: "#3c4a5c", rim: "#c9a46a", shade: "#2f3a49" };

/* ---------- Illustrations (inline SVG, no external images) ---------- */

type ArtProps = { g: Glaze; className?: string };

function PlateArt({ g, className }: ArtProps) {
  return (
    <svg viewBox="0 0 200 200" className={className} aria-hidden>
      <ellipse cx="100" cy="112" rx="86" ry="78" fill="#000" opacity="0.08" />
      <circle cx="100" cy="100" r="82" fill={g.body} />
      <circle cx="100" cy="100" r="82" fill="none" stroke={g.rim} strokeWidth="3" />
      <circle cx="100" cy="100" r="56" fill={g.shade} />
      <circle
        cx="100"
        cy="100"
        r="56"
        fill="none"
        stroke={g.rim}
        strokeWidth="1.5"
        strokeDasharray="2 5"
      />
      <path
        d="M48 62 A62 62 0 0 1 92 40"
        stroke="#fff"
        strokeOpacity="0.55"
        strokeWidth="5"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}

function CupArt({ g, className }: ArtProps) {
  return (
    <svg viewBox="0 0 200 200" className={className} aria-hidden>
      <ellipse cx="100" cy="160" rx="84" ry="22" fill="#000" opacity="0.08" />
      <ellipse cx="100" cy="152" rx="80" ry="20" fill={g.shade} />
      <ellipse cx="100" cy="150" rx="80" ry="20" fill="none" stroke={g.rim} strokeWidth="2.5" />
      <path
        d="M148 82 C182 82 182 128 146 124"
        stroke={g.body}
        strokeWidth="12"
        fill="none"
        strokeLinecap="round"
      />
      <path d="M148 82 C182 82 182 128 146 124" stroke={g.rim} strokeWidth="2" fill="none" />
      <path d="M48 66 L56 138 Q100 156 144 138 L152 66 Z" fill={g.body} />
      <path d="M56 138 Q100 156 144 138" stroke={g.rim} strokeWidth="2" fill="none" />
      <ellipse cx="100" cy="66" rx="52" ry="12" fill={g.shade} />
      <ellipse cx="100" cy="66" rx="52" ry="12" fill="none" stroke={g.rim} strokeWidth="3" />
      <ellipse cx="100" cy="68" rx="44" ry="8" fill="#6b4226" opacity="0.85" />
      <path
        d="M64 82 L68 128"
        stroke="#fff"
        strokeOpacity="0.5"
        strokeWidth="5"
        strokeLinecap="round"
      />
      <path
        d="M86 46 q-8 -12 0 -24 M106 44 q-8 -12 0 -24"
        stroke={g.rim}
        strokeOpacity="0.5"
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
      />
    </svg>
  );
}

function BowlArt({ g, className }: ArtProps) {
  return (
    <svg viewBox="0 0 200 200" className={className} aria-hidden>
      <ellipse cx="100" cy="158" rx="70" ry="14" fill="#000" opacity="0.08" />
      <path d="M22 86 Q26 156 100 156 Q174 156 178 86 Z" fill={g.body} />
      <ellipse cx="100" cy="86" rx="78" ry="20" fill={g.shade} />
      <ellipse cx="100" cy="86" rx="78" ry="20" fill="none" stroke={g.rim} strokeWidth="3" />
      <path
        d="M36 104 Q46 140 84 148"
        stroke="#fff"
        strokeOpacity="0.5"
        strokeWidth="5"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M40 120 Q100 136 160 120"
        stroke={g.rim}
        strokeWidth="1.5"
        strokeDasharray="3 6"
        fill="none"
      />
    </svg>
  );
}

function MugArt({ g, className }: ArtProps) {
  return (
    <svg viewBox="0 0 200 200" className={className} aria-hidden>
      <ellipse cx="96" cy="166" rx="56" ry="10" fill="#000" opacity="0.08" />
      <path
        d="M140 74 C178 74 178 136 138 132"
        stroke={g.body}
        strokeWidth="14"
        fill="none"
        strokeLinecap="round"
      />
      <path d="M140 74 C178 74 178 136 138 132" stroke={g.rim} strokeWidth="2" fill="none" />
      <rect x="44" y="48" width="104" height="116" rx="14" fill={g.body} />
      <rect x="44" y="112" width="104" height="52" rx="14" fill={g.shade} />
      <path d="M44 112 h104" stroke={g.rim} strokeWidth="2" />
      <ellipse cx="96" cy="50" rx="52" ry="10" fill={g.shade} stroke={g.rim} strokeWidth="3" />
      <path
        d="M62 66 L62 102"
        stroke="#fff"
        strokeOpacity="0.5"
        strokeWidth="6"
        strokeLinecap="round"
      />
    </svg>
  );
}

function HeroArt() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-lg">
      <div className="absolute inset-0 rounded-full bg-secondary" />
      <PlateArt g={CREAM} className="absolute left-[6%] top-[8%] w-[72%] drop-shadow-xl" />
      <BowlArt g={SAGE} className="absolute left-[18%] top-[22%] w-[46%]" />
      <CupArt g={CLAY} className="absolute bottom-[4%] right-[2%] w-[52%] drop-shadow-xl" />
      <span className="absolute right-[8%] top-[6%] flex size-16 rotate-12 items-center justify-center rounded-full bg-accent text-accent-foreground shadow-lg">
        <Bell className="size-7" />
      </span>
    </div>
  );
}

/* ---------- Content ---------- */

const products = [
  {
    id: "morning",
    name: "Morning Cup & Saucer",
    desc: "300 ml stoneware cup with a wide saucer. Holds heat through a slow breakfast.",
    price: 28,
    Art: CupArt,
    glaze: CLAY,
    tag: "Bestseller",
  },
  {
    id: "supper",
    name: "Supper Plate Set",
    desc: "Four 27 cm dinner plates with a hand-dipped rim. Stack flat, never wobble.",
    price: 64,
    Art: PlateArt,
    glaze: CREAM,
    tag: "Set of 4",
  },
  {
    id: "garden",
    name: "Garden Bowl",
    desc: "Deep 18 cm bowl in sage glaze, sized for ramen, salads and second helpings.",
    price: 24,
    Art: BowlArt,
    glaze: SAGE,
    tag: null,
  },
  {
    id: "night",
    name: "Night Owl Mug",
    desc: "400 ml mug in midnight glaze with a two-finger handle. For late tea.",
    price: 22,
    Art: MugArt,
    glaze: INK,
    tag: "New",
  },
];

const features = [
  {
    icon: Hand,
    title: "Thrown by hand",
    desc: "Every piece is shaped and glazed by one potter, so no two are quite the same.",
  },
  {
    icon: Flame,
    title: "Oven & microwave safe",
    desc: "High-fired stoneware handles reheats, warm plates and oven-to-table dinners.",
  },
  {
    icon: Waves,
    title: "Dishwasher friendly",
    desc: "Lead-free glazes sealed at 1,240°C. Run them hot, every day.",
  },
  {
    icon: ShieldCheck,
    title: "Chip promise",
    desc: "Chip one in the first year and we'll send a replacement, no questions asked.",
  },
];

const reviews = [
  {
    name: "Priya S.",
    text: "The Supper plates made our Sunday table look like a restaurant. Two years in, not a single chip.",
    role: "Home cook",
  },
  {
    name: "Daniel O.",
    text: "My Morning Cup keeps coffee warm far longer than my old thin mugs. The saucer is the perfect size for a biscuit.",
    role: "Early riser",
  },
  {
    name: "Lena M.",
    text: "Bought the Garden Bowls as a wedding gift and ended up ordering a set for myself the same week.",
    role: "Gift giver",
  },
];

const links: [string, string][] = [
  ["Shop", "#collection"],
  ["Why Magic Bell", "#why"],
  ["Reviews", "#reviews"],
];

/* ---------- Sections ---------- */

function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 lg:px-8">
        <a href="#top" className="flex items-center gap-2">
          <span className="flex size-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
            <Bell className="size-4" />
          </span>
          <span className="font-display text-lg font-semibold tracking-tight">Magic&nbsp;Bell</span>
        </a>
        <nav className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
          {links.map(([label, href]) => (
            <a key={href} href={href} className="transition-colors hover:text-foreground">
              {label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <a
            href="#collection"
            className="hidden rounded-full bg-ink px-5 py-2 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90 sm:inline-flex"
          >
            Shop tableware
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
          {links.map(([label, href]) => (
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
            <Sparkles className="size-3.5 text-accent" />
            Handmade stoneware cups &amp; plates
          </span>
          <h1 className="mt-6 font-display text-5xl font-semibold leading-[1.05] tracking-tight text-foreground sm:text-6xl lg:text-7xl">
            Ring the bell. <em className="not-italic text-primary">Supper's ready.</em>
          </h1>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-muted-foreground">
            Magic Bell makes cups, plates and bowls you'll reach for every day — thrown by hand,
            fired hot, and glazed in colours that make an ordinary meal feel like an occasion.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#collection"
              className="group inline-flex items-center gap-2 rounded-full bg-ink px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition-transform hover:-translate-y-0.5"
            >
              Shop cups &amp; plates
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#why"
              className="text-sm font-medium text-foreground underline decoration-border decoration-2 underline-offset-4 transition-colors hover:decoration-primary"
            >
              How they're made
            </a>
          </div>
          <div className="mt-10 flex items-center gap-1.5 text-sm text-muted-foreground">
            <div className="flex text-accent">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="size-4 fill-current" />
              ))}
            </div>
            <span className="font-medium text-foreground">4.9</span>
            <span>/ 5 · 1,800+ happy tables</span>
          </div>
        </div>
        <div className="relative">
          <HeroArt />
          <div className="absolute -bottom-2 left-2 rounded-2xl border border-border bg-card px-5 py-3 shadow-lg">
            <p className="font-display text-2xl font-semibold text-primary">1,240°C</p>
            <p className="text-xs text-muted-foreground">fired for everyday strength</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProductCard({ product }: { product: (typeof products)[number] }) {
  const [added, setAdded] = useState(false);
  const { Art } = product;
  return (
    <div className="group overflow-hidden rounded-3xl border border-border bg-card transition-shadow hover:shadow-xl hover:shadow-primary/10">
      <div className="relative flex aspect-square items-center justify-center bg-secondary/60 p-8">
        <Art
          g={product.glaze}
          className="w-full transition-transform duration-500 group-hover:-translate-y-1 group-hover:scale-105"
        />
        {product.tag && (
          <span className="absolute left-4 top-4 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
            {product.tag}
          </span>
        )}
      </div>
      <div className="p-6">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-display text-lg font-semibold text-foreground">{product.name}</h3>
          <p className="font-display text-lg font-semibold text-primary">${product.price}</p>
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
              Set the table, beautifully.
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
            Every piece ships free in recycled paper padding and is covered by our first-year chip
            promise.
          </p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
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
            Why Magic Bell
          </p>
          <h2 className="mt-3 font-display text-4xl font-semibold tracking-tight text-foreground lg:text-5xl">
            Made for a lifetime of meals
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
            From the table
          </p>
          <h2 className="mt-3 font-display text-4xl font-semibold tracking-tight lg:text-5xl">
            Loved at breakfast, lunch and supper
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
            <Bell className="size-3.5" />
          </span>
          <span className="font-display font-semibold text-foreground">Magic Bell</span>
        </div>
        <p>© {new Date().getFullYear()} Magic Bell Tableware. Made by hand, meant for use.</p>
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

function BranchBadge() {
  return (
    <div className="fixed bottom-4 left-4 z-50 rounded-full bg-ink px-4 py-2 text-xs font-semibold text-primary-foreground shadow-lg">
      Branch: magic-bell
    </div>
  );
}

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Magic Bell — Handmade Stoneware Cups & Plates" },
      {
        name: "description",
        content:
          "Shop Magic Bell handmade stoneware cups, plates, bowls and mugs. Oven, microwave and dishwasher safe, with a first-year chip promise. Free shipping.",
      },
      { property: "og:title", content: "Magic Bell — Handmade Cups & Plates" },
      {
        property: "og:description",
        content: "Hand-thrown stoneware cups, plates and bowls, fired at 1,240°C for everyday use.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
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
      <BranchBadge />
    </div>
  );
}
