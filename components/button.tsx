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
        "focus-ring inline-flex min-h-12 items-center justify-center rounded-full px-7 text-sm font-bold transition-all duration-200 hover:-translate-x-0.5 hover:-translate-y-0.5 active:translate-x-0 active:translate-y-0",
        variant === "dark" && "border-2 border-ink bg-olive text-porcelain shadow-pop hover:shadow-[8px_8px_0_0_#1B1035] active:shadow-[3px_3px_0_0_#1B1035]",
        variant === "light" && "border-2 border-ink bg-transparent text-ink shadow-pop hover:shadow-[8px_8px_0_0_#1B1035] active:shadow-[3px_3px_0_0_#1B1035] hover:bg-linen",
        variant === "cream" && "border-2 border-ink bg-porcelain text-ink shadow-pop hover:shadow-[8px_8px_0_0_#1B1035] active:shadow-[3px_3px_0_0_#1B1035] hover:bg-sand",
        variant === "ghost" && "px-0 rounded-none text-ink underline decoration-2 underline-offset-8 hover:text-olive hover:translate-x-0 hover:translate-y-0"
      )}
    >
      {children}
    </Link>
  );
}
