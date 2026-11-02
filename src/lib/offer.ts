// Single source of truth for the offer shown across the sales page.
export const OFFER = {
  productName: "The Peaceful Nights Blueprint",
  price: 9.9,
  originalPrice: 47,
  guaranteeDays: 30,
  mothersHelped: 8400,
  supportEmail: "support@peacefulnightsblueprint.com",
  // Replace with the real checkout link (Stripe, Gumroad, Hotmart, etc.).
  checkoutUrl: "#offer",
} as const;

export function formatUSD(value: number): string {
  return `$${value.toFixed(2)}`;
}

export function savingsPercent(original: number, price: number): number {
  return Math.round(((original - price) / original) * 100);
}
