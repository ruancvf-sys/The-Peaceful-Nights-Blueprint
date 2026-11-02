import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { OFFER, formatUSD } from "@/lib/offer";
import { cn } from "@/lib/utils";

type Props = {
  className?: string;
  glow?: boolean;
  href?: string;
  label?: string;
};

export function CtaButton({ className, glow = false, href = "#offer", label }: Props) {
  return (
    <Button asChild variant={glow ? "glow" : "cta"} size="xl" className={cn("w-full sm:w-auto", className)}>
      <a href={href}>
        {label ?? `Get Instant Access for Just ${formatUSD(OFFER.price)}`}
        <ArrowRight />
      </a>
    </Button>
  );
}

export function PriceLine({ className }: { className?: string }) {
  return (
    <p className={cn("flex items-baseline gap-3", className)}>
      <span className="text-lg text-strike line-through decoration-2">
        {formatUSD(OFFER.originalPrice)}
      </span>
      <span className="text-2xl font-extrabold text-primary">{formatUSD(OFFER.price)}</span>
      <span className="rounded-full bg-gold-soft px-3 py-1 text-xs font-bold uppercase tracking-wide text-gold-foreground">
        Today only
      </span>
    </p>
  );
}
