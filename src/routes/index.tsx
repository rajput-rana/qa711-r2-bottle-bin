import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowUpRight, Flame, Minus, Plus, ShoppingBag, Snowflake } from "lucide-react";

const HERO_IMG =
  "https://staging.vibe.filesafe.space/1794990071849531341/assets/37ef986b-471d-4c11-b558-e4f4bf79da1d.png";
const BOTTLE_SAGE =
  "https://staging.vibe.filesafe.space/1794990071849531341/assets/6359d792-9b0d-4f8c-b52f-a56d2fa686bf.png";
const BOTTLE_FOREST =
  "https://staging.vibe.filesafe.space/1794990071849531341/assets/18fce02a-2154-4ebf-b0cd-6061aecfbcf8.png";
const BOTTLE_SAND =
  "https://staging.vibe.filesafe.space/1794990071849531341/assets/8913c284-0d70-4766-b0d5-1109bd473b54.png";

type Size = "500" | "750" | "1000";

const SIZE_EXTRA: Record<Size, number> = { "500": 0, "750": 6, "1000": 12 };

const models = [
  {
    id: "grove",
    code: "TV-01",
    name: "Grove",
    finish: "Matte sage · bamboo cap",
    blurb: "The everyday one. Light enough for a tote, tough enough for a trail.",
    price: 42,
    img: BOTTLE_SAGE,
    swatch: "oklch(0.72 0.05 150)",
  },
  {
    id: "summit",
    code: "TV-02",
    name: "Summit",
    finish: "Forest matte · steel loop cap",
    blurb: "Clip it to a pack and forget it. Loop cap rated to 40 kg pull.",
    price: 48,
    img: BOTTLE_FOREST,
    swatch: "oklch(0.4 0.07 158)",
  },
  {
    id: "dune",
    code: "TV-03",
    name: "Dune",
    finish: "Ribbed sand · gold-tone cap",
    blurb: "Textured grip and a cap that looks as good on a desk as a dashboard.",
    price: 45,
    img: BOTTLE_SAND,
    swatch: "oklch(0.82 0.05 80)",
  },
];

const specs: [string, string][] = [
  ["Body", "Double-wall 18/8 recycled stainless steel"],
  ["Insulation", "Copper-lined vacuum layer"],
  ["Cold hold", "24 hours"],
  ["Hot hold", "12 hours"],
  ["Drop rating", "2 m onto concrete"],
  ["Seal", "Leak-proof, upside down, in a bag"],
  ["Plastic", "None — cap to carton"],
  ["Warranty", "Lifetime, no receipt needed"],
];

const notes = [
  {
    quote: "Three national parks later it still looks new — and my water stayed icy past sunset.",
    who: "Mara J.",
    what: "Backpacker · Grove",
  },
  {
    quote: "Replaced four plastic bottles with one Summit. It has never leaked in my bag.",
    who: "Theo R.",
    what: "Commuter · Summit",
  },
  {
    quote: "Coffee at 7 a.m., still hot at the end of a twelve-hour shift. That's the review.",
    who: "Ines K.",
    what: "Nurse · Dune",
  },
];

// Simple cooling/warming curves for the side-by-side test.
function tempAt(mode: "cold" | "hot", hours: number, insulated: boolean) {
  const room = 22;
  const start = mode === "cold" ? 3 : 92;
  const tau = insulated ? (mode === "cold" ? 130 : 30) : 1.6;
  return room + (start - room) * Math.exp(-hours / tau);
}

function Label({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
      {children}
    </p>
  );
}

function SectionHead({ n, kicker, title }: { n: string; kicker: string; title: string }) {
  return (
    <div className="grid gap-6 border-t border-line pt-6 md:grid-cols-[180px_1fr]">
      <Label>
        {n} / {kicker}
      </Label>
      <h2 className="font-display font-wide text-3xl font-extrabold uppercase leading-[0.95] tracking-tight sm:text-5xl">
        {title}
      </h2>
    </div>
  );
}

function Nav({ count }: { count: number }) {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-background/80 backdrop-blur-lg">
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-4 sm:px-6">
        <a
          href="#top"
          className="font-display font-wide text-sm font-black uppercase tracking-tight"
        >
          Terra<span className="text-ice">/</span>Vessel
        </a>
        <nav className="hidden items-center gap-8 font-mono text-xs uppercase tracking-widest text-muted-foreground md:flex">
          <a href="#test" className="hover:text-foreground">
            The test
          </a>
          <a href="#models" className="hover:text-foreground">
            Models
          </a>
          <a href="#specs" className="hover:text-foreground">
            Specs
          </a>
          <a href="#notes" className="hover:text-foreground">
            Field notes
          </a>
        </nav>
        <a
          href="#models"
          className="inline-flex items-center gap-2 border border-line px-3 py-1.5 font-mono text-xs uppercase tracking-widest hover:border-ice hover:text-ice"
          aria-label={`Bag, ${count} items`}
        >
          <ShoppingBag className="size-3.5" />
          Bag [{count}]
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-grid">
      <div className="pointer-events-none absolute -right-40 top-10 size-[38rem] rounded-full bg-ice/15 blur-3xl" />
      <div className="pointer-events-none absolute -left-40 bottom-0 size-[28rem] rounded-full bg-heat/10 blur-3xl" />
      <div className="relative mx-auto grid max-w-7xl gap-10 px-4 pb-16 pt-12 sm:px-6 lg:grid-cols-12 lg:pb-24 lg:pt-20">
        <div className="lg:col-span-7">
          <Label>Insulated steel bottles · Est. 2019</Label>
          <h1 className="mt-6 font-display font-wide text-[13vw] font-black uppercase leading-[0.86] tracking-tighter sm:text-7xl lg:text-[7.5rem]">
            <span className="text-ice">Cold</span> stays.
            <br />
            <span className="text-heat">Hot</span> stays.
          </h1>
          <p className="mt-8 max-w-lg text-lg leading-relaxed text-muted-foreground">
            One bottle that holds ice for 24 hours and coffee for 12. Recycled steel, zero plastic,
            and a promise that it lasts for life.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href="#models"
              className="group inline-flex items-center gap-2 bg-ice px-6 py-4 font-mono text-sm font-bold uppercase tracking-widest text-primary-foreground hover:bg-foreground"
            >
              Pick your bottle
              <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
            <a
              href="#test"
              className="inline-flex items-center border border-line px-6 py-4 font-mono text-sm uppercase tracking-widest hover:border-foreground"
            >
              Run the test
            </a>
          </div>
          <dl className="mt-14 grid max-w-lg grid-cols-3 border-y border-line">
            {[
              ["24h", "Cold"],
              ["12h", "Hot"],
              ["4.9★", "2,300+ reviews"],
            ].map(([v, k]) => (
              <div
                key={k}
                className="border-r border-line py-4 pr-3 last:border-r-0 [&:not(:first-child)]:pl-4"
              >
                <dt className="sr-only">{k}</dt>
                <dd className="font-display font-wide text-2xl font-extrabold">{v}</dd>
                <dd className="mt-1 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                  {k}
                </dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="relative lg:col-span-5">
          <div className="relative border border-line bg-card p-2">
            <img
              src={HERO_IMG}
              alt="Terra Vessel insulated bottle on a mossy stone in morning light"
              className="aspect-[4/5] w-full object-cover grayscale-[20%]"
            />
            <span className="absolute left-4 top-4 bg-background/90 px-2 py-1 font-mono text-[10px] uppercase tracking-widest">
              Fig. 01 — Summit, day 3
            </span>
            <span className="absolute bottom-4 right-4 flex items-center gap-2 bg-ice px-3 py-2 font-mono text-xs font-bold uppercase text-primary-foreground">
              <Snowflake className="size-3.5" /> 4.1°C at hour 22
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

function Ticker() {
  const items = [
    "Free shipping on every order",
    "Lifetime warranty",
    "1 bottle = 12 plastic bottles avoided",
    "Plastic-free packaging",
    "Drop-tested to 2 m",
  ];
  const row = [...items, ...items];
  return (
    <div className="overflow-hidden border-y border-line bg-ice py-3 text-primary-foreground">
      <div className="animate-marquee flex w-max gap-10 whitespace-nowrap font-mono text-xs font-bold uppercase tracking-[0.2em]">
        {[...row, ...row].map((t, i) => (
          <span key={i} className="flex items-center gap-10">
            {t} <span aria-hidden>✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}

function Gauge({
  label,
  temp,
  mode,
  highlight,
}: {
  label: string;
  temp: number;
  mode: "cold" | "hot";
  highlight: boolean;
}) {
  // Scale 0..100°C to a bar.
  const pct = Math.min(100, Math.max(0, temp));
  const color = mode === "cold" ? "bg-ice" : "bg-heat";
  return (
    <div className={`border p-5 ${highlight ? "border-foreground/40 bg-card" : "border-line"}`}>
      <Label>{label}</Label>
      <p className="mt-3 font-display font-wide text-5xl font-black tabular-nums sm:text-6xl">
        {temp.toFixed(1)}
        <span className="text-2xl text-muted-foreground">°C</span>
      </p>
      <div className="mt-5 h-2 w-full bg-muted">
        <div
          className={`h-full ${highlight ? color : "bg-muted-foreground/60"} transition-[width] duration-300`}
          style={{ width: `${pct}%` }}
        />
      </div>
      <div className="mt-1 flex justify-between font-mono text-[10px] text-muted-foreground">
        <span>0°</span>
        <span>22° room</span>
        <span>100°</span>
      </div>
    </div>
  );
}

function TempTest() {
  const [mode, setMode] = useState<"cold" | "hot">("cold");
  const max = mode === "cold" ? 24 : 12;
  const [hours, setHours] = useState(8);
  const h = Math.min(hours, max);
  const ours = tempAt(mode, h, true);
  const plain = tempAt(mode, h, false);

  return (
    <section id="test" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:py-28">
      <SectionHead n="01" kicker="The test" title="Drag the clock. Watch the gap." />
      <div className="mt-10 grid gap-8 md:grid-cols-[180px_1fr]">
        <div className="flex gap-2 md:flex-col">
          {(["cold", "hot"] as const).map((m) => (
            <button
              key={m}
              onClick={() => setMode(m)}
              aria-pressed={mode === m}
              className={`flex items-center gap-2 border px-4 py-3 font-mono text-xs uppercase tracking-widest ${
                mode === m
                  ? m === "cold"
                    ? "border-ice bg-ice text-primary-foreground"
                    : "border-heat bg-heat text-accent-foreground"
                  : "border-line text-muted-foreground hover:text-foreground"
              }`}
            >
              {m === "cold" ? <Snowflake className="size-3.5" /> : <Flame className="size-3.5" />}
              {m === "cold" ? "Ice water" : "Coffee"}
            </button>
          ))}
        </div>
        <div>
          <div className="flex items-baseline justify-between">
            <Label>Hours since filled</Label>
            <span className="font-mono text-sm tabular-nums">
              {h.toFixed(0).padStart(2, "0")}:00 / {max}:00
            </span>
          </div>
          <input
            type="range"
            min={0}
            max={max}
            step={1}
            value={h}
            onChange={(e) => setHours(Number(e.target.value))}
            aria-label="Hours since filled"
            className={`mt-4 w-full ${mode === "cold" ? "accent-[var(--ice)]" : "accent-[var(--heat)]"}`}
          />
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <Gauge label="Terra Vessel" temp={ours} mode={mode} highlight />
            <Gauge label="Ordinary plastic bottle" temp={plain} mode={mode} highlight={false} />
          </div>
          <p className="mt-4 font-mono text-[11px] text-muted-foreground">
            Modelled from our lab hold tests at 22°C room temperature. Your kitchen may vary.
          </p>
        </div>
      </div>
    </section>
  );
}

function Models({ onAdd }: { onAdd: (n: number) => void }) {
  const [active, setActive] = useState(0);
  const [size, setSize] = useState<Size>("750");
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);
  const m = models[active] ?? models[0]!;
  const price = m.price + SIZE_EXTRA[size];

  return (
    <section id="models" className="border-y border-line bg-card/60">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:py-28">
        <SectionHead n="02" kicker="Models" title="Three bodies. One engine." />
        <div className="mt-10 grid border border-line md:grid-cols-[180px_1fr]">
          <div
            role="tablist"
            aria-label="Bottle models"
            className="flex border-b border-line md:flex-col md:border-b-0 md:border-r"
          >
            {models.map((x, i) => (
              <button
                key={x.id}
                role="tab"
                aria-selected={i === active}
                onClick={() => setActive(i)}
                className={`flex-1 border-r border-line p-4 text-left last:border-r-0 md:flex-none md:border-b md:border-r-0 ${
                  i === active ? "bg-foreground text-background" : "hover:bg-muted"
                }`}
              >
                <span className="block font-mono text-[10px] uppercase tracking-widest opacity-60">
                  {x.code}
                </span>
                <span className="font-display font-wide text-lg font-extrabold uppercase">
                  {x.name}
                </span>
              </button>
            ))}
          </div>
          <div className="grid lg:grid-cols-2">
            <div className="relative border-b border-line bg-background lg:border-b-0 lg:border-r">
              <img
                key={m.id}
                src={m.img}
                alt={`${m.name} insulated bottle`}
                className="aspect-square w-full object-cover animate-in fade-in duration-500"
              />
              <span className="absolute left-4 top-4 font-mono text-[10px] uppercase tracking-widest">
                {m.code}
              </span>
            </div>
            <div className="flex flex-col p-6 sm:p-10">
              <div className="flex items-center gap-3">
                <span
                  className="size-4 rounded-full border border-line"
                  style={{ background: m.swatch }}
                />
                <Label>{m.finish}</Label>
              </div>
              <h3 className="mt-4 font-display font-wide text-5xl font-black uppercase tracking-tight sm:text-6xl">
                {m.name}
              </h3>
              <p className="mt-4 max-w-sm text-muted-foreground">{m.blurb}</p>

              <div className="mt-8">
                <Label>Size</Label>
                <div className="mt-3 flex gap-2">
                  {(Object.keys(SIZE_EXTRA) as Size[]).map((s) => (
                    <button
                      key={s}
                      onClick={() => setSize(s)}
                      aria-pressed={size === s}
                      className={`border px-4 py-2 font-mono text-xs ${
                        size === s
                          ? "border-ice text-ice"
                          : "border-line text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      {s} ml
                    </button>
                  ))}
                </div>
              </div>

              <div className="mt-auto flex flex-wrap items-center gap-4 pt-10">
                <p className="font-display font-wide text-4xl font-black tabular-nums">
                  ${price * qty}
                </p>
                <div className="flex items-center border border-line">
                  <button
                    aria-label="Fewer"
                    onClick={() => setQty((q) => Math.max(1, q - 1))}
                    className="p-3 hover:bg-muted"
                  >
                    <Minus className="size-3.5" />
                  </button>
                  <span className="w-8 text-center font-mono text-sm tabular-nums">{qty}</span>
                  <button
                    aria-label="More"
                    onClick={() => setQty((q) => Math.min(9, q + 1))}
                    className="p-3 hover:bg-muted"
                  >
                    <Plus className="size-3.5" />
                  </button>
                </div>
                <button
                  onClick={() => {
                    onAdd(qty);
                    setAdded(true);
                    setTimeout(() => setAdded(false), 1600);
                  }}
                  className={`basis-full px-6 py-3.5 font-mono text-sm font-bold uppercase tracking-widest ${
                    added
                      ? "bg-heat text-accent-foreground"
                      : "bg-ice text-primary-foreground hover:bg-foreground"
                  }`}
                >
                  {added ? "In your bag ✓" : "Add to bag"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Specs() {
  return (
    <section id="specs" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:py-28">
      <SectionHead n="03" kicker="Spec sheet" title="No fine print. Just print." />
      <dl className="mt-10 md:ml-[180px]">
        {specs.map(([k, v]) => (
          <div
            key={k}
            className="group grid grid-cols-[120px_1fr] gap-4 border-b border-line py-4 transition-colors hover:bg-card sm:grid-cols-[200px_1fr]"
          >
            <dt className="font-mono text-xs uppercase tracking-widest text-muted-foreground group-hover:text-ice">
              {k}
            </dt>
            <dd className="text-base sm:text-lg">{v}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}

function Impact() {
  return (
    <section className="relative overflow-hidden bg-heat text-accent-foreground">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-16 sm:px-6 md:grid-cols-[1fr_auto] md:items-end lg:py-20">
        <p className="font-display font-wide text-[18vw] font-black leading-[0.8] tracking-tighter md:text-[11rem]">
          ×12
        </p>
        <p className="max-w-sm text-lg font-medium leading-snug">
          Every bottle we sell keeps twelve single-use plastic bottles out of rivers and oceans
          through our cleanup partners. 1.8 million so far.
        </p>
      </div>
    </section>
  );
}

function FieldNotes() {
  return (
    <section id="notes" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:py-28">
      <SectionHead n="04" kicker="Field notes" title="Carried, not coddled." />
      <ol className="mt-10 md:ml-[180px]">
        {notes.map((n, i) => (
          <li key={n.who} className="grid gap-4 border-b border-line py-8 sm:grid-cols-[60px_1fr]">
            <span className="font-mono text-xs text-muted-foreground">0{i + 1}</span>
            <figure>
              <blockquote className="font-display text-2xl font-semibold leading-snug sm:text-3xl">
                “{n.quote}”
              </blockquote>
              <figcaption className="mt-4 font-mono text-xs uppercase tracking-widest text-muted-foreground">
                <span className="text-ice">{n.who}</span> — {n.what}
              </figcaption>
            </figure>
          </li>
        ))}
      </ol>
    </section>
  );
}

function Footer() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);
  return (
    <footer className="overflow-hidden border-t border-line bg-ink">
      <div className="mx-auto max-w-7xl px-4 pt-16 sm:px-6">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <Label>Dispatches</Label>
            <p className="mt-3 max-w-sm text-muted-foreground">
              New finishes and trail stories, about once a month. No spam.
            </p>
          </div>
          {done ? (
            <p className="self-end font-mono text-sm text-ice">You're on the list. ✦</p>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                if (email.includes("@")) setDone(true);
              }}
              className="flex self-end border-b border-foreground/40 focus-within:border-ice"
            >
              <label htmlFor="email" className="sr-only">
                Email
              </label>
              <input
                id="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="min-w-0 flex-1 bg-transparent py-3 font-mono text-sm outline-none placeholder:text-muted-foreground"
              />
              <button
                type="submit"
                className="font-mono text-xs font-bold uppercase tracking-widest hover:text-ice"
              >
                Subscribe →
              </button>
            </form>
          )}
        </div>
        <p
          aria-hidden
          className="mt-16 select-none font-display font-wide text-[9.5vw] font-black uppercase leading-[0.8] tracking-tighter text-foreground/10 xl:text-[7.75rem]"
        >
          Terra/Vessel
        </p>
        <div className="flex flex-col justify-between gap-2 border-t border-line py-6 font-mono text-[11px] uppercase tracking-widest text-muted-foreground sm:flex-row">
          <span>© {new Date().getFullYear()} Terra Vessel</span>
          <span>Drink well. Waste less.</span>
        </div>
      </div>
    </footer>
  );
}

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Terra Vessel — Cold Stays. Hot Stays." },
      {
        name: "description",
        content:
          "Insulated recycled-steel bottles: 24h cold, 12h hot, plastic-free, covered for life. Free shipping on every order.",
      },
      { property: "og:title", content: "Terra Vessel — Cold Stays. Hot Stays." },
      {
        property: "og:description",
        content: "24h cold, 12h hot. Recycled steel, zero plastic, lifetime warranty.",
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
  const [bag, setBag] = useState(0);
  return (
    <div className="min-h-screen bg-background font-body text-foreground antialiased selection:bg-ice selection:text-primary-foreground">
      <Nav count={bag} />
      <Hero />
      <Ticker />
      <TempTest />
      <Models onAdd={(n) => setBag((b) => b + n)} />
      <Specs />
      <Impact />
      <FieldNotes />
      <Footer />
    </div>
  );
}
