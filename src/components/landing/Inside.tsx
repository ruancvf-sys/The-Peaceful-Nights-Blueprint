import { Bed, CloudMoon, Link2Off, Milk, Waves, Star } from "lucide-react";
import { CtaButton } from "./CtaButton";
import { SectionHeading } from "./SectionHeading";

const modules = [
  {
    icon: CloudMoon,
    title: "Decoding Night Wakings",
    text: "Understand exactly why your baby wakes — hunger, habit, or development — and how to respond to each one calmly.",
  },
  {
    icon: Milk,
    title: "Gentle Night-Weaning Roadmap",
    text: "A slow, loving plan to reduce night feeds when your baby is ready — without tears or sudden changes.",
  },
  {
    icon: Link2Off,
    title: "Breaking Sleep Associations",
    text: "Softly transition away from rocking, nursing, or bouncing to sleep, so your baby can settle on their own.",
  },
  {
    icon: Bed,
    title: "The 4-Step Crib Transition",
    text: "Martha’s signature method for moving from arms to crib — so laying them down no longer wakes them up.",
  },
  {
    icon: Waves,
    title: "Surviving Regressions",
    text: "What to expect at 4, 8, and 12 months, and how to protect your progress when sleep suddenly falls apart.",
  },
];

const testimonials = [
  {
    quote:
      "By night four, my 7-month-old slept 6 hours straight. No crying, no guilt. Best $9.90 I’ve ever spent — I wish I’d found it months ago.",
    name: "Jessica R.",
    place: "Austin, TX",
  },
  {
    quote:
      "I was so scared of sleep training. Martha’s method felt like a warm hug. The crib transition chapter alone was worth ten times the price.",
    name: "Amanda K.",
    place: "Denver, CO",
  },
  {
    quote:
      "Finally advice that makes sense! My son now goes down in his crib awake and happy. My husband and I actually have evenings again.",
    name: "Lauren M.",
    place: "Seattle, WA",
  },
];

export function Inside() {
  return (
    <section className="w-full bg-surface-sage">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 md:py-24">
        <SectionHeading
          eyebrow="What you’ll discover inside"
          title="Five gentle chapters to calmer, longer nights"
          subtitle="Each chapter is short, practical, and written to be read with one hand while holding a baby."
        />
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {modules.map(({ icon: Icon, title, text }, i) => (
            <div
              key={title}
              className="group relative overflow-hidden rounded-3xl bg-card p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <span className="absolute right-6 top-5 text-6xl font-extrabold text-sage-soft transition-colors group-hover:text-secondary">
                0{i + 1}
              </span>
              <div className="relative mb-6 flex size-14 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
                <Icon className="size-7" />
              </div>
              <p className="relative text-xs font-bold uppercase tracking-widest text-primary">
                Chapter {i + 1}
              </p>
              <h3 className="relative mt-2 text-xl font-bold">{title}</h3>
              <p className="relative mt-3 leading-relaxed text-muted-foreground">{text}</p>
            </div>
          ))}
          <div className="flex flex-col justify-center rounded-3xl border-2 border-dashed border-primary/30 p-8 text-center">
            <p className="text-lg font-bold">Plus 2 free bonus guides</p>
            <p className="mt-2 text-muted-foreground">
              Included today with your copy at no extra cost.
            </p>
            <CtaButton className="mt-6 sm:w-full" label="Claim My Copy" />
          </div>
        </div>
      </div>
    </section>
  );
}

export function Testimonials() {
  return (
    <section className="w-full bg-surface-white">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 md:py-24">
        <SectionHeading eyebrow="Real moms, real rest" title="Mothers across America are sleeping again" />
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure key={t.name} className="flex flex-col rounded-3xl border border-border bg-card p-8 shadow-sm">
              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="size-5 fill-star text-star" />
                ))}
              </div>
              <blockquote className="mt-5 flex-1 text-lg leading-relaxed text-foreground">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3 border-t border-border pt-5">
                <span className="flex size-11 items-center justify-center rounded-full bg-secondary font-bold text-secondary-foreground">
                  {t.name[0]}
                </span>
                <span>
                  <span className="block font-bold">{t.name}</span>
                  <span className="block text-sm text-muted-foreground">
                    {t.place} • Verified buyer
                  </span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
