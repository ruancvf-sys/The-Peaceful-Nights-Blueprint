import { Check, Lock, ShieldCheck } from "lucide-react";
import ebook from "@/assets/ebook-cover.jpg";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { OFFER, formatUSD, savingsPercent } from "@/lib/offer";
import { CtaButton } from "./CtaButton";
import { SectionHeading } from "./SectionHeading";

const included = [
  { item: `${OFFER.productName} (complete e-book)`, value: 37 },
  { item: "Lifetime access & free future updates", value: 0 },
];

export function OfferBox() {
  return (
    <section id="offer" className="w-full scroll-mt-4 bg-surface-cream">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 md:py-24">
        <SectionHeading
          eyebrow="Special launch offer"
          title="Everything you need for peaceful nights"
        />
        <div className="mx-auto mt-14 max-w-5xl overflow-hidden rounded-3xl border-2 border-primary/40 bg-card shadow-elegant">
          <div className="bg-primary px-6 py-3 text-center text-sm font-bold uppercase tracking-widest text-primary-foreground">
            Save {savingsPercent(OFFER.originalPrice, OFFER.price)}% today
          </div>
          <div className="grid items-center gap-10 p-8 sm:p-12 lg:grid-cols-[1fr_1.15fr]">
            <img
              src={ebook}
              alt={`${OFFER.productName} e-book cover`}
              width={1024}
              height={1024}
              loading="lazy"
              className="mx-auto w-full max-w-sm rounded-3xl shadow-xl"
            />
            <div>
              <ul className="space-y-4">
                {included.map(({ item, value }) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-secondary">
                      <Check className="size-4 text-primary-bright" strokeWidth={3} />
                    </span>
                    <span className="flex-1 font-medium">{item}</span>
                    {value > 0 && (
                      <span className="text-sm text-strike line-through">{formatUSD(value)}</span>
                    )}
                  </li>
                ))}
              </ul>
              <div className="mt-8 rounded-2xl bg-surface-sage p-6 text-center">
                <p className="text-sm font-semibold text-muted-foreground">
                  Total value{" "}
                  <span className="text-strike line-through">{formatUSD(OFFER.originalPrice)}</span>
                </p>
                <p className="mt-1 text-6xl font-extrabold tracking-tight text-primary-bright">
                  {formatUSD(OFFER.price)}
                </p>
                <p className="mt-1 text-sm text-muted-foreground">One-time payment • No subscription</p>
              </div>
              <CtaButton
                glow
                href={OFFER.checkoutUrl}
                label="Yes! Send Me the Blueprint Now"
                className="mt-6 sm:w-full"
              />
              <p className="mt-4 flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-sm text-muted-foreground">
                <span className="inline-flex items-center gap-1.5">
                  <Lock className="size-4" /> Secure checkout
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <ShieldCheck className="size-4" /> {OFFER.guaranteeDays}-day guarantee
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Guarantee() {
  return (
    <section className="w-full bg-surface-sage">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 md:py-24">
        <div className="mx-auto flex max-w-4xl flex-col items-center gap-8 rounded-3xl border border-gold/40 bg-card p-8 text-center shadow-xl sm:p-12 md:flex-row md:text-left">
          <div className="flex size-32 shrink-0 items-center justify-center rounded-full bg-gold-soft">
            <ShieldCheck className="size-16 text-gold" strokeWidth={1.75} />
          </div>
          <div>
            <h2 className="text-3xl font-extrabold">
              {OFFER.guaranteeDays}-Day 100% Money-Back Guarantee
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              Try the Blueprint for a full {OFFER.guaranteeDays} days. If you don’t see calmer
              bedtimes and longer stretches of sleep — or simply don’t love it — email us and we’ll
              refund every cent. No questions, no hassle. You keep the guide either way.
            </p>
            <p className="mt-4 font-bold text-foreground">You have nothing to lose but sleepless nights.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

const faqs = [
  {
    q: "How do I receive the e-book?",
    a: "Instantly. Right after checkout you’ll get a download link on screen and in your email. You can read it on your phone, tablet, or computer — or print it out.",
  },
  {
    q: "Will my baby have to cry it out?",
    a: "Never. The Blueprint is a 100% gentle, no-cry approach. You stay present and responsive while your baby gradually learns to settle and connect sleep cycles.",
  },
  {
    q: "What ages is this for?",
    a: "The Blueprint is designed for babies from 0 to 12 months, with specific guidance for newborns, the 4-month regression, and the transition to longer night stretches.",
  },
  {
    q: "What if it doesn’t work for us?",
    a: `You’re covered by our ${OFFER.guaranteeDays}-day 100% money-back guarantee. Just email ${OFFER.supportEmail} within ${OFFER.guaranteeDays} days and we’ll refund you in full.`,
  },
  {
    q: "Is this a subscription?",
    a: `No. It’s a single one-time payment of ${formatUSD(OFFER.price)} with lifetime access and free updates.`,
  },
];

export function Faq() {
  return (
    <section className="w-full bg-surface-white">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 md:py-24">
        <SectionHeading eyebrow="Questions?" title="Frequently asked questions" />
        <Accordion type="single" collapsible className="mx-auto mt-12 max-w-3xl space-y-4">
          {faqs.map((f) => (
            <AccordionItem
              key={f.q}
              value={f.q}
              className="rounded-2xl border border-border bg-card px-6 shadow-sm"
            >
              <AccordionTrigger className="py-5 text-base font-bold hover:no-underline sm:text-lg">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-base leading-relaxed text-muted-foreground">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        <div className="mt-14 text-center">
          <CtaButton glow />
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="w-full border-t border-border bg-surface-cream pb-28 md:pb-0">
      <div className="mx-auto max-w-7xl space-y-4 px-5 py-12 text-center text-sm text-muted-foreground sm:px-8">
        <p className="font-bold text-foreground">{OFFER.productName}</p>
        <p>
          Support:{" "}
          <a href={`mailto:${OFFER.supportEmail}`} className="font-medium text-primary-bright hover:underline">
            {OFFER.supportEmail}
          </a>
        </p>
        <p className="mx-auto max-w-3xl text-xs leading-relaxed">
          Disclaimer: This e-book is for educational and informational purposes only and is not a
          substitute for professional medical advice. Always consult your pediatrician about your
          baby’s health, feeding, and sleep. Individual results may vary.
        </p>
        <p className="text-xs">© {new Date().getFullYear()} {OFFER.productName}. All rights reserved.</p>
      </div>
    </footer>
  );
}

export function StickyMobileCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-card/95 px-4 py-3 shadow-elegant backdrop-blur md:hidden">
      <div className="flex items-center gap-3">
        <div className="shrink-0 leading-tight">
          <p className="text-xs text-strike line-through">{formatUSD(OFFER.originalPrice)}</p>
          <p className="text-xl font-extrabold text-primary-bright">{formatUSD(OFFER.price)}</p>
        </div>
        <a
          href={OFFER.checkoutUrl}
          className="flex h-12 flex-1 items-center justify-center rounded-xl bg-primary font-bold text-primary-foreground shadow-glow transition-colors hover:bg-primary-hover"
        >
          Get Instant Access
        </a>
      </div>
    </div>
  );
}
