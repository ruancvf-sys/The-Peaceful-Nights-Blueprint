import { Baby, Brain, Clock, Frown, Heart, Moon } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

export function AuthorBio() {
  return (
    <section className="w-full bg-surface-white">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 md:py-24">
        <div className="rounded-3xl bg-surface-sage p-8 shadow-sm sm:p-12 lg:p-16">
          <div className="mx-auto max-w-3xl">
            <Heart className="mb-6 size-10 fill-primary/15 text-primary-bright" />
            <h2 className="text-3xl font-extrabold leading-tight sm:text-4xl">
              Hi, I’m Martha, founder of Martha’s Gentle Sleep. I’ve been where you are right now.
            </h2>
            <div className="mt-8 space-y-5 text-lg leading-relaxed text-muted-foreground">
              <p>
                I remember the 3 a.m. silence broken by tiny cries. The cold coffee. The feeling that
                every other mother had it figured out — except me.
              </p>
              <p>
                I’m 55 years old, a mother and a grandmother, and for more than{" "}
                <strong className="text-foreground">20 years</strong> I’ve worked as a veteran infant
                sleep consultant, sitting beside exhausted mothers at kitchen tables,
                holding their babies, and helping them find their way back to rest.
              </p>
              <p>
                What I learned is simple:{" "}
                <strong className="text-foreground">
                  babies don’t need to cry it out to learn to sleep.
                </strong>{" "}
                They need rhythm, safety, and a parent who understands their signals. My approach is
                100% gentle and no-cry — and I’ve poured every bit of it into this Blueprint.
              </p>
            </div>
            <p className="mt-8 text-xl font-bold text-primary-bright">— With love, Martha’s Gentle Sleep</p>
          </div>
        </div>
      </div>
    </section>
  );
}

const pains = [
  {
    icon: Baby,
    title: "Crying the moment they touch the crib",
    text: "You finally get them asleep in your arms… and the second you lay them down, their eyes snap open.",
  },
  {
    icon: Clock,
    title: "Hours of rocking and nursing",
    text: "Bedtime has become a 90-minute marathon of bouncing, shushing, and feeding just to get a nap.",
  },
  {
    icon: Brain,
    title: "Confusing internet advice",
    text: "One article says cry it out, another says never. You’re drowning in opinions and none of them fit your baby.",
  },
  {
    icon: Frown,
    title: "Zombie-like exhaustion",
    text: "You can’t remember your last full night. Your patience, health, and relationship are paying the price.",
  },
];

export function PainPoints() {
  return (
    <section className="w-full bg-surface-cream">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 md:py-24">
        <SectionHeading
          eyebrow="Sound familiar?"
          title="You love your baby more than anything. But you’re running on empty."
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {pains.map(({ icon: Icon, title, text }) => (
            <div
              key={title}
              className="rounded-3xl border border-border bg-card p-7 shadow-sm transition-shadow hover:shadow-xl"
            >
              <div className="mb-5 flex size-12 items-center justify-center rounded-2xl bg-gold-soft">
                <Icon className="size-6 text-gold-foreground" />
              </div>
              <h3 className="text-lg font-bold leading-snug">{title}</h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">{text}</p>
            </div>
          ))}
        </div>
        <p className="mx-auto mt-14 flex max-w-2xl items-center justify-center gap-3 text-center text-lg font-semibold text-foreground">
          <Moon className="size-5 shrink-0 text-primary-bright" />
          It’s not your fault — and it doesn’t have to stay this way.
        </p>
      </div>
    </section>
  );
}
