import { MotionDiv, reveal } from "@/components/motion";

export function SectionHeading({
  eyebrow,
  title,
  text
}: {
  eyebrow: string;
  title: string;
  text?: string;
}) {
  return (
    <MotionDiv {...reveal} className="mx-auto max-w-3xl text-center">
      <p className="eyebrow mb-4 text-xs text-taupe">{eyebrow}</p>
      <h2 className="display-title text-balance text-2xl leading-tight text-ink md:text-4xl">{title}</h2>
      {text ? <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-ink/65 md:text-lg">{text}</p> : null}
    </MotionDiv>
  );
}
