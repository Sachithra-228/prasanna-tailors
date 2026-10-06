import Link from "next/link";
import type { AnchorHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type Props = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  children: ReactNode;
  variant?: "dark" | "light" | "outline" | "gold";
};

export function SiteButton({ href, children, className, variant = "dark", ...props }: Props) {
  const classes = cn(
    "inline-flex min-h-11 items-center justify-center gap-2 rounded-sm px-5 py-3 text-sm font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#c9a766]",
    variant === "dark" && "bg-[#15120f] text-white hover:bg-[#2a241e]",
    variant === "light" && "bg-white text-[#15120f] hover:bg-[#f2ece1]",
    variant === "outline" && "border border-white/45 text-white hover:bg-white hover:text-[#15120f]",
    variant === "gold" && "bg-[#c9a766] text-[#15120f] hover:bg-[#dfc27d]",
    className,
  );

  if (href.startsWith("http") || href.startsWith("tel:")) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} {...props}>
      {children}
    </Link>
  );
}
