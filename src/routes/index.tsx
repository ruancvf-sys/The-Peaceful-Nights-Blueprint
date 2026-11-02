import { createFileRoute } from "@tanstack/react-router";
import { Hero, TopBanner } from "@/components/landing/Hero";
import { AuthorBio, PainPoints } from "@/components/landing/Story";
import { Inside, Testimonials } from "@/components/landing/Inside";
import { Faq, Footer, Guarantee, OfferBox, StickyMobileCta } from "@/components/landing/Offer";

const title = "The Peaceful Nights Blueprint — Gentle Baby Sleep Guide for $9.90";
const description =
  "Help your baby sleep through the night without crying it out. Martha's gentle, step-by-step e-book for babies 0–12 months. Instant download, 30-day money-back guarantee.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="w-full overflow-x-hidden">
      <TopBanner />
      <Hero />
      <AuthorBio />
      <PainPoints />
      <Inside />
      <Testimonials />
      <OfferBox />
      <Guarantee />
      <Faq />
      <Footer />
      <StickyMobileCta />
    </main>
  );
}
