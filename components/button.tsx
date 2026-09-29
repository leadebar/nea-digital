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
        "focus-ring inline-flex min-h-12 items-center justify-center border px-7 text-xs font-medium uppercase tracking-[0.12em] transition duration-300",
        variant === "dark" && "border-ink bg-ink text-porcelain hover:bg-sand hover:border-sand",
        variant === "light" && "border-ink/30 bg-transparent text-ink hover:border-sand hover:text-sand",
        variant === "cream" && "border-porcelain bg-transparent text-porcelain hover:bg-porcelain hover:text-ink",
        variant === "ghost" && "border-transparent px-0 normal-case tracking-normal text-ink underline underline-offset-8 hover:text-sand"
      )}
    >
      {children}
    </Link>
  );
}
