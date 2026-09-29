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
        "focus-ring inline-flex min-h-12 items-center justify-center rounded-[2px] px-6 font-editorial text-sm font-medium transition duration-200",
        variant === "dark" && "bg-sand text-porcelain hover:shadow-glow",
        variant === "light" && "border border-ink/20 bg-transparent text-ink hover:border-olive hover:text-olive",
        variant === "cream" && "border border-sand/60 bg-transparent text-sand hover:bg-sand hover:text-porcelain",
        variant === "ghost" && "px-0 text-ink underline decoration-sand underline-offset-8 hover:text-olive"
      )}
    >
      {children}
    </Link>
  );
}
