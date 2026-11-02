import { Lock, ShieldCheck, Star } from "lucide-react";
import marthaAsset from "@/assets/martha-nursery.jpg.asset.json";
import { OFFER } from "@/lib/offer";
import { CtaButton, PriceLine } from "./CtaButton";

export function TopBanner() {
  return (
    <div className="w-full bg-banner px-4 py-3 text-center text-sm font-semibold text-banner-foreground">
      🌿 Trusted by over {OFFER.mothersHelped.toLocaleString("en-US")} exhausted mothers across the
      United States • Instant Digital Access
    </div>
  );
}

export function Hero() {
  return (
    <section className="w-full bg-surface-cream">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-14 sm:px-8 md:py-20 lg:grid-cols-2 lg:gap-16 lg:py-24">
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold-soft px-4 py-1.5 text-sm font-semibold text-gold-foreground">
            <span className="flex">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="size-4 fill-star text-star" />
              ))}
            </span>
            4.9/5 from 1,200+ moms
          </div>

          <h1 className="text-4xl font-extrabold leading-[1.1] text-foreground sm:text-5xl lg:text-[3.4rem]">
            <span className="text-primary">Help Your Baby Sleep Through the Night and in the Crib</span>{" "}
            — Without Tears, Stress, or Guilt.
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
            Discover <em className="font-semibold text-foreground">{OFFER.productName}</em> — a
            gentle, step-by-step framework from Martha’s Gentle Sleep, created by a 55-year-old veteran
            infant sleep consultant, mother, and grandmother. 100% gentle, no-cry — no harsh sleep training. Just pure, science-backed rest for your entire family.
          </p>

          <div className="mt-8 flex flex-col gap-4">
            <PriceLine />
            <CtaButton glow />
            <p className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm font-medium text-muted-foreground">
              <span className="inline-flex items-center gap-1.5">
                <Lock className="size-4 text-primary" /> Instant Download
              </span>
              <span className="inline-flex items-center gap-1.5">
                <ShieldCheck className="size-4 text-primary" /> {OFFER.guaranteeDays}-Day 100%
                Money-Back Guarantee
              </span>
            </p>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
          <div className="absolute -inset-4 -z-0 rounded-[2.5rem] bg-sage-soft" aria-hidden />
          <img
            src={marthaAsset.url}
            alt="Martha of Martha’s Gentle Sleep, a smiling grandmother and gentle sleep guide, in her sunlit living room"
            width={1024}
            height={1280}
            className="relative aspect-[4/5] w-full rounded-3xl object-cover object-[70%_40%] shadow-elegant"
          />
          <div className="absolute -bottom-6 left-4 right-4 rounded-2xl bg-card p-4 shadow-xl sm:left-auto sm:right-6 sm:w-72">
            <p className="text-sm font-bold text-foreground">Martha’s Gentle Sleep</p>
            <p className="text-sm text-muted-foreground">Infant sleep consultant, mother & grandmother</p>
          </div>
        </div>
      </div>
    </section>
  );
}
