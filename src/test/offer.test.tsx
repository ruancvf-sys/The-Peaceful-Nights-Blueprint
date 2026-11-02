import { describe, expect, it } from "vitest";
import { OFFER, formatUSD, savingsPercent } from "@/lib/offer";

describe("offer", () => {
  it("sells the e-book for $9.90", () => {
    expect(formatUSD(OFFER.price)).toBe("$9.90");
  });

  it("shows the original price as $47.00", () => {
    expect(formatUSD(OFFER.originalPrice)).toBe("$47.00");
  });

  it("offers a 30-day money-back guarantee", () => {
    expect(OFFER.guaranteeDays).toBe(30);
  });

  it("computes the discount from $47 to $9.90 as 79%", () => {
    expect(savingsPercent(OFFER.originalPrice, OFFER.price)).toBe(79);
  });
});
