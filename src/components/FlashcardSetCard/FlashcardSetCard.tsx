import { cn } from "~/utils";

import { Link } from "react-router";

type FlashcardSetCardProps = {
  author: string;
  cardsCount: number;
  className?: string;
  title: string;
  to?: string;
  visibility?: string;
};

export function FlashcardSetCard({
  author,
  cardsCount,
  className = "",
  title,
  to,
  visibility = "public",
}: FlashcardSetCardProps) {
  const card = (
    <article
      className={cn(
        "flashcard-set-card grid grid-items-center min-w-0 cursor-pointer grid-rows-[auto_1fr_auto] overflow-hidden rounded-xl border-2 border-transparent bg-sky-700/60 px-6 py-4 text-stone-700 shadow-md shadow-sky-950/15",
        className,
      )}
    >
      <div className="grid min-w-0 gap-1.5">
        <h2 className="truncate text-2xl font-bold leading-none">{title}</h2>
        <p className="truncate text-base leading-tight text-white">
          Карточек: {cardsCount}
        </p>
      </div>

      <div className="mt-1 flex min-w-0 items-end justify-between gap-4 self-end text-base leading-tight">
        <span className="shrink-0 truncate">{visibility}</span>
        <span className="min-w-0 truncate text-right">Автор: {author}</span>
      </div>
    </article>
  );

  if (to) {
    return (
      <Link className="block min-w-0 text-inherit no-underline" to={to}>
        {card}
      </Link>
    );
  }

  return card;
}
