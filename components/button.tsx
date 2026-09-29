import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "dark" | "light" | "cream" | "ghost";
};

export function Button({ href, children, variant = "dark" }: ButtonProps) {
  return (
    <Link
      href={href}
      className={cn(
        "focus-ring inline-flex min-h-12 items-center justify-center rounded-full px-7 text-sm font-medium transition duration-300",
        variant === "dark" && "border border-ink bg-ink text-porcelain hover:bg-sand hover:border-sand",
        variant === "light" && "border border-ink/25 bg-transparent text-ink hover:border-ink",
        variant === "cream" && "border border-ink/25 bg-porcelain text-ink hover:border-sand hover:text-sand",
        variant === "ghost" && "px-0 text-ink underline decoration-sand decoration-1 underline-offset-8 hover:text-sand"
      )}
    >
      {children}
    </Link>
  );
}
