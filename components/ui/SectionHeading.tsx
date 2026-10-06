import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  text,
  invert,
}: {
  eyebrow?: string;
  title: string;
  text?: string;
  invert?: boolean;
}) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      {eyebrow ? (
        <p className={cn("mb-4 text-xs font-semibold uppercase tracking-[0.26em]", invert ? "text-[#c9a766]" : "text-[#8a6d35]")}>
          {eyebrow}
        </p>
      ) : null}
      <h2 className={cn("font-serif text-3xl leading-tight sm:text-5xl", invert ? "text-white" : "text-[#15120f]")}>
        {title}
      </h2>
      {text ? <p className={cn("mt-5 text-base leading-8", invert ? "text-white/72" : "text-[#6f665a]")}>{text}</p> : null}
    </div>
  );
}
