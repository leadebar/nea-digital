import Image from "next/image";
import { cn } from "@/lib/utils";

type BrandLogoProps = {
  tone?: "dark" | "sand";
  lockup?: "horizontal" | "stacked";
  className?: string;
};

const logoConfig = {
  dark: {
    horizontal: {
      src: "/brand/nea-logo-black-horizontal-transparent.png",
      width: 351,
      height: 126
    },
    stacked: {
      src: "/brand/nea-logo-black-stacked-transparent.png",
      width: 306,
      height: 153
    }
  },
  sand: {
    horizontal: {
      src: "/brand/nea-logo-sand-horizontal-transparent.png",
      width: 291,
      height: 102
    },
    stacked: {
      src: "/brand/nea-logo-sand-stacked-transparent.png",
      width: 245,
      height: 124
    }
  }
};

export function BrandLogo({ tone = "dark", lockup = "horizontal", className }: BrandLogoProps) {
  const logo = logoConfig[tone][lockup];

  return (
    <Image
      src={logo.src}
      alt="Néa Digital"
      width={logo.width}
      height={logo.height}
      priority={tone === "dark"}
      className={cn("w-auto object-contain", className ?? "h-9")}
    />
  );
}
