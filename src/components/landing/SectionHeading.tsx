import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  className,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  className?: string;
}) {
  return (
    <div className={cn("mx-auto max-w-3xl text-center", className)}>
      {eyebrow && (
        <p className="mb-4 text-sm font-bold uppercase tracking-[0.18em] text-primary">{eyebrow}</p>
      )}
      <h2 className="text-3xl font-extrabold leading-tight sm:text-4xl lg:text-[2.75rem]">{title}</h2>
      {subtitle && <p className="mt-5 text-lg leading-relaxed text-muted-foreground">{subtitle}</p>}
    </div>
  );
}
