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
        "focus-ring inline-flex min-h-12 items-center justify-center rounded-[4px] px-6 text-sm font-medium transition duration-300",
        variant === "dark" && "border border-ink bg-ink text-porcelain hover:bg-olive hover:border-olive",
        variant === "light" && "border border-ink/14 bg-transparent text-ink hover:bg-linen",
        variant === "cream" && "border border-porcelain bg-porcelain text-ink hover:border-sand hover:bg-sand",
        variant === "ghost" && "px-0 text-ink underline underline-offset-8 hover:text-olive"
      )}
    >
      {children}
    </Link>
  );
}
