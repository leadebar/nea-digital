"use client";

import Image from "next/image";
import { useState } from "react";

type Props = {
  slug: string;
  title: string;
  /** Numéros des images (public/resources/imprimables/<slug>-<n>.jpg), la première s'affiche en grand */
  order?: number[];
};

export function ImprimableGallery({ slug, title, order = [4, 1, 2, 5, 6, 3] }: Props) {
  const [active, setActive] = useState(0);

  return (
    <div>
      <Image
        src={`/resources/imprimables/${slug}-${order[active]}.jpg`}
        alt={`${title}, photo ${active + 1} sur ${order.length}`}
        width={1200}
        height={1200}
        sizes="(min-width: 768px) 50vw, 100vw"
        className="h-auto w-full rounded-[8px] shadow-line"
        priority={false}
      />
      <ul className="mt-3 grid grid-cols-6 gap-2" aria-label={`Photos de ${title}`}>
        {order.map((n, i) => (
          <li key={n}>
            <button
              type="button"
              onClick={() => setActive(i)}
              aria-label={`Afficher la photo ${i + 1}`}
              aria-current={i === active}
              className={`focus-ring block w-full overflow-hidden rounded-[4px] border transition ${
                i === active ? "border-ink" : "border-transparent opacity-60 hover:opacity-100"
              }`}
            >
              <Image
                src={`/resources/imprimables/${slug}-${n}.jpg`}
                alt=""
                width={200}
                height={200}
                className="h-auto w-full"
              />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
