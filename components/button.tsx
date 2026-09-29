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
        "focus-ring inline-flex min-h-12 items-center justify-center rounded-full border-2 px-7 text-sm font-bold uppercase tracking-[0.02em] transition duration-200",
        variant === "dark" && "border-sand bg-sand text-porcelain hover:bg-transparent hover:text-sand",
        variant === "light" && "border-ink/25 bg-transparent text-ink hover:border-sand hover:text-sand",
        variant === "cream" && "border-porcelain bg-porcelain text-ink hover:border-sand hover:text-sand",
        variant === "ghost" && "border-transparent px-0 normal-case text-ink underline decoration-2 underline-offset-8 hover:text-sand"
      )}
    >
      {children}
    </Link>
  );
}
